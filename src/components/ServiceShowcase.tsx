'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export default function ServiceShowcase() {
  const t = useTranslations('services');

  const services = [
    {
      name: t('residential.title'),
      description: t('residential.description'),
      icon: HomeIcon,
      features: t.raw('residential.features') as string[],
      color: 'bg-blue-500',
    },
    {
      name: t('commercial.title'),
      description: t('commercial.description'),
      icon: BuildingOfficeIcon,
      features: t.raw('commercial.features') as string[],
      color: 'bg-green-500',
    },
    {
      name: t('maintenance.title'),
      description: t('maintenance.description'),
      icon: WrenchScrewdriverIcon,
      features: t.raw('maintenance.features') as string[],
      color: 'bg-purple-500',
    },
    {
      name: t('emergency.title'),
      description: t('emergency.description'),
      icon: BoltIcon,
      features: t.raw('emergency.features') as string[],
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
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
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
                    {service.features.slice(0, 3).map((feature) => (
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