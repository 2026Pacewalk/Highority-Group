import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, ChevronLeft, Plus, Shield, Globe, TrendingUp, Clock } from 'lucide-react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollReveal from './ui/ScrollReveal';
import PrimaryButton from './ui/PrimaryButton';
import type { ServiceData } from '@/data/serviceData';
import { servicesData } from '@/data/serviceData';

function FAQItem({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
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

interface ServicePageTemplateProps {
  service: ServiceData;
}

const defaultWhyUs = [
  { title: 'Expert Handling', desc: 'Our certified team ensures your cargo is managed with precision and care throughout the journey.', icon: Shield },
  { title: 'Global Network', desc: 'Access to 50+ countries through our direct offices and trusted partner network.', icon: Globe },
  { title: 'Real-Time Tracking', desc: 'Monitor your shipment 24/7 with our advanced digital tracking platform.', icon: TrendingUp },
  { title: '24/7 Support', desc: 'Our dedicated team is available round-the-clock to assist you at every step.', icon: Clock },
];

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());
  const toggleFaq = (i: number) => setOpenFaq(p => { const n = new Set(p); if (n.has(i)) n.delete(i); else n.add(i); return n; });

  const relatedServices = service.relatedSlugs.map(s => servicesData[s]).filter(Boolean);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.5) 0%, rgba(10,22,40,0.75) 60%, #0A1628 100%)' }} />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />

        <div className="container-main relative z-10 text-center pt-24">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">{service.title}</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">{service.subtitle}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <PrimaryButton to="/request-quote">Request a Quote</PrimaryButton>
            <a href="tel:+917087087333" className="inline-flex items-center gap-2 text-white font-body hover:text-[#00D4FF] transition-colors">
              <Phone className="w-4 h-4" /> +91-70870-87333
            </a>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="relative w-full py-24 bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Overview</span>
            </div>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628] mb-6">What is {service.title}?</h2>
            <p className="text-lg font-body text-[#7A8CA5] leading-relaxed">{service.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="relative w-full py-24 bg-[#F0F4F8]">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Key Benefits</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Why Choose Our {service.title} Service</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <div key={i} className="bg-white border border-[#00D4FF]/10 rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/30">
                  <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5">
                    <b.icon className="w-7 h-7 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-display text-xl font-normal text-[#0A1628] mb-2">{b.title}</h3>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">How It Works</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Our {service.title} Process</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <div key={i} className="relative">
                  <div className="text-[56px] font-display font-normal text-[#00D4FF]/20 leading-none mb-4">{p.step}</div>
                  <h3 className="font-display text-xl font-normal text-[#0A1628] mb-2">{p.title}</h3>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{p.desc}</p>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-[#00D4FF]/30" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="relative w-full py-24 bg-[#F0F4F8]">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Industries</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Industries We Serve</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.06}>
            <div className="flex flex-wrap justify-center gap-3">
              {service.industries.map((ind, i) => (
                <div key={i} className="px-6 py-3 rounded-full border border-[#0A1628]/10 bg-white text-[#0A1628] font-body text-sm transition-all duration-300 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/30">
                  {ind}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE HIGHORITY ===== */}
      <section className="relative w-full py-24 bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Why Highority</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">The Highority Advantage</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {defaultWhyUs.map((w, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-5">
                    <w.icon className="w-7 h-7 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-display text-lg font-normal text-[#0A1628] mb-2">{w.title}</h3>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      {relatedServices.length > 0 && (
        <section className="relative w-full py-24 bg-[#F0F4F8]">
          <div className="container-main">
            <ScrollReveal>
              <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Explore More</span>
                </div>
                <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Related Services</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={0.1}>
              <div className={`grid grid-cols-1 ${relatedServices.length === 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-3'} gap-6`}>
                {relatedServices.map((rs, i) => (
                  <Link key={i} to={`/${rs.slug}`} className="group block bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)]">
                    <div className="relative h-44 overflow-hidden">
                      <img src={rs.image} alt={rs.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1628]/60" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-normal text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">{rs.title}</h3>
                      <p className="mt-2 text-sm font-body text-[#7A8CA5] line-clamp-2">{rs.subtitle}</p>
                      <div className="mt-4 flex items-center gap-2 text-[#00D4FF] text-sm font-body group-hover:gap-3 transition-all">
                        <span>View Service</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      <section className="relative w-full py-24 bg-white">
        <div className="container-main max-w-[800px]">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">FAQ</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Common Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.08}>
            <div className="space-y-2">
              {service.faqs.map((f, i) => <FAQItem key={i} item={f} isOpen={openFaq.has(i)} onToggle={() => toggleFaq(i)} />)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== REQUEST QUOTE CTA ===== */}
      <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
        </div>
        <div className="container-main relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Ready to Ship Your {service.title}?</h2>
              <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">Get a personalized quote tailored to your cargo. Our experts will recommend the best solution and provide competitive pricing within 24 hours.</p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                <PrimaryButton to="/request-quote" size="large">Request a Quote</PrimaryButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="relative w-full py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">Have Questions About {service.title}?</h2>
              <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">Our logistics experts are here to help. Reach out to us for personalized assistance with your shipping requirements.</p>
              <div className="mt-8 space-y-4">
                <a href="tel:+917087087333" className="flex items-center gap-4 text-white hover:text-[#00D4FF] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center"><Phone className="w-5 h-5 text-[#00D4FF]" /></div>
                  <div><p className="text-xs text-[#7A8CA5] font-body">Call Us</p><p className="font-body font-medium">+91-70870-87333</p></div>
                </a>
                <a href="mailto:contact@highority.in" className="flex items-center gap-4 text-white hover:text-[#00D4FF] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center"><Mail className="w-5 h-5 text-[#00D4FF]" /></div>
                  <div><p className="text-xs text-[#7A8CA5] font-body">Email Us</p><p className="font-body font-medium">contact@highority.in</p></div>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 backdrop-blur-xl border border-[#00D4FF]/10 rounded-2xl p-8">
                <h3 className="font-display text-xl text-white mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-[#7A8CA5]/60 focus:border-[#00D4FF]/60 focus:outline-none transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-[#7A8CA5]/60 focus:border-[#00D4FF]/60 focus:outline-none transition-all" />
                  <textarea rows={3} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-[#7A8CA5]/60 focus:border-[#00D4FF]/60 focus:outline-none transition-all resize-none" />
                  <button className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-[#0A1628] font-body font-medium rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">Send Message</button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
