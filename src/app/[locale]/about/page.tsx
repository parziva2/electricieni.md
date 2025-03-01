'use client';

import { useTranslations } from 'next-intl';
import { StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function About() {
  const t = useTranslations('about');

  const values = [
    {
      name: t('values.quality.title'),
      description: t('values.quality.description'),
      icon: StarIcon,
    },
    {
      name: t('values.safety.title'),
      description: t('values.safety.description'),
      icon: ShieldCheckIcon,
    },
    {
      name: t('values.reliability.title'),
      description: t('values.reliability.description'),
      icon: ClockIcon,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="mb-16">
            <p className="text-lg leading-8 text-gray-600">
              {t('description')}
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">
              {t('values.title')}
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
  );
} 