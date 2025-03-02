import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locales } from '@/i18n/request';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: any }) {
  const isValidLocale = locales.includes(params?.locale);
  if (!isValidLocale) notFound();

  const messages = await import(`@/i18n/locales/${params.locale}.json`);
  const t = await getTranslations({ locale: params.locale, messages, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Electricieni.md' }],
    metadataBase: new URL('https://electricieni.md'),
    alternates: {
      canonical: '/',
      languages: {
        'ro': '/ro',
        'ru': '/ru',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://electricieni.md',
      siteName: 'Electricieni.md',
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const isValidLocale = locales.includes(params?.locale);
  if (!isValidLocale) notFound();

  let messages;
  try {
    messages = (await import(`@/i18n/locales/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={params.locale} messages={messages} timeZone="Europe/Chisinau">
          <div className="min-h-screen bg-gray-100">
            <Navigation />
            <main className="py-10">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 