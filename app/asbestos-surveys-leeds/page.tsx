import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Surveys Leeds | OwlSafe",
  description:
    "Asbestos surveys in Leeds for homes, landlords & commercial properties | Management, refurbishment, demolition & reinspection surveys →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-surveys-leeds",
  },
  openGraph: {
    title: "Asbestos Surveys Leeds | OwlSafe",
    description:
      "Arrange asbestos surveys in Leeds for homes, landlords, commercial buildings and managed properties.",
    url: "https://www.owlsafe.co.uk/asbestos-surveys-leeds",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Asbestos Surveys Leeds",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  about: {
    "@type": "Thing",
    name: "Asbestos surveys",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
  description:
    "OwlSafe helps arrange asbestos survey quotes in Leeds, including management, refurbishment, demolition and reinspection surveys.",
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