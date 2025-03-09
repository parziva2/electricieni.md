'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getMessages, t } from '@/i18n';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ErrorBoundary from './ErrorBoundary';

export default function ServiceShowcase() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || '';
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    if (currentLocale) {
      getMessages(currentLocale).then(setMessages);
    }
  }, [currentLocale]);

  if (!messages) return null;

  // Get services from messages
  const services = messages.services?.items || [];

  return (
    <ErrorBoundary>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              {t(messages, 'services.title')}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t(messages, 'services.subtitle')}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t(messages, 'services.description')}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {services.map((service) => (
                <div key={service.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <span className="text-white text-lg font-bold">{service.icon || '⚡'}</span>
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              href={`/${currentLocale}/services`}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {t(messages, 'services.viewAll')}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
} 