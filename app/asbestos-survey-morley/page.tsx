import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Morley | OwlSafe",
  description:
    "Asbestos surveys in Morley, Churwell & Tingley | Homes, landlords, workshops & commercial properties →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-morley",
  },
  openGraph: {
    title: "Asbestos Survey Morley | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Morley, Churwell, Tingley and nearby South Leeds areas for homes, commercial premises, workshops and landlords.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-morley",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Morley",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Morley",
    },
    {
      "@type": "Place",
      name: "Churwell",
    },
    {
      "@type": "Place",
      name: "Tingley",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Morley, Churwell, Tingley and nearby South Leeds areas for homes, workshops, landlords and commercial premises.",
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