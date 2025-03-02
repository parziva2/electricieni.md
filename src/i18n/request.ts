import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (context) => {
  const locale = await context.locale();

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: 'Europe/Chisinau',
    now: new Date()
  };
}); 