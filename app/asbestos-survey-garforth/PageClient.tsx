"use client";

import React from "react";
import { ArrowRight, Check, MapPin, ShieldCheck } from "lucide-react";
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

function InlineLink({
  href,
  children,
  external = false,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`font-semibold underline underline-offset-4 transition ${
        light
          ? "text-white hover:text-[#e3c541]"
          : "text-[#305e2f] hover:text-[#1b3a1f]"
      }`}
    >
      {children}
    </a>
  );
}

const buildingTypes = [
  {
    title: "Suburban homes and extended properties",
    text: "Garforth includes many family homes that have been extended or upgraded over time. Asbestos survey enquiries often involve ceilings, floor layers, garages, outbuildings, service boxing, loft spaces and older additions.",
  },
  {
    title: "Schools and community buildings",
    text: "Schools, halls, community premises and managed buildings may need management surveys, reinspections or refurbishment surveys before maintenance, upgrades or intrusive works.",
  },
  {
    title: "Commercial and light industrial units",
    text: "Business units, workshops, warehouses and local commercial premises may include roof sheets, wall panels, service ducts, plant areas, floor tiles and fit-out materials that require survey assessment.",
  },
  {
    title: "Older village and mining-era buildings",
    text: "Older properties and mining-linked settings around Garforth, Kippax and nearby villages may include historic fabric alongside later twentieth-century materials where asbestos could have been introduced.",
  },
];

const surveyReasons = [
  {
    title: "Home extension or renovation",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "A refurbishment survey may be required before intrusive works to kitchens, bathrooms, garages, services, lofts, ceilings or walls.",
  },
  {
    title: "Commercial or industrial works",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Survey enquiries are often raised before fit-outs, landlord works, workshop alterations, warehouse maintenance or service upgrades.",
  },
  {
    title: "Ongoing asbestos management",
    href: "/asbestos-management-survey-leeds",
    text: "Management surveys support duty holders responsible for schools, workplaces, shops, shared premises and other non-domestic buildings.",
  },
  {
    title: "Demolition or major strip-out",
    href: "/asbestos-demolition-survey-leeds",
    text: "Demolition surveys may be needed before garages, outbuildings, extensions, industrial spaces or full buildings are stripped out or demolished.",
  },
];

const commonMaterials = [
  "Textured coatings and older ceiling finishes",
  "Asbestos insulating board in cupboards, risers or service boxing",
  "Old floor tiles, bitumen adhesive and floor layers",
  "Pipe insulation, boiler area materials and heating system residues",
  "Garage roof sheets and asbestos cement products",
  "Soffits, gutters, rainwater goods and external panels",
  "Loft spaces, basements, service voids and ceiling void materials",
  "Fire protection boards around structural steel or service areas",
];

const nearbyAreas = [
  { title: "Kippax", text: "Older homes, garages, schools, commercial units and refurbishment enquiries." },
  { title: "Swillington", text: "Residential properties, industrial buildings, outbuildings and planned works." },
  { title: "Micklefield", text: "Homes, former mining-linked settings, commercial spaces and property purchase surveys." },
  { title: "Cross Gates", text: "Retail premises, offices, older housing and landlord enquiries." },
  { title: "Colton", text: "Commercial premises, business parks, managed buildings and maintenance projects." },
  { title: "Allerton Bywater", text: "Former mining village housing, community buildings and renovation enquiries." },
];

const faqsData = [
  {
    q: "Do Garforth homes need asbestos surveys before extensions?",
    a: "If extension or renovation work will disturb existing materials in a pre-2000 property, a refurbishment survey may be needed before work begins.",
  },
  {
    q: "Can surveys be arranged for schools in Garforth?",
    a: "Yes. Survey enquiries can be arranged for schools, community buildings and other non-domestic premises where asbestos duties or planned works apply.",
  },
  {
    q: "Are garages and outbuildings included?",
    a: "They can be. Garages, sheds and outbuildings may contain asbestos cement sheets, boards or older linings, particularly where demolition or roof work is planned.",
  },
  {
    q: "What survey is needed for a commercial unit?",
    a: "The correct survey depends on whether the premises is occupied, being managed, refurbished or stripped out. A surveyor can advise from the proposed works and property details.",
  },
  {
    q: "How much does an asbestos survey cost in Garforth?",
    a: "Costs depend on survey type, property size, access, sampling requirements and scope. The asbestos survey cost guide gives typical guidance.",
  },
];

const processSteps = [
  [
    "01",
    "Request a Garforth quote",
    "Provide the property address, postcode, property type and reason for the survey. Include whether the enquiry relates to a home, rental property, commercial unit, refurbishment project, demolition work or managed building.",
  ],
  [
    "02",
    "Survey type confirmed",
    "A qualified asbestos surveyor covering Garforth can advise whether you are likely to need a management survey, refurbishment survey, demolition survey or reinspection based on how the building is used and what work is planned.",
  ],
  [
    "03",
    "Inspection and sampling",
    "The surveyor inspects relevant areas of the property and identifies suspected asbestos-containing materials. Where required, small samples may be safely taken for laboratory analysis.",
  ],
  [
    "04",
    "Report and next steps",
    "You receive a clear asbestos survey report outlining material locations, condition, risk assessment information and recommendations for management, further investigation or removal before works proceed.",
  ],
];

export default function GarforthPage() {
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
              linear-gradient(to bottom, rgba(246,242,238,0.38) 0%, rgba(246,242,238,0.12) 18%, rgba(246,242,238,0) 34%),
              linear-gradient(to right, rgba(246,242,238,0.92) 0%, rgba(246,242,238,0.74) 36%, rgba(246,242,238,0.30) 60%, rgba(246,242,238,0) 80%) !important;
          }
        }
      `}</style>

      <Header />

      <Hero
        title="Asbestos Survey Garforth"
        intro="Arrange asbestos survey enquiries across Garforth, Kippax, Swillington and nearby East Leeds areas for homeowners, landlords, schools, commercial premises, light industrial units and planned refurbishment work. Work with qualified asbestos surveyors and receive clear, compliance-focused reporting."
        mobileIntro="Arrange asbestos survey enquiries across Garforth, Kippax and Swillington for homes, landlords, commercial premises and planned works."
        desktopImage="/images/asbestos-surveys-hero.png"
        imageAlt="Asbestos survey Garforth"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/areas-we-cover"
        secondaryLabel="View areas"
        desktopObjectPosition="center"
        mobileObjectPosition="75% center"
        trustPoints={[
          "Residential, commercial and managed property enquiries",
          "Management, refurbishment, demolition and reinspection surveys",
          "Surveyors working in line with recognised UK asbestos guidance",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="LS25 / EAST LEEDS asbestos survey enquiries"
              intro={
                <p>
                  Garforth includes suburban housing, older village buildings, schools, local shops, commercial units, light industrial premises and properties linked to East Leeds transport routes. Its mining history, later residential growth and commercial development mean survey enquiries can cover a wide range of building types.
                </p>
              }
            >
              Asbestos Surveys for Garforth Properties
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                Across Garforth, Kippax, Swillington, Micklefield and nearby East Leeds areas, asbestos survey enquiries are commonly linked to property purchases, home extensions, garage works, school projects, commercial premises, industrial units and landlord-managed buildings.
              </p>
              <p>
                Garforth’s growth was influenced by local coal mining and later commuter development, with older properties sitting alongside post-war housing, modern estates, retail premises and business units. Different phases of alteration can introduce asbestos-containing materials into buildings that may not appear obviously high risk from the outside.
              </p>
              <p>
                Where buildings were constructed or refurbished before 2000, asbestos materials may be found in textured coatings, insulation boards, service cupboards, old floor tiles, boiler areas, garages, soffits, roof sheets, plant spaces and ceiling voids.
              </p>
              <p>
                OwlSafe helps connect homeowners, buyers, landlords, schools, contractors, developers and commercial property owners with qualified asbestos surveyors covering Garforth and nearby East Leeds locations.
              </p>
            </div>

            <div className="mt-8 grid max-w-[240px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">
                Get a quote
              </Button>
              <Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">
                View survey costs
              </Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <MapPin className="h-8 w-8 text-[#305e2f]" />
              <h3 className="mt-5 text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                Common Garforth enquiries
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Property purchase surveys",
                  "Home extensions and renovations",
                  "School and community building works",
                  "Commercial unit fit-outs",
                  "Industrial estate and workshop surveys",
                  "Garage roof or outbuilding checks",
                  "Rewiring, heating and service upgrades",
                  "Demolition or structural strip-out",
                  "Sampling of suspect materials",
                  "Reinspection of known asbestos materials",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            eyebrow="Local building types"
            intro={
              <p>
                Survey scope depends on the building, how it has been altered and whether the planned work is intrusive. These are some of the property types commonly linked with Garforth asbestos survey enquiries.
              </p>
            }
          >
            Property Types Commonly Surveyed in Garforth
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {buildingTypes.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group relative flex h-full min-h-[230px] flex-col overflow-hidden border border-[#d8e2d6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)]">
                  <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#1b3a1f]/0 transition group-hover:bg-[#1b3a1f]" />
                  <h3 className="relative z-10 max-w-[420px] text-[22px] font-semibold leading-tight text-[#1b3a1f]">
                    {card.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-[13px] leading-[1.75] text-slate-600">
                    {card.text}
                  </p>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#dfe9dd]/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            eyebrow="When surveys are needed"
            intro={
              <p>
                Different survey types are used for different situations. The right survey depends on whether the building is occupied, being refurbished, demolished or monitored as part of an asbestos management plan.
              </p>
            }
          >
            Common Reasons for Asbestos Surveys in Garforth
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {surveyReasons.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group relative flex h-full min-h-[230px] flex-col overflow-hidden border border-[#d8e2d6] bg-[#f6f7f3] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)] clip-section-bl">
                  <ShieldCheck className="h-8 w-8 text-[#305e2f]" />
                  <a
                    href={card.href}
                    className="mt-5 text-[22px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]"
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

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="Asbestos materials"
              intro={
                <p>
                  The materials below are examples of suspect asbestos-containing materials that may be encountered in pre-2000 buildings. A surveyor determines the relevant inspection scope based on the property and proposed works.
                </p>
              }
            >
              Materials That May Need Checking
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                Asbestos cannot be reliably identified by appearance alone. Where suspect materials are found, surveyors may take small controlled samples for laboratory analysis. Survey reports should clearly record material locations, condition, extent and recommended next steps.
              </p>
              <p>
                For refurbishment or demolition work, survey scope is usually more intrusive because hidden materials behind walls, floors, ceilings, ducts, risers or service routes may be disturbed during the works.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-white p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                Common suspect materials
              </h3>
              <div className="mt-6 grid gap-3">
                {commonMaterials.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-[#d8e2d6] bg-[#f6f7f3] px-4 py-3 text-[13px] leading-6 text-slate-700"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle light center={false}>
              Survey Standards & Guidance
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-white/76">
              <p>
                Asbestos surveys should be carried out in line with recognised UK guidance and current asbestos regulations. The main legislation covering asbestos management in the UK is the <InlineLink light href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>.
              </p>
              <p>
                Survey work is commonly carried out in accordance with HSE guidance including <InlineLink light href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos — The Survey Guide</InlineLink>. This guidance explains how surveys should be planned, carried out, recorded and used by building owners, landlords, duty holders and contractors.
              </p>
              <p>
                Many professional asbestos surveyors hold recognised industry qualifications such as <InlineLink light href="https://www.bohs.org/education/qualifications/detail/surveying-and-sampling-strategies-for-asbestos-in-buildings-p402/" external>BOHS P402 Surveying and Sampling Strategies for Asbestos in Buildings</InlineLink>.
              </p>
              <p>
                Where material sampling is required, samples should be analysed by a UKAS-accredited laboratory to confirm whether asbestos fibres are present. The finished report should help you understand the location, extent, condition and recommended management of any asbestos-containing materials identified.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">
                Clear survey guidance
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-white/72">
                Not sure which survey you need? Provide the property details, age, planned works and access information. A qualified asbestos professional can advise whether a management, refurbishment, demolition or reinspection survey is most appropriate.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Survey scope based on building use and planned work",
                  "Reports designed to support asbestos management decisions",
                  "Sampling arranged where suspect materials need confirmation",
                  "Useful for landlords, contractors, buyers and duty holders",
                  "Guidance for management, refurbishment or demolition works",
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

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={
              <p>
                The process is designed to be straightforward. Provide the property details and planned works, then a qualified asbestos surveyor covering Garforth can advise on the most suitable survey type.
              </p>
            }
          >
            How Asbestos Surveys Work in Garforth
          </InnerTitle>

          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map(([num, title, text], i) => (
              <Fade key={title} delay={i * 0.04}>
                <article className="group relative z-10 flex h-full flex-col border-2 border-[#305e2f]/40 bg-gradient-to-br from-white via-[#f7faf5] to-[#e8f0e5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b3a1f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)]">
                  <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#1b3a1f] bg-white text-[20px] font-black text-[#1b3a1f] shadow-[0_0_0_8px_rgba(27,58,31,0.05)]">
                    {num}
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold leading-tight text-[#1b3a1f]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-slate-600">
                    {text}
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
            eyebrow="Nearby locations"
            intro={
              <p>
                Survey enquiries can also be arranged in nearby Leeds areas. Use the links below to explore other local survey pages or return to the main areas hub.
              </p>
            }
          >
            Asbestos Surveys Near Garforth
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-3">
            {nearbyAreas.map((area, i) => (
              <Fade key={area.title} delay={(i % 3) * 0.04}>
                <article className="flex h-full min-h-[190px] flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <h3 className="text-[22px] font-semibold leading-tight text-[#1b3a1f]">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {area.text}
                  </p>
                </article>
              </Fade>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/areas-we-cover">View all areas</Button>
            <Button ghost clipped={false} href="/asbestos-surveys-leeds">Compare survey types</Button>
          </div>
        </div>
      </section>

      <QuoteForm />

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
              Frequently Asked Questions About Asbestos Surveys in Garforth
            </InnerTitle>

            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">
              {faqsData.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="group border-b border-[#d8e2d6] last:border-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]">
                    <span>{item.q}</span>
                    <span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="px-6 pb-6">
                    <p className="max-w-[90%] text-[14px] leading-7 text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white shadow-[0_20px_50px_rgba(27,58,31,0.12)] clip-section-bl">
              <h3 className="text-[28px] font-semibold leading-tight">
                Need an Asbestos Survey in Garforth?
              </h3>
              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">
                Arrange asbestos survey enquiries for homes, landlords, commercial premises and refurbishment projects across Garforth and nearby areas including Kippax, Swillington, Micklefield, Cross Gates and Colton.
              </p>
              <div className="mt-7 grid max-w-[250px] gap-3">
                <Button ghost clipped={false} href="/areas-we-cover">
                  View Areas We Cover
                </Button>
                <Button yellow href="/quote">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">
              Need an Asbestos Survey in Garforth?
            </h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              Request a quote for asbestos survey enquiries across Garforth, Kippax, Swillington, Micklefield, Cross Gates and Colton and wider Leeds.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto">
            <Button ghost clipped={false} href="/areas-we-cover" className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]">
              View areas we cover
            </Button>
            <Button yellow href="/quote" className="w-full md:w-[230px]">
              Get a quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
