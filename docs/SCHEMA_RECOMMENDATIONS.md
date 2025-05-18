# Schema Markup Recommendations for SamuiWater.com

## Home Page
**Recommended Schema**: `WebSite` + `LocalBusiness`

### WebSite Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SamuiWater",
  "url": "https://samuiwater.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://samuiwater.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### LocalBusiness Schema
```json
{
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
}
```

## Product Pages
**Recommended Schema**: `Product` + `Offer`

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "7-Day 18L Pack (1.5L x 12 Bottles)",
  "description": "Ideal for 7-day Koh Samui getaways...",
  "brand": {
    "@type": "Brand",
    "name": "SamuiWater"
  },
  "offers": {
    "@type": "Offer",
    "price": "400",
    "priceCurrency": "THB",
    "availability": "https://schema.org/InStock"
  }
}
```

## Cart Page
**Recommended Schema**: `BreadcrumbList` + `Order`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Cart",
    "item": "https://samuiwater.com/cart"
  }]
}

// For completed orders:
{
  "@context": "https://schema.org",
  "@type": "Order",
  "orderNumber": "12345",
  "priceCurrency": "THB",
  "price": "900",
  "acceptedOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "7-Day Water Pack"
    }
  }
}
```

## Subscription Pages
**Recommended Schema**: `Product` + `Subscription`

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Weekly 18L Delivery Subscription",
  "description": "Weekly delivery of 12 1.5L bottles...",
  "offers": {
    "@type": "Offer",
    "price": "350",
    "priceCurrency": "THB",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "billingDuration": "P1W",
      "priceType": "Subscription"
    }
  }
}
```

## Shop Page
**Recommended Schema**: `CollectionPage` + `ItemList`

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "SamuiWater Shop",
  "description": "Browse our selection of water products",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "url": "/products/7-day-1.5L",
          "name": "7-Day Pack"
        }
      }
    ]
  }
}
```

## Articles/Resources
**Recommended Schema**: `Article` + `BlogPosting`

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Staying Hydrated in Koh Samui",
  "description": "Tips for proper hydration in tropical climate",
  "author": {
    "@type": "Organization",
    "name": "SamuiWater"
  },
  "datePublished": "2025-05-01",
  "publisher": {
    "@type": "Organization",
    "name": "SamuiWater"
  }
}
```

## Subscriptions Page
**Recommended Schema**: `CollectionPage` + `OfferCatalog`

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Water Subscriptions",
  "description": "Choose your water delivery plan",
  "mainEntity": {
    "@type": "OfferCatalog",
    "name": "Subscription Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weekly Delivery"
        }
      }
    ]
  }
}
```

## Implementation Recommendations

1. **Dynamic Generation**:
   - Generate schema JSON server-side based on page content
   - Use NextJS Script component to inject JSON-LD

2. **Validation**:
   - Test all schema markup using Google's Rich Results Test
   - Ensure all required fields are populated

3. **Performance**:
   - Load schema asynchronously
   - Minify JSON output

4. **Maintenance**:
   - Keep schema updated with product changes
   - Monitor for new schema.org updates