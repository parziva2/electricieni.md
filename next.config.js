// Import the createNextIntlPlugin function
const { createNextIntlPlugin } = require('next-intl/plugin');

// Create the next-intl plugin with explicit path
const withNextIntl = createNextIntlPlugin('./src/i18n/i18n-config.js');

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

// Apply the plugin to the Next.js configuration
module.exports = withNextIntl(nextConfig); 