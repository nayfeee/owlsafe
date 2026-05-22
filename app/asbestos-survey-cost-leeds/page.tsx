import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Survey Cost Leeds | OwlSafe",
  description:
    "Typical asbestos survey costs in Leeds | Management, refurbishment, demolition & reinspection survey pricing guide →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/asbestos-survey-cost-leeds",
  },
  openGraph: {
    title: "Asbestos Survey Cost Leeds | OwlSafe",
    description:
      "See typical asbestos survey costs in Leeds for management, refurbishment, demolition and reinspection surveys, plus what affects pricing.",
    url: "https://www.owlsafe.co.uk/asbestos-survey-cost-leeds",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Asbestos Survey Cost Leeds",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  about: {
    "@type": "Thing",
    name: "Asbestos survey costs",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
  description:
    "A guide to typical asbestos survey costs in Leeds, including management, refurbishment, demolition and reinspection surveys, plus factors affecting pricing.",
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