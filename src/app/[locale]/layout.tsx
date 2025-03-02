import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locales } from '@/i18n/request';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

type Locale = typeof locales[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: Locale) {
  try {
    return (await import(`@/i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata(props: { params: { locale: Locale } }) {
  const { locale } = props.params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  
  try {
    const t = await getTranslations({ locale, messages, namespace: 'metadata' });

    return {
      title: t('title'),
      description: t('description'),
      keywords: t('keywords'),
      authors: [{ name: 'Electricieni.md' }],
      metadataBase: new URL('https://electricieni.md'),
      alternates: {
        canonical: '/',
        languages: Object.fromEntries(
          locales.map(loc => [loc, `/${loc}`])
        ),
      },
      openGraph: {
        title: t('title'),
        description: t('description'),
        url: 'https://electricieni.md',
        siteName: 'Electricieni.md',
        locale: locale,
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
  } catch (error) {
    return {
      title: 'Electricieni.md',
      description: 'Professional electrical services in Moldova',
    };
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = props.params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Handle the request locale
  try {
    unstable_setRequestLocale(locale);
  } catch (error) {
    console.error('Failed to set request locale:', error);
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages} 
          timeZone="Europe/Chisinau"
          now={new Date()}
        >
          <div className="min-h-screen bg-gray-100">
            <Navigation />
            <main className="py-10">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {props.children}
              </div>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 