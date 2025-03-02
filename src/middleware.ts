import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/request';

// This is a more stable middleware configuration
export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … if they contain a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/` and `/icon`
    '/(en|ro|ru)/:path*'
  ]
}; 