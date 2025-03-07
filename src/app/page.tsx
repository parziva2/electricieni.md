import { defaultLocale } from '@/i18n/config';

// This page is static and only used for redirects
export const dynamic = 'force-static';

// No revalidation needed
export const revalidate = false;

// This helps Next.js understand the structure for static export
export function generateStaticParams() {
  return [];
}

// Simple static page that redirects to the default locale
export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>
          <a href={`/${defaultLocale}`}>Click here if you are not redirected automatically</a>
        </p>
      </body>
    </html>
  );
}
