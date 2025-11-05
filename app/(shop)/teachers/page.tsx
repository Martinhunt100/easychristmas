import ProductCard from '@/components/ProductCard';
import { CATALOG } from '@/lib/catalog';


export default function Teachers() {
const list = CATALOG.filter(p => p.category === 'teachers');
return (
<div className="space-y-6">
<h1 className="font-serif text-3xl">Teacher & Classroom</h1>
<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
{list.map(item => <ProductCard key={item.slug} sku={item} />)}
</div>
</div>
);
}
