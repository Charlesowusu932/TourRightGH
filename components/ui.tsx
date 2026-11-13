import { getPricing } from "@/lib/pricing";
import { guarantee } from "@/lib/content";
import { ArrowRightIcon } from "./sections/icons";

export function Eyebrow({
  children,
  tone = "red",
}: {
  children: React.ReactNode;
  tone?: "red" | "green" | "yellow";
}) {
  return <p className={`eyebrow eyebrow-${tone}`}>{children}</p>;
}

/** Primary buy button. `id` feeds `data-cta` so each placement can be tracked separately. */
export async function BuyButton({
  id,
  label,
  variant = "yellow",
  block = false,
}: {
  id: string;
  label?: string;
  variant?: "yellow" | "green";
  block?: boolean;
}) {
  const { label: price, checkoutUrl } = await getPricing();
  return (
    <a
      className={`cta cta-${variant}${block ? " cta-block" : ""}`}
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={id}
    >
      {label ?? `Get the guide · ${price}`} <ArrowRightIcon />
    </a>
  );
}

const icon = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "trust-ico",
} as const;

/** Reassurance shown right under buy buttons, where doubt peaks. */
export function TrustLine({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className={`trust trust-${tone}`}>
      <li>
        <svg {...icon}>
          <rect width="18" height="11" x="3" y="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Secure checkout
      </li>
      <li>
        <svg {...icon}>
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
        Instant download
      </li>
      <li>
        <svg {...icon}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Pay once, keep it
      </li>
      {guarantee && (
        <li>
          <svg {...icon}>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          </svg>
          {guarantee.split(".")[0]}
        </li>
      )}
    </ul>
  );
}
