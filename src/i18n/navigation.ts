import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, defaultLocale });

export function getPathname(pathname: string, locale: string) {
  return `/${locale}${pathname === '/' ? '' : pathname}`;
} 