import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.perlabrazilor.com";
  
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/cgi-bin/", "/api/", "/_next/"],
        allow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}