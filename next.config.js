const { createNextIntlPlugin } = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as a static website for better performance
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
  
  // Experimental features
  experimental: {
    // Enable turbo for better development experience
    turbo: {
      rules: {
        // Configure Turbopack loaders
      },
    },
  },
};

// Export the configuration with next-intl plugin
module.exports = withNextIntl(nextConfig); 