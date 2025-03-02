export const locales = ['ro', 'ru'] as const;
export const defaultLocale = 'ro' as const;

export type Locale = typeof locales[number];

// These are all the routes that will be available in your application
export const pathnames = {
  '/': '/',
  '/services': '/services',
  '/about': '/about',
  '/contact': '/contact'
} as const;

export type Pathname = keyof typeof pathnames; 