import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Force dynamic rendering for this page to ensure redirection works
export const dynamic = 'force-dynamic';

// This Page component will never be rendered as we redirect immediately
export default function RootPage() {
  // Redirect to the default locale path
  redirect(`/${defaultLocale}`);
  
  // This part will never be reached due to the redirect
  return null;
}
