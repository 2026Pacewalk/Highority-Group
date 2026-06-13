import ScrollReveal from './ui/ScrollReveal';
import { usePartners } from '@/lib/content';
import type { Partner } from '@/data/partnersData';

/* ────────────────────────────────────────────
   Single logo item
   ──────────────────────────────────────────── */
function LogoItem({ partner }: { partner: Partner }) {
  return (
    <div className="flex-shrink-0 w-44 h-20 bg-white border border-[#0A1628]/5 rounded-xl flex items-center justify-center px-4 hover:border-[#00D4FF]/25 hover:shadow-[0_4px_16px_rgba(0,212,255,0.08)] transition-all duration-300">
      <img
        src={partner.logo}
        alt={partner.alt}
        className="max-h-12 max-w-full object-contain"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────
   Main Section
   ──────────────────────────────────────────── */
export default function PartnersSection() {
  const partners = usePartners();
  // Double the logos for seamless infinite loop
  const doubled = [...partners, ...partners];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Subtle cyan glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 100%)' }} />

      <div className="container-main relative z-10 mb-14">
        <ScrollReveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Trusted Partners</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
              Our Partners
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-[600px] mx-auto leading-relaxed">
              Trusted logistics and aviation partners supporting Highority's global cargo and supply chain network.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Single continuous scrolling marquee */}
      <ScrollReveal>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {doubled.map((partner, i) => (
              <LogoItem key={`${partner.name}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
