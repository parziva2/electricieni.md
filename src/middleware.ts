import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames } from './i18n/config';

// Create a robust middleware for handling internationalization
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Always use prefix for better SEO and clarity
  localePrefix: 'always',
  
  // Enable locale detection from the Accept-Language header
  localeDetection: true,
  
  // Define all the pathnames that should be handled
  pathnames
});

// Match all paths except for:
// 1. Static files (/_next/*, etc.)
// 2. API routes (/api/*)
// 3. Files with extensions (*.jpg, *.png, etc.)
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - and files with extensions (.jpg, .png, etc.)
    '/((?!api|_next/static|_next/image|favicon\\.|\\.[^/]+$).*)'
  ]
}; 