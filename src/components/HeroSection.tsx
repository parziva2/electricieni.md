'use client';

import { useState, useEffect } from 'react';
import { getMessages, t } from '@/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { Locale } from '@/i18n/config';

const PHONE_NUMBER = '+373 079665665';

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // Load messages for this locale
    getMessages(locale).then(setMessages);
  }, [locale]);

  if (!messages) return null;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {messages.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {messages.hero.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {messages.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 