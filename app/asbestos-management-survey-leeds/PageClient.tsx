"use client";

import React from "react";
import { ArrowRight, Check, ShieldCheck, ClipboardCheck } from "lucide-react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Fade from "../../components/Fade";
import Button from "../../components/Button";
import { areaLinks } from "../data/site";
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

const whoNeeds = [
  {
    title: "Commercial Property Owners",
    text: "Offices, shops, hospitality premises, warehouses, workshops, storage units, mixed-use buildings and industrial units may need asbestos management information to support safe ongoing occupation and maintenance.",
  },
  {
    title: "Landlords and Managing Agents",
    text: "Management surveys are commonly arranged for communal areas, shared access routes, plant rooms, service cupboards, stairwells, external structures and managed residential blocks.",
  },
  {
    title: "Schools, Churches and Public Buildings",
    text: "Older schools, churches, community buildings and healthcare premises may contain asbestos within ceilings, service ducts, boiler rooms, floor tiles, wall panels and roof spaces.",
  },
  {
    title: "Property Buyers and Investors",
    text: "Commercial and mixed-use property buyers may arrange a management survey before completion to understand asbestos management responsibilities and potential future costs.",
  },
  {
    title: "Facilities and Maintenance Teams",
    text: "Facilities managers often need up-to-date asbestos information before routine maintenance, repairs, ceiling access, cabling, fire alarm work, HVAC servicing or plumbing tasks.",
  },
];

const reportItems = [
  "Property details and survey scope",
  "Areas inspected and areas not accessed",
  "Suspected or confirmed asbestos-containing materials",
  "Material locations and photographs",
  "Sample results where materials are tested",
  "Material assessment scores",
  "Condition of identified materials",
  "Recommendations for management, monitoring, repair or removal",
  "Information to support an asbestos register or management plan",
];

const materialItems = [
  "Asbestos insulation board",
  "Textured coatings to ceilings or walls",
  "Vinyl floor tiles and bitumen adhesives",
  "Pipe, boiler or plant room insulation",
  "Cement roofing sheets",
  "Soffits and fascia boards",
  "Ceiling tiles and partition panels",
  "Service duct panels",
  "Electrical backing boards",
  "Water tanks, gaskets and older fire-resistant materials",
];

const comparisonCards = [
  {
    title: "Management Survey",
    href: "/asbestos-management-survey-leeds",
    text: "Used for occupied buildings under normal use. It helps identify asbestos-containing materials that may need to be managed over time.",
  },
  {
    title: "Refurbishment Survey",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Required before intrusive work such as renovation, rewiring, kitchen replacements, bathroom refurbishments or structural alterations.",
  },
  {
    title: "Demolition Survey",
    href: "/asbestos-demolition-survey-leeds",
    text: "Required before full or partial demolition. It is a fully intrusive inspection designed to locate asbestos before demolition begins.",
  },
  {
    title: "Reinspection Survey",
    href: "/asbestos-reinspection-survey-leeds",
    text: "Used where asbestos-containing materials have already been identified and need to be monitored over time.",
  },
];

const mapNames: Record<string, string> = {
  "Leeds Centre": "leeds-city-centre-map",
  Headingley: "headlingley-map",
  Horsforth: "horsforth-map",
  Roundhay: "roundhay-map",
  Pudsey: "pudsey-map",
  Morley: "morley-map",
  Garforth: "garforth-map",
  Rothwell: "rothwell-map",
  Otley: "otley-map",
  Wetherby: "wetherby-map",
};

const areaMeta: Record<string, string> = {
  "Leeds Centre": "LS1 / LS2 / CITY CENTRE",
  Headingley: "LS6 / NORTH WEST LEEDS",
  Horsforth: "LS18 / NORTH WEST LEEDS",
  Roundhay: "LS8 / NORTH EAST LEEDS",
  Pudsey: "LS28 / WEST LEEDS",
  Morley: "LS27 / SOUTH LEEDS",
  Garforth: "LS25 / EAST LEEDS",
  Rothwell: "LS26 / SOUTH EAST LEEDS",
  Otley: "LS21 / NORTH WEST LEEDS",
  Wetherby: "LS22 / NORTH EAST LEEDS",
};

const faqs = [
  {
    q: "What is an asbestos management survey?",
    a: (
      <>
        An asbestos management survey is the standard asbestos survey used for occupied buildings. It identifies asbestos-containing materials that could be disturbed during normal use, routine maintenance or day-to-day occupation.
      </>
    ),
  },
  {
    q: "When is an asbestos management survey required?",
    a: (
      <>
        A management survey is commonly required for non-domestic buildings and shared areas of residential buildings where asbestos-containing materials may need to be identified and managed. It is especially relevant for buildings constructed or refurbished before 2000.
      </>
    ),
  },
  {
    q: "Is an asbestos management survey a legal requirement?",
    a: (
      <>
        The Control of Asbestos Regulations 2012 place a duty to manage asbestos on those responsible for non-domestic premises. A management survey is often used to help meet that duty by identifying asbestos-containing materials and supporting an asbestos management plan.
      </>
    ),
  },
  {
    q: "Does a management survey involve taking samples?",
    a: (
      <>
        A management survey may involve sampling suspected asbestos-containing materials where confirmation is needed. Samples should be analysed by a UKAS-accredited laboratory.
      </>
    ),
  },
  {
    q: "Is a management survey intrusive?",
    a: (
      <>
        Management surveys are usually non-intrusive and focus on accessible areas. If planned work will disturb the building fabric, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment survey</InlineLink> or demolition survey may be required instead.
      </>
    ),
  },
  {
    q: "How long does an asbestos management survey take?",
    a: (
      <>
        The time required depends on the size and complexity of the building. A small commercial unit or communal area may be inspected relatively quickly, while larger offices, schools, warehouses or managed buildings can take longer.
      </>
    ),
  },
  {
    q: "What happens if asbestos is found?",
    a: (
      <>
        The survey report should explain where asbestos is located, what condition it is in and what action may be required. Some materials may be managed in place, while damaged or high-risk materials may need repair, encapsulation, removal or further assessment.
      </>
    ),
  },
  {
    q: "How often should asbestos be reinspected?",
    a: (
      <>
        Known asbestos-containing materials are usually reinspected periodically to check their condition. The frequency depends on the material, risk level, location and asbestos management plan. See our <InlineLink href="/asbestos-reinspection-survey-leeds">asbestos reinspection survey</InlineLink> page for more detail.
      </>
    ),
  },
  {
    q: "Can I use a management survey before renovation work?",
    a: (
      <>
        Not usually. If refurbishment or intrusive work is planned, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment asbestos survey</InlineLink> is normally required because hidden materials may be disturbed.
      </>
    ),
  },
];

export default function AsbestosManagementSurveyLeedsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <style>{`
        html, body, main { overflow-x: hidden; }
        .clip-corner { clip-path: polygon(0 0, 100% 0, 100% 100%, 13px 100%, 0 calc(100% - 13px)); }
        .clip-section-bl { clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px)); }
        h1, h2, h3 { font-weight: 600 !important; }
        @media (min-width: 768px) {
          main > section:first-of-type > div:nth-of-type(1) {
            background: linear-gradient(to right, rgba(246,242,238,0.88) 0%, rgba(246,242,238,0.62) 34%, rgba(246,242,238,0.25) 58%, rgba(246,242,238,0) 78%) !important;
          }
        }
        @media (max-width: 767px) {
          main > section:nth-of-type(2),
          main > section:nth-of-type(2) > div.relative.z-20 {
            height: 665px !important;
          }
        }
        .dark-link a {
          color: rgba(255,255,255,0.92) !important;
        }
        .dark-link a:hover {
          color: #e3c541 !important;
        }
      `}</style>

      <Header />

      <Hero
        title="Asbestos Management Surveys in Leeds"
        intro="Arrange asbestos management surveys in Leeds for commercial buildings, landlords, managed residential blocks and occupied premises. Identify asbestos-containing materials that could be disturbed during normal use, maintenance or day-to-day occupation."
        mobileIntro="Arrange asbestos management surveys in Leeds for commercial buildings, landlords and occupied premises. Clear reports for safe ongoing asbestos management."
        desktopImage="/images/management-surveys-hero.jpg"
        imageAlt="Asbestos management survey in Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-survey-cost-leeds"
        secondaryLabel="View survey costs"
        desktopObjectPosition="center 10%"
        mobileObjectPosition="72% center"
        trustPoints={[
          "Management surveys for occupied buildings",
          "Suitable for landlords, duty holders and managing agents",
          "Clear reports and management recommendations",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="Management surveys"
              intro={
                <p>
                  A management survey is usually the right survey where a building remains in normal use and no intrusive refurbishment or demolition work is planned.
                </p>
              }
            >
              What Is an Asbestos Management Survey?
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                An asbestos management survey is an inspection carried out to locate and assess asbestos-containing materials within a building that is currently occupied or in normal use.
              </p>

              <p>
                The purpose of the survey is to identify materials that may contain asbestos, assess their condition and help determine how they should be managed so they do not pose a risk to occupants, contractors, maintenance workers or visitors.
              </p>

              <p>
                Management surveys are most commonly required for non-domestic buildings and shared areas of residential buildings, particularly where the property was constructed or refurbished before the year 2000.
              </p>

              <p>
                In Leeds, management surveys are frequently arranged for offices, shops, industrial units, warehouses, schools, churches, healthcare buildings, apartment communal areas, rental property portfolios and mixed-use premises.
              </p>

              <p>
                A management survey does not usually involve the same level of intrusive inspection as an <InlineLink href="/asbestos-refurbishment-survey-leeds">asbestos refurbishment survey</InlineLink> or <InlineLink href="/asbestos-demolition-survey-leeds">asbestos demolition survey</InlineLink>. It normally focuses on accessible areas and materials that could reasonably be disturbed during normal occupation or maintenance.
              </p>
            </div>

            <div className="mt-8 grid max-w-[240px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">
                Arrange a survey
              </Button>

              <Button yellow clipped={false} href="/asbestos-surveys-leeds" className="w-full">
                Compare surveys
              </Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                Management surveys help identify
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Whether asbestos-containing materials may be present",
                  "Where those materials are located",
                  "What condition they are in",
                  "Whether they could be disturbed during normal use",
                  "What actions may be needed to manage them safely",
                  "Whether monitoring, repair, removal or further inspection is required",
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
            intro={
              <p>
                Asbestos was widely used in UK construction materials throughout much of the 20th century. Although asbestos use was fully banned in the UK in 1999, many buildings constructed or refurbished before 2000 may still contain asbestos-containing materials.
              </p>
            }
          >
            Why Management Surveys Are Required
          </InnerTitle>

          <div className="grid gap-7 md:grid-cols-[0.58fr_0.42fr]">
            <Fade>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>
                  Asbestos-containing materials are not always dangerous if they are in good condition and left undisturbed. The risk increases when materials are damaged, drilled, cut, sanded, removed or accidentally disturbed during maintenance work.
                </p>

                <p>
                  For non-domestic premises, the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink> place legal duties on those responsible for managing buildings. This is commonly known as the duty to manage asbestos.
                </p>

                <p>
                  A management survey is one of the key tools used to support that duty. It provides information needed to create or update an asbestos register, inform contractors before work takes place and reduce the risk of accidental asbestos disturbance.
                </p>

                <div className="pt-3">
                  <Button href="/quote">Arrange a management survey</Button>
                </div>
              </div>
            </Fade>

            <Fade delay={0.06}>
              <div className="border border-[#d8e2d6] bg-white p-7 shadow-sm clip-section-bl">
                <ClipboardCheck className="h-9 w-9 text-[#305e2f]" />
                <h3 className="mt-5 text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                  Duty holder support
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-slate-600">
                  Management survey reports help duty holders, property owners, landlords and managing agents understand where asbestos risks exist and how they should be managed during normal occupation.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            eyebrow="Local property context"
            intro={
              <p>
                Leeds has a varied mix of building types, from Victorian and Edwardian properties to post-war commercial buildings, retail units, schools, industrial estates and modernised office spaces.
              </p>
            }
          >
            Asbestos Management Surveys for Leeds Properties
          </InnerTitle>

          <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-stretch">
            <Fade>
              <div className="relative min-h-[410px] overflow-hidden bg-[#1b3a1f] clip-section-bl">
                <img
                  src="/images/leeds.png"
                  alt="Leeds buildings"
                  className="absolute inset-0 h-full w-full object-cover object-right opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/90 via-[#1b3a1f]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                    Leeds coverage
                  </p>
                  <h3 className="mt-3 text-[32px] font-semibold leading-none tracking-[-0.04em] text-white">
                    Commercial, managed and mixed-use buildings
                  </h3>
                </div>
              </div>
            </Fade>

            <Fade delay={0.06}>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>
                  Across Leeds city centre, management surveys are commonly arranged for offices, hospitality premises, shops, converted commercial buildings, apartment blocks and managed multi-tenant spaces. These buildings may include asbestos within ceiling voids, service risers, partition walls, floor tiles, plant rooms and pipework insulation.
                </p>

                <p>
                  In areas such as <InlineLink href="/asbestos-survey-headingley">Headingley</InlineLink>, Hyde Park, Burley and Woodhouse, older converted properties and student accommodation may require management surveys where landlords or managing agents are responsible for shared areas, maintenance access or ongoing property safety.
                </p>

                <p>
                  Across Horsforth, Roundhay, Chapel Allerton, Moortown, Otley and Wetherby, larger older properties, converted buildings and managed premises may contain asbestos materials introduced during earlier refurbishment or extension works.
                </p>

                <p>
                  In areas such as <InlineLink href="/asbestos-survey-morley">Morley</InlineLink>, <InlineLink href="/asbestos-survey-pudsey">Pudsey</InlineLink>, Garforth, Rothwell and Hunslet, management surveys are often arranged for workshops, small industrial units, warehouses, retail units and older commercial premises.
                </p>

                <p>
                  A management survey helps provide a clear record of asbestos risks so future maintenance and occupation can be managed safely. You can also explore our <InlineLink href="/areas-we-cover">areas we cover across Leeds</InlineLink>.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={<p>Management surveys are commonly required by people and organisations responsible for occupied buildings.</p>}
          >
            Who May Need an Asbestos Management Survey?
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-6">
            {whoNeeds.map((item, i) => (
              <Fade
                key={item.title}
                delay={(i % 3) * 0.04}
                className={`md:col-span-2 ${i === 3 ? "md:col-start-2" : ""} ${i === 4 ? "md:col-start-4" : ""}`}
              >
                <article className="group flex h-full min-h-[230px] flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-full border border-[#d8e2d6] bg-[#f6f7f3] text-[#1b3a1f] transition group-hover:border-[#305e2f] group-hover:bg-[#eef4eb]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <h3 className="text-[19px] font-semibold leading-tight text-[#1b3a1f]">
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

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.52fr_0.48fr]">
          <Fade>
            <InnerTitle center={false}>
              What an Asbestos Management Survey Involves
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                During an asbestos management survey, a qualified asbestos surveyor inspects accessible parts of the building to identify materials that may contain asbestos.
              </p>
              <p>
                The exact scope will depend on the building type, layout, age, access arrangements and reason for the survey.
              </p>
              <p>
                The survey is generally non-intrusive, although minor access may be required in some areas. It is not designed to fully inspect hidden areas behind fixed walls, sealed voids, floor coverings or structural elements.
              </p>
              <p>
                If refurbishment, intrusive maintenance or demolition work is planned, a different survey type may be needed. See our <InlineLink href="/asbestos-refurbishment-survey-leeds">asbestos refurbishment survey</InlineLink> page if work will disturb the building fabric.
              </p>

              <div className="pt-3">
                <Button href="/quote">Check which survey you need</Button>
              </div>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                A management survey may include
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Visual inspection of accessible areas",
                  "Identification of suspected asbestos-containing materials",
                  "Limited sampling where required",
                  "Laboratory analysis of samples",
                  "Photographs and material descriptions",
                  "Location references or marked plans",
                  "Assessment of material condition",
                  "Management or further-action recommendations",
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
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.48fr_0.52fr]">
          <Fade>
            <InnerTitle center={false}>
              What Your Management Survey Report Should Include
            </InnerTitle>

            <p className="text-[14px] leading-7 text-slate-600">
              After the inspection is completed, you should receive a clear asbestos management survey report. The report is used to support ongoing asbestos management and should provide practical information for property owners, duty holders, managing agents and maintenance teams.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-slate-600">
              It should make it easier to understand where asbestos risks exist and what needs to happen next. Materials in good condition may simply need to be labelled, monitored and managed, while damaged or high-risk materials may need further action.
            </p>

            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/asbestos-reinspection-survey-leeds" className="w-full">
                Reinspection surveys
              </Button>
              <Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">
                Survey costs
              </Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="grid gap-3">
              {reportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={<p>Asbestos-containing materials can appear in many areas of older buildings. The presence of these materials does not automatically mean they need to be removed.</p>}
          >
            Common Asbestos Materials Found in Management Surveys
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-2">
            <Fade>
              <div className="grid gap-3 sm:grid-cols-2">
                {materialItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-[#d8e2d6] bg-[#f6f7f3] px-4 py-3 text-[13px] leading-6 text-slate-700"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Fade>

            <Fade delay={0.06}>
              <div className="dark-link flex h-full flex-col justify-center border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white clip-section-bl">
                <h3 className="text-[30px] font-semibold leading-tight tracking-[-0.04em]">
                  Manage or remove?
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-white/76">
                  The appropriate action depends on material type, condition, location, accessibility and likelihood of disturbance. Intact asbestos cement roof sheets may be managed, while damaged insulation board in a busy service area may require more urgent action.
                </p>
                <p className="mt-4 text-[14px] leading-7 text-white/76">
                  Older textured coatings may also contain asbestos. Read our guide to <InlineLink href="/do-artex-ceilings-contain-asbestos">artex ceilings and asbestos</InlineLink>.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle>
            Management Survey vs Refurbishment or Demolition Survey
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-4">
            {comparisonCards.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group flex h-full flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <a href={card.href} className="text-[20px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                    {card.title}
                  </a>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {card.text}
                  </p>
                  <a href={card.href} className="mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </article>
              </Fade>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-[#1b3a1f] p-6 text-center text-white md:flex-row md:text-left clip-section-bl">
            <p className="text-[15px] font-semibold">
              Not sure which asbestos survey you need? Provide a few property details and a qualified surveyor can advise.
            </p>
            <Button yellow href="/quote" className="shrink-0">
              Get a quote
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-2">
          <Fade>
            <InnerTitle light center={false}>
              Asbestos Management Survey Regulations and Standards
            </InnerTitle>

            <div className="dark-link space-y-5 text-[14px] leading-7 text-white/76">
              <p>
                Asbestos management surveys should be carried out in line with recognised UK guidance and current asbestos regulations.
              </p>
              <p>
                The main legislation is the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>. These regulations include the duty to manage asbestos in non-domestic premises.
              </p>
              <p>
                HSE guidance <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos: The Survey Guide</InlineLink> explains how asbestos surveys should be planned, carried out and recorded. It also explains the difference between management, refurbishment and demolition surveys.
              </p>
              <p>
                Competence is important. Surveyors commonly hold recognised industry qualifications such as <InlineLink href="https://www.bohs.org/education/qualifications/detail/surveying-and-sampling-strategies-for-asbestos-in-buildings-p402/" external>BOHS P402</InlineLink>, and samples should be analysed by a UKAS-accredited laboratory where sampling is required.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">
                Trust and reporting standards
              </h3>
              <div className="mt-6 grid gap-3">
                {[
                  "HSE guidance-led survey approach",
                  "BOHS P402 qualified surveyors",
                  "UKAS-accredited laboratory analysis where sampling is required",
                  "Reports suitable for asbestos registers and management plans",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-3 text-[13px] leading-6 text-white/82">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#e3c541]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={
              <p>
                Management survey enquiries can be arranged across Leeds for commercial premises, landlords, managing agents, schools, churches, offices, warehouses and managed residential buildings.
              </p>
            }
          >
            Management Surveys Across Leeds
          </InnerTitle>

          <Fade>
            <article className="mb-8 grid gap-5 md:grid-cols-[0.42fr_0.58fr]">
              <a
                href="/asbestos-survey-leeds-centre"
                className="group relative min-h-[360px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)] clip-section-bl"
              >
                <img
                  src="/images/leeds-city-centre-map.png"
                  alt="Leeds City Centre map"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#1b3a1f]/12" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/58 via-58% to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(227,197,65,0.18),transparent_28%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                    {areaMeta["Leeds Centre"]}
                  </p>
                  <h3 className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.04em] text-white">
                    Leeds City Centre
                  </h3>
                  <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-white/82">
                    Offices, hospitality premises, retail units, managed buildings and multi-tenant commercial spaces.
                  </p>
                </div>
              </a>

              <div className="flex flex-col justify-center border border-[#d5e0d4] bg-white p-7 shadow-sm md:p-8 clip-section-bl">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
                  Leeds management survey coverage
                </p>
                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[38px]">
                  Occupied buildings, managed premises and landlord properties
                </h3>
                <div className="mt-5 space-y-4 text-[14px] leading-7 text-slate-600">
                  <p>
                    Management surveys are commonly arranged across Leeds city centre offices, commercial units, managed residential blocks, schools, churches, warehouses and older mixed-use premises.
                  </p>
                  <p>
                    Enquiries are also handled for landlord-managed shared areas around Headingley, older commercial buildings across Morley and Pudsey, and managed premises in Horsforth, Garforth, Rothwell, Otley and Wetherby.
                  </p>
                  <p>
                    Use the area cards below to explore local asbestos survey pages for key Leeds locations.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/areas-we-cover">View areas we cover</Button>
                  <Button ghost clipped={false} href="/quote">Get a quote</Button>
                </div>
              </div>
            </article>
          </Fade>

          <div className="grid gap-6 md:grid-cols-3">
            {areaLinks.filter((area) => area.label !== "Leeds Centre").map((area, i) => (
              <Fade key={area.href} delay={(i % 3) * 0.04}>
                <a
                  href={area.href}
                  className="group relative block min-h-[210px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.12)] clip-section-bl"
                >
                  <img
                    src={`/images/${mapNames[area.label]}.png`}
                    alt={`${area.label} map`}
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#1b3a1f]/18" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/55 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                      {areaMeta[area.label]}
                    </p>
                    <h3 className="mt-2 text-[25px] font-semibold leading-none tracking-[-0.04em] text-white">
                      {area.label}
                    </h3>
                    <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/82">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </a>
              </Fade>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/areas-we-cover">View all areas we cover</Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.56fr_0.44fr]">
          <Fade>
            <InnerTitle center={false}>
              How Much Does an Asbestos Management Survey Cost in Leeds?
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                The cost of an asbestos management survey in Leeds depends on the size, type and layout of the property.
              </p>
              <p>
                A small commercial unit or simple communal area will usually be more straightforward than a large school, warehouse, office block or multi-site property portfolio.
              </p>
              <p>
                Management surveys are often less intrusive than refurbishment or demolition surveys, but costs still vary depending on the complexity of the building. For the most accurate price, request a quote with details of the property and reason for the survey.
              </p>
            </div>

            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">
                View typical costs
              </Button>
              <Button href="/quote" className="w-full">
                Request a quote
              </Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                Cost factors
              </h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Property size",
                  "Number of rooms or areas to inspect",
                  "Building layout",
                  "Access requirements",
                  "Number of samples required",
                  "Commercial, residential or industrial use",
                  "Whether marked plans or records are needed",
                  "How quickly the survey is required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                    <span>{item}</span>
                  </div>
                ))}
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
              Frequently Asked Questions About Asbestos Management Surveys
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
                Need an Asbestos Management Survey in Leeds?
              </h3>

              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">
                Arrange an asbestos management survey for commercial premises, managed buildings, landlord properties and occupied buildings across Leeds.
              </p>

              <div className="mt-7 grid max-w-[250px] gap-3">
                <Button ghost clipped={false} href="/asbestos-survey-cost-leeds">
                  View Survey Costs
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
              Need an Asbestos Management Survey in Leeds?
            </h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              Most enquiries receive a fast response. Provide details of the property, location and reason for the survey, and a qualified asbestos surveyor can advise on the most suitable next step.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 md:w-auto">
            <Button ghost clipped={false} href="/asbestos-survey-cost-leeds" className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]">
              View survey costs
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
