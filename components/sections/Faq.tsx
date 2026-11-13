import { ArrowRightIcon } from "./icons";
import { checkoutUrl as checkout, price } from "@/lib/config";

const faqs = [
  {
    q: "Is this a printed book?",
    a: "No. It is a PDF you download straight after paying. You can print it, but it is designed to read on a phone, with tappable links and map buttons.",
  },
  {
    q: "How current is it?",
    a: "Research was completed on 12 November 2026. Rules and prices change, so every time-sensitive fact shows its source and date, and anything we could not confirm says so.",
  },
  {
    q: "I grew up in Ghana. Is it for me?",
    a: "If you have been away a few years, yes. Start with what changed in 2026, the entry rules for your passport, current fares and site fees. Skip the dishes you already know.",
  },
  {
    q: "Does it cover more than Accra?",
    a: "Yes. All 16 regions, 50 destinations from Cape Coast to Mole and the Upper East, plus eight itineraries that start in Accra, Kumasi or Tamale.",
  },
  {
    q: "Can I share it with my family?",
    a: "[YOUR SHARING TERMS, for example: one copy for your household]",
  },
];

export function Faq() {
  return (
    <section
      className="sec"
      style={{ maxWidth: "860px", margin: "0 auto", padding: "88px 24px 72px" }}
    >
      <p
        style={{
          margin: "0 0 12px",
          fontSize: "13px",
          fontWeight: "700",
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "#006b3f",
        }}
      >
        Questions
      </p>
      <h2
        style={{
          margin: "0 0 30px",
          fontFamily: "var(--font-serif), Georgia, serif",
          fontWeight: "400",
          fontSize: "clamp(32px, 3.6vw, 46px)",
          lineHeight: "1.1",
          color: "#006b3f",
        }}
      >
        Before you buy
      </h2>
      <div style={{ borderBottom: "1px solid #d9d4c4" }}>
        {faqs.map(({ q, a }, i) => (
          <details key={q} className="faq" open={i === 0}>
            <summary>
              <h3 style={{ margin: 0, fontSize: "19px", color: "#006b3f" }}>{q}</h3>
              <svg
                className="faq-chevron"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p style={{ margin: "0", padding: "0 0 22px", fontSize: "16px" }}>{a}</p>
          </details>
        ))}
      </div>
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          className="btn"
          href={checkout}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            minHeight: "56px",
            padding: "0 32px",
            borderRadius: "999px",
            background: "#006b3f",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          Get the guide · US${price} <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}
