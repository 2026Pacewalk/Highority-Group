import { useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import gsap from 'gsap';

const faqs = [
  { q: 'What is the difference between Air Freight and Sea Freight?', a: 'Air freight is ideal for time-sensitive shipments, offering delivery within 1-7 days globally. It\'s more expensive but significantly faster. Sea freight is cost-effective for larger, non-urgent shipments, with transit times of 15-45 days depending on the route.' },
  { q: 'Do you handle customs clearance for international shipments?', a: 'Yes, we provide full customs house agency (CHA) services. Our experienced team handles all documentation, duty calculations, HS code classification, and regulatory compliance for both imports and exports.' },
  { q: 'Do you provide warehousing and distribution services?', a: 'Yes, we offer secure warehousing, inventory management, order fulfillment, and pan-India distribution. Our facilities include climate-controlled storage and real-time inventory tracking systems.' },
  { q: 'What is your coverage for domestic road and rail transport?', a: 'We provide pan-India coverage through our By Road / Line Haul and By Train services, connecting all major cities and industrial corridors with scheduled delivery options.' },
  { q: 'What is included in Door-to-Door delivery service?', a: 'Our door-to-door service includes pickup from your location, professional packaging, all documentation preparation, customs clearance at origin and destination, international transport, and final delivery.' },
  { q: 'How quickly can I get a freight quote?', a: 'We provide customized quotes within 24 hours of receiving your request. For urgent shipments, our team can expedite this process. Simply fill out our quote request form or call us directly.' },
];

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    if (contentRef.current) {
      if (isOpen) gsap.to(contentRef.current, { height: 0, duration: 0.4, ease: 'power3.inOut' });
      else { gsap.set(contentRef.current, { height: 'auto' }); const h = contentRef.current.offsetHeight; gsap.fromTo(contentRef.current, { height: 0 }, { height: h, duration: 0.4, ease: 'power3.inOut' }); }
    }
    onToggle();
  };
  return (
    <div className="rounded-xl border border-[#0A1628]/5 bg-white">
      <button onClick={handleToggle} className="w-full flex items-center justify-between px-6 py-4.5 text-left">
        <span className="text-base font-body font-medium text-[#0A1628] pr-4">{item.q}</span>
        <Plus className={`w-[18px] h-[18px] text-[#7A8CA5] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <div className="px-6 pb-5"><p className="text-[15px] font-body text-[#7A8CA5] leading-[1.7]">{item.a}</p></div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setOpenIndices(prev => { const next = new Set(prev); if (next.has(i)) next.delete(i); else next.add(i); return next; });
  return (
    <section className="relative w-full py-24 bg-[#F0F4F8]">
      <div className="container-main max-w-[800px]">
        <ScrollReveal>
          <SectionHeading eyebrow="FAQ" heading="Common Questions" subheading="Find answers to frequently asked questions about our services." />
        </ScrollReveal>
        <ScrollReveal className="mt-12" stagger={0.08}>
          <div className="space-y-2">
            {faqs.map((item, i) => <FAQItem key={i} item={item} isOpen={openIndices.has(i)} onToggle={() => toggle(i)} />)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
