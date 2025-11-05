# EasyChristmas.shop — Vercel Deploy

## 1) Create GitHub repo & push
- Create a new repo `easychristmas-shop` and add these files.

## 2) Vercel project
- Import the repo in Vercel → Framework: **Next.js**
- Environment variables (Production & Preview):
  - `NEXT_PUBLIC_SITE_URL` = https://easychristmas.shop
  - `STRIPE_SECRET_KEY` = your live key

## 3) Stripe webhook
- In Stripe Dashboard → Developers → Webhooks → + Add endpoint
  - Endpoint URL: `https://easychristmas.shop/api/webhooks`
  - Events: `checkout.session.completed`
  - Copy `Signing secret` → set `STRIPE_WEBHOOK_SECRET` in Vercel

## 4) DNS
- Domain managed by Cloudflare → point root + www to Vercel per docs

## 5) Upload files
- Host your ZIPs/PDFs in Vercel Blob, S3, or Dropbox; paste URLs in `CATALOG` → `files: []`.

## 6) Test payments
- Use Stripe test mode first. Complete a checkout and access `/success` and `/downloads/<session_id>`.

## 7) Go live
- Switch to live keys, enable real cards, and announce your launch.

> Later we can swap ad-hoc `price_data` for real Stripe **Price** objects or Payment Links.
