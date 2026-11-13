export function Audience() {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px 40px" }}>
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
        Who it is for
      </p>
      <h2
        style={{
          margin: "0",
          fontFamily: "var(--font-serif), Georgia, serif",
          fontWeight: "400",
          fontSize: "clamp(32px, 3.6vw, 46px)",
          lineHeight: "1.1",
          color: "#006b3f",
          maxWidth: "760px",
        }}
      >
        One country, three ways of coming home
      </h2>
      <p style={{ margin: "16px 0 0", maxWidth: "700px", fontSize: "18px" }}>
        The rules depend on the passport you carry. Every page is tagged so you can skip straight to
        what applies to you.
      </p>
      <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "22px" }}>
        <div
          style={{
            flex: "1 1 300px",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "28px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                display: "flex",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#006b3f",
                color: "#fbf8f1",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                className="ico"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />{" "}
                <path d="M2 12h20" />{" "}
              </svg>
            </span>
            <span
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                background: "#fcd116",
                color: "#111111",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".16em",
              }}
            >
              DUAL
            </span>
          </div>
          <h3 style={{ margin: "22px 0 8px", fontSize: "21px", color: "#006b3f" }}>
            Raised abroad, Ghanaian at heart
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            Second-generation Ghanaians and dual citizens. When a Ghana Card or dual-citizenship
            card changes the rules, you will see it.
          </p>
        </div>
        <div
          style={{
            flex: "1 1 300px",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "28px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                display: "flex",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#006b3f",
                color: "#fbf8f1",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                className="ico"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M2 22h20" />{" "}
                <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />{" "}
              </svg>
            </span>
            <span
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".16em",
                backgroundColor: "#006b3f",
              }}
            >
              VISITOR
            </span>
          </div>
          <h3 style={{ margin: "22px 0 8px", fontSize: "21px", color: "#006b3f" }}>
            Heritage and first-time visitors
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            African American, Caribbean, Black British and other travellers arriving for the first
            time. eVisa steps, first-day basics and cultural context.
          </p>
        </div>
        <div
          style={{
            flex: "1 1 300px",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "28px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                display: "flex",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#006b3f",
                color: "#fbf8f1",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                className="ico"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M13 19a4 4 0 00-8 0" /> <path d="M16 10h2" /> <path d="M16 14h2" />{" "}
                <circle cx="9" cy="12" r="3" />{" "}
                <rect x="2" y="5" width="20" height="14" rx="2" />{" "}
              </svg>
            </span>
            <span
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                background: "#006b3f",
                color: "#fbf8f1",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: ".16em",
              }}
            >
              GH
            </span>
          </div>
          <h3 style={{ margin: "22px 0 8px", fontSize: "21px", color: "#006b3f" }}>
            Back after years away
          </h3>
          <p style={{ margin: "0", fontSize: "16px" }}>
            You know the food and the greetings. You need what changed: new banknotes, new airport
            name, new fares, new entry rules.
          </p>
        </div>
      </div>
    </section>
  );
}
