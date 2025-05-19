# Build Fixes Plan

## Critical Issues (Blocking Deployment)
1. **Unused Variables/Imports**:
   - Remove unused imports/variables in:
     - `src/app/[lang]/bottled-drinking-water-delivery/[slug]/page.tsx`
     - `src/app/[lang]/bottled-drinking-water-delivery/products/[slug]/page.tsx`
     - `src/app/[lang]/layout.tsx`
     - `src/app/layout.tsx`
     - `src/components/cart/DeliveryAddress.tsx`
     - `src/components/home/ProductHighlights.tsx`
     - `src/components/home/Subscriptions.tsx`
     - `src/components/home/WhyChooseUs.tsx`
     - `src/components/layout/Footer.tsx`
     - `src/components/products/ProductDetails.tsx`
     - `src/components/subscriptions/SubscriptionPlans.tsx`

## High Priority Issues
2. **Image Optimization**:
   - Replace all `<img>` tags with Next.js `<Image>` component in:
     - `src/app/[lang]/contact/page.tsx`
     - `src/components/home/TrustAndCompliance.tsx`
     - `src/components/layout/Footer.tsx`

## Medium Priority Issues
3. **Unescaped Entities**:
   - Escape special characters in text content in:
     - `src/app/[lang]/privacy/page.tsx`
     - `src/components/home/CustomerStories.tsx`
     - `src/components/home/FinalCTA.tsx`
     - `src/components/home/HowItWorks.tsx`
     - `src/components/home/ProductHighlights.tsx`
     - `src/components/home/Resources.tsx`
     - `src/components/home/TrustAndCompliance.tsx`

## Implementation Steps
1. First fix all critical unused variable issues
2. Then address image optimization
3. Finally handle unescaped entities
4. Run `npm run build` after each category to verify fixes

Estimated Time: 1-2 hours