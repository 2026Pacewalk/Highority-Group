import { Globe, MapPin, Award, ThumbsUp, Package, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Counter from '@/components/ui/Counter';

const stats = [
  { number: 150000, suffix: '+', label: 'Successful Deliveries', icon: Globe },
  { number: 50, suffix: '+', label: 'Countries Connected', icon: MapPin },
  { number: 7, suffix: '+', label: 'Years of Excellence', icon: Award },
  { number: 99, suffix: '%', label: 'Client Satisfaction', icon: ThumbsUp },
  { number: 500, suffix: '+', label: 'Cargo Types Handled', icon: Package },
  { number: 200, suffix: '+', label: 'Logistics Experts', icon: Users },
];

export default function TrustSection() {
  return (
    <section className="relative w-full section-padding bg-white">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading eyebrow="Why Trust Us" heading="Your Cargo, Our Priority" subheading="Delivering excellence across air, sea, and land with precision handling and real-time tracking." />
        </ScrollReveal>
        <ScrollReveal className="mt-16" stagger={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-[#00D4FF]/10 rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/30" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-[clamp(36px,4vw,56px)] font-normal text-[#0A1628] leading-none">
                      <Counter target={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs font-body text-[#7A8CA5] mt-3 uppercase tracking-[0.08em]">{stat.label}</p>
                  </div>
                  <stat.icon className="w-10 h-10 text-[#00D4FF] flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
