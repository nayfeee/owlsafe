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

const cityCentrePropertyTypes = [
  {
    title: "Offices and managed buildings",
    text: "City centre office buildings, managed workspaces and multi-occupied premises may contain asbestos within ceiling voids, service risers, plant areas, partition systems, fire stopping materials and older floor finishes.",
  },
  {
    title: "Retail and hospitality premises",
    text: "Shops, bars, restaurants and hospitality units often undergo repeated fit-outs. Older back-of-house areas, suspended ceilings, ducts, floor tiles and boxed-in services can all require assessment before intrusive works begin.",
  },
  {
    title: "Apartments and converted buildings",
    text: "Leeds city centre includes converted warehouses, older commercial buildings and purpose-built apartment blocks where asbestos may be present in communal areas, service cupboards, risers, lift motor rooms and plant spaces.",
  },
  {
    title: "Basements, plant rooms and service areas",
    text: "Central commercial buildings often contain complex service routes, basements, boiler rooms, ducts and risers. These areas are important during survey scoping because asbestos was historically used for insulation, fire protection and building services.",
  },
];

const surveyReasons = [
  {
    title: "Office refurbishment or fit-out",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Before partition changes, rewiring, ceiling works, flooring replacement, HVAC alterations or other intrusive refurbishment works.",
  },
  {
    title: "Shop, bar or restaurant works",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Before tenant fit-outs, strip-outs, kitchen upgrades, extraction changes, signage works or alterations to older building fabric.",
  },
  {
    title: "Commercial property management",
    href: "/asbestos-management-survey-leeds",
    text: "For duty holders, landlords, managing agents and commercial property owners responsible for managing asbestos in occupied premises.",
  },
  {
    title: "Demolition or structural strip-out",
    href: "/asbestos-demolition-survey-leeds",
    text: "Before demolition, major strip-out, structural alteration or redevelopment where the inspection needs to be fully intrusive.",
  },
];

const commonMaterials = [
  "Asbestos insulating board around risers or service cupboards",
  "Older floor tiles and bitumen adhesive beneath floor finishes",
  "Textured coatings to ceilings or walls",
  "Pipe insulation, gaskets and thermal insulation in plant areas",
  "Fire protection materials around structural steel or service penetrations",
  "Asbestos cement panels, soffits or external building products",
  "Suspended ceiling void materials and legacy partition boards",
  "Lift motor room, basement and boiler room asbestos materials",
];

const processSteps = [
  [
    "01",
    "Request a city centre quote",
    "Provide the building address, postcode, property type and reason for the survey. Include whether the enquiry relates to an office, shop, hospitality unit, apartment block, managed building, refurbishment project or demolition work.",
  ],
  [
    "02",
    "Survey type confirmed",
    "A qualified asbestos surveyor covering Leeds City Centre can advise whether you are likely to need a management survey, refurbishment survey, demolition survey or reinspection based on how the building is used and what work is planned.",
  ],
  [
    "03",
    "Inspection and sampling",
    "The surveyor inspects relevant areas of the premises and identifies suspected asbestos-containing materials. Where required, small samples may be taken safely for laboratory analysis.",
  ],
  [
    "04",
    "Report and next steps",
    "You receive a clear asbestos survey report outlining material locations, condition, risk assessment information and recommendations for management, further investigation or removal before works proceed.",
  ],
];

const nearbyAreas = [
  ["Holbeck", "Commercial buildings, offices, older industrial premises and regeneration projects close to the city centre."],
  ["Woodhouse", "Older buildings, student accommodation, institutional premises and mixed residential-commercial use."],
  ["Hunslet", "Commercial units, light industrial buildings, warehouses and properties undergoing redevelopment."],
  ["Burmantofts", "Residential blocks, managed premises, older commercial buildings and inner-city refurbishment enquiries."],
  ["Leeds Dock", "Apartments, commercial units, converted spaces and managed buildings around the waterfront area."],
  ["Northern Quarter", "Retail, hospitality, offices, mixed-use premises and older city centre building stock."],
];

const faqs = [
  {
    q: "Do I need an asbestos survey for a Leeds city centre office refurbishment?",
    a: (
      <>
        If the work is intrusive and the building was built or refurbished before 2000, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment survey</InlineLink> may be required before works disturb walls, ceilings, floors, risers, ducts or other building materials.
      </>
    ),
  },
  {
    q: "Can you arrange surveys for shops, bars and restaurants?",
    a: (
      <>
        Yes. Survey enquiries can be arranged for retail and hospitality premises across Leeds City Centre, including tenant fit-outs, strip-outs, maintenance works, kitchen upgrades, extraction changes and planned refurbishments.
      </>
    ),
  },
  {
    q: "What survey does a commercial landlord or managing agent need?",
    a: (
      <>
        For occupied non-domestic premises, a <InlineLink href="/asbestos-management-survey-leeds">management survey</InlineLink> is commonly used to help identify asbestos-containing materials that could be disturbed during normal occupation or routine maintenance.
      </>
    ),
  },
  {
    q: "Are asbestos surveys required for apartment blocks?",
    a: (
      <>
        Survey requirements usually depend on the areas involved. Communal areas, plant rooms, service risers, roof spaces, basements and managed parts of residential buildings may require asbestos management information, especially before maintenance or refurbishment works.
      </>
    ),
  },
  {
    q: "How much does an asbestos survey cost in Leeds City Centre?",
    a: (
      <>
        Cost depends on the survey type, property size, access arrangements, sampling requirements, building complexity and whether work is planned. Read the <InlineLink href="/asbestos-survey-cost-leeds">asbestos survey cost guide</InlineLink> for typical pricing guidance.
      </>
    ),
  },
];

export default function LeedsCityCentrePage() {
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
        title="Asbestos Survey Leeds City Centre"
        intro="Arrange asbestos survey enquiries across Leeds City Centre for offices, shops, hospitality premises, apartments, managed buildings, commercial landlords and refurbishment projects. Work with qualified asbestos surveyors and receive clear, compliance-focused reporting."
        mobileIntro="Arrange asbestos survey enquiries across Leeds City Centre for offices, shops, apartments, managed buildings and planned works."
        desktopImage="/images/asbestos-surveys-hero.png"
        imageAlt="Asbestos survey Leeds City Centre"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/areas-we-cover"
        secondaryLabel="View areas"
        desktopObjectPosition="center"
        mobileObjectPosition="75% center"
        trustPoints={[
          "Commercial, residential and managed property enquiries",
          "Management, refurbishment, demolition and reinspection surveys",
          "Surveyors working in line with recognised UK asbestos guidance",
        ]}
        trustStrip={[
          "LS1",
          "LS2",
          "Offices",
          "Retail",
          "Hospitality",
          "Apartments",
          "Managed Buildings",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="LS1 / LS2 asbestos survey enquiries"
              intro={
                <p>
                  Leeds City Centre has a dense mix of commercial, retail, hospitality, residential and managed buildings. Survey scope can vary significantly depending on the building age, previous fit-outs, access to service areas and whether intrusive work is planned.
                </p>
              }
            >
              Asbestos Surveys for Leeds City Centre Properties
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                Leeds City Centre includes a wide mix of older commercial buildings, converted premises, apartment blocks, shops, offices, restaurants, bars, leisure spaces and managed multi-occupied buildings. Many central properties have been adapted repeatedly over time, with layers of refurbishment, fit-out work, suspended ceilings, service alterations and internal partition changes.
              </p>

              <p>
                In buildings built or refurbished before 2000, asbestos-containing materials may still be present within areas such as ceiling voids, service risers, plant rooms, lift motor rooms, basement spaces, ducting, partition boards, floor tiles, textured coatings, pipe insulation and fire protection materials.
              </p>

              <p>
                City centre asbestos survey enquiries are commonly linked to office refurbishments, shop fit-outs, hospitality upgrades, landlord maintenance, planned strip-outs, property transactions, change-of-use projects and compliance duties for managed commercial premises.
              </p>

              <p>
                OwlSafe helps connect property owners, landlords, contractors, developers, business owners and managing agents with qualified asbestos surveyors covering Leeds City Centre and nearby inner-city areas.
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
                Common city centre enquiries
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Office refurbishment projects",
                  "Shop and hospitality fit-outs",
                  "Commercial landlord responsibilities",
                  "Apartment communal areas",
                  "Basement and plant room inspections",
                  "Strip-out or demolition works",
                  "Property purchase due diligence",
                  "Managed building asbestos registers",
                  "Reinspection of known asbestos materials",
                  "Change-of-use or conversion projects",
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
            eyebrow="City centre building types"
            intro={
              <p>
                Central Leeds buildings can be more complex than a typical domestic property. Repeated fit-outs, restricted access, shared services and occupied premises can all affect the survey scope.
              </p>
            }
          >
            Property Types Commonly Surveyed in Leeds City Centre
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {cityCentrePropertyTypes.map((card, i) => (
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
            intro={
              <p>
                The correct survey type depends on why the inspection is needed. A city centre office, retail unit or managed building may require a different survey depending on whether the building is occupied, being refurbished, demolished or monitored over time.
              </p>
            }
          >
            When You May Need an Asbestos Survey in Leeds City Centre
          </InnerTitle>

          <div className="grid gap-7">
            {surveyReasons.map((item, i) => (
              <Fade key={item.title} delay={i * 0.04}>
                <article className="grid gap-7 border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm md:grid-cols-[0.48fr_0.52fr] clip-section-bl">
                  <div>
                    <a
                      href={item.href}
                      className="text-[26px] font-semibold leading-tight tracking-[-0.03em] text-[#1b3a1f] transition hover:text-[#305e2f]"
                    >
                      {item.title}
                    </a>
                    <p className="mt-4 text-[14px] leading-7 text-slate-600">
                      {item.text}
                    </p>
                    <a
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f]"
                    >
                      Learn more <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Ceiling voids",
                      "Partition walls",
                      "Service risers",
                      "Plant rooms",
                      "Floor finishes",
                      "Basement areas",
                      "Ducts and pipework",
                      "Back-of-house spaces",
                    ].map((example) => (
                      <div
                        key={`${item.title}-${example}`}
                        className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.54fr_0.46fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="Asbestos-containing materials"
              intro={
                <p>
                  A surveyor will consider the building type, age, previous alterations and planned works when deciding which areas need inspecting.
                </p>
              }
            >
              Where Asbestos May Be Found in City Centre Buildings
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                Asbestos was historically used in many commercial and public buildings for fire protection, insulation, durability and acoustic performance. In city centre buildings, this can mean asbestos is not always obvious from occupied areas.
              </p>

              <p>
                Materials may be concealed above suspended ceilings, inside risers, behind panels, beneath floor finishes, around boilers, near pipework, within plant rooms or in older partition systems. This is especially relevant where premises have been refitted multiple times without full strip-out of earlier materials.
              </p>

              <p>
                Before intrusive works begin, the survey scope should be clear. A refurbishment or demolition survey may need access into the specific areas affected by the works, while a management survey is designed for ongoing occupation and routine maintenance.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-white p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                Common materials to consider
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
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.56fr_0.44fr]">
          <Fade>
            <InnerTitle light center={false}>
              Asbestos Regulations & Survey Standards
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-white/76">
              <p>
                Asbestos surveys should be carried out in line with recognised UK guidance and current asbestos regulations. The main legislation covering asbestos management in the UK is the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>.
              </p>

              <p>
                For non-domestic premises, including offices, shops, hospitality premises, managed buildings and shared areas, duty holders must take reasonable steps to identify and manage asbestos risks. This is especially important in city centre buildings with multiple occupiers, service risers, plant rooms and ongoing maintenance responsibilities.
              </p>

              <p>
                Asbestos surveys are commonly carried out in accordance with HSE guidance, including <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos — The Survey Guide</InlineLink>. This guidance covers survey planning, inspection, reporting and the use of survey information by duty holders and contractors.
              </p>

              <p>
                Competence matters. We help connect you with qualified asbestos surveyors covering Leeds, including surveyors with recognised training such as <InlineLink href="https://www.bohs.org/education/qualifications/detail/surveying-and-sampling-strategies-for-asbestos-in-buildings-p402/" external>BOHS P402 Surveying and Sampling Strategies for Asbestos in Buildings</InlineLink>.
              </p>

              <p>
                HSE also strongly recommends using asbestos surveying organisations accredited to BS EN ISO/IEC 17020 where appropriate. Where material sampling is required, samples should be analysed by a UKAS-accredited laboratory.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">
                EEAT-led survey guidance
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-white/72">
                City centre survey enquiries often involve commercial compliance, landlord responsibilities and planned works. Clear scoping, competent surveying and reliable reporting are essential.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Surveyors working to recognised asbestos guidance",
                  "Management, refurbishment, demolition and reinspection advice",
                  "Commercial and managed property experience",
                  "Clear asbestos survey reports",
                  "UKAS laboratory analysis where samples are required",
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

              <div className="mt-7">
                <Button yellow href="/quote">
                  Request a quote
                </Button>
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
                The process is designed to help building owners, landlords, managing agents, contractors and business owners understand what survey is needed and what information the report should provide.
              </p>
            }
          >
            How City Centre Asbestos Surveys Work
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
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.42fr_0.58fr]">
          <Fade>
            <div className="relative min-h-[360px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm clip-section-bl">
              <img
                src="/images/leeds-city-centre-map.png"
                alt="Leeds City Centre map"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-[#1b3a1f]/12" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/58 via-58% to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                  LS1 / LS2 / CENTRAL LEEDS
                </p>
                <h3 className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.04em] text-white">
                  Leeds City Centre
                </h3>
                <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-white/82">
                  Survey enquiries across offices, retail premises, apartments and managed buildings.
                </p>
              </div>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="flex h-full flex-col justify-center border border-[#d5e0d4] bg-white p-7 shadow-sm md:p-8 clip-section-bl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
                Nearby central areas
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[38px]">
                Asbestos survey coverage across central Leeds
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-slate-600">
                City centre enquiries may also involve nearby inner Leeds areas, especially where commercial premises, managed buildings, older industrial premises and mixed-use developments sit close to the central district.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {nearbyAreas.map(([area, text]) => (
                  <div
                    key={area}
                    className="border border-[#d8e2d6] bg-[#f6f7f3] p-4"
                  >
                    <h3 className="text-[17px] font-semibold leading-tight text-[#1b3a1f]">
                      {area}
                    </h3>
                    <p className="mt-2 text-[12px] leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/areas-we-cover">View all areas</Button>
                <Button ghost clipped={false} href="/quote">
                  Get a quote
                </Button>
              </div>
            </div>
          </Fade>
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
              Frequently Asked Questions About Leeds City Centre Asbestos Surveys
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

            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white shadow-[0_20px_50px_rgba(27,58,31,0.12)] clip-section-bl">
              <h3 className="text-[28px] font-semibold leading-tight">
                Need an Asbestos Survey in Leeds City Centre?
              </h3>

              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">
                Arrange asbestos survey enquiries for offices, shops, landlords, managing agents, apartments, hospitality premises and refurbishment projects across central Leeds.
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
              Arrange a City Centre Asbestos Survey Quote
            </h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              Get a quote for asbestos survey enquiries in Leeds City Centre, including offices, shops, apartments, managed premises, commercial buildings and planned works.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 md:w-auto">
            <Button
              ghost
              clipped={false}
              href="/asbestos-surveys-leeds"
              className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]"
            >
              Compare surveys
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
