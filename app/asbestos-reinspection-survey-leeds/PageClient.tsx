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

const whoNeeds = [
  {
    title: "Commercial Property Owners",
    text: "Commercial property owners may need periodic reinspections to monitor known asbestos materials within occupied offices, shops, warehouses, hospitality premises and industrial buildings.",
  },
  {
    title: "Landlords and Managing Agents",
    text: "Landlords and managing agents often arrange reinspections for communal areas, service cupboards, stairwells, plant rooms and shared spaces covered by asbestos management plans.",
  },
  {
    title: "Schools and Public Buildings",
    text: "Schools, colleges, churches, healthcare buildings and community premises may need ongoing asbestos monitoring to keep asbestos registers and management records current.",
  },
  {
    title: "Facilities and Maintenance Teams",
    text: "Facilities teams may require updated asbestos information before planned maintenance, contractor visits, compliance reviews or changes to building use.",
  },
  {
    title: "Duty Holders Under Asbestos Regulations",
    text: "Duty holders responsible for non-domestic premises use reinspection surveys to support ongoing asbestos management duties under the Control of Asbestos Regulations 2012.",
  },
];

const reportItems = [
  "Review of previously identified asbestos materials",
  "Updated material condition assessments",
  "Current photographs and condition notes",
  "Notes regarding deterioration or damage",
  "Updated risk scoring",
  "Recommendations for continued management",
  "Recommendations for repair, encapsulation or removal where required",
  "Information to support asbestos registers and management plans",
];

const materialItems = [
  "Asbestos insulation board",
  "Cement roofing sheets",
  "Ceiling tiles",
  "Vinyl floor tiles",
  "Pipe insulation",
  "Service duct panels",
  "Boiler insulation",
  "Textured coatings",
  "Soffits and fascia boards",
  "Partition wall panels",
  "Fire protection materials",
];

const comparisonCards = [
  {
    title: "Management Survey",
    href: "/asbestos-management-survey-leeds",
    text: "Used to initially identify asbestos-containing materials within an occupied building and assess how they should be managed.",
  },
  {
    title: "Reinspection Survey",
    href: "/asbestos-reinspection-survey-leeds",
    text: "Used after asbestos materials have already been identified. It reassesses their condition and updates management information.",
  },
  {
    title: "Refurbishment Survey",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Required before intrusive renovation, rewiring, strip-out or refurbishment work that may disturb hidden materials.",
  },
  {
    title: "Demolition Survey",
    href: "/asbestos-demolition-survey-leeds",
    text: "Required before full or partial demolition. It is a fully intrusive inspection designed to locate asbestos before demolition begins.",
  },
];

const faqs = [
  {
    q: "What is an asbestos reinspection survey?",
    a: (
      <>
        A reinspection survey is used to reassess the condition of previously identified asbestos-containing materials and determine whether they remain suitable for ongoing management.
      </>
    ),
  },
  {
    q: "How often should asbestos be reinspected?",
    a: (
      <>
        The frequency depends on the material type, condition, accessibility and asbestos management plan. Many asbestos materials are periodically reinspected as part of ongoing management procedures.
      </>
    ),
  },
  {
    q: "Is a reinspection survey a legal requirement?",
    a: (
      <>
        Duty holders under the Control of Asbestos Regulations 2012 are responsible for managing asbestos risks within non-domestic premises. Periodic reinspections are commonly used to support those responsibilities.
      </>
    ),
  },
  {
    q: "Does a reinspection survey involve sampling?",
    a: (
      <>
        Not always. Reinspection surveys focus on previously identified materials. Additional sampling may only be required if new suspected materials are identified or if further confirmation is needed.
      </>
    ),
  },
  {
    q: "What happens if asbestos materials have deteriorated?",
    a: (
      <>
        The report should explain whether repair, encapsulation, removal or additional management measures are recommended.
      </>
    ),
  },
  {
    q: "Can a reinspection survey identify new asbestos materials?",
    a: (
      <>
        The primary purpose is to reassess previously identified materials, but surveyors may recommend further assessment if additional suspected materials are observed.
      </>
    ),
  },
  {
    q: "Can a reinspection survey be used before refurbishment work?",
    a: (
      <>
        No. If intrusive work is planned, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment survey</InlineLink> is usually required instead.
      </>
    ),
  },
];

export default function AsbestosReinspectionSurveyLeedsPage() {
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
              linear-gradient(
                to bottom,
                rgba(246,242,238,0.34) 0%,
                rgba(246,242,238,0.12) 18%,
                rgba(246,242,238,0) 34%
              ),
              linear-gradient(
                to right,
                rgba(246,242,238,0.90) 0%,
                rgba(246,242,238,0.70) 36%,
                rgba(246,242,238,0.28) 60%,
                rgba(246,242,238,0) 80%
              ) !important;
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
        title="Asbestos Reinspection Surveys in Leeds"
        intro="Arrange asbestos reinspection surveys in Leeds for commercial buildings, managed properties and premises where asbestos-containing materials have previously been identified. Monitor known asbestos materials and keep management records current."
        mobileIntro="Arrange asbestos reinspection surveys in Leeds for commercial buildings and managed premises where asbestos materials have already been identified."
        desktopImage="/images/asbestos-reinspection-survey-leeds.png"
        imageAlt="Asbestos reinspection survey in Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-management-survey-leeds"
        secondaryLabel="View management surveys"
        desktopObjectPosition="1% 10%"
        mobileObjectPosition="82% center"
        trustPoints={[
          "Ongoing monitoring of known asbestos materials",
          "Suitable for commercial premises and managed properties",
          "Compliance-focused asbestos reporting",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle center={false} eyebrow="Reinspection surveys" intro={<p>A reinspection survey is usually required where asbestos-containing materials have already been identified and need to be monitored over time.</p>}>
              What Is an Asbestos Reinspection Survey?
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>An asbestos reinspection survey is carried out where asbestos-containing materials have previously been identified within a building and require ongoing monitoring.</p>
              <p>The purpose of the inspection is to reassess the condition of those materials and determine whether they remain in a safe and manageable condition.</p>
              <p>Reinspection surveys are commonly used as part of asbestos management plans for occupied buildings and non-domestic premises.</p>
              <p>During the inspection, previously identified asbestos-containing materials are reviewed, reassessed and compared against earlier survey records. The surveyor checks whether materials have deteriorated, become damaged or are now at greater risk of disturbance.</p>
              <p>These surveys are closely linked to <InlineLink href="/asbestos-management-survey-leeds">asbestos management surveys</InlineLink>. If asbestos has not yet been identified, an initial management survey may be needed first. You can also compare all <InlineLink href="/asbestos-surveys-leeds">asbestos surveys in Leeds</InlineLink>.</p>
            </div>
            <div className="mt-8 grid max-w-[240px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">Arrange a survey</Button>
              <Button yellow clipped={false} href="/asbestos-management-survey-leeds" className="w-full">Management surveys</Button>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Reinspection surveys help identify</h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Whether known asbestos materials remain in good condition",
                  "Whether materials have deteriorated or become damaged",
                  "Whether materials are now at greater risk of disturbance",
                  "Whether repair, encapsulation or removal may be required",
                  "Whether asbestos registers and management plans need updating",
                  "Whether additional assessment or sampling is recommended",
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

      <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Not all asbestos-containing materials need to be removed immediately. In many cases, asbestos materials in good condition can be safely managed in place — but they still need monitoring.</p>}>
            Why Asbestos Reinspection Surveys Are Important
          </InnerTitle>
          <div className="grid gap-7 md:grid-cols-[0.58fr_0.42fr]">
            <Fade>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>Asbestos-containing materials can deteriorate over time, especially in areas exposed to maintenance activity, moisture, vibration, accidental impact or general building wear.</p>
                <p>A reinspection survey helps duty holders maintain accurate asbestos records and supports ongoing compliance with asbestos management responsibilities under the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>.</p>
                <p>It also helps property owners, landlords, managing agents and facilities teams understand whether previously identified materials remain suitable for ongoing management or now require further action.</p>
                <div className="pt-3"><Button href="/quote">Arrange a reinspection survey</Button></div>
              </div>
            </Fade>
            <Fade delay={0.06}>
              <div className="border border-[#d8e2d6] bg-white p-7 shadow-sm clip-section-bl">
                <ClipboardCheck className="h-9 w-9 text-[#305e2f]" />
                <h3 className="mt-5 text-[26px] font-semibold leading-tight text-[#1b3a1f]">Ongoing asbestos management</h3>
                <p className="mt-4 text-[14px] leading-7 text-slate-600">Reinspection reports help keep asbestos registers, contractor information and management plans up to date, particularly for occupied buildings where maintenance work continues over time.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle eyebrow="Local property context" intro={<p>Across Leeds, many commercial and managed buildings still contain asbestos-containing materials introduced during construction or refurbishment work completed before 2000.</p>}>
            Asbestos Reinspection Surveys for Leeds Properties
          </InnerTitle>
          <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-stretch">
            <Fade>
              <div className="relative min-h-[410px] overflow-hidden bg-[#1b3a1f] clip-section-bl">
                <img src="/images/leeds.png" alt="Leeds buildings" className="absolute inset-0 h-full w-full object-cover object-right opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/90 via-[#1b3a1f]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">Leeds coverage</p>
                  <h3 className="mt-3 text-[32px] font-semibold leading-none tracking-[-0.04em] text-white">Managed buildings and asbestos records</h3>
                </div>
              </div>
            </Fade>
            <Fade delay={0.06}>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>In Leeds city centre, reinspection surveys are commonly arranged for offices, mixed-use buildings, hospitality premises and managed commercial properties where asbestos materials may exist within service risers, ceiling voids, plant rooms or partition systems.</p>
                <p>Older schools, churches and public buildings across areas such as <InlineLink href="/asbestos-survey-headingley">Headingley</InlineLink>, Roundhay, Chapel Allerton and <InlineLink href="/asbestos-survey-pudsey">Pudsey</InlineLink> may also require periodic reinspections as part of ongoing management plans.</p>
                <p>Industrial buildings and warehouses across <InlineLink href="/asbestos-survey-morley">Morley</InlineLink>, Garforth, Hunslet and surrounding commercial areas frequently contain asbestos cement roofing sheets, insulation products, wall panels and service duct materials that require periodic condition monitoring.</p>
                <p>Landlords and managing agents may also arrange reinspection surveys for communal areas within apartment buildings, converted properties and mixed-use developments across Leeds.</p>
                <p>A reinspection survey helps ensure asbestos management records remain current and helps identify any materials that may require further action before they become a greater risk. You can also explore our <InlineLink href="/areas-we-cover">areas we cover across Leeds</InlineLink>.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Reinspection surveys are commonly arranged by organisations and individuals responsible for buildings where asbestos-containing materials have already been identified.</p>}>
            Who May Need an Asbestos Reinspection Survey?
          </InnerTitle>
          <div className="grid gap-6 md:grid-cols-6">
            {whoNeeds.map((item, i) => (
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
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.52fr_0.48fr]">
          <Fade>
            <InnerTitle center={false}>What an Asbestos Reinspection Survey Involves</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>During a reinspection survey, a qualified asbestos surveyor reviews previously identified asbestos-containing materials and reassesses their condition.</p>
              <p>The survey focuses on known asbestos materials rather than identifying completely new areas of asbestos throughout the building.</p>
              <p>However, if additional suspected materials are identified during the inspection, further assessment or sampling may be recommended.</p>
              <p>If intrusive work is planned, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment survey</InlineLink> may be required instead. If asbestos has not yet been identified, see our <InlineLink href="/asbestos-management-survey-leeds">management survey</InlineLink> page.</p>
              <div className="pt-3"><Button href="/quote">Request a reinspection quote</Button></div>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">The survey may include</h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Review of previous asbestos survey reports",
                  "Inspection of known asbestos-containing materials",
                  "Assessment of material condition",
                  "Updated risk assessments",
                  "Photographs and condition notes",
                  "Identification of deterioration or damage",
                  "Recommendations for ongoing management",
                  "Recommendations for repair, encapsulation or removal where required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.48fr_0.52fr]">
          <Fade>
            <InnerTitle center={false}>What Your Reinspection Survey Report Should Include</InnerTitle>
            <p className="text-[14px] leading-7 text-slate-600">After the inspection is completed, you should receive an updated asbestos reinspection report outlining the condition of previously identified asbestos-containing materials.</p>
            <p className="mt-5 text-[14px] leading-7 text-slate-600">The report should clearly explain whether asbestos-containing materials remain suitable for ongoing management or whether further action is recommended.</p>
            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/asbestos-survey-cost-leeds" className="w-full">Survey costs</Button>
              <Button yellow clipped={false} href="/asbestos-management-survey-leeds" className="w-full">Management surveys</Button>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="grid gap-3">
              {reportItems.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Reinspection surveys commonly involve monitoring asbestos-containing materials already recorded in a previous survey report, asbestos register or management plan.</p>}>
            Common Asbestos Materials Monitored During Reinspection Surveys
          </InnerTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <Fade>
              <div className="grid gap-3 sm:grid-cols-2">
                {materialItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-[#f6f7f3] px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>
                ))}
              </div>
            </Fade>
            <Fade delay={0.06}>
              <div className="dark-link flex h-full flex-col justify-center border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white clip-section-bl">
                <h3 className="text-[30px] font-semibold leading-tight tracking-[-0.04em]">Stable does not mean forgotten</h3>
                <p className="mt-4 text-[14px] leading-7 text-white/76">Some asbestos materials may remain low risk for many years if properly managed, while others may deteriorate more quickly depending on material type, accessibility, occupancy levels and building use.</p>
                <p className="mt-4 text-[14px] leading-7 text-white/76">Older textured coatings may also require ongoing consideration. Read our guide to <InlineLink href="/do-artex-ceilings-contain-asbestos">artex ceilings and asbestos</InlineLink>.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle>Reinspection Survey vs Management Survey</InnerTitle>
          <div className="grid gap-6 md:grid-cols-4">
            {comparisonCards.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group flex h-full flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <a href={card.href} className="text-[20px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">{card.title}</a>
                  <p className="mt-4 text-[13px] leading-7 text-slate-600">{card.text}</p>
                  <a href={card.href} className="mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">Learn More <ArrowRight className="h-3 w-3" /></a>
                </article>
              </Fade>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-[#1b3a1f] p-6 text-center text-white md:flex-row md:text-left clip-section-bl">
            <p className="text-[15px] font-semibold">Not sure whether you need a management survey, reinspection or refurbishment survey? Provide a few property details and a qualified surveyor can advise.</p>
            <Button yellow href="/quote" className="shrink-0">Get a quote</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-2">
          <Fade>
            <InnerTitle light center={false}>Asbestos Reinspection Survey Regulations and Standards</InnerTitle>
            <div className="dark-link space-y-5 text-[14px] leading-7 text-white/76">
              <p>Asbestos reinspection surveys should be carried out in line with recognised UK asbestos legislation and industry guidance.</p>
              <p>The main legislation is the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>, which includes duties relating to the ongoing management of asbestos within non-domestic premises.</p>
              <p>Survey work is commonly completed in accordance with HSE guidance including <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos: The Survey Guide</InlineLink>.</p>
              <p>Surveyors commonly hold recognised industry qualifications such as <InlineLink href="https://www.bohs.org/education/qualifications/detail/surveying-and-sampling-strategies-for-asbestos-in-buildings-p402/" external>BOHS P402</InlineLink>, and any additional sample analysis should be completed by a UKAS-accredited laboratory.</p>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">Trust and reporting standards</h3>
              <div className="mt-6 grid gap-3">
                {[
                  "HSG264 guidance-led inspections",
                  "BOHS P402 qualified surveyors",
                  "UKAS-accredited laboratory analysis where required",
                  "Reports suitable for asbestos management records",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-3 text-[13px] leading-6 text-white/82"><Check className="mt-1 h-4 w-4 shrink-0 text-[#e3c541]" /><span>{item}</span></div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Reinspection survey enquiries can be arranged for offices, warehouses, schools, retail premises, apartment communal areas, churches and managed commercial buildings across Leeds.</p>}>
            Reinspection Surveys Across Leeds
          </InnerTitle>
          <Fade>
            <article className="mb-8 grid gap-5 md:grid-cols-[0.42fr_0.58fr]">
              <a href="/asbestos-survey-leeds-centre" className="group relative min-h-[360px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)] clip-section-bl">
                <img src="/images/leeds-city-centre-map.png" alt="Leeds City Centre map" className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[#1b3a1f]/12" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/58 via-58% to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(227,197,65,0.18),transparent_28%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">{areaMeta["Leeds Centre"]}</p>
                  <h3 className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.04em] text-white">Leeds City Centre</h3>
                  <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-white/82">Offices, mixed-use buildings, hospitality premises and managed commercial properties across central Leeds.</p>
                </div>
              </a>
              <div className="flex flex-col justify-center border border-[#d5e0d4] bg-white p-7 shadow-sm md:p-8 clip-section-bl">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">Leeds reinspection coverage</p>
                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[38px]">Ongoing asbestos monitoring across Leeds</h3>
                <div className="mt-5 space-y-4 text-[14px] leading-7 text-slate-600">
                  <p>Reinspection surveys are commonly arranged across Leeds city centre offices, managed residential blocks, schools, churches, warehouses and older mixed-use premises.</p>
                  <p>Enquiries are also handled for landlord-managed shared areas around Headingley, older commercial buildings across Morley and Pudsey, and managed premises in Horsforth, Garforth, Rothwell, Otley and Wetherby.</p>
                  <p>Use the area cards below to explore local asbestos survey pages for key Leeds locations.</p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3"><Button href="/areas-we-cover">View areas we cover</Button><Button ghost clipped={false} href="/quote">Get a quote</Button></div>
              </div>
            </article>
          </Fade>
          <div className="grid gap-6 md:grid-cols-3">
            {areaLinks.filter((area) => area.label !== "Leeds Centre").map((area, i) => (
              <Fade key={area.href} delay={(i % 3) * 0.04}>
                <a href={area.href} className="group relative block min-h-[210px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.12)] clip-section-bl">
                  <img src={`/images/${mapNames[area.label]}.png`} alt={`${area.label} map`} className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-[#1b3a1f]/18" /><div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/55 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5"><p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">{areaMeta[area.label]}</p><h3 className="mt-2 text-[25px] font-semibold leading-none tracking-[-0.04em] text-white">{area.label}</h3><p className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/82">Learn More <ArrowRight className="h-3 w-3" /></p></div>
                </a>
              </Fade>
            ))}
          </div>
          <div className="mt-8 text-center"><Button href="/areas-we-cover">View all areas we cover</Button></div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.56fr_0.44fr]">
          <Fade>
            <InnerTitle center={false}>How Much Does an Asbestos Reinspection Survey Cost in Leeds?</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>The cost of an asbestos reinspection survey depends on the number of known asbestos materials, property size, accessibility and the complexity of the asbestos register.</p>
              <p>Smaller buildings with limited asbestos materials are generally more straightforward than large commercial premises, schools, warehouses or multi-site property portfolios.</p>
              <p>For the most accurate price, provide details about the property, previous asbestos surveys and the number of materials requiring reinspection.</p>
            </div>
            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2"><Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">View typical costs</Button><Button href="/quote" className="w-full">Request a quote</Button></div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl"><h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Cost factors</h3><div className="mt-6 grid gap-3">{[
              "Number of known asbestos materials",
              "Property size",
              "Accessibility",
              "Building type",
              "Number of areas requiring inspection",
              "Commercial or residential use",
              "Complexity of the asbestos register",
              "How quickly the updated report is required",
            ].map((item) => (<div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>))}</div></div>
          </Fade>
        </div>
      </section>

      <QuoteForm />

      <section id="faqs" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute inset-0"><img src="/images/FAQs.png" alt="Frequently asked questions" className="h-full w-full object-cover object-right" /><div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/90 to-[#f6f2ee]/20" /></div>
        <div className="relative z-10 mx-auto max-w-[1120px]"><div className="max-w-[760px]"><InnerTitle center={false}>Frequently Asked Questions About Asbestos Reinspection Surveys</InnerTitle><div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">{faqs.map(({ q, a }, i) => (<details key={q} open={i === 0} className="group border-b border-[#d8e2d6] last:border-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]"><span>{q}</span><span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">+</span></summary><div className="px-6 pb-6"><p className="max-w-[90%] text-[14px] leading-7 text-slate-600">{a}</p></div></details>))}</div><div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white shadow-[0_20px_50px_rgba(27,58,31,0.12)] clip-section-bl"><h3 className="text-[28px] font-semibold leading-tight">Need an Asbestos Reinspection Survey in Leeds?</h3><p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">Arrange asbestos reinspection survey enquiries for commercial buildings, managed properties and occupied premises across Leeds and surrounding areas.</p><div className="mt-7 grid max-w-[250px] gap-3"><Button ghost clipped={false} href="/asbestos-management-survey-leeds">View Management Surveys</Button><Button yellow href="/quote">Get a Quote</Button></div></div></div></div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20"><div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center"><div><h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">Need an Asbestos Reinspection Survey in Leeds?</h2><p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">Provide details of the property, previous asbestos survey information and the reason for the inspection, and a qualified asbestos professional can advise on the most suitable next step.</p></div><div className="flex w-full flex-col gap-3 md:w-auto"><Button ghost clipped={false} href="/asbestos-management-survey-leeds" className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]">Management surveys</Button><Button yellow href="/quote" className="w-full md:w-[230px]">Get a quote</Button></div></div></section>

      <Footer />
    </main>
  );
}
