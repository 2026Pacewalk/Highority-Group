import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin, Facebook, Instagram, MapPin, Phone, Mail, Clock,
  Send, ArrowUpRight, ShieldCheck, ArrowUp, MessageCircle, CheckCircle2,
} from 'lucide-react';
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

const certifications = [
  'IATA Accredited',
  'ISO 9001:2015',
  'FSSAI Licensed',
  'AEO T1',
  'MSME / Udyam',
  'IEC Registered',
];

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1SARoJ4p6q/', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/highorityindia/', Icon: Instagram },
  { label: 'X', href: 'https://x.com/HighorityGroup', Icon: XIcon },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#0A1628] overflow-hidden">
      {/* Animated gradient top border */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />
        <div className="absolute top-0 w-20 h-full bg-[#00D4FF]/80 rounded-full blur-sm" style={{ animation: 'border-glow-dot 10s linear infinite' }} />
      </div>

      {/* Ambient glows + dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-[#00D4FF]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[#00A8CC]/10 blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10 pt-16 pb-24 md:pb-8">
        {/* ===== CTA + Newsletter card ===== */}
        <div className="relative rounded-2xl glass-card-dark overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 md:p-10">
            {/* Left: heading + CTA */}
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#00D4FF] font-body mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                Let's move your cargo
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight">
                Ready to ship smarter, faster & worldwide?
              </h3>
              <p className="mt-3 text-sm font-body text-[#7A8CA5] max-w-md leading-relaxed">
                Get a tailored logistics quote in minutes, or subscribe for shipping insights, rate updates and trade news.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Link
                  to="/request-quote"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium font-body text-[#0A1628] bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
                >
                  Request a Quote
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="https://wa.me/917087087333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium font-body text-white border border-white/15 hover:border-[#00D4FF]/50 hover:bg-white/5 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-[#00D4FF]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: newsletter form */}
            <div className="lg:pl-8 lg:border-l lg:border-white/10">
              <h4 className="text-sm font-medium font-body text-white mb-3">Subscribe to our newsletter</h4>
              {subscribed ? (
                <div className="flex items-center gap-3 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 px-4 py-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <p className="text-sm font-body text-white">Thanks for subscribing! We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg bg-white/5 border border-white/10 pl-10 pr-4 py-3 text-sm font-body text-white placeholder:text-[#7A8CA5] outline-none focus:border-[#00D4FF]/60 focus:bg-white/[0.07] transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium font-body text-[#0A1628] bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Subscribe
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
              <p className="mt-3 text-[11px] font-body text-[#7A8CA5]">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Main grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <img src="/assets/logo-footer.png" alt="Highority Group" className="h-16 sm:h-[72px] w-auto max-w-full object-contain" />
            </Link>
            <p className="mt-4 text-sm font-body text-[#7A8CA5] leading-relaxed max-w-[320px]">
              Premium global logistics & freight solutions. Fast, secure, intelligent cargo transportation across air, sea, road & rail — worldwide.
            </p>

            {/* Certifications / trust */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-white font-body">Certified & Trusted</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] font-body text-[#B8C5D6] bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-[#00D4FF]/40 hover:text-white transition-colors duration-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#7A8CA5] bg-white/5 border border-white/10 hover:text-[#0A1628] hover:bg-[#00D4FF] hover:border-[#00D4FF] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="inline-flex text-sm font-body text-[#7A8CA5] hover:text-white transition-colors duration-300 relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2-col) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-4">Our Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="inline-flex text-sm font-body text-[#7A8CA5] hover:text-white transition-colors duration-300 relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917087087333" className="flex items-start gap-3 group">
                  <span className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[#00D4FF]" />
                  </span>
                  <span className="text-sm font-body text-[#B8C5D6] group-hover:text-white transition-colors pt-1.5">+91-70870-87333</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@highority.in" className="flex items-start gap-3 group">
                  <span className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#00D4FF]" />
                  </span>
                  <span className="text-sm font-body text-[#B8C5D6] group-hover:text-white transition-colors pt-1.5">contact@highority.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#00D4FF]" />
                </span>
                <span className="text-sm font-body text-[#B8C5D6] pt-1.5 leading-relaxed">Mon – Sat: 9:30 AM – 6:30 PM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#00D4FF]" />
                </span>
                <span className="text-sm font-body text-[#7A8CA5] pt-1.5 leading-relaxed">{offices[0].address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Office locations strip ===== */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-white font-body">Our Presence</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {offices.map((office) => (
              <div
                key={office.id}
                className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3 py-3 transition-colors duration-300 hover:border-[#00D4FF]/30"
              >
                <office.icon className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                <span className="flex flex-col min-w-0">
                  <span className="text-sm font-body text-white leading-tight">{office.city}</span>
                  <span className="text-[10px] font-body text-[#7A8CA5] leading-tight truncate">{office.type}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-[#7A8CA5] text-center md:text-left">
            &copy; {year} Highority Group. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-body text-[#7A8CA5]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-white/10">|</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="text-white/10">|</span>
            <span>Designed by <a href="https://pacewalk.com" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">PACEWALK</a></span>
          </div>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="hidden md:flex group w-10 h-10 rounded-lg items-center justify-center text-[#7A8CA5] bg-white/5 border border-white/10 hover:text-[#0A1628] hover:bg-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
