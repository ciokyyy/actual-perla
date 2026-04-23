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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pensiunea Perla Brazilor",
  url: "https://www.perlabrazilor.com",
  logo: "https://www.perlabrazilor.com/images/ui/logo.png",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Pensiunea Perla Brazilor",
  alternateName: "Perla Brazilor Guesthouse",
  description: "Traditional guesthouse in Bucovina with spa, restaurant, and authentic Romanian hospitality.",
  url: "https://www.perlabrazilor.com",
  logo: "https://www.perlabrazilor.com/images/ui/logo.png",
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

export function OrganizationJsonLd() {
  return <JsonLd data={organizationSchema} />;
}

export function LocalBusinessJsonLd() {
  return <JsonLd data={localBusinessSchema} />;
}