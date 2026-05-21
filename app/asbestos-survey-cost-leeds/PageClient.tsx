"use client";

import React from "react";
import { ArrowRight, Check, ShieldCheck, ClipboardCheck, PoundSterling } from "lucide-react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Fade from "../../components/Fade";
import Button from "../../components/Button";
import QuoteForm from "../../components/QuoteForm";

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
    <div className={`mb-8 max-w-[820px] ${center ? "mx-auto text-left md:text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] ${light ? "text-[#e3c541]" : "text-[#305e2f]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-[32px] font-semibold leading-[1.06] tracking-[-0.04em] md:text-[46px] ${light ? "text-white" : "text-[#1b3a1f]"}`}>
        {children}
      </h2>
      {intro && (
        <div className={`mt-5 max-w-[760px] text-[14px] leading-7 ${center ? "md:mx-auto" : ""} ${light ? "text-white/78" : "text-slate-600"}`}>
          {intro}
        </div>
      )}
    </div>
  );
}

function InlineLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
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

const guidePrices = [
  {
    title: "Management Survey",
    price: "Typically from around £200–£400+ for smaller buildings",
    href: "/asbestos-management-survey-leeds",
    text: "Usually the most straightforward survey type because it focuses on accessible materials within occupied or normally used buildings. Larger commercial buildings, schools or multi-site portfolios can cost more.",
  },
  {
    title: "Refurbishment Survey",
    price: "Typically from around £300–£700+ for smaller projects",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Often more involved because it may require intrusive access to areas affected by renovation, rewiring, strip-out or refurbishment work. Large commercial or public-sector projects can be significantly higher.",
  },
  {
    title: "Demolition Survey",
    price: "Typically from around £400–£1,000+ for smaller/simple projects",
    href: "/asbestos-demolition-survey-leeds",
    text: "Usually the most intrusive survey type, designed to inspect the structure before full or partial demolition begins. Complex demolition, industrial or multi-building projects can run into several thousand pounds.",
  },
  {
    title: "Reinspection Survey",
    price: "Often lower than a full new survey",
    href: "/asbestos-reinspection-survey-leeds",
    text: "Used where asbestos materials have already been identified and need to be monitored, reassessed and recorded over time. Cost depends on the number of materials and the quality of existing records.",
  },
];

const costFactors = [
  "Property size and layout",
  "Survey type required",
  "Property use and occupancy",
  "Number of rooms or areas to inspect",
  "Accessibility and restricted areas",
  "Sampling requirements",
  "Project scope and planned works",
  "Whether the building is occupied or vacant",
  "Urgency and reporting timescale",
  "Location and surveyor availability",
];

const propertyTypes = [
  {
    title: "Domestic houses and flats",
    text: "Costs are often lower than larger commercial surveys, but this depends on the planned works, property age, loft access, garages, outbuildings, sampling needs and whether intrusive inspection is required.",
  },
  {
    title: "Garages and outbuildings",
    text: "Older garage roofs, wall panels, soffits and asbestos cement products are common reasons for survey or sampling enquiries, especially where removal or demolition is planned.",
  },
  {
    title: "Commercial premises",
    text: "A small shop unit may be straightforward, while offices, warehouses, schools, industrial units and multi-tenant buildings can require more detailed inspection and reporting.",
  },
  {
    title: "Schools, churches and public buildings",
    text: "Costs can be affected by access windows, safeguarding requirements, site size, number of buildings, existing asbestos records and duty-holder reporting needs.",
  },
  {
    title: "Industrial units and warehouses",
    text: "Older industrial premises may include asbestos roofing, wall panels, pipe insulation, plant rooms, service ducts, floor tiles and fire protection materials.",
  },
];

const faqs = [
  {
    q: "How much does an asbestos survey cost in Leeds?",
    a: "The cost depends on the survey type, property size, access requirements, sampling needs and project scope. Small management surveys are usually more straightforward, while refurbishment and demolition surveys are typically more intrusive and may cost more. Large commercial, industrial or public-sector projects can cost significantly more than simple domestic surveys.",
  },
  {
    q: "Can I get a fixed price for an asbestos survey?",
    a: "In many cases, surveyors can provide a fixed quote after reviewing the property details and survey requirements. Pricing depends on scope, access, survey type and sampling requirements.",
  },
  {
    q: "Why do refurbishment surveys cost more than management surveys?",
    a: "Refurbishment surveys are more intrusive because they inspect areas that may be disturbed during planned works, including ceiling voids, wall cavities, flooring and service ducts.",
  },
  {
    q: "Why do demolition surveys cost more?",
    a: "Demolition surveys are usually fully intrusive and may need to inspect the whole structure before demolition begins. They are often more complex than management surveys, especially for large, unsafe, industrial, public-sector or multi-building sites.",
  },
  {
    q: "Are reinspection surveys cheaper than full surveys?",
    a: "They can be more straightforward where previous asbestos records are clear and only known materials need reassessing. Costs depend on the number of materials, building size and reporting requirements.",
  },
  {
    q: "Does asbestos testing cost extra?",
    a: "Sometimes. Sampling may be included within the survey quote or charged separately depending on the provider and the number of samples required.",
  },
  {
    q: "Do I need an asbestos survey before renovation work?",
    a: (
      <>
        If the property was built or refurbished before 2000 and the work may disturb the building fabric, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment asbestos survey</InlineLink> is usually required.
      </>
    ),
  },
  {
    q: "Do I need an asbestos survey before removing a garage roof?",
    a: (
      <>
        If the roof may contain asbestos cement sheets and removal or demolition is planned, a suitable survey or sampling may be required. See our <InlineLink href="/asbestos-demolition-survey-leeds">demolition survey</InlineLink> page.
      </>
    ),
  },
  {
    q: "What is the cheapest asbestos survey?",
    a: "Management surveys are often the most straightforward survey type, but the cheapest option is not always suitable. The correct survey depends on the property and reason for the inspection.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "Many enquiries receive a fast response, especially when the property details, postcode, survey type and reason for the survey are provided clearly.",
  },
];

export default function AsbestosSurveyCostLeedsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <style>{`
        html, body, main { overflow-x: hidden; }
        .clip-corner { clip-path: polygon(0 0, 100% 0, 100% 100%, 13px 100%, 0 calc(100% - 13px)); }
        .clip-section-bl { clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px)); }
        h1, h2, h3 { font-weight: 600 !important; }
        @media (min-width: 768px) {
          main > section:first-of-type > div:nth-of-type(1) {
            background:
              linear-gradient(to bottom, rgba(246,242,238,0.40) 0%, rgba(246,242,238,0.12) 18%, rgba(246,242,238,0) 34%),
              linear-gradient(to right, rgba(246,242,238,0.92) 0%, rgba(246,242,238,0.74) 36%, rgba(246,242,238,0.30) 60%, rgba(246,242,238,0) 80%) !important;
          }
        }
        @media (max-width: 767px) {
          main > section:nth-of-type(2),
          main > section:nth-of-type(2) > div.relative.z-20 {
            height: 665px !important;
          }
        }
        .dark-link a { color: rgba(255,255,255,0.92) !important; }
        .dark-link a:hover { color: #e3c541 !important; }
      `}</style>

      <Header />

      <Hero
        title="Asbestos Survey Cost in Leeds"
        intro="Understand typical asbestos survey costs in Leeds and what can affect the price of a survey for your property, project or compliance requirements. Get transparent guidance without misleading fixed-price promises."
        mobileIntro="Understand typical asbestos survey costs in Leeds and what affects pricing for management, refurbishment, demolition and reinspection surveys."
        desktopImage="/images/costs-hero.png"
        imageAlt="Asbestos survey cost guidance in Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-surveys-leeds"
        secondaryLabel="Compare survey types"
        desktopObjectPosition="center"
        mobileObjectPosition="72% center"
        trustPoints={[
          "Typical cost guidance without misleading fixed pricing",
          "Management, refurbishment, demolition and reinspection surveys",
          "Quotes from qualified asbestos survey professionals covering Leeds",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.56fr_0.44fr]">
          <Fade>
            <InnerTitle center={false} eyebrow="Cost guide" intro={<p>Every property is different. The figures below are broad guide ranges only, designed to help you understand the typical starting point and what may affect pricing.</p>}>
              How Much Does an Asbestos Survey Cost?
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>The cost of an asbestos survey in Leeds can vary significantly depending on the property and the type of survey required.</p>
              <p>Asbestos surveys are usually priced individually because the surveyor needs to understand the scope of work before giving an accurate quote. A small domestic inspection will not usually take the same time or involve the same access requirements as a large commercial building, school, warehouse or demolition project.</p>
              <p>These figures should be treated as guide prices only. Larger properties, complex access, urgent turnaround, multiple samples or more intrusive inspection requirements can increase the overall cost.</p>
              <p>Large commercial premises, schools, public buildings, industrial sites, multi-building portfolios and complex demolition projects can cost significantly more than the guide ranges shown here. In some cases, survey costs may run into several thousand pounds depending on access, scale, sampling, reporting requirements and project complexity.</p>
              <p>The best way to get accurate pricing is to provide details of the property, location, survey type and reason for the survey.</p>
            </div>

            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">Request a quote</Button>
              <Button yellow clipped={false} href="/asbestos-surveys-leeds" className="w-full">Compare surveys</Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="grid gap-4">
              {guidePrices.map((item) => (
                <a key={item.title} href={item.href} className="group border border-[#d8e2d6] bg-[#f6f7f3] p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#305e2f] hover:bg-white hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[21px] font-semibold leading-tight text-[#1b3a1f]">{item.title}</h3>
                      <p className="mt-2 text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#305e2f]">{item.price}</p>
                    </div>
                    <PoundSterling className="mt-1 h-5 w-5 shrink-0 text-[#e3c541]" />
                  </div>
                  <p className="mt-4 text-[13px] leading-6 text-slate-600">{item.text}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">Learn More <ArrowRight className="h-3 w-3" /></p>
                </a>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>No two asbestos surveys are exactly the same. Pricing depends on scope, survey type, access, sampling and the reason the survey is being arranged.</p>}>
            Why Asbestos Survey Costs Vary
          </InnerTitle>

          <div className="grid gap-7 md:grid-cols-[0.58fr_0.42fr]">
            <Fade>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>A survey for a small domestic garage roof in <InlineLink href="/asbestos-survey-pudsey">Pudsey</InlineLink> will be very different from a refurbishment survey for a multi-floor office in <InlineLink href="/asbestos-survey-leeds-centre">Leeds city centre</InlineLink> or a demolition survey for an industrial unit in <InlineLink href="/asbestos-survey-morley">Morley</InlineLink>.</p>
                <p>A lower headline price is not always better if the survey does not match the work being planned. Choosing the wrong survey type can lead to missed materials, delays, extra costs or unsafe work once contractors are on site.</p>
                <p>A properly scoped asbestos survey helps ensure the inspection is suitable for the property and the reason the survey is being arranged.</p>
                <div className="pt-3"><Button href="/quote">Check which survey you need</Button></div>
              </div>
            </Fade>

            <Fade delay={0.06}>
              <div className="border border-[#d8e2d6] bg-white p-7 shadow-sm clip-section-bl">
                <ClipboardCheck className="h-9 w-9 text-[#305e2f]" />
                <h3 className="mt-5 text-[26px] font-semibold leading-tight text-[#1b3a1f]">Common cost factors</h3>
                <div className="mt-6 grid gap-3">
                  {costFactors.map((item) => (
                    <div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-[#f6f7f3] px-4 py-3 text-[13px] leading-6 text-slate-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle eyebrow="Survey type pricing" intro={<p>The type of asbestos survey required is one of the biggest factors affecting cost. Each survey has a different level of inspection, access and reporting.</p>}>
            Cost by Type of Asbestos Survey
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {guidePrices.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group relative flex h-full min-h-[250px] flex-col overflow-hidden border border-[#d8e2d6] bg-[#f6f7f3] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:bg-white hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)]">
                  <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#1b3a1f]/0 transition group-hover:bg-[#1b3a1f]" />
                  <a href={card.href} className="relative z-10 max-w-[420px] text-[24px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">{card.title} Cost</a>
                  <p className="relative z-10 mt-3 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f]">{card.price}</p>
                  <p className="relative z-10 mt-4 text-[13px] leading-7 text-slate-600">{card.text}</p>
                  <a href={card.href} className="relative z-10 mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">View Survey <ArrowRight className="h-3 w-3" /></a>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>The type of property being surveyed can have a major impact on asbestos survey cost because different buildings require different levels of access, inspection time and reporting detail.</p>}>
            Cost by Property Type
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-6">
            {propertyTypes.map((item, i) => (
              <Fade key={item.title} delay={(i % 3) * 0.04} className={`md:col-span-2 ${i === 3 ? "md:col-start-2" : ""} ${i === 4 ? "md:col-start-4" : ""}`}>
                <article className="group flex h-full min-h-[230px] flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-full border border-[#d8e2d6] bg-[#f6f7f3] text-[#1b3a1f] transition group-hover:border-[#305e2f] group-hover:bg-[#eef4eb]"><ShieldCheck className="h-5 w-5" /></div>
                  <h3 className="text-[19px] font-semibold leading-tight text-[#1b3a1f]">{item.title}</h3>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">{item.text}</p>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.46fr_0.54fr]">
          <Fade>
            <div className="relative min-h-[430px] overflow-hidden bg-[#1b3a1f] clip-section-bl">
              <img src="/images/leeds.png" alt="Leeds buildings" className="absolute inset-0 h-full w-full object-cover object-right opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/90 via-[#1b3a1f]/25 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">Leeds cost context</p>
                <h3 className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.04em] text-white">Costs depend on the building, not just the postcode</h3>
              </div>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <InnerTitle center={false} eyebrow="Local property context">
              Asbestos Survey Costs Across Leeds
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>Asbestos survey costs in Leeds are influenced by the wide range of building stock across the city.</p>
              <p>Leeds city centre contains offices, retail units, hospitality premises, converted commercial buildings, apartment blocks and managed multi-tenant spaces. These properties may require management surveys, refurbishment surveys or reinspections depending on how the building is used and whether works are planned.</p>
              <p>Areas such as <InlineLink href="/asbestos-survey-headingley">Headingley</InlineLink>, Hyde Park, Burley and Woodhouse include many older terraces, rental properties, student accommodation and converted buildings. Survey costs can vary depending on whether the enquiry relates to a single room, a full refurbishment, shared areas or landlord responsibilities.</p>
              <p><InlineLink href="/asbestos-survey-morley">Morley</InlineLink>, <InlineLink href="/asbestos-survey-pudsey">Pudsey</InlineLink>, Garforth, Rothwell and Hunslet include a mix of homes, workshops, warehouses, industrial units and older commercial premises. These areas often generate survey enquiries for garage roofs, commercial refurbishments, warehouse management surveys and demolition projects.</p>
              <p>You can also explore our <InlineLink href="/areas-we-cover">areas we cover across Leeds</InlineLink>.</p>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Sampling, access, timescale and project scope can all change the final quote. These details are why careful scoping matters more than headline pricing.</p>}>
            What Else Affects Asbestos Survey Pricing?
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Sampling and testing",
                text: "Small samples may be taken and sent for laboratory analysis. Sampling costs may be included within the quote or charged separately depending on the provider and number of samples required.",
              },
              {
                title: "Access and project scope",
                text: "Lofts, service risers, plant rooms, basements, ceiling voids, locked areas, outbuildings and occupied sites can all affect inspection time and reporting complexity.",
              },
              {
                title: "Urgency and reporting speed",
                text: "Fast turnaround may affect pricing where a surveyor needs to prioritise the booking, arrange faster sampling or produce a quicker report around project deadlines.",
              },
            ].map((item, i) => (
              <Fade key={item.title} delay={i * 0.04}>
                <article className="flex h-full flex-col border border-[#d8e2d6] bg-white p-6 shadow-sm">
                  <h3 className="text-[22px] font-semibold leading-tight text-[#1b3a1f]">{item.title}</h3>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">{item.text}</p>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-2">
          <Fade>
            <InnerTitle light center={false}>Why the Cheapest Survey Is Not Always the Best Option</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-white/76">
              <p>It can be tempting to choose the cheapest asbestos survey quote, especially when the survey is needed quickly.</p>
              <p>However, the lowest price may not always provide the right survey scope for the property or planned works. A poorly scoped survey can lead to missed asbestos-containing materials, delays once work begins, additional sampling costs, contractors refusing to continue, unexpected asbestos removal costs, compliance issues and safety risks.</p>
              <p>The most important thing is that the survey matches the reason it is being arranged. If refurbishment or demolition work is planned, a basic management survey is unlikely to be enough.</p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">Survey standards and competence</h3>
              <div className="dark-link mt-5 space-y-4 text-[14px] leading-7 text-white/76">
                <p>Surveys should be carried out in line with recognised UK guidance and current asbestos regulations, including the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>.</p>
                <p>HSE guidance <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos: The Survey Guide</InlineLink> explains how asbestos surveys should be planned, carried out and recorded.</p>
              </div>
              <div className="mt-6 grid gap-3">
                {[
                  "HSG264 guidance-led survey process",
                  "BOHS P402 qualified surveyors",
                  "UKAS-accredited laboratory analysis where required",
                  "Reports suitable for owners, contractors and duty holders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-3 text-[13px] leading-6 text-white/82"><Check className="mt-1 h-4 w-4 shrink-0 text-[#e3c541]" /><span>{item}</span></div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.52fr_0.48fr]">
          <Fade>
            <InnerTitle center={false}>What to Include in Your Quote Request</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>The fastest way to understand the likely cost of an asbestos survey is to provide clear details about the property and the reason for the survey.</p>
              <p>OwlSafe helps connect asbestos survey enquiries with qualified asbestos survey professionals covering Leeds and surrounding areas.</p>
              <div className="pt-3"><Button href="/quote">Request an asbestos survey quote</Button></div>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Useful details to provide</h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Property address or postcode",
                  "Type and approximate size of property",
                  "Survey type required, if known",
                  "Reason for the survey",
                  "Whether refurbishment or demolition work is planned",
                  "Which areas need inspecting",
                  "Whether the property is occupied or vacant",
                  "Any known asbestos history",
                  "How quickly the survey is needed",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <QuoteForm />

      <section id="faqs" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute inset-0">
          <img src="/images/FAQs.png" alt="Frequently asked questions" className="h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/90 to-[#f6f2ee]/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="max-w-[760px]">
            <InnerTitle center={false}>Frequently Asked Questions About Asbestos Survey Costs</InnerTitle>
            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">
              {faqs.map(({ q, a }, i) => (
                <details key={q} open={i === 0} className="group border-b border-[#d8e2d6] last:border-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]">
                    <span>{q}</span>
                    <span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6"><p className="max-w-[90%] text-[14px] leading-7 text-slate-600">{a}</p></div>
                </details>
              ))}
            </div>
            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white shadow-[0_20px_50px_rgba(27,58,31,0.12)] clip-section-bl">
              <h3 className="text-[28px] font-semibold leading-tight">Need an Asbestos Survey Quote in Leeds?</h3>
              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">Provide a few details about the property, survey reason and location, and a qualified asbestos surveyor can advise on the most suitable survey type and likely cost.</p>
              <div className="mt-7 grid max-w-[250px] gap-3">
                <Button ghost clipped={false} href="/asbestos-surveys-leeds">Compare Survey Types</Button>
                <Button yellow href="/quote">Get a Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">Need an Asbestos Survey Cost in Leeds?</h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">Request a fast quote for management, refurbishment, demolition or reinspection surveys across Leeds and surrounding areas.</p>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto">
            <Button ghost clipped={false} href="/asbestos-surveys-leeds" className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]">Compare surveys</Button>
            <Button yellow href="/quote" className="w-full md:w-[230px]">Get a quote</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
