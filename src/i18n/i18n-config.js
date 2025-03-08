// This file is used by the createNextIntlPlugin
// It provides config without using middleware

module.exports = {
  locales: ['ro', 'ru'],
  defaultLocale: 'ro',
  localeDetection: false, // Disable auto-detection for static export
} 