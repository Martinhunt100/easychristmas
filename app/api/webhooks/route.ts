// app/api/webhooks/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { findSKU } from '@/lib/catalog';
import { ReceiptEmail } from '@/lib/email';

export const runtime = 'nodejs'; // Important: easier for Stripe signature verification

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  let event: Stripe.Event;

  // 1) Verify Stripe signature
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // 2) Handle event(s)
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Pull metadata we set in /api/checkout
    const slug = (session.metadata?.slug ?? '') as string;
    const sku = findSKU(slug);

    // Customer email can be on session or customer_details
    const toEmail =
      (session.customer_details?.email ||
        (session.customer?.toString?.() || '').includes('@') // rare case
          ? (session.customer as unknown as string)
          : '') ||
      (session.customer_email ?? '');

    // Safety: If we somehow don't have an email, bail (no-op)
    if (!toEmail) {
      return NextResponse.json({ ok: true, skipped: 'no-email' });
    }

    // Build email props
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://easychristmas.shop';
    const productName =
      sku?.name ||
      session?.line_items?.data?.[0]?.description ||
      'Your EasyChristmas download';
    const files = sku?.files || [];

    // 3) Send email with Resend
    try {
      const { id } = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Easy Christmas <hello@easychristmas.shop>',
        to: toEmail,
        reply_to: process.env.REPLY_TO || 'support@easychristmas.shop',
        subject: `Your download is ready: ${productName}`,
        react: ReceiptEmail({
          customerEmail: toEmail,
          productName,
          orderId: session.id,
          siteUrl,
          files,
        }),
        // Prevent duplicates if Stripe retries:
        idempotencyKey: session.id,
      });

      // Optional: log id, or persist in a DB if you add one later
      // console.log('Resend message id', id);
    } catch (e: any) {
      // If email fails, you can still return 200 so Stripe does not retry forever
      // but you might want to log it to an error tracker
      return NextResponse.json({ ok: false, email_error: e?.message ?? 'unknown' }, { status: 200 });
    }
  }

  // 4) Acknowledge receipt to Stripe
  return NextResponse.json({ received: true });
}

// Optional: GET for quick health-check
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
