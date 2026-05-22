import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Demolition Survey Leeds | OwlSafe",
  description:
    "Pre-demolition asbestos surveys in Leeds | For demolition, structural strip-out & garage removal | Fast quotes from qualified surveyors →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-demolition-survey-leeds",
  },
  openGraph: {
    title: "Asbestos Demolition Survey Leeds | OwlSafe",
    description:
      "Arrange a pre-demolition asbestos survey in Leeds before demolition, structural strip-out or garage removal. Fast quotes from qualified surveyors.",
    url: "https://www.owlsafe.co.uk/asbestos-demolition-survey-leeds",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Demolition Survey Leeds",
  serviceType: "Asbestos demolition survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
  description:
    "OwlSafe helps arrange asbestos demolition survey quotes in Leeds before demolition, structural strip-out, garage removal and major building works.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageClient />
    </>
  );
}