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
| `NEXT_PUBLIC_CHECKOUT_URL` | `https://selar.com/k85pf8cz59` | Where every buy button links (Selar checkout) |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Live site URL, used for social share previews |

## Layout

- `app/layout.tsx`: fonts (DM Sans, DM Serif Display via `next/font`) and SEO metadata
- `app/page.tsx`: puts the sections together in order
- `app/globals.css`: hover states, the kente stripe, and image shadow
- `components/sections/*`: one file per page section
- `public/images/`: cover, sample pages, and Elmina photo pulled out of the export

## Conversion content to fill in (`lib/content.ts`)

Empty values are hidden, so the live page never shows placeholder text:

| Setting | Where it appears |
| --- | --- |
| `testimonials` | "What readers say" section (hidden until you add a real quote) |
| `guarantee` | Under every buy button, in the buy box, and as an FAQ answer |
| `paymentMethods` | Under the buy box button |
| `sharingTerms` | "Can I share it with my family?" FAQ |

The footer still has a `[CONTACT EMAIL]` placeholder in `components/sections/SiteFooter.tsx`.

## Tracking

Every buy button has a `data-cta` attribute (`header`, `hero`, `pain`, `samples`, `compare`,
`buy-box`, `final`, `mobile-bar`) so your analytics can report which placement sells.

## Mobile (app feel)

On screens 720px wide or narrower (rules at the bottom of `app/globals.css`):

- Sticky, translucent title bar; the header buy button is hidden on phones
- `components/MobileBuyBar.tsx`: a bottom buy bar that slides in once the hero button scrolls away and hides over the `#buy` section
- Swipeable, snapping card rows (`.swipe`) for "Who it is for" and "Real pages"
- Stats shown as a 2-column tile grid; tighter spacing throughout
- Respects iPhone notch and home-indicator safe areas; press feedback on buttons; no sticky hover states on touch
- Installable: `app/manifest.ts`, `app/icon.png`, `app/apple-icon.png`, `public/icons/`. "Add to Home Screen" opens it full-screen as "Ghana Guide"

The FAQ is a tap-to-open accordion at every width.
