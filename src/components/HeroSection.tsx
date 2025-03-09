'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getMessages, t } from '@/i18n';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ErrorBoundary from './ErrorBoundary';

export default function HeroSection() {
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
      <div className="relative isolate overflow-hidden bg-white">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                  {t(messages, 'hero.badge')}
                </span>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t(messages, 'hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t(messages, 'hero.description')}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={`/${currentLocale}/contact`}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center"
              >
                {t(messages, 'hero.cta')} <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
              <Link href={`/${currentLocale}/services`} className="text-sm font-semibold leading-6 text-gray-900">
                {t(messages, 'hero.services')} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/images/hero-electrician.jpg"
                  alt="Electrician working"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
} 