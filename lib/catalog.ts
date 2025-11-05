export type SKU = {
  slug: string;
  name: string;
  description: string;
  price: number; // in USD cents
  stripeProductId?: string; // metadata only
  files: { label: string; path: string }[]; // fill with your storage URLs
  tags: string[];
  category: 'printables' | 'cards' | 'svgs' | 'teachers' | 'bundles' | 'social' | 'creator';
};

// Stripe Product IDs supplied by you (used for metadata + reporting)
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
  'xmas-all-access': 'prod_TMoHLvpgxxUu2V'
} as const;

export const CATALOG: SKU[] = [
  {
    slug: 'xmas-tags-nordic',
    name: 'Nordic Gift Tags (Printable)',
    description: 'Minimal tags in US Letter + 5×7 sheets. Print at home and wrap faster.',
    price: 399,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-tags-nordic'],
    files: [],
    tags: ['gift tags','printable'],
    category: 'printables'
  },
  {
    slug: 'xmas-scavenger',
    name: 'Christmas Scavenger Hunt',
    description: 'Kid‑friendly scavenger hunt PDFs (US Letter).',
    price: 499,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-scavenger'],
    files: [],
    tags: ['kids','family'],
    category: 'printables'
  },
  {
    slug: 'xmas-photo-card-pack',
    name: 'Family Photo Card Template Pack (Canva + PSD)',
    description: 'Create pro holiday cards in minutes. 5×7 format, bleed safe.',
    price: 1200,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-photo-card-pack'],
    files: [],
    tags: ['cards','canva'],
    category: 'cards'
  },
  {
    slug: 'xmas-crafter-bundle',
    name: 'Crafter’s Christmas Kit (SVG Bundle, Commercial)',
    description: '30 festive SVGs for Cricut/Silhouette with small‑biz license.',
    price: 2400,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-crafter-bundle'],
    files: [],
    tags: ['svg','cricut'],
    category: 'svgs'
  },
  {
    slug: 'xmas-classroom-mega',
    name: 'Christmas Classroom Mega Pack',
    description: 'Worksheets, coloring, certificates — ready for K–3.',
    price: 1499,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-classroom-mega'],
    files: [],
    tags: ['teacher','classroom'],
    category: 'teachers'
  },
  {
    slug: 'xmas-social-pack',
    name: 'Holiday Promo Pack (Social Templates)',
    description: '30 Canva templates for promos, posts & stories.',
    price: 1200,
    stripeProductId: STRIPE_PRODUCT_IDS['xmas-social-pack'],
    files: [],
    tags: ['canva','social'],
    category: 'social'
  },
  { slug: 'xmas-creator-A', name: 'Commercial Creator Bundle A', description: 'SVGs + 1 Display Font + Mockups.', price: 2900, stripeProductId: STRIPE_PRODUCT_IDS['xmas-creator-A'], files: [], tags: ['creator'], category: 'creator' },
  { slug: 'xmas-creator-B', name: 'Commercial Creator Bundle B', description: 'All SVGs + Mug Wraps + Social Templates.', price: 2900, stripeProductId: STRIPE_PRODUCT_IDS['xmas-creator-B'], files: [], tags: ['creator'], category: 'creator' },
  { slug: 'xmas-agency-upgrade', name: 'Agency License Upgrade', description: 'Upgrade to agency terms (no POD resale).', price: 1900, stripeProductId: STRIPE_PRODUCT_IDS['xmas-agency-upgrade'], files: [], tags: ['license'], category: 'bundles' },
  { slug: 'xmas-all-access', name: 'All‑Access Christmas Pass', description: 'Everything in one bundle with commercial rights (limit 250 end products).', price: 4900, stripeProductId: STRIPE_PRODUCT_IDS['xmas-all-access'], files: [], tags: ['bundle'], category: 'bundles' }
];

export const findSKU = (slug: string) => CATALOG.find(p => p.slug === slug);
