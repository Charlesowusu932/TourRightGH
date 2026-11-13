import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ChangedBanner } from "@/components/sections/ChangedBanner";
import { Audience } from "@/components/sections/Audience";
import { Stats } from "@/components/sections/Stats";
import { Contents } from "@/components/sections/Contents";
import { Samples } from "@/components/sections/Samples";
import { Sources } from "@/components/sections/Sources";
import { WhatChanged } from "@/components/sections/WhatChanged";
import { Buy } from "@/components/sections/Buy";
import { Faq } from "@/components/sections/Faq";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        color: "#282828",
        background: "#fbf8f1",
        lineHeight: 1.55,
        fontSize: "17px",
      }}
    >
      <SiteHeader />
      <main>
        <Hero />
        <ChangedBanner />
        <Audience />
        <Stats />
        <Contents />
        <Samples />
        <Sources />
        <WhatChanged />
        <Buy />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
