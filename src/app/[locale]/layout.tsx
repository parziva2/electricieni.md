import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locales, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  // Set the locale for the request
  await unstable_setRequestLocale(locale);
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
  } catch {
    return {
      title: 'Electricieni.md',
      description: 'Professional electrical services in Moldova',
    };
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  // Set the locale for the request
  await unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages} 
          timeZone="Europe/Chisinau"
          now={new Date()}
          formats={{
            dateTime: {
              short: {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              }
            }
          }}
          onError={(error) => {
            console.error(error);
          }}
        >
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