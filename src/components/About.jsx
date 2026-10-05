import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  BarChart3,
  TrendingUp,
  Eye,
  Users,
  MousePointerClick,
} from "lucide-react";

const strengths = [
  {
    title: "Creative Ideas",
    description: "Fresh thinking that builds stronger brand stories.",
    icon: Lightbulb,
  },
  {
    title: "Strategic Planning",
    description: "Smart strategies backed by market understanding.",
    icon: Target,
  },
  {
    title: "Data-Driven Decisions",
    description: "Decisions connected to performance and business goals.",
    icon: BarChart3,
  },
  {
    title: "Measurable Results",
    description: "Focused on outcomes that support long-term growth.",
    icon: TrendingUp,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-x overflow-hidden bg-white"
    >
      <div className="container-x">

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =====================================================
              LEFT — COMPANY STORY
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >

            <span className="eyebrow">
              About Xntrova
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[var(--x-ink)] sm:text-5xl lg:text-[56px]">
              Driven by ideas.
              <br />
              Focused on{" "}
              <span className="text-[var(--x-blue)]">
                results.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--x-muted)] sm:text-lg">
              At Xntrova, we believe great marketing starts with
              understanding people. Our strategies combine fresh ideas,
              thoughtful planning and a clear focus on what truly matters.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--x-muted)] sm:text-base">
              We combine creativity with data-driven decisions to help
              businesses become more visible, connect with the right
              audiences and turn digital attention into meaningful growth.
            </p>

            {/* Highlight */}

            <div className="mt-7 border-l-2 border-[var(--x-blue)] pl-5">
              <p className="max-w-xl text-sm leading-7 text-[var(--x-ink)] sm:text-[15px]">
                Whether the goal is to build visibility, generate leads,
                improve conversions or strengthen a digital presence,
                we create strategies around the business — not a fixed
                marketing formula.
              </p>
            </div>

            {/* Strengths */}

            <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">

              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-3"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--x-blue-light)] text-[var(--x-blue)] transition-all duration-300 group-hover:bg-[var(--x-blue)] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[var(--x-ink)] sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[var(--x-muted)] sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </motion.div>


          {/* =====================================================
              RIGHT — VISUAL STORY
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] lg:min-h-[560px]"
          >

            {/* Main visual */}

            <div className="absolute inset-0 flex items-center justify-center">

              {/* Outer rings */}

              <div className="absolute h-[390px] w-[390px] rounded-full border border-[var(--x-blue)]/10 sm:h-[470px] sm:w-[470px]" />

              <div className="absolute h-[290px] w-[290px] rounded-full border border-[var(--x-blue)]/15 sm:h-[360px] sm:w-[360px]" />

              {/* Dashed ring */}

              <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-[var(--x-blue)]/15 sm:h-[510px] sm:w-[510px]" />


              {/* Center */}

              <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[var(--x-border)] bg-white shadow-[0_20px_60px_rgba(7,26,33,0.10)] sm:h-40 sm:w-40">

                <div className="flex h-12 w-12 items-center justify-center">
                  <span className="text-2xl font-bold tracking-[-0.08em] text-[var(--x-ink)]">
                    X
                  </span>
                </div>

                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--x-blue)]">
                  Xntrova
                </span>

                <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--x-muted)]">
                  Driven by Results
                </span>

              </div>


              {/* Top left */}

              <VisualCard
                position="top-left"
                icon={Eye}
                title="Build Visibility"
                description="Increase your reach and stand out online."
              />

              {/* Top right */}

              <VisualCard
                position="top-right"
                icon={Users}
                title="Engage Audience"
                description="Connect with the people who matter."
              />

              {/* Bottom left */}

              <VisualCard
                position="bottom-left"
                icon={MousePointerClick}
                title="Drive Conversions"
                description="Turn attention into meaningful action."
              />

              {/* Bottom right */}

              <VisualCard
                position="bottom-right"
                icon={TrendingUp}
                title="Measure Growth"
                description="Track performance and keep improving."
              />

            </div>


            {/* Small performance panel */}

            <div className="absolute bottom-0 right-0 hidden w-64 border border-[var(--x-border)] bg-white p-5 shadow-[0_15px_45px_rgba(7,26,33,0.08)] sm:block">

              <div className="flex items-center justify-between">

                <span className="text-xs font-semibold text-[var(--x-ink)]">
                  Performance Overview
                </span>

                <span className="text-[10px] font-semibold text-[var(--x-blue)]">
                  ↗ Growing
                </span>

              </div>

              {/* Simple chart */}

              <div className="mt-5 flex h-16 items-end gap-1">

                {[20, 25, 22, 30, 34, 31, 40, 44, 48, 55, 58, 65].map(
                  (height, index) => (
                    <span
                      key={index}
                      className="flex-1 bg-[var(--x-blue)]/15 transition-all duration-300 hover:bg-[var(--x-blue)]"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[10px] text-[var(--x-muted)]">
                  Digital growth
                </span>

                <BarChart3
                  size={14}
                  className="text-[var(--x-blue)]"
                />

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};


/* =====================================================
   VISUAL CARD
===================================================== */

const VisualCard = ({
  position,
  icon: Icon,
  title,
  description,
}) => {

  const positionClasses = {
    "top-left":
      "left-0 top-5 sm:left-2 sm:top-7",

    "top-right":
      "right-0 top-5 sm:right-2 sm:top-7",

    "bottom-left":
      "bottom-16 left-0 sm:bottom-20 sm:left-2",

    "bottom-right":
      "bottom-16 right-0 sm:bottom-20 sm:right-2",
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className={`absolute z-20 w-[150px] border border-[var(--x-border)] bg-white p-4 shadow-[0_12px_35px_rgba(7,26,33,0.08)] sm:w-[180px] sm:p-5 ${positionClasses[position]}`}
    >

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--x-blue-light)] text-[var(--x-blue)]">
        <Icon size={16} strokeWidth={1.7} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-[var(--x-ink)] sm:text-base">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-[var(--x-muted)]">
        {description}
      </p>

    </motion.div>
  );
};

export default About;