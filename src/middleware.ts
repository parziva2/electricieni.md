import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale, pathnames} from './i18n/config';

// This middleware handles locale detection and routing
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  // Always use prefix for better SEO and clarity
  localePrefix: 'always',
  // Enable locale detection
  localeDetection: true,
  // Define all the pathnames that should be handled
  pathnames,
});

// Match all paths except static files, api routes, etc
export const config = {
  matcher: [
    // Match all pathnames except for
    // - API routes (/api/*)
    // - Static files (/_next/*, /_vercel/*, /static/*, /favicon.ico, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
}; 