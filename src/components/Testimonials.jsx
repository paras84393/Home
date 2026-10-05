import React from "react";
import {
  ArrowUpRight,
  Quote,
  Star,
  ExternalLink,
} from "lucide-react";

const reviews = [
  {
    name: "Honey",
    source: "Justdial",
    rating: 5,
    date: "14 Mar 2026",
    text: "Excellent service and very supportive team. Xntrova team helped improve my business visibility online with their digital marketing strategies. Highly recommended!",
    initials: "H",
  },
  {
    name: "Charlie",
    source: "Trustpilot",
    rating: 5,
    date: "14 Mar 2026",
    text: "Excellent digital marketing service. The team helped improve our website ranking and online visibility within a few months. Their SEO strategies and communication were very professional.",
    initials: "C",
  },
  {
    name: "Satwinder Kaur",
    source: "Trustpilot",
    rating: 5,
    date: "14 Mar 2026",
    text: "Best Digital Marketing agency in Delhi NCR.",
    initials: "S",
  },
];

const sourceStyles = {
  Justdial: "JD",
  Trustpilot: "TP",
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-x overflow-hidden bg-white"
    >
      <div className="container-x">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="eyebrow">Client Reviews</span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--x-ink)] md:text-5xl lg:text-6xl">
              What people say
              <br />
              <span className="text-[var(--x-blue)]">
                about Xntrova.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--x-muted)]">
              Real feedback collected from public review platforms.
            </p>
          </div>

          {/* Rating summary */}
          <div className="flex w-fit items-center gap-4 border border-[var(--x-border)] bg-[var(--x-paper)] px-5 py-4">
            <div>
              <p className="text-3xl font-semibold leading-none text-[var(--x-ink)]">
                4.6
              </p>

              <div className="mt-2 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    fill="currentColor"
                    className="text-[var(--x-gold)]"
                  />
                ))}
              </div>
            </div>

            <div className="h-10 w-px bg-[var(--x-border)]" />

            <div>
              <p className="text-sm font-semibold text-[var(--x-ink)]">
                40+ reviews
              </p>
              <p className="mt-1 text-xs text-[var(--x-muted)]">
                Google / public platforms
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16 flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">

          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.source}`}
              className="group min-w-[88%] snap-start border border-[var(--x-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--x-ink)] hover:shadow-[0_18px_45px_rgba(7,26,33,0.08)] sm:min-w-[65%] lg:min-w-0"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-[var(--x-blue-light)] text-sm font-bold text-[var(--x-blue)]">
                    {review.initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--x-ink)]">
                      {review.name}
                    </p>

                    <p className="mt-1 text-xs text-[var(--x-muted)]">
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Source */}
                <div className="flex h-8 w-8 items-center justify-center border border-[var(--x-border)] text-[10px] font-bold text-[var(--x-muted)]">
                  {sourceStyles[review.source]}
                </div>
              </div>

              {/* Stars */}
              <div className="mt-7 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      className="text-[var(--x-gold)]"
                    />
                  ))}
                </div>

                <span className="text-xs text-[var(--x-muted)]">
                  {review.source}
                </span>
              </div>

              {/* Quote */}
              <div className="relative mt-6">
                <Quote
                  size={28}
                  strokeWidth={1.2}
                  className="absolute -left-1 -top-2 text-[var(--x-gold)] opacity-60"
                />

                <p className="relative pl-7 text-[15px] leading-7 text-[var(--x-ink)]">
                  {review.text}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between border-t border-[var(--x-border)] pt-5">
                <span className="text-xs font-medium text-[var(--x-muted)]">
                  Public review
                </span>

                <span className="flex items-center gap-1 text-xs font-semibold text-[var(--x-ink)] transition-transform duration-300 group-hover:translate-x-1">
                  View source
                  <ExternalLink size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom proof */}
        <div className="mt-10 flex flex-col gap-5 border-t border-[var(--x-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center border border-[var(--x-border)] text-[9px] font-bold text-[var(--x-muted)]">
                G
              </div>

              <span className="text-sm text-[var(--x-muted)]">
                4.6/5 · 40 Google reviews
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center border border-[var(--x-border)] text-[9px] font-bold text-[var(--x-muted)]">
                JD
              </div>

              <span className="text-sm text-[var(--x-muted)]">
                4.6/5 · 41 ratings
              </span>
            </div>
          </div>

          <a
            href="https://www.xntrova.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[var(--x-ink)]"
          >
            Learn more about Xntrova
            <span className="flex h-8 w-8 items-center justify-center border border-[var(--x-border)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--x-ink)]">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;