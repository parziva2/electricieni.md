// Define the locales supported by the application
export const locales = ['ro', 'ru'] as const;

// Define the default locale
export const defaultLocale = 'ro' as const;

// Create a type for locales for TypeScript support
export type Locale = typeof locales[number];

// The pathnames for the router
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
  '/services': '/services',
};

// Create a type for pathnames for TypeScript support
export type Pathname = keyof typeof pathnames; 