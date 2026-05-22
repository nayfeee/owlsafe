import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Do I Need an Asbestos Survey? | OwlSafe",
  description:
    "Free asbestos survey checker for Leeds properties | Understand whether you may need a management, refurbishment, demolition or reinspection survey →",
  alternates: {
    canonical:
      "https://www.owlsafe.co.uk/do-i-need-an-asbestos-survey",
  },
  openGraph: {
    title: "Do I Need an Asbestos Survey? | OwlSafe",
    description:
      "Use OwlSafe's step-by-step asbestos survey checker to understand whether your property or project may require an asbestos survey.",
    url: "https://www.owlsafe.co.uk/do-i-need-an-asbestos-survey",
    siteName: "OwlSafe",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Do I Need an Asbestos Survey?",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
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
    "An interactive asbestos survey checker designed to help property owners, landlords and businesses understand whether an asbestos survey may be required.",
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