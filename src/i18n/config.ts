// Define supported locales
export const locales = ['ro', 'ru'] as const;

// Define the default locale
export const defaultLocale = 'ro' as const;

// Type for type-safe locale strings
export type Locale = typeof locales[number];

// These are all the localized routes that will be available in your application
export const pathnames = {
  // Root path
  '/': '/',
  
  // Main routes
  '/about': '/about',
  '/services': '/services',
  '/contact': '/contact',
} as const;

// Type for type-safe pathname keys
export type Pathname = keyof typeof pathnames; 