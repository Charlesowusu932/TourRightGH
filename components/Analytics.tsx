"use client";

import Script from "next/script";
import { useEffect } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-N3HLFRD8";

type TrackingWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
};

/**
 * Google Tag Manager, plus buy-click events for GTM and the Meta Pixel
 * (the pixel base code itself sits in <head>, see components/MetaPixel.tsx).
 *
 * Every buy-button click sends:
 * - GTM: a `cta_click` dataLayer event (cta_location, link_url, cta_text, value, currency)
 * - Meta: an `InitiateCheckout` event with the visitor's price and currency
 *
 * `value` and `currency` come from the visitor's country price (lib/pricing.ts).
 */
export function Analytics({ value, currency }: { value: number; currency: string }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-cta]");
      if (!el || !el.href.startsWith("http")) return; // only real checkout links
      const w = window as TrackingWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "cta_click",
        cta_location: el.dataset.cta,
        link_url: el.href,
        cta_text: el.textContent?.trim(),
        value,
        currency,
      });
      w.fbq?.("track", "InitiateCheckout", {
        value,
        currency,
        content_name: "Ghana for the Diaspora guide",
        content_category: el.dataset.cta,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [value, currency]);

  return (
    <>
      {GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}
    </>
  );
}

/** Fallbacks for visitors with JavaScript off; sits at the very top of <body>. */
export function AnalyticsNoScript() {
  return (
    <noscript>
      {GTM_ID && (
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      )}
    </noscript>
  );
}
