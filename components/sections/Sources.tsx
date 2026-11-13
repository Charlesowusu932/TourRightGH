import Image from "next/image";

export function Sources() {
  return (
    <section
      className="sec"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "88px 24px 40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "48px",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "1 1 460px", minWidth: "0" }}>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "#b00e20",
          }}
        >
          Why trust it
        </p>
        <h2
          style={{
            margin: "0",
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: "400",
            fontSize: "clamp(32px, 3.6vw, 46px)",
            lineHeight: "1.1",
            color: "#006b3f",
          }}
        >
          Checked, dated and sourced. Not guessed.
        </h2>
        <p style={{ margin: "18px 0 0", fontSize: "18px" }}>
          Old blog posts and relatives' memories go out of date fast. Every time-sensitive fact in
          this guide carries a numbered source and the date it was checked, and every price tells
          you how sure we are.
        </p>
        <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
            <span
              style={{
                flex: "none",
                width: "108px",
                textAlign: "center",
                padding: "4px 0",
                borderRadius: "999px",
                background: "#006b3f",
                color: "#fbf8f1",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".14em",
              }}
            >
              VERIFIED
            </span>
            <span style={{ fontSize: "16px" }}>
              From an official source, with the date we checked it.
            </span>
          </div>
          <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
            <span
              style={{
                flex: "none",
                width: "108px",
                textAlign: "center",
                padding: "4px 0",
                borderRadius: "999px",
                background: "#ce1126",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".14em",
              }}
            >
              REPORTED
            </span>
            <span style={{ fontSize: "16px" }}>
              From a dated media or travel source. Confirm before you rely on it.
            </span>
          </div>
          <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
            <span
              style={{
                flex: "none",
                width: "108px",
                textAlign: "center",
                padding: "4px 0",
                borderRadius: "999px",
                background: "#fcd116",
                color: "#111111",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".14em",
              }}
            >
              ESTIMATE
            </span>
            <span style={{ fontSize: "16px" }}>
              Planning guidance, clearly marked, never passed off as a quote.
            </span>
          </div>
          <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
            <span
              style={{
                flex: "none",
                width: "108px",
                textAlign: "center",
                padding: "4px 0",
                borderRadius: "999px",
                background: "#ce1126",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".14em",
              }}
            >
              CONFIRM
            </span>
            <span style={{ fontSize: "16px" }}>
              Not published anywhere. We tell you who to call.
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: "1 1 420px", minWidth: "0" }}>
        <Image
          src="/images/elmina-castle.jpg"
          alt="Elmina Castle on the Central Region coast"
          width={1600}
          height={887}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            display: "block",
            borderRadius: "18px",
          }}
        />
        <p style={{ margin: "10px 0 0", fontSize: "13px", color: "#555555" }}>
          <br />
        </p>
      </div>
    </section>
  );
}
