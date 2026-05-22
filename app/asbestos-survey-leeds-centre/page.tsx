import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Leeds City Centre | OwlSafe",
  description:
    "Asbestos surveys in Leeds City Centre | Offices, apartments, shops, landlords & commercial projects →",
  alternates: {
    canonical:
      "https://www.owlsafe.co.uk/asbestos-survey-leeds-city-centre",
  },
  openGraph: {
    title: "Asbestos Survey Leeds City Centre | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Leeds City Centre for offices, shops, apartments, landlords, commercial premises, refurbishment and demolition projects.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-leeds-city-centre",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Leeds City Centre",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Leeds City Centre",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Leeds City Centre for offices, apartments, shops, landlords, commercial premises, refurbishment and demolition projects.",
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