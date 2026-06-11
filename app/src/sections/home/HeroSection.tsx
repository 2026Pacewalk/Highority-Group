import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, Globe, Award, ChevronDown } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton';
import Counter from '@/components/ui/Counter';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  loaderDone: boolean;
}

const cargoItems = [
  { route: 'DEL → DXB', weight: '2.4T', status: 'In Transit', mode: '✈' },
  { route: 'MUM → HAM', weight: '45FT', status: 'Loading', mode: '🚢' },
  { route: 'BOM → JFK', weight: '890KG', status: 'Departed', mode: '✈' },
  { route: 'ZIR → SIN', weight: '12T', status: 'Cleared', mode: '🚞' },
  { route: 'DXB → LHR', weight: '5.2T', status: 'In Transit', mode: '✈' },
  { route: 'DEL → YYZ', weight: '20FT', status: 'Loading', mode: '🚢' },
];

const statCards = [
  { value: 150000, suffix: '+', label: 'Deliveries Worldwide', icon: Package },
  { value: 50, suffix: '+', label: 'Countries Connected', icon: Globe },
  { value: 7, suffix: '+', label: 'Years of Excellence', icon: Award },
];

export default function HeroSection({ loaderDone }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!loaderDone || !contentRef.current) return;
    const tl = gsap.timeline();
    const eyebrow = contentRef.current.querySelector('.hero-eyebrow');
    const words = contentRef.current.querySelectorAll('.hero-word');
    const sub = contentRef.current.querySelector('.hero-sub');
    const ctas = contentRef.current.querySelectorAll('.hero-cta');
    tl.fromTo(eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0)
      .fromTo(words, { opacity: 0, y: 60, rotateX: -20 }, { opacity: 1, y: 0, rotateX: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out' }, 0.2)
      .fromTo(sub, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.8)
      .fromTo(ctas, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, 1.0);
    if (cardsRef.current) {
      tl.fromTo(cardsRef.current.querySelectorAll('.stat-float-card'), { opacity: 0, x: 60 }, { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }, 0.6);
    }
  }, { scope: sectionRef, dependencies: [loaderDone] });

  const headingWords = 'Future of Global Logistics & Freight Solutions'.split(' ');

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100dvh] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/hero-bg.jpg"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]/90" />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px', transform: 'perspective(1000px) rotateX(60deg)', transformOrigin: 'center bottom' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.12) 0%, transparent 60%)' }} />
      <div ref={contentRef} className="container-main relative z-10 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 max-w-2xl">
            <div className="hero-eyebrow opacity-0 flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Global Logistics Solutions</span>
            </div>
            <h1 className="font-display text-[clamp(40px,7vw,80px)] font-normal leading-[1] tracking-[-0.03em] text-white">
              {headingWords.map((word, i) => <span key={i} className="hero-word inline-block mr-[0.3em] opacity-0" style={{ perspective: '1000px' }}>{word}</span>)}
            </h1>
            <p className="hero-sub opacity-0 mt-6 text-lg font-body text-white/70 max-w-[560px] leading-relaxed">Fast, Secure & Intelligent Cargo Transportation Across The World</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="hero-cta opacity-0"><PrimaryButton to="/request-quote">Request Quote</PrimaryButton></div>
              <div className="hero-cta opacity-0"><SecondaryButton to="/track-shipment">Track Shipment</SecondaryButton></div>
            </div>
          </div>
          <div ref={cardsRef} className="hidden lg:flex flex-col gap-4 w-[260px] flex-shrink-0">
            {statCards.map((card, i) => (
              <div key={i} className="stat-float-card opacity-0 glass-card-dark p-6" style={{ marginLeft: `${i * 20}px` }}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-4xl font-normal text-white"><Counter target={card.value} suffix={card.suffix} duration={2} /></div>
                    <p className="text-xs font-body text-[#7A8CA5] mt-1 uppercase tracking-wider">{card.label}</p>
                  </div>
                  <card.icon className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-14 bg-[#0A1628]/80 backdrop-blur-md border-t border-white/5 overflow-hidden">
        <div className="relative flex items-center h-full">
          <div className="flex whitespace-nowrap" style={{ animation: 'cargo-ticker 30s linear infinite' }}>
            {[...cargoItems, ...cargoItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 text-xs font-body text-[#7A8CA5]">
                <span>{item.mode}</span><span className="text-white/80">{item.route}</span><span>—</span><span>{item.weight}</span><span>—</span><span className="text-[#00D4FF]">{item.status}</span>
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A1628]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A1628]/80 to-transparent pointer-events-none" />
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <ChevronDown className="w-5 h-5 text-white" style={{ animation: 'bounce-chevron 2s ease-in-out infinite' }} />
        <span className="text-[10px] uppercase tracking-wider text-white/40 font-body">Scroll to explore</span>
      </div>
    </section>
  );
}
