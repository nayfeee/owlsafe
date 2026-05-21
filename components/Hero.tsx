"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ASSETS } from "../app/data/site";
import Fade from "./Fade";
import Button from "./Button";

type HeroProps = {
  title: string;
  intro: string;
  mobileIntro?: string;
  desktopImage: string;
  imageAlt: string;
  mobileImage?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  trustPoints?: string[];
  trustStrip?: string[];
  desktopObjectPosition?: string;
  mobileObjectPosition?: string;
};

export default function Hero({
  title,
  intro,
  mobileIntro,
  desktopImage,
  imageAlt,
  mobileImage,
  primaryHref = "/quote",
  primaryLabel = "Get a quote",
  secondaryHref,
  secondaryLabel = "Learn more",
  trustPoints = [],
  trustStrip = [],
  desktopObjectPosition = "center",
  mobileObjectPosition = "58% center",
}: HeroProps) {
  return (
    <>
      {/* DESKTOP HERO */}
      <section className="relative hidden min-h-screen overflow-hidden bg-[#f6f2ee] md:block">
        <img
          src={desktopImage}
          className="absolute inset-0 z-0 h-full w-full object-cover clip-section-bl"
          style={{ objectPosition: desktopObjectPosition }}
          alt={imageAlt}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f6f2ee]/76 via-[#f6f2ee]/34 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#f6f2ee]/22 via-transparent to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-[1120px] items-center px-5 pt-36">
          <Fade className="max-w-[575px] text-[#1b3a1f]">
            <h1 className="text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] md:text-[49px]">
              {title}
            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#1b3a1f]/90">
              {intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -2, 2, -2, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                <Button yellow href={primaryHref}>
                  {primaryLabel}
                </Button>
              </motion.div>

              {secondaryHref && (
                <Button ghost clipped={false} href={secondaryHref}>
                  {secondaryLabel}
                </Button>
              )}
            </div>

            {trustPoints.length > 0 && (
              <div className="mt-7 grid gap-2 text-[13px] font-medium text-[#1b3a1f]">
                {trustPoints.map((point) => (
                  <div className="flex items-start gap-3" key={point}>
                    <div className="mt-0.5 flex h-[18px] w-[18px] items-center justify-center border-2 border-[#1b3a1f] bg-white">
                      <Check className="h-3 w-3 text-[#1b3a1f]" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            )}
          </Fade>
        </div>
      </section>

      {/* MOBILE HERO */}
      <section className="relative h-[655px] overflow-hidden bg-[#f6f2ee] md:hidden">
        <img
          src={mobileImage || desktopImage}
          className="absolute inset-0 z-0 h-full w-full object-cover clip-section-bl"
          style={{ objectPosition: mobileObjectPosition }}
          alt={imageAlt}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f6f2ee]/92 via-[#f6f2ee]/68 to-[#f6f2ee]/8" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#f6f2ee]/38 via-transparent to-transparent" />

        <div className="relative z-20 flex h-[655px] flex-col px-4 pt-12">
          <div className="mt-1 flex justify-center">
            <img src={ASSETS.logo} alt="OwlSafe" className="h-[102px] w-auto" />
          </div>

          <div className="mt-5 text-[#1b3a1f]">
            <div className="max-w-[205px]">
              <h1 className="text-[21px] font-semibold leading-[0.98] tracking-[-0.03em]">
                {title}
              </h1>

              <p className="mt-4 text-[11px] leading-[1.7] text-[#1b3a1f]/90">
                {intro}
              </p>

              <div className="mt-5 grid max-w-[150px] gap-2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -2, 2, -2, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  className="w-full"
                >
                  <Button yellow href={primaryHref} className="w-full px-3 py-2 text-[9px]">
                    {primaryLabel}
                  </Button>
                </motion.div>

                {secondaryHref && (
                  <Button
                    ghost
                    clipped={false}
                    href={secondaryHref}
                    className="px-3 py-2 text-[9px]"
                  >
                    {secondaryLabel}
                  </Button>
                )}
              </div>

              {trustPoints.length > 0 && (
                <div className="mt-6 grid gap-2 text-[10px] leading-tight text-[#1b3a1f]">
                  {trustPoints.map((point) => (
                    <div className="flex items-start gap-2" key={point}>
                      <div className="mt-[1px] flex h-[12px] w-[12px] shrink-0 items-center justify-center border border-[#1b3a1f] bg-white">
                        <Check className="h-2 w-2 text-[#1b3a1f]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {trustStrip.length > 0 && (
        <section className="hidden bg-[#f6f2ee] px-5 py-5 md:block">
          <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-[#1b3a1f]/10 py-4 text-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1b3a1f]/72 md:gap-x-6 md:text-[11px]">
            {trustStrip.map((item) => (
              <span key={item} className="whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
