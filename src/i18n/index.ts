import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale, type Locale} from './config';

async function loadMessages(locale: string) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default getRequestConfig(async ({locale}) => {
  // Ensure we have a valid locale
  if (!locale || !locales.includes(locale as Locale)) {
    return {
      locale: defaultLocale,
      messages: await loadMessages(defaultLocale),
      timeZone: 'Europe/Chisinau',
      now: new Date()
    };
  }

  try {
    return {
      locale,
      messages: await loadMessages(locale),
      timeZone: 'Europe/Chisinau',
      now: new Date()
    };
  } catch (error) {
    notFound();
  }
}); 