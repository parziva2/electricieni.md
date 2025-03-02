export const locales = ['ro', 'ru'] as const;
export const defaultLocale = 'ro' as const;

export type Locale = (typeof locales)[number];

export const pathnames = {
  '/': '/',
  '/services': '/services',
  '/about': '/about',
  '/contact': '/contact',
} as const;

export type Pathnames = keyof typeof pathnames; 