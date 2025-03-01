'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          © {currentYear} Electricieni.md. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
} 