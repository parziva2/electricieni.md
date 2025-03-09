'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getMessages, t } from '@/i18n';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Services() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || '';
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    if (currentLocale) {
      getMessages(currentLocale).then(setMessages);
    }
  }, [currentLocale]);

  if (!messages) return null;

  return (
    <ErrorBoundary>
      <div className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t(messages, 'services.pageTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t(messages, 'services.pageDescription')}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {/* Services grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {messages.services.items.map((service: any) => (
                <div key={service.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white text-xl">{service.icon || '⚡'}</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900">{service.name}</h2>
                  <p className="mt-4 flex-1 text-base leading-7 text-gray-600">{service.description}</p>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t(messages, 'services.featuresTitle')}</h3>
                    <ul className="space-y-3">
                      {service.features?.map((feature: string) => (
                        <li key={feature} className="flex gap-x-3">
                          <div className="h-6 w-6 flex-none text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.pricing && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t(messages, 'services.pricingTitle')}</h3>
                      <p className="text-xl font-bold text-blue-600">{service.pricing}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
} 