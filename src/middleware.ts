import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: defaultLocale,

  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 