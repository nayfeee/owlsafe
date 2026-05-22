"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  HelpCircle,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Fade from "../../components/Fade";
import Button from "../../components/Button";

type Choice = {
  label: string;
  value: string;
  note?: string;
};

type Answers = {
  propertyType?: string;
  buildAge?: string;
  altered?: string;
  suspectMaterials?: string;
  plannedWorks?: string;
  nonDomestic?: string;
};

type Recommendation = {
  label: string;
  type: string;
  href: string;
  summary: string;
  next: string;
  cta?: string;
};

const steps: {
  id: keyof Answers;
  number: string;
  eyebrow: string;
  question: string;
  helper: string;
  choices: Choice[];
}[] = [
  {
    id: "propertyType",
    number: "01",
    eyebrow: "Property type",
    question: "What type of property is it?",
    helper:
      "The type of property affects which asbestos duties may apply and what kind of survey may be suitable.",
    choices: [
      {
        label: "House or bungalow",
        value: "home",
        note: "Common for purchases, renovations, extensions and garage works.",
      },
      {
        label: "Flat or apartment",
        value: "flat",
        note: "May involve private areas, communal spaces or managed building duties.",
      },
      {
        label: "Commercial premises",
        value: "commercial",
        note: "Shops, offices, workshops, warehouses and mixed-use premises may have duty holder responsibilities.",
      },
      {
        label: "Managed or shared building",
        value: "managed",
        note: "Blocks, communal areas, schools, churches and workplaces often need clearer management information.",
      },
    ],
  },
  {
    id: "buildAge",
    number: "02",
    eyebrow: "Building age",
    question: "When was the property built or last heavily refurbished?",
    helper:
      "Asbestos was widely used in UK buildings through much of the twentieth century and was banned in 1999.",
    choices: [
      {
        label: "Before 1985",
        value: "pre1985",
        note: "Higher likelihood of asbestos-containing materials being present.",
      },
      {
        label: "1985 to 1999",
        value: "1985to1999",
        note: "Asbestos may still be present, especially in boards, coatings, floors and cement products.",
      },
      {
        label: "2000 or later",
        value: "post2000",
        note: "Asbestos is less likely if the building and all materials are genuinely post-1999.",
      },
      {
        label: "Not sure",
        value: "unknown",
        note: "If the age is uncertain, it is safer to assume asbestos may be possible until checked.",
      },
    ],
  },
  {
    id: "altered",
    number: "03",
    eyebrow: "Alterations",
    question: "Has the property had extensions, conversions or major refurbishment?",
    helper:
      "Later works can hide older materials behind new finishes, boxing, ceilings, floors or service routes.",
    choices: [
      {
        label: "Yes, significant alterations",
        value: "major",
        note: "Extensions, loft conversions, layout changes, rewires and heating upgrades can expose hidden materials.",
      },
      {
        label: "Some updates or repairs",
        value: "some",
        note: "Even smaller updates can disturb ceilings, boards, floors, cupboards or service boxing.",
      },
      {
        label: "No major changes known",
        value: "none",
        note: "Original materials may still be present in older properties.",
      },
      {
        label: "Not sure",
        value: "unknown",
        note: "Unclear property history is common, especially with older homes and commercial spaces.",
      },
    ],
  },
  {
    id: "suspectMaterials",
    number: "04",
    eyebrow: "Suspect materials",
    question: "Have you noticed any possible asbestos-containing materials?",
    helper:
      "You cannot confirm asbestos by appearance alone, but some materials are common survey triggers.",
    choices: [
      {
        label: "Yes, textured ceilings, floor tiles, boards or an old garage roof",
        value: "yes",
        note: "Artex-style coatings, thermoplastic floor tiles, AIB, pipe boxing and cement roof sheets are common triggers.",
      },
      {
        label: "Maybe, I’m not sure what I’m looking at",
        value: "maybe",
        note: "A survey or sampling can help confirm whether suspect materials contain asbestos.",
      },
      {
        label: "No obvious suspect materials",
        value: "no",
        note: "Hidden asbestos can still exist behind walls, ceilings, floors, ducts and services.",
      },
      {
        label: "Known asbestos already present",
        value: "known",
        note: "Existing asbestos materials may need management, reinspection or removal planning before works.",
      },
    ],
  },
  {
    id: "plannedWorks",
    number: "05",
    eyebrow: "Planned works",
    question: "Are any refurbishment, maintenance or demolition works planned?",
    helper:
      "This is often the deciding factor. If work may disturb the building fabric, a more intrusive survey may be needed.",
    choices: [
      {
        label: "Yes, refurbishment or renovation",
        value: "refurbishment",
        note: "A refurbishment survey is commonly needed before intrusive work begins.",
      },
      {
        label: "Yes, demolition, strip-out or garage removal",
        value: "demolition",
        note: "A demolition survey may be needed before full or partial demolition.",
      },
      {
        label: "No works planned, just need to understand risk",
        value: "management",
        note: "A management survey may be suitable for occupied buildings or ongoing duty holder responsibilities.",
      },
      {
        label: "Not sure yet",
        value: "unknown",
        note: "A surveyor can advise based on the proposed works and property details.",
      },
    ],
  },
  {
    id: "nonDomestic",
    number: "06",
    eyebrow: "Responsibility",
    question: "Is it a workplace, rental, communal area or managed property?",
    helper:
      "Commercial and shared buildings can involve legal duties to manage asbestos risk.",
    choices: [
      {
        label: "Yes, commercial, workplace, communal or managed building",
        value: "yes",
        note: "A management survey or reinspection may be relevant for duty holders and managed premises.",
      },
      {
        label: "Rental property or landlord enquiry",
        value: "landlord",
        note: "Landlords may need survey information for common areas, maintenance or planned works.",
      },
      {
        label: "No, private home only",
        value: "private",
        note: "Domestic homes are still often surveyed before purchase, renovation or demolition works.",
      },
      {
        label: "Not sure",
        value: "unknown",
        note: "If responsibilities are unclear, it is worth getting advice before works proceed.",
      },
    ],
  },
];

function getRecommendation(answers: Answers): Recommendation {
  const lowRiskPath =
    answers.buildAge === "post2000" &&
    answers.altered === "none" &&
    answers.suspectMaterials === "no" &&
    (answers.plannedWorks === "management" || answers.plannedWorks === "unknown") &&
    answers.nonDomestic === "private" &&
    (answers.propertyType === "home" || answers.propertyType === "flat");

  if (lowRiskPath) {
    return {
      label: "A survey may not currently be necessary",
      type: "General guidance",
      href: "/asbestos-surveys-leeds",
      summary:
        "Based on your answers, asbestos risk may be lower if the property and all materials are genuinely post-1999, no suspect materials are present and no intrusive works are planned.",
      next:
        "If plans change, hidden materials are uncovered or the property history is uncertain, it is still sensible to request guidance before disturbing the building fabric.",
      cta: "Request guidance",
    };
  }

  const score = {
    management: 0,
    refurbishment: 0,
    demolition: 0,
    reinspection: 0,
    low: 0,
  };

  if (answers.propertyType === "commercial" || answers.propertyType === "managed") {
    score.management += 2;
  }

  if (answers.propertyType === "flat") {
    score.management += 1;
  }

  if (answers.buildAge === "pre1985") {
    score.management += 2;
    score.refurbishment += 2;
  }

  if (answers.buildAge === "1985to1999" || answers.buildAge === "unknown") {
    score.management += 1;
    score.refurbishment += 2;
  }

  if (answers.buildAge === "post2000") {
    score.low += 2;
  }

  if (
    answers.altered === "major" ||
    answers.altered === "some" ||
    answers.altered === "unknown"
  ) {
    score.refurbishment += 1;
  }

  if (answers.suspectMaterials === "yes" || answers.suspectMaterials === "maybe") {
    score.management += 1;
    score.refurbishment += 1;
  }

  if (answers.suspectMaterials === "known") {
    score.management += 2;
    score.reinspection += 3;
  }

  if (answers.plannedWorks === "refurbishment") {
    score.refurbishment += 5;
  }

  if (answers.plannedWorks === "demolition") {
    score.demolition += 6;
  }

  if (answers.plannedWorks === "management") {
    score.management += 2;
  }

  if (answers.plannedWorks === "unknown") {
    score.management += 1;
    score.refurbishment += 1;
  }

  if (answers.nonDomestic === "yes" || answers.nonDomestic === "landlord") {
    score.management += 3;
  }

  if (answers.nonDomestic === "unknown") {
    score.management += 1;
  }

  const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const top = ranked[0][0];

  if (top === "demolition") {
    return {
      label: "A demolition survey may be needed",
      type: "Demolition survey",
      href: "/asbestos-demolition-survey-leeds",
      summary:
        "Because demolition, strip-out or removal work may disturb hidden materials throughout the building, a demolition survey may be the most relevant route before works proceed.",
      next:
        "Request a quote and include the property type, demolition scope and any areas being removed or stripped out.",
    };
  }

  if (top === "refurbishment") {
    return {
      label: "A refurbishment survey may be needed",
      type: "Refurbishment survey",
      href: "/asbestos-refurbishment-survey-leeds",
      summary:
        "Because planned works may disturb walls, ceilings, floors, services, garages or other building materials, a refurbishment survey may be needed before work starts.",
      next:
        "Request a quote and describe the rooms, materials or areas that will be disturbed by the works.",
    };
  }

  if (top === "reinspection") {
    return {
      label: "A reinspection or management review may be needed",
      type: "Reinspection survey",
      href: "/asbestos-reinspection-survey-leeds",
      summary:
        "Because asbestos is already known or suspected, the next step may be checking its condition, updating records or confirming whether works could disturb it.",
      next:
        "Request a quote and mention any existing asbestos report, asbestos register or known material locations.",
    };
  }

  if (top === "management") {
    return {
      label: "A management survey may be suitable",
      type: "Management survey",
      href: "/asbestos-management-survey-leeds",
      summary:
        "Because the property may be occupied, managed, commercial or shared, a management survey may help identify asbestos-containing materials that could be disturbed during normal occupation or maintenance.",
      next:
        "Request a quote and include details about the building use, access areas and any landlord or duty holder responsibilities.",
    };
  }

  return {
    label: "A survey may not currently be necessary",
    type: "General guidance",
    href: "/asbestos-surveys-leeds",
    summary:
      "Based on your answers, asbestos risk may be lower if the property and all materials are genuinely post-1999, no suspect materials are present and no intrusive works are planned.",
    next:
      "If plans change, hidden materials are uncovered or the property history is uncertain, it is still sensible to request guidance before disturbing the building fabric.",
    cta: "Request guidance",
  };
}

function StepTool() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const current = steps[activeStep];
  const isComplete = activeStep >= steps.length;
  const progress = Math.min(
    ((activeStep + (isComplete ? 0 : 1)) / steps.length) * 100,
    100
  );

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  function selectAnswer(id: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));

    window.setTimeout(() => {
      setActiveStep((prev) => Math.min(prev + 1, steps.length));
    }, 180);
  }

  function resetTool() {
    setAnswers({});
    setActiveStep(0);
  }

  return (
    <div className="overflow-hidden border border-[#d8e2d6] bg-white shadow-[0_24px_70px_rgba(27,58,31,0.09)]">
      <div className="bg-[#1b3a1f] px-6 py-6 text-white md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
              Interactive guide
            </p>
            <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.04em] md:text-[42px]">
              Do I Need an Asbestos Survey?
            </h2>
          </div>

          <button
            type="button"
            onClick={resetTool}
            className="inline-flex w-fit items-center gap-2 border border-white/20 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#1b3a1f]"
          >
            <RotateCcw className="h-4 w-4" />
            Start again
          </button>
        </div>

        <div className="mt-6 h-2 overflow-hidden bg-white/12">
          <motion.div
            className="h-full bg-[#e3c541]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="bg-[#f6f7f3] p-5 md:p-8">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.22 }}
              className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]"
            >
              <div>
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-[#1b3a1f] bg-white text-[22px] font-black text-[#1b3a1f] shadow-[0_0_0_8px_rgba(27,58,31,0.05)]">
                  {current.number}
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
                  {current.eyebrow}
                </p>

                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[42px]">
                  {current.question}
                </h3>

                <p className="mt-5 text-[14px] leading-7 text-slate-600">
                  {current.helper}
                </p>
              </div>

              <div className="grid gap-4">
                {current.choices.map((choice) => (
                  <button
                    type="button"
                    key={choice.value}
                    onClick={() => selectAnswer(current.id, choice.value)}
                    className="group border border-[#d8e2d6] bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#305e2f] hover:shadow-[0_18px_45px_rgba(27,58,31,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="block text-[18px] font-semibold leading-tight text-[#1b3a1f]">
                          {choice.label}
                        </span>
                        {choice.note && (
                          <span className="mt-3 block text-[13px] leading-6 text-slate-600">
                            {choice.note}
                          </span>
                        )}
                      </div>

                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[#305e2f]/30 text-[#305e2f] transition group-hover:bg-[#1b3a1f] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr]"
            >
              <div>
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-[#1b3a1f] bg-white text-[#1b3a1f] shadow-[0_0_0_8px_rgba(27,58,31,0.05)]">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
                  Your result
                </p>

                <h3 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.05em] text-[#1b3a1f] md:text-[52px]">
                  {recommendation.label}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                  {recommendation.summary}
                </p>
              </div>

              <div className="border border-[#d8e2d6] bg-white p-6 shadow-sm md:p-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
                  Suggested next step
                </p>

                <h4 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f]">
                  {recommendation.type}
                </h4>

                <p className="mt-5 text-[14px] leading-7 text-slate-600">
                  {recommendation.next}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Button yellow href="/quote" className="w-full">
                    {recommendation.cta || "Get a quote"}
                  </Button>
                  <Button
                    ghost
                    clipped={false}
                    href={recommendation.href}
                    className="w-full"
                  >
                    Learn more
                  </Button>
                </div>

                <div className="mt-7 border-t border-[#d8e2d6] pt-6">
                  <p className="flex items-start gap-3 text-[13px] leading-6 text-slate-600">
                    <HelpCircle className="mt-1 h-4 w-4 shrink-0 text-[#305e2f]" />
                    This guide is for general guidance only. The right survey depends on
                    the property, access, planned works and surveyor judgement.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DoINeedSurveyPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f3] text-slate-800">
      <style>{`
        html, body, main { overflow-x: hidden; }
        .clip-section-bl {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px));
        }
        h1, h2, h3 { font-weight: 600 !important; }
      `}</style>

      <Header />

      <Hero
        title="Do I Need an Asbestos Survey?"
        intro="Use OwlSafe’s step-by-step guide to understand whether an asbestos survey may be needed before buying, renovating, managing or demolishing a property in Leeds."
        mobileIntro="Use OwlSafe’s step-by-step guide to understand whether an asbestos survey may be needed before works, purchase or property management."
        desktopImage="/images/asbestos-surveys-hero.png"
        imageAlt="Asbestos survey guidance"
        primaryHref="/quote"
        primaryLabel="Get a quote"
        secondaryHref="#survey-checker"
        secondaryLabel="Start guide"
        desktopObjectPosition="center"
        mobileObjectPosition="75% center"
        trustPoints={[
          "Simple step-by-step guidance",
          "Built around UK asbestos survey types",
          "Ends with a clear next step",
        ]}
      />

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.58fr_0.42fr]">
          <Fade>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#305e2f]">
              Asbestos survey guidance
            </p>

            <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f] md:text-[48px]">
              Not every property needs the same type of asbestos survey.
            </h2>

            <div className="mt-6 space-y-5 text-[14px] leading-7 text-slate-600">
              <p>
                The right asbestos survey depends on the property age, building type,
                whether asbestos is already known or suspected, and whether any work is
                planned that could disturb the building fabric.
              </p>

              <p>
                A homeowner planning a kitchen renovation may need a different survey
                from a landlord managing communal areas, a shop owner planning a fit-out,
                or a contractor preparing for demolition.
              </p>

              <p>
                This guide asks a few practical questions and gives a general indication
                of whether a management, refurbishment, demolition or reinspection survey
                may be relevant.
              </p>
            </div>

            <div className="mt-8">
              <Button href="#survey-checker">Start the guide</Button>
            </div>
          </Fade>

          <Fade delay={0.06}>
            <div className="border border-[#d8e2d6] bg-[#f6f7f3] p-7 shadow-sm clip-section-bl">
              <ShieldCheck className="h-9 w-9 text-[#305e2f]" />

              <h3 className="mt-5 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-[#1b3a1f]">
                When asbestos surveys are commonly needed
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Before refurbishment or renovation works",
                  "Before demolition, strip-out or garage removal",
                  "When managing commercial or shared buildings",
                  "When buying an older property",
                  "When suspect materials such as Artex, AIB or old floor tiles are present",
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

      <section id="survey-checker" className="bg-[#eef4eb] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <Fade>
            <StepTool />
          </Fade>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-3">
          {[
            {
              title: "Management survey",
              href: "/asbestos-management-survey-leeds",
              text: "Used to help manage asbestos in occupied buildings during normal use and routine maintenance.",
            },
            {
              title: "Refurbishment survey",
              href: "/asbestos-refurbishment-survey-leeds",
              text: "Used before intrusive works that may disturb walls, ceilings, floors, services or other building materials.",
            },
            {
              title: "Demolition survey",
              href: "/asbestos-demolition-survey-leeds",
              text: "Used before full or partial demolition, structural strip-out or removal of parts of a building.",
            },
          ].map((card, i) => (
            <Fade key={card.title} delay={i * 0.04}>
              <article className="group flex h-full flex-col border border-[#d8e2d6] bg-[#f6f7f3] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#305e2f]">
                <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.035em] text-[#1b3a1f]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[13px] leading-7 text-slate-600">
                  {card.text}
                </p>
                <a
                  href={card.href}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#305e2f] transition group-hover:translate-x-1"
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </a>
              </article>
            </Fade>
          ))}
        </div>
      </section>

      <section className="bg-[#1b3a1f] px-5 py-16 md:py-20">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-8 text-white md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#e3c541]">
              Still unsure?
            </p>
            <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[46px]">
              Send the property details and get guidance.
            </h2>
            <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-white/74">
              If you are planning works, buying a property or managing a building, a
              qualified asbestos surveyor can advise which survey type is suitable.
            </p>
          </div>

          <Button yellow href="/quote" className="w-full md:w-[230px]">
            Get a quote
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
