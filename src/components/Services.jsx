import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { services } from "../data/data";

const serviceImages = {
  seo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",

  "paid-ads":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",

  social:
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85",

  ecommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",

  content:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",

  web:
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
};

const Services = () => {
  const [activeService, setActiveService] = useState("seo");

  const active = services.find(
    (service) => service.id === activeService
  );

  const toggleService = (serviceId) => {
    setActiveService((prev) =>
      prev === serviceId ? null : serviceId
    );
  };

  return (
    <section id="services" className="section-x bg-white">
      <div className="container-x">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              What We Do
            </span>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#071a21] sm:text-5xl">
              Digital capabilities
              <span className="block text-[#087ea4]">
                built around growth.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base leading-7 text-[#68777d] lg:justify-self-end"
          >
            From organic visibility and paid campaigns to social media,
            content and web experiences, we bring strategy, creativity and
            technology together to help brands move forward.
          </motion.p>
        </div>


        {/* =====================================================
            DESKTOP VERSION
            lg and above = ORIGINAL DESIGN
        ====================================================== */}

        <div className="mt-16 hidden lg:grid lg:grid-cols-[1fr_0.95fr] lg:gap-16">

          {/* Service List */}

          <div className="border-t border-[#dfe6e8]">

            {services.map((service, index) => {
              const isActive = activeService === service.id;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onMouseEnter={() =>
                    setActiveService(service.id)
                  }
                  onClick={() =>
                    setActiveService(service.id)
                  }
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={`group flex w-full items-center gap-5 border-b border-[#dfe6e8] py-6 text-left transition-all duration-300 sm:py-7 ${
                    isActive
                      ? "bg-[#f3f8f9] px-4"
                      : "px-0 hover:bg-[#f8faf9] hover:px-4"
                  }`}
                >

                  {/* Number */}

                  <span
                    className={`w-8 shrink-0 text-xs font-bold tracking-[0.12em] transition-colors ${
                      isActive
                        ? "text-[#f5a623]"
                        : "text-[#9aa9ad]"
                    }`}
                  >
                    {service.number}
                  </span>


                  {/* Title */}

                  <span
                    className={`flex-1 text-lg font-semibold tracking-[-0.02em] transition-colors sm:text-xl ${
                      isActive
                        ? "text-[#071a21]"
                        : "text-[#52636a] group-hover:text-[#071a21]"
                    }`}
                  >
                    {service.title}
                  </span>


                  {/* Plus / Minus */}

                  <span
                    className={`hidden h-9 w-9 items-center justify-center rounded-full transition-all duration-300 sm:flex ${
                      isActive
                        ? "bg-[#071a21] text-white"
                        : "bg-[#e8f5f8] text-[#087ea4]"
                    }`}
                  >
                    {isActive ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>


                  {/* Arrow */}

                  <ArrowUpRight
                    size={19}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "-translate-y-0.5 translate-x-0.5 text-[#087ea4]"
                        : "text-[#a7b4b8]"
                    }`}
                  />

                </motion.button>
              );
            })}
          </div>


          {/* Active Service Image */}

          <motion.div
            layout
            className="relative min-h-[420px] overflow-hidden bg-[#071a21]"
          >

            <AnimatePresence mode="wait">

              {active && (
                <motion.div
                  key={active.id}
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="absolute inset-0"
                >

                  <img
                    src={serviceImages[active.id]}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />


                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a21] via-[#071a21]/45 to-transparent" />


                  {/* Content */}

                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">

                    <div className="mb-4 flex items-center gap-3">

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a623] text-[#071a21]">
                        <active.icon
                          size={17}
                          strokeWidth={2}
                        />
                      </span>

                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                        {active.shortTitle}
                      </span>

                    </div>


                    <h3 className="max-w-md text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {active.title}
                    </h3>


                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                      {active.description}
                    </p>


                    <a
                      href="#contact"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
                    >
                      Discuss your project

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </motion.div>
        </div>


        {/* =====================================================
            TABLET + MOBILE VERSION
            Below lg = CLICKABLE EXPANDABLE CARDS
        ====================================================== */}

        <div className="mt-12 lg:hidden">

          <div className="overflow-hidden border-t border-[#dfe6e8]">

            {services.map((service, index) => {
              const isActive =
                activeService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="border-b border-[#dfe6e8]"
                >

                  {/* =================================================
                      CARD HEADER
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleService(service.id)
                    }
                    className={`flex w-full items-center gap-4 px-1 py-6 text-left transition-colors duration-300 sm:px-2 sm:py-7 ${
                      isActive
                        ? "bg-[#f3f8f9]"
                        : "hover:bg-[#f8faf9]"
                    }`}
                  >

                    {/* Number */}

                    <span
                      className={`w-8 shrink-0 text-xs font-bold tracking-[0.12em] ${
                        isActive
                          ? "text-[#f5a623]"
                          : "text-[#9aa9ad]"
                      }`}
                    >
                      {service.number}
                    </span>


                    {/* Icon */}

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#071a21] text-white"
                          : "bg-[#e8f5f8] text-[#087ea4]"
                      }`}
                    >
                      <service.icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>


                    {/* Title */}

                    <span
                      className={`flex-1 text-base font-semibold tracking-[-0.02em] sm:text-lg ${
                        isActive
                          ? "text-[#071a21]"
                          : "text-[#52636a]"
                      }`}
                    >
                      {service.title}
                    </span>


                    {/* Plus / Minus */}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#071a21] text-white"
                          : "bg-[#e8f5f8] text-[#087ea4]"
                      }`}
                    >
                      {isActive ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </span>

                  </button>


                  {/* =================================================
                      EXPANDED CONTENT
                  ================================================== */}

                  <AnimatePresence initial={false}>

                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >

                        <div className="pb-6">

                          {/* Image */}

                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 1.02,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                            className="relative mx-1 aspect-[16/9] overflow-hidden bg-[#071a21] sm:mx-2 sm:aspect-[2/1]"
                          >

                            <img
                              src={
                                serviceImages[
                                  service.id
                                ]
                              }
                              alt={service.title}
                              className="h-full w-full object-cover"
                            />

                            {/* Image overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071a21]/80 via-transparent to-transparent" />


                            {/* Image label */}

                            <div className="absolute bottom-4 left-4 flex items-center gap-2">

                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5a623] text-[#071a21]">
                                <service.icon
                                  size={15}
                                  strokeWidth={2}
                                />
                              </span>

                              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                                {service.shortTitle}
                              </span>

                            </div>

                          </motion.div>


                          {/* Text Content */}

                          <div className="px-1 pt-6 sm:px-2">

                            <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#071a21] sm:text-2xl">
                              {service.title}
                            </h3>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68777d] sm:text-base sm:leading-7">
                              {service.description}
                            </p>


                            {/* CTA */}

                            <a
                              href="#contact"
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071a21]"
                            >
                              Discuss your project

                              <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              />
                            </a>

                          </div>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>
        </div>


        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 flex flex-col gap-4 border-t border-[#dfe6e8] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="text-sm text-[#68777d]">
            Need something more specific?
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#071a21] hover:text-[#087ea4]"
          >
            Talk to our team

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;