"use client";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function getOrgSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pensiunea Perla Brazilor",
    url: baseUrl,
    logo: `${baseUrl}/images/ui/logo.png`,
    description: "A welcoming guesthouse in Frumosu, Suceava, Romania. Authentic hospitality, traditional food, and complete tranquility in the heart of Bucovina.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Principala 1A",
      addressLocality: "Frumosu",
      addressRegion: "Suceava",
      postalCode: "727295",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.35,
      longitude: 25.0833,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40750490838",
      contactType: "reservations",
      availableLanguage: ["Romanian", "English", "Italian"],
    },
    sameAs: [
      "https://www.facebook.com/PerlaBrazilor",
      "https://www.instagram.com/perlabrazilor",
    ],
  };
}

function getBusinessSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Pensiunea Perla Brazilor",
    alternateName: "Perla Brazilor Guesthouse",
    description: "Traditional guesthouse in Bucovina with spa, restaurant, and authentic Romanian hospitality.",
    url: baseUrl,
    logo: `${baseUrl}/images/ui/logo.png`,
    telephone: "+40750490838",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Principala 1A",
      addressLocality: "Frumosu",
      addressRegion: "Suceava",
      postalCode: "727295",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.35,
      longitude: 25.0833,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: "4",
      bestRating: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Breakfast Included", value: true },
      { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    ],
  };
}

export function OrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.perlabrazilor.com";
  return <JsonLd data={getOrgSchema(baseUrl)} />;
}

export function LocalBusinessJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.perlabrazilor.com";
  return <JsonLd data={getBusinessSchema(baseUrl)} />;
}