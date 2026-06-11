import ScrollReveal from '@/components/ui/ScrollReveal';
import Counter from '@/components/ui/Counter';

/* ── 18 countries with SVG coordinates on 100x80 viewBox ── */
const networkCountries = [
  { name: 'India',          isDirect: true,  x: 65, y: 41, labelOffsetY: 5.5 },
  { name: 'UAE',            isDirect: true,  x: 57, y: 38, labelOffsetY: -3 },
  { name: 'Hong Kong',      isDirect: false, x: 79, y: 39, labelOffsetY: -3 },
  { name: 'Canada',         isDirect: false, x: 20, y: 25, labelOffsetY: -3 },
  { name: 'Singapore',      isDirect: false, x: 77, y: 52, labelOffsetY: 4.5 },
  { name: 'Australia',      isDirect: false, x: 88, y: 68, labelOffsetY: 4.5 },
  { name: 'Oman',           isDirect: false, x: 56, y: 41, labelOffsetY: 5 },
  { name: 'Germany',        isDirect: false, x: 48, y: 26, labelOffsetY: -3 },
  { name: 'Thailand',       isDirect: false, x: 76, y: 44, labelOffsetY: -3 },
  { name: 'Kuwait',         isDirect: false, x: 55, y: 35, labelOffsetY: -3 },
  { name: 'United Kingdom', isDirect: false, x: 44, y: 24, labelOffsetY: -3 },
  { name: 'Uzbekistan',     isDirect: false, x: 60, y: 32, labelOffsetY: -3 },
  { name: 'United States',  isDirect: false, x: 22, y: 33, labelOffsetY: 5.5 },
  { name: 'Philippines',    isDirect: false, x: 84, y: 45, labelOffsetY: 5.5 },
  { name: 'Brazil',         isDirect: false, x: 30, y: 60, labelOffsetY: 5.5 },
  { name: 'South Korea',    isDirect: false, x: 82, y: 35, labelOffsetY: -3 },
  { name: 'Uganda',         isDirect: false, x: 52, y: 50, labelOffsetY: 5.5 },
  { name: 'Sri Lanka',      isDirect: false, x: 68, y: 47, labelOffsetY: 5.5 },
];

/* ── Animated route lines between key hubs ── */
const routeLines = [
  { d: 'M 65 41 Q 61 40 57 38',  dur: '2.5s' },  // India → UAE
  { d: 'M 57 38 Q 67 45 77 52',  dur: '3.0s' },  // UAE → Singapore
  { d: 'M 77 52 Q 78 46 79 39',  dur: '2.8s' },  // Singapore → Hong Kong
  { d: 'M 65 41 Q 55 33 44 24',  dur: '3.5s' },  // India → UK
  { d: 'M 44 24 Q 33 29 22 33',  dur: '3.2s' },  // UK → USA
  { d: 'M 79 39 Q 84 54 88 68',  dur: '3.8s' },  // Hong Kong → Australia
  { d: 'M 65 41 Q 74 47 77 52',  dur: '2.6s' },  // India → Singapore
  { d: 'M 57 38 Q 48 31 44 24',  dur: '3.3s' },  // UAE → UK
];

/* ── Country pills for the list ── */
const countryPills = [
  { name: 'India',              direct: true },
  { name: 'United Arab Emirates', direct: true },
  { name: 'Hong Kong',            direct: false },
  { name: 'Canada',               direct: false },
  { name: 'Singapore',            direct: false },
  { name: 'Australia',            direct: false },
  { name: 'Oman',                 direct: false },
  { name: 'Germany',              direct: false },
  { name: 'Thailand',             direct: false },
  { name: 'Kuwait',               direct: false },
  { name: 'United Kingdom',       direct: false },
  { name: 'Uzbekistan',           direct: false },
  { name: 'United States',        direct: false },
  { name: 'Philippines',          direct: false },
  { name: 'Brazil',               direct: false },
  { name: 'South Korea',          direct: false },
  { name: 'Uganda',               direct: false },
  { name: 'Sri Lanka',            direct: false },
];

export default function GlobalNetworkSection() {
  return (
    <section className="relative w-full section-padding bg-[#0A1628] overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(0, 212, 255, 0.05) 0%, transparent 65%)' }} />

      <div className="container-main relative z-10">
        {/* ── HEADER ── */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Worldwide Network</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Our Network
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-[700px] mx-auto leading-relaxed">
              Strong logistics and cargo connectivity across international markets through direct offices, aviation partners, freight forwarding operations, and global supply chain networks.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── WORLD MAP ── */}
          <ScrollReveal>
            <div className="relative aspect-[16/10] max-w-[580px] mx-auto bg-[#0F1E36]/60 backdrop-blur-sm rounded-2xl p-5 border border-[#00D4FF]/8">
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 80px rgba(0,212,255,0.04)' }} />

              <svg viewBox="0 0 100 80" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Continents */}
                <path d="M15 20 Q20 15 30 18 Q35 16 40 20 Q38 28 30 30 Q22 32 18 28 Q14 25 15 20Z" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.12)" strokeWidth="0.3" />
                <path d="M28 35 Q32 33 36 36 Q38 42 36 48 Q34 55 30 58 Q26 55 24 48 Q22 42 28 35Z" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.09)" strokeWidth="0.3" />
                <path d="M42 18 Q48 14 56 16 Q62 14 68 18 Q72 22 68 28 Q62 32 54 30 Q48 28 44 24 Q40 20 42 18Z" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.12)" strokeWidth="0.3" />
                <path d="M44 34 Q50 32 58 34 Q64 38 60 46 Q56 52 48 50 Q42 46 44 34Z" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.10)" strokeWidth="0.3" />
                <path d="M68 30 Q76 28 82 32 Q88 36 84 44 Q80 50 72 48 Q66 44 68 30Z" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.09)" strokeWidth="0.3" />
                <path d="M82 55 Q88 52 92 56 Q94 62 90 68 Q86 72 82 68 Q78 62 82 55Z" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.09)" strokeWidth="0.3" />

                {/* Animated route lines */}
                {routeLines.map((route, i) => (
                  <path key={i} d={route.d} stroke="#00D4FF" strokeWidth="0.35" strokeDasharray="3 2" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-10" dur={route.dur} repeatCount="indefinite" />
                  </path>
                ))}

                {/* Country pins */}
                {networkCountries.map((c, i) => (
                  <g key={c.name}>
                    {/* Pulse ring */}
                    <circle cx={c.x} cy={c.y} r={c.isDirect ? "2.8" : "2"} fill="none" stroke="#00D4FF" opacity="0.2">
                      <animate attributeName="r" values={`${c.isDirect ? 2 : 1.5};${c.isDirect ? 5 : 4};${c.isDirect ? 2 : 1.5}`} dur={`${2.5 + i * 0.12}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.35;0.08;0.35" dur={`${2.5 + i * 0.12}s`} repeatCount="indefinite" />
                    </circle>
                    {/* Core dot */}
                    <circle cx={c.x} cy={c.y} r={c.isDirect ? "1.4" : "0.9"} fill={c.isDirect ? "#00D4FF" : "#00A8CC"}
                      style={{ filter: c.isDirect ? 'drop-shadow(0 0 4px rgba(0,212,255,0.7))' : 'drop-shadow(0 0 2px rgba(0,168,204,0.4))' }} />
                    {/* Label */}
                    <text x={c.x} y={c.y + c.labelOffsetY} textAnchor="middle"
                      fill={c.isDirect ? "#FFFFFF" : "#7A8CA5"}
                      fontSize={c.isDirect ? "2.8" : "2.2"}
                      fontFamily="Inter, sans-serif"
                      fontWeight={c.isDirect ? "500" : "400"}>
                      {c.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </ScrollReveal>

          {/* ── RIGHT SIDE: Stats + Country Pills ── */}
          <ScrollReveal delay={0.2}>
            <div>
              {/* Stats Card */}
              <div className="glow-border-wrapper mb-8">
                <div className="glow-border-inner-dark p-8 flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="font-display text-[clamp(56px,7vw,80px)] font-normal text-[#00D4FF] leading-none">
                      <Counter target={18} suffix="+" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-body text-[#7A8CA5] uppercase tracking-[0.08em]">Countries Connected</p>
                    <p className="text-sm font-body text-[#7A8CA5] mt-1">Direct offices in India & UAE</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-body text-[#00D4FF] uppercase tracking-wider bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" /> Direct Office
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-body text-[#7A8CA5] uppercase tracking-wider bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7A8CA5]" /> Partner Network
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-body text-[#00D4FF] uppercase tracking-wider bg-[#00D4FF]/5 border border-[#00D4FF]/15 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]/60" /> Global Cargo Partner Network
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Country Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {countryPills.map((country, i) => (
                  <div
                    key={i}
                    className={`group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-body transition-all duration-300 cursor-default ${
                      country.direct
                        ? 'bg-[#00D4FF]/8 border-[#00D4FF]/30 text-white hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/50 hover:shadow-[0_0_12px_rgba(0,212,255,0.1)]'
                        : 'bg-white/3 border-white/8 text-[#7A8CA5] hover:bg-white/6 hover:border-[#00D4FF]/20 hover:text-white'
                    }`}
                  >
                    {country.direct ? (
                      <span className="w-2 h-2 rounded-full bg-[#00D4FF] flex-shrink-0 shadow-[0_0_4px_rgba(0,212,255,0.5)]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#7A8CA5]/40 flex-shrink-0 group-hover:bg-[#00D4FF]/40 transition-colors" />
                    )}
                    <span className="truncate">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
