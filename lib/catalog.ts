// lib/catalog.ts
export type SKU = {
  slug: string;
  name: string;
  description: string;
  price: number; // USD cents
  stripeProductId?: string; // for metadata/reporting
  files: { label: string; path: string }[]; // replace YOUR-STORAGE with real URLs
  tags: string[];
  category:
    | 'printables'
    | 'cards'
    | 'svgs'
    | 'teachers'
    | 'bundles'
    | 'social'
    | 'creator';
};

// Stripe Product IDs (from your dashboard)
export const STRIPE_PRODUCT_IDS = {
  'xmas-tags-nordic': 'prod_TMoAsyxvRZdpyE',
  'xmas-scavenger': 'prod_TMoCY57GzWYHqO',
  'xmas-photo-card-pack': 'prod_TMoD8t1WRP7IAJ',
  'xmas-crafter-bundle': 'prod_TMoDuvwpuykHo3',
  'xmas-classroom-mega': 'prod_TMoEipr8C066LJ',
  'xmas-social-pack': 'prod_TMoEGCxokyZcvd',
  'xmas-creator-A': 'prod_TMoF4SkLkkNtRV',
  'xmas-creator-B': 'prod_TMoFqCqgsViDaC',
  'xmas-agency-upgrade': 'prod_TMoGUR2D5cdIaY',
  'xmas-all-access': 'prod_TMoHLvpgxxUu2V',
} as const;

export const CATALOG: SKU[] = [
  {
    slug: 'xmas-tags-nordic',
    name: 'Nordic Gift Tags (Printable)',
    description:
      'Minimal, cozy tags in US Letter sheets + 5×7. Print at home and wrap faster.',
    price: 399,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-tags-nordic'],
    files: [
      { label: 'US Letter PDF', path: 'https://YOUR-STORAGE/xmas-tags-nordic/us-letter.pdf' },
      { label: '5×7 PDF', path: 'https://YOUR-STORAGE/xmas-tags-nordic/5x7.pdf' },
      { label: 'PNG Sheet', path: 'https://YOUR-STORAGE/xmas-tags-nordic/tags.png' },
      { label: 'Readme + License', path: 'https://YOUR-STORAGE/xmas-tags-nordic/readme-license.pdf' },
    ],
    tags: ['gift tags', 'printable', 'nordic'],
    category: 'printables',
  },
  {
    slug: 'xmas-scavenger',
    name: 'Christmas Scavenger Hunt',
    description:
      'Kid-friendly scavenger hunt PDFs (US Letter) with festive icons and simple rules.',
    price: 499,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-scavenger'],
    files: [
      { label: 'Scavenger Hunt (PDF, US Letter)', path: 'https://YOUR-STORAGE/xmas-scavenger/hunt-us-letter.pdf' },
      { label: 'Printable Cards (PDF)', path: 'https://YOUR-STORAGE/xmas-scavenger/cards.pdf' },
      { label: 'Readme + License', path: 'https://YOUR-STORAGE/xmas-scavenger/readme-license.pdf' },
    ],
    tags: ['kids', 'family', 'printable'],
    category: 'printables',
  },
  {
    slug: 'xmas-photo-card-pack',
    name: 'Family Photo Card Template Pack (Canva + PSD)',
    description:
      'Create pro holiday cards in minutes. 5×7 format with bleed-safe margins.',
    price: 1200,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-photo-card-pack'],
    files: [
      { label: 'Canva Template Link', path: 'https://YOUR-STORAGE/xmas-photo-card-pack/canva-link.txt' },
      { label: 'Photoshop PSD', path: 'https://YOUR-STORAGE/xmas-photo-card-pack/card-template.psd' },
      { label: 'Readme + License', path: 'https://YOUR-STORAGE/xmas-photo-card-pack/readme-license.pdf' },
    ],
    tags: ['cards', 'canva', 'photo'],
    category: 'cards',
  },
  {
    slug: 'xmas-crafter-bundle',
    name: 'Crafter’s Christmas Kit (SVG Bundle, Commercial)',
    description:
      '30 festive SVGs for Cricut/Silhouette with small-business commercial license.',
    price: 2400,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-crafter-bundle'],
    files: [
      { label: 'SVG Bundle (ZIP)', path: 'https://YOUR-STORAGE/xmas-crafter-bundle/svg-bundle.zip' },
      { label: 'EPS (ZIP)', path: 'https://YOUR-STORAGE/xmas-crafter-bundle/eps-bundle.zip' },
      { label: 'Mockups (ZIP)', path: 'https://YOUR-STORAGE/xmas-crafter-bundle/mockups.zip' },
      { label: 'License (PDF)', path: 'https://YOUR-STORAGE/xmas-crafter-bundle/license.pdf' },
    ],
    tags: ['svg', 'cricut', 'commercial'],
    category: 'svgs',
  },
  {
    slug: 'xmas-classroom-mega',
    name: 'Christmas Classroom Mega Pack',
    description:
      'Worksheets, coloring pages, bingo, certificates — ready for K–3 teachers.',
    price: 1499,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-classroom-mega'],
    files: [
      { label: 'Teacher Pack (ZIP)', path: 'https://YOUR-STORAGE/xmas-classroom-mega/classroom-pack.zip' },
      { label: 'Coloring Pages (PDF)', path: 'https://YOUR-STORAGE/xmas-classroom-mega/coloring.pdf' },
      { label: 'Readme + License', path: 'https://YOUR-STORAGE/xmas-classroom-mega/readme-license.pdf' },
    ],
    tags: ['teacher', 'classroom', 'worksheets'],
    category: 'teachers',
  },
  {
    slug: 'xmas-social-pack',
    name: 'Holiday Promo Pack (Social Templates)',
    description:
      '30 Canva templates for posts, stories, and promos — designed for US small biz.',
    price: 1200,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-social-pack'],
    files: [
      { label: 'Canva Template Link', path: 'https://YOUR-STORAGE/xmas-social-pack/canva-link.txt' },
      { label: 'Story Covers (PNG, ZIP)', path: 'https://YOUR-STORAGE/xmas-social-pack/story-covers.zip' },
      { label: 'Readme + License', path: 'https://YOUR-STORAGE/xmas-social-pack/readme-license.pdf' },
    ],
    tags: ['canva', 'social', 'templates'],
    category: 'social',
  },
  {
    slug: 'xmas-creator-A',
    name: 'Commercial Creator Bundle A',
    description: 'SVGs + 1 Display Font + Mockups (commercial use).',
    price: 2900,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-creator-A'],
    files: [
      { label: 'SVGs (ZIP)', path: 'https://YOUR-STORAGE/xmas-creator-A/svgs.zip' },
      { label: 'Display Font (OTF)', path: 'https://YOUR-STORAGE/xmas-creator-A/display-font.otf' },
      { label: 'Mockups (ZIP)', path: 'https://YOUR-STORAGE/xmas-creator-A/mockups.zip' },
      { label: 'License (PDF)', path: 'https://YOUR-STORAGE/xmas-creator-A/license.pdf' },
    ],
    tags: ['creator', 'font', 'svg'],
    category: 'creator',
  },
  {
    slug: 'xmas-creator-B',
    name: 'Commercial Creator Bundle B',
    description: 'All SVGs + Mug Wraps + Social Templates (commercial use).',
    price: 2900,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-creator-B'],
    files: [
      { label: 'All SVGs (ZIP)', path: 'https://YOUR-STORAGE/xmas-creator-B/all-svgs.zip' },
      { label: 'Mug Wraps (ZIP)', path: 'https://YOUR-STORAGE/xmas-creator-B/mug-wraps.zip' },
      { label: 'Social Templates (Canva Link)', path: 'https://YOUR-STORAGE/xmas-creator-B/canva-link.txt' },
      { label: 'License (PDF)', path: 'https://YOUR-STORAGE/xmas-creator-B/license.pdf' },
    ],
    tags: ['creator', 'mug', 'social'],
    category: 'creator',
  },
  {
    slug: 'xmas-agency-upgrade',
    name: 'Agency License Upgrade',
    description:
      'Upgrade to agency terms for client work (no resale/sub-licensing of digital files).',
    price: 1900,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-agency-upgrade'],
    files: [
      { label: 'Agency License (PDF)', path: 'https://YOUR-STORAGE/xmas-agency-upgrade/agency-license.pdf' },
    ],
    tags: ['license', 'agency'],
    category: 'bundles',
  },
  {
    slug: 'xmas-all-access',
    name: 'All-Access Christmas Pass',
    description:
      'Everything in one bundle with commercial rights (limit 250 end products).',
    price: 4900,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-all-access'],
    files: [
      { label: 'Master Bundle (ZIP)', path: 'https://YOUR-STORAGE/xmas-all-access/all-access.zip' },
      { label: 'License (PDF)', path: 'https://YOUR-STORAGE/xmas-all-access/license.pdf' },
      { label: 'Readme (PDF)', path: 'https://YOUR-STORAGE/xmas-all-access/readme.pdf' },
    ],
    tags: ['bundle', 'commercial'],
    category: 'bundles',
  },
];

export const findSKU = (slug: string) => CATALOG.find((p) => p.slug === slug);
