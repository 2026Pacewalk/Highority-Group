import { Plane, Ship, Truck, ClipboardCheck, ArrowRight, Zap, Package, Globe, TrendingUp, TrainFront, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = [
  { title: 'Air Freight', description: 'Time-critical cargo delivered globally through our network of airline partners.', image: '/assets/service-air-freight.jpg', icon: Plane, href: '/air-freight' },
  { title: 'Sea Freight', description: 'Cost-effective FCL and LCL container shipping across all major trade routes.', image: '/assets/service-sea-freight.jpg', icon: Ship, href: '/sea-freight' },
  { title: 'Door to Door', description: 'End-to-end logistics from pickup at origin to final destination.', image: '/assets/service-door-to-door.jpg', icon: Truck, href: '/door-to-door-delivery' },
  { title: 'CHA Services', description: 'Expert customs house agency services for smooth customs processing.', image: '/assets/service-cha.jpg', icon: ClipboardCheck, href: '/cha-services' },
  { title: 'Domestic Priority', description: 'Fast domestic delivery with next-day service to all major cities.', image: '/assets/service-domestic-priority.jpg', icon: Zap, href: '/domestic-priority' },
  { title: 'Import Express', description: 'Fast-track import solutions from global origins into India.', image: '/assets/service-import-express.jpg', icon: Package, href: '/import-express' },
  { title: 'By Road / Line Haul', description: 'Intercity and long-distance road cargo transportation across India.', image: '/assets/service-by-road.jpg', icon: Truck, href: '/by-road-line-haul' },
  { title: 'By Train', description: 'Cost-effective rail freight for bulk cargo with pan-India coverage.', image: '/assets/service-by-train.jpg', icon: TrainFront, href: '/by-train' },
  { title: 'Warehousing', description: 'Secure storage, inventory management, and distribution solutions.', image: '/assets/service-warehousing.jpg', icon: Warehouse, href: '/warehousing-distribution' },
  { title: 'International Marketing', description: 'Connect with global trade opportunities and strategic partnerships.', image: '/assets/service-international-marketing.jpg', icon: TrendingUp, href: '/international-marketing' },
  { title: 'Global Network', description: '50+ countries connected through direct offices and trusted partners.', image: '/assets/service-global-network.jpg', icon: Globe, href: '/global-network' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 100%)' }} />

      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Core Services"
          heading="Comprehensive Logistics Solutions"
          subheading="End-to-end freight and cargo services designed to move your goods efficiently, safely, and on time — across India and the globe."
        />

        <ScrollReveal stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group relative bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/25"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-normal text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-body text-[#7A8CA5] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#00D4FF] text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
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
