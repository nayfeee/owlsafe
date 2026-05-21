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

const surveyTypes = [
  {
    title: "Management surveys",
    href: "/asbestos-management-survey-leeds",
    text: "For occupied buildings, commercial premises, landlords, duty holders and managed properties where asbestos risks need to be identified and managed.",
  },
  {
    title: "Refurbishment surveys",
    href: "/asbestos-refurbishment-survey-leeds",
    text: "For renovation, rewiring, strip-out, structural alteration, kitchen, bathroom or commercial fit-out projects that may disturb hidden materials.",
  },
  {
    title: "Demolition surveys",
    href: "/asbestos-demolition-survey-leeds",
    text: "For full or partial demolition where asbestos-containing materials need to be identified before demolition or structural strip-out begins.",
  },
  {
    title: "Reinspection surveys",
    href: "/asbestos-reinspection-survey-leeds",
    text: "For buildings where asbestos has already been identified and the condition of known asbestos materials needs to be monitored over time.",
  },
];

const faqs = [
  {
    q: "Which areas of Leeds do you cover?",
    a: (
      <>
        OwlSafe helps arrange asbestos survey enquiries across Leeds and surrounding areas, including Leeds City Centre, Headingley, Horsforth, Roundhay, Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby.
      </>
    ),
  },
  {
    q: "Can you arrange asbestos surveys outside Leeds?",
    a: (
      <>
        Enquiries are focused on Leeds and nearby areas. If your property is close to Leeds, submit the postcode and a qualified asbestos professional covering the area can advise.
      </>
    ),
  },
  {
    q: "Do different areas need different types of asbestos survey?",
    a: (
      <>
        The correct survey depends on the property and reason for the inspection rather than the area alone. For example, a landlord may need a <InlineLink href="/asbestos-management-survey-leeds">management survey</InlineLink>, while renovation work may require a <InlineLink href="/asbestos-refurbishment-survey-leeds">refurbishment survey</InlineLink>.
      </>
    ),
  },
  {
    q: "Can I get a quote for a commercial property?",
    a: (
      <>
        Yes. Survey enquiries can be arranged for offices, shops, warehouses, managed buildings, industrial units, schools, churches, hospitality premises and mixed-use commercial properties.
      </>
    ),
  },
  {
    q: "How much does an asbestos survey cost in Leeds?",
    a: (
      <>
        Costs depend on the survey type, property size, access, sampling and project scope. View the <InlineLink href="/asbestos-survey-cost-leeds">asbestos survey cost guide</InlineLink> for typical guidance.
      </>
    ),
  },
];

function AreasGrid() {
  return (
    <section className="bg-white px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <InnerTitle
          eyebrow="Leeds area pages"
          intro={
            <p>
              Use the area cards below to explore local asbestos survey pages for key Leeds locations. Each page gives more detail about typical local property types, survey reasons and common enquiries.
            </p>
          }
        >
          Areas We Cover Across Leeds
        </InnerTitle>

        <Fade>
          <article className="group mb-8 grid overflow-hidden border border-[#d5e0d4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)] md:grid-cols-[0.42fr_0.58fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#dfe9dd] md:min-h-full">
              <img
                src="/images/leeds-city-centre-map.png"
                alt="Leeds City Centre map"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-[#1b3a1f]/12" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/96 via-[#1b3a1f]/58 via-58% to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(227,197,65,0.18),transparent_28%)]" />

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

            <div className="flex flex-col p-7 md:p-8">
              <a
                href="/asbestos-survey-leeds-centre"
                className="text-[25px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]"
              >
                Asbestos Survey Leeds City Centre
              </a>

              <div className="mt-5 space-y-4 text-[13px] leading-7 text-slate-600">
                <p>
                  Asbestos survey enquiries can be arranged across Leeds city centre, including LS1, LS2 and surrounding central commercial districts. This area includes offices, retail units, hospitality premises, managed buildings, converted spaces, apartment blocks and older commercial properties where asbestos-containing materials may still be present.
                </p>

                <p>
                  City centre surveys are often required before shop fit-outs, office refurbishments, landlord works, planned maintenance, building upgrades, change-of-use projects or property transactions.
                </p>

                <p>
                  We help arrange asbestos surveys for property managers, landlords, developers, contractors and business owners working across Leeds city centre and nearby areas such as Holbeck, Hunslet, Woodhouse and the wider inner Leeds area.
                </p>
              </div>

              <a
                href="/asbestos-survey-leeds-centre"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </article>
        </Fade>

        <div className="grid items-stretch gap-7 md:grid-cols-3">
          {areaCards.map(([geo, place, text, href], i) => (
            <Fade key={place} delay={(i % 3) * 0.04} className="h-full">
              <article className="group flex h-full min-h-[520px] flex-col overflow-hidden border border-[#d5e0d4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.10)]">
                <div className="relative m-5 mb-0 h-[185px] overflow-hidden bg-[#dfe9dd] clip-section-bl">
                  <img
                    src={`/images/${mapNames[place]}.png`}
                    alt={`${place} map`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-[#1b3a1f]/14" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a1f]/92 via-[#1b3a1f]/38 via-55% to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(227,197,65,0.16),transparent_28%)]" />

                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
                      {geo}
                    </p>

                    <h3 className="mt-2 text-[25px] font-semibold leading-none tracking-[-0.04em] text-white">
                      {place}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <a
                    href={href}
                    className="text-[20px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]"
                  >
                    Asbestos Survey {place}
                  </a>

                  <p className="mt-4 text-[13px] leading-7 text-slate-600">
                    {text}
                  </p>

                  <a
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1"
                  >
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

export default function AreasWeCoverPage() {
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
        @media (max-width: 767px) {
          main > section:nth-of-type(2),
          main > section:nth-of-type(2) > div.relative.z-20 {
            height: 665px !important;
          }
        }
      `}</style>

      <Header />

      <Hero
        title="Asbestos Survey Areas Across Leeds"
        intro="Arrange asbestos survey enquiries across Leeds and surrounding areas, including Leeds City Centre, Headingley, Horsforth, Roundhay, Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby."
        mobileIntro="Arrange asbestos survey enquiries across Leeds and surrounding areas for homes, landlords, commercial premises and planned works."
        desktopImage="/images/leeds.png"
        imageAlt="Asbestos survey areas across Leeds"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="/asbestos-surveys-leeds"
        secondaryLabel="Compare surveys"
        desktopObjectPosition="right 0%"        mobileObjectPosition="72% center"
        trustPoints={[
          "Coverage across Leeds and surrounding areas",
          "Residential, commercial and managed property enquiries",
          "Management, refurbishment, demolition and reinspection surveys",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <InnerTitle
              center={false}
              eyebrow="Leeds coverage"
              intro={
                <p>
                  This page is a hub for the key Leeds areas we cover. It does not need to be as long as a service page, but it should still give enough local context to help users choose the right area page and understand the types of survey enquiries we can help arrange.
                </p>
              }
            >
              Asbestos Survey Enquiries Across Leeds
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                OwlSafe helps arrange asbestos survey enquiries across Leeds for homeowners, landlords, property buyers, managing agents, commercial property owners, contractors and developers.
              </p>

              <p>
                Surveys may be needed before refurbishment work, demolition, property purchases, planned maintenance, commercial property management or ongoing asbestos monitoring. The right survey type depends on the building, its age, how it is used and whether intrusive work is planned.
              </p>

              <p>
                Local property types across Leeds vary widely, from older terraces, converted flats and suburban homes to offices, retail units, schools, warehouses, industrial premises and managed residential blocks. That variety is why local context matters when scoping an asbestos survey.
              </p>

              <p>
                If you are unsure which survey you need, learn more about <InlineLink href="/asbestos-surveys-leeds">asbestos surveys in Leeds</InlineLink> or request a quote with a few property details.
              </p>
            </div>

            <div className="mt-8 grid max-w-[260px] gap-3 sm:max-w-none sm:grid-cols-2">
              <Button href="/quote" className="w-full">
                Request a quote
              </Button>

              <Button yellow clipped={false} href="/asbestos-survey-cost-leeds" className="w-full">
                View survey costs
              </Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <MapPin className="h-9 w-9 text-[#305e2f]" />

              <h3 className="mt-5 text-[26px] font-semibold leading-tight text-[#1b3a1f]">
                Area coverage includes
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Leeds City Centre, Holbeck, Hunslet and inner Leeds",
                  "Headingley, Hyde Park, Burley and Kirkstall",
                  "Horsforth, Cookridge, Rawdon and North West Leeds",
                  "Roundhay, Oakwood, Gledhow and North East Leeds",
                  "Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby",
                  "Homes, landlords, commercial premises and managed buildings",
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

      <AreasGrid />

      <section className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <InnerTitle
            intro={
              <p>
                Different survey types may be required across different property situations. The area tells us where the property is; the survey type tells us what kind of inspection is needed.
              </p>
            }
          >
            Survey Types Available Across Leeds
          </InnerTitle>

          <div className="grid gap-6 md:grid-cols-4">
            {surveyTypes.map((card, i) => (
              <Fade key={card.title} delay={i * 0.04}>
                <article className="group flex h-full flex-col border border-[#cbdcca] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.09)]">
                  <a
                    href={card.href}
                    className="text-[20px] font-semibold leading-tight text-[#1b3a1f] transition hover:text-[#305e2f]"
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

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[0.56fr_0.44fr]">
          <Fade>
            <InnerTitle light center={false}>
              Leeds Buildings Often Need Different Survey Approaches
            </InnerTitle>

            <div className="space-y-5 text-[14px] leading-7 text-white/76">
              <p>
                Older residential areas such as Headingley, Burley, Hyde Park, Pudsey and Morley often generate survey enquiries before renovation, rewiring, rental upgrades, garage roof work or property transactions.
              </p>

              <p>
                Leeds city centre, Holbeck, Hunslet and Garforth commonly include commercial premises, warehouses, retail units, managed buildings and industrial properties where management, refurbishment or demolition surveys may be required.
              </p>

              <p>
                Across North Leeds locations such as Horsforth, Roundhay, Otley and Wetherby, larger older homes, extensions, converted buildings and managed properties may contain asbestos materials introduced during previous refurbishment works.
              </p>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-white/12 bg-white/8 p-7 text-white backdrop-blur-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#e3c541]" />

              <h3 className="mt-5 text-[30px] font-semibold leading-tight tracking-[-0.04em]">
                Local context helps with scoping
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-white/76">
                A city centre office fit-out, a Headingley HMO refurbishment, a Pudsey garage roof inspection and a Morley warehouse management survey can all require different survey scopes. That is why it helps to provide the property location, building type and reason for the survey when requesting a quote.
              </p>

              <div className="mt-7">
                <Button yellow href="/quote">
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
              Frequently Asked Questions About Leeds Survey Areas
            </InnerTitle>

            <div className="mt-8 overflow-hidden border border-[#d8e2d6] bg-white/86 shadow-[0_20px_50px_rgba(27,58,31,0.08)] backdrop-blur-sm">
              {faqs.map(({ q, a }, i) => (
                <details key={q} open={i === 0} className="group border-b border-[#d8e2d6] last:border-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[18px] font-semibold text-[#1b3a1f] transition hover:bg-[#f6f7f3]">
                    <span>{q}</span>
                    <span className="text-[22px] font-light text-[#305e2f] transition group-open:rotate-45">+</span>
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
                Provide the property postcode, survey reason and any planned works, and a qualified asbestos professional can advise on the most suitable next step.
              </p>

              <div className="mt-7 grid max-w-[250px] gap-3">
                <Button ghost clipped={false} href="/asbestos-surveys-leeds">
                  Compare Survey Types
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
              Need an Asbestos Survey in Your Area?
            </h2>

            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              Request a quote for asbestos surveys across Leeds and surrounding areas, including homes, landlords, commercial premises, managed buildings, refurbishment projects and demolition works.
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
