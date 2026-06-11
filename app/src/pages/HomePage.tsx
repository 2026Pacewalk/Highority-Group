import { useState, useEffect } from 'react';
import HeroSection from '@/sections/home/HeroSection';
import TrustSection from '@/sections/home/TrustSection';
import ServicesSection from '@/sections/home/ServicesSection';
import GlobalNetworkSection from '@/sections/home/GlobalNetworkSection';
import WhyChooseUsSection from '@/sections/home/WhyChooseUsSection';
import IndustriesSection from '@/sections/home/IndustriesSection';
import CertificationsSection from '@/components/CertificationsSection';
import PartnersSection from '@/components/PartnersSection';
import OurCompaniesSection from '@/components/OurCompaniesSection';
import QuoteFormSection from '@/sections/home/QuoteFormSection';
import BlogSection from '@/sections/home/BlogSection';
import ProductCategoriesSection from '@/sections/home/ProductCategoriesSection';

interface HomePageProps {
  loaderDone: boolean;
}

export default function HomePage({ loaderDone }: HomePageProps) {
  const [localLoaderDone, setLocalLoaderDone] = useState(false);

  useEffect(() => {
    if (loaderDone) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => setLocalLoaderDone(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loaderDone]);

  return (
    <main>
      <HeroSection loaderDone={localLoaderDone} />
      <OurCompaniesSection />
      <TrustSection />
      <ServicesSection />
      <ProductCategoriesSection />
      <GlobalNetworkSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CertificationsSection />
      <PartnersSection />
      <QuoteFormSection />
      <BlogSection />
    </main>
  );
}
