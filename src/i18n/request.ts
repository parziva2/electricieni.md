import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['ro', 'ru'] as const;
export const defaultLocale = 'ro';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
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