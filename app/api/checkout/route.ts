import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { findSKU } from '@/lib/catalog';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });


export async function POST(req: Request) {
const { slug } = await req.json();
const sku = findSKU(slug);
if (!sku) return NextResponse.json({ error: 'SKU not found' }, { status: 404 });


const session = await stripe.checkout.sessions.create({
mode: 'payment',
payment_method_types: ['card'],
line_items: [
{
price_data: {
currency: 'usd',
unit_amount: sku.price,
product_data: {
name: sku.name,
description: sku.description,
metadata: { slug: sku.slug, stripe_product_id: sku.stripeProductId ?? '' }
}
},
quantity: 1
}
],
metadata: { slug: sku.slug },
success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${sku.slug}`
});


return NextResponse.json({ url: session.url });
}
