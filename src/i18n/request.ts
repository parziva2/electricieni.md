import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './config';

// IMPORTANT: Follow exactly the documented pattern from next-intl
export default getRequestConfig(async ({ requestLocale }) => {
  // Step 1: Await the requestLocale as shown in the documentation
  // This is the critical part that fixes the warning
  const locale = await requestLocale;
  
  // Step 2: Load messages conditionally to avoid errors
  const messages = (await import(`./locales/${locale || defaultLocale}.json`)).default;
  
  // Step 3: Return config with locale explicitly set
  // The locale property here is what fixes the 'locale expected to be returned' warning
  return {
    locale,
    messages,
    timeZone: 'Europe/Chisinau',
    now: new Date()
  };
}); 