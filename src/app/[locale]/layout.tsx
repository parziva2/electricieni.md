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

type Locale = typeof locales[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: { params: { locale: string } }
): Promise<Metadata> {
  const locale = props.params.locale as Locale;
  await unstable_setRequestLocale(locale);

  if (!locales.includes(locale as Locale)) {
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
  } catch {
    return {
      title: 'Electricieni.md',
      description: 'Professional electrical services in Moldova',
    };
  }
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  await unstable_setRequestLocale(locale);

  if (!locales.includes(locale as Locale)) {
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
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch {
    notFound();
  }
} 