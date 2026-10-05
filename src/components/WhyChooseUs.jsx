import React, { useState } from "react";
import {
  Target,
  BarChart3,
  MessageCircle,
  Cpu,
  ArrowUpRight,
  Check,
} from "lucide-react";

const benefits = [
  {
    
    title: "Built Around Your Business",
    short: "No one-size-fits-all plans.",
    description:
      "Your business is different, so your strategy should be too. We start by understanding your goals, audience, competition and challenges before recommending what to do.",
    points: [
      "Business & audience research",
      "Competitor understanding",
      "Goals-led strategy",
    ],
    icon: Target,
  },
  {
    
    title: "Decisions Backed by Data",
    short: "Less guessing. More clarity.",
    description:
      "We use performance data and analytics to understand what is working, what isn't and where the next opportunity lies.",
    points: [
      "Performance tracking",
      "Data-led decisions",
      "Continuous optimisation",
    ],
    icon: BarChart3,
  },
  {
    
    title: "A Team That Communicates",
    short: "You always know what's happening.",
    description:
      "Good work needs good communication. We keep things clear, collaborative and transparent throughout the project.",
    points: [
      "Clear communication",
      "Regular updates",
      "Collaborative approach",
    ],
    icon: MessageCircle,
  },
  {
    
    title: "Strategy Meets Technology",
    short: "Modern tools. Practical thinking.",
    description:
      "From SEO and advertising to websites and analytics, we combine creative thinking with the technology needed to execute and scale.",
    points: [
      "Modern digital tools",
      "Creative execution",
      "Scalable solutions",
    ],
    icon: Cpu,
  },
];

const WhyChooseUs = () => {
  const [active, setActive] = useState(0);

  const benefit = benefits[active];
  const Icon = benefit.icon;

  return (
    <section
      id="why-us"
      className="section-x overflow-hidden bg-white"
    >
      <div className="container-x">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">

          <div>
            <span className="eyebrow">Why Xntrova</span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-[var(--x-ink)] sm:text-5xl lg:text-6xl">
              Marketing that
              <br />
              <span className="text-[var(--x-blue)]">
                makes business sense.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-8 text-[var(--x-muted)] md:text-lg">
              We don't just focus on clicks, traffic or impressions.
              We focus on understanding your business and turning digital
              activity into something that actually moves it forward.
            </p>
          </div>
        </div>

        {/* Main Experience */}
        <div className="mt-16 grid border-y border-[var(--x-border)] lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left navigation */}
          <div className="border-b border-[var(--x-border)] lg:border-b-0 lg:border-r">

            {benefits.map((item, index) => {
              const ItemIcon = item.icon;
              const isActive = active === index;

              return (
                <button
                  key={item.number}
                  onClick={() => setActive(index)}
                  className={`group relative flex w-full items-center gap-5 border-b border-[var(--x-border)] p-6 text-left transition-all duration-300 last:border-b-0 md:p-7 ${
                    isActive
                      ? "bg-[var(--x-paper)]"
                      : "hover:bg-[var(--x-paper)]/70"
                  }`}
                >
                  {/* Active line */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] bg-[var(--x-gold)] transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Number */}
                  <span
                    className={`text-xs font-bold tracking-[0.15em] transition-colors ${
                      isActive
                        ? "text-[var(--x-gold)]"
                        : "text-[var(--x-muted)]"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`hidden h-11 w-11 shrink-0 items-center justify-center border sm:flex ${
                      isActive
                        ? "border-[var(--x-blue)] bg-[var(--x-blue)] text-white"
                        : "border-[var(--x-border)] text-[var(--x-blue)]"
                    }`}
                  >
                    <ItemIcon size={19} strokeWidth={1.7} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-base font-semibold transition-colors md:text-lg ${
                        isActive
                          ? "text-[var(--x-ink)]"
                          : "text-[var(--x-muted)] group-hover:text-[var(--x-ink)]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--x-muted)]">
                      {item.short}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`shrink-0 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-[var(--x-blue)] opacity-100"
                        : "-translate-x-1 text-[var(--x-muted)] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right content */}
          <div className="relative min-h-[470px] overflow-hidden bg-[var(--x-dark)] p-8 text-white md:p-12 lg:p-14">

            {/* subtle decorative number */}
            <span className="pointer-events-none absolute -right-5 -top-10 select-none text-[180px] font-bold leading-none text-white/[0.025]">
              {benefit.number}
            </span>

            <div className="relative z-10">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/[0.05] text-[var(--x-gold)]">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-[var(--x-gold)]">
                Why it matters
              </p>

              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {benefit.title}
              </h3>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/60 md:text-base">
                {benefit.description}
              </p>

              {/* Points */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {benefit.points.map((point) => (
                  <div
                    key={point}
                    className="border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <Check
                      size={16}
                      className="text-[var(--x-gold)]"
                    />

                    <p className="mt-5 text-sm leading-5 text-white/80">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs text-white/35">
                  {benefit.number} / 04
                </span>

                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Talk to our team
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--x-gold)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-[var(--x-border)] pt-8 md:flex-row md:items-center md:justify-between">

          <p className="max-w-2xl text-lg leading-8 text-[var(--x-muted)]">
            The goal isn't simply to{" "}
            <span className="font-medium text-[var(--x-ink)]">
              bring more traffic.
            </span>{" "}
            It's to bring the right people, create meaningful engagement
            and build something that grows.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-[var(--x-ink)]"
          >
            Let's build something meaningful

            <span className="flex h-9 w-9 items-center justify-center border border-[var(--x-border)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[var(--x-ink)]">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;