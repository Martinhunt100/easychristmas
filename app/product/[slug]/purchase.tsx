'use client';
import { useState } from 'react';


export default function CheckoutButton({ slug }: { slug: string }) {
const [loading, setLoading] = useState(false);
return (
<button className="btn mt-6" disabled={loading} onClick={async () => {
setLoading(true);
const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug }) });
const { url } = await res.json();
window.location.href = url;
}}>
{loading ? 'Redirecting…' : 'Buy Now'}
</button>
);
}
