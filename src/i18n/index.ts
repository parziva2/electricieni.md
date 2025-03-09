import { notFound } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

/**
 * Loads messages for a specific locale
 * @param locale The locale to load messages for
 * @returns The messages for the locale
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
 * Create shared navigation utilities for use throughout the app
 */
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  defaultLocale
});

/**
 * Simple translation function
 */
export function t(messages: any, key: string, params?: Record<string, string>) {
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
  return `/${locale}${cleanPath}`;
} 