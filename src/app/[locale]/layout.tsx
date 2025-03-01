import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locales } from '@/i18n/request';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: { params: { locale: string } }
): Promise<Metadata> {
  const locale = props.params.locale;
  await unstable_setRequestLocale(locale);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    const t = await getTranslations('metadata');

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
  params: { locale: string };
}) {
  const locale = props.params.locale;
  await unstable_setRequestLocale(locale);

  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    const messages = (await import(`@/i18n/locales/${locale}.json`)).default;

    return (
      <html lang={locale} suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Chisinau">
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
  } catch (error) {
    notFound();
  }
} 