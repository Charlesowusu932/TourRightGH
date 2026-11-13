export function Contents() {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 40px" }}>
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
        What is inside
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
        15 chapters, from the airport to the north
      </h2>
      <div style={{ marginTop: "36px", display: "flex", flexWrap: "wrap", gap: "22px" }}>
        <div style={{ flex: "1 1 320px", borderTop: "3px solid #fcd116", paddingTop: "18px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: ".18em",
              color: "#006b3f",
            }}
          >
            PART ONE · PREPARING
          </p>
          <ul
            style={{
              margin: "0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "16px",
            }}
          >
            <li>
              <b>Before you travel.</b> eVisa, ETA, Ghana Card entry and a countdown checklist
            </li>
            <li>
              <b>Understanding Ghana.</b> History, languages, 2026 holidays and a 16-region map
            </li>
            <li>
              <b>Money.</b> New banknotes from 1 December, forex, cards and ATMs
            </li>
            <li>
              <b>Mobile money.</b> MoMo, Telecel Cash, GhanaPay and the scams to avoid
            </li>
            <li>
              <b>SIM cards.</b> Registration, eSIMs, data and two-factor codes
            </li>
            <li>
              <b>Getting around.</b> What rides, coaches and car hire cost in 2026
            </li>
            <li>
              <b>Where to stay.</b> Accra neighbourhoods and staying with family
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 320px", borderTop: "3px solid #fcd116", paddingTop: "18px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: ".18em",
              color: "#006b3f",
            }}
          >
            PART TWO · EXPERIENCING
          </p>
          <ul
            style={{
              margin: "0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "16px",
            }}
          >
            <li>
              <b>Food and drink.</b> Dishes by region and where Ghanaians eat
            </li>
            <li>
              <b>Clothing and fashion.</b> Kente, tailoring and what to wear when
            </li>
            <li>
              <b>Shopping and markets.</b> Makola, Kejetia, crafts and bargaining
            </li>
            <li>
              <b>Culture and etiquette.</b> Greetings, chiefs, funerals and phrases in Twi, Ga and
              Ewe
            </li>
            <li>
              <b>Detty December.</b> A booking timeline, traffic, tickets and a budget worksheet
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 320px", borderTop: "3px solid #fcd116", paddingTop: "18px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: ".18em",
              color: "#006b3f",
            }}
          >
            PART THREE · EXPLORING
          </p>
          <ul
            style={{
              margin: "0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "16px",
            }}
          >
            <li>
              <b>Health and safety.</b> 112, malaria, road safety and common scams
            </li>
            <li>
              <b>All 16 regions.</b> 50 destinations with fees, hours and Google Maps links
            </li>
            <li>
              <b>8 itineraries.</b> From a 2-day Accra trip to a 14-day grand tour, each with a
              route QR code
            </li>
            <li>
              <b>Travel toolkit.</b> Emergency contacts, budget planner, phrase card and expense
              tracker
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
