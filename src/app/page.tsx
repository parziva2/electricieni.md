import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Force dynamic rendering to ensure the redirect works
export const dynamic = 'force-dynamic';

// Redirect to the default locale
export default function RootPage() {
  // This ensures the redirect happens
  redirect(`/${defaultLocale}`);
}
