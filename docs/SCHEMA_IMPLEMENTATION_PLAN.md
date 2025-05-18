# Schema Markup Implementation Plan

## 1. Home Page Implementation
**Schema Types**: WebSite + LocalBusiness

**Data Sources**:
- Business name: `src/app/layout.tsx` (site title)
- Contact info: Hardcoded in schema
- Address: Hardcoded in schema

**Implementation Steps**:
1. Create `components/seo/HomeSchema.tsx`
2. Add JSON-LD script to `src/app/page.tsx`
3. Validate using Google Rich Results Test

## 2. Product Pages Implementation
**Schema Types**: Product + Offer

**Data Sources**:
- Product data: `src/lib/products.ts`
- Images: `public/images/` directory

**Implementation Steps**:
1. Create dynamic schema component `components/seo/ProductSchema.tsx`
2. Pass product data as props from `[slug]/page.tsx`
3. Generate JSON-LD based on product type (water/subscription)

## 3. Shop Page Implementation
**Schema Types**: CollectionPage + ItemList

**Data Sources**:
- Product list: `getAllProducts()` from `src/lib/products.ts`
- Page metadata: `src/app/shop/page.tsx`

**Implementation Steps**:
1. Create `components/seo/ShopSchema.tsx`
2. Map products to ItemList format
3. Add to shop page layout

## 4. Cart Page Implementation
**Schema Types**: BreadcrumbList + Order

**Data Sources**:
- Cart items: `CartContext`
- Order details: Checkout completion data

**Implementation Steps**:
1. Create conditional schema component
2. Show basic BreadcrumbList by default
3. Show Order schema after checkout completion

## 5. Subscription Pages Implementation
**Schema Types**: Product + Subscription

**Data Sources**:
- Subscription products: Filtered from `src/lib/products.ts`
- Pricing details: Product objects

**Implementation Steps**:
1. Create `components/seo/SubscriptionSchema.tsx`
2. Add to both listing and detail pages
3. Include billing frequency details

## 6. Articles Implementation
**Schema Types**: Article + BlogPosting

**Data Sources**:
- Article content: MDX files
- Author info: Hardcoded organization

**Implementation Steps**:
1. Create schema generator for MDX content
2. Add publication dates to frontmatter
3. Validate with structured data testing tool

## Testing Plan

1. **Validation**:
   - Test each page type with Google's Rich Results Test
   - Verify all required fields are present

2. **Performance**:
   - Check schema script loading impact
   - Ensure async loading where possible

3. **Monitoring**:
   - Set up Search Console monitoring
   - Track rich result impressions

## Timeline

| Phase | Tasks | Duration |
|-------|-------|----------|
| 1 | Home + Product pages | 2 days |
| 2 | Shop + Cart pages | 1 day |
| 3 | Subscription + Article pages | 1 day |
| 4 | Testing + Validation | 1 day |

## Responsibilities

- **Frontend Team**: Component implementation
- **Content Team**: Data accuracy verification
- **SEO Team**: Validation and monitoring