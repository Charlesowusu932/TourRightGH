/**
 * Conversion content you fill in. Anything left empty is simply not shown,
 * so the live page never displays placeholder text or invented claims.
 */

export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "London → Accra, December 2026" */
  detail?: string;
};

/**
 * Real reader quotes (with their permission). The "What readers say"
 * section stays hidden until you add at least one.
 * Social proof is the biggest single lever still missing from this page.
 */
export const testimonials: Testimonial[] = [];

/**
 * Your refund promise, shown next to every buy button and in the FAQ.
 * Example: "30-day money-back guarantee. If it doesn't help, email us for a full refund."
 * Only add one you will honour.
 */
export const guarantee: string = "";

/** Shown under the buy button. Example: "Card, Apple Pay, PayPal and mobile money" */
export const paymentMethods: string = "";

/** Answer to "Can I share it with my family?" (FAQ). Hidden while empty. */
export const sharingTerms: string = "";
