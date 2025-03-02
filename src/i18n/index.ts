import {notFound} from 'next/navigation';
import {unstable_setRequestLocale} from 'next-intl/server';
import {locales, defaultLocale, type Locale} from './config';

async function loadMessages(locale: string) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default async function getRequestConfig() {
  try {
    await unstable_setRequestLocale(defaultLocale);
    return {
      messages: await loadMessages(defaultLocale),
      timeZone: 'Europe/Chisinau',
      now: new Date()
    };
  } catch (error) {
    notFound();
  }
} 