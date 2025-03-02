import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './request';

export const { Link, redirect, usePathname, useRouter, requestLocale } =
  createSharedPathnamesNavigation({ locales, defaultLocale });

export function getPathname(pathname: string, locale: string) {
  return `/${locale}${pathname === '/' ? '' : pathname}`;
} 