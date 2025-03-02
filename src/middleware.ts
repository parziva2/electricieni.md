import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/config';

// This is a more stable middleware configuration
export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always'
});

// Specify which paths should be handled by the middleware
export const config = {
  matcher: [
    // Match all paths except api, _next, static files, etc.
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Also match the root path
    '/'
  ]
}; 