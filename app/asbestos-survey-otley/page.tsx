import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Otley | OwlSafe",
  description:
    "Asbestos surveys in Otley, Pool-in-Wharfedale & Bramhope | Homes, commercial properties & refurbishment works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-otley",
  },
  openGraph: {
    title: "Asbestos Survey Otley | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Otley, Pool-in-Wharfedale, Bramhope and nearby Wharfedale areas for homes, commercial premises and refurbishment projects.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-otley",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Otley",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Otley",
    },
    {
      "@type": "Place",
      name: "Pool-in-Wharfedale",
    },
    {
      "@type": "Place",
      name: "Bramhope",
    },
    {
      "@type": "Place",
      name: "Wharfedale",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Otley, Pool-in-Wharfedale, Bramhope and nearby Wharfedale areas for homes, commercial premises and refurbishment projects.",
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