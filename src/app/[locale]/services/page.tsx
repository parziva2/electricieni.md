'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getMessages, t } from '@/i18n';
import { BoltIcon, HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import CallToAction from '@/components/CallToAction';

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

  const services = [
    {
      name: t(messages, 'services.residential.title'),
      description: t(messages, 'services.residential.description'),
      icon: HomeIcon,
      features: messages.services?.residential?.features || [],
    },
    {
      name: t(messages, 'services.commercial.title'),
      description: t(messages, 'services.commercial.description'),
      icon: BuildingOfficeIcon,
      features: messages.services?.commercial?.features || [],
    },
    {
      name: t(messages, 'services.maintenance.title'),
      description: t(messages, 'services.maintenance.description'),
      icon: WrenchScrewdriverIcon,
      features: messages.services?.maintenance?.features || [],
    },
    {
      name: t(messages, 'services.emergency.title'),
      description: t(messages, 'services.emergency.description'),
      icon: BoltIcon,
      features: messages.services?.emergency?.features || [],
    },
  ];

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t(messages, 'services.title')}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">{t(messages, 'services.subtitle')}</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {services.map((service, index) => (
              <div key={service.name} className={`relative ${index !== 0 ? 'mt-32' : ''}`}>
                {index !== 0 && (
                  <div className="absolute inset-x-0 -top-16 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                )}
                <div className="relative flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {service.name}
                  </h3>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="relative lg:col-start-1">
                    <p className="text-lg text-gray-500">{service.description}</p>
                  </div>
                  <div className="mt-10 lg:col-start-2 lg:mt-0">
                    <ul role="list" className="space-y-4">
                      {service.features.map((feature: string) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base leading-6 text-gray-600">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
} 