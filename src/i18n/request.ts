import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Properly handle the requestLocale promise
  const resolvedLocale = (await requestLocale) ?? defaultLocale;
  
  // Validate the locale
  if (!locales.includes(resolvedLocale as any)) {
    throw new Error(`Locale ${resolvedLocale} is not supported`);
  }
  
  // Load messages for the locale
  const messages = await import(`./locales/${resolvedLocale}.json`)
    .then((module) => module.default)
    .catch(() => {
      throw new Error(`Could not load messages for locale: ${resolvedLocale}`);
    });
  
  return {
    locale: resolvedLocale,
    messages,
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