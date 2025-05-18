'use client';
import BaseSchema from './BaseSchema';

export default function HomeSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SamuiWater",
    "url": "https://samuiwater.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://samuiwater.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "WaterDeliveryService",
    "name": "SamuiWater",
    "image": "https://samuiwater.com/logo.png",
    "telephone": "+66-XX-XXX-XXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Koh Samui",
      "addressRegion": "Surat Thani",
      "postalCode": "84320",
      "addressCountry": "TH"
    }
  };

  return (
    <>
      <BaseSchema schema={websiteSchema} />
      <BaseSchema schema={businessSchema} />
    </>
  );
}