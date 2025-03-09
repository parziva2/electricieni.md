'use client';

import { useState, useEffect } from 'react';
import { getMessages, t } from '@/i18n';
import { Locale } from '@/i18n/config';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/outline';

const PHONE_NUMBER = '+373 079665665';

interface CallToActionProps {
  locale: Locale;
}

export default function CallToAction({ locale }: CallToActionProps) {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // Load messages for this locale
    getMessages(locale).then(setMessages);
  }, [locale]);

  if (!messages) return null;

  return (
    <div className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t(messages, 'cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
            {t(messages, 'cta.description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={`/${locale}/contact`}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t(messages, 'cta.button')}
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 