import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Roundhay | OwlSafe",
  description:
    "Asbestos surveys in Roundhay, Oakwood & Moortown | Homes, commercial properties & planned works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-roundhay",
  },
  openGraph: {
    title: "Asbestos Survey Roundhay | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Roundhay, Oakwood, Moortown and nearby North East Leeds areas for homes, commercial premises and planned works.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-roundhay",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Roundhay",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Roundhay",
    },
    {
      "@type": "Place",
      name: "Oakwood",
    },
    {
      "@type": "Place",
      name: "Moortown",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Roundhay, Oakwood, Moortown and nearby North East Leeds areas for homes, commercial premises and planned works.",
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