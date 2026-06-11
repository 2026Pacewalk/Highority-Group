import ServicesHeroSection from '@/sections/services/ServicesHeroSection';
import ServicesGridSection from '@/sections/services/ServicesGridSection';
import ServiceAccordionSection from '@/sections/services/ServiceAccordionSection';
import CTASection from '@/sections/services/CTASection';
import FAQSection from '@/sections/services/FAQSection';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServiceAccordionSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}
