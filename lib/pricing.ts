import { cache } from "react";
import { headers } from "next/headers";
import { checkoutUrl as defaultCheckoutUrl } from "./config";

export type Pricing = {
  /** ISO country code the price was chosen for, e.g. "US", "GB" */
  country: string;
  /** Shown before the amount: "US$", "£" */
  symbol: string;
  amount: string;
  currency: "USD" | "GBP";
  /** Ready-made "US$15" / "£11.99" */
  label: string;
  checkoutUrl: string;
};

type Region = Omit<Pricing, "country" | "label" | "checkoutUrl"> & { checkoutUrl?: string };

/**
 * Prices by visitor country. Anyone not listed gets DEFAULT_REGION.
 * The amount shown must match what the checkout actually charges in that currency,
 * so set the same GBP price on Selar (or give the UK its own link via CHECKOUT_URL_GB).
 */
const REGIONS: Record<string, Region> = {
  US: { symbol: "US$", amount: "15", currency: "USD" },
  GB: { symbol: "£", amount: "11.99", currency: "GBP", checkoutUrl: process.env.CHECKOUT_URL_GB },
};
const DEFAULT_REGION = "US";

/**
 * Country headers added by common hosts, most trusted first.
 * Vercel and Cloudflare set these themselves at the edge.
 */
const COUNTRY_HEADERS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "cloudfront-viewer-country",
  "x-country",
];

/** Netlify sends geolocation as base64-encoded JSON: {"country":{"code":"GB",...},...} */
function netlifyCountry(h: Headers): string {
  const raw = h.get("x-nf-geo");
  if (!raw) return "";
  try {
    const geo = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
    return typeof geo?.country?.code === "string" ? geo.country.code : "";
  } catch {
    return "";
  }
}

/** Resolves the visitor's price once per request (shared by every component that asks). */
export const getPricing = cache(async (): Promise<Pricing> => {
  const h = await headers();
  let country = process.env.PRICING_COUNTRY?.toUpperCase() ?? ""; // force a country when testing locally
  if (!country) country = netlifyCountry(h).toUpperCase();
  if (!country) {
    for (const name of COUNTRY_HEADERS) {
      const value = h.get(name);
      if (value) {
        country = value.toUpperCase();
        break;
      }
    }
  }
  if (country === "UK") country = "GB";

  const key = country in REGIONS ? country : DEFAULT_REGION;
  const region = REGIONS[key];
  return {
    country: key,
    symbol: region.symbol,
    amount: region.amount,
    currency: region.currency,
    label: `${region.symbol}${region.amount}`,
    checkoutUrl: region.checkoutUrl || defaultCheckoutUrl,
  };
});
