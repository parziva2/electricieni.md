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
  
  // This is critical for Vercel deployments with i18n
  trailingSlash: false,
  
  // Ensure output is optimized for Vercel
  output: 'export',
  
  // Disable image optimization for static export
  unoptimized: true,
};

// Apply the next-intl plugin
const withNextIntl = require('next-intl/plugin')();
module.exports = withNextIntl(nextConfig); 