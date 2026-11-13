import { Logo } from "./icons";

export function SiteFooter() {
  return (
    <footer style={{ background: "#0b2a1c", color: "#e6eee9" }}>
      <div className="kente" aria-hidden="true"></div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "36px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{ display: "flex", width: "30px", height: "26px", color: "#fcd116" }}
            aria-hidden="true"
          >
            <Logo />
          </span>
          <span>Ghana for the Diaspora · Edition 2026/2027</span>
        </div>
        <div>
          [CONTACT EMAIL] · Travel information, not legal or immigration advice. Check official
          sources before you travel.
        </div>
      </div>
    </footer>
  );
}
