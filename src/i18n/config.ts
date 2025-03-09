// Define the locales supported by the application
export const locales = ['ro', 'ru'] as const;

// Define the default locale
export const defaultLocale: Locale = 'ro';

// Create a type for locales for TypeScript support
export type Locale = typeof locales[number];

// The pathnames for the router
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
  '/services': '/services',
};

// Create a type for pathnames for TypeScript support
export type Pathname = keyof typeof pathnames;

export const messages = {
  ro: {
    navigation: {
      home: 'Acasă',
      services: 'Servicii',
      about: 'Despre noi',
      contact: 'Contact',
    },
    hero: {
      title: 'Servicii electrice profesionale în Chișinău',
      subtitle: 'Soluții sigure și fiabile pentru casa și afacerea dumneavoastră',
      cta: 'Contactați-ne',
    },
    services: {
      title: 'Serviciile noastre',
      items: [
        {
          title: 'Instalații electrice',
          description: 'Instalare și reparare de sisteme electrice pentru case și apartamente',
        },
        {
          title: 'Diagnosticare',
          description: 'Identificarea și rezolvarea problemelor electrice',
        },
        {
          title: 'Mentenanță',
          description: 'Întreținere regulată a sistemelor electrice',
        },
      ],
    },
    faq: {
      title: 'Întrebări frecvente',
      items: [
        {
          question: 'Care sunt prețurile pentru serviciile electrice?',
          answer: 'Prețurile variază în funcție de complexitatea lucrării. Contactați-ne pentru o estimare gratuită.',
        },
        {
          question: 'Cât durează o intervenție?',
          answer: 'Durata depinde de natura problemei. De obicei, rezolvăm majoritatea problemelor în aceeași zi.',
        },
      ],
    },
    cta: {
      title: 'Aveți nevoie de un electrician?',
      subtitle: 'Suntem aici să vă ajutăm 24/7',
      button: 'Programați o vizită',
    },
    footer: {
      rights: 'Toate drepturile rezervate.',
    },
  },
  ru: {
    navigation: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      title: 'Профессиональные электрические услуги в Кишиневе',
      subtitle: 'Надежные решения для вашего дома и бизнеса',
      cta: 'Свяжитесь с нами',
    },
    services: {
      title: 'Наши услуги',
      items: [
        {
          title: 'Электромонтаж',
          description: 'Установка и ремонт электрических систем для домов и квартир',
        },
        {
          title: 'Диагностика',
          description: 'Выявление и устранение электрических проблем',
        },
        {
          title: 'Обслуживание',
          description: 'Регулярное обслуживание электрических систем',
        },
      ],
    },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          question: 'Какие цены на электрические услуги?',
          answer: 'Цены зависят от сложности работы. Свяжитесь с нами для бесплатной оценки.',
        },
        {
          question: 'Сколько времени занимает вызов?',
          answer: 'Продолжительность зависит от характера проблемы. Обычно мы решаем большинство проблем в тот же день.',
        },
      ],
    },
    cta: {
      title: 'Нужен электрик?',
      subtitle: 'Мы здесь, чтобы помочь 24/7',
      button: 'Записаться на визит',
    },
    footer: {
      rights: 'Все права защищены.',
    },
  },
}; 