import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
title: 'Easy Christmas — Instant Downloads',
description: 'Printable tags, cards, SVGs, classroom packs and more.'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<header className="sticky top-0 z-50 bg-warmCream/90 backdrop-blur border-b border-goldFlame/30">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<a href="/" className="flex items-center gap-3 no-underline">
{/* Replace with your SVG/PNG logo */}
<div className="h-8 w-8 rounded-full bg-goldFlame" />
<span className="font-serif text-xl text-choco">EasyChristmas.shop</span>
</a>
<nav className="flex gap-6 text-sm">
<a href="/products" className="no-underline">Shop All</a>
<a href="/bundles" className="no-underline">Bundles</a>
<a href="/teachers" className="no-underline">Teachers</a>
</nav>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
<footer className="mt-16 border-t border-goldFlame/30">
<div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-80">
<p>© {new Date().getFullYear()} Easy Christmas • Instant download • Personal & Small Commercial Licenses</p>
</div>
</footer>
</body>
</html>
);
}
