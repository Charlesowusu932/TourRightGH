import { CheckIcon, ArrowRightIcon } from "./icons";
import { getPricing } from "@/lib/pricing";
import { guarantee, paymentMethods } from "@/lib/content";
import { TrustLine } from "../ui";

export async function Buy() {
  const { symbol, amount: price, checkoutUrl: checkout } = await getPricing();
  return (
    <section
      id="buy"
      style={{ background: "#004d2e", color: "#fbf8f1", marginTop: "48px", position: "relative" }}
    >
      <div
        className="sec-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "84px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 460px", minWidth: "0" }}>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: "400",
              fontSize: "clamp(34px, 4vw, 54px)",
              lineHeight: "1.06",
              color: "#ffffff",
            }}
          >
            Everything you need before the plane lands
          </h2>
          <p style={{ margin: "18px 0 0", fontSize: "18px", color: "#fbf8f1", maxWidth: "560px" }}>
            Less than a ride from the airport to Osu. Download it once, keep it on your phone for
            the whole trip.
          </p>
          <ul
            style={{
              margin: "28px 0 0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "17px",
            }}
          >
            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#fcd116", display: "flex" }}>
                <CheckIcon />
              </span>
              62-page PDF, Edition 2026/2027
            </li>
            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#fcd116", display: "flex" }}>
                <CheckIcon />
              </span>
              50 destination profiles with tap-to-open map links
            </li>
            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#fcd116", display: "flex" }}>
                <CheckIcon />
              </span>
              8 itineraries with route QR codes
            </li>
            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#fcd116", display: "flex" }}>
                <CheckIcon />
              </span>
              Budget planner, phrase card and expense tracker
            </li>
          </ul>
        </div>
        <div
          className="buy-card"
          style={{
            flex: "0 1 400px",
            minWidth: "0",
            width: "100%",
            background: "#fbf8f1",
            color: "#282828",
            borderRadius: "20px",
            padding: "36px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: ".2em",
              color: "#b00e20",
            }}
          >
            INSTANT DOWNLOAD
          </p>
          <div
            style={{
              margin: "14px 0 4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "4px",
              color: "#004d2e",
            }}
          >
            <span style={{ fontSize: "26px", fontWeight: "700", marginTop: "12px" }}>{symbol}</span>
            <span
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "96px",
                lineHeight: "1",
              }}
            >
              {price}
            </span>
          </div>
          <p style={{ margin: "0 0 26px", fontSize: "15px", color: "#555555" }}>
            One-time payment · PDF, 8.5 MB
          </p>
          <a
            className="btn"
            href={checkout}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="buy-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              minHeight: "58px",
              borderRadius: "999px",
              background: "#fcd116",
              color: "#111111",
              fontWeight: "700",
              fontSize: "18px",
              textDecoration: "none",
            }}
          >
            Get the guide now <ArrowRightIcon />
          </a>
          <div style={{ marginTop: "18px", display: "flex", justifyContent: "center" }}>
            <TrustLine />
          </div>
          {guarantee && <p className="buy-guarantee">{guarantee}</p>}
          {paymentMethods && (
            <p style={{ margin: "12px 0 0", fontSize: "14px", color: "#555555" }}>
              {paymentMethods}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
