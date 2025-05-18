# Fallback Directory Removal Plan

## Overview
Remove all non-localized fallback routes to enforce consistent i18n routing.

## Affected Directories
- src/app/cart
- src/app/contact  
- src/app/privacy
- src/app/products
- src/app/resources
- src/app/reviews
- src/app/shop
- src/app/subscriptions
- src/app/terms
- src/app/why-us

## Implementation Steps

1. **Middleware Update** (requires Code mode)
   - Remove fallback route handling
   - Ensure all redirects include locale prefix
   - Update matcher config if needed

2. **Directory Removal**
   - Delete all non-localized page.tsx files
   - Keep only localized versions under [lang] subdirectories

3. **Testing**
   - Verify all routes redirect properly
   - Check SEO impact (301 redirects)
   - Test language switching functionality

## Rollback Plan
1. Restore from git backup
2. Revert middleware changes
3. Verify all routes work as before