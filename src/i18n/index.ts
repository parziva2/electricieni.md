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
    console.error(`Could not load messages for ${locale}`, error);
    notFound();
  }
}

/**
 * Create shared navigation utilities for use throughout the app
 */
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  defaultLocale
}); 