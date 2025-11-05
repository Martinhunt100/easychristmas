import { MetadataRoute } from 'next';
import { CATALOG } from '@/lib/catalog';


export default function sitemap(): MetadataRoute.Sitemap {
const base = 'https://easychristmas.shop';
const staticPaths = ['', '/products', '/bundles', '/teachers', '/about', '/faq', '/legal/terms', '/legal/privacy', '/legal/license', '/legal/refunds']
.map(p => ({ url: base + p, lastModified: new Date() }));
const productPaths = CATALOG.map(p => ({ url: `${base}/product/${p.slug}`, lastModified: new Date() }));
return [...staticPaths, ...productPaths];
}
