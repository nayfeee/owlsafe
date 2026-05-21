import React from "react";
import { areaLinks, surveyLinks } from "../app/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#142d18] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.35fr_0.8fr_1fr_1fr]">
        <div>
          <div className="flex h-[20px] items-start">
            <a
              href="/"
              className="text-[32px] font-semibold leading-none tracking-[0.07em] text-white"
            >
              owlsafe
            </a>
          </div>

          <p className="mt-7 text-[13px] leading-6 text-white/65">
            Professional asbestos survey enquiries for homes, landlords,
            commercial properties and public buildings across Leeds and
            surrounding areas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold">Contact Us</h3>

          <div className="mt-4 grid gap-2 text-[13px] text-white/70">
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
            <a href="mailto:info@owlsafe.co.uk" className="hover:text-white">
              info@owlsafe.co.uk
            </a>
            <a href="/quote" className="hover:text-white">
              Get a Quote
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">Asbestos Surveys</h3>

          <div className="mt-4 grid gap-2 text-[13px] text-white/70">
            {surveyLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">Areas We Cover</h3>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[13px] text-white/70">
            {areaLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1120px] flex-col gap-2 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
        <p>Copyright © 2026 OwlSafe | Operated by <a href="https://www.northcrow.co.uk">Northcrow</a></p>

        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="/privacy-policy" className="hover:text-white/75">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="hover:text-white/75">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}