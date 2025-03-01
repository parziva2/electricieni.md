'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PhoneIcon } from '@heroicons/react/24/outline';

const PHONE_NUMBER = '+373 079665665';

export default function HeroSection() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <div className="relative isolate">
      {/* Background pattern */}
      <div
        className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-12 sm:pb-16 lg:flex lg:py-16">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link
                href={`/${currentLocale}/contact`}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {t('cta')}
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-8 sm:mt-12 lg:ml-10 lg:mt-0 lg:flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-[280px] sm:h-[350px] lg:h-[420px] w-full rounded-xl bg-gray-900/5 shadow-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80"
              alt="Professional electrician working on electrical installation"
              fill
              className="object-cover rounded-xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </motion.div>
      </div>

      {/* Background pattern */}
      <div
        className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-blue-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
} 