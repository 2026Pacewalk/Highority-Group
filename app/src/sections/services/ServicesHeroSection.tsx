import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ServicesHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.querySelectorAll('.animate-in'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out', delay: 0.2 });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/assets/services-hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.6) 0%, rgba(10, 22, 40, 0.85) 70%, #0A1628 100%)' }} />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="container-main relative z-10 text-center pt-24">
        <div className="animate-in opacity-0 flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">What We Offer</span>
        </div>
        <h1 className="animate-in opacity-0 font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">Our Logistics Services</h1>
        <p className="animate-in opacity-0 mt-5 text-lg font-body text-white/70 max-w-[640px] mx-auto leading-relaxed">End-to-end freight solutions tailored to your cargo. From standard shipments to specialized handling, we deliver with precision and care.</p>
        <div className="animate-in opacity-0 mt-10 hidden md:flex items-center justify-center gap-2 text-sm font-body">
          <Link to="/" className="text-white hover:text-[#00D4FF] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-[#7A8CA5]">Services</span>
        </div>
      </div>
    </section>
  );
}
