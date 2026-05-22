import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Management Survey Leeds | OwlSafe",
  description:
    "Asbestos management surveys in Leeds for landlords, commercial & occupied properties | Fast quotes from qualified surveyors →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-management-survey-leeds",
  },
  openGraph: {
    title: "Asbestos Management Survey Leeds | OwlSafe",
    description:
      "Arrange asbestos management surveys in Leeds for commercial buildings, landlords, managed properties and occupied premises.",
    url: "https://www.owlsafe.co.uk/asbestos-management-survey-leeds",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Management Survey Leeds",
  serviceType: "Asbestos management survey",
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
    "OwlSafe helps arrange asbestos management survey quotes in Leeds for landlords, commercial premises, managed properties and occupied buildings.",
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