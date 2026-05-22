import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Horsforth | OwlSafe",
  description:
    "Asbestos surveys in Horsforth, Cookridge & Rawdon | Homes, landlords, commercial properties & refurbishment works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-horsforth",
  },
  openGraph: {
    title: "Asbestos Survey Horsforth | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Horsforth, Cookridge, Rawdon and nearby North West Leeds areas for homes, landlords, commercial premises and refurbishment projects.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-horsforth",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Horsforth",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Horsforth",
    },
    {
      "@type": "Place",
      name: "Cookridge",
    },
    {
      "@type": "Place",
      name: "Rawdon",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Horsforth, Cookridge, Rawdon and nearby North West Leeds areas for homes, landlords, commercial premises and refurbishment projects.",
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