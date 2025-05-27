import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['samuiwater.com', 'localhost'],
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
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  },
  // Ensure static files are served correctly
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true
};

export default nextConfig;
