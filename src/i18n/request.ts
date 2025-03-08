import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

// This configuration is used by the Next.js plugin
export default getRequestConfig(async ({locale: _locale, requestLocale}) => {
  // IMPORTANT: We need to await requestLocale to get the resolved locale
  const locale = await requestLocale;
  
  if (!locale) {
    console.warn('No locale found, falling back to default locale');
  }
  
  // Always ensure we have a valid locale
  const resolvedLocale = locale || defaultLocale;
  
  // Validate that it's a supported locale
  if (!locales.includes(resolvedLocale as any)) {
    console.warn(`Locale ${resolvedLocale} is not supported, falling back to ${defaultLocale}`);
    return {
      locale: defaultLocale,
      messages: (await import(`./locales/${defaultLocale}.json`)).default,
      timeZone: 'Europe/Chisinau',
      now: new Date()
    };
  }
  
  return {
    // IMPORTANT: Must return the resolved locale
    locale: resolvedLocale,
    messages: (await import(`./locales/${resolvedLocale}.json`)).default,
    timeZone: 'Europe/Chisinau',
    // Don't use Date.now() directly to avoid hydration errors
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