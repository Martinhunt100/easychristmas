import Link from 'next/link';
import type { SKU } from '@/lib/catalog';


export default function ProductCard({ sku }: { sku: SKU }) {
return (
<div className="card flex flex-col gap-3">
<div className="aspect-square bg-warmCream/60 rounded-xl flex items-center justify-center text-hollyGreen">Preview</div>
<h3 className="font-serif text-lg text-choco">{sku.name}</h3>
<p className="text-sm opacity-80 line-clamp-2">{sku.description}</p>
<div className="flex items-center justify-between pt-2">
<span className="font-semibold">${(sku.price/100).toFixed(2)}</span>
<Link className="btn" href={`/product/${sku.slug}`}>View</Link>
</div>
</div>
);
}
