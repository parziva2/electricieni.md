import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// Export a middleware that handles internationalization
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // The default locale to fallback to
  defaultLocale,
  // Always use prefix for better SEO
  localePrefix: 'always',
});

// This defines which pages will be handled by the middleware
export const config = {
  // Match all paths except images, files, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 