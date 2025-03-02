import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/config';

// This is a more stable middleware configuration
export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 