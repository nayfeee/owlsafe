"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Fade from "./Fade";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reasons = [
    "Residential and commercial survey enquiries",
    "Management, refurbishment and demolition surveys",
    "Fast responses from qualified professionals",
    "Coverage across Leeds and surrounding areas",
    "Clear, compliance-focused reporting",
    "Help choosing the right type of survey",
  ];

  const baseInputClass =
    "border border-[#1b3a1f]/20 bg-white px-3 py-3.5 text-[13px] outline-none transition focus:border-[#1b3a1f] focus:ring-2 focus:ring-[#1b3a1f]/10";

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
    <section id="quote" className="bg-[#f6f7f3] px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1120px] overflow-hidden bg-[#102916] shadow-[0_18px_50px_rgba(27,58,31,0.12)] md:grid-cols-[0.48fr_0.52fr]">
        <Fade>
          <div className="flex h-full flex-col justify-center p-8 text-white md:p-10">
            <h2 className="text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[48px]">
              Arrange an Asbestos Survey in Leeds
            </h2>

            <p className="mt-6 text-[14px] leading-7 text-white/78">
              Request a fast quote for asbestos surveys across Leeds and surrounding areas.
            </p>

            <h3 className="mt-8 text-[22px] font-semibold text-white">
              Why request a quote?
            </h3>

            <div className="mt-5 grid gap-3 text-[13px] text-white/86">
              {reasons.map((x) => (
                <div key={x} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e3c541]" />
                  <span>{x}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 border-l-4 border-[#e3c541] pl-5 text-[14px] leading-7 text-white/78">
              Not sure which asbestos survey you need? Provide a few details about the property and a qualified surveyor can advise on the most suitable option.
            </p>
          </div>
        </Fade>

        <Fade delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="bg-[#dfe9dd] p-7 text-[#1b3a1f] md:p-8"
            noValidate
          >
            <h3 className="text-[28px] font-semibold leading-tight">
              Request a Survey Quote
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-slate-700">
              Most enquiries receive a response the same day.
            </p>

            <div className="mt-6 grid gap-3">
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
                I agree that my enquiry can be shared with qualified asbestos surveyors covering my area.
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
              <p className="mt-4 text-[13px] font-semibold text-red-700">
                {error}
              </p>
            )}
          </form>
        </Fade>
      </div>
    </section>
  );
}