import { Link } from 'react-router-dom';
import {
  Home, PackageSearch, ArrowRight, Compass, Plane, MapPin, Phone,
} from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';

const quickLinks = [
  { label: 'Track Shipment', href: '/track-shipment', icon: PackageSearch },
  { label: 'Our Services', href: '/services', icon: Compass },
  { label: 'Global Network', href: '/global-network', icon: MapPin },
  { label: 'Contact Us', href: '/contact-us', icon: Phone },
];

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] pt-24 pb-16">
      <style>{`
        @keyframes hg-float { 0%,100% { transform: translateY(0) rotate(-8deg); } 50% { transform: translateY(-16px) rotate(-8deg); } }
        @keyframes hg-dash { to { stroke-dashoffset: -1000; } }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px', transform: 'perspective(1000px) rotateX(60deg)', transformOrigin: 'center bottom' }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[#00D4FF]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" />
      </div>

      <div className="container-main relative z-10 text-center">
        {/* Big 404 with a drifting plane */}
        <div className="relative inline-block">
          <h1
            className="font-display font-semibold leading-none tracking-[-0.04em] text-transparent bg-clip-text select-none"
            style={{
              fontSize: 'clamp(120px, 26vw, 300px)',
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(0,212,255,0.85) 60%, rgba(0,168,204,0.5) 100%)',
            }}
          >
            404
          </h1>

          {/* Dashed flight path + plane over the 0 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 240" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M60 190 C 180 60, 320 60, 440 190" stroke="rgba(0,212,255,0.35)" strokeWidth="2" strokeDasharray="6 10" style={{ animation: 'hg-dash 30s linear infinite' }} />
          </svg>
          <span
            className="absolute left-1/2 top-[14%] -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.6)]"
            style={{ animation: 'hg-float 4s ease-in-out infinite' }}
          >
            <Plane className="w-7 h-7 text-[#0A1628]" />
          </span>
        </div>

        {/* Message */}
        <div className="mt-2 flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#00D4FF] font-body">Off the map</span>
        </div>
        <h2 className="font-display text-[clamp(26px,4vw,44px)] font-normal leading-tight tracking-[-0.02em] text-white">
          This shipment took a wrong turn
        </h2>
        <p className="mt-4 text-base font-body text-white/60 max-w-[540px] mx-auto leading-relaxed">
          The page you're looking for doesn't exist, was moved, or the link is broken.
          Let's get you back on route.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <PrimaryButton to="/">
            <Home className="w-4 h-4 mr-1.5" /> Back to Home
          </PrimaryButton>
          <Link
            to="/track-shipment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium font-body text-white border border-white/15 hover:border-[#00D4FF]/50 hover:bg-white/5 transition-all duration-300"
          >
            <PackageSearch className="w-4 h-4 text-[#00D4FF]" /> Track a Shipment
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/5 max-w-lg mx-auto">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#7A8CA5] font-body mb-4">Popular pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="group flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] border border-white/10 px-3 py-4 hover:border-[#00D4FF]/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <l.icon className="w-5 h-5 text-[#00D4FF]" />
                <span className="text-xs font-body text-[#B8C5D6] group-hover:text-white transition-colors flex items-center gap-1">
                  {l.label}
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
