import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
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
  }
};

export default nextConfig;
