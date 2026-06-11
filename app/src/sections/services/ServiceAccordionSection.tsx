import { useState, useRef } from 'react';
import { Plus, Plane, Ship, Truck, Zap, Package, Globe, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import gsap from 'gsap';

const serviceDetails = [
  { title: 'Air Freight', icon: Plane, cta: 'Get an Air Freight quote', features: ['Express and standard air cargo options', 'Door-to-airport and door-to-door service', 'Temperature-controlled air transport', 'Charter services for large shipments'] },
  { title: 'Sea Freight', icon: Ship, cta: 'Get a Sea Freight quote', features: ['FCL and LCL options', 'Reefer containers for temperature-sensitive cargo', 'Break bulk and RO-RO services', 'Port-to-port and door-to-door options'] },
  { title: 'Door to Door Delivery', icon: Truck, cta: 'Request Door to Door service', features: ['Pickup from origin address', 'Complete packaging and labeling', 'All documentation handled', 'Delivery to recipient\'s doorstep'] },
  { title: 'Domestic Priority', icon: Zap, cta: 'Get a Domestic Priority quote', features: ['Next-day delivery to major cities', 'Pan-India coverage to 19,000+ pin codes', 'Real-time tracking on every shipment', 'COD available for commercial shipments'] },
  { title: 'Import Express', icon: Package, cta: 'Get an Import Express quote', features: ['Fast-track customs clearance', 'Global supplier pickup service', 'Duty guidance and HS code support', 'Door delivery to your facility'] },
  { title: 'By Road / Line Haul', icon: Truck, cta: 'Get a Road Freight quote', features: ['Pan-India highway corridor coverage', 'FTL and LTL options available', 'GPS-tracked fleet in real-time', 'Scheduled pickup and delivery windows'] },
  { title: 'By Train', icon: Globe, cta: 'Get a Rail Freight quote', features: ['Up to 40% savings vs road freight', 'Large capacity bulk cargo movement', 'Eco-friendly transport option', 'Sealed container security'] },
  { title: 'Warehousing & Distribution', icon: ClipboardCheck, cta: 'Get warehousing support', features: ['Secure storage with 24/7 monitoring', 'Real-time inventory tracking', 'Pick, pack, and ship fulfillment', 'Pan-India distribution network'] },
];

function AccordionItem({ item, isOpen, onToggle }: { item: typeof serviceDetails[0]; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    if (contentRef.current) {
      if (isOpen) gsap.to(contentRef.current, { height: 0, duration: 0.4, ease: 'power3.inOut' });
      else { gsap.set(contentRef.current, { height: 'auto' }); const h = contentRef.current.offsetHeight; gsap.fromTo(contentRef.current, { height: 0 }, { height: h, duration: 0.4, ease: 'power3.inOut' }); }
    }
    onToggle();
  };
  return (
    <div className={`rounded-xl border transition-all duration-300 ${isOpen ? 'bg-[#00D4FF]/5 border-[#00D4FF]/20' : 'bg-white border-[#0A1628]/5'}`}>
      <button onClick={handleToggle} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
          <span className="text-base font-body font-medium text-[#0A1628]">{item.title}</span>
        </div>
        <Plus className={`w-5 h-5 text-[#7A8CA5] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <div className="px-6 pb-6">
          <ul className="space-y-2.5 ml-8">
            {item.features.map((feat, j) => <li key={j} className="flex items-start gap-2 text-sm font-body text-[#7A8CA5]"><span className="w-1 h-1 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />{feat}</li>)}
          </ul>
          <Link to="/request-quote" className="inline-flex items-center gap-2 mt-4 ml-8 text-[#00D4FF] text-sm font-body hover:underline">{item.cta} <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
}

export default function ServiceAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="relative w-full py-24 bg-[#F0F4F8]">
      <div className="container-main max-w-[900px]">
        <ScrollReveal>
          <SectionHeading eyebrow="Service Details" heading="What Each Service Includes" subheading="Click on any service to see what's included and how we can help." />
        </ScrollReveal>
        <ScrollReveal className="mt-12" stagger={0.06}>
          <div className="space-y-3">
            {serviceDetails.map((item, i) => <AccordionItem key={i} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
