import ScrollReveal from './ui/ScrollReveal';

/* ────────────────────────────────────────────
   Partner data — all 16 partners
   ──────────────────────────────────────────── */
const partners = [
  { name: 'Air India', logo: '/assets/partners/air-india.png', alt: 'Air India cargo partner logo' },
  { name: 'IndiGo', logo: '/assets/partners/indigo.png', alt: 'IndiGo aviation cargo partner logo' },
  { name: 'Thai Airways', logo: '/assets/partners/thai-airways.png', alt: 'Thai Airways cargo partner logo' },
  { name: 'Air Arabia', logo: '/assets/partners/air-arabia.png', alt: 'Air Arabia logistics partner logo' },
  { name: 'Singapore Airlines', logo: '/assets/partners/singapore-airlines.png', alt: 'Singapore Airlines cargo partner logo' },
  { name: 'Kuwait Airways', logo: '/assets/partners/kuwait-airways.png', alt: 'Kuwait Airways cargo partner logo' },
  { name: 'SalamAir', logo: '/assets/partners/salamair.png', alt: 'SalamAir cargo partner logo' },
  { name: 'Oman Air', logo: '/assets/partners/oman-air.png', alt: 'Oman Air cargo partner logo' },
  { name: 'Uzbekistan Airways', logo: '/assets/partners/uzbekistan-airways.png', alt: 'Uzbekistan Airways cargo partner logo' },
  { name: 'Delhivery', logo: '/assets/partners/delhivery.png', alt: 'Delhivery logistics partner logo' },
  { name: 'Wipro', logo: '/assets/partners/wipro.png', alt: 'Wipro logistics partner logo' },
  { name: 'Shree Ji', logo: '/assets/partners/shree-ji.png', alt: 'Shree Ji logistics partner logo' },
  { name: 'Reliance', logo: '/assets/partners/reliance.png', alt: 'Reliance Industries logistics partner logo' },
  { name: 'SpiceJet', logo: '/assets/partners/spicejet.png', alt: 'SpiceJet cargo partner logo' },
  { name: 'Etihad Airways', logo: '/assets/partners/etihad.png', alt: 'Etihad Airways cargo partner logo' },
  { name: 'Korean Air', logo: '/assets/partners/korean-air.png', alt: 'Korean Air cargo partner logo' },
];

/* ────────────────────────────────────────────
   Single logo item
   ──────────────────────────────────────────── */
function LogoItem({ partner }: { partner: typeof partners[0] }) {
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
