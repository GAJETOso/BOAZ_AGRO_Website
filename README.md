# BOAZ AGRO LIMITED Website

A premium, institutional digital presence for **BOAZ AGRO LIMITED**, a global agricultural conglomerate.

## Features
- **Modern Institutional Design**: Built with a focus on "Agri-Luxury" aesthetics using Deep Emerald and Metallic Gold.
- **10 Core Business Divisions**: Showcasing Large-scale Farming, Livestock, Agro-processing, AgriTech, and more.
- **Circular Economy section**: Byproduct-to-value flows across divisions (dung → manure/biogas, corn husks/peels → feed, etc.).
- **Investor Portal**: Secure-access link to the internal staff portal.
- **Responsive & Interactive**: Fully responsive design with scroll-reveal animations, animated stat counters, and a working enquiry form.

## Tech Stack
- **Next.js 15** (App Router) + **React 19** + **TypeScript**.
- **CSS**: Plain CSS (ported design system, custom variables, Grid/Flexbox) in `src/app/globals.css` — no CSS framework.
- **Assets**: Custom AI-generated high-resolution imagery, served from `public/`.

## Directory Structure
```
src/
  app/            # Next.js App Router: layout.tsx, page.tsx, globals.css
  components/     # One component per section (Hero, About, Divisions, ...)
                  # plus shared client components (Reveal, Counter, Navbar, ContactForm)
  data/           # All content and numbers, centralized — this is the single
                  # place to edit a stat, a division, a commodity, etc.
  lib/            # Reusable hooks (useInView, useAnimatedCounter)
  types/          # Shared TypeScript interfaces for the data shapes
public/           # Static assets (hero_bg.png, about_image.png, agritech_preview.png)
sop-portal/       # Separate sub-project — untouched by this app
```

### A note on the numbers

Every headline stat (years of impact, hectares, states of operation, smallholder
partners, cold chain hubs) lives in `src/data/stats.ts`, with the business-verticals
count derived directly from `src/data/divisions.ts` rather than hand-maintained.
The other figures were flagged in review as possibly too large for a recently
established company and are marked there as unverified placeholders — update
that one file with real figures rather than searching the codebase for numbers.

## Development
```
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Deployment
Deployed via Vercel (Next.js zero-config). The previous GitHub Pages / Jekyll
workflow has been removed since a Next.js app needs a real build step that
Jekyll cannot perform.

## License
MIT License. See `LICENSE` for details.
