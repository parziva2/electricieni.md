import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

// This configuration is used by the Next.js plugin
export default getRequestConfig(async ({ locale, requestLocale }) => {
  // Use the requestLocale promise, await it properly
  let resolvedLocale = await requestLocale;
  
  // Fall back to default locale if no locale was determined
  if (!resolvedLocale) {
    resolvedLocale = defaultLocale;
  }
  
  // Load the messages for the locale
  let messages;
  try {
    messages = (await import(`./locales/${resolvedLocale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for ${resolvedLocale}`, error);
    // Fall back to default locale messages if the requested locale doesn't exist
    messages = (await import(`./locales/${defaultLocale}.json`)).default;
  }
  
  return {
    // Return the resolved locale - this is required
    locale: resolvedLocale,
    messages,
    // Use static timestamp to avoid hydration errors
    now: new Date(),
    // Set timezone for proper date handling
    timeZone: 'Europe/Chisinau'
  };
}); 