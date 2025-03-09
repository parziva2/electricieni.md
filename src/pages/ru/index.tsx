import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServiceShowcase from '@/components/ServiceShowcase';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import { messages } from '@/i18n/config';

export default function RussianHome() {
  return (
    <Layout locale="ru" messages={messages.ru}>
      <HeroSection messages={messages.ru} />
      <ServiceShowcase messages={messages.ru} />
      <FAQ messages={messages.ru} />
      <CallToAction messages={messages.ru} />
    </Layout>
  );
} 