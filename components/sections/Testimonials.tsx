import { testimonials } from "@/lib/content";
import { Eyebrow } from "../ui";

/** Renders nothing until real quotes are added in lib/content.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="v2-sec">
      <div className="wrap">
        <Eyebrow>What readers say</Eyebrow>
        <h2 className="h2">From people who landed ready</h2>
        <div className="quotes swipe">
          {testimonials.map((t) => (
            <figure key={t.name + t.quote.slice(0, 20)} className="quote">
              <svg className="quote-mark" viewBox="0 0 32 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M0 24V14C0 6 4 1 12 0l1 4c-4 1-6 4-6 8h5v12H0zm19 0V14c0-8 4-13 12-14l1 4c-4 1-6 4-6 8h5v12H19z"
                />
              </svg>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {t.detail && <span>{t.detail}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
