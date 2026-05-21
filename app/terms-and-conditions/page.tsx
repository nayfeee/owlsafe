import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms and Conditions | OwlSafe",
  description:
    "Read the OwlSafe website terms and conditions, including use of this website, quote requests and third-party survey provider information.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <Header />

      <section className="px-5 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
            OwlSafe
          </p>

          <h1 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#1b3a1f] md:text-[58px]">
            Terms and Conditions
          </h1>

          <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-600">
            These terms explain how this website may be used and how quote enquiries submitted through OwlSafe are handled.
          </p>

          <p className="mt-3 text-[13px] leading-6 text-slate-500">
            Last updated: May 2026
          </p>

          <div className="mt-10 space-y-9 border border-[#d8e2d6] bg-white p-7 shadow-sm md:p-9">
            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                About OwlSafe
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                OwlSafe is an enquiry and information website that helps users request asbestos survey quotes and connect with suitable asbestos survey providers covering their area.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                You can contact us at{" "}
                <a href="mailto:info@owlsafe.co.uk" className="font-semibold text-[#305e2f] underline underline-offset-4">
                  info@owlsafe.co.uk
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Website Information
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                The information on this website is provided for general guidance only. It should not be treated as legal, health and safety, construction, surveying or professional asbestos advice.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                You should always rely on advice from a suitably qualified asbestos professional, surveyor, contractor or other competent person before making decisions about asbestos, property works or legal compliance.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Quote Requests
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                When you submit a quote request, you agree that your enquiry details may be shared with suitable asbestos survey providers or relevant third parties who may contact you about your request.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                Submitting an enquiry does not guarantee that a provider will contact you, provide a quote, accept the work or complete the survey within a particular timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Third-Party Providers
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                Any survey provider, contractor, consultant or third party you choose to instruct is independent from OwlSafe unless clearly stated otherwise.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                OwlSafe is not responsible for the advice, surveys, reports, pricing, availability, workmanship, conduct, omissions, errors or services of any third-party provider.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                You are responsible for checking that any provider you instruct is suitably qualified, insured, competent and appropriate for your requirements.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                No Guarantee of Results
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We do not guarantee that using this website will result in a quote, survey booking, specific price, particular provider, or any specific outcome.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Liability
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                To the fullest extent permitted by law, OwlSafe is not liable for loss, damage, delay, cost, claim or dispute arising from your use of this website, reliance on general website information, or dealings with any third-party provider.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                Nothing in these terms excludes or limits liability where it would be unlawful to do so.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Acceptable Use
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                You must not misuse this website, submit false or misleading information, attempt to interfere with website operation, or use the website for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                External Links
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                This website may link to external websites. We are not responsible for third-party website content, accuracy, availability, policies or services.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Changes to These Terms
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We may update these terms from time to time. The latest version will be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Governing Law
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                These terms are governed by the laws of England and Wales.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
