# Samui Water Delivery

A Next.js e-commerce platform for bottled water delivery services in Koh Samui, Thailand.

## Features

- Multi-language support (i18n)
- Product catalog with detailed pages
- Subscription management
- Shopping cart functionality
- Customer reviews system
- SEO optimized pages with schema markup
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm/bun
- Vercel account (for deployment)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/samuiwater.git
cd samuiwater

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
```

### Development
```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Configuration

Edit `.env.local` to configure:
- API endpoints
- Payment gateway settings
- Email service credentials

## Project Structure

Key directories:
- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/lib/` - Utility functions
- `public/` - Static assets
- `docs/` - Architecture and planning documents

## Deployment

The project is configured for Vercel deployment:

1. Push to your GitHub repository
2. Connect to Vercel
3. Set up environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
