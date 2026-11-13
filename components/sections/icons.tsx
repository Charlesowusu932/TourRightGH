export function Logo() {
  return (
    <svg
      aria-hidden="true"
      style={{ width: "100%", height: "100%", color: "inherit" }}
      fill="currentColor"
      viewBox="0 0 67.70 57.30"
    >
      <path
        d="M33.84 55.23C16.34 41.23 2.02 29.77 3.61 18.00C5.20 4.32 23.66 2.09 30.02 12.59C34.47 20.23 27.47 27.86 20.47 24.05C14.75 20.23 17.29 13.23 22.38 14.50"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.84 55.23C51.34 41.23 65.66 29.77 64.07 18.00C62.47 4.32 44.02 2.09 37.66 12.59C33.20 20.23 40.20 27.86 47.20 24.05C52.93 20.23 50.38 13.23 45.29 14.50"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const strokeIcon = {
  className: "ico",
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function CheckIcon() {
  return (
    <svg {...strokeIcon}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg {...strokeIcon}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
