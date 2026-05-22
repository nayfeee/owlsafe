import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Asbestos Surveys Leeds | OwlSafe",
  description:
    "Asbestos surveys in Leeds for homes, landlords & commercial properties | Fast quotes from qualified surveyors | Get a clear report before work starts →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk",
  },
  openGraph: {
    title: "Asbestos Surveys Leeds | OwlSafe",
    description:
      "Fast quotes for asbestos surveys in Leeds. Management, refurbishment, demolition and reinspection surveys arranged through qualified surveyors.",
    url: "https://www.owlsafe.co.uk/",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OwlSafe",
  url: "https://www.owlsafe.co.uk/",
  description:
    "OwlSafe helps arrange asbestos survey quotes in Leeds for residential, landlord, commercial and managed properties.",
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
  serviceType: [
    "Asbestos management surveys",
    "Asbestos refurbishment surveys",
    "Asbestos demolition surveys",
    "Asbestos reinspections",
  ],
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
      <HomePageClient />
    </>
  );
}