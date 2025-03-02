import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['ro', 'ru'] as const;
export const defaultLocale = 'ro' as const;

export type Locale = typeof locales[number];

// Create shared navigation instance
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
  locales,
  defaultLocale
});

// Configure request handling
export default getRequestConfig(async ({locale}) => {
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  try {
    return {
      locale,
      messages: (await import(`./locales/${locale}.json`)).default,
      timeZone: 'Europe/Chisinau',
      now: new Date()
    };
  } catch {
    notFound();
  }
}); 