import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.owlsafe.co.uk";

  const routes = [
    "",
    "/quote",
    "/areas-we-cover",
    "/asbestos-surveys-leeds",
    "/asbestos-management-survey-leeds",
    "/asbestos-refurbishment-survey-leeds",
    "/asbestos-demolition-survey-leeds",
    "/asbestos-reinspection-survey-leeds",
    "/asbestos-survey-cost-leeds",
    "/asbestos-survey-leeds-city-centre",
    "/asbestos-survey-headingley",
    "/asbestos-survey-horsforth",
    "/asbestos-survey-roundhay",
    "/asbestos-survey-pudsey",
    "/asbestos-survey-morley",
    "/asbestos-survey-garforth",
    "/asbestos-survey-otley",
    "/asbestos-survey-rothwell",
    "/asbestos-survey-wetherby",
    "/privacy-policy",
    "/terms-and-conditions",
    "/do-i-need-an-asbestos-survey",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}