import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locales, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// Generate static params for all locales - this is crucial for static export
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  // Safely get locale
  const locale = params.locale;
  if (!locales.includes(locale)) notFound();
  
  // Get messages for metadata
  const messages = await getMessages(locale);
  
  try {
    return {
      title: messages.metadata?.title || 'Electricieni.md',
      description: messages.metadata?.description || 'Professional electrical services in Moldova',
      keywords: messages.metadata?.keywords || 'electrician, electrical services, Moldova',
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
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Electricieni.md',
      description: 'Professional electrical services in Moldova',
    };
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Safely get locale
  const locale = params.locale;
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <Navigation locale={locale} />
          <main className="py-10">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
} 