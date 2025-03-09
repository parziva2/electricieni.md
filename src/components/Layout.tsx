'use client';

import { Inter } from 'next/font/google';
import { Locale } from '@/i18n/config';
import { ReactNode } from 'react';
import '../app/globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

interface LayoutProps {
  children: ReactNode;
  locale: Locale;
  messages: any;
}

const Layout = ({ children, locale, messages }: LayoutProps) => {
  return (
    <div className={inter.className}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">
              <a href={`/${locale}`}>Electricieni.md</a>
            </h1>
            <nav className="flex space-x-8">
              {[
                { name: messages.navigation?.home || 'Home', href: `/${locale}` },
                { name: messages.navigation?.services || 'Services', href: `/${locale}/services` },
                { name: messages.navigation?.about || 'About', href: `/${locale}/about` },
                { name: messages.navigation?.contact || 'Contact', href: `/${locale}/contact` },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex space-x-4">
              <a
                href={`/ro${window.location.pathname.substring(3)}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                RO
              </a>
              <a
                href={`/ru${window.location.pathname.substring(3)}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                RU
              </a>
            </div>
          </div>
        </header>
        <main className="py-10">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Electricieni.md. {messages.footer?.rights || 'All rights reserved.'}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout; 