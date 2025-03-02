import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate the locale
  const resolvedLocale = locale || 'ro';
  
  if (!locales.includes(resolvedLocale as Locale)) {
    throw new Error(`Locale ${resolvedLocale} is not supported`);
  }

  return {
    messages: (await import(`./locales/${resolvedLocale}.json`)).default,
    timeZone: 'Europe/Chisinau',
    now: new Date(),
    defaultTranslationValues: {
      SITE_NAME: 'Electricieni.md'
    }
  };
}); 