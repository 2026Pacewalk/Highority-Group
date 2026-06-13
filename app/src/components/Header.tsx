import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Plane, Ship, Truck, ClipboardCheck, Package, Globe, TrendingUp, Zap, TrainFront, Warehouse, Wheat, Apple, ShoppingCart, Cookie, Home, Sparkles, Boxes, Factory } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import MobileMenu from './MobileMenu';

/* Desktop nav link with a centered gradient underline + active state */
function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`relative group py-2 text-[13px] xl:text-sm font-body whitespace-nowrap transition-colors duration-300 ${active ? 'text-[#00D4FF] font-medium' : 'text-[#0A1628] hover:text-[#00D4FF]'}`}
    >
      {label}
      <span className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] transition-all duration-300 ${active ? 'w-5' : 'w-0 group-hover:w-5'}`} />
    </Link>
  );
}

const serviceLinks = [
  { label: 'Air Freight', href: '/services/air-freight', icon: Plane },
  { label: 'Sea Freight', href: '/services/sea-freight', icon: Ship },
  { label: 'Door to Door', href: '/services/door-to-door-delivery', icon: Truck },
  { label: 'CHA Services', href: '/services/cha-services', icon: ClipboardCheck },
  { label: 'Domestic Priority', href: '/services/domestic-priority', icon: Zap },
  { label: 'Import Express', href: '/services/import-express', icon: Package },
  { label: 'By Road / Line Haul', href: '/services/by-road-line-haul', icon: Truck },
  { label: 'By Train', href: '/services/by-train', icon: TrainFront },
  { label: 'Warehousing & Distribution', href: '/services/warehousing-distribution', icon: Warehouse },
  { label: 'International Marketing', href: '/services/international-marketing', icon: TrendingUp },
  { label: 'Global Network', href: '/services/global-network', icon: Globe },
];

const productLinks = [
  { label: 'Agro Products', href: '/products', icon: Wheat },
  { label: 'Food & Non-Food Products', href: '/products', icon: Apple },
  { label: 'FMCG Products', href: '/products', icon: ShoppingCart },
  { label: 'Snacks & Confectionery', href: '/products', icon: Cookie },
  { label: 'Household Products', href: '/products', icon: Home },
  { label: 'Personal Care Products', href: '/products', icon: Sparkles },
  { label: 'General Trading Items', href: '/products', icon: Boxes },
  { label: 'Industrial & Commercial Supplies', href: '/products', icon: Factory },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onServices = location.pathname.startsWith('/services');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(10,22,40,0.08)] border-b border-[#00D4FF]/10'
            : 'bg-white/75 backdrop-blur-md border-b border-[#0A1628]/[0.04]'
        }`}
      >
        <div className="relative flex items-center justify-between h-16 sm:h-[72px] md:h-20 lg:h-24 px-4 sm:px-5 md:px-6 lg:px-8 xl:container-main">
          {/* Logo — Image Only */}
          <Link
            to="/"
            className={`flex items-center z-10 transition-all duration-300 group ${mobileOpen ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <div className="flex-shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]">
              <img
                src="/assets/logo-header.png"
                alt="Highority Group"
                className="h-10 sm:h-11 md:h-12 lg:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            <NavLink to="/about-us" label="About Us" active={location.pathname === '/about-us'} />
            <NavLink to="/our-companies" label="Our Companies" active={location.pathname === '/our-companies'} />
            <NavLink to="/global-network" label="Global Network" active={location.pathname === '/global-network'} />

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`relative group flex items-center gap-1 py-2 text-[13px] xl:text-sm font-body whitespace-nowrap transition-colors duration-300 ${onServices ? 'text-[#00D4FF] font-medium' : 'text-[#0A1628] hover:text-[#00D4FF]'}`}>
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] transition-all duration-300 ${onServices || servicesOpen ? 'w-5' : 'w-0'}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="relative rounded-2xl p-3 w-[560px] bg-white/95 backdrop-blur-3xl border border-[#00D4FF]/10 shadow-[0_20px_60px_rgba(10,22,40,0.18)] ring-1 ring-black/5">
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white/95 border-l border-t border-[#00D4FF]/10" />
                    <div className="grid grid-cols-2 gap-1">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#00D4FF]/[0.07] transition-all duration-200 group"
                        >
                          <span className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF] transition-colors duration-200">
                            <s.icon className="w-4 h-4 text-[#00D4FF] group-hover:text-white transition-colors duration-200" />
                          </span>
                          <span className="text-sm font-body text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">
                            {s.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="relative group flex items-center gap-1 py-2 text-[13px] xl:text-sm font-body whitespace-nowrap text-[#0A1628] hover:text-[#00D4FF] transition-colors duration-300">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] transition-all duration-300 ${productsOpen ? 'w-5' : 'w-0'}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="relative rounded-2xl p-3 w-[440px] bg-white/95 backdrop-blur-3xl border border-[#00D4FF]/10 shadow-[0_20px_60px_rgba(10,22,40,0.18)] ring-1 ring-black/5">
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white/95 border-l border-t border-[#00D4FF]/10" />
                    <div className="grid grid-cols-2 gap-1">
                      {productLinks.map((p) => (
                        <Link
                          key={p.label}
                          to={p.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#00D4FF]/[0.07] transition-all duration-200 group"
                        >
                          <span className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF] transition-colors duration-200">
                            <p.icon className="w-4 h-4 text-[#00D4FF] group-hover:text-white transition-colors duration-200" />
                          </span>
                          <span className="text-sm font-body text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">
                            {p.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/track-shipment" label="Track Shipment" active={location.pathname === '/track-shipment'} />
            <NavLink to="/contact-us" label="Contact Us" active={location.pathname === '/contact-us'} />
          </nav>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2 z-[101]">
            <PrimaryButton to="/request-quote" size="small" className="hidden sm:flex text-xs px-4 py-2">
              Quote
            </PrimaryButton>
            <button
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] flex items-center justify-center shadow-md shadow-[#00D4FF]/20 active:scale-95 transition-transform"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" />
            </button>
          </div>
        </div>

        {/* Bottom accent line — subtle gradient, brighter once scrolled */}
        <div className={`pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-500 ${scrolled ? 'via-[#00D4FF]/50 opacity-100' : 'via-[#00D4FF]/20 opacity-70'}`} />
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
