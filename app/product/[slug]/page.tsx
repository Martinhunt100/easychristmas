import { findSKU } from '@/lib/catalog';
import CheckoutButton from './purchase';


export default function ProductPage({ params }: { params: { slug: string } }) {
const sku = findSKU(params.slug);
if (!sku) return <div>Not found</div>;
return (
<div className="grid md:grid-cols-2 gap-8">
<div className="aspect-square bg-warmCream/60 rounded-xl" />
<div>
<h1 className="font-serif text-3xl text-choco">{sku.name}</h1>
<p className="mt-2 opacity-80">{sku.description}</p>
<p className="mt-4 text-2xl font-semibold">${(sku.price/100).toFixed(2)}</p>
<CheckoutButton slug={sku.slug} />
<ul className="mt-6 text-sm list-disc ml-5 opacity-80">
<li>Instant download after purchase</li>
<li>Personal & Small Commercial licenses</li>
<li>US Letter + popular sizes</li>
</ul>
</div>
</div>
);
}
