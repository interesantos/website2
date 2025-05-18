# Unified Font Strategy

## Current Implementation
- Using Rajdhani from Google Fonts
- Imported in layout.tsx with weights 300-700
- Set as default sans font in globals.css
- No inline font-family declarations found

## Font Usage Guidelines
1. Always use Tailwind's font-sans class
2. Never use inline font-family styles
3. Available weights:
   - font-light (300)
   - font-normal (400)
   - font-medium (500)
   - font-semibold (600)
   - font-bold (700)

## Implementation Details
- See layout.tsx for font import
- See globals.css for theme configuration