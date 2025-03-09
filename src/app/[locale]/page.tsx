'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getMessages, t } from '@/i18n';
import HeroSection from '@/components/HeroSection';
import ServiceShowcase from '@/components/ServiceShowcase';
import Testimonials from '@/components/Testimonials';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  imageUrl: string;
}

interface PricingPackage {
  name: string;
  id: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  mostPopular: boolean;
}

export default function Home() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || '';
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    if (currentLocale) {
      getMessages(currentLocale).then(setMessages);
    }
  }, [currentLocale]);

  if (!messages) return null;

  const testimonials = messages.testimonials?.items as Testimonial[];
  const pricingPackages = messages.pricing?.packages as PricingPackage[];

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
              {t(messages, 'pricing.title')}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t(messages, 'pricing.subtitle')}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            {t(messages, 'pricing.description')}
          </p>
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
              {pricingPackages.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                    tier.mostPopular ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white'
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${tier.mostPopular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <p className="mt-4 h-12 text-sm leading-6 text-gray-500">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${currentLocale}/contact`}
                    className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      tier.mostPopular
                        ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                        : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA section */}
      <div className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t(messages, 'cta.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              {t(messages, 'cta.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`/${currentLocale}/contact`}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center"
              >
                {t(messages, 'cta.button')}
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 