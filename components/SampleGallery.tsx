"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Sample = { src: string; alt: string; title: string; text: string };

/** Sample pages that open full screen on tap, with prev/next, Esc and arrow keys. */
export function SampleGallery({ samples }: { samples: Sample[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + samples.length) % samples.length)),
    [samples.length],
  );

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : samples[open];

  return (
    <>
      <div className="swipe swipe-narrow gallery">
        {samples.map((s, i) => (
          <figure key={s.src} className="gallery-item">
            <button
              type="button"
              className="gallery-btn"
              aria-label={`Enlarge: ${s.alt}`}
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpen(i);
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={909}
                height={1287}
                sizes="(max-width: 720px) 68vw, 280px"
                className="shot gallery-img"
              />
              <span className="gallery-zoom" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
            <figcaption>
              <b>{s.title}</b> {s.text}
            </figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={909}
              height={1287}
              sizes="(max-width: 720px) 100vw, 640px"
              className="lightbox-img"
              priority
            />
            <p className="lightbox-cap">
              <b>{current.title}</b> {current.text}{" "}
              <span>
                {open! + 1} / {samples.length}
              </span>
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="lb-btn lb-close"
            aria-label="Close"
            onClick={close}
          >
            ×
          </button>
          <button
            type="button"
            className="lb-btn lb-prev"
            aria-label="Previous page"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lb-btn lb-next"
            aria-label="Next page"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
