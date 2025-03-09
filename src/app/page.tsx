import { defaultLocale } from '@/i18n/config';

export default function RootPage() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
        <title>Redirecting...</title>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
            background-color: #f0f0f0;
          }
          a {
            color: #0070f3;
            text-decoration: none;
          }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.location.href = '/${defaultLocale}';
        `}} />
      </head>
      <body>
        <div>
          <p>Redirecting to <a href={`/${defaultLocale}`}>{defaultLocale}</a>...</p>
        </div>
      </body>
    </html>
  );
}
