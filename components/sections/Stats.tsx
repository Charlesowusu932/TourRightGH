export function Stats() {
  return (
    <section
      className="gutter"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}
    >
      <div
        className="stats"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
          justifyContent: "space-between",
          background: "#004d2e",
          borderRadius: "18px",
          padding: "30px 34px",
          color: "#fbf8f1",
        }}
      >
        <div style={{ flex: "1 1 140px" }}>
          <div
            className="stat-num"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "48px",
              lineHeight: "1",
              color: "#fcd116",
            }}
          >
            62
          </div>
          <div style={{ marginTop: "6px", fontSize: "15px" }}>pages</div>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <div
            className="stat-num"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "48px",
              lineHeight: "1",
              color: "#fcd116",
            }}
          >
            16
          </div>
          <div style={{ marginTop: "6px", fontSize: "15px" }}>regions covered</div>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <div
            className="stat-num"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "48px",
              lineHeight: "1",
              color: "#fcd116",
            }}
          >
            50
          </div>
          <div style={{ marginTop: "6px", fontSize: "15px" }}>destination profiles</div>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <div
            className="stat-num"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "48px",
              lineHeight: "1",
              color: "#fcd116",
            }}
          >
            8
          </div>
          <div style={{ marginTop: "6px", fontSize: "15px" }}>ready-made itineraries</div>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <div
            className="stat-num"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "48px",
              lineHeight: "1",
              color: "#fcd116",
            }}
          >
            57
          </div>
          <div style={{ marginTop: "6px", fontSize: "15px" }}>numbered sources</div>
        </div>
      </div>
    </section>
  );
}
