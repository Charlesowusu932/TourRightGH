import { ArrowRightIcon } from "./icons";
import { checkoutUrl as checkout, price } from "@/lib/config";

export function Faq() {
  return (
    <section style={{ maxWidth: "860px", margin: "0 auto", padding: "88px 24px 72px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        <div style={{ borderTop: "1px solid #d9d4c4", padding: "22px 0" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "19px", color: "#006b3f" }}>
            Is this a printed book?
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            No. It is a PDF you download straight after paying. You can print it, but it is designed
            to read on a phone, with tappable links and map buttons.
          </p>
        </div>
        <div style={{ borderTop: "1px solid #d9d4c4", padding: "22px 0" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "19px", color: "#006b3f" }}>
            How current is it?
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            Research was completed on 12 November 2026. Rules and prices change, so every
            time-sensitive fact shows its source and date, and anything we could not confirm says
            so.
          </p>
        </div>
        <div style={{ borderTop: "1px solid #d9d4c4", padding: "22px 0" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "19px", color: "#006b3f" }}>
            I grew up in Ghana. Is it for me?
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            If you have been away a few years, yes. Start with what changed in 2026, the entry rules
            for your passport, current fares and site fees. Skip the dishes you already know.
          </p>
        </div>
        <div style={{ borderTop: "1px solid #d9d4c4", padding: "22px 0" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "19px", color: "#006b3f" }}>
            Does it cover more than Accra?
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            Yes. All 16 regions, 50 destinations from Cape Coast to Mole and the Upper East, plus
            eight itineraries that start in Accra, Kumasi or Tamale.
          </p>
        </div>
        <div
          style={{
            borderTop: "1px solid #d9d4c4",
            borderBottom: "1px solid #d9d4c4",
            padding: "22px 0",
          }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: "19px", color: "#006b3f" }}>
            Can I share it with my family?
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            [YOUR SHARING TERMS, for example: one copy for your household]
          </p>
        </div>
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
