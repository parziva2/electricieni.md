import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales, defaultLocale} from './config';

// This function can be used to get messages for a specific locale
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
export default getRequestConfig(async () => {
  const messages = await getMessages(defaultLocale);
  const now = new Date();

  // Return the config object with the locale from requestLocale
  return {
    defaultLocale,
    messages,
    timeZone: 'Europe/Chisinau',
    now,
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      }
    },
    onError: (error) => {
      console.error(error);
    },
    getMessageFallback: (config) => config.key
  };
}); 