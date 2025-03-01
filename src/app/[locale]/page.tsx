'use client';

import { useTranslations } from 'next-intl';
import { StarIcon, CheckIcon } from '@heroicons/react/20/solid';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import ServiceShowcase from '@/components/ServiceShowcase';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface PricingPackage {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export default function Home() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const testimonials = t.raw('testimonials.items') as Testimonial[];
  const pricingPackages = t.raw('pricing.packages') as PricingPackage[];

  return (
    <div className="space-y-32">
      {/* Hero section */}
      <HeroSection />

      {/* Services section */}
      <ServiceShowcase />

      {/* Pricing section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              {t('pricing.title')}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('pricing.subtitle')}
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricingPackages.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10`}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price}
                    </span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/${currentLocale}/contact`}
                  className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300`}
                >
                  {t('hero.cta')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <FAQ />

      {/* Testimonials section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
              {t('testimonials.title')}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, testimonialIdx) => (
                <div key={testimonialIdx} className="h-full">
                  <figure className="h-full rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`"${testimonial.text}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                        <StarIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
} 