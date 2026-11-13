import { BuyButton, TrustLine } from "../ui";

export function FinalCta() {
  return (
    <section id="final-cta" className="final">
      <div className="wrap final-inner">
        <h2 className="final-title">
          Coming home? <em>Land ready.</em>
        </h2>
        <p className="final-sub">
          62 pages. 16 regions. 50 places worth the trip. Every time-sensitive fact checked and
          dated in November 2026.
        </p>
        <BuyButton id="final" />
        <TrustLine tone="dark" />
      </div>
    </section>
  );
}
