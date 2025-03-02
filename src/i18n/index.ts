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

// Get messages for a specific locale
async function getMessages(locale: string) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

// Configure request handling
export default getRequestConfig(async ({locale: _locale}) => {
  const messages = await getMessages(_locale || defaultLocale);

  return {
    messages,
    timeZone: 'Europe/Chisinau',
    now: new Date()
  };
}); 