import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function CTASection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 70% 50%, rgba(0, 212, 255, 0.06) 0%, transparent 100%)' }} />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Ready to Ship?</h2>
              <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-[520px] leading-relaxed">Get a personalized freight quote tailored to your cargo. Our experts will recommend the best shipping method and provide competitive pricing within 24 hours.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-body text-[#7A8CA5]">
                <span className="text-[#00D4FF]">✓</span> No hidden fees
                <span className="text-[#00D4FF]">✓</span> 24-hour response
                <span className="text-[#00D4FF]">✓</span> Door-to-door available
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2 flex flex-col items-start lg:items-center gap-4">
            <ScrollReveal delay={0.3}>
              <PrimaryButton to="/request-quote" size="large">Request a Quote</PrimaryButton>
              <a href="tel:+917087087333" className="block mt-4 text-sm font-body text-[#0A1628] hover:text-[#00D4FF] transition-colors text-center w-full">Or call us: +91-70870-87333</a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
