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
  locale: Locale;
}

export default function ServiceShowcase({ locale }: ServiceShowcaseProps) {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // Load messages for this locale
    getMessages(locale).then(setMessages);
  }, [locale]);

  if (!messages) return null;
  
  const services = [
    {
      name: t(messages, 'services.residential.title'),
      description: t(messages, 'services.residential.description'),
      icon: HomeIcon,
      features: messages.services?.residential?.features || [],
      color: 'bg-blue-500',
    },
    {
      name: t(messages, 'services.commercial.title'),
      description: t(messages, 'services.commercial.description'),
      icon: BuildingOfficeIcon,
      features: messages.services?.commercial?.features || [],
      color: 'bg-green-500',
    },
    {
      name: t(messages, 'services.maintenance.title'),
      description: t(messages, 'services.maintenance.description'),
      icon: WrenchScrewdriverIcon,
      features: messages.services?.maintenance?.features || [],
      color: 'bg-purple-500',
    },
    {
      name: t(messages, 'services.emergency.title'),
      description: t(messages, 'services.emergency.description'),
      icon: BoltIcon,
      features: messages.services?.emergency?.features || [],
      color: 'bg-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t(messages, 'services.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {t(messages, 'services.subtitle')}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className={`absolute inset-0 ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative p-8">
                  <div className={`inline-flex p-3 rounded-lg ${service.color} bg-opacity-10`}>
                    <service.icon className={`h-6 w-6 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((feature: string) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 