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

module.exports = nextConfig; 