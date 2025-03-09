'use client';

import { useState, useEffect } from 'react';
import { getMessages, t } from '@/i18n';
import { motion } from 'framer-motion';
import { Locale } from '@/i18n/config';
import {
  BoltIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

interface ServiceShowcaseProps {
  messages: {
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

const ServiceShowcase = ({ messages }: ServiceShowcaseProps) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {messages.services.title}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {messages.services.items.map((service, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase; 