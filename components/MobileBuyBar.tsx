"use client";

import { useEffect, useState } from "react";
import { checkoutUrl, price } from "@/lib/config";

/**
 * App-style action bar pinned to the bottom of the screen on phones.
 * It appears once the hero's buy button has scrolled away, and steps aside
 * while the #buy or closing call-to-action section is on screen so the two never compete.
 * Hidden entirely above 720px via CSS.
 */
export function MobileBuyBar() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [buyVisible, setBuyVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const buyTargets = ["buy", "final-cta"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observers: IntersectionObserver[] = [];

    if (hero) {
      const o = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting));
      o.observe(hero);
      observers.push(o);
    }
    if (buyTargets.length) {
      const onScreen = new Set<Element>();
      const o = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) =>
            e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target),
          );
          setBuyVisible(onScreen.size > 0);
        },
        { threshold: 0.15 },
      );
      buyTargets.forEach((el) => o.observe(el));
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const show = !heroVisible && !buyVisible;

  return (
    <div className="buy-bar" data-show={show} aria-hidden={!show}>
      <div className="buy-bar-text">
        <strong>US${price}</strong>
        <span>62-page PDF · instant download</span>
      </div>
      <a
        className="btn buy-bar-btn"
        href={checkoutUrl}
        data-cta="mobile-bar"
        tabIndex={show ? 0 : -1}
      >
        Get the guide
      </a>
    </div>
  );
}
