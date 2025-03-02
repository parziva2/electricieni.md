import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// This is a more stable middleware configuration
export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always',
  // This configures the locale detection
  localeDetection: true,
  // Add default locale to pathname
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/about': '/about',
    '/contact': '/contact'
  }
});

// Update the matcher configuration to be more precise
export const config = {
  matcher: ['/', '/(ro|ru)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}; 