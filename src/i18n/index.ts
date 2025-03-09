import { locales, defaultLocale } from './config';

// Simple message cache to avoid repeated imports
const messageCache: Record<string, any> = {};

/**
 * Loads messages for a specific locale
 */
export async function getMessages(locale: string) {
  // Use cached messages if available
  if (messageCache[locale]) {
    return messageCache[locale];
  }

  try {
    // Load messages for requested locale
    const messages = (await import(`./locales/${locale}.json`)).default;
    messageCache[locale] = messages;
    return messages;
  } catch (error) {
    console.error(`Could not load messages for ${locale}, falling back to ${defaultLocale}`);
    
    // Fall back to default locale
    if (locale !== defaultLocale) {
      return getMessages(defaultLocale);
    }
    
    // If even default locale fails, return empty object
    return {};
  }
}

/**
 * Simple translation function
 */
export function t(messages: any, key: string, params?: Record<string, string>): string {
  if (!messages) return key;

  // Split the key by dots to access nested properties
  const parts = key.split('.');
  let result = messages;
  
  // Traverse the messages object
  for (const part of parts) {
    if (!result || typeof result !== 'object') return key;
    result = result[part];
    if (result === undefined) return key;
  }
  
  if (typeof result !== 'string') return key;
  
  // Replace parameters
  if (params) {
    let text = result;
    Object.entries(params).forEach(([paramKey, value]) => {
      text = text.replace(`{${paramKey}}`, value);
    });
    return text;
  }
  
  return result;
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
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
} 