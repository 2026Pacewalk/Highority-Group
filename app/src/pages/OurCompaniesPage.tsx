import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, ArrowRight, Building2, Truck, Globe, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { companies, groupStructure, whyChooseUs } from '@/data/ourCompaniesData';

const iconMap: Record<string, typeof Building2> = {
  'tk-transport': Truck,
  'highority-impex': Globe,
  'highfive-global': TrendingUp,
};

export default function OurCompaniesPage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
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
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">The Highority Group</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            Our Companies
          </h1>
          <p className="mt-5 text-lg font-body text-white/70 max-w-[680px] mx-auto leading-relaxed">
            Building Global Connections Through Logistics, Trading & International Business Solutions.
          </p>
        </div>
      </section>

      {/* ═══ GROUP STRUCTURE DIAGRAM ═══ */}
      <section className="relative w-full py-20 bg-[#F0F4F8] overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Group Structure</span>
              </div>
              <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                {groupStructure.parent}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <div className="max-w-xl mx-auto">
              {/* Parent node */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-[#0A1628] font-display text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  {groupStructure.parent}
                </div>
              </div>
              {/* Vertical line */}
              <div className="flex justify-center mb-6">
                <div className="w-px h-8 bg-gradient-to-b from-[#00D4FF] to-[#00D4FF]/20" />
              </div>
              {/* Child nodes */}
              <div className="space-y-4">
                {groupStructure.children.map((child, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 flex justify-center flex-shrink-0">
                      <div className="w-px h-full bg-[#00D4FF]/20" />
                    </div>
                    <div className="flex-1 bg-white border border-[#0A1628]/5 rounded-xl p-4 flex items-center gap-3 hover:border-[#00D4FF]/30 hover:shadow-[0_4px_16px_rgba(0,212,255,0.08)] transition-all">
                      <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-[#00D4FF]" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-[#0A1628]">{child.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#7A8CA5]" />
                          <span className="text-xs font-body text-[#7A8CA5]">{child.location}</span>
                          <span className="text-[10px] font-body text-[#00D4FF] bg-[#00D4FF]/10 rounded-full px-2 py-0.5">{child.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ COMPANY CARDS ═══ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[25%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Subsidiaries</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Our Group Companies
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companies.map((company) => {
                const IconComp = iconMap[company.id] || Building2;
                return (
                  <div key={company.id} className="group bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/20">
                    {/* Banner */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={company.banner} alt={company.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                            <IconComp className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-[10px] font-body text-[#00D4FF] uppercase tracking-wider bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-0.5">{company.location}</span>
                        </div>
                        <h3 className="font-display text-lg text-white leading-tight">{company.name}</h3>
                        <p className="text-xs font-body text-white/70 mt-0.5">{company.tagline}</p>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm font-body text-[#7A8CA5] leading-relaxed line-clamp-3 mb-4">{company.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {company.services.slice(0, 4).map((s, i) => (
                          <span key={i} className="text-[10px] font-body text-[#00D4FF] bg-[#00D4FF]/5 border border-[#00D4FF]/10 rounded-full px-2.5 py-1">{s}</span>
                        ))}
                        {company.services.length > 4 && (
                          <span className="text-[10px] font-body text-[#7A8CA5] bg-[#F0F4F8] rounded-full px-2.5 py-1">+{company.services.length - 4} more</span>
                        )}
                      </div>
                      <Link
                        to={`/companies/${company.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-body text-[#00D4FF] hover:underline group/link"
                      >
                        View Profile <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Advantages</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Why Choose Highority Group
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="glow-border-wrapper group">
                  <div className="glow-border-inner p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5">
                      <item.icon className="w-7 h-7 text-[#00D4FF]" />
                    </div>
                    <h3 className="font-display text-lg font-normal text-[#0A1628] mb-2">{item.title}</h3>
                    <p className="text-sm font-body text-[#7A8CA5] leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
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
              Partner With the Highority Group
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">
              Connect with our team to explore logistics, trading, and international business opportunities.
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
