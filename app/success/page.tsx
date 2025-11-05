import Stripe from 'stripe';

export default async function Success({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id;
  if (!sessionId) return <div>Success! Check your email for downloads.</div>;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items'] });
  const slug = (session.metadata?.slug ?? '') as string;

  return (
    <div className="card">
      <h1 className="font-serif text-3xl mb-2">Thank you! 🎄</h1>
      <p className="mb-4">Your purchase is confirmed. Click below to download your files.</p>
      <a href={`/downloads/${sessionId}`} className="btn">Access Downloads</a>
      <p className="mt-6 text-sm opacity-70">Order: {sessionId.slice(0, 20)}… • Product: {slug}</p>
    </div>
  );
}
