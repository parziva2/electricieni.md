import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServiceShowcase from '@/components/ServiceShowcase';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import { messages } from '@/i18n/config';

export default function RomanianHome() {
  return (
    <Layout locale="ro" messages={messages.ro}>
      <HeroSection messages={messages.ro} />
      <ServiceShowcase messages={messages.ro} />
      <FAQ messages={messages.ro} />
      <CallToAction messages={messages.ro} />
    </Layout>
  );
} 