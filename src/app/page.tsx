import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

export const dynamic = 'force-dynamic';

// This ensures the redirect happens during both SSR and client-side
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
