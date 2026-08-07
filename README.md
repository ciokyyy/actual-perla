# Pensiunea Perla Brazilor — Website

Official website for Pensiunea Perla Brazilor, a family-run guest house in Frumosu, Bucovina, Romania. The site showcases the guest house's rooms and spa facilities, presents seasonal offers (Christmas, New Year's Eve, half board), checks real-time availability and pricing through the 5stardesk booking system, and lets visitors book directly — fully localized in Romanian, Italian, and English and deployed globally on Cloudflare.

## Features

- Trilingual site (Romanian, Italian, English) with localized URLs via next-intl
- Room showcase with photo galleries and per-room details
- Live availability and price check integrated with the 5stardesk booking API
- Direct booking flow with client-side form validation (TanStack Form)
- Seasonal offer pages: Christmas, New Year's Eve, half-board packages
- Spa facilities page (pool, hot tub, sauna, salt room)
- Responsive design with Tailwind CSS and a custom image-optimization pipeline
- SEO: sitemap, robots.txt, canonical URLs, and hreflang language alternates
- Security headers (X-Frame-Options, nosniff) served at the edge

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [next-intl](https://next-intl.dev) for internationalization
- Tailwind CSS v4, Motion, Embla Carousel, TanStack Query / React Form
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare) — deployed as a Cloudflare Worker on Workers/Pages

## Quickstart

```bash
bun install
bun run dev
```

Open http://localhost:3000.

For the live availability API, copy `.dev.vars.example` to `.dev.vars` and fill in the 5stardesk tokens.

### Deploy

```bash
bun run deploy   # optimize images, build with OpenNext, deploy to Cloudflare
```

## Links

- Live site: https://www.perlabrazilor.com
