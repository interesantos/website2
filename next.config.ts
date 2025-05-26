import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://samuiwater.com' : '',
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
