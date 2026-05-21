"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ASSETS, surveyLinks } from "../app/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSurveysOpen, setMobileSurveysOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-12 items-center justify-between bg-[#f6f2eef2] px-7 backdrop-blur-md md:hidden">
        <a
          href="/quote"
          className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#1b3a1f]"
        >
          Get a Quote
        </a>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="flex h-8 w-8 flex-col items-end justify-center gap-[5px]"
        >
          <span
            className={`block h-[2px] bg-[#1b3a1f] transition-all duration-200 ${
              mobileMenuOpen ? "w-6 translate-y-[7px] rotate-45" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-[#1b3a1f] transition-opacity duration-200 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] bg-[#1b3a1f] transition-all duration-200 ${
              mobileMenuOpen ? "w-6 -translate-y-[7px] -rotate-45" : "w-6"
            }`}
          />
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed left-4 right-4 top-14 z-50 overflow-hidden border border-[#d8e2d6] bg-[#f6f2eef7] shadow-[0_18px_45px_rgba(27,58,31,0.16)] backdrop-blur-md clip-section-bl md:hidden">
          <nav className="grid divide-y divide-[#1b3a1f]/10">
            <a
              href="/"
              className="px-5 py-4 text-[12px] font-extrabold uppercase tracking-[0.13em] text-[#1b3a1f] hover:bg-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>

            {/* FIXED MOBILE SURVEYS LINK */}
            <div>
              <div className="flex items-center justify-between">
                <a
                  href="/asbestos-surveys-leeds"
                  className="flex-1 px-5 py-4 text-[12px] font-extrabold uppercase tracking-[0.13em] text-[#1b3a1f] hover:bg-white/70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Asbestos Surveys
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setMobileSurveysOpen((current) => !current)
                  }
                  className="px-5 py-4 text-[#1b3a1f] hover:bg-white/70"
                  aria-label="Open asbestos surveys menu"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition duration-300 ${
                      mobileSurveysOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileSurveysOpen && (
                <div className="grid border-t border-[#1b3a1f]/10 bg-white/45">
                  {surveyLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-7 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a1f]/85 hover:bg-white/70 hover:text-[#305e2f]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/asbestos-survey-cost-leeds"
              className="px-5 py-4 text-[12px] font-extrabold uppercase tracking-[0.13em] text-[#1b3a1f] hover:bg-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Survey Cost
            </a>

            <a
              href="/areas-we-cover"
              className="px-5 py-4 text-[12px] font-extrabold uppercase tracking-[0.13em] text-[#1b3a1f] hover:bg-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Areas We Cover
            </a>

            <a
              href="/quote"
              className="px-5 py-4 text-[12px] font-extrabold uppercase tracking-[0.13em] text-[#1b3a1f] hover:bg-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get A Quote
            </a>
          </nav>
        </div>
      )}

      {/* DESKTOP HEADER */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 hidden px-5 py-3 transition-all duration-300 md:block ${
          scrolled
            ? "bg-[#f6f2eef2] shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between">
          <a href="/" aria-label="OwlSafe home">
            <img
              src={ASSETS.logo}
              alt="OwlSafe"
              className="h-[96px] w-auto md:h-[112px]"
            />
          </a>

          <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a1f] md:flex">
            <a href="/" className="hover:text-[#305e2f]">
              Home
            </a>

            <div className="group relative">
              <a
                href="/asbestos-surveys-leeds"
                className="inline-flex items-center gap-1 hover:text-[#305e2f]"
              >
                Asbestos Surveys
                <ChevronDown className="h-3 w-3 transition duration-300 group-hover:rotate-180" />
              </a>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[310px] -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden border border-[#d8e2d6] bg-[#f6f2eef4] p-3 shadow-[0_18px_45px_rgba(27,58,31,0.14)] backdrop-blur-md clip-section-bl">
                  <div className="grid gap-1">
                    {surveyLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center justify-between px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#1b3a1f] transition hover:bg-white/70 hover:text-[#305e2f]"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-3 w-3 opacity-0 transition group-hover/item:translate-x-0.5 group-hover/item:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/asbestos-survey-cost-leeds"
              className="hover:text-[#305e2f]"
            >
              Survey Cost
            </a>

            <a href="/areas-we-cover" className="hover:text-[#305e2f]">
              Areas We Cover
            </a>
          </nav>

          <a
            href="/quote"
            className="hidden items-center justify-center bg-[#e3c541] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1b3a1f] transition hover:bg-[#ead566] clip-corner md:inline-flex"
          >
            Get a quote
          </a>
        </div>
      </header>
    </>
  );
}