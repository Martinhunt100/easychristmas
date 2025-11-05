// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EasyChristmas.shop — Instant Downloads',
  description:
    'Printable gift tags, photo card templates, SVG bundles, classroom packs, and more — all ready in minutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-warmCream/90 backdrop-blur border-b border-goldFlame/30">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 no-underline">
              {/* Replace /public/logo.png with your exported transparent PNG */}
              <img
                src="/logo.png"
                alt="Easy Christmas"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-serif text-xl text-choco">EasyChristmas.shop</span>
            </a>

            <nav className="flex gap-6 text-sm">
              <a href="/products" className="no-underline">Shop All</a>
              <a href="/bundles" className="no-underline">Bundles</a>
              <a href="/teachers" className="no-underline">Teachers</a>
              <a href="/about" className="no-underline">About</a>
              <a href="/faq" className="no-underline">FAQ</a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-goldFlame/30">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-90">
            <p>© {new Date().getFullYear()} Easy Christmas • Instant download • Personal & Small Commercial Licenses</p>

            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a href="/about">About</a>
              <a href="/faq">FAQ</a>
              <a href="/legal/license">License</a>
              <a href="/legal/terms">Terms</a>
              <a href="/legal/privacy">Privacy</a>
              <a href="/legal/refunds">Refunds</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
