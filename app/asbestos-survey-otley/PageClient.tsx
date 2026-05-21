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
    title: "Historic and stone-built homes",
    text: "Otley includes older stone properties where later refurbishments may have introduced asbestos materials into ceilings, services, floors, extensions, roof spaces and outbuildings.",
  },
  {
    title: "Town centre shops and hospitality premises",
    text: "Retail, cafe, pub, restaurant and office premises may need surveys before fit-outs, maintenance, landlord works or changes of use.",
  },
  {
    title: "Former mill and workshop-style buildings",
    text: "Buildings with industrial or workshop histories may include service routes, roof spaces, plant areas, floor layers and adapted internal partitions requiring careful inspection.",
  },
  {
    title: "Schools, churches and community buildings",
    text: "Non-domestic premises may require management surveys, reinspections or refurbishment surveys before works, upgrades or maintenance.",
  },
];

const surveyReasons = [
  {
    title: "Historic property refurbishment",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Refurbishment surveys may be needed before intrusive works to older properties, extensions, lofts, ceilings, services, floors or outbuildings.",
  },
  {
    title: "Commercial fit-out or maintenance",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Town centre commercial premises may need survey information before fit-outs, landlord works, rewiring or structural alterations.",
  },
  {
    title: "Property purchase",
    href: "/asbestos-surveys-leeds",
    text: "Buyers may arrange asbestos surveys before purchasing older homes, converted buildings, commercial premises or properties with suspected asbestos materials.",
  },
  {
    title: "Ongoing management",
    href: "/asbestos-management-survey-leeds",
    text: "Management surveys and reinspections support duty holders responsible for shops, schools, churches, offices and managed buildings.",
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
  { title: "Pool-in-Wharfedale", text: "Older properties, converted buildings, commercial premises and refurbishment enquiries." },
  { title: "Bramhope", text: "Larger homes, extensions, garages and property purchase surveys." },
  { title: "Menston", text: "Residential properties, schools, community premises and planned works." },
  { title: "Yeadon", text: "Older housing, commercial units, workshops and landlord enquiries." },
  { title: "Guiseley", text: "Retail premises, homes, converted buildings and commercial refurbishment projects." },
  { title: "Wharfedale enquiries", text: "Nearby Wharfedale property enquiries where surveyor coverage is available." },
];

const faqsData = [
  {
    q: "Do stone-built homes in Otley need asbestos surveys?",
    a: "Not automatically, but later refurbishment, extensions, heating upgrades or internal alterations may have introduced asbestos-containing materials into older properties.",
  },
  {
    q: "Can surveys be arranged for town centre shops or pubs?",
    a: "Yes. Survey enquiries can be arranged for retail, hospitality, office and mixed-use premises before fit-outs, maintenance, landlord works or refurbishment.",
  },
  {
    q: "What survey is needed before renovating a period property?",
    a: "If work will disturb building materials, a refurbishment survey is usually the relevant survey type. The scope should reflect the areas being worked on.",
  },
  {
    q: "Are schools and churches included?",
    a: "Yes. Survey enquiries can be arranged for schools, churches, community buildings and other non-domestic premises.",
  },
  {
    q: "How much does an asbestos survey cost in Otley?",
    a: "Costs depend on survey type, property size, access, sampling requirements and scope. The asbestos survey cost guide gives typical guidance.",
  },
];

const processSteps = [
  [
    "01",
    "Request a Otley quote",
    "Provide the property address, postcode, property type and reason for the survey. Include whether the enquiry relates to a home, rental property, commercial unit, refurbishment project, demolition work or managed building.",
  ],
  [
    "02",
    "Survey type confirmed",
    "A qualified asbestos surveyor covering Otley can advise whether you are likely to need a management survey, refurbishment survey, demolition survey or reinspection based on how the building is used and what work is planned.",
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

export default function OtleyPage() {
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
        title="Asbestos Survey Otley"
        intro="Arrange asbestos survey enquiries across Otley, Pool-in-Wharfedale, Bramhope and nearby Wharfedale areas for homeowners, landlords, commercial premises, historic buildings and planned refurbishment work. Work with qualified asbestos surveyors and receive clear, compliance-focused reporting."
        mobileIntro="Arrange asbestos survey enquiries across Otley, Pool-in-Wharfedale and Bramhope for homes, landlords, commercial premises and planned works."
        desktopImage="/images/asbestos-surveys-hero.png"
        imageAlt="Asbestos survey Otley"
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
              eyebrow="LS21 / NORTH WEST LEEDS asbestos survey enquiries"
              intro={
                <p>
                  Otley includes a historic market town centre, stone-built homes, older commercial premises, riverside and former mill-related buildings, schools, churches, hospitality premises and larger properties across Wharfedale. Many buildings have been altered over several periods, so survey scope often needs careful local understanding.
                </p>
              }
            >
              Asbestos Surveys for Otley Properties
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                Across Otley, Pool-in-Wharfedale, Bramhope, Menston and Yeadon, asbestos survey enquiries are often linked to older stone properties, town centre commercial premises, home refurbishments, period buildings, schools, churches, hospitality venues and managed premises.
              </p>
              <p>
                Otley’s historic core, market town character and Wharfedale setting mean buildings can include older fabric alongside later twentieth-century alterations. Former mill, workshop and riverside uses in and around the area can also create varied survey requirements where buildings have been adapted for new uses.
              </p>
              <p>
                Where properties were built or refurbished before 2000, asbestos materials may be found in textured coatings, insulation boards, floor tiles, service cupboards, pipe boxing, boiler areas, garages, soffits, roof sheets, ceiling voids and outbuildings.
              </p>
              <p>
                OwlSafe helps connect homeowners, buyers, landlords, managing agents, contractors and commercial property owners with qualified asbestos surveyors covering Otley and nearby North West Leeds locations.
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
                Common Otley enquiries
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Property purchase surveys",
                  "Stone property refurbishment",
                  "Town centre shop and hospitality works",
                  "School, church or community building surveys",
                  "Larger home extensions",
                  "Garage and outbuilding checks",
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
                Survey scope depends on the building, how it has been altered and whether the planned work is intrusive. These are some of the property types commonly linked with Otley asbestos survey enquiries.
              </p>
            }
          >
            Property Types Commonly Surveyed in Otley
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
            Common Reasons for Asbestos Surveys in Otley
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
                The process is designed to be straightforward. Provide the property details and planned works, then a qualified asbestos surveyor covering Otley can advise on the most suitable survey type.
              </p>
            }
          >
            How Asbestos Surveys Work in Otley
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
            Asbestos Surveys Near Otley
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
              Frequently Asked Questions About Asbestos Surveys in Otley
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
                Need an Asbestos Survey in Otley?
              </h3>
              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">
                Arrange asbestos survey enquiries for homes, landlords, commercial premises and refurbishment projects across Otley and nearby areas including Pool-in-Wharfedale, Bramhope, Menston, Yeadon and Guiseley.
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
              Need an Asbestos Survey in Otley?
            </h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              Request a quote for asbestos survey enquiries across Otley, Pool-in-Wharfedale, Bramhope, Menston, Yeadon and Guiseley and wider Leeds.
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
