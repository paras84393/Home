import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What digital marketing services does Xntrova offer?",
    answer:
      "Xntrova provides SEO, paid advertising, social media marketing, content marketing, e-commerce marketing and website development services.",
  },
  {
    question: "How do you create a digital marketing strategy?",
    answer:
      "We first understand your business, audience and goals. Based on that, we create a strategy around the channels and activities most relevant to your business.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on the service and your current digital presence. SEO generally takes longer to show results, while paid campaigns can generate data and results much faster.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes. Our approach can be adapted according to the business, its goals, target audience and available budget.",
  },
  {
    question: "How do I get started with Xntrova?",
    answer:
      "Simply get in touch with our team. We can understand your requirements and discuss the right digital marketing approach for your business.",
  },
  {
    question: "Can I get a digital audit for my business?",
    answer:
      "Yes. You can contact the team to discuss your business and get a better understanding of the areas that can be improved.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section-x overflow-hidden bg-[var(--x-paper)]"
    >
      <div className="container-x">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <span className="eyebrow">FAQ</span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--x-ink)] md:text-5xl">
              Questions?
              <br />
              <span className="text-[var(--x-blue)]">
                We've got answers.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[var(--x-muted)]">
              A few things businesses usually want to know before
              getting started with us.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--x-ink)]"
            >
              Still have a question?
              <span className="flex h-9 w-9 items-center justify-center border border-[var(--x-border)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--x-ink)]">
                →
              </span>
            </a>
          </div>

          {/* FAQ List */}
          <div className="border-t border-[var(--x-border)]">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--x-border)]"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base font-semibold tracking-tight transition-colors duration-300 md:text-lg ${
                        isOpen
                          ? "text-[var(--x-blue)]"
                          : "text-[var(--x-ink)]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-[var(--x-blue)] bg-[var(--x-blue)] text-white"
                          : "border-[var(--x-border)] text-[var(--x-muted)]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-[var(--x-muted)] md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;