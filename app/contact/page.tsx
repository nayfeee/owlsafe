import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Contact OwlSafe | Asbestos Survey Enquiries",
  description:
    "Contact OwlSafe for asbestos survey enquiries across Leeds & surrounding areas | Quotes, property advice & survey guidance →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/contact",
  },
  openGraph: {
    title: "Contact OwlSafe | Asbestos Survey Enquiries",
    description:
      "Contact OwlSafe about asbestos survey enquiries across Leeds and surrounding areas for quotes, property questions and survey guidance.",
    url: "https://www.owlsafe.co.uk/contact",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact OwlSafe",
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
    "Contact OwlSafe for asbestos survey enquiries, quotes, property questions and survey guidance across Leeds and surrounding areas.",
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