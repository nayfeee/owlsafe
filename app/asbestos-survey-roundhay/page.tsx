import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Rothwell | OwlSafe",
  description:
    "Asbestos surveys in Rothwell, Oulton & Woodlesford | Homes, commercial properties & planned works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-rothwell",
  },
  openGraph: {
    title: "Asbestos Survey Rothwell | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Rothwell, Oulton, Woodlesford and nearby South East Leeds areas for homes, commercial premises and planned works.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-rothwell",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Rothwell",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Rothwell",
    },
    {
      "@type": "Place",
      name: "Oulton",
    },
    {
      "@type": "Place",
      name: "Woodlesford",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Rothwell, Oulton, Woodlesford and nearby South East Leeds areas for homes, commercial premises and planned works.",
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