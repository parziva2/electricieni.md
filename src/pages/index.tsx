import { defaultLocale } from '@/i18n/config';
import Head from 'next/head';

// Simple pure HTML redirect page
export default function RootRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
        <title>Redirecting...</title>
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Redirecting...</h1>
          <p>
            <a href={`/${defaultLocale}`}>Click here if you are not redirected automatically</a>
          </p>
        </div>
      </div>
    </>
  );
} 