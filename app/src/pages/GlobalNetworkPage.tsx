import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Navigation, Phone, Mail } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import PartnersSection from '@/components/PartnersSection';
import { offices } from '@/data/officesData';

export default function GlobalNetworkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />
        <div className="container-main relative z-10 text-center pt-24 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Worldwide Network</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            Global Network
          </h1>
          <p className="mt-5 text-lg font-body text-white/70 max-w-[680px] mx-auto leading-relaxed">
            50+ countries served through our network of 5 offices across India and the Middle East, supported by trusted aviation and logistics partners.
          </p>
        </div>
      </section>

      {/* Office Network */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[25%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Offices</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Office Network
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div key={office.id} className="glow-border-wrapper group">
                  <div className="glow-border-inner p-8 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center">
                        {office.type === 'Corporate Office' ? <Navigation className="w-5 h-5 text-[#00D4FF]" /> : <MapPin className="w-5 h-5 text-[#00D4FF]" />}
                      </div>
                      <span className="text-xs font-body text-[#00D4FF] uppercase tracking-wider font-medium">{office.type}</span>
                    </div>
                    <h3 className="font-display text-lg font-normal text-[#0A1628] mb-2">{office.name}</h3>
                    <p className="text-sm font-body text-[#7A8CA5] leading-relaxed mb-4">{office.address}</p>
                    <div className="mt-auto space-y-1.5">
                      {office.phones.map((phone, i) => (
                        <a key={i} href={`tel:${phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-sm font-body text-[#0A1628] hover:text-[#00D4FF] transition-colors">
                          <Phone className="w-3.5 h-3.5 text-[#00D4FF]" /> {phone}
                        </a>
                      ))}
                      {office.emails.map((email, i) => (
                        <a key={i} href={`mailto:${email}`} className="flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors">
                          <Mail className="w-3.5 h-3.5 text-[#7A8CA5]" /> {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners */}
      <PartnersSection />

      {/* CTA */}
      <section className="relative w-full py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
        </div>
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Get Started</span>
            </div>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Ship Across Our Global Network
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">
              Connect with our logistics experts to plan your international shipments through our trusted partner network.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <PrimaryButton to="/request-quote">Request a Quote</PrimaryButton>
              <PrimaryButton to="/contact-us">Contact Us</PrimaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
