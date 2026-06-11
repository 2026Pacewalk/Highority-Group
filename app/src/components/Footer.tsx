import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { offices } from '@/data/officesData';

/* Custom X (Twitter) Icon */
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Companies', href: '/our-companies' },
  { label: 'Request Quote', href: '/request-quote' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Global Network', href: '/global-network' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact-us' },
];

const serviceLinks = [
  { label: 'Air Freight', href: '/services/air-freight' },
  { label: 'Sea Freight', href: '/services/sea-freight' },
  { label: 'Door to Door Delivery', href: '/services/door-to-door-delivery' },
  { label: 'CHA Services', href: '/services/cha-services' },
  { label: 'Domestic Priority', href: '/services/domestic-priority' },
  { label: 'Import Express', href: '/services/import-express' },
  { label: 'By Road / Line Haul', href: '/services/by-road-line-haul' },
  { label: 'By Train', href: '/services/by-train' },
  { label: 'Warehousing & Distribution', href: '/services/warehousing-distribution' },
  { label: 'International Marketing', href: '/services/international-marketing' },
  { label: 'Global Network', href: '/services/global-network' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1628] overflow-hidden">
      {/* Animated gradient top border */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />
        <div className="absolute top-0 w-20 h-full bg-[#00D4FF]/80 rounded-full blur-sm" style={{ animation: 'border-glow-dot 10s linear infinite' }} />
      </div>

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid-bg opacity-50 pointer-events-none" />

      <div className="container-main relative z-10 pt-20 pb-24 md:pb-8">
        {/* Main grid: Brand | Links | Services | Offices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo-footer.png" alt="Highority Group" className="h-16 sm:h-[72px] w-auto max-w-full object-contain" />
            </Link>
            <p className="mt-4 text-sm font-body text-[#7A8CA5] leading-relaxed max-w-[280px]">
              Premium global logistics & freight solutions. Fast, secure, intelligent cargo transportation worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#7A8CA5] hover:text-[#00D4FF] transition-colors duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1SARoJ4p6q/" target="_blank" rel="noopener noreferrer" className="text-[#7A8CA5] hover:text-[#00D4FF] transition-colors duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/highorityindia/" target="_blank" rel="noopener noreferrer" className="text-[#7A8CA5] hover:text-[#00D4FF] transition-colors duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/HighorityGroup" target="_blank" rel="noopener noreferrer" className="text-[#7A8CA5] hover:text-[#00D4FF] transition-colors duration-300 hover:scale-110">
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-body text-[#7A8CA5] hover:text-white transition-colors duration-300 relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-body text-[#7A8CA5] hover:text-white transition-colors duration-300 relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-4">Our Offices</h4>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.id} className="group">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3 h-3 text-[#00D4FF]" />
                    <span className="text-xs font-body text-white font-medium">{office.city}</span>
                    <span className="text-[10px] font-body text-[#7A8CA5]">({office.type})</span>
                  </div>
                  <p className="text-xs font-body text-[#7A8CA5] leading-relaxed pl-4.5">{office.address}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
              <a href="tel:+917087087333" className="flex items-center gap-2 text-sm font-body text-white hover:text-[#00D4FF] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#00D4FF]" /> +91-70870-87333
              </a>
              <a href="mailto:contact@highority.in" className="flex items-center gap-2 text-xs font-body text-[#00D4FF] hover:underline">
                <Mail className="w-3 h-3" /> contact@highority.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-[#7A8CA5]">
            &copy; {new Date().getFullYear()} Highority Group. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-body text-[#7A8CA5]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-white/10">|</span>
            <span>Designed by <a href="https://pacewalk.com" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">PACEWALK</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
