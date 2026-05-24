"use client";


import React from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { ASSETS } from "./data/site";
import QuoteForm from "../components/QuoteForm";
import Fade from "../components/Fade";
import Button from "../components/Button";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const locations = [
  ["Headingley", "Asbestos surveys arranged across Headingley and nearby areas including Hyde Park, Burley, Kirkstall and Woodhouse. Survey enquiries commonly include older terraced housing, student accommodation, rental properties, converted buildings and commercial premises undergoing refurbishment or maintenance work."],
  ["Horsforth", "Survey enquiries handled across Horsforth, Cookridge, Rawdon and surrounding areas for homeowners, landlords, property buyers and commercial property owners. Many properties in these areas include older semis, extended family homes and buildings refurbished during periods when asbestos-containing materials were widely used."],
  ["Roundhay", "Arrange asbestos surveys across Roundhay, Oakwood, Gledhow and nearby North Leeds areas. Survey enquiries are commonly arranged for larger residential properties, period homes, refurbishment projects, property purchases and managed residential buildings."],
  ["Pudsey", "Asbestos surveys available across Pudsey, Farsley, Calverley, Stanningley and nearby areas for residential properties, commercial premises, landlords and renovation projects."],
  ["Morley", "Survey enquiries handled across Morley, Churwell, Tingley and surrounding areas for residential properties, landlords, workshops, warehouses and commercial buildings."],
  ["Garforth", "Arrange asbestos surveys across Garforth, Kippax, Swillington and nearby East Leeds areas. Survey enquiries can be arranged for homes, refurbishment projects, commercial premises and managed properties."],
  ["Rothwell", "Survey enquiries handled across Rothwell, Oulton, Woodlesford and nearby areas for property purchases, renovation work, landlord responsibilities and commercial property management."],
  ["Otley", "Asbestos surveys arranged across Otley, Pool-in-Wharfedale, Bramhope and surrounding areas for residential properties, commercial buildings, refurbishment projects and managed premises."],
  ["Wetherby", "Survey enquiries handled across Wetherby, Boston Spa, Collingham and nearby areas for residential, commercial and refurbishment projects."],
];

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

function Title({ children, intro, small = false, light = false }: { children: React.ReactNode; intro?: string; small?: boolean; light?: boolean }) {
  return (
    <div className={`mb-7 ${small ? "max-w-[760px]" : "mx-auto max-w-[820px] text-center"}`}>
      <h2
        className={`font-semibold leading-[1.06] tracking-[-0.035em] ${
          light ? "text-white" : "text-[#1b3a1f]"
        } ${
          small ? "text-[30px] md:text-[40px]" : "text-[31px] md:text-[44px]"
        }`}
      >
        {children}
      </h2>

      {intro && (
        <p className={`mt-4 text-[14px] leading-7 ${light ? "text-white/78" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

const surveyCards = [
  {
    title: "Asbestos Management Survey",
    href: "/asbestos-management-survey-leeds",
    text: "Management surveys are the most common type of asbestos inspection for occupied buildings. They identify asbestos-containing materials that could be disturbed during normal use or routine maintenance. These surveys are often arranged for landlords, commercial property owners, managing agents and property purchases where asbestos risks need to be understood.",
  },
  {
    title: "Asbestos Refurbishment Survey",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "Refurbishment surveys are required before renovation work, structural alterations or intrusive maintenance start. These inspections are more detailed because materials behind walls, ceilings or floors may need to be accessed to locate hidden asbestos that could be disturbed. They help ensure works can be planned safely before refurbishment begins.",
  },
  {
    title: "Asbestos Demolition Survey",
    href: "/asbestos-demolition-survey-leeds",
    text: "Demolition surveys are required before a building is demolished or stripped out. They involve a full inspection of the structure to identify asbestos-containing materials that must be dealt with before demolition work can start. These surveys are typically arranged for vacant properties, redevelopment projects and major strip-outs.",
  },
  {
    title: "Asbestos Reinspection Survey",
    href: "/asbestos-reinspection-survey-leeds",
    text: "Reinspection surveys are used to monitor the condition of known asbestos-containing materials over time. These inspections are commonly arranged for commercial buildings, managed premises and non-domestic properties where asbestos has previously been identified and requires ongoing review.",
  },
];

function SurveyTypes() {
  return (
    <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <Title
            small
            intro="Different types of asbestos survey may be required depending on the property, the work being planned and the age of the building. We help arrange survey enquiries for residential and commercial properties across Leeds, including management surveys, refurbishment surveys, demolition surveys and reinspection surveys."
          >
            Types of Asbestos Survey Available
          </Title>

          <Button href="#faqs" className="self-center md:mt-12">FAQs</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {surveyCards.map(({ title, href, text }, i) => (
            <Fade key={title} delay={i * 0.04}>
              <article className="group relative flex h-full min-h-[255px] flex-col overflow-hidden border border-[#d8e2d6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)]">
                <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#1b3a1f]/0 transition group-hover:bg-[#1b3a1f]" />

                <a href={href} className="relative z-10 max-w-[380px] text-[21px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                  {title}
                </a>

                <p className="relative z-10 mt-4 text-[13px] leading-[1.75] text-slate-600">
                  {text}
                </p>

                <a href={href} className="relative z-10 mt-auto inline-flex items-center gap-2 pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">
                  Learn More <ArrowRight className="h-3 w-3" />
                </a>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#dfe9dd]/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeedsText() {
  return (
    <section className="bg-white px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1120px] items-stretch gap-14 md:grid-cols-[0.48fr_0.52fr]">
        <Fade className="h-full">
          <div className="relative h-full min-h-[760px] overflow-hidden clip-section-bl">
            <img
              src={ASSETS.leeds}
              alt="Leeds skyline"
              className="h-full w-full object-cover object-right"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/12 via-transparent to-transparent" />
          </div>
        </Fade>

        <Fade delay={0.05}>
          <Title small>
            Asbestos Surveys for Properties in Leeds
          </Title>

          <div className="max-w-[96%] space-y-5 text-[14px] leading-7 text-slate-600">
            <p>
              Leeds has a wide range of residential, commercial and industrial properties, from traditional terraced housing and Victorian villas to post-war estates, converted flats, office buildings and large industrial units. Many of these buildings were constructed or refurbished during periods when asbestos-containing materials were commonly used in construction.
            </p>

            <p>
              Because of this, <InlineLink href="/asbestos-surveys-leeds">asbestos surveys in Leeds</InlineLink> are frequently required before renovation work, property purchases, refurbishment projects or demolition.
            </p>

            <p>
              In areas such as <InlineLink href="/asbestos-survey-headingley">Headingley</InlineLink>, Hyde Park, Burley, Armley and Beeston, much of the housing stock consists of older terraced properties and converted buildings. These properties often include materials such as insulation boards, ceiling coatings, floor tiles, pipe lagging and roofing products that may contain asbestos, particularly where refurbishments were carried out between the 1950s and late 1990s.
            </p>

            <p>
              Leeds also includes larger suburban properties and developments in areas such as <InlineLink href="/asbestos-survey-horsforth">Horsforth</InlineLink>, Chapel Allerton, <InlineLink href="/asbestos-survey-roundhay">Roundhay</InlineLink> and Moortown. While some of these properties pre-date the widespread use of asbestos, later extensions, refurbishments and internal alterations may have introduced asbestos-containing materials into ceilings, partition walls and service areas.
            </p>

            <p>
              Across areas such as <InlineLink href="/asbestos-survey-pudsey">Pudsey</InlineLink>, <InlineLink href="/asbestos-survey-morley">Morley</InlineLink>, <InlineLink href="/asbestos-survey-garforth">Garforth</InlineLink> and <InlineLink href="/asbestos-survey-rothwell">Rothwell</InlineLink>, a mix of residential housing, commercial premises and light industrial buildings means asbestos surveys are often required for both domestic and commercial projects. Industrial units, warehouses and older commercial buildings may still contain asbestos materials within roofing systems, wall panels, insulation products and service ducts.
            </p>

            <p>
              A professional asbestos survey helps identify whether asbestos-containing materials are present within a property and what action may be required before any work takes place. This helps ensure building work can be planned safely and in line with current regulations.
            </p>

            <p>
              At OwlSafe, we help arrange asbestos surveys across Leeds and surrounding areas, including Headingley, Horsforth, Chapel Allerton, Cross Gates, Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby. Surveys can be arranged for homeowners, landlords, property developers, housing associations and commercial property managers.
            </p>

            <p>
              For information about typical pricing, see our <InlineLink href="/asbestos-survey-cost-leeds">asbestos survey cost guide</InlineLink>.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/quote">Get a quote</Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function WhyChoose() {
  const cards = [
    ["Coverage Across Leeds", "Survey enquiries handled across Leeds and surrounding areas, including Headingley, Horsforth, Chapel Allerton, Cross Gates, Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby."],
    ["Fast Quotes & Quick Response", "Request a quote in minutes. OwlSafe helps connect property owners with qualified asbestos surveyors covering Leeds and surrounding areas."],
    ["Surveys for All Property Types", "Arrange asbestos surveys for houses, flats, rental properties, offices, retail units, warehouses and mixed-use buildings."],
    ["Support Before Purchase or Renovation", "Identify asbestos risks before buying a property, planning refurbishment work or arranging demolition – helping you avoid delays and unexpected costs."],
    ["Qualified & Experienced Surveyors", "Work with trained asbestos professionals experienced in surveying both residential and commercial properties."],
    ["Clear, Straightforward Process", "Get clear guidance on survey types, what the inspection involves and what your report will include – no confusion, no guesswork."],
  ];

  return (
    <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <Title intro="Work with qualified asbestos professionals, fast response times and clear, compliant reporting – all tailored to properties across Leeds and surrounding areas.">
          Why Choose OwlSafe for Asbestos Surveys in Leeds
        </Title>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {cards.map(([h, t], i) => (
            <Fade key={h} delay={i * 0.035} className="h-full">
              <div className="group relative flex h-full min-h-[205px] flex-col justify-center overflow-hidden border border-[#cbdcca] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                <div className="absolute inset-x-0 top-0 h-[4px] bg-[#1b3a1f]/0 transition group-hover:bg-[#1b3a1f]" />

                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-[#d8e2d6] bg-[#f6f7f3] text-[#1b3a1f] transition group-hover:border-[#305e2f] group-hover:bg-[#eef4eb]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="text-[16px] font-semibold leading-tight text-[#1b3a1f]">
                  {h}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-slate-600">
                  {t}
                </p>
              </div>
            </Fade>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-[#1b3a1f] p-6 text-center text-white md:flex-row md:text-left clip-section-bl">
          <p className="text-[15px] font-semibold">
            Need an asbestos survey in Leeds? Get a quick quote from qualified surveyors covering your area.
          </p>

          <Button yellow href="/quote" className="shrink-0">
            Get a quote
          </Button>
        </div>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section className="bg-white px-5 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1fr_0.58fr] md:items-stretch">
        <Fade>
          <Title small>Asbestos Regulations & Survey Standards</Title>

          <div className="space-y-4 text-[14px] leading-7 text-slate-600">
            <p>
              Asbestos surveys should be carried out in line with recognised UK guidance and current asbestos regulations. The main regulations covering asbestos management in the UK are the <InlineLink href="https://www.legislation.gov.uk/uksi/2012/632/contents" external>Control of Asbestos Regulations 2012</InlineLink>.
            </p>

            <p>
              These regulations place legal responsibilities on duty holders for non-domestic premises to identify, assess and manage asbestos-containing materials within buildings. This is particularly important for commercial properties, shared areas of residential buildings, managed premises, workplaces and buildings undergoing refurbishment or demolition.
            </p>

            <p>
              Asbestos surveys are typically carried out in accordance with HSE guidance, including <InlineLink href="https://www.hse.gov.uk/pubns/books/hsg264.htm" external>HSG264: Asbestos – The Survey Guide</InlineLink>. This guidance explains how surveys should be planned, carried out, recorded and used by building owners, landlords, duty holders and contractors.
            </p>

            <p>
              Competence also matters. Many asbestos surveyors hold recognised industry qualifications such as <InlineLink href="https://www.bohs.org/education/qualifications/detail/surveying-and-sampling-strategies-for-asbestos-in-buildings-p402/" external>BOHS P402 Surveying and Sampling Strategies for Asbestos in Buildings</InlineLink>, which is designed for asbestos surveyors, re-inspectors and others who need a detailed understanding of asbestos surveying principles.
            </p>

            <p>
              Where material sampling is required, samples should be analysed by a UKAS-accredited laboratory to confirm whether asbestos fibres are present.
            </p>

            <p>
              A properly completed asbestos survey helps property owners, landlords, developers and contractors understand whether asbestos-containing materials are present, where they are located, what condition they are in and what action may be required before work begins.
            </p>
          </div>
        </Fade>

        <Fade delay={0.05} className="h-full">
          <div className="relative h-full min-h-[360px] overflow-hidden bg-[#dfe8df] text-[#1b3a1f] clip-section-bl">
            <img
              src={ASSETS.trustedExperts}
              alt="Trusted local experts"
              className="h-full w-full object-cover object-[15%_center]"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [
      "01",
      "Request a Quote",
      "Tell us about the property, location and reason for the survey. This could include a house purchase, planned renovation, commercial property management, refurbishment work or demolition.",
      "/quote",
    ],
    [
      "02",
      "Survey Arranged",
      "A qualified asbestos surveyor covering Leeds will arrange a suitable time to inspect the property. The survey type will depend on whether the building is occupied, being refurbished, demolished or managed long-term.",
      "/asbestos-surveys-leeds",
    ],
    [
      "03",
      "Property Inspection",
      "The surveyor will inspect relevant areas of the property and identify materials that may contain asbestos. Where required, small samples may be taken safely for laboratory analysis.",
      "/asbestos-surveys-leeds",
    ],
    [
      "04",
      "Receive Your Report",
      "You will receive a clear asbestos survey report outlining any identified asbestos-containing materials, their location, condition and recommended next steps.",
      "/asbestos-surveys-leeds",
    ],
  ];

  return (
    <section className="overflow-hidden bg-[#f6f7f3] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <Title intro="OwlSafe helps make arranging an asbestos survey straightforward. From initial quote requests through to survey reports, the process is designed to help homeowners, landlords and commercial property owners understand what type of survey may be required and what happens next.">
          How Asbestos Surveys Work
        </Title>

        <div className="relative mt-14">
          <div className="absolute left-[34px] top-0 hidden h-full md:block">
            <div className="relative h-full w-[3px] bg-gradient-to-b from-[#1b3a1f] via-[#305e2f] to-[#dbe5d9]">
              <div className="absolute left-1/2 top-[22%] -translate-x-1/2 text-[22px] text-[#e3c541]">↓</div>
              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 text-[22px] text-[#e3c541]">↓</div>
              <div className="absolute left-1/2 top-[74%] -translate-x-1/2 text-[22px] text-[#e3c541]">↓</div>
            </div>
          </div>

          <div className="grid gap-7">
            {steps.map(([step, title, text, href], i) => (
              <Fade key={title} delay={i * 0.06}>
                <div className="group relative overflow-hidden border-2 border-[#305e2f]/55 bg-gradient-to-br from-white via-[#f7faf5] to-[#e8f0e5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b3a1f] hover:shadow-[0_18px_50px_rgba(27,58,31,0.10)] md:grid md:grid-cols-[84px_1fr] md:gap-7">
                  <div className="absolute bottom-0 left-0 top-0 w-[6px] bg-[#1b3a1f]" />

                  <div className="relative z-10">
                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#1b3a1f] bg-white text-[22px] font-black text-[#1b3a1f] shadow-[0_0_0_8px_rgba(27,58,31,0.05)]">
                      {step}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <a href={href} className="text-[24px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                      {title}
                    </a>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">
                      {text}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#305e2f]/0 via-[#305e2f]/0 to-[#305e2f]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const areaCards = [
    [
      "LS6 / NORTH WEST LEEDS",
      "Headingley",
      "Asbestos surveys arranged across Headingley and nearby areas including Hyde Park, Burley, Kirkstall and Woodhouse. Survey enquiries commonly include older terraced housing, student accommodation, rental properties, converted buildings and commercial premises undergoing refurbishment or maintenance work.",
      "/asbestos-survey-headingley",
    ],
    [
      "LS18 / NORTH WEST LEEDS",
      "Horsforth",
      "Survey enquiries handled across Horsforth, Cookridge, Rawdon and surrounding areas for homeowners, landlords, property buyers and commercial property owners. Many properties in these areas include older semis, extended family homes and buildings refurbished during periods when asbestos-containing materials were widely used.",
      "/asbestos-survey-horsforth",
    ],
    [
      "LS8 / NORTH EAST LEEDS",
      "Roundhay",
      "Arrange asbestos surveys across Roundhay, Oakwood, Gledhow and nearby North Leeds areas. Survey enquiries are commonly arranged for larger residential properties, period homes, refurbishment projects, property purchases and managed residential buildings.",
      "/asbestos-survey-roundhay",
    ],
    [
      "LS28 / WEST LEEDS",
      "Pudsey",
      "Asbestos surveys available across Pudsey, Farsley, Calverley, Stanningley and nearby areas for residential properties, commercial premises, landlords and renovation projects. Surveys are frequently required for older housing stock, mixed-use buildings and industrial premises.",
      "/asbestos-survey-pudsey",
    ],
    [
      "LS27 / SOUTH LEEDS",
      "Morley",
      "Survey enquiries handled across Morley, Churwell, Tingley and surrounding areas for residential properties, landlords, workshops, warehouses and commercial buildings. Many properties in these areas include post-war housing and older commercial buildings where asbestos materials may still be present.",
      "/asbestos-survey-morley",
    ],
    [
      "LS25 / EAST LEEDS",
      "Garforth",
      "Arrange asbestos surveys across Garforth, Kippax, Swillington and nearby East Leeds areas. Survey enquiries can be arranged for homes, refurbishment projects, commercial premises and managed properties.",
      "/asbestos-survey-garforth",
    ],
    [
      "LS26 / SOUTH EAST LEEDS",
      "Rothwell",
      "Survey enquiries handled across Rothwell, Oulton, Woodlesford and nearby areas for property purchases, renovation work, landlord responsibilities and commercial property management. Surveys are commonly arranged for older residential developments and mixed-use properties.",
      "/asbestos-survey-rothwell",
    ],
    [
      "LS21 / NORTH WEST LEEDS",
      "Otley",
      "Asbestos surveys arranged across Otley, Pool-in-Wharfedale, Bramhope and surrounding areas for residential properties, commercial buildings, refurbishment projects and managed premises. Many older buildings in these areas may still contain asbestos materials introduced during later refurbishment works.",
      "/asbestos-survey-otley",
    ],
    [
      "LS22 / NORTH EAST LEEDS",
      "Wetherby",
      "Survey enquiries handled across Wetherby, Boston Spa, Collingham and nearby areas for residential, commercial and refurbishment projects. Surveys can be arranged for homeowners, landlords, developers and commercial property owners across the wider North Leeds area.",
      "/asbestos-survey-wetherby",
    ],
  ];

  const mapNames: Record<string, string> = {
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

  return (
    <section className="bg-white px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <Title intro="We help arrange asbestos survey enquiries across Leeds and surrounding areas, covering homes, landlords, commercial premises, refurbishment projects and property purchases. Survey enquiries can be arranged across older residential neighbourhoods, suburban developments, commercial districts and industrial areas throughout Leeds and nearby West Yorkshire locations.">
          Areas We Cover Across Leeds
        </Title>

        {/* FEATURED CITY CENTRE CARD */}
        <Fade>
          <article className="group mb-8 grid overflow-hidden border border-[#d5e0d4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)] md:grid-cols-[0.42fr_0.58fr]">
            
            {/* MAP PANEL */}
            <div className="relative min-h-[360px] overflow-hidden bg-[#dfe9dd] md:min-h-full">
              <img
                src="/images/leeds-city-centre-map.png"
                alt="Leeds City Centre map"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />

              {/* SOFT GREEN OVERLAY */}
              <div className="absolute inset-0 bg-[#1b3a1f]/12" />

              {/* GREEN TEXT GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/58 via-58% to-transparent" />

              {/* ACCENT LIGHT */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(227,197,65,0.18),transparent_28%)]" />

              {/* TEXT */}
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                  LS1 / LS2 / CITY CENTRE
                </p>

                <h3 className="mt-3 text-[34px] font-semibold leading-none tracking-[-0.04em] text-white">
                  Leeds City Centre
                </h3>

                <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-white/82">
                  Commercial, retail, office and managed property survey enquiries across central Leeds.
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col p-7 md:p-8">
              <a href="/asbestos-survey-leeds-centre" className="text-[25px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                Asbestos Survey Leeds City Centre
              </a>

              <div className="mt-5 space-y-4 text-[13px] leading-7 text-slate-600">
                <p>
                  Asbestos survey enquiries can be arranged across Leeds city centre, including LS1, LS2 and surrounding central commercial districts. This area includes offices, retail units, hospitality premises, managed buildings, converted spaces, apartment blocks and older commercial properties where asbestos-containing materials may still be present.
                </p>

                <p>
                  City centre surveys are often required before shop fit-outs, office refurbishments, landlord works, planned maintenance, building upgrades, change-of-use projects or property transactions. Older commercial buildings and refurbished premises may contain asbestos in ceiling voids, service risers, partition walls, floor tiles, pipe insulation, textured coatings and plant areas.
                </p>

                <p>
                  We help arrange asbestos surveys for property managers, landlords, developers, contractors and business owners working across Leeds city centre and nearby areas such as Holbeck, Hunslet, Woodhouse, Burmantofts and the wider inner Leeds area.
                </p>
              </div>

              <a href="/asbestos-survey-leeds-centre" className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">
                Learn More <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </article>
        </Fade>

        {/* AREA CARDS */}
        <div className="grid items-stretch gap-7 md:grid-cols-3">
          {areaCards.map(([geo, place, text, href], i) => (
            <Fade key={place} delay={(i % 3) * 0.04} className="h-full">
              <article className="group flex h-full min-h-[520px] flex-col overflow-hidden border border-[#d5e0d4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)]">
                
                {/* MAP HEADER */}
                <div className="relative m-5 mb-0 h-[185px] overflow-hidden bg-[#dfe9dd] clip-section-bl">
                  <img
                    src={`/images/${mapNames[place]}.png`}
                    alt={`${place} map`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                  />

                  {/* SOFT GREEN OVERLAY */}
                  <div className="absolute inset-0 bg-[#1b3a1f]/14" />

                  {/* STRONGER GREEN TEXT GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/92 via-[#1b3a1f]/38 via-55% to-transparent" />

                  {/* LIGHTING */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(227,197,65,0.16),transparent_28%)]" />

                  {/* TEXT */}
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                      {geo}
                    </p>

                    <h3 className="mt-2 text-[25px] font-semibold leading-none tracking-[-0.04em] text-white">
                      {place}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  <a href={href} className="text-[20px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                    Asbestos Survey {place}
                  </a>

                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {text}
                  </p>

                  <a href={href} className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeedSurvey() {
  const items = [
    [
      "01",
      "Before Renovation Work",
      "A refurbishment asbestos survey helps identify asbestos-containing materials before renovation, structural alterations, rewiring, kitchen replacements, bathroom upgrades or maintenance work begins.",
      "/asbestos-refurbishment-survey-leeds",
    ],
    [
      "02",
      "Before Demolition",
      "Demolition asbestos surveys are typically required before full or partial demolition projects so asbestos-containing materials can be identified and managed safely before work starts.",
      "/asbestos-demolition-survey-leeds",
    ],
    [
      "03",
      "Before Buying a Property",
      "Property buyers, landlords and developers may arrange asbestos surveys before purchasing older residential or commercial properties to better understand potential asbestos risks within the building.",
      "/asbestos-surveys-leeds",
    ],
    [
      "04",
      "For Commercial Property Management",
      "Management asbestos surveys are commonly arranged for offices, retail units, managed residential buildings, schools, warehouses and commercial premises where asbestos may need to be monitored over time.",
      "/asbestos-management-survey-leeds",
    ],
  ];

  return (
    <section className="bg-[#f6f7f3] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="relative min-h-[720px] overflow-hidden bg-white shadow-sm clip-section-bl">
          <img
            src={ASSETS.needSurvey}
            alt="When asbestos surveys may be needed"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/92" />

          <div className="relative z-10 flex min-h-[720px] items-center justify-end p-8 md:p-12">
            <div className="max-w-[560px] border border-[#d8e2d6] bg-white/92 p-8 shadow-[0_18px_50px_rgba(27,58,31,0.10)] backdrop-blur-sm md:p-10">
              <Title
                small
                intro="Asbestos surveys are commonly required before property transactions, building work, refurbishment projects or demolition. They help identify asbestos-containing materials before they are disturbed and provide clear information for property owners, landlords, contractors and duty holders."
              >
                When You May Need an Asbestos Survey
              </Title>

              <div className="mt-7 grid gap-5">
                {items.map(([num, title, text, href], i) => (
                  <Fade key={title} delay={i * 0.04}>
                    <div className="flex gap-4">
                      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-2 border-[#1b3a1f] bg-[#eef4eb] text-[13px] font-black text-[#1b3a1f]">
                        {num}
                      </div>

                      <div>
                        <a href={href} className="text-[19px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]">
                          {title}
                        </a>

                        <p className="mt-2 text-[13px] leading-6 text-slate-600">
                          {text}
                        </p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/quote">Get a quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Costs() {
  const factors = [
    "Property size and layout",
    "Type of survey required",
    "Number of samples needed",
    "Accessibility of inspection areas",
    "Whether the property is residential, commercial or industrial",
    "How quickly the survey is required",
  ];

  return (
    <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.56fr_0.44fr] md:items-start">
        
        {/* LEFT CONTENT */}
        <Fade>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
              LEEDS ASBESTOS SURVEY PRICING
            </p>

            <h2 className="mt-4 text-[38px] font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-[56px]">
              Asbestos Survey Cost in Leeds
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-white/78">
              <p>
                The cost of an asbestos survey in Leeds depends on the type of property, the size of the building, the number of areas that need inspecting and the type of survey required.
              </p>

              <p>
                <a href="/asbestos-management-survey-leeds" className="font-semibold text-[#e3c541] underline underline-offset-4 transition hover:text-[#ead566]">Management surveys</a> are usually more straightforward because they are designed for occupied buildings and accessible areas. <a href="/asbestos-refurbishment-survey-leeds" className="font-semibold text-[#e3c541] underline underline-offset-4 transition hover:text-[#ead566]">Refurbishment</a> and <a href="/asbestos-demolition-survey-leeds" className="font-semibold text-[#e3c541] underline underline-offset-4 transition hover:text-[#ead566]">demolition surveys</a> are usually more detailed because they may require access behind walls, ceilings, floors or fixed structures.
              </p>

              <p>
                We help arrange survey quotes for everything from smaller residential properties to larger commercial and refurbishment projects across Leeds and surrounding areas.
              </p>

              <p>
                The fastest way to get accurate pricing is to request a quote with details of the property and the reason for the survey.
              </p>
            </div>

            <div className="mt-8">
              <Button yellow href="/asbestos-survey-cost-leeds">View Typical Survey Costs</Button>
            </div>
          </div>
        </Fade>

        {/* RIGHT PANEL */}
        <Fade delay={0.05}>
          <div className="relative overflow-hidden border border-white/10 bg-white/6 p-7 backdrop-blur-sm clip-section-bl">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,197,65,0.18),transparent_30%)]" />

            <h3 className="relative z-10 text-[24px] font-semibold leading-tight text-white">
              Typical factors affecting asbestos survey cost include:
            </h3>

            <div className="relative z-10 mt-7 grid gap-4">
              {factors.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-4 text-[14px] leading-6 text-white/84"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#e3c541]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
              <p className="text-[13px] leading-7 text-white/68">
                Survey pricing can vary significantly depending on the type of building, accessibility, sampling requirements and whether refurbishment or demolition work is planned.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What is an asbestos survey?",
      a: (
        <>
          An asbestos survey is an inspection carried out to identify materials within a building that may contain asbestos. The survey report records where suspected asbestos-containing materials are located, their condition and what action may be required.
        </>
      ),
    },
    {
      q: "When is an asbestos survey required?",
      a: (
        <>
          Asbestos surveys are commonly required before <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment work</InlineLink>, <InlineLink href="/asbestos-demolition-survey-leeds">demolition projects</InlineLink>, property purchases, major maintenance work or commercial property management responsibilities.
        </>
      ),
    },
    {
      q: "What type of asbestos survey do I need?",
      a: (
        <>
          The correct survey depends on the building and the work being planned. Common survey types include <InlineLink href="/asbestos-management-survey-leeds">management surveys</InlineLink>, <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment surveys</InlineLink> and <InlineLink href="/asbestos-demolition-survey-leeds">demolition surveys</InlineLink>.
        </>
      ),
    },
    {
      q: "Do I need an asbestos survey before renovating a house?",
      a: (
        <>
          If the property was built before asbestos materials were banned in the UK, a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment survey</InlineLink> is often recommended before renovation work begins.
        </>
      ),
    },
    {
      q: "How long does an asbestos survey take?",
      a: (
        <>
          Smaller residential surveys may take a couple of hours, while larger commercial or industrial properties can take longer depending on size and complexity.
        </>
      ),
    },
    {
      q: "What happens if asbestos is found?",
      a: (
        <>
          If asbestos-containing materials are identified, the report will outline their location, condition and whether management, encapsulation or removal may be required.
        </>
      ),
    },
    {
      q: "How much does an asbestos survey cost?",
      a: (
        <>
          Survey costs vary depending on property size, survey type, sampling requirements and accessibility. View our <InlineLink href="/asbestos-survey-cost-leeds">asbestos survey cost guide</InlineLink> or request a quote for accurate pricing.
        </>
      ),
    },
  ];

  return (
    <section id="faqs" className="relative overflow-hidden px-5 py-16 md:py-24">
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.faq}
          alt="Frequently asked questions"
          className="h-full w-full object-cover object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ee]/96 via-[#f6f2ee]/90 to-[#f6f2ee]/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="max-w-[760px]">
          <Title small>Frequently Asked Questions</Title>

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
              Need an Asbestos Survey in Leeds?
            </h3>

            <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/78">
              Get a fast quote for asbestos surveys across Leeds and surrounding areas. OwlSafe helps connect homeowners, landlords and commercial property managers with experienced asbestos survey professionals.
            </p>

            <div className="mt-7">
              <Button yellow href="/quote">Get a Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OwlSafeHomepage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
<style>{`
html,
body {
  overflow-x: hidden;
}

main {
  overflow-x: hidden;
}

.clip-corner{
clip-path: polygon(0 0, 100% 0, 100% 100%, 13px 100%, 0 calc(100% - 13px));
}

.clip-section-bl{
clip-path:polygon(0 0,100% 0,100% 100%,24px 100%,0 calc(100% - 24px))
}

h1,h2,h3{
font-weight:600!important;
}
`}</style>      <Header />
      <Hero
        title="Fast, Reliable Asbestos Surveys in Leeds"
        intro="OwlSafe helps homeowners, landlords and businesses arrange asbestos surveys in Leeds for residential, commercial and refurbishment projects. Work with qualified surveyors and receive clear, compliance-focused reports for property purchases, renovation or demolition."
        desktopImage={ASSETS.hero}
        mobileImage={ASSETS.mobileHero}
        imageAlt="Asbestos surveyor"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-surveys-leeds"
        secondaryLabel="Learn more"
        desktopObjectPosition="top"
        mobileObjectPosition="58% center"
        trustPoints={[
          "Work with qualified, experienced asbestos surveyors",
          "Detailed, compliance-focused survey reports",
          "Coverage across Leeds and surrounding areas",
        ]}
      />
      <SurveyTypes />
      <LeedsText />
      <WhyChoose />
      <Standards />
      <HowItWorks />
      <Areas />
      <NeedSurvey />
      <Costs />
      <QuoteForm />
      <FAQ />
      <Footer />
    </main>
  );
}
