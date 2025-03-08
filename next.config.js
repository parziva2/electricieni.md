/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export
  output: 'export',
  
  // Disable image optimization since it's not compatible with static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // For better development experience
  reactStrictMode: true,
  
  // This helps with i18n routes
  trailingSlash: false,
  
  // Disable middleware since it's not compatible with static export
  skipMiddlewareUrlNormalization: true,
  skipTrailingSlashRedirect: true,
};

// Using next-intl with minimal configuration
const withNextIntl = require('next-intl/plugin')();
module.exports = withNextIntl(nextConfig); 