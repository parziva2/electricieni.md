import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// This is a more stable middleware configuration
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  // Always use prefix for better SEO and clarity
  localePrefix: 'always',
  // Use cookie for locale detection
  localeDetection: true,
  // Define all the pathnames that should be handled
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/about': '/about',
    '/contact': '/contact'
  }
});

// Match all paths except static files, api routes, etc
export const config = {
  matcher: [
    // Match all pathnames except for
    // - API routes (/api/*)
    // - Static files (/_next/*, /static/*, /favicon.ico, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all localized pathnames
    '/(ro|ru)/:path*'
  ]
}; 