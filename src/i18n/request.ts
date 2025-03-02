import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from './navigation';

export const locales = ['ro', 'ru'] as const;
export const defaultLocale = 'ro' as const;

export default getRequestConfig(async () => {
  const locale = await requestLocale();
  
  return {
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: 'Europe/Chisinau',
    now: new Date(),
    locale: locale,
    defaultTranslationValues: {
      SITE_NAME: 'Electricieni.md'
    }
  };
}); 