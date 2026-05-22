import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Areas We Cover | OwlSafe Leeds",
  description:
    "Asbestos surveys across Leeds & surrounding areas | City Centre, Headingley, Horsforth, Pudsey, Roundhay, Morley & more →",
  alternates: {
    canonical: "https://www.owlsafe.co.uk/areas-we-cover",
  },
  openGraph: {
    title: "Areas We Cover | OwlSafe Leeds",
    description:
      "Arrange asbestos survey enquiries across Leeds and surrounding areas including Headingley, Horsforth, Roundhay, Pudsey, Morley, Garforth, Rothwell, Otley and Wetherby.",
    url: "https://www.owlsafe.co.uk/areas-we-cover",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Areas We Cover",
  provider: {
    "@type": "Organization",
    name: "OwlSafe",
    url: "https://www.owlsafe.co.uk/",
  },
  about: {
    "@type": "Thing",
    name: "Asbestos surveys in Leeds",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Leeds",
    },
    {
      "@type": "Place",
      name: "Headingley",
    },
    {
      "@type": "Place",
      name: "Horsforth",
    },
    {
      "@type": "Place",
      name: "Roundhay",
    },
    {
      "@type": "Place",
      name: "Pudsey",
    },
    {
      "@type": "Place",
      name: "Morley",
    },
  ],
  description:
    "OwlSafe helps arrange asbestos survey quotes across Leeds and surrounding areas for residential, landlord and commercial properties.",
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