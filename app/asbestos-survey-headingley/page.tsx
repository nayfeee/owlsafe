import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Headingley | OwlSafe",
  description:
    "Asbestos surveys in Headingley, Hyde Park & Kirkstall | Homes, landlords, student rentals & refurbishment works →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-headingley",
  },
  openGraph: {
    title: "Asbestos Survey Headingley | OwlSafe",
    description:
      "Arrange asbestos survey enquiries in Headingley, Hyde Park, Burley, Kirkstall and Woodhouse for homes, landlords, student rentals and refurbishment projects.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-headingley",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Survey Headingley",
  serviceType: "Asbestos survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Headingley",
    },
    {
      "@type": "Place",
      name: "Hyde Park",
    },
    {
      "@type": "Place",
      name: "Burley",
    },
    {
      "@type": "Place",
      name: "Kirkstall",
    },
    {
      "@type": "Place",
      name: "Woodhouse",
    },
    {
      "@type": "City",
      name: "Leeds",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes in Headingley, Hyde Park, Burley, Kirkstall and Woodhouse for homes, landlords, student rentals, commercial premises and refurbishment projects.",
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