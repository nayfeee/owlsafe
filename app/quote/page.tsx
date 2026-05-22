import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Get an Asbestos Survey Quote Leeds | OwlSafe",
  description:
    "Request an asbestos survey quote in Leeds | Management, refurbishment, demolition & reinspection surveys →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/quote",
  },
  openGraph: {
    title: "Get an Asbestos Survey Quote Leeds | OwlSafe",
    description:
      "Request a fast asbestos survey quote in Leeds for residential, commercial and managed properties.",
    url: "https://www.owlsafe.co.uk/quote",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Get an Asbestos Survey Quote",
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
    "Request asbestos survey quotes in Leeds for management, refurbishment, demolition and reinspection surveys across residential, commercial and managed properties.",
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