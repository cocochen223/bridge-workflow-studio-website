# Bridge Workflow Studio Website

Production-ready bilingual website for Bridge Workflow Studio.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- English and Simplified Chinese routes: `/en` and `/zh`
- SEO metadata, sitemap, robots.txt, and structured business metadata
- Static contact and consultation form UI with email-based follow-up

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/zh`.

## Build

```bash
pnpm build
pnpm start
```

## Vercel Deployment

1. Push this folder to a GitHub repository.
2. In Vercel, create a new project and import the repository.
3. Use the default Next.js settings.
4. Set the production domain to `bridgeworkflowstudio.com`.
5. Add `bridgeworkflowstudio.ca` as a secondary domain.
6. Confirm Vercel issues SSL certificates for both domains.

## Namecheap DNS Setup

For `bridgeworkflowstudio.com`:

- Add an `A` record for `@` pointing to Vercel's apex IP: `76.76.21.21`.
- Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
- Remove conflicting parked-domain or forwarding records.

For `bridgeworkflowstudio.ca`:

- Add the domain to the same Vercel project.
- Add an `A` record for `@` pointing to `76.76.21.21`.
- Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
- Keep this domain as a redirect-only brand protection domain.

## Domain Redirect

The app includes a permanent redirect rule in `next.config.ts`:

- `bridgeworkflowstudio.ca/*` redirects to `https://bridgeworkflowstudio.com/*`

In Vercel, also set `bridgeworkflowstudio.com` as the primary production domain. That gives the cleanest canonical domain behavior.

## SSL

Vercel automatically provisions SSL after DNS records are correct. In Vercel, wait until both domains show valid certificates before announcing the site.

## SEO

Canonical site: `https://bridgeworkflowstudio.com`

Included:

- Open Graph tags
- Twitter card metadata
- Sitemap: `/sitemap.xml`
- Robots file: `/robots.txt`
- Structured metadata for a professional service business
- Bilingual URL structure

## Content Notes

The funding and digital adoption copy is intentionally cautious. It explains support with understanding opportunities and preparing documentation, but it does not promise funding approval or imply a government partnership.
