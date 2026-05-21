"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ClipboardCheck, ShieldCheck } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Fade from "../../components/Fade";
import { ASSETS } from "../data/site";

function InlineLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="font-semibold text-[#305e2f] underline underline-offset-4 transition hover:text-[#1b3a1f]"
    >
      {children}
    </a>
  );
}

function InnerTitle({
  eyebrow,
  children,
  intro,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  intro?: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-8 max-w-[820px] ${
        center ? "mx-auto text-left md:text-center" : ""
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
            light ? "text-[#e3c541]" : "text-[#305e2f]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-[32px] font-semibold leading-[1.06] tracking-[-0.04em] md:text-[46px] ${
          light ? "text-white" : "text-[#1b3a1f]"
        }`}
      >
        {children}
      </h2>

      {intro && (
        <div
          className={`mt-5 max-w-[760px] text-[14px] leading-7 ${
            center ? "md:mx-auto" : ""
          } ${light ? "text-white/78" : "text-slate-600"}`}
        >
          {intro}
        </div>
      )}
    </div>
  );
}

const baseInputClass =
  "border border-[#1b3a1f]/20 bg-white px-3 py-3.5 text-[13px] outline-none transition placeholder:text-slate-500 focus:border-[#1b3a1f] focus:ring-2 focus:ring-[#1b3a1f]/10";

function QuotePageForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const invalidClass = submitted
    ? "invalid:border-red-500 invalid:ring-2 invalid:ring-red-500/10"
    : "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(true);
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setLoading(false);
      return;
    }

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      postcode: formData.get("postcode"),
      propertyType: formData.get("propertyType"),
      surveyType: formData.get("surveyType"),
      reason: formData.get("reason"),
      additionalInfo: formData.get("additionalInfo"),
      website: formData.get("website"),
    };

    const phoneValue = String(payload.phone || "");

    if (!/^[0-9+\s()\-]{7,20}$/.test(phoneValue)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      let result: any = {};

      try {
        result = JSON.parse(text);
      } catch {
        console.error("API returned non-JSON:", text);
      }

      if (!res.ok) {
        console.error("Quote API error:", result);
        throw new Error(result?.error || "Failed to send enquiry");
      }

      setSuccess(true);
      form.reset();
      setSubmitted(false);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-[#d8e2d6] bg-[#dfe9dd] p-6 text-[#1b3a1f] shadow-[0_22px_55px_rgba(27,58,31,0.14)] md:p-7"
    >
      <div className="mb-6">
        <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f]">
          Request a Survey Quote
        </h2>
        <p className="mt-3 text-[13px] leading-6 text-slate-700">
          Most enquiries receive a response the same day.
        </p>
      </div>

      <div className="grid gap-3">
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <input
          name="name"
          className={`${baseInputClass} ${invalidClass}`}
          placeholder="Name"
          required
        />

        <input
          name="phone"
          type="text"
          inputMode="numeric"
          className={`${baseInputClass} ${invalidClass}`}
          placeholder="Phone Number"
          required
          minLength={7}
          maxLength={20}
          pattern="[0-9+\s()\-]{7,20}"
          title="Please enter a valid phone number"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9+\s()\-]/g,
              ""
            );
          }}
        />

        <input
          name="email"
          type="email"
          className={`${baseInputClass} ${invalidClass}`}
          placeholder="Email"
          required
        />

        <input
          name="postcode"
          className={`${baseInputClass} ${invalidClass}`}
          placeholder="Postcode"
          required
          pattern="^[A-Za-z]{1,2}[0-9][A-Za-z0-9]?\s?[0-9][A-Za-z]{2}$"
          title="Please enter a valid UK postcode"
        />

        <select
          name="propertyType"
          className={`${baseInputClass} ${invalidClass}`}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Type of property
          </option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Public sector / education</option>
          <option>Religious / community building</option>
          <option>Other</option>
        </select>

        <select
          name="surveyType"
          className={`${baseInputClass} ${invalidClass}`}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Type of survey
          </option>
          <option>Management survey</option>
          <option>Refurbishment survey</option>
          <option>Demolition survey</option>
          <option>Reinspection survey</option>
          <option>Sampling / testing</option>
          <option>Not sure</option>
        </select>

        <select
          name="reason"
          className={`${baseInputClass} ${invalidClass}`}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Reason for survey
          </option>
          <option>Buying a property</option>
          <option>Selling a property</option>
          <option>Renovation / refurbishment</option>
          <option>Demolition / strip-out</option>
          <option>Legal / compliance requirement</option>
          <option>General concern</option>
          <option>Other</option>
        </select>

        <textarea
          name="additionalInfo"
          className={`${baseInputClass} min-h-[105px] resize-none`}
          placeholder="Additional information"
        />
      </div>

      <label
        className={`mt-4 flex gap-2 text-[12px] leading-5 text-slate-700 ${
          submitted ? "has-[:invalid]:text-red-600" : ""
        }`}
      >
        <input
          type="checkbox"
          required
          className={`mt-0.5 accent-[#1b3a1f] ${
            submitted
              ? "invalid:outline invalid:outline-2 invalid:outline-red-500"
              : ""
          }`}
        />
        <span>
          I agree that my enquiry can be shared with qualified asbestos
          surveyors covering my area.
        </span>
      </label>

      <div className="mt-6">
        <button
          type="submit"
          disabled={loading}
          className="clip-corner inline-flex items-center justify-center gap-2 bg-[#1b3a1f] px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#305e2f] disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {success && (
        <p className="mt-4 text-[13px] font-semibold text-[#1b3a1f]">
          Thank you — your enquiry has been sent successfully.
        </p>
      )}

      {error && (
        <p className="mt-4 text-[13px] font-semibold text-red-700">{error}</p>
      )}
    </form>
  );
}

const trustPoints = [
  {
    title: "Fast quote responses",
    text: "Send the key property details once and receive guidance from survey professionals covering Leeds.",
  },
  {
    title: "Help choosing the right survey",
    text: "Not sure whether you need management, refurbishment, demolition or reinspection? Include the project details and ask.",
  },
  {
    title: "Residential and commercial enquiries",
    text: "Suitable for homeowners, landlords, managing agents, contractors, developers and duty holders.",
  },
];

const surveyLinks = [
  {
    title: "Management Survey",
    href: "/asbestos-management-survey-leeds",
    text: "For occupied buildings and ongoing asbestos management.",
  },
  {
    title: "Refurbishment Survey",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Before renovation, rewiring, strip-out or intrusive works.",
  },
  {
    title: "Demolition Survey",
    href: "/asbestos-demolition-survey-leeds",
    text: "Before full or partial demolition begins.",
  },
  {
    title: "Reinspection Survey",
    href: "/asbestos-reinspection-survey-leeds",
    text: "For monitoring known asbestos materials over time.",
  },
];

const faqs = [
  {
    q: "What details should I include in my quote request?",
    a: "Include the property postcode, property type, reason for the survey, whether work is planned, approximate size, access details, timescale and any known asbestos history.",
  },
  {
    q: "What if I do not know which survey I need?",
    a: (
      <>
        That is fine. Explain what you are doing with the property and a
        qualified survey professional can advise whether a{" "}
        <InlineLink href="/asbestos-management-survey-leeds">
          management survey
        </InlineLink>
        ,{" "}
        <InlineLink href="/asbestos-refurbishment-survey-leeds">
          refurbishment survey
        </InlineLink>
        ,{" "}
        <InlineLink href="/asbestos-demolition-survey-leeds">
          demolition survey
        </InlineLink>{" "}
        or{" "}
        <InlineLink href="/asbestos-reinspection-survey-leeds">
          reinspection survey
        </InlineLink>{" "}
        is most suitable.
      </>
    ),
  },
  {
    q: "How quickly will I get a response?",
    a: "Many enquiries can receive a fast response, especially where the postcode, survey reason and property details are provided clearly.",
  },
  {
    q: "Can I request a quote for commercial premises?",
    a: "Yes. Quote enquiries can be arranged for commercial buildings, offices, retail units, warehouses, schools, industrial premises, managed buildings and landlord portfolios.",
  },
];

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <style>{`
        html, body, main { overflow-x: hidden; }
        .clip-corner { clip-path: polygon(0 0, 100% 0, 100% 100%, 13px 100%, 0 calc(100% - 13px)); }
        .clip-section-bl { clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px)); }
        h1, h2, h3 { font-weight: 600 !important; }
        .dark-link a { color: rgba(255,255,255,0.92) !important; }
        .dark-link a:hover { color: #e3c541 !important; }
      `}</style>

      <Header />

      <section className="relative overflow-hidden bg-[#f6f2ee] px-5 pb-16 pt-12 md:min-h-screen md:pb-20 md:pt-[170px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-large.png"
            alt="Asbestos survey quote in Leeds"
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/86 via-52% to-[#f6f2ee]/18" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f6f2ee]/58 via-transparent to-[#f6f7f3]/72" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="mt-1 flex justify-center md:hidden">
            <a href="/" aria-label="OwlSafe home">
              <img
                src={ASSETS.logo}
                alt="OwlSafe"
                className="h-[102px] w-auto"
              />
            </a>
          </div>

          <div className="mt-5 grid gap-10 md:mt-0 md:grid-cols-[0.48fr_0.52fr] md:items-center">
            <Fade>
              <div>
                <h1 className="max-w-[620px] text-[43px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#1b3a1f] md:text-[66px]">
                  Request an asbestos survey quote in Leeds
                </h1>

                <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-slate-650">
                  Get a fast quote for asbestos surveys across Leeds and
                  surrounding areas. Suitable for homes, landlords, managed
                  buildings, commercial premises, refurbishment projects and
                  demolition work.
                </p>

                <div className="mt-8 grid gap-4">
                  {trustPoints.map((item) => (
                    <div
                      key={item.title}
                      className="border-l-4 border-[#1b3a1f] bg-white/76 p-5 shadow-sm backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d8e2d6] bg-[#eef4eb] text-[#1b3a1f]">
                          <Check className="h-4 w-4" />
                        </div>
                        <div>
                          <h2 className="text-[20px] font-semibold leading-tight text-[#1b3a1f]">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-[13px] leading-6 text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 max-w-[540px] text-[12px] leading-6 text-slate-500">
                  Not sure what you need? Add the property details and planned
                  work. You do not need to choose the perfect survey type before
                  requesting a quote.
                </p>
              </div>
            </Fade>

            <Fade delay={0.06}>
              <QuotePageForm />
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={
              <p>
                The quote process is designed to be straightforward. The more
                detail you provide, the easier it is for a surveyor to
                understand the scope and respond accurately.
              </p>
            }
          >
            What Happens After You Request a Quote?
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Your enquiry is reviewed",
                text: "Your property details, postcode, survey reason and timescale help determine the most suitable survey type.",
              },
              {
                title: "A surveyor responds",
                text: "A qualified asbestos survey professional covering Leeds can advise on pricing, access requirements and availability.",
              },
              {
                title: "Survey arranged if suitable",
                text: "If you are happy to proceed, the survey can be booked and the report prepared after inspection and any required analysis.",
              },
            ].map((item, i) => (
              <Fade key={item.title} delay={i * 0.04}>
                <article className="flex h-full min-h-[220px] flex-col border border-[#d8e2d6] bg-[#f6f7f3] p-6 shadow-sm">
                  <ClipboardCheck className="h-8 w-8 text-[#305e2f]" />
                  <h3 className="mt-5 text-[22px] font-semibold leading-tight text-[#1b3a1f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={
              <p>
                If you already know the survey type you need, you can include it
                in the form. If not, these pages explain the differences.
              </p>
            }
          >
            Survey Types You Can Request
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-4">
            {surveyLinks.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group flex h-full min-h-[220px] flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <ShieldCheck className="h-8 w-8 text-[#305e2f]" />
                  <a
                    href={card.href}
                    className="mt-5 text-[20px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]"
                  >
                    {card.title}
                  </a>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {card.text}
                  </p>
                  <a
                    href={card.href}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle light center={false}>
              Clear quote details help avoid delays
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-white/76">
              <p>
                Asbestos survey pricing depends on the type of survey, property
                size, access, sampling requirements, timescale and whether
                refurbishment or demolition work is planned.
              </p>
              <p>
                For larger commercial buildings, schools, industrial premises or
                complex projects, include as much detail as possible about the
                site and the required works.
              </p>
              <p>
                You can also read our{" "}
                <a
                  href="/asbestos-survey-cost-leeds"
                  className="font-semibold text-[#e3c541] underline underline-offset-4 transition hover:text-[#ead566]"
                >
                  asbestos survey cost guide
                </a>{" "}
                before requesting a quote.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.04em]">
                Useful details to include
              </h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Property postcode and type",
                  "Reason for the survey",
                  "Approximate property size",
                  "Whether work is planned",
                  "Which areas need inspecting",
                  "Access restrictions or urgency",
                  "Known asbestos history",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-3 text-[13px] leading-6 text-white/82"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#e3c541]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section id="faqs" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src="/images/FAQs.png"
            alt="Frequently asked questions"
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/90 to-[#f6f2ee]/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="max-w-[760px]">
            <InnerTitle center={false}>
              Frequently Asked Questions About Quote Requests
            </InnerTitle>

            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">
              {faqs.map(({ q, a }, i) => (
                <details
                  key={q}
                  open={i === 0}
                  className="group border-b border-[#d8e2d6] last:border-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]">
                    <span>{q}</span>
                    <span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="px-6 pb-6">
                    <p className="max-w-[90%] text-[14px] leading-7 text-slate-600">
                      {a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}