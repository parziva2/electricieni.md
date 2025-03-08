import { locales, defaultLocale } from './config';

/**
 * Loads messages for a specific locale
 */
export async function getMessages(locale: string) {
  try {
    return (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for ${locale}`);
    return (await import(`./locales/${defaultLocale}.json`)).default;
  }
}

/**
 * Simple translation function
 */
export function t(messages: any, key: string, params?: Record<string, string>) {
  let message = key.split('.').reduce((obj, k) => obj?.[k], messages);
  if (!message) return key;
  
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      message = message.replace(`{${k}}`, v);
    });
  }
  
  return message;
}

/**
 * Get locale from pathname
 */
export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/');
  return segments[1] && locales.includes(segments[1] as any) ? segments[1] : defaultLocale;
}

/**
 * Format URL with locale
 */
export function formatURL(path: string, locale: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
} 