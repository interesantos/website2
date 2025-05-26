import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['samuiwater.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://samuiwater.com' : undefined,
  i18n: {
    locales: ['en', 'de', 'fr', 'es', 'it', 'ru', 'th'],
    defaultLocale: 'en',
    localeDetection: false
  },
  trailingSlash: true,
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true
};

export default nextConfig;
