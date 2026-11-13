import { BuyButton, Eyebrow, TrustLine } from "../ui";

type Mark = "yes" | "some" | "no";

const rows: { label: string; guide: Mark; blogs: Mark; family: Mark }[] = [
  { label: "2026 entry rules for your passport", guide: "yes", blogs: "some", family: "some" },
  { label: "Every fact sourced and dated", guide: "yes", blogs: "no", family: "no" },
  {
    label: "Current fares, site fees and new banknotes",
    guide: "yes",
    blogs: "some",
    family: "some",
  },
  { label: "All 16 regions and 50 destinations", guide: "yes", blogs: "some", family: "some" },
  { label: "Ready-made itineraries with map links", guide: "yes", blogs: "some", family: "no" },
  { label: "Everything in one place on your phone", guide: "yes", blogs: "no", family: "no" },
];

const markLabel: Record<Mark, string> = { yes: "Yes", some: "Sometimes", no: "No" };

function MarkIcon({ mark }: { mark: Mark }) {
  return (
    <span className={`mark mark-${mark}`} role="img" aria-label={markLabel[mark]}>
      {mark === "yes" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : mark === "some" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 12h12" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="v2-sec">
      <div className="wrap">
        <Eyebrow tone="green">Why not just Google it?</Eyebrow>
        <h2 className="h2">Free advice is everywhere. Current advice isn’t.</h2>
        <p className="lead">
          Blogs and family are great for stories. They’re risky for entry rules and prices that
          changed this year.
        </p>
        <div
          className="compare"
          role="table"
          aria-label="This guide compared with free blogs and asking family"
        >
          <div className="compare-row compare-head" role="row">
            <span role="columnheader" />
            <span role="columnheader" className="compare-us">
              This guide
            </span>
            <span role="columnheader">Free blogs</span>
            <span role="columnheader">Asking family</span>
          </div>
          {rows.map((r) => (
            <div className="compare-row" role="row" key={r.label}>
              <span role="rowheader">{r.label}</span>
              <span role="cell" className="compare-us">
                <MarkIcon mark={r.guide} />
              </span>
              <span role="cell">
                <MarkIcon mark={r.blogs} />
              </span>
              <span role="cell">
                <MarkIcon mark={r.family} />
              </span>
            </div>
          ))}
        </div>
        <div className="sec-cta">
          <BuyButton id="compare" variant="green" />
          <TrustLine />
        </div>
      </div>
    </section>
  );
}
