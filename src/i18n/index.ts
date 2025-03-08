import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales, defaultLocale, pathnames} from './config';

// Load messages for a specific locale
export async function getMessages(locale: string) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

// Create shared navigation utilities
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
  locales,
  defaultLocale
});

// Export a request config that next-intl will use
export default getRequestConfig(async ({requestLocale}) => {
  // Handle null or undefined properly
  const resolvedLocale = (await requestLocale) ?? defaultLocale;
  
  // Validate the locale is supported
  if (!locales.includes(resolvedLocale as any)) {
    throw new Error(`Locale ${resolvedLocale} is not supported`);
  }
  
  return {
    locale: resolvedLocale,
    messages: await getMessages(resolvedLocale),
    timeZone: 'Europe/Chisinau',
    now: new Date(),
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      },
      number: {
        currency: {
          style: 'currency',
          currency: 'MDL'
        }
      }
    }
  };
}); 