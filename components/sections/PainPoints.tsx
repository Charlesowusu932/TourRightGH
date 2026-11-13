import { BuyButton, Eyebrow } from "../ui";

// Every "fix" below restates something the guide (and this page) already covers.
const pains = [
  {
    worry: "“Your cousin swears there’s still visa on arrival.”",
    fix: "It ended on 25 May 2026. US, UK and Canadian passports now apply online before flying, and airlines can refuse boarding without it.",
  },
  {
    worry: "“Every blog post you find is from 2019.”",
    fix: "Fares, site fees, banknotes and even the airport name have changed. Every time-sensitive fact in the guide shows its source and the date it was checked.",
  },
  {
    worry: "“You land and can’t pay for anything.”",
    fix: "Mobile money, SIM registration, forex and the new cedi notes explained before you arrive, plus the scams to avoid.",
  },
  {
    worry: "“December books up while you’re still deciding.”",
    fix: "A Detty December booking timeline, traffic tips, ticket advice and a budget worksheet, so you plan early instead of paying for it later.",
  },
];

export function PainPoints() {
  return (
    <section className="v2-sec">
      <div className="wrap">
        <Eyebrow>Sound familiar?</Eyebrow>
        <h2 className="h2">Planning a trip home shouldn’t mean guessing</h2>
        <div className="pain-grid">
          {pains.map((p) => (
            <article key={p.worry} className="pain">
              <p className="pain-worry">{p.worry}</p>
              <p className="pain-fix">
                <span className="pain-tag">The guide</span>
                {p.fix}
              </p>
            </article>
          ))}
        </div>
        <div className="sec-cta">
          <BuyButton id="pain" variant="green" />
          <span className="sec-cta-note">One 62-page PDF. Read it tonight, fly prepared.</span>
        </div>
      </div>
    </section>
  );
}
