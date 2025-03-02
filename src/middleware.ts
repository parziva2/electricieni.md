import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/config';

// This is a more stable middleware configuration
export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always',
  // Add default locale to pathname
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/about': '/about',
    '/contact': '/contact'
  }
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/', '/(ro|ru)/:path*']
}; 