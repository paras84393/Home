import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { navLinks } from "../data/data";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-[0_4px_25px_rgba(7,26,33,0.06)] backdrop-blur-xl"
            : "border-b border-slate-100 bg-white"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}

         <a
  href="#home"
  className="group flex items-center"
  aria-label="Xntrova Home"
>
  <img
    src="/xntrova.png"
    alt="Xntrova Technologies"
    className=" w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
  />
</a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((link) => {
              const isServices = link.label === "Services";

              if (isServices) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-1.5 py-7
                                 text-[13px] font-semibold text-slate-700
                                 transition-colors duration-200
                                 hover:text-[#087ea4]"
                    >
                      {link.label}

                      <ChevronDown
                        size={14}
                        strokeWidth={1.8}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </a>

                    {/* Services dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 8,
                          }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-[64px] w-56
                                     -translate-x-1/2 rounded-xl
                                     border border-slate-200 bg-white
                                     p-2 shadow-[0_15px_45px_rgba(7,26,33,0.12)]"
                        >
                          {[
                            "SEO",
                            "Paid Advertising",
                            "Social Media",
                            "E-Commerce",
                            "Content Marketing",
                            "Web Development",
                          ].map((service) => (
                            <a
                              key={service}
                              href="#services"
                              className="block rounded-lg px-4 py-3
                                         text-[12px] font-medium text-slate-600
                                         transition-colors
                                         hover:bg-[#f4f8f8] hover:text-[#087ea4]"
                            >
                              {service}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-7 text-[13px] font-semibold
                             text-slate-700 transition-colors duration-200
                             hover:text-[#087ea4]
                             after:absolute after:bottom-[19px]
                             after:left-0 after:h-[2px] after:w-0
                             after:bg-[#f5a623]
                             after:transition-all after:duration-200
                             hover:after:w-full"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden lg:block">
            <a
              href="#contact"
               className="group flex items-center gap-2 rounded-lg
             bg-[#071a21] px-5 py-3
             !text-white
             text-[12px] font-bold tracking-wide
             transition-all duration-250
             hover:-translate-y-0.5 hover:bg-[#0d3039]
             hover:!text-white
             hover:shadow-[0_8px_22px_rgba(7,26,33,0.16)]"
            >
              Let's Talk

              <span
                className="flex h-5 w-5 items-center justify-center
                           rounded-full bg-[#f5a623] text-[#071a21]
                           transition-transform duration-200
                           group-hover:rotate-45"
              >
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center
                       rounded-lg border border-slate-200
                       text-[#071a21] transition-colors
                       hover:bg-slate-50 lg:hidden"
          >
            {mobileOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <AnimatePresence>
          {mobileOpen && (
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
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            >
              <div className="container-x py-5">

                <nav className="flex flex-col">

                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="flex items-center justify-between
                                 border-b border-slate-100 py-4
                                 text-[15px] font-semibold text-slate-700
                                 transition-colors hover:text-[#087ea4]"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="text-slate-400"
                      />
                    </motion.a>
                  ))}

                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="mt-5 flex items-center justify-center
                               gap-2 rounded-lg bg-[#071a21]
                               px-5 py-3.5 text-sm font-bold text-white"
                  >
                    Start a Conversation

                    <ArrowUpRight size={16} />
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;