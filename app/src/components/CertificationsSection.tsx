import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X, ArrowRight, ZoomIn } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import { useCertifications } from '@/lib/content';
import type { Certification } from '@/data/certificationsData';

interface CertificationsSectionProps {
  showViewAll?: boolean;
}

export default function CertificationsSection({ showViewAll = true }: CertificationsSectionProps) {
  const certifications = useCertifications();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Double for seamless loop
  const doubled = [...certifications, ...certifications];

  return (
    <section className="relative w-full section-padding bg-white overflow-hidden">
      {/* Subtle cyan glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />

      <div className="container-main relative z-10 mb-14">
        <ScrollReveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Trust & Compliance</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
              Certified, Compliant & Trusted for Global Trade
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-[700px] mx-auto leading-relaxed">
              Highority follows recognized trade, logistics, customs, aviation, quality, MSME, and food safety compliance standards to support secure international cargo movement.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scrolling marquee */}
      <ScrollReveal>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 animate-marquee" style={{ width: 'max-content' }}>
            {doubled.map((cert, i) => (
              <div
                key={`${cert.id}-${i}`}
                className="flex-shrink-0 w-72 bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/20 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Image */}
                <div className="relative h-44 bg-[#F5F8FA] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0A1628]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-display text-sm font-normal text-[#0A1628] group-hover:text-[#00D4FF] transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-body text-[#7A8CA5]">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* View All CTA */}
      {showViewAll && (
        <div className="container-main relative z-10 mt-12 text-center">
          <ScrollReveal>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-[#0A1628] font-body font-medium px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
            >
              View All Certifications <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(10, 22, 40, 0.9)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#0A1628]/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                  <selectedCert.icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#0A1628]">{selectedCert.title}</h3>
                  <p className="text-xs font-body text-[#7A8CA5]">{selectedCert.issuer}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full border border-[#0A1628]/10 flex items-center justify-center hover:border-[#00D4FF]/50 transition-colors"
              >
                <X className="w-4 h-4 text-[#0A1628]" />
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-6 bg-[#F5F8FA]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-lg shadow-md"
                style={{ objectFit: 'contain', maxHeight: '50vh' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-[#0A1628]/5">
              <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{selectedCert.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-xs font-body text-[#00D4FF] font-medium uppercase tracking-wider">Verified Compliance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
