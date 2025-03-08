/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for catching more issues during development
  reactStrictMode: true,
  
  // Configure remote images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

// Apply the next-intl plugin
const withNextIntl = require('next-intl/plugin')();
module.exports = withNextIntl(nextConfig); 