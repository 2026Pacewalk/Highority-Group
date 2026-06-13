import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, X, ChevronLeft, Award,
  ZoomIn, FileCheck, Plane
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { useCertifications } from '@/lib/content';
import type { Certification } from '@/data/certificationsData';

/* ────────────────────────────────────────────
   Compliance strength cards
   ──────────────────────────────────────────── */
const complianceCards = [
  {
    title: 'Import Export Compliance',
    desc: 'DGFT IEC, Spices Board, and AEO T1 MSME certifications ensure seamless cross-border trade operations.',
    icon: FileCheck,
  },
  {
    title: 'Quality Management',
    desc: 'ISO 9001:2015 certified processes guaranteeing consistent quality across all logistics services.',
    icon: Award,
  },
  {
    title: 'Aviation & Cargo Accreditation',
    desc: 'IATA accredited for air cargo operations with direct airline partnerships worldwide.',
    icon: Plane,
  },
  {
    title: 'Food & Trade Licensing',
    desc: 'FSSAI licensed for food cargo and Dubai Chamber registered for Middle East trade.',
    icon: ShieldCheck,
  },
];

export default function CertificationsPage() {
  const certifications = useCertifications();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <main>
      {/* ════════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
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
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Trust & Compliance</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            Certifications & Compliance
          </h1>
          <p className="mt-5 text-lg font-body text-white/70 max-w-[720px] mx-auto leading-relaxed">
            Recognized registrations, licenses, and accreditations supporting trusted logistics, cargo, import-export, aviation, food, and international trade operations.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — CERTIFICATE GRID
          ════════════════════════════════════════════ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[25%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />

        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Credentials</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Verified Compliance Standards
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/25 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00D4FF] via-[#00A8CC] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Certificate Image */}
                  <div className="relative h-56 bg-[#F5F8FA] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Hover overlay with zoom */}
                    <div className="absolute inset-0 bg-[#0A1628]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display text-base font-normal text-[#0A1628] group-hover:text-[#00D4FF] transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-body text-[#00D4FF]">{cert.issuer}</p>
                    <p className="mt-3 text-sm font-body text-[#7A8CA5] leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                    {/* Action buttons */}
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}
                        className="inline-flex items-center gap-1.5 text-sm font-body text-[#00D4FF] hover:underline"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — COMPLIANCE STRENGTH
          ════════════════════════════════════════════ */}
      <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Framework</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Compliance Strength
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceCards.map((card, i) => (
                <div key={i} className="glow-border-wrapper group">
                  <div className="glow-border-inner p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5">
                      <card.icon className="w-7 h-7 text-[#00D4FF]" />
                    </div>
                    <h3 className="font-display text-lg font-normal text-[#0A1628] mb-2">{card.title}</h3>
                    <p className="text-sm font-body text-[#7A8CA5] leading-relaxed flex-1">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — CTA
          ════════════════════════════════════════════ */}
      <section className="relative w-full py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
        </div>
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Get Started</span>
            </div>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Partner With A Certified Logistics Company
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">
              Every shipment we handle meets the highest compliance and safety standards in the industry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <PrimaryButton to="/request-quote">Request a Quote</PrimaryButton>
              <PrimaryButton to="/contact-us">Contact Us</PrimaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ZOOM MODAL
          ════════════════════════════════════════════ */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(10, 22, 40, 0.92)', backdropFilter: 'blur(20px)' }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-[#0A1628]/5 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <selectedCert.icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base md:text-lg text-[#0A1628] truncate">{selectedCert.title}</h3>
                  <p className="text-xs md:text-sm font-body text-[#7A8CA5]">{selectedCert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 rounded-full border border-[#0A1628]/10 flex items-center justify-center hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all"
                >
                  <X className="w-5 h-5 text-[#0A1628]" />
                </button>
              </div>
            </div>

            {/* Certificate Image (scrollable) */}
            <div className="flex-1 overflow-auto bg-[#F5F8FA] p-4 md:p-8">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 md:p-6 border-t border-[#0A1628]/5 flex-shrink-0">
              <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{selectedCert.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-xs font-body text-[#00D4FF] font-medium uppercase tracking-wider">Verified Compliance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
