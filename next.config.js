/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Disable server components since we're doing static export
  experimental: {
    appDir: false,
  }
};

module.exports = nextConfig; 