import { Logo } from "./icons";
import { checkoutUrl as checkout, price } from "@/lib/config";

export function SiteHeader() {
  return (
    <header
      className="app-header"
      style={{ background: "#ffffff", color: "#006b3f", borderBottom: "1px solid #e4e0d4" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{ display: "flex", width: "34px", height: "30px", color: "#006b3f" }}
            aria-hidden="true"
          >
            <Logo />
          </span>
          <span
            className="brand"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "21px",
              color: "#006b3f",
            }}
          >
            Ghana for the Diaspora
          </span>
        </div>
        <a
          className="btn hdr-cta"
          href={checkout}
          style={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: "44px",
            padding: "0 20px",
            borderRadius: "999px",
            background: "#fcd116",
            color: "#111111",
            fontWeight: "700",
            fontSize: "15px",
            textDecoration: "none",
          }}
        >
          Get the guide · US${price}
        </a>
      </div>
    </header>
  );
}
