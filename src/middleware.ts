// MIDDLEWARE IS COMPLETELY DISABLED FOR STATIC EXPORT
// Using vercel.json routing instead

// This file is intentionally empty to disable middleware
// If you need to use middleware, remove "output: 'export'" from next.config.js

// IMPORTANT: Middleware is commented out because it's not compatible with static export
// If you want to use middleware, you need to remove "output: 'export'" from next.config.js

// Middleware is disabled in favor of using vercel.json for routing in static export mode

/*
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// This middleware is responsible for handling language detection and routing
export default createMiddleware({
  // List of supported locales
  locales,
  // Default locale to use when a locale isn't found
  defaultLocale,
  // Always use a locale prefix in URLs for better SEO
  localePrefix: 'always'
});

// Configure which routes are handled by this middleware
export const config = {
  // Match all paths except api routes and static files
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
*/ 