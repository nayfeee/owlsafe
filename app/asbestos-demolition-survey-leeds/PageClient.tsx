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
    "title": "Homeowners Demolishing Garages or Extensions",
    "text": "Homeowners may need a demolition survey before removing older garages, extensions, outbuildings, workshops or structures that could contain asbestos cement or hidden asbestos materials."
  },
  {
    "title": "Developers and Property Investors",
    "text": "Developers often require demolition surveys before redevelopment, structural strip-out, site clearance or conversion projects involving older buildings."
  },
  {
    "title": "Commercial Property Owners",
    "text": "Commercial owners may need surveys before demolishing or stripping out shops, offices, warehouses, workshops, hospitality premises or industrial units."
  },
  {
    "title": "Demolition Contractors",
    "text": "Contractors need reliable asbestos information before demolition begins so asbestos-containing materials can be identified and managed safely."
  },
  {
    "title": "Landlords and Managing Agents",
    "text": "Landlords and managing agents may need demolition surveys before removing communal structures, garages, external buildings or parts of managed premises."
  }
];
const reportItems = [
  "Property or structure details",
  "Demolition scope and survey limitations",
  "Areas inspected and areas not accessed",
  "Suspected or confirmed asbestos-containing materials",
  "Sample results where materials are tested",
  "Photographs and location references",
  "Recommendations before demolition works",
  "Information for demolition contractors",
  "Details to support removal planning where required"
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
    "q": "What is an asbestos demolition survey?",
    "a": "An asbestos demolition survey is a fully intrusive inspection carried out before full or partial demolition. It is designed to identify asbestos-containing materials throughout the structure before demolition begins."
  },
  {
    "q": "When is a demolition survey required?",
    "a": "A demolition survey is usually required before a building, garage, extension, outbuilding or defined structure is demolished, especially if it was built or refurbished before 2000."
  },
  {
    "q": "Is a demolition survey intrusive?",
    "a": "Yes. Demolition surveys are fully intrusive because hidden asbestos-containing materials must be located before the structure is demolished."
  },
  {
    "q": "Can I use a refurbishment survey before demolition?",
    "a": "Not usually. A refurbishment survey is targeted to planned works. A demolition survey is normally required where the full structure or defined area is being demolished."
  },
  {
    "q": "Do I need a demolition survey for an old garage?",
    "a": "If the garage is older or may contain asbestos cement roofing, wall panels, soffits or other asbestos-containing materials, a demolition survey may be needed before removal."
  },
  {
    "q": "Does a demolition survey involve sampling?",
    "a": "It may involve sampling suspected asbestos-containing materials. Samples should be analysed by a UKAS-accredited laboratory where confirmation is required."
  },
  {
    "q": "What happens if asbestos is found before demolition?",
    "a": "The survey report should identify asbestos-containing materials and recommend what needs to happen before demolition proceeds. Some materials may need removal or specialist handling."
  },
  {
    "q": "Can demolition start before the asbestos report is complete?",
    "a": "Demolition should not begin in areas where asbestos-containing materials may be present until suitable asbestos information is available and risks have been properly managed."
  }
];

export default function AsbestosDemolitionSurveyLeedsPage() {
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
        .dark-link a { color: rgba(255,255,255,0.92) !important; }
        .dark-link a:hover { color: #e3c541 !important; }
      `}</style>

      <Header />

      <Hero
        title="Asbestos Demolition Surveys in Leeds"
        intro="Arrange asbestos demolition surveys in Leeds before demolition, structural strip-out or major dismantling works begin. Identify asbestos-containing materials throughout a structure before demolition starts."
        mobileIntro="Arrange asbestos demolition surveys in Leeds before demolition or structural strip-out works begin. Fully intrusive inspection before work starts."
        desktopImage="/images/demolition-survey-hero.png"
        imageAlt="Asbestos demolition survey in Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-survey-cost-leeds"
        secondaryLabel="View survey costs"
        desktopObjectPosition="center 10%"
        mobileObjectPosition="88% center"
        trustPoints={[
  "Demolition surveys before strip-out or demolition",
  "Fully intrusive inspection before works begin",
  "Clear reports for demolition planning"
]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle center={false} eyebrow="Demolition surveys" intro={<p>A demolition survey is the most intrusive asbestos survey type and is used where a building, structure or defined area is due to be demolished.</p>}>
              What Is an Asbestos Demolition Survey?
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>An asbestos demolition survey is a fully intrusive inspection designed to identify asbestos-containing materials throughout a structure before demolition begins.</p>
              <p>The purpose is to locate asbestos-containing materials that must be managed, removed or otherwise dealt with safely before the building or structure is demolished.</p>
              <p>Demolition surveys are more intrusive than management surveys and refurbishment surveys because the building, structure or area is no longer being surveyed for normal occupation.</p>
              <p>In Leeds, demolition surveys are commonly arranged before garage demolition, extension removal, structural strip-out, commercial building demolition, industrial unit clearance and redevelopment projects.</p>
              <p>If only refurbishment or alteration work is planned, an <InlineLink href="/asbestos-refurbishment-survey-leeds">asbestos refurbishment survey</InlineLink> may be more suitable. For occupied buildings under normal use, see our <InlineLink href="/asbestos-management-survey-leeds">asbestos management survey</InlineLink> page.</p>
            </div>
            <div className="mt-8 grid max-w-[240px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">Arrange a survey</Button>
              <Button yellow clipped={false} href="/asbestos-surveys-leeds" className="w-full">Compare surveys</Button>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Demolition surveys help identify</h3>
              <div className="mt-6 grid gap-3">
                {[
  "Asbestos-containing materials throughout a structure",
  "Hidden materials before demolition starts",
  "Materials requiring removal or management before works",
  "Areas that need intrusive access",
  "Sampling requirements before demolition",
  "Information for demolition planning and contractor safety"
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
          <InnerTitle intro={<p>Demolition works create a high risk of disturbing asbestos-containing materials hidden within older buildings and structures.</p>}>
            Why Demolition Surveys Are Required
          </InnerTitle>
          <div className="grid gap-7 md:grid-cols-[0.58fr_0.42fr]">
            <Fade>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>Demolition can disturb materials across the full building fabric, including roofing, walls, floors, ceilings, ducts, risers, insulation systems, service areas and structural voids.</p>
              <p>A demolition survey helps identify asbestos-containing materials before demolition begins so they can be managed safely and the risk of uncontrolled asbestos disturbance is reduced.</p>
              <p>For non-domestic premises and demolition projects, the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink> require asbestos risks to be identified and controlled before work that may disturb asbestos-containing materials.</p>
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
          <InnerTitle eyebrow="Local property context" intro={<p>Leeds contains many older garages, commercial premises, industrial buildings and mixed-use structures where asbestos may be present before demolition or major strip-out.</p>}>
            Asbestos Demolition Surveys for Leeds Properties
          </InnerTitle>
          <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-stretch">
            <Fade>
              <div className="relative min-h-[410px] overflow-hidden bg-[#1b3a1f] clip-section-bl">
                <img src="/images/leeds.png" alt="Leeds buildings" className="absolute inset-0 h-full w-full object-cover object-right opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/90 via-[#1b3a1f]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">Leeds coverage</p>
                  <h3 className="mt-3 text-[32px] font-semibold leading-none tracking-[-0.04em] text-white">Garages, industrial units and structural strip-out</h3>
                </div>
              </div>
            </Fade>
            <Fade delay={0.06}>
              <div className="space-y-5 text-[14px] leading-7 text-slate-600">
                <p>Many garages across Pudsey, Morley, Rothwell, Garforth and surrounding suburbs still contain asbestos cement roofing sheets, wall panels, soffits or associated materials that need identifying before demolition.</p>
              <p>Industrial and commercial buildings across Holbeck, Leeds city centre, Hunslet, Morley and Garforth may contain asbestos within roofing systems, wall panels, service ducts, insulation products, plant rooms, floor materials and older fire-resistant boards.</p>
              <p>Older extensions, outbuildings, workshops, retail units and mixed-use premises across Leeds may also require demolition surveys before structural removal, redevelopment or full strip-out works.</p>
              <p>A demolition survey helps provide the information needed before demolition contractors disturb the structure.</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>Demolition surveys are commonly required by people and organisations planning full or partial demolition of older buildings or structures.</p>}>
            Who May Need an Asbestos Demolition Survey?
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
            <InnerTitle center={false}>What an Asbestos Demolition Survey Involves</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>During a demolition survey, the surveyor carries out an intrusive inspection of the structure or area due to be demolished.</p>
              <p>The survey may involve opening up parts of the building fabric, inspecting voids, accessing hidden areas and sampling suspected asbestos-containing materials.</p>
              <p>Because demolition surveys are fully intrusive, they are normally carried out when the affected area is vacant and safe for destructive inspection.</p>
              <p>If only part of a building is being altered rather than demolished, see our <InlineLink href="/asbestos-refurbishment-survey-leeds">asbestos refurbishment survey</InlineLink> page.</p>
              <div className="pt-3"><Button href="/quote">Check which survey you need</Button></div>
            </div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">The survey may include</h3>
              <div className="mt-6 grid gap-3">
                {[
  "Breaking into walls or boxed-in areas",
  "Inspecting structural voids",
  "Accessing ceiling and floor spaces",
  "Checking roofing and wall systems",
  "Inspecting service ducts and risers",
  "Sampling suspected materials",
  "Laboratory analysis where required",
  "Recommendations before demolition starts"
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
            <InnerTitle center={false}>What Your Demolition Survey Report Should Include</InnerTitle>
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
          <InnerTitle intro={<p>During demolition surveys in Leeds, surveyors may identify asbestos cement roofing sheets, wall panels, insulation board, textured coatings, pipe insulation, old floor tiles, service duct panels, fire-resistant boards and plant room materials.</p>}>
            Common Asbestos Materials Found Before Demolition
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
                <h3 className="text-[30px] font-semibold leading-tight tracking-[-0.04em]">Before the structure comes down</h3>
                <p className="mt-4 text-[14px] leading-7 text-white/76">Demolition creates a much wider disturbance risk than normal occupation or minor refurbishment. Materials that could remain safely managed in place may need removal or controlled handling before demolition proceeds.</p>
                <p className="mt-4 text-[14px] leading-7 text-white/76">Older garage roofs are a common issue across Leeds. If you are unsure whether a garage roof may contain asbestos, request a quote before demolition begins.</p>
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
            <InnerTitle light center={false}>Asbestos Demolition Survey Regulations and Standards</InnerTitle>
            <div className="dark-link space-y-5 text-[14px] leading-7 text-white/76">
              <p>Demolition surveys should be carried out in line with recognised UK asbestos guidance and current asbestos regulations.</p>
              <p>The main legislation is the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>, which requires asbestos risks to be identified before demolition or other work liable to disturb asbestos.</p>
              <p>HSE guidance <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos: The Survey Guide</InlineLink> explains how demolition surveys should be fully intrusive and designed to locate asbestos-containing materials throughout the structure.</p>
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
  "Reports to support demolition planning"
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
          <InnerTitle intro={<p>Demolition survey enquiries can be arranged across Leeds for garages, extensions, commercial premises, industrial buildings, redevelopment projects and structural strip-out works.</p>}>
            Demolition Surveys Across Leeds
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
                  <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-white/82">Commercial strip-out, redevelopment, office clearance and demolition survey enquiries across central Leeds.</p>
                </div>
              </a>
              <div className="flex flex-col justify-center border border-[#d5e0d4] bg-white p-7 shadow-sm md:p-8 clip-section-bl">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">Leeds coverage</p>
                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[38px]">Demolition, strip-out and site clearance across Leeds</h3>
                <div className="mt-5 space-y-4 text-[14px] leading-7 text-slate-600">
                  <p>Demolition surveys are commonly arranged before garage removal, outbuilding demolition, commercial strip-out, industrial clearance and redevelopment works across Leeds.</p><p>This includes garage demolition across Pudsey, Morley and Rothwell, commercial and industrial projects in Holbeck and Garforth, and structural works across Leeds city centre, Horsforth, Headingley, Otley and Wetherby.</p><p>Use the area cards below to explore local asbestos survey pages for key Leeds locations.</p>
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
            <InnerTitle center={false}>How Much Does an Asbestos Demolition Survey Cost in Leeds?</InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-slate-600"><p>The cost of an asbestos demolition survey in Leeds depends on the size, type and complexity of the structure being demolished.</p>
              <p>A small garage or outbuilding survey will usually be simpler than a full commercial building, industrial unit, school, warehouse or multi-storey structure.</p>
              <p>For the most accurate price, request a quote with details of the property, demolition scope, access arrangements and urgency.</p></div>
            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2"><Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">View typical costs</Button><Button href="/quote" className="w-full">Request a quote</Button></div>
          </Fade>
          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl"><h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Cost factors</h3><div className="mt-6 grid gap-3">{[
  "Size of the structure",
  "Full or partial demolition scope",
  "Building complexity",
  "Access requirements",
  "Number of samples required",
  "Domestic, commercial or industrial use",
  "Whether plans or marked drawings are needed",
  "How quickly the survey is required"
].map((item) => (<div key={item} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" /><span>{item}</span></div>))}</div></div>
          </Fade>
        </div>
      </section>

      <QuoteForm />

      <section id="faqs" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute inset-0"><img src="/images/FAQs.png" alt="Frequently asked questions" className="h-full w-full object-cover object-right" /><div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/90 to-[#f6f2ee]/20" /></div>
        <div className="relative z-10 mx-auto max-w-[1120px]"><div className="max-w-[760px]"><InnerTitle center={false}>Frequently Asked Questions About Asbestos Demolition Surveys</InnerTitle><div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">{faqs.map(({ q, a }, i) => (<details key={q} open={i === 0} className="group border-b border-[#d8e2d6] last:border-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]"><span>{q}</span><span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">+</span></summary><div className="px-6 pb-6"><p className="max-w-[90%] text-[14px] leading-7 text-slate-600">{a}</p></div></details>))}</div><div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-[#1b3a1f] p-7 text-white shadow-[0_20px_50px_rgba(27,58,31,0.12)] clip-section-bl"><h3 className="text-[28px] font-semibold leading-tight">Need an Asbestos Demolition Survey in Leeds?</h3><p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">Most enquiries receive a fast response. Provide details of the property, location and demolition works, and a qualified asbestos surveyor can advise on the most suitable next step.</p><div className="mt-7 grid max-w-[250px] gap-3"><Button ghost clipped={false} href="/asbestos-survey-cost-leeds">View Survey Costs</Button><Button yellow href="/quote">Get a Quote</Button></div></div></div></div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20"><div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center"><div><h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">Need an Asbestos Demolition Survey in Leeds?</h2><p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">Most enquiries receive a fast response. Provide details of the property, location and demolition works, and a qualified asbestos surveyor can advise on the most suitable next step.</p></div><div className="flex w-full flex-col gap-3 md:w-auto"><Button ghost clipped={false} href="/asbestos-survey-cost-leeds" className="w-full border-white text-white hover:bg-white hover:text-[#1b3a1f] md:w-[230px]">View survey costs</Button><Button yellow href="/quote" className="w-full md:w-[230px]">Get a quote</Button></div></div></section>

      <Footer />
    </main>
  );
}
