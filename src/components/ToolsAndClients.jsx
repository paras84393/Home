import React, { useState } from "react";
import {
  Search,
  Target,
  Rocket,
  BarChart3,
  ArrowRight,
  Lightbulb,
  Settings2,
} from "lucide-react";

/* =========================================================
   TOOLS
========================================================= */

const tools = [
  {
    name: "Ahrefs",
    type: "SEO",
    logo: "/ahrefs.png",
  },
  {
    name: "Canva",
    type: "Creative",
    logo: "/canva.jpg",
  },
  {
    name: "LinkedIn",
    type: "Social",
    logo: "/linkedin.png",
  },
  {
    name: "Meta",
    type: "Advertising",
    logo: "/meta.png",
  },
  {
    name: "Google Ads",
    type: "Paid Media",
    logo: "/google.png",
  },
  {
    name: "Analytics",
    type: "Insights",
    logo: "/analytics.png",
  },
  {
    name: "AWS",
    type: "Cloud",
    logo: "/aws.png",
  },
  {
    name: "Rank Math",
    type: "SEO",
    logo: "/rankmath.jpg",
  },
];



/* Duplicate for seamless marquee */
const infiniteTools = [...tools, ...tools];


/* =========================================================
   HOW WE WORK
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discover",
    short: "Understand",
    description:
      "We start by understanding your business, audience, competitors and current digital presence.",
    icon: Search,
    points: [
      "Business & audience research",
      "Competitor analysis",
      "Digital presence audit",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    short: "Plan",
    description:
      "We turn insights into a focused digital strategy built around your business goals.",
    icon: Target,
    points: [
      "Channel selection",
      "Content & campaign planning",
      "Growth roadmap",
    ],
  },
  {
    number: "03",
    title: "Execute",
    short: "Build",
    description:
      "Our team turns the strategy into campaigns, content and digital experiences.",
    icon: Rocket,
    points: [
      "Campaign execution",
      "Creative & content",
      "Website & digital implementation",
    ],
  },
  {
    number: "04",
    title: "Measure",
    short: "Improve",
    description:
      "We track performance, identify what works and continuously improve the strategy.",
    icon: BarChart3,
    points: [
      "Performance tracking",
      "Data-driven optimization",
      "Continuous improvement",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const ToolsAndClients = () => {
  const [activeStep, setActiveStep] = useState(0);

  const activeProcess = processSteps[activeStep];
  const ActiveIcon = activeProcess.icon;

  return (
    <section className="overflow-hidden bg-white py-20">

      <div className="container-x">

        {/* =================================================
            TOOLS
        ================================================= */}

        <div className="text-center">
          <span className="eyebrow">Our Digital Stack</span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--x-ink)] md:text-4xl">
            Tools We Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--x-muted)] md:text-base">
            Proven platforms that help us create, manage and measure
            digital growth.
          </p>
        </div>

        {/* TOOLS MARQUEE */}

        <div className="relative mt-10 overflow-hidden">

          {/* Edge fades */}
          <div
            className="
              pointer-events-none absolute left-0 top-0 z-10
              h-full w-16
              bg-gradient-to-r from-white to-transparent
              md:w-28
            "
          />

          <div
            className="
              pointer-events-none absolute right-0 top-0 z-10
              h-full w-16
              bg-gradient-to-l from-white to-transparent
              md:w-28
            "
          />

          <div className="tools-track flex w-max">

            {infiniteTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="
                  group mx-2 flex h-[120px] w-[145px]
                  flex-shrink-0 flex-col items-center
                  justify-center
                  border border-[var(--x-border)]
                  bg-white px-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[var(--x-blue)]
                  hover:shadow-[0_12px_30px_rgba(7,26,33,0.08)]
                "
              >
                <div className="flex h-11 items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="
                      max-h-10
                      max-w-[90px]
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--x-muted)]">
                  {tool.type}
                </p>
              </div>
            ))}

          </div>
        </div>


        {/* =================================================
            HOW WE WORK
        ================================================= */}

        <section className="mt-28 border-t border-[var(--x-border)] pt-24">

          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}

            <div>
              <span className="eyebrow">How We Work</span>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--x-ink)] md:text-5xl">
                A clear process.
                <br />
                <span className="text-[var(--x-blue)]">
                  Better digital growth.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-[var(--x-muted)]">
                From understanding your business to continuously improving
                performance, every stage is connected to a clear objective.
              </p>

              <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-[var(--x-ink)]">
                <Settings2
                  size={18}
                  className="text-[var(--x-blue)]"
                />

                Strategy backed by data, creativity and execution.
              </div>
            </div>


            {/* RIGHT PROCESS */}

            <div>

              {/* Step selector */}

              <div className="grid grid-cols-2 border-l border-t border-[var(--x-border)] sm:grid-cols-4">

                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(index)}
                      className={`
                        group relative min-h-[130px]
                        border-b border-r border-[var(--x-border)]
                        px-5 py-5 text-left
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-[var(--x-blue-light)]"
                            : "bg-white hover:bg-[var(--x-paper)]"
                        }
                      `}
                    >

                      <div className="flex items-center justify-between">

                        <span
                          className={`
                            text-xs font-bold tracking-widest
                            ${
                              isActive
                                ? "text-[var(--x-blue)]"
                                : "text-[var(--x-muted)]"
                            }
                          `}
                        >
                          {step.number}
                        </span>

                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className={`
                            transition-transform duration-300
                            ${
                              isActive
                                ? "text-[var(--x-blue)]"
                                : "text-[var(--x-muted)]"
                            }
                            group-hover:scale-110
                          `}
                        />

                      </div>

                      <h3
                        className={`
                          mt-8 text-base font-semibold
                          ${
                            isActive
                              ? "text-[var(--x-blue)]"
                              : "text-[var(--x-ink)]"
                          }
                        `}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-1 text-xs text-[var(--x-muted)]">
                        {step.short}
                      </p>

                    </button>
                  );
                })}

              </div>


              {/* Active step detail */}

              <div className="border-b border-l border-r border-[var(--x-border)] bg-[var(--x-paper)] p-7 md:p-9">

                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                  <div className="max-w-xl">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--x-blue)] shadow-sm">
                        <ActiveIcon size={21} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--x-blue)]">
                          Step {activeProcess.number}
                        </p>

                        <h3 className="mt-1 text-2xl font-semibold text-[var(--x-ink)]">
                          {activeProcess.title}
                        </h3>
                      </div>

                    </div>

                    <p className="mt-6 text-sm leading-7 text-[var(--x-muted)] md:text-base">
                      {activeProcess.description}
                    </p>

                  </div>


                  {/* Points */}

                  <div className="w-full max-w-sm">

                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--x-muted)]">
                      What happens
                    </p>

                    <div className="mt-4 space-y-3">

                      {activeProcess.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--x-gold)]" />

                          <span className="text-sm leading-6 text-[var(--x-ink)]">
                            {point}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

                {/* Step navigation */}

                <div className="mt-8 flex items-center justify-between border-t border-[var(--x-border)] pt-6">

                  <span className="text-xs font-medium text-[var(--x-muted)]">
                    {activeStep + 1} / {processSteps.length}
                  </span>

                  {activeStep < processSteps.length - 1 && (
                    <button
                      onClick={() =>
                        setActiveStep((prev) => prev + 1)
                      }
                      className="
                        group flex items-center gap-2
                        text-sm font-semibold
                        text-[var(--x-blue)]
                      "
                    >
                      Next step

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  )}

                  {activeStep === processSteps.length - 1 && (
                    <button
                      onClick={() => setActiveStep(0)}
                      className="
                        group flex items-center gap-2
                        text-sm font-semibold
                        text-[var(--x-blue)]
                      "
                    >
                      Start again

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>




      

      </div>
    </section>
  );
};

export default ToolsAndClients;