import { Plane, Ship, Truck, Zap, Package, Globe, TrendingUp, ClipboardCheck, TrainFront, Warehouse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  { title: 'Air Freight', description: 'Time-critical global cargo delivery through our network of airline partners. Same-day, next-day, and charter options.', image: '/assets/service-air-freight.jpg', icon: Plane, href: '/air-freight' },
  { title: 'Sea Freight', description: 'Cost-effective FCL and LCL container shipping across all major international trade routes. Full documentation support.', image: '/assets/service-sea-freight.jpg', icon: Ship, href: '/sea-freight' },
  { title: 'Door to Door Delivery', description: 'Complete logistics from pickup to final delivery. Packaging, documentation, transport, and customs.', image: '/assets/service-door-to-door.jpg', icon: Truck, href: '/door-to-door-delivery' },
  { title: 'CHA Services', description: 'Expert customs house agency services. Documentation, duty optimization, and clearance processing.', image: '/assets/service-cha.jpg', icon: ClipboardCheck, href: '/cha-services' },
  { title: 'Domestic Priority', description: 'Fast domestic delivery with next-day service to all major Indian cities and pan-India coverage.', image: '/assets/service-domestic-priority.jpg', icon: Zap, href: '/domestic-priority' },
  { title: 'Import Express', description: 'Fast-track import solutions from global origins into India with express clearance and delivery.', image: '/assets/service-import-express.jpg', icon: Package, href: '/import-express' },
  { title: 'By Road / Line Haul', description: 'Reliable intercity road freight with FTL, LTL options and pan-India highway corridor coverage.', image: '/assets/service-by-road.jpg', icon: Truck, href: '/by-road-line-haul' },
  { title: 'By Train', description: 'Cost-effective rail freight for bulk cargo. Eco-friendly, large capacity, sealed container security.', image: '/assets/service-by-train.jpg', icon: TrainFront, href: '/by-train' },
  { title: 'Warehousing & Distribution', description: 'Smart storage, inventory management, and efficient distribution solutions across India.', image: '/assets/service-warehousing.jpg', icon: Warehouse, href: '/warehousing-distribution' },
  { title: 'International Marketing', description: 'Connect with global trade opportunities, market insights, and strategic partnerships.', image: '/assets/service-international-marketing.jpg', icon: TrendingUp, href: '/international-marketing' },
  { title: 'Global Network', description: '50+ countries connected through direct offices and trusted partners across six continents.', image: '/assets/service-global-network.jpg', icon: Globe, href: '/global-network' },
];

export default function ServicesGridSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />
      <div className="container-main relative z-10">
        <ScrollReveal>
          <SectionHeading eyebrow="Comprehensive Solutions" heading="Freight Services for Every Need" subheading="From standard cargo to specialized shipments, discover the service that fits your requirements." />
        </ScrollReveal>
        <ScrollReveal className="mt-14" stagger={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={i} to={service.href} className="group block">
                <div className="bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 group-hover:-translate-y-2 group-hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1628]/50" />
                    <div className="absolute top-3 left-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center border border-[#00D4FF]/20">
                      <service.icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-[clamp(18px,2vw,20px)] font-normal text-[#0A1628] tracking-tight group-hover:text-[#00D4FF] transition-colors">{service.title}</h3>
                    <p className="mt-2 text-sm font-body text-[#7A8CA5] leading-relaxed flex-1">{service.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-[#00D4FF] text-sm font-body">
                      <span className="bg-[#00D4FF]/10 px-4 py-2 rounded-lg group-hover:bg-[#00D4FF] group-hover:text-[#0A1628] transition-all duration-300 flex items-center gap-2">
                        View Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
