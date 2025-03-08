import { defaultLocale } from '@/i18n/config';

// This page is static and only used for redirects
export const dynamic = 'force-static';

// No revalidation needed
export const revalidate = false;

// This helps Next.js understand the structure for static export
export function generateStaticParams() {
  return [];
}

// Static page for redirecting
export default function RootPage() {
  // Show a basic HTML redirect for static export
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
        <title>Redirecting to {defaultLocale}</title>
      </head>
      <body>
        <p>
          Redirecting to <a href={`/${defaultLocale}`}>{defaultLocale}</a>...
        </p>
      </body>
    </html>
  );
}
