import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { companies } from '@/data/ourCompaniesData';

const iconMap: Record<string, typeof Building2> = {
  'tk-transport': Building2,
  'highority-impex': Globe,
  'highfive-global': TrendingUp,
};

export default function OurCompaniesSection() {
  return (
    <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">The Highority Group</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
              Our Companies
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-[600px] mx-auto leading-relaxed">
              Building Global Connections Through Logistics, Trading & International Business Solutions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companies.map((company) => {
              const IconComp = iconMap[company.id] || Building2;
              return (
                <div key={company.id} className="group bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/20">
                  {/* Banner */}
                  <div className="relative h-40 overflow-hidden">
                    <img src={company.banner} alt={company.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                          <IconComp className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h3 className="font-display text-base text-white leading-tight">{company.name}</h3>
                      <p className="text-xs font-body text-white/60">{company.tagline}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm font-body text-[#7A8CA5] leading-relaxed line-clamp-3 mb-4">{company.description}</p>
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

        <ScrollReveal className="mt-10 text-center">
          <Link
            to="/our-companies"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-[#0A1628] font-body font-medium px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
          >
            View All Companies <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
