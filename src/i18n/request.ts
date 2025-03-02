import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    throw new Error(`Locale ${locale} is not supported`);
  }

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: 'Europe/Chisinau',
    now: new Date(),
    defaultTranslationValues: {
      SITE_NAME: 'Electricieni.md'
    }
  };
}); 