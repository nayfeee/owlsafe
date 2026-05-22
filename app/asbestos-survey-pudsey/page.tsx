import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Pudsey | OwlSafe",
  description:
    "Asbestos surveys in Pudsey, Farsley & Calverley | Homes, landlords, commercial properties & refurbishment works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-pudsey",
  },
  openGraph: {
    title: "Asbestos Survey Pudsey | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Pudsey, Farsley, Calverley and nearby West Leeds areas for homes, landlords, commercial premises and refurbishment projects.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-pudsey",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Pudsey",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Pudsey",
    },
    {
      "@type": "Place",
      name: "Farsley",
    },
    {
      "@type": "Place",
      name: "Calverley",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Pudsey, Farsley, Calverley and nearby West Leeds areas for homes, landlords, commercial premises and refurbishment projects.",
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