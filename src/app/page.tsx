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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
        <title>Redirecting...</title>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
            background-color: #f5f5f5;
          }
          a {
            color: #0070f3;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}} />
      </head>
      <body>
        <h1>Redirecting...</h1>
        <p>
          If you are not redirected automatically, please{' '}
          <a href={`/${defaultLocale}`}>click here</a>.
        </p>
      </body>
    </html>
  );
}
