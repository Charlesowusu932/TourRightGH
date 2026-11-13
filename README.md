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
| `NEXT_PUBLIC_CHECKOUT_URL` | `https://selar.com/k85pf8cz59` | Where every buy button links (Selar checkout) |
| `CHECKOUT_URL_GB` | (unset) | Optional separate checkout link for UK visitors |
| `PRICING_COUNTRY` | (unset) | Force a country (`GB`, `US`) when testing locally |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Live site URL, used for social share previews |

## Pricing by country

`lib/pricing.ts` picks the price from the visitor's country, read from the host's
geolocation header (`x-vercel-ip-country` on Vercel, `cf-ipcountry` on Cloudflare):

| Country | Price |
| --- | --- |
| United States | US$15 |
| United Kingdom | £11.99 |
| Everyone else | US$15 |

The shown price must match what Selar charges in that currency. Set the GBP price on the
Selar product, or create a UK-only product and put its link in `CHECKOUT_URL_GB`.
Because the price depends on the visitor, the page renders per request (not as a static file),
so don't put a shared HTML cache in front of it.

Test locally with `PRICING_COUNTRY=GB npm run dev`, or send the header yourself:
`curl -H "x-vercel-ip-country: GB" http://localhost:3000`.

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


## Tracking

Google Tag Manager (`GTM-N3HLFRD8`, override with `NEXT_PUBLIC_GTM_ID`) loads on every page via
`components/Analytics.tsx`. Each buy-button click pushes a `cta_click` event to the dataLayer with
`cta_location`, `link_url` and `cta_text`. In GTM, add a Custom Event trigger `cta_click` and send
it to GA4 (for example as a `begin_checkout` event).

Meta Pixel (`1437236261447838`, override with `NEXT_PUBLIC_META_PIXEL_ID`) tracks `PageView` on
load and `InitiateCheckout` (with the visitor's price and currency) on every buy-button click.
Purchases happen on Selar, so add the same pixel in Selar's settings to record `Purchase`.

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
