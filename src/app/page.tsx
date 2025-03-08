import { defaultLocale } from '@/i18n/config';

// This page is static and only used for redirects
export const dynamic = 'force-static';

// No revalidation needed
export const revalidate = false;

// This helps Next.js understand the structure for static export
export function generateStaticParams() {
  return [];
}

// For static export, we only use server-side redirects in vercel.json
// This component is just a fallback
export default function RootPage() {
  // Show a basic HTML redirect in case the vercel.json redirect doesn't work
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>Redirecting to <a href={`/${defaultLocale}`}>default language version</a>...</p>
      </body>
    </html>
  );
}
