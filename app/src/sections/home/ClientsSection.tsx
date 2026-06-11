import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const clientNames = ['TECH GLOBAL', 'AUTO TECH', 'ELECTRO SYS', 'RETAIL MAX', 'FMCG GLOBAL', 'INDUSTRIAL CO', 'ECOMMERCE HUB', 'FRESH FOODS'];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-6">
      <div className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 rounded bg-[#0A1628]/10 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-[#00D4FF]/40" />
        </div>
        <span className="text-sm font-display font-medium text-[#0A1628] tracking-wider whitespace-nowrap">{name}</span>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative w-full py-20 bg-[#F0F4F8] border-y border-[#0A1628]/5 overflow-hidden">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading eyebrow="Our Clients" heading="Trusted by Industry Leaders" />
        </ScrollReveal>
      </div>
      <ScrollReveal className="mt-12" delay={0.2}>
        <div className="relative group">
          <div className="flex overflow-hidden">
            <div className="flex items-center" style={{ animation: 'marquee 30s linear infinite' }}>
              {[...clientNames, ...clientNames, ...clientNames, ...clientNames].map((name, i) => <LogoPlaceholder key={i} name={name} />)}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F0F4F8] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F0F4F8] to-transparent pointer-events-none" />
        </div>
      </ScrollReveal>
    </section>
  );
}
