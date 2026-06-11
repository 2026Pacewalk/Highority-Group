import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Plane, Ship, Truck, ClipboardCheck, Package, Globe, TrendingUp, Zap, TrainFront, Warehouse, Wheat, Apple, ShoppingCart, Cookie, Home, Sparkles, Boxes, Factory } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import MobileMenu from './MobileMenu';

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
  { label: 'Agro Products', href: '/#products', icon: Wheat },
  { label: 'Food & Non-Food Products', href: '/#products', icon: Apple },
  { label: 'FMCG Products', href: '/#products', icon: ShoppingCart },
  { label: 'Snacks & Confectionery', href: '/#products', icon: Cookie },
  { label: 'Household Products', href: '/#products', icon: Home },
  { label: 'Personal Care Products', href: '/#products', icon: Sparkles },
  { label: 'General Trading Items', href: '/#products', icon: Boxes },
  { label: 'Industrial & Commercial Supplies', href: '/#products', icon: Factory },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] flex items-center bg-white border-b border-[#00D4FF]/10 shadow-sm h-16 sm:h-[72px] md:h-20 lg:h-24"
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 xl:container-main">
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
          <nav className="hidden lg:flex items-center gap-8">
            {/* About Us */}
            <Link to="/about-us" className={`relative text-sm font-body text-[#0A1628] transition-colors duration-300 hover:text-[#00D4FF] group ${location.pathname === '/about-us' ? 'text-[#00D4FF]' : ''}`}>
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Our Companies */}
            <Link to="/our-companies" className={`relative text-sm font-body text-[#0A1628] transition-colors duration-300 hover:text-[#00D4FF] group ${location.pathname === '/our-companies' ? 'text-[#00D4FF]' : ''}`}>
              Our Companies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Global Network */}
            <Link to="/global-network" className={`relative text-sm font-body text-[#0A1628] transition-colors duration-300 hover:text-[#00D4FF] group ${location.pathname === '/global-network' ? 'text-[#00D4FF]' : ''}`}>
              Global Network
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-body text-[#0A1628] transition-colors duration-300 hover:text-[#00D4FF]">
                <span className={location.pathname.startsWith('/services') ? 'text-[#00D4FF]' : ''}>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div
                    className="rounded-2xl p-6 w-[540px] bg-white/95 backdrop-blur-3xl border border-[#00D4FF]/10 shadow-lg"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#00D4FF]/5 transition-all duration-300 group"
                        >
                          <span className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                            <s.icon className="w-4 h-4 text-[#00D4FF]" />
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
              <button className="flex items-center gap-1 text-sm font-body text-[#0A1628] transition-colors duration-300 hover:text-[#00D4FF]">
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="rounded-2xl p-6 w-[420px] bg-white/95 backdrop-blur-3xl border border-[#00D4FF]/10 shadow-lg">
                    <div className="grid grid-cols-2 gap-3">
                      {productLinks.map((p) => (
                        <Link
                          key={p.label}
                          to={p.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#00D4FF]/5 transition-all duration-300 group"
                        >
                          <span className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                            <p.icon className="w-4 h-4 text-[#00D4FF]" />
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

            {/* Contact Us */}
            <Link to="/contact-us" className={`relative text-sm font-body text-[#0A1628] transition-colors duration-300 hover:text-[#00D4FF] group ${location.pathname === '/contact-us' ? 'text-[#00D4FF]' : ''}`}>
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <PrimaryButton to="/request-quote" size="small">
              Request Quote
            </PrimaryButton>
          </div>

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
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
