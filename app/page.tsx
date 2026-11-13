import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ChangedBanner } from "@/components/sections/ChangedBanner";
import { PainPoints } from "@/components/sections/PainPoints";
import { Audience } from "@/components/sections/Audience";
import { Samples } from "@/components/sections/Samples";
import { Stats } from "@/components/sections/Stats";
import { Contents } from "@/components/sections/Contents";
import { Comparison } from "@/components/sections/Comparison";
import { Sources } from "@/components/sections/Sources";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatChanged } from "@/components/sections/WhatChanged";
import { Buy } from "@/components/sections/Buy";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { MobileBuyBar } from "@/components/MobileBuyBar";
import { getPricing } from "@/lib/pricing";

/*
 * Section order follows the buyer's questions:
 * what is it → is this my problem → is it for me → show me → what's in it →
 * why not free → can I trust it → what changed → buy → last doubts → buy.
 */
export default async function Home() {
  const pricing = await getPricing();
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
        <PainPoints />
        <Audience />
        <Samples />
        <Stats />
        <Contents />
        <Comparison />
        <Sources />
        <Testimonials />
        <WhatChanged />
        <Buy />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileBuyBar price={pricing.label} checkoutUrl={pricing.checkoutUrl} />
    </div>
  );
}
