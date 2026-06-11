import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  useEffect(() => {
    if (loaderDone) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => setLocalLoaderDone(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loaderDone]);

  // /products lands on the home page and scrolls to the products section.
  // Run after content is laid out, then re-align once images settle.
  useEffect(() => {
    if (pathname !== '/products') return;
    const scrollToProducts = (behavior: ScrollBehavior) =>
      document.getElementById('products')?.scrollIntoView({ behavior, block: 'start' });
    const t1 = setTimeout(() => scrollToProducts('smooth'), 700);
    const t2 = setTimeout(() => scrollToProducts('auto'), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

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
