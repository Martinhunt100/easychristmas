import ProductCard from '@/components/ProductCard';
import { CATALOG } from '@/lib/catalog';


export default function Home() {
return (
<div className="space-y-10">
<section className="rounded-2xl bg-white p-8 ring-1 ring-goldFlame/20">
<h1 className="font-serif text-4xl md:text-5xl text-choco">Instantly Download Your Christmas Magic</h1>
<p className="mt-3 max-w-2xl">Printable gift tags, photo card templates, SVG bundles, classroom packs, and more — all ready in minutes.</p>
<a href="#grid" className="btn mt-6 inline-block">Shop Bundles Now</a>
</section>


<section id="grid" className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
{CATALOG.map(item => <ProductCard key={item.slug} sku={item} />)}
</section>
</div>
);
}
