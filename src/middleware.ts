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