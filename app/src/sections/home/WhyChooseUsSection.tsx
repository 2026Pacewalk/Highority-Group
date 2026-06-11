import { Check, Zap, Globe, Clock, Shield, FileCheck, Thermometer } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';

const benefits = [
  { title: 'Fast Delivery', description: 'Time-critical shipments with express air freight and priority sea options.', icon: Zap },
  { title: 'Global Reach', description: 'Direct offices in India & UAE, partner network across 50+ countries.', icon: Globe },
  { title: '24/7 Support', description: 'Round-the-clock customer service and shipment monitoring.', icon: Clock },
  { title: 'Secure Transportation', description: 'End-to-end tracking, insurance coverage, and secure handling protocols.', icon: Shield },
  { title: 'Customs Expertise', description: 'Experienced CHA team ensuring smooth clearance and compliance.', icon: FileCheck },
  { title: 'Temperature-Control Solutions', description: 'Specialized cold chain logistics for temperature-sensitive cargo.', icon: Thermometer },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full section-padding bg-[#F0F4F8] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.03) 0%, transparent 50%)' }} />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="glass-card p-4 overflow-hidden" style={{ transform: 'rotate(-4deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                <img src="/assets/dashboard-mockup.jpg" alt="Logistics Dashboard" className="w-full h-auto rounded-lg" />
              </div>
              <div className="glass-card p-3 overflow-hidden absolute -bottom-8 -right-4 w-[70%]" style={{ transform: 'rotate(3deg)', boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}>
                <img src="/assets/cargo-aircraft.jpg" alt="Cargo Aircraft" className="w-full h-auto rounded-lg" />
              </div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2), transparent 70%)', animation: 'float 4s ease-in-out infinite', transform: 'translate(-50%, -50%)' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Why Choose Us</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">The Highority Advantage</h2>
              <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">We combine cutting-edge technology with decades of expertise to deliver logistics solutions that are faster, safer, and smarter.</p>
              <div className="mt-10 space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-normal text-[#0A1628]">{benefit.title}</h4>
                      <p className="text-sm font-body text-[#7A8CA5] mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10"><PrimaryButton to="/about-us">Learn More About Us</PrimaryButton></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
