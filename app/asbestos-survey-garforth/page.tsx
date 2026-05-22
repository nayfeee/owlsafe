import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Garforth | OwlSafe",
  description:
    "Asbestos surveys in Garforth, Kippax & Swillington | Homes, schools, commercial units & planned works | Fast quotes →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-garforth",
  },
  openGraph: {
    title: "Asbestos Survey Garforth | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Garforth, Kippax, Swillington and nearby East Leeds areas for homes, schools, commercial units and planned works.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-garforth",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Garforth",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Garforth",
    },
    {
      "@type": "Place",
      name: "Kippax",
    },
    {
      "@type": "Place",
      name: "Swillington",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Garforth, Kippax, Swillington and nearby East Leeds areas for homes, schools, commercial units and planned works.",
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