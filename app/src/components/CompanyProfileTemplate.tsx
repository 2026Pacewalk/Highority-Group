import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, ArrowRight, Building2, Globe, TrendingUp, Phone, Mail } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { whyChooseUs } from '@/data/ourCompaniesData';
import type { Company } from '@/data/ourCompaniesData';
import { useCompanies } from '@/lib/content';

const iconMap: Record<string, typeof Building2> = {
  'tk-transport': Building2,
  'highority-impex': Globe,
  'highfive-global': TrendingUp,
};

interface Props {
  company: Company;
}

export default function CompanyProfileTemplate({ company }: Props) {
  const IconComp = iconMap[company.id] || Building2;
  const companies = useCompanies();
  const relatedCompanies = companies.filter(c => c.id !== company.id);

  return (
    <main>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative w-full min-h-[55vh] flex items-end overflow-hidden">
        <img src={company.banner} alt={company.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-main relative z-10 pb-16 pt-32">
          <Link to="/our-companies" className="inline-flex items-center gap-2 text-sm font-body text-white/60 hover:text-[#00D4FF] transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to Our Companies
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
              <IconComp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span className="text-xs font-body text-[#00D4FF] uppercase tracking-wider">{company.location}</span>
              </div>
            </div>
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            {company.name}
          </h1>
          <p className="mt-3 text-lg font-body text-[#00D4FF]">{company.tagline}</p>
        </div>
      </section>

      {/* ═══ INTRODUCTION ═══ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">About the Company</span>
              </div>
              <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628] mb-6">
                Company Overview
              </h2>
              <p className="text-base font-body text-[#7A8CA5] leading-relaxed">{company.description}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">What We Offer</span>
              </div>
              <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Our Services</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {company.services.map((service, i) => (
                <div key={i} className="group bg-white border border-[#0A1628]/5 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/20">
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mb-3">
                    <span className="text-sm font-display text-[#00D4FF]">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <p className="font-body text-sm text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">{service}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ INDUSTRIES + MARKETS ═══ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Industries</span>
                </div>
                <h3 className="font-display text-2xl font-normal text-[#0A1628] mb-6">Industries We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {company.industries.map((ind, i) => (
                    <span key={i} className="text-sm font-body text-[#0A1628] bg-[#F0F4F8] border border-[#0A1628]/5 rounded-full px-4 py-2 hover:bg-[#00D4FF]/5 hover:border-[#00D4FF]/20 transition-all">{ind}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Markets</span>
                </div>
                <h3 className="font-display text-2xl font-normal text-[#0A1628] mb-6">Markets We Operate In</h3>
                <div className="flex flex-wrap gap-2">
                  {company.markets.map((mkt, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-sm font-body text-[#0A1628] bg-[#00D4FF]/5 border border-[#00D4FF]/15 rounded-full px-4 py-2">
                      <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" /> {mkt}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
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
              <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Why Choose Us</h2>
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

      {/* ═══ RELATED COMPANIES ═══ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Group Companies</span>
              </div>
              <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Related Companies</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relatedCompanies.map((rc) => {
                const RcIcon = iconMap[rc.id] || Building2;
                return (
                  <Link key={rc.id} to={`/companies/${rc.slug}`} className="group flex items-center gap-4 p-5 bg-white border border-[#0A1628]/5 rounded-xl hover:border-[#00D4FF]/30 hover:shadow-[0_8px_24px_rgba(0,212,255,0.08)] transition-all">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${rc.color} flex items-center justify-center flex-shrink-0`}>
                      <RcIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body text-sm font-medium text-[#0A1628] group-hover:text-[#00D4FF] transition-colors truncate">{rc.name}</h4>
                      <p className="text-xs font-body text-[#7A8CA5]">{rc.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#7A8CA5] group-hover:text-[#00D4FF] transition-colors flex-shrink-0" />
                  </Link>
                );
              })}
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
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Get in Touch</span>
            </div>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Work With {company.name}
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">
              Contact us today to discuss how we can support your logistics, trading, and business needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <PrimaryButton to="/request-quote">Request a Quote</PrimaryButton>
              <a href="tel:+917087087333" className="inline-flex items-center gap-2 text-white font-body hover:text-[#00D4FF] transition-colors">
                <Phone className="w-4 h-4" /> +91-70870-87333
              </a>
              <a href={`mailto:${company.email || 'contact@highority.in'}`} className="inline-flex items-center gap-2 text-white font-body hover:text-[#00D4FF] transition-colors">
                <Mail className="w-4 h-4" /> {company.email || 'contact@highority.in'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
