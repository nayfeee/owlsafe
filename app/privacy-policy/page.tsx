import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | OwlSafe",
  description:
    "Read the OwlSafe privacy policy, including how enquiry details, analytics data and cookies may be used.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <Header />

      <section className="px-5 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
            OwlSafe
          </p>

          <h1 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#1b3a1f] md:text-[58px]">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-600">
            This privacy policy explains how OwlSafe collects, uses and protects information submitted through this website.
          </p>

          <p className="mt-3 text-[13px] leading-6 text-slate-500">
            Last updated: May 2026
          </p>

          <div className="mt-10 space-y-9 border border-[#d8e2d6] bg-white p-7 shadow-sm md:p-9">
            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Who We Are
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                OwlSafe is a website that helps users request asbestos survey quotes and connect with suitable asbestos survey providers covering their area.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                If you have any questions about this privacy policy, contact us at{" "}
                <a href="mailto:info@owlsafe.co.uk" className="font-semibold text-[#305e2f] underline underline-offset-4">
                  info@owlsafe.co.uk
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Information We Collect
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We may collect information you provide through enquiry forms, including your name, phone number, email address, postcode, property type, survey type, reason for the survey and any additional information you choose to send.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We may also collect basic technical and usage information through analytics tools, including pages visited, device type, approximate location, browser type, referral source and website interaction data.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                How We Use Your Information
              </h2>
              <div className="mt-4 space-y-3 text-[14px] leading-7 text-slate-600">
                <p>We use your information to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Respond to asbestos survey enquiries.</li>
                  <li>Pass relevant enquiry details to suitable asbestos survey providers covering your area.</li>
                  <li>Help survey providers contact you about your enquiry.</li>
                  <li>Improve the website, content, user experience and enquiry process.</li>
                  <li>Monitor website performance, traffic and search visibility.</li>
                  <li>Keep appropriate records of enquiries and communications.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Sharing Your Information
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                When you submit an enquiry, we may share your details with one or more asbestos survey providers, contractors or relevant third parties who may be able to assist with your request.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We do not sell your personal information. We only share information where it is necessary to respond to your enquiry, operate the website, comply with legal requirements or protect our legitimate interests.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Analytics, Search Console & Cookies
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                This website may use tools such as Google Analytics, Google Search Console and Google Tag Manager to understand website performance, search visibility and user interaction. These tools may use cookies or similar technologies.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                Non-essential cookies, such as analytics cookies, should only be used where consent has been provided through the website cookie banner or consent tool.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Legal Basis for Processing
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We may process your information because you have requested a quote, because it is necessary for our legitimate business interests, because you have given consent for certain cookies or analytics, or because we need to comply with a legal obligation.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                How Long We Keep Information
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We only keep personal information for as long as reasonably necessary for enquiry handling, record keeping, legal, accounting or business purposes. Analytics data may be retained according to the settings of the analytics provider.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Your Rights
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                You may have rights under UK data protection law, including the right to request access to your personal information, correction, deletion, restriction, objection and withdrawal of consent where consent is relied upon.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                To make a request, contact{" "}
                <a href="mailto:info@owlsafe.co.uk" className="font-semibold text-[#305e2f] underline underline-offset-4">
                  info@owlsafe.co.uk
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Third-Party Websites
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                This website may link to third-party websites. We are not responsible for the privacy practices, content or policies of third-party websites or providers.
              </p>
            </section>

            <section>
              <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-[#1b3a1f]">
                Changes to This Policy
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-600">
                We may update this policy from time to time. The latest version will be published on this page.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
