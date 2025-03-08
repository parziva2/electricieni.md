import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Force the page to be dynamic to ensure redirection always works
export const dynamic = 'force-dynamic';

// Added revalidate to ensure the redirect works in static exports
export const revalidate = 0;

// Adding generateStaticParams to ensure the page is included in the build
export function generateStaticParams() {
  return [];
}

// Redirect to the default locale
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
