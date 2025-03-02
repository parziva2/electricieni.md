import {notFound} from 'next/navigation';
import {getRequestConfig, unstable_setRequestLocale} from 'next-intl/server';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales, defaultLocale} from './config';

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
export default getRequestConfig(async () => {
  // Set the default locale
  await unstable_setRequestLocale(defaultLocale);
  
  return {
    messages: await getMessages(defaultLocale),
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