const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Support both server and client component rendering
  reactStrictMode: true,
  
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Experimental features for better performance
  experimental: {
    // Use Turbopack when running dev server
    turbo: true,
  },
};

module.exports = withNextIntl({
  // Other Next.js config options
  ...nextConfig,
}); 