import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Asbestos Refurbishment Survey Leeds | OwlSafe",
  description:
    "Asbestos refurbishment surveys in Leeds for renovations, rewires & intrusive works | Fast quotes from qualified surveyors →",
  alternates: {
    canonical:
      "https://www.owlsafe.co.uk/asbestos-refurbishment-survey-leeds",
  },
  openGraph: {
    title: "Asbestos Refurbishment Survey Leeds | OwlSafe",
    description:
      "Arrange asbestos refurbishment surveys in Leeds before renovation, rewiring, strip-out or intrusive building works.",
    url: "https://www.owlsafe.co.uk/asbestos-refurbishment-survey-leeds",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Refurbishment Survey Leeds",
  serviceType: "Asbestos refurbishment survey",
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
    "OwlSafe helps arrange asbestos refurbishment survey quotes in Leeds before renovations, rewiring, strip-outs and intrusive building works.",
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