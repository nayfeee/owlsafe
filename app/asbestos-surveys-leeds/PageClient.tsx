"use client";


import React from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
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
    <div className={`mb-8 max-w-[820px] ${center ? "mx-auto text-center" : ""}`}>
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
          className={`mt-5 max-w-[760px] text-[14px] leading-7 ${center ? "mx-auto" : ""} ${
            light ? "text-white/78" : "text-slate-600"
          }`}
        >
          {intro}
        </div>
      )}
    </div>
  );
}


const surveyCards = [
  {
    title: "Asbestos Management Survey",
    href: "/asbestos-management-survey-leeds",
    text: "Designed for occupied buildings where asbestos-containing materials may need to be monitored during normal use, maintenance or day-to-day occupation. Commonly arranged for landlords, commercial property owners, schools, offices and managed residential buildings across Leeds.",
  },
  {
    title: "Asbestos Refurbishment Survey",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Required before intrusive work takes place, including renovations, structural alterations, rewiring projects, kitchen replacements or major maintenance. These inspections help identify hidden asbestos materials before refurbishment begins.",
  },
  {
    title: "Asbestos Demolition Survey",
    href: "/asbestos-demolition-survey-leeds",
    text: "Required before full or partial demolition works begin. These surveys involve intrusive inspection throughout the building to locate asbestos-containing materials that must be managed safely before demolition can proceed.",
  },
  {
    title: "Asbestos Reinspection Survey",
    href: "/asbestos-reinspection-survey-leeds",
    text: "Used where asbestos-containing materials have already been identified and require ongoing monitoring. Reinspection surveys help duty holders and property managers assess whether materials remain in safe condition over time.",
  },
];

const needItems = [
  {
    title: "Before Renovation or Refurbishment Work",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Refurbishment work can disturb hidden asbestos-containing materials behind walls, beneath flooring, inside ceiling voids or around pipework. A refurbishment survey helps identify these materials before work starts.",
    examples: ["Kitchen renovations", "Bathroom refurbishments", "Rewiring projects", "Ceiling replacements", "Structural alterations", "Garage conversions", "Loft conversions", "Heating system upgrades"],
  },
  {
    title: "Before Demolishing a Garage, Extension or Building",
    href: "/asbestos-demolition-survey-leeds",
    text: "Many garages across Leeds still contain asbestos cement roofing sheets, soffits or wall panels. Before demolition or strip-out work begins, a demolition survey helps identify asbestos-containing materials throughout the structure.",
    examples: ["Garage demolition", "Extension removal", "Structural strip-out", "Outbuilding removal"],
  },
  {
    title: "Before Buying a Property",
    href: "/asbestos-surveys-leeds",
    text: "Property buyers increasingly arrange asbestos surveys before purchasing older homes, commercial premises or mixed-use buildings. This can help buyers better understand potential risks and remediation costs before committing to purchase.",
    examples: ["Older houses", "Converted flats", "Mixed-use buildings", "Commercial premises"],
  },
  {
    title: "For Commercial Property Compliance",
    href: "/asbestos-management-survey-leeds",
    text: "Duty holders for non-domestic premises have responsibilities to identify and manage asbestos risks under the Control of Asbestos Regulations 2012. Management surveys are commonly arranged for commercial and managed premises.",
    examples: ["Offices", "Schools", "Retail premises", "Churches", "Warehouses", "Apartment communal areas"],
  },
];

const processSteps = [
  ["01", "Request a Quote", "Provide details about the property, its location and the reason for the survey. This may include renovation work, demolition, commercial property management or a planned property purchase."],
  ["02", "Survey Arranged", "A qualified asbestos surveyor covering Leeds will arrange a suitable time to inspect the property. The survey type will depend on the building and the work being planned."],
  ["03", "Inspection & Sampling", "The surveyor will inspect relevant areas of the building and identify suspected asbestos-containing materials. Where required, small samples may be safely taken for laboratory analysis."],
  ["04", "Receive Your Report", "You receive a detailed asbestos survey report outlining material locations, condition, risk assessment information and recommended next steps."],
];

const faqs = [
  ["What is an asbestos survey?", "An asbestos survey is an inspection carried out to identify materials within a building that may contain asbestos. The survey helps determine where asbestos-containing materials are located, their condition and whether further action may be required."],
  ["When is an asbestos survey required?", "Asbestos surveys are commonly required before refurbishment, demolition, property purchases or commercial maintenance work where asbestos-containing materials could potentially be disturbed."],
  ["Do all older properties contain asbestos?", "Not necessarily. However, properties built or refurbished before 2000 are more likely to contain asbestos-containing materials due to the widespread historical use of asbestos within construction products."],
  ["Can asbestos be hidden behind walls or ceilings?", "Yes. Asbestos-containing materials are often concealed within ceiling voids, partition walls, floor layers, service ducts and boxed-in pipework."],
  ["Do artex ceilings contain asbestos?", "Some textured coatings, including older artex ceilings, may contain small amounts of asbestos depending on when they were installed."],
  ["Are asbestos garage roofs dangerous?", "Many older garage roofs across Leeds were constructed using asbestos cement sheeting. The level of risk depends on condition, disturbance and whether work is planned."],
  ["How long does an asbestos survey take?", "Survey duration depends on the size of the property, accessibility and the survey type required. Smaller residential surveys may be completed faster than larger commercial or intrusive surveys."],
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

export default function AsbestosSurveysLeedsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <style>{`
        html, body, main { overflow-x: hidden; }
        .clip-corner { clip-path: polygon(0 0, 100% 0, 100% 100%, 13px 100%, 0 calc(100% - 13px)); }
        .clip-section-bl { clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px)); }
        h1, h2, h3 { font-weight: 600 !important; }
      `}</style>

      <Header />

      <Hero
        title="Asbestos Surveys in Leeds"
        intro="Arrange asbestos surveys in Leeds for homes, landlords and commercial properties. Work with qualified surveyors and receive clear, compliance-focused reports for refurbishment, demolition, property purchases and ongoing asbestos management."
        mobileIntro="Arrange asbestos surveys in Leeds for homes, landlords and commercial properties. Clear, compliance-focused reports for refurbishment, demolition, purchases and management."
        desktopImage="/images/asbestos-surveys-hero.png"
        imageAlt="Asbestos surveys in Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="#survey-types"
        secondaryLabel="Learn more"
        desktopObjectPosition="center"
        mobileObjectPosition="75% center"
        trustPoints={[
          "Surveys for homes, landlords and commercial premises",
          "Clear, compliance-focused survey reports",
          "Coverage across Leeds and surrounding areas",
        ]}
        trustStrip={[
          "Residential",
          "Commercial",
          "Refurbishment",
          "Demolition",
          "Property Purchases",
          "Managed Buildings",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="Property types in Leeds"
              intro={<p>Leeds contains a broad mix of property types, building ages and construction styles — all of which can influence whether asbestos-containing materials may be present within a building.</p>}
            >
              Asbestos Surveys for Residential & Commercial Properties in Leeds
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                Across areas such as Headingley, Burley, Hyde Park and Armley, many properties consist of older terraced housing, converted flats and rental accommodation where refurbishment works have taken place over several decades. Textured coatings, insulation boards, boxing around pipework, old floor tiles and garage roofing materials are all commonly encountered during asbestos surveys in these types of buildings.
              </p>
              <p>
                In areas such as Horsforth, Roundhay, Wetherby and Otley, larger detached homes, extended family properties and refurbished period housing may include asbestos-containing materials introduced during later alterations or extensions carried out between the 1950s and late 1990s.
              </p>
              <p>
                Leeds also includes a significant number of commercial and industrial premises. Older warehouses, office units, schools, retail premises, workshops and mixed-use buildings across areas such as Holbeck, Morley, Garforth and Pudsey may still contain asbestos within ceiling voids, partition walls, plant rooms, roofing sheets, service risers and insulation systems.
              </p>
              <p>
                A professional asbestos survey helps identify whether asbestos-containing materials may be present and what action may be required before work begins.
              </p>
            </div>

            <div className="mt-8 grid max-w-[220px] gap-3 sm:max-w-none sm:grid-cols-2">
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
              <h3 className="text-[26px] font-semibold leading-tight text-[#1b3a1f]">Common reasons for asbestos surveys</h3>
              <div className="mt-6 grid gap-3">
                {[
                  "Kitchen or bathroom renovations",
                  "Rewiring work",
                  "Structural alterations",
                  "Garage demolition",
                  "Property purchases",
                  "Commercial refurbishments",
                  "Office fit-outs",
                  "School maintenance works",
                  "Planned demolition",
                  "Ongoing asbestos management",
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

      <section id="survey-types" className="bg-[#f6f7f3] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            eyebrow="Survey types"
            intro={<p>Different asbestos surveys are designed for different situations. The correct survey depends on how the building is being used, whether work is planned and how intrusive that work will be.</p>}
          >
            Types of Asbestos Survey Available
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {surveyCards.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group relative flex h-full min-h-[245px] flex-col overflow-hidden border border-[#d8e2d6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)]">
                  <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#1b3a1f]/0 transition group-hover:bg-[#1b3a1f]" />
                  <a href={card.href} className="relative z-10 max-w-[380px] text-[22px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                    {card.title}
                  </a>
                  <p className="relative z-10 mt-4 text-[13px] leading-[1.75] text-slate-600">{card.text}</p>
                  <a href={card.href} className="relative z-10 mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
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
            intro={<p>Asbestos surveys are often required before building materials are disturbed. In Leeds, surveys are commonly arranged for both domestic and commercial projects involving older properties or buildings refurbished before 2000.</p>}
          >
            When You May Need an Asbestos Survey
          </InnerTitle>

          <div className="grid gap-7">
            {needItems.map((item, i) => (
              <Fade key={item.title} delay={i * 0.04}>
                <article className="grid gap-7 border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm md:grid-cols-[0.48fr_0.52fr] clip-section-bl">
                  <div>
                    <a href={item.href} className="text-[26px] font-semibold leading-tight tracking-[-0.03em] text-[#1b3a1f] transition hover:text-[#305e2f]">
                      {item.title}
                    </a>
                    <p className="mt-4 text-[14px] leading-7 text-slate-600">{item.text}</p>
                    <a href={item.href} className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f]">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {item.examples.map((example) => (
                      <div key={example} className="flex items-start gap-3 border border-[#d8e2d6] bg-white px-4 py-3 text-[13px] leading-6 text-slate-700">
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
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={<p>We help arrange asbestos survey enquiries across Leeds and surrounding areas, covering residential properties, commercial premises, refurbishment projects and managed buildings.</p>}
          >
            Asbestos Surveys Across Leeds
          </InnerTitle>

          <Fade>
            <article className="mb-8 grid gap-5 md:grid-cols-[0.42fr_0.58fr]">
              <a href="/asbestos-survey-leeds-centre" className="group relative min-h-[360px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)] clip-section-bl">
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
                    Commercial, retail, office and managed property survey enquiries across central Leeds.
                  </p>
                </div>
              </a>

              <div className="flex flex-col justify-center border border-[#d5e0d4] bg-white p-7 shadow-sm md:p-8 clip-section-bl">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
                  Leeds coverage
                </p>
                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[38px]">
                  Survey enquiries across the city and wider Leeds area
                </h3>
                <div className="mt-5 space-y-4 text-[14px] leading-7 text-slate-600">
                  <p>
                    Survey enquiries are commonly arranged across older residential neighbourhoods, suburban developments, commercial districts and industrial areas throughout Leeds.
                  </p>
                  <p>
                    This includes city centre offices and managed buildings, student rental properties around Headingley and Hyde Park, larger suburban homes in Horsforth and Roundhay, and mixed residential, commercial and industrial premises across Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby.
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
                <a href={area.href} className="group relative block min-h-[210px] overflow-hidden border border-[#d5e0d4] bg-[#1b3a1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.12)] clip-section-bl">
                  <img src={`/images/${mapNames[area.label]}.png`} alt={`${area.label} map`} className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-[#1b3a1f]/18" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/55 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">{areaMeta[area.label]}</p>
                    <h3 className="mt-2 text-[25px] font-semibold leading-none tracking-[-0.04em] text-white">{area.label}</h3>
                    <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/82">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </a>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle intro={<p>The asbestos survey process is designed to help property owners, landlords, developers and contractors understand whether asbestos-containing materials are present and what action may be required before work begins.</p>}>
            How Asbestos Surveys Work
          </InnerTitle>

          <div className="mt-12">
            <div className="grid gap-5 md:grid-cols-4">
              {processSteps.map(([num, title, text], i) => (
                <Fade key={title} delay={i * 0.04}>
                  <article className="group relative z-10 flex h-full flex-col border-2 border-[#305e2f]/40 bg-gradient-to-br from-white via-[#f7faf5] to-[#e8f0e5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b3a1f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)]">
                    <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#1b3a1f] bg-white text-[20px] font-black text-[#1b3a1f] shadow-[0_0_0_8px_rgba(27,58,31,0.05)]">
                      {num}
                    </div>
                    <h3 className="mt-5 text-[22px] font-semibold leading-tight text-[#1b3a1f]">{title}</h3>
                    <p className="mt-3 text-[13px] leading-7 text-slate-600">{text}</p>
                  </article>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-2">
          <Fade>
            <InnerTitle light center={false}>
              Asbestos Regulations & Survey Standards
            </InnerTitle>
            <div className="space-y-5 text-[14px] leading-7 text-white/76">
              <p>Asbestos surveys should be carried out in accordance with recognised UK asbestos guidance and current legislation.</p>
              <p>The main legislation covering asbestos management in the UK is the Control of Asbestos Regulations 2012. Survey work is commonly carried out in line with HSE guidance including HSG264 — Asbestos: The Survey Guide.</p>
              <p>Many professional asbestos surveyors also hold recognised industry qualifications such as BOHS P402 Surveying and Sampling Strategies for Asbestos in Buildings.</p>
              <p>Where material sampling is undertaken, samples should be analysed by a UKAS-accredited laboratory to confirm whether asbestos fibres are present.</p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />
              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">Typical Asbestos Survey Costs in Leeds</h3>
              <p className="mt-4 text-[14px] leading-7 text-white/72">
                The cost of an asbestos survey in Leeds depends on property size, building type, survey type, accessibility, sampling requirements and whether the property is residential or commercial.
              </p>
              <div className="mt-6 grid gap-3">
                {["Property size", "Survey type required", "Accessibility", "Sampling requirements", "Residential or commercial use"].map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-3 text-[13px] leading-6 text-white/82">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#e3c541]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Button yellow href="/asbestos-survey-cost-leeds">
                  View typical survey costs
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
      <InnerTitle center={false}>Frequently Asked Questions</InnerTitle>

      <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">
{[
  {
    q: "What is an asbestos survey?",
    a: (
      <>
        An asbestos survey is an inspection carried out to identify materials within a building that may contain asbestos. The survey helps determine where asbestos-containing materials are located, their condition and whether further action may be required.
      </>
    ),
  },
  {
    q: "When is an asbestos survey required?",
    a: (
      <>
        Asbestos surveys are commonly required before refurbishment, demolition, property purchases or commercial maintenance work where asbestos-containing materials could potentially be disturbed.
      </>
    ),
  },
  {
    q: "Do all older properties contain asbestos?",
    a: (
      <>
        Not necessarily. However, properties built or refurbished before 2000 are more likely to contain asbestos-containing materials due to the widespread historical use of asbestos within construction products.
      </>
    ),
  },
  {
    q: "Can asbestos be hidden behind walls or ceilings?",
    a: (
      <>
        Yes. Asbestos-containing materials are often concealed within ceiling voids, partition walls, floor layers, service ducts and boxed-in pipework.
      </>
    ),
  },
  {
    q: "Do artex ceilings contain asbestos?",
    a: (
      <>
        Some textured coatings, including older artex ceilings, may contain small amounts of asbestos depending on when they were installed.{" "}
        <a
          href="/do-artex-ceilings-contain-asbestos"
          className="font-semibold text-[#305e2f] underline underline-offset-4 transition hover:text-[#1b3a1f]"
        >
          Read our guide to artex ceilings and asbestos
        </a>
        .
      </>
    ),
  },
  {
    q: "Are asbestos garage roofs dangerous?",
    a: (
      <>
        Many older garage roofs across Leeds were constructed using asbestos cement sheeting.
      </>
    ),
  },
  {
    q: "How long does an asbestos survey take?",
    a: (
      <>
        Survey duration depends on the size of the property, accessibility and the survey type required.
      </>
    ),
  },
].map(({ q, a }, i) => (
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
          Need an Asbestos Survey in Leeds?
        </h3>

        <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">
          Arrange asbestos survey enquiries for homes, landlords, commercial
          premises and refurbishment projects across Leeds and surrounding
          areas.
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
            <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">Need an Asbestos Survey in Leeds?</h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              Arrange asbestos survey enquiries for homes, landlords, commercial premises and refurbishment projects across Leeds and surrounding areas.
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
