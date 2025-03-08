import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locales, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for the page
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  if (!locales.includes(locale)) notFound();
  
  const messages = await getMessages(locale);
  
  try {
    return {
      title: messages.metadata?.title || 'Electricieni.md',
      description: messages.metadata?.description || 'Professional electrical services in Moldova',
      keywords: messages.metadata?.keywords,
      authors: [{ name: 'Electricieni.md' }],
      metadataBase: new URL('https://electricieni.md'),
      alternates: {
        canonical: '/',
        languages: Object.fromEntries(
          locales.map(loc => [loc, `/${loc}`])
        ),
      },
      openGraph: {
        title: messages.metadata?.title || 'Electricieni.md',
        description: messages.metadata?.description || 'Professional electrical services in Moldova',
        url: 'https://electricieni.md',
        siteName: 'Electricieni.md',
        locale: locale,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: messages.metadata?.title || 'Electricieni.md',
        description: messages.metadata?.description || 'Professional electrical services in Moldova',
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
  if (!locales.includes(locale)) notFound();
  
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <main className="py-10">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 