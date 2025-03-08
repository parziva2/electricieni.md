/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Basic configuration
  reactStrictMode: true,
  trailingSlash: false,
};

// Use the standard plugin import method
const withNextIntl = require('next-intl/plugin')();

// Apply the plugin to the Next.js configuration
module.exports = withNextIntl(nextConfig); 