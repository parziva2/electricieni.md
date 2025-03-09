import { Suspense } from 'react';
import ServiceShowcase from '@/components/ServiceShowcase';
import HeroSection from '@/components/HeroSection';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import { Locale } from '@/i18n/config';
import ErrorBoundary from '@/components/ErrorBoundary';

// Export for static generation
export const dynamic = 'force-static';

// Define parameters for this page
interface PageProps {
  params: {
    locale: Locale;
  };
}

export default function Home({ params: { locale } }: PageProps) {
  return (
    <ErrorBoundary>
      <div className="space-y-32">
        {/* Hero section */}
        <Suspense fallback={<div>Loading hero...</div>}>
          <HeroSection locale={locale} />
        </Suspense>

        {/* Services section */}
        <Suspense fallback={<div>Loading services...</div>}>
          <ServiceShowcase locale={locale} />
        </Suspense>

        {/* FAQ section */}
        <Suspense fallback={<div>Loading FAQ...</div>}>
          <FAQ locale={locale} />
        </Suspense>

        {/* Call to Action */}
        <Suspense fallback={<div>Loading call to action...</div>}>
          <CallToAction locale={locale} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
} 