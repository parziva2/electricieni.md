export const locales = ['ro', 'ru'] as const;
export const defaultLocale = 'ro' as const;

export type Locale = (typeof locales)[number]; 