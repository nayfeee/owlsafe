import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Wetherby | OwlSafe",
  description:
    "Asbestos surveys in Wetherby, Boston Spa & Collingham | Homes, commercial properties & planned works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-wetherby",
  },
  openGraph: {
    title: "Asbestos Survey Wetherby | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Wetherby, Boston Spa, Collingham and nearby North Leeds areas for homes, commercial premises and planned works.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-wetherby",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Wetherby",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Wetherby",
    },
    {
      "@type": "Place",
      name: "Boston Spa",
    },
    {
      "@type": "Place",
      name: "Collingham",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Wetherby, Boston Spa, Collingham and nearby North Leeds areas for homes, commercial premises and planned works.",
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