"use client";

import React from "react";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Fade from "../../components/Fade";
import Button from "../../components/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <style>{`
        html, body, main { overflow-x: hidden; }
        .clip-section-bl {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px));
        }
        h1, h2, h3 { font-weight: 600 !important; }
      `}</style>

      <Header />

      <section className="bg-[#f6f2ee] px-5 pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-[1120px]">
          <Fade>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
              Contact OwlSafe
            </p>

            <h1 className="max-w-[760px] text-[44px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#1b3a1f] md:text-[68px]">
              Get in Touch About an Asbestos Survey
            </h1>

            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-[#1b3a1f]/82 md:text-[16px] md:leading-8">
              Have a question about asbestos surveys, property types, survey requirements
              or arranging a quote? Contact OwlSafe and we’ll point you in the right
              direction.
            </p>
          </Fade>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <div className="max-w-[720px]">
              <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[46px]">
                Contact Details
              </h2>

              <div className="mt-6 space-y-5 text-[14px] leading-7 text-slate-600">
                <p>
                  For general questions, quote enquiries, partnership enquiries or
                  anything relating to asbestos survey coverage across Leeds, email us
                  using the address below.
                </p>

                <p>
                  If you already know you need a survey quote, the quickest route is to
                  use the quote page so the relevant property details are captured from
                  the start.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/quote">Get a quote</Button>
                <Button ghost clipped={false} href="/areas-we-cover">
                  View areas we cover
                </Button>
              </div>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <Mail className="h-9 w-9 text-[#305e2f]" />

              <h2 className="mt-5 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f]">
                Email OwlSafe
              </h2>

              <a
                href="mailto:info@owlsafe.co.uk"
                className="mt-5 inline-flex items-center gap-2 text-[18px] font-semibold text-[#305e2f] underline underline-offset-4 transition hover:text-[#1b3a1f]"
              >
                info@owlsafe.co.uk
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-5 text-[14px] leading-7 text-slate-600">
                Please include the property location, property type and a brief summary
                of what you need help with. For planned works, it helps to mention what
                areas of the building may be disturbed.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <Fade>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Survey quote enquiries",
                  text: "Use the quote form if you need a price for a management, refurbishment, demolition or reinspection survey.",
                },
                {
                  title: "Property questions",
                  text: "Email us if you are unsure what type of survey may be relevant for your property or planned works.",
                },
                {
                  title: "Surveyor partnerships",
                  text: "Asbestos survey providers covering Leeds can contact OwlSafe about potential enquiry referrals.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col border border-[#d8e2d6] bg-white p-6 shadow-sm"
                >
                  <ShieldCheck className="h-7 w-7 text-[#305e2f]" />
                  <h3 className="mt-5 text-[22px] font-semibold leading-tight text-[#1b3a1f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
              Need a survey quote?
            </p>
            <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">
              Send the property details and get started.
            </h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              The quote form captures the key details needed to understand your property,
              survey type and location.
            </p>
          </div>

          <Button yellow href="/quote" className="w-full md:w-[230px]">
            Get a quote
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
