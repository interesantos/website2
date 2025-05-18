# SamuiWater.com Architecture Documentation

## System Overview
A NextJS 15 e-commerce platform for bottled water delivery in Koh Samui, Thailand. Features product catalog, shopping cart, checkout flow, and subscription management.

## Technical Stack
- **Framework**: NextJS 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Image Optimization**: Next/Image

## Directory Structure
```
src/
├── app/                  # App router pages
│   ├── [lang]/           # Internationalized routes (en/th)
│   │   ├── bottled-drinking-water-delivery/       # Product pages
│   │   │   └── [slug]/                           # Product variants
│   │   ├── bottled-drinking-water-delivery-subscription/  # Subscription pages
│   │   │   └── [slug]/                           # Subscription variants
│   │   ├── cart/                                 # Shopping cart
│   │   ├── contact/                              # Contact page
│   │   ├── privacy/                              # Privacy policy
│   │   ├── resources/                            # Resources
│   │   │   └── [slug]/                          # Resource articles
│   │   ├── reviews/                              # Customer reviews
│   │   ├── terms/                                # Terms of service
│   │   └── why-us/                               # Value proposition
├── components/
│   ├── cart/             # Checkout components
│   ├── home/             # Landing page sections
│   ├── layout/           # Layout components
│   ├── products/         # Product UI components
│   ├── seo/              # Schema.org components
│   └── subscriptions/   # Subscription components
├── context/              # Global state
├── lib/                  # Business logic
├── public/               # Static assets
└── types/                # Type definitions
```

## Internationalization (i18n)
- Uses NextJS 15 built-in i18n routing
- Language prefix required in all paths (/en/, /th/)
- No fallback routes - all requests must include locale
- Middleware enforces locale prefix and redirects to default locale

### Fallback Routes Purpose
The non-prefixed routes serve several important functions:
1. **SEO Preservation**: Maintain search rankings for existing URLs
2. **Marketing Links**: Support campaigns using simple URLs
3. **Legal Compliance**: Ensure privacy/terms pages are always accessible
4. **Legacy Support**: Handle old bookmarks and external references
5. **Error Recovery**: Redirect when language detection fails

Fallback routes automatically redirect to the appropriate localized version when:
- The user has language preferences set
- The middleware detects their language
- They're accessing from a region-specific campaign

## Core Components

### 1. Cart System
- **CartContext**: Manages cart state, quantities, and subscriptions
- **CartPage**: Displays items, handles quantity updates
- **PaymentModal**: Credit card input and processing

### 2. Product System
- **Product Types**: 
  - `WaterProduct`: Volume, bottle size, duration
  - `SubscriptionProduct`: Frequency, savings
- **ProductDetails**: Dynamic product display

### 3. Checkout Flow
1. Delivery address collection
2. Email validation
3. Payment processing
4. Order confirmation

## Data Flow
1. Products loaded from `lib/products.ts`
2. Added to cart via `CartContext`
3. Checkout collects:
   - Delivery address
   - Validated email
4. Payment processed via modal

## Key Features
- **Internationalization**: Multi-language support via [lang] routes
- **SEO Optimization**: Structured data via schema.org components
- **Responsive Design**: Mobile-first approach
- **Form Validation**: Real-time email validation
- **Image Optimization**: Automatic resizing and format selection
- **Subscription Management**: Recurring billing indicators

## Page Details

### Home Page (`/`)
- **Components**:
  - Hero: Main promotional banner
  - ProductHighlights: Featured water products
  - WhyChooseUs: Value proposition sections
  - Subscriptions: Plan comparison
  - HowItWorks: Process explanation
- **Behavior**: Static content with dynamic product data

### Shop Page (`/bottled-drinking-water-delivery`)
- **Components**:
  - Reuses Hero with custom text
  - ProductHighlights showing all products
- **Behavior**: Displays full product catalog

### Product Detail Page (`/bottled-drinking-water-delivery/[slug]`)
- **Components**:
  - ProductDetails: Image gallery, description, add-to-cart
- **Behavior**: Dynamic route for each product variant

### Cart Page (`/cart`)
- **Components**:
  - DeliveryAddress: Geolocation input
  - ReceiptEmail: Validated email input
  - PaymentModal: Credit card processing
- **State**:
  - Manages cart items via CartContext
  - Validates checkout fields

### Subscription Pages
- `/bottled-drinking-water-delivery-subscription`: Lists all plans
- `/bottled-drinking-water-delivery-subscription/[slug]`: Detail view for each plan

### Static Pages
- Contact, Privacy, Terms: Basic content pages

## Component Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Navigation
│   │   └── CartIndicator
│   └── Footer
├── PageRouter
│   ├── HomePage
│   ├── ShopPage
│   ├── ProductPage
│   └── CartPage
└── CartProvider (Context)
```

## Data Flows

### Product Data Flow
1. Static product data loaded from `lib/products.ts`
2. Accessed via `getAllProducts()` and `getProductBySlug()`
3. Rendered in Product components with image optimization
4. Added to cart via CartContext

### Cart Data Flow
1. Items stored in CartContext state
2. Persisted in browser localStorage
3. Quantity updates trigger re-renders
4. Checkout collects:
   - Delivery address (plain text)
   - Validated email
   - Payment token (via modal)

### Checkout Flow
1. Client-side validation of all fields
2. Payment data collected in isolated modal
3. Order confirmation shown after submission

## Implemented Best Practices

### SEO
- Schema.org markup for all pages
- Dynamic structured data generation
- SEO-optimized component hierarchy

### Performance
- NextJS Image optimization
- Dynamic imports for heavy components
- Client-side routing
- Code splitting via App Router

### Security
- Client-side form validation
- Payment data isolated in modal
- No sensitive data in URLs
- Type-safe operations

### Maintainability
- TypeScript for type safety
- Modular component structure
- Clear separation of concerns
- Comprehensive documentation

## Security Considerations

### Data Protection
- No sensitive data stored client-side
- Payment processing handled externally
- Email validation with regex patterns

### Potential Vulnerabilities
1. XSS:
   - Mitigated by React's DOM sanitization
   - Input validation on all forms
2. CSRF:
   - Protected by NextJS built-in mechanisms
3. Data Exposure:
   - Minimal data stored in localStorage
   - No API keys exposed client-side

### Recommendations
- Implement rate limiting
- Add CSP headers
- Consider server-side validation
- Regular dependency audits

## Dependencies
- next
- react
- react-dom
- typescript
- tailwindcss
- next/font (Geist fonts)