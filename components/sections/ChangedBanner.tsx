export function ChangedBanner() {
  return (
    <section style={{ background: "#fff6d6" }}>
      <div
        className="gutter"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "22px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "14px 22px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 12px",
            borderRadius: "999px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            backgroundColor: "#d49a55",
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
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />{" "}
            <path d="M12 9v4" /> <path d="M12 17h.01" />{" "}
          </svg>{" "}
          Changed in 2026
        </span>
        <p style={{ margin: "0", flex: "1 1 520px", fontSize: "17px", color: "#282828" }}>
          <b>Visa on arrival ended on 25 May 2026.</b> US, UK and Canadian passport holders now
          apply online before they fly, and airlines can refuse boarding without it. Chapter 1 shows
          exactly which rule applies to your passport.
        </p>
      </div>
    </section>
  );
}
