import Stripe from 'stripe';
import { findSKU } from '@/lib/catalog';

export default async function Downloads({ params }: { params: { session: string } }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });
  const s = await stripe.checkout.sessions.retrieve(params.session, { expand: ['line_items'] });
  const slug = (s.metadata?.slug ?? '') as string;
  const sku = findSKU(slug);
  if (!sku) return <div>Download link unavailable.</div>;

  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl">Downloads: {sku.name}</h1>
      {sku.files.length === 0 && (
        <p className="opacity-80">Downloads are coming soon. You will also receive an email with links.</p>
      )}
      <ul className="list-disc ml-6">
        {sku.files.map((f) => (
          <li key={f.path}><a className="no-underline" href={f.path} target="_blank" rel="noreferrer">{f.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
