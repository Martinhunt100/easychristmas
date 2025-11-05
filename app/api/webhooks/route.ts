import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';


export const runtime = 'edge';


export async function POST(req: NextRequest) {
const body = await req.text();
const signature = req.headers.get('stripe-signature')!;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;


let event: Stripe.Event;
try {
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });
event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
} catch (err: any) {
return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
}


if (event.type === 'checkout.session.completed') {
const session = event.data.object as Stripe.Checkout.Session;
// TODO: issue license & email download links. Optionally store in DB.
}


return NextResponse.json({ received: true });
}
