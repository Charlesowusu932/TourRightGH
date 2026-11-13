/**
 * Page-level settings. These were the editable "props" of the original
 * design export (price, checkout). Override them with environment variables
 * (see .env.example) instead of editing components.
 */
export const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "https://selar.com/k85pf8cz59";
