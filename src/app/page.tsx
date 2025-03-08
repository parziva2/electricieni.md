import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Force the page to be dynamic to ensure redirection always works
export const dynamic = 'force-dynamic';

// Redirect to the default locale
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
