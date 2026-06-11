import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import {
  X, ChevronDown, Plane, Ship, Truck, ClipboardCheck,
  Package, Zap, TrainFront, Warehouse,
  Wheat, Apple, ShoppingCart, Cookie, Home as HomeIcon, Sparkles, Boxes, Factory,
  Phone, Mail, MapPin, ArrowRight
} from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Global Network', href: '/global-network' },
  { label: 'Services', href: '/services', hasSubmenu: true },
  { label: 'Products', href: '/products', hasSubmenu: true },
  { label: 'Contact Us', href: '/contact-us' },
];

const serviceLinks = [
  { label: 'Air Freight', href: '/services/air-freight', icon: Plane },
  { label: 'Sea Freight', href: '/services/sea-freight', icon: Ship },
  { label: 'Door to Door', href: '/services/door-to-door-delivery', icon: Truck },
  { label: 'CHA Services', href: '/services/cha-services', icon: ClipboardCheck },
  { label: 'Domestic Priority', href: '/services/domestic-priority', icon: Zap },
  { label: 'Import Express', href: '/services/import-express', icon: Package },
  { label: 'By Road / Line Haul', href: '/services/by-road-line-haul', icon: Truck },
  { label: 'By Train', href: '/services/by-train', icon: TrainFront },
  { label: 'Warehousing', href: '/services/warehousing-distribution', icon: Warehouse },
];

const productLinks = [
  { label: 'Agro Products', href: '/products', icon: Wheat },
  { label: 'Food & Non-Food', href: '/products', icon: Apple },
  { label: 'FMCG Products', href: '/products', icon: ShoppingCart },
  { label: 'Snacks & Confectionery', href: '/products', icon: Cookie },
  { label: 'Household Products', href: '/products', icon: HomeIcon },
  { label: 'Personal Care', href: '/products', icon: Sparkles },
  { label: 'General Trading', href: '/products', icon: Boxes },
  { label: 'Industrial Supplies', href: '/products', icon: Factory },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return;
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: 'power3.out', onStart: () => { overlayRef.current!.style.pointerEvents = 'auto'; } });
      gsap.fromTo(panelRef.current, { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.out', delay: 0.05 });
      if (linksRef.current) {
        const items = linksRef.current.querySelectorAll('.menu-item');
        gsap.fromTo(items, { opacity: 0, x: 60 }, { opacity: 1, x: 0, stagger: 0.06, duration: 0.5, ease: 'power3.out', delay: 0.25 });
      }
    } else {
      gsap.to(panelRef.current, { x: '100%', duration: 0.4, ease: 'power3.inOut' });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: 'power2.inOut', onComplete: () => { if (overlayRef.current) overlayRef.current.style.pointerEvents = 'none'; } });
    }
  }, [isOpen]);

  useEffect(() => {
    onClose();
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <div className="lg:hidden">
      <div ref={overlayRef} className="fixed inset-0 z-[105] opacity-0 pointer-events-none" style={{ background: 'rgba(10, 22, 40, 0.85)', backdropFilter: 'blur(12px)' }} onClick={onClose} />
      <div ref={panelRef} className="fixed top-0 right-0 bottom-0 z-[110] w-full max-w-[420px] flex flex-col bg-white shadow-2xl" style={{ transform: 'translateX(100%)', borderLeft: '1px solid rgba(0, 212, 255, 0.1)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-[#00D4FF]/30" />
        <div className="flex items-center justify-between px-4 sm:px-5 pt-4 pb-3 border-b border-[#00D4FF]/10">
          <Link to="/" className="flex items-center group" onClick={onClose}>
            <img
              src="/assets/logo-header.png"
              alt="Highority Group"
              className="h-9 sm:h-10 w-auto object-contain flex-shrink-0"
            />
          </Link>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] flex items-center justify-center shadow-md shadow-[#00D4FF]/20 active:scale-95 transition-transform">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
        <div ref={linksRef} className="flex-1 overflow-y-auto px-4 sm:px-5 py-3 scrollbar-hide">
          <nav className="space-y-1">
            {mainLinks.map((link) => (
              <div key={link.href} className="menu-item opacity-0">
                {!link.hasSubmenu ? (
                  <Link to={link.href} className={`group flex items-center justify-between py-3 px-2 border-b border-[#0A1628]/5 transition-colors ${location.pathname === link.href ? 'text-[#00D4FF]' : 'text-[#0A1628] hover:text-[#00D4FF]'}`}>
                    <span className="font-body text-base">{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ) : link.label === 'Services' ? (
                  <div>
                    <button onClick={() => setServicesOpen(!servicesOpen)} className={`w-full group flex items-center justify-between py-3 px-2 border-b border-[#0A1628]/5 transition-colors ${location.pathname.startsWith('/services') ? 'text-[#00D4FF]' : 'text-[#0A1628] hover:text-[#00D4FF]'}`}>
                      <span className="font-body text-base">{link.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-[#7A8CA5] font-body bg-[#0A1628]/5 px-2 py-0.5 rounded-full">{serviceLinks.length}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-400 ${servicesOpen ? 'max-h-[600px] opacity-100 mt-2 mb-3' : 'max-h-0 opacity-0'}`}>
                      <div className="ml-2 pl-4 border-l border-[#00D4FF]/20 space-y-1">
                        {serviceLinks.map((s) => (
                          <Link key={s.href} to={s.href} onClick={onClose} className={`flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all ${location.pathname === s.href ? 'bg-[#00D4FF]/10 text-[#00D4FF]' : 'text-[#7A8CA5] hover:text-[#0A1628] hover:bg-[#0A1628]/5'}`}>
                            <span className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                              <s.icon className="w-4 h-4 text-[#00D4FF]" />
                            </span>
                            <span className="font-body text-sm">{s.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => setProductsOpen(!productsOpen)} className="w-full group flex items-center justify-between py-3 px-2 border-b border-[#0A1628]/5 transition-colors text-[#0A1628] hover:text-[#00D4FF]">
                      <span className="font-body text-base">{link.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-[#7A8CA5] font-body bg-[#0A1628]/5 px-2 py-0.5 rounded-full">{productLinks.length}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-400 ${productsOpen ? 'max-h-[600px] opacity-100 mt-2 mb-3' : 'max-h-0 opacity-0'}`}>
                      <div className="ml-2 pl-4 border-l border-[#00D4FF]/20 space-y-1">
                        {productLinks.map((p) => (
                          <Link key={p.label} to={p.href} onClick={onClose} className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all text-[#7A8CA5] hover:text-[#0A1628] hover:bg-[#0A1628]/5">
                            <span className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                              <p.icon className="w-4 h-4 text-[#00D4FF]" />
                            </span>
                            <span className="font-body text-sm">{p.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="menu-item opacity-0 mt-6 pt-4 border-t border-[#0A1628]/5">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-3 px-2">Quick Actions</h4>
            <div className="space-y-3 px-2">
              <PrimaryButton to="/request-quote" fullWidth size="small">Request a Quote</PrimaryButton>
              <PrimaryButton to="/track-shipment" fullWidth size="small">Track Shipment</PrimaryButton>
            </div>
          </div>
          <div className="menu-item opacity-0 mt-6 pt-4 border-t border-[#0A1628]/5">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-3 px-2">Get in Touch</h4>
            <div className="space-y-3 px-2">
              <a href="tel:+917087087333" className="flex items-center gap-3 text-[#7A8CA5] hover:text-[#0A1628] transition-colors">
                <Phone className="w-4 h-4 text-[#00D4FF]" />
                <span className="font-body text-sm">+91-70870-87333</span>
              </a>
              <a href="mailto:contact@highority.in" className="flex items-center gap-3 text-[#7A8CA5] hover:text-[#0A1628] transition-colors">
                <Mail className="w-4 h-4 text-[#00D4FF]" />
                <span className="font-body text-sm">contact@highority.in</span>
              </a>
              <div className="flex items-start gap-3 text-[#7A8CA5]">
                <MapPin className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm">Zirakpur, Punjab, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-px w-full overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/40 via-[#00D4FF]/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
