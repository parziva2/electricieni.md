import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// This ensures the redirect happens during both SSR and client-side
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
