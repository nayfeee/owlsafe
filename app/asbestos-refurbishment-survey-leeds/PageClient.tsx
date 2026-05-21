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
    "title": "Homeowners Planning Renovation",
    "text": "Homeowners may need a refurbishment survey before kitchen replacements, bathroom upgrades, extensions, garage conversions, loft works or structural alterations."
  },
  {
    "title": "Landlords and Letting Agents",
    "text": "Landlords often arrange refurbishment surveys before upgrading rental properties, HMOs, communal areas, heating systems, electrics or kitchens and bathrooms."
  },
  {
    "title": "Commercial Property Owners",
    "text": "Offices, shops, hospitality premises, warehouses and mixed-use buildings may require refurbishment surveys before fit-outs, strip-outs, partition changes or service upgrades."
  },
  {
    "title": "Contractors and Developers",
    "text": "Contractors may require asbestos information before starting intrusive works, especially where existing asbestos records are missing, outdated or only cover management use."
  },
  {
    "title": "Schools and Public Buildings",
    "text": "Older schools, churches, healthcare premises and community buildings may require refurbishment surveys before maintenance, cabling, ceiling works or building upgrades."
  }
];
const reportItems = [
  "Property details and planned work scope",
  "Specific areas inspected",
  "Areas not accessed or excluded",
  "Suspected or confirmed asbestos-containing materials",
  "Sample results where materials are tested",
  "Photographs and location references",
  "Material assessment information",
  "Recommendations before refurbishment starts",
  "Information for contractors and project planning"
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
    text: "Required before intrusive renovation, rewiring, strip-out or refurbishment work that may disturb hidden materials.",
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
const faqs = [
  {
    "q": "What is an asbestos refurbishment survey?",
    "a": "An asbestos refurbishment survey is an intrusive inspection carried out before refurbishment, renovation, rewiring, repair or strip-out works. It identifies asbestos-containing materials that may be disturbed during the planned work."
  },
  {
    "q": "When is a refurbishment survey required?",
    "a": "A refurbishment survey is usually required before work that will disturb the building fabric, including renovations, rewiring, ceiling works, kitchen or bathroom replacements, structural alterations and commercial fit-outs."
  },
  {
    "q": "Is a refurbishment survey intrusive?",
    "a": "Yes. A refurbishment survey can be intrusive because hidden materials may need to be checked before work begins. The inspection should be targeted to the areas affected by the planned works."
  },
  {
    "q": "Can I use a management survey before refurbishment work?",
    "a": "Not usually. A management survey is designed for normal occupation and accessible materials. If intrusive work is planned, a refurbishment survey is normally required."
  },
  {
    "q": "Does a refurbishment survey involve sampling?",
    "a": "It may involve sampling suspected asbestos-containing materials where confirmation is needed. Samples should be analysed by a UKAS-accredited laboratory."
  },
  {
    "q": "Do I need a refurbishment survey for a kitchen or bathroom?",
    "a": "If the property was built or refurbished before 2000 and works will disturb walls, ceilings, floors, boxing, tiles or services, a refurbishment survey may be required before the work starts."
  },
  {
    "q": "What happens if asbestos is found?",
    "a": "The report should identify where asbestos is located, what material type is suspected or confirmed and what action may be required before refurbishment work can proceed."
  },
  {
    "q": "Is a refurbishment survey the same as a demolition survey?",
    "a": "No. A refurbishment survey is targeted to areas affected by planned works. A demolition survey is usually more extensive and is required before full or partial demolition."
  }
];

export default function AsbestosRefurbishmentSurveyLeedsPage() {
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
        rgba(246,242,238,0.42) 0%,
        rgba(246,242,238,0.14) 18%,
        rgba(246,242,238,0) 34%
      ),
      linear-gradient(
        to right,
        rgba(246,242,238,0.92) 0%,
        rgba(246,242,238,0.74) 36%,
        rgba(246,242,238,0.30) 60%,
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
        title="Asbestos Refurbishment Surveys in Leeds"
        intro="Arrange asbestos refurbishment surveys in Leeds before renovation, rewiring, strip-out or intrusive building works begin. Identify hidden asbestos-containing materials before they can be disturbed during planned refurbishment."
        mobileIntro="Arrange asbestos refurbishment surveys in Leeds before renovation, rewiring or intrusive works begin. Clear reports before work starts."
        desktopImage="/images/refurbishment-survey-hero.png"
        imageAlt="Asbestos refurbishment survey in Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-survey-cost-leeds"
        secondaryLabel="View survey costs"
        desktopObjectPosition="center 0%"
        mobileObjectPosition="72% center"
        trustPoints={[
  "Refurbishment surveys before intrusive works",
  "Suitable for renovations, rewiring and strip-out",
  "Clear reports before contractors start work"
]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle center={false} eyebrow="Refurbishment surveys" intro={<p>A refurbishment survey is usually required before work disturbs the building fabric, even where the planned works are relatively small.</p>}>
              What Is an Asbestos Refurbishment Survey?
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>An asbestos refurbishment survey is an intrusive inspection carried out before refurbishment, renovation, rewiring, repair or strip-out works begin.</p>
              <p>These surveys help identify asbestos-containing materials that may be hidden within the structure of a building, including behind walls, above ceilings, beneath flooring, inside service ducts or around pipework.</p>
              <p>Unlike an asbestos management survey, a refurbishment survey is designed for areas where planned works may disturb materials that are not normally visible during day-to-day use.</p>
              <p>In Leeds, refurbishment surveys are commonly arranged before kitchen and bathroom upgrades, electrical rewiring, shop fit-outs, office refurbishments, school maintenance projects, garage conversions and landlord improvement works.</p>
              <p>If the work is intrusive, a refurbishment survey is normally more suitable than an <InlineLink href="/asbestos-management-survey-leeds">asbestos management survey</InlineLink>. If a whole building or structure is being demolished, an <InlineLink href="/asbestos-demolition-survey-leeds">asbestos demolition survey</InlineLink> may be required instead.</p>
            </div>
            <div className="mt-8 grid max-w-[240px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">Arrange a survey</Button>
              <Button yellow clipped={false} href="/asbestos-surveys-leeds" className="w-full">Compare surveys</Button>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Refurbishment surveys help identify</h3>
              <div className="mt-6 grid gap-3">
                {[
  "Hidden asbestos-containing materials before works begin",
  "Areas where intrusive access may be needed",
  "Materials likely to be disturbed by contractors",
  "Sampling requirements before refurbishment starts",
  "Whether removal, repair or further action is needed",
  "Information contractors need before work proceeds"
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
          <InnerTitle intro={<p>Refurbishment work can disturb asbestos-containing materials that are not visible during normal occupation. That is why a standard management survey may not be enough before intrusive works begin.</p>}>
            Why Refurbishment Surveys Are Important
          </InnerTitle>
          <div className="grid gap-7 md:grid-cols-[0.58fr_0.42fr]">
            <Fade>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>Asbestos-containing materials can be concealed behind plasterboard, inside ceiling voids, beneath old floor coverings, within risers, around pipework or behind boxing. These areas may only be exposed when contractors start cutting, drilling, lifting or removing materials.</p>
              <p>A refurbishment survey reduces the risk of accidental asbestos disturbance by identifying suspected asbestos-containing materials before the planned work starts.</p>
              <p>For non-domestic premises, the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink> require asbestos risks to be properly managed. HSE guidance also makes clear that refurbishment and demolition work require appropriate intrusive inspection before work proceeds.</p>
                <div className="pt-3"><Button href="/quote">Arrange a survey</Button></div>
              </div>
            </Fade>
            <Fade delay={0.06}>
              <div className="border border-[#d8e2d6] bg-white p-7 shadow-sm clip-section-bl">
                <ClipboardCheck className="h-9 w-9 text-[#305e2f]" />
                <h3 className="mt-5 text-[26px] font-semibold leading-tight text-[#1b3a1f]">Before work starts</h3>
                <p className="mt-4 text-[14px] leading-7 text-slate-600">The aim is to provide clear asbestos information before contractors disturb the building fabric, helping property owners, landlords, developers and project teams plan works safely.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle eyebrow="Local property context" intro={<p>Leeds has a high volume of older homes, rental properties, commercial units and mixed-use buildings where refurbishment work can uncover asbestos-containing materials.</p>}>
            Asbestos Refurbishment Surveys for Leeds Properties
          </InnerTitle>
          <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-stretch">
            <Fade>
              <div className="relative min-h-[410px] overflow-hidden bg-[#1b3a1f] clip-section-bl">
                <img src="/images/leeds.png" alt="Leeds buildings" className="absolute inset-0 h-full w-full object-cover object-right opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/90 via-[#1b3a1f]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">Leeds coverage</p>
                  <h3 className="mt-3 text-[32px] font-semibold leading-none tracking-[-0.04em] text-white">Renovations, rewiring and intrusive works</h3>
                </div>
              </div>
            </Fade>
            <Fade delay={0.06}>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>Across Headingley, Hyde Park, Burley, Woodhouse and Armley, older terraced properties and converted rentals are frequently upgraded for student lets, HMOs, kitchens, bathrooms, heating systems and electrical rewiring. These works can disturb textured coatings, insulation board, floor tiles, pipe boxing and ceiling void materials.</p>
              <p>In Leeds city centre, Holbeck and Morley, refurbishment surveys are often arranged before office fit-outs, shop refurbishments, hospitality upgrades, warehouse alterations and changes of use within older commercial buildings.</p>
              <p>Across Horsforth, Roundhay, Chapel Allerton, Pudsey, Garforth, Rothwell, Otley and Wetherby, refurbishment surveys may be needed before extensions, loft conversions, structural alterations, garage conversions or modernisation works within older properties.</p>
              <p>A refurbishment survey helps ensure materials are identified before contractors disturb them, reducing risk to occupants, tradespeople and the wider project.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Refurbishment surveys are commonly required by anyone planning intrusive work to a building constructed or refurbished before 2000.</p>}>
            Who May Need an Asbestos Refurbishment Survey?
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
            <InnerTitle center={false}>What an Asbestos Refurbishment Survey Involves</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>During a refurbishment survey, the surveyor inspects the specific areas affected by the planned works. The scope should match the proposed refurbishment, renovation or strip-out activity.</p>
              <p>The inspection may involve intrusive access because hidden materials need to be checked before contractors begin. This can include opening voids, lifting floor coverings, inspecting ceiling spaces and sampling suspected materials.</p>
              <p>The survey should be carried out before the affected area is occupied by contractors or disturbed by the refurbishment works.</p>
              <p>If the entire structure is being demolished rather than refurbished, see our <InlineLink href="/asbestos-demolition-survey-leeds">asbestos demolition survey</InlineLink> page.</p>
              <div className="pt-3"><Button href="/quote">Check which survey you need</Button></div>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">The survey may include</h3>
              <div className="mt-6 grid gap-3">
                {[
  "Opening wall voids or boxed-in areas",
  "Accessing ceiling cavities",
  "Lifting flooring systems where required",
  "Inspecting service risers and ducts",
  "Sampling suspected materials",
  "Laboratory analysis where samples are taken",
  "Photographs and material descriptions",
  "Recommendations before works proceed"
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
            <InnerTitle center={false}>What Your Refurbishment Survey Report Should Include</InnerTitle>
            <p className="text-[14px] leading-7 text-slate-600">After the inspection is completed, you should receive a clear asbestos survey report that explains what was inspected, what was found and what should happen before works proceed.</p>
            <p className="mt-5 text-[14px] leading-7 text-slate-600">The report should be practical enough for property owners, duty holders, contractors and project teams to understand the asbestos risks connected with the planned works.</p>
            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/asbestos-survey-cost-leeds" className="w-full">Survey costs</Button>
              <Button yellow clipped={false} href="/quote" className="w-full">Request a quote</Button>
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
          <InnerTitle intro={<p>During refurbishment surveys in Leeds, surveyors may identify materials such as asbestos insulation board, textured coatings, old floor tiles, pipe insulation, soffits, ceiling panels, service duct panels and asbestos cement products.</p>}>
            Common Asbestos Materials Found Before Refurbishment
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
                <h3 className="text-[30px] font-semibold leading-tight tracking-[-0.04em]">Hidden until work starts</h3>
                <p className="mt-4 text-[14px] leading-7 text-white/76">Many asbestos-containing materials are concealed until refurbishment begins. That is why a management survey is not always enough where works involve cutting, drilling, removal, strip-out or access behind fixed finishes.</p>
                <p className="mt-4 text-[14px] leading-7 text-white/76">Older textured coatings may also contain asbestos. Read our guide to <InlineLink href="/do-artex-ceilings-contain-asbestos">artex ceilings and asbestos</InlineLink>.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle>Management Survey vs Refurbishment or Demolition Survey</InnerTitle>
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
            <p className="text-[15px] font-semibold">Not sure which asbestos survey you need? Provide a few property details and a qualified surveyor can advise.</p>
            <Button yellow href="/quote" className="shrink-0">Get a quote</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-2">
          <Fade>
            <InnerTitle light center={false}>Asbestos Refurbishment Survey Regulations and Standards</InnerTitle>
            <div className="dark-link space-y-5 text-[14px] leading-7 text-white/76">
              <p>Refurbishment surveys should be planned and carried out in line with recognised UK asbestos guidance and current regulations.</p>
              <p>The main legislation is the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>, which requires asbestos risks to be identified and managed before work that could disturb asbestos-containing materials.</p>
              <p>HSE guidance <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos: The Survey Guide</InlineLink> explains how refurbishment surveys should be targeted to the planned works and why intrusive inspection may be needed.</p>
              <p>Surveyors commonly hold recognised industry qualifications such as <InlineLink href="https://www.bohs.org/education/qualifications/detail/surveying-and-sampling-strategies-for-asbestos-in-buildings-p402/" external>BOHS P402</InlineLink>, and samples should be analysed by a UKAS-accredited laboratory where sampling is required.</p>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">Trust and reporting standards</h3>
              <div className="mt-6 grid gap-3">
                {[
  "HSE guidance-led survey approach",
  "BOHS P402 qualified surveyors",
  "UKAS-accredited laboratory analysis where sampling is required",
  "Reports to support safe refurbishment planning"
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
          <InnerTitle intro={<p>Refurbishment survey enquiries can be arranged across Leeds for domestic renovations, landlord upgrades, shop fit-outs, commercial refurbishments and intrusive maintenance projects.</p>}>
            Refurbishment Surveys Across Leeds
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
                  <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-white/82">Office fit-outs, retail refurbishments, hospitality upgrades and commercial strip-out enquiries across central Leeds.</p>
                </div>
              </a>
              <div className="flex flex-col justify-center border border-[#d5e0d4] bg-white p-7 shadow-sm md:p-8 clip-section-bl">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">Leeds coverage</p>
                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[38px]">Renovation, fit-out and intrusive works across Leeds</h3>
                <div className="mt-5 space-y-4 text-[14px] leading-7 text-slate-600">
                  <p>Refurbishment surveys are commonly arranged before works in older residential neighbourhoods, city centre commercial premises, retail spaces, schools, warehouses and managed buildings.</p><p>This includes landlord upgrades around Headingley and Hyde Park, commercial refurbishments in Leeds city centre and Holbeck, and domestic or commercial projects across Morley, Pudsey, Garforth, Horsforth, Rothwell, Otley and Wetherby.</p><p>Use the area cards below to explore local asbestos survey pages for key Leeds locations.</p>
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
            <InnerTitle center={false}>How Much Does an Asbestos Refurbishment Survey Cost in Leeds?</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600"><p>The cost of an asbestos refurbishment survey in Leeds depends on the size of the work area, the level of intrusive inspection required and how many samples need to be taken.</p>
              <p>A small targeted survey for a bathroom, kitchen or single work area will usually be simpler than a full commercial fit-out, school refurbishment or multi-room renovation project.</p>
              <p>For the most accurate price, request a quote with details of the property, the planned works and the areas that will be disturbed.</p></div>
            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2"><Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">View typical costs</Button><Button href="/quote" className="w-full">Request a quote</Button></div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl"><h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Cost factors</h3><div className="mt-6 grid gap-3">{[
  "Size of the work area",
  "Extent of intrusive access required",
  "Number of rooms or materials affected",
  "Sampling requirements",
  "Domestic or commercial setting",
  "Whether plans or marked drawings are needed",
  "Access arrangements",
  "How quickly the report is required"
].map((item) => (<div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>))}</div></div>
          </Fade>
        </div>
      </section>

      <QuoteForm />

      <section id="faqs" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute inset-0"><img src="/images/FAQs.png" alt="Frequently asked questions" className="h-full w-full object-cover object-right" /><div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/90 to-[#f6f2ee]/20" /></div>
        <div className="relative z-10 mx-auto max-w-[1120px]"><div className="max-w-[760px]"><InnerTitle center={false}>Frequently Asked Questions About Asbestos Refurbishment Surveys</InnerTitle><div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">{faqs.map(({ q, a }, i) => (<details key={q} open={i === 0} className="group border-b border-[#d8e2d6] last:border-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]"><span>{q}</span><span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">+</span></summary><div className="px-6 pb-6"><p className="max-w-[90%] text-[14px] leading-7 text-slate-600">{a}</p></div></details>))}</div><div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white shadow-[0_20px_50px_rgba(27,58,31,0.12)] clip-section-bl"><h3 className="text-[28px] font-semibold leading-tight">Need an Asbestos Refurbishment Survey in Leeds?</h3><p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">Most enquiries receive a fast response. Provide details of the property, location and planned works, and a qualified asbestos surveyor can advise on the most suitable next step.</p><div className="mt-7 grid max-w-[250px] gap-3"><Button ghost clipped={false} href="/asbestos-survey-cost-leeds">View Survey Costs</Button><Button yellow href="/quote">Get a Quote</Button></div></div></div></div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20"><div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center"><div><h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">Need an Asbestos Refurbishment Survey in Leeds?</h2><p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">Most enquiries receive a fast response. Provide details of the property, location and planned works, and a qualified asbestos surveyor can advise on the most suitable next step.</p></div><div className="flex w-full flex-col gap-3 md:w-auto"><Button ghost clipped={false} href="/asbestos-survey-cost-leeds" className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]">View survey costs</Button><Button yellow href="/quote" className="w-full md:w-[230px]">Get a quote</Button></div></div></section>

      <Footer />
    </main>
  );
}
