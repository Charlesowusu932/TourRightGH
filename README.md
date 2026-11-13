# Ghana for the Diaspora: sales page

Next.js (App Router, TypeScript) version of the sales page that was exported as
`Ghana for the Diaspora · Sales Page (1).html`. The original file is kept for reference.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Settings

Copy `.env.example` to `.env.local` and set:

| Variable | Default | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_PRICE` | `15` | Price shown on every buy button (US$) |
| `NEXT_PUBLIC_CHECKOUT_URL` | `#buy` | Where buy buttons link (Stripe Payment Link, Gumroad, etc.) |

## Layout

- `app/layout.tsx`: fonts (DM Sans, DM Serif Display via `next/font`) and SEO metadata
- `app/page.tsx`: puts the sections together in order
- `app/globals.css`: hover states, the kente stripe, and image shadow
- `components/sections/*`: one file per page section
- `public/images/`: cover, sample pages, and Elmina photo pulled out of the export

## Placeholders still to fill in

Search for `[` in `components/sections/` to find them: payment methods, refund policy,
sharing terms (FAQ), and contact email (footer).
