import Image from "next/image";

export function Samples() {
  return (
    <section style={{ background: "#eef3ee", marginTop: "48px" }}>
      <div
        className="sec-inner"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}
      >
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
          Look inside
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
          Real pages from the guide
        </h2>
        <div
          className="swipe swipe-narrow"
          style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "28px" }}
        >
          <figure style={{ margin: "0", flex: "1 1 230px", minWidth: "0" }}>
            <Image
              src="/images/page-money.jpg"
              alt="Money in Ghana chapter page showing the new Heritage Series banknotes"
              width={909}
              height={1287}
              className="shot"
              style={{ width: "100%", display: "block", borderRadius: "4px", height: "auto" }}
            />
            <figcaption style={{ marginTop: "14px", fontSize: "15px" }}>
              <b>Money.</b> The new cedi notes, and how to compare rates.
            </figcaption>
          </figure>
          <figure style={{ margin: "0", flex: "1 1 230px", minWidth: "0" }}>
            <Image
              src="/images/page-nkrumah-park.jpg"
              alt="Kwame Nkrumah Memorial Park destination profile with fees and hours"
              width={909}
              height={1287}
              className="shot"
              style={{ width: "100%", display: "block", borderRadius: "4px", height: "auto" }}
            />
            <figcaption style={{ marginTop: "14px", fontSize: "15px" }}>
              <b>Flagship profiles.</b> Fees, hours and how to get there.
            </figcaption>
          </figure>
          <figure style={{ margin: "0", flex: "1 1 230px", minWidth: "0" }}>
            <Image
              src="/images/page-cape-coast.jpg"
              alt="Cape Coast Castle destination profile"
              width={909}
              height={1287}
              className="shot"
              style={{ width: "100%", display: "block", borderRadius: "4px", height: "auto" }}
            />
            <figcaption style={{ marginTop: "14px", fontSize: "15px" }}>
              <b>Heritage.</b> Cape Coast, Elmina and Assin Manso.
            </figcaption>
          </figure>
          <figure style={{ margin: "0", flex: "1 1 230px", minWidth: "0" }}>
            <Image
              src="/images/page-itineraries.jpg"
              alt="Ready-made itineraries page with route QR codes"
              width={909}
              height={1287}
              className="shot"
              style={{ width: "100%", display: "block", borderRadius: "4px", height: "auto" }}
            />
            <figcaption style={{ marginTop: "14px", fontSize: "15px" }}>
              <b>Itineraries.</b> Scan the QR code to open the route.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
