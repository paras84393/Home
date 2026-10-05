import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--x-dark)] text-white"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[var(--x-blue)]/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-14 py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[680px]"
          >
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--x-gold)]" />

              <span className="text-[11px] font-bold tracking-[0.2em] text-[#8cc9d8]">
                DIGITAL GROWTH PARTNER
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[720px] text-[48px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[72px]">
              Turn Your Digital Presence Into{" "}
              <span className="text-[var(--x-gold)]">
                Business Growth.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[16px] leading-7 text-slate-300 sm:text-[17px]">
              We combine strategy, technology and data-driven marketing
              to help ambitious brands attract, engage and convert more
              customers.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#audit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--x-gold)] px-6 py-3.5 text-[13px] font-bold text-[var(--x-dark)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffb83f] hover:shadow-[0_12px_30px_rgba(245,166,35,0.18)]"
              >
                Get Free Digital Audit

                <ArrowUpRight
                  size={16}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Explore Our Services

                <ArrowDown size={15} strokeWidth={1.8} />
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Data-driven strategy",
                "Transparent reporting",
                "Growth-focused execution",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[12px] text-slate-400"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--x-blue)]/20">
                    <Check
                      size={10}
                      strokeWidth={2.5}
                      className="text-[#8cc9d8]"
                    />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — GROWTH VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            {/* Floating metric */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.55,
              }}
              className="absolute -right-2 -top-7 z-20 hidden rounded-lg border border-white/10 bg-[#102b33] px-4 py-3 shadow-xl sm:block"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--x-blue)]/20">
                  <TrendingUp
                    size={15}
                    className="text-[#8cc9d8]"
                  />
                </span>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    Organic Growth
                  </p>

                  <p className="text-sm font-bold text-white">
                    +250%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main dashboard */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#f7f8f6] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.3)] sm:p-7">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--x-blue)]">
                    Digital Performance
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-[var(--x-dark)]">
                    Growth overview
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--x-blue-light)]">
                  <BarChart3
                    size={19}
                    className="text-[var(--x-blue)]"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Chart */}
              <div className="relative mt-6 h-[230px] overflow-hidden rounded-xl border border-slate-200 bg-white p-5">
                {/* Chart labels */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Organic visibility
                    </p>

                    <p className="mt-1 text-3xl font-semibold tracking-tight text-[var(--x-dark)]">
                      +250%
                    </p>
                  </div>

                  <span className="rounded-full bg-[#e8f5f8] px-2.5 py-1 text-[9px] font-bold text-[var(--x-blue)]">
                    Growing
                  </span>
                </div>

                {/* Grid */}
                <div className="absolute inset-x-5 bottom-8 top-24">
                  <div className="absolute inset-x-0 top-0 border-t border-dashed border-slate-200" />
                  <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-slate-200" />
                  <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-slate-200" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-slate-200" />

                  {/* SVG chart */}
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <linearGradient
                        id="heroChartFill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#087ea4"
                          stopOpacity="0.18"
                        />
                        <stop
                          offset="100%"
                          stopColor="#087ea4"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 130 C55 126 65 112 110 116 C155 120 170 92 215 98 C260 104 275 75 315 80 C360 85 380 54 420 57 C450 60 470 28 500 20 L500 150 L0 150 Z"
                      fill="url(#heroChartFill)"
                    />

                    <path
                      d="M0 130 C55 126 65 112 110 116 C155 120 170 92 215 98 C260 104 275 75 315 80 C360 85 380 54 420 57 C450 60 470 28 500 20"
                      fill="none"
                      stroke="#087ea4"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="500"
                      cy="20"
                      r="5"
                      fill="#f5a623"
                    />
                  </svg>
                </div>
              </div>

              {/* Performance cards */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  {
                    icon: Search,
                    value: "+250%",
                    label: "Organic Traffic",
                  },
                  {
                    icon: BarChart3,
                    value: "120+",
                    label: "Projects",
                  },
                  {
                    icon: Users,
                    value: "500+",
                    label: "Clients",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="border border-slate-200 bg-white p-3"
                    >
                      <Icon
                        size={15}
                        className="text-[var(--x-blue)]"
                        strokeWidth={1.8}
                      />

                      <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--x-dark)]">
                        {item.value}
                      </p>

                      <p className="mt-0.5 text-[9px] leading-3 text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom caption */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--x-gold)]" />
              Turning digital attention into measurable growth
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#audit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-white md:flex"
        >
          Scroll to explore

          <ArrowDown
            size={13}
            strokeWidth={1.5}
            className="animate-bounce"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;