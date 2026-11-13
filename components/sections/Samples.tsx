import { SampleGallery, type Sample } from "../SampleGallery";
import { BuyButton, Eyebrow } from "../ui";
import { getPricing } from "@/lib/pricing";

const samples: Sample[] = [
  {
    src: "/images/page-money.jpg",
    alt: "Money in Ghana chapter page showing the new Heritage Series banknotes",
    title: "Money.",
    text: "The new cedi notes, and how to compare rates.",
  },
  {
    src: "/images/page-nkrumah-park.jpg",
    alt: "Kwame Nkrumah Memorial Park destination profile with fees and hours",
    title: "Flagship profiles.",
    text: "Fees, hours and how to get there.",
  },
  {
    src: "/images/page-cape-coast.jpg",
    alt: "Cape Coast Castle destination profile",
    title: "Heritage.",
    text: "Cape Coast, Elmina and Assin Manso.",
  },
  {
    src: "/images/page-itineraries.jpg",
    alt: "Ready-made itineraries page with route QR codes",
    title: "Itineraries.",
    text: "Scan the QR code to open the route.",
  },
];

export async function Samples() {
  const { label: price } = await getPricing();
  return (
    <section id="look-inside" className="samples">
      <div className="wrap v2-sec-pad">
        <Eyebrow>Look inside</Eyebrow>
        <h2 className="h2">Real pages from the guide</h2>
        <p className="lead">Tap any page to read it up close. This is exactly what you download.</p>
        <SampleGallery samples={samples} />
        <div className="sec-cta">
          <BuyButton id="samples" label="Get all 62 pages" variant="green" />
          <span className="sec-cta-note">Instant PDF download · {price} once</span>
        </div>
      </div>
    </section>
  );
}
