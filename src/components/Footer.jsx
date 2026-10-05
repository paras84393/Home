import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[var(--x-dark)] text-white">

      {/* Main Footer */}
      <div className="container-x py-16 md:py-20">

        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">

          {/* ================= BRAND ================= */}
          <div className="max-w-sm">

            <a
              href="#"
              className="inline-flex items-center"
            >
              <span className="text-2xl font-bold tracking-tight text-white">
                Xntrova
                <span className="text-[var(--x-gold)]">.</span>
              </span>
            </a>

            <p className="mt-6 text-sm leading-7 text-white/55">
              Driven by ideas. Focused on results. We help businesses
              build stronger digital experiences and turn their online
              presence into measurable growth.
            </p>

{/* Social Icons */}
<div className="mt-7 flex items-center gap-3">

  {/* LinkedIn */}
  <a
    href="#"
    aria-label="LinkedIn"
    className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--x-gold)] hover:bg-white/[0.05]"
  >
    <img
      src="/linkedin.png"
      alt="LinkedIn"
      className="h-8 w-8 object-contain"
    />
  </a>

  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--x-gold)] hover:bg-white/[0.05]"
  >
    <img
      src="/insta.jpg"
      alt="Instagram"
      className="h-8 w-8 object-contain"
    />
  </a>

  {/* Facebook */}
  <a
    href="#"
    aria-label="Facebook"
    className="group flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--x-gold)] hover:bg-white/[0.05]"
  >
    <img
      src="/facebook.png"
      alt="Facebook"
      className="h-8 w-8 object-contain"
    />
  </a>

</div>
</div>

          {/* ================= COMPANY ================= */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--x-gold)]">
              Company
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/55">

              <a
                href="#about"
                className="block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                About Us
              </a>

              <a
                href="#why-us"
                className="block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Why Xntrova
              </a>

              <a
                href="#services"
                className="block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Our Work
              </a>

              <a
                href="#contact"
                className="block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Contact
              </a>

            </div>

          </div>


          {/* ================= SERVICES ================= */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--x-gold)]">
              Services
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/55">

              <span className="block transition-colors hover:text-white">
                Search Engine Optimization
              </span>

              <span className="block transition-colors hover:text-white">
                Paid Advertising
              </span>

              <span className="block transition-colors hover:text-white">
                Social Media Marketing
              </span>

              <span className="block transition-colors hover:text-white">
                Content Marketing
              </span>

              <span className="block transition-colors hover:text-white">
                Website Development
              </span>

              <span className="block transition-colors hover:text-white">
                E-Commerce Marketing
              </span>

            </div>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--x-gold)]">
              Get In Touch
            </p>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:info@xntrova.com"
                className="group flex gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 flex-shrink-0 text-[var(--x-gold)]"
                />

                <span>
                  info@xntrova.com
                </span>
              </a>


              {/* Phone */}
              <a
                href="tel:+918683828646"
                className="group flex gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 flex-shrink-0 text-[var(--x-gold)]"
                />

                <span>
                  +91 868-382-8646
                </span>
              </a>


              {/* Address */}
              <div className="flex gap-3 text-sm leading-6 text-white/60">

                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 flex-shrink-0 text-[var(--x-gold)]"
                />

                <span>
                  A107, 2nd Floor,
                  <br />
                  Sector 8, Dwarka,
                  <br />
                  New Delhi - 110077
                </span>

              </div>

            </div>


            {/* Footer CTA */}
            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
            >

              Start a Conversation

              <span className="flex h-8 w-8 items-center justify-center border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[var(--x-gold)] group-hover:text-[var(--x-gold)]">
                <ArrowUpRight size={15} />
              </span>

            </a>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Xntrova Technologies. All rights reserved.
          </p>


          <div className="flex flex-wrap items-center gap-5">

            <a
              href="#"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms & Conditions
            </a>

            <button
              onClick={scrollToTop}
              className="transition-colors duration-200 hover:text-[var(--x-gold)]"
            >
              Back to top ↑
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;