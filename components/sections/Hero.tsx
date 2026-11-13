import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "./icons";
import { TrustLine } from "../ui";
import { checkoutUrl as checkout, price } from "@/lib/config";

export function Hero() {
  return (
    <section
      className="hero"
      style={{ color: "#1f1f1f", overflow: "hidden", backgroundColor: "#004d2e" }}
    >
      <div
        className="hero-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 80px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "56px",
        }}
      >
        <div style={{ flex: "1 1 480px", minWidth: "0" }}>
          <h1
            style={{
              margin: "0",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: "400",
              fontSize: "clamp(42px, 5.4vw, 70px)",
              lineHeight: "1.04",
              color: "#ffffff",
            }}
          >
            Coming home to Ghana?{" "}
            <span style={{ color: "#fcd116" }}>
              <i>Land ready.</i>
            </span>
          </h1>
          <p
            style={{
              margin: "24px 0 0",
              fontSize: "20px",
              lineHeight: "1.5",
              maxWidth: "560px",
              color: "#ffffff",
            }}
          >
            The checked, dated travel guide for second-generation Ghanaians, heritage travellers and
            anyone heading back after years away. Entry rules, money, mobile money, transport, Detty
            December and 50 places worth the trip.
          </p>
          <div
            style={{
              marginTop: "34px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <a
              id="hero-cta"
              className="btn hero-cta"
              href={checkout}
              data-cta="hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "56px",
                padding: "0 30px",
                borderRadius: "999px",
                background: "#fcd116",
                color: "#111111",
                fontWeight: "700",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Get the guide · US${price} <ArrowRightIcon />
            </a>
            <a className="cta-ghost" href="#look-inside" data-cta="hero-look-inside">
              Look inside first
            </a>
          </div>
          <div style={{ marginTop: "16px" }}>
            <TrustLine tone="dark" />
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 22px",
              fontSize: "15px",
              color: "#2a2a2a",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "flex", color: "#fcd116" }}>
                <CheckIcon />
              </span>{" "}
              <span style={{ color: "#ffffff" }}>Reads on phone, tablet or laptop</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "flex", color: "#fcd116" }}>
                <CheckIcon />
              </span>{" "}
              <span style={{ color: "#ffffff" }}>57 numbered sources</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "flex", color: "#fcd116" }}>
                <CheckIcon />
              </span>{" "}
              <span style={{ color: "#ffffff" }}>Tap-to-open map links</span>
            </span>
          </div>
        </div>
        <div
          className="hero-art"
          style={{
            flex: "1 1 380px",
            minWidth: "0",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            padding: "10px 0 10px 40px",
          }}
        >
          <Image
            src="/images/page-before-you-travel.jpg"
            alt="Inside page: Before You Travel, entry rules by passport"
            width={909}
            height={1287}
            className="shot"
            style={{
              position: "absolute",
              left: "0",
              top: "50px",
              width: "52%",
              maxWidth: "250px",
              borderRadius: "4px",
              transform: "rotate(-5deg)",
              opacity: ".92",
              height: "auto",
            }}
          />
          <Image
            src="/images/cover.jpg"
            alt="Cover of Ghana for the Diaspora: Your Return Home Travel Guide"
            width={909}
            height={1287}
            className="shot"
            style={{
              position: "relative",
              width: "78%",
              maxWidth: "380px",
              borderRadius: "4px",
              transform: "rotate(2deg)",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
