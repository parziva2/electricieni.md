// Import next-intl plugin correctly - this is the proper way to import it
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as a standalone app for better deployment
  output: 'standalone',
  
  // Configure images for remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Support strict mode for better development
  reactStrictMode: true,
};

// Apply the next-intl plugin to the Next.js config
module.exports = withNextIntl(nextConfig); 