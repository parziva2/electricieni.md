'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getMessages, t } from '@/i18n';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ShieldCheckIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function About() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || '';
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    if (currentLocale) {
      getMessages(currentLocale).then(setMessages);
    }
  }, [currentLocale]);

  if (!messages) return null;

  const values = [
    {
      name: t(messages, 'about.values.reliability.title'),
      description: t(messages, 'about.values.reliability.description'),
      icon: ShieldCheckIcon,
    },
    {
      name: t(messages, 'about.values.punctuality.title'),
      description: t(messages, 'about.values.punctuality.description'),
      icon: ClockIcon,
    },
    {
      name: t(messages, 'about.values.expertise.title'),
      description: t(messages, 'about.values.expertise.description'),
      icon: UserGroupIcon,
    },
  ];

  return (
    <ErrorBoundary>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t(messages, 'about.title')}
            </h1>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <div className="mb-16">
                <p className="text-lg leading-8 text-gray-600">
                  {t(messages, 'about.description')}
                </p>
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">
                  {t(messages, 'about.values.title')}
                </h3>
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                  {values.map((value) => (
                    <div key={value.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                          <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {value.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
} 