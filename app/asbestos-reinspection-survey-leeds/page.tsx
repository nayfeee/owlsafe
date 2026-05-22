import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Reinspection Survey Leeds | OwlSafe",
  description:
    "Asbestos reinspection surveys in Leeds for landlords, managed & commercial properties | Ongoing monitoring & compliance reporting →",
  alternates: {
    canonical:
      "https://www.owlsafe.co.uk/asbestos-reinspection-survey-leeds",
  },
  openGraph: {
    title: "Asbestos Reinspection Survey Leeds | OwlSafe",
    description:
      "Arrange asbestos reinspection surveys in Leeds for commercial buildings, landlords and managed premises.",
    url: "https://www.owlsafe.co.uk/asbestos-reinspection-survey-leeds",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Reinspection Survey Leeds",
  serviceType: "Asbestos reinspection survey",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
  description:
    "OwlSafe helps arrange asbestos reinspection survey quotes in Leeds for landlords, managed buildings and commercial premises requiring ongoing asbestos monitoring and compliance reporting.",
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