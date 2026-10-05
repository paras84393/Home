import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const DigitalAudit = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="audit"
      className="section-x section-paper border-b border-[var(--x-border)]"
    >
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              Free Digital Audit
            </span>

            <h2 className="mt-5 max-w-[560px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--x-ink)] md:text-5xl">
              Find the gaps holding your{" "}
              <span className="text-[var(--x-blue)]">
                digital growth
              </span>{" "}
              back.
            </h2>

            <p className="mt-6 max-w-[540px] text-sm leading-7 text-[var(--x-muted)] md:text-base">
              Get a practical look at your website, SEO and digital
              presence — and discover where your next growth
              opportunity could be.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Search,
                  title: "SEO & visibility",
                  text: "Identify opportunities to improve how your brand gets found.",
                },
                {
                  icon: Globe,
                  title: "Website experience",
                  text: "Spot usability, performance and conversion gaps.",
                },
                {
                  icon: Sparkles,
                  title: "Growth opportunities",
                  text: "Understand where your digital efforts can perform better.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--x-border)] bg-white text-[var(--x-blue)]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[var(--x-ink)]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[var(--x-muted)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2 text-[11px] text-[var(--x-muted)]">
              <CheckCircle2
                size={14}
                className="text-[var(--x-blue)]"
              />
              No spam. Just practical insights.
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="border border-[var(--x-border)] bg-white p-6 shadow-[0_20px_60px_rgba(7,26,33,0.07)] md:p-8">
              {!submitted ? (
                <>
                  <div className="flex items-start justify-between border-b border-[var(--x-border)] pb-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--x-blue)]">
                        Start Here
                      </p>

                      <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-[var(--x-ink)]">
                        Get your free audit.
                      </h3>

                      <p className="mt-1.5 max-w-[390px] text-xs leading-5 text-[var(--x-muted)]">
                        Tell us a little about your business and
                        we'll take it from there.
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center bg-[var(--x-blue-light)] sm:flex">
                      <ShieldCheck
                        size={19}
                        className="text-[var(--x-blue)]"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="audit-name"
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--x-muted)]"
                        >
                          Name
                        </label>

                        <input
                          id="audit-name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="h-11 w-full rounded-lg border border-[var(--x-border)] bg-white px-3.5 text-[13px] text-[var(--x-ink)] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="audit-email"
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--x-muted)]"
                        >
                          Email
                        </label>

                        <input
                          id="audit-email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          className="h-11 w-full rounded-lg border border-[var(--x-border)] bg-white px-3.5 text-[13px] text-[var(--x-ink)] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="audit-phone"
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--x-muted)]"
                        >
                          Phone
                        </label>

                        <input
                          id="audit-phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          className="h-11 w-full rounded-lg border border-[var(--x-border)] bg-white px-3.5 text-[13px] text-[var(--x-ink)] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="audit-company"
                          className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--x-muted)]"
                        >
                          Company
                        </label>

                        <input
                          id="audit-company"
                          name="company"
                          type="text"
                          placeholder="Company name"
                          className="h-11 w-full rounded-lg border border-[var(--x-border)] bg-white px-3.5 text-[13px] text-[var(--x-ink)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="audit-website"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--x-muted)]"
                      >
                        Website URL
                      </label>

                      <div className="relative">
                        <Globe
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="audit-website"
                          name="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          required
                          className="h-11 w-full rounded-lg border border-[var(--x-border)] bg-white pl-10 pr-3.5 text-[13px] text-[var(--x-ink)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="audit-service"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-[var(--x-muted)]"
                      >
                        What can we help with?
                      </label>

                      <select
                        id="audit-service"
                        name="service"
                        defaultValue=""
                        className="h-11 w-full rounded-lg border border-[var(--x-border)] bg-white px-3.5 text-[13px] text-[var(--x-ink)] transition-all"
                      >
                        <option
                          value=""
                          disabled
                        >
                          Select a service
                        </option>

                        <option value="seo">
                          SEO
                        </option>

                        <option value="paid-advertising">
                          Paid Advertising
                        </option>

                        <option value="social-media">
                          Social Media Marketing
                        </option>

                        <option value="ecommerce">
                          E-Commerce Marketing
                        </option>

                        <option value="content">
                          Content Marketing
                        </option>

                        <option value="web-development">
                          Website Development
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--x-dark)] text-[12px] font-bold tracking-wide text-white transition-all duration-200 hover:bg-[#0d3039]"
                    >
                      Get My Free Audit

                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.3}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>

                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                      <ShieldCheck
                        size={12}
                        strokeWidth={1.8}
                      />

                      <span>
                        Your information stays private. No spam.
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center bg-[var(--x-blue-light)]">
                    <CheckCircle2
                      size={28}
                      className="text-[var(--x-blue)]"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--x-ink)]">
                    You're on the list.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--x-muted)]">
                    Thanks for reaching out. Our team can review
                    your details and get back to you with the next
                    steps.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold text-[var(--x-blue)] underline underline-offset-4"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAudit;