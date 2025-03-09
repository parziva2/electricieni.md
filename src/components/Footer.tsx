'use client';

import { useState, useEffect } from 'react';
import { getMessages, t } from '@/i18n';
import { Locale } from '@/i18n/config';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const [messages, setMessages] = useState<any>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Load messages for this locale
    getMessages(locale).then(setMessages);
  }, [locale]);

  if (!messages) return null;

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          © {currentYear} Electricieni.md. {t(messages, 'footer.rights')}
        </div>
      </div>
    </footer>
  );
} 