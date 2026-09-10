import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://rafaqatbabar.com";
  const paths = [
    "",
    "/about",
    "/services",
    "/services/audit-assurance",
    "/services/taxation-compliance",
    "/services/advisory",
    "/services/accounting-business-support",
    "/services/corporate-campaign",
    "/team",
    "/insights",
    "/locations/peshawar",
    "/locations/islamabad",
    "/locations/kabul",
    "/contact",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
