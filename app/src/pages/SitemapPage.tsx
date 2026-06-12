import { Link } from 'react-router-dom';
import {
  ChevronLeft, Map, FileCode2, ArrowUpRight, Home as HomeIcon,
  Truck, Building2, ScrollText,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const sections = [
  {
    title: 'Main Pages',
    icon: HomeIcon,
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Services', href: '/services' },
      { label: 'Our Companies', href: '/our-companies' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Global Network', href: '/global-network' },
      { label: 'Request Quote', href: '/request-quote' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Careers', href: '/careers' },
      { label: 'Track Shipment', href: '/track-shipment' },
    ],
  },
  {
    title: 'Our Services',
    icon: Truck,
    links: [
      { label: 'Air Freight', href: '/air-freight' },
      { label: 'Sea Freight', href: '/sea-freight' },
      { label: 'Door to Door Delivery', href: '/door-to-door-delivery' },
      { label: 'CHA Services', href: '/cha-services' },
      { label: 'Domestic Priority', href: '/domestic-priority' },
      { label: 'Import Express', href: '/import-express' },
      { label: 'By Road / Line Haul', href: '/by-road-line-haul' },
      { label: 'By Train', href: '/by-train' },
      { label: 'Warehousing & Distribution', href: '/warehousing-distribution' },
      { label: 'International Marketing', href: '/international-marketing' },
      { label: 'Global Network', href: '/global-network' },
    ],
  },
  {
    title: 'Group Companies',
    icon: Building2,
    links: [
      { label: 'TK Transport Services India', href: '/companies/tk-transport-services-india' },
      { label: 'Highority Impex Trading LLC', href: '/companies/highority-impex-trading-llc' },
      { label: 'Highfive Global Ltd', href: '/companies/highfive-global-ltd' },
    ],
  },
  {
    title: 'Legal',
    icon: ScrollText,
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main>
      {/* ════════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />

        <div className="container-main relative z-10 text-center pt-24 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Site Navigation</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            Sitemap
          </h1>
          <p className="mt-5 text-lg font-body text-white/70 max-w-[720px] mx-auto leading-relaxed">
            A complete overview of every page on the Highority Group website — explore our services, companies, and resources from one place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium font-body text-[#0A1628] bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
            >
              <FileCode2 className="w-4 h-4" />
              View sitemap.xml
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — PAGE DIRECTORY
          ════════════════════════════════════════════ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[25%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />

        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">All Pages</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Explore the Website
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="relative bg-white border border-[#0A1628]/5 rounded-2xl p-7 transition-all duration-400 hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/25"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 text-[#00D4FF]" />
                    </span>
                    <h3 className="font-display text-xl font-medium text-[#0A1628]">{section.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link.href}`}>
                        <Link
                          to={link.href}
                          className="group inline-flex items-center gap-1.5 text-sm font-body text-[#5A6B82] hover:text-[#0A1628] transition-colors duration-300"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#00D4FF] opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* XML sitemap note */}
          <ScrollReveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#F5F8FA] border border-[#0A1628]/5 p-6">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="hidden sm:flex w-10 h-10 rounded-lg bg-[#00D4FF]/10 items-center justify-center flex-shrink-0">
                  <Map className="w-5 h-5 text-[#00D4FF]" />
                </span>
                <p className="text-sm font-body text-[#5A6B82] leading-relaxed">
                  Looking for the machine-readable version? Our XML sitemap helps search engines discover and index every page.
                </p>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium font-body text-[#0A1628] border border-[#0A1628]/10 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all duration-300 whitespace-nowrap"
              >
                <FileCode2 className="w-4 h-4 text-[#00D4FF]" />
                View sitemap.xml
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
