# Internationalization Migration Checklist

## Directory Structure Changes
- [ ] Create `[lang]` directory under `src/app`
- [ ] Move existing pages to appropriate language directories:
  - [ ] `page.tsx` → `[lang]/page.tsx`
  - [ ] `shop/page.tsx` → `[lang]/shop/page.tsx`
  - [ ] `subscriptions/page.tsx` → `[lang]/subscriptions/page.tsx`
  - [ ] `products/[slug]/page.tsx` → `[lang]/products/[slug]/page.tsx`
  - [ ] `cart/page.tsx` → `[lang]/cart/page.tsx`
  - [ ] `contact/page.tsx` → `[lang]/contact/page.tsx`
  - [ ] `privacy/page.tsx` → `[lang]/privacy/page.tsx`
  - [ ] `resources/page.tsx` → `[lang]/resources/page.tsx`
  - [ ] `resources/[slug]/page.tsx` → `[lang]/resources/[slug]/page.tsx`
  - [ ] `reviews/page.tsx` → `[lang]/reviews/page.tsx`
  - [ ] `terms/page.tsx` → `[lang]/terms/page.tsx`
  - [ ] `why-us/page.tsx` → `[lang]/why-us/page.tsx`

## Configuration Updates
- [ ] Verify i18n settings in `next.config.ts` (already completed)
- [ ] Update TypeScript configuration if needed

## Component Modifications
- [ ] Update `Header.tsx` (already completed)
- [ ] Modify `Layout.tsx` to handle language context
- [ ] Create language context provider if needed

## Link Updates
- [ ] Update all internal `Link` components to include language prefix
- [ ] Update dynamic route generation
- [ ] Update API routes if applicable

## Content Management
- [ ] Create translation files structure
- [ ] Implement language-specific content loading
- [ ] Set up fallback for missing translations

## Testing
- [ ] Verify all routes work with language prefixes
- [ ] Test language switching functionality
- [ ] Check dynamic routes with all supported languages
- [ ] Verify SEO tags are language-specific

## Deployment
- [ ] Update deployment configuration
- [ ] Set up redirects for old URLs
- [ ] Monitor for 404 errors post-deployment

## Timeline
1. Day 1: Directory restructuring and basic routing
2. Day 2: Component updates and link modifications
3. Day 3: Content management implementation
4. Day 4: Testing and final adjustments
5. Day 5: Deployment and monitoring