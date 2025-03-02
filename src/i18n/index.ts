import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

// This function can be used to get messages for a specific locale
export async function getMessages(locale: string) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

// Export a request config that next-intl will use
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming locale is supported
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const now = new Date();

  // Return the config object
  return {
    messages,
    timeZone: 'Europe/Chisinau',
    now,
    // Simplified fallback that returns the key as a string
    getMessageFallback: (config: { key: string }) => config.key
  };
}); 