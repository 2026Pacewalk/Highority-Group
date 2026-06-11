import { Factory, ShoppingBag, Cpu, Car, Boxes, Wrench, Globe, TrendingUp } from 'lucide-react';
import { useRef, type MouseEvent } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const industries = [
  { title: 'Manufacturing', description: 'End-to-end logistics for manufacturing supply chains, from raw materials to finished goods.', icon: Factory },
  { title: 'Retail', description: 'Efficient supply chain solutions for retail distribution, from warehouse to store shelf.', icon: ShoppingBag },
  { title: 'Electronics', description: 'Anti-static packaging, shock-proof handling, and secure delivery for sensitive electronic goods.', icon: Cpu },
  { title: 'Automotive', description: 'Just-in-time parts delivery, vehicle logistics, and component shipping.', icon: Car },
  { title: 'FMCG', description: 'High-volume, fast-turnaround logistics for consumer goods with expiry management.', icon: Boxes },
  { title: 'Industrial Equipment', description: 'Machinery transport, project cargo, and specialized logistics solutions.', icon: Wrench },
  { title: 'E-commerce', description: 'Last-mile delivery, returns management, and scalable fulfillment for online retailers.', icon: Globe },
  { title: 'International Trade', description: 'Import-export logistics, customs clearance, and global trade solutions.', icon: TrendingUp },
];

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };
  return (
    <div className="glow-border-wrapper group">
      <div ref={cardRef} className="glow-border-inner p-8 h-full transition-all duration-400 group-hover:-translate-y-1.5 relative overflow-hidden" onMouseMove={handleMouseMove}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: 'radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), rgba(0, 212, 255, 0.06), transparent)' }} />
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center transition-colors group-hover:bg-[#00D4FF]/20">
            <industry.icon className="w-7 h-7 text-[#00D4FF]" />
          </div>
          <h3 className="font-display text-xl font-normal text-[#0A1628] mt-5 tracking-tight">{industry.title}</h3>
          <p className="mt-2 text-sm font-body text-[#7A8CA5] leading-relaxed">{industry.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="relative w-full section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />
      <div className="container-main relative z-10">
        <ScrollReveal>
          <SectionHeading eyebrow="Industries We Serve" heading="Trusted by Leading Industries" subheading="From manufacturing to automotive, we understand the unique logistics needs of every sector." />
        </ScrollReveal>
        <ScrollReveal className="mt-16" stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => <IndustryCard key={i} industry={industry} />)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
