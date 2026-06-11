import { Phone, Mail, ChevronUp, MessageCircle } from 'lucide-react';

export default function MobileActions() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[89] h-16 bg-white/95 backdrop-blur-xl border-t border-[#00D4FF]/20 md:hidden">
      <div className="grid grid-cols-4 h-full">
        <a href="https://wa.me/917087087333" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform">
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] uppercase tracking-wider text-[#7A8CA5] font-body">WhatsApp</span>
        </a>
        <a href="tel:+917087087333" className="flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform">
          <Phone className="w-5 h-5 text-[#00D4FF]" />
          <span className="text-[10px] uppercase tracking-wider text-[#7A8CA5] font-body">Call</span>
        </a>
        <a href="mailto:contact@highority.in" className="flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform">
          <Mail className="w-5 h-5 text-[#00D4FF]" />
          <span className="text-[10px] uppercase tracking-wider text-[#7A8CA5] font-body">Email</span>
        </a>
        <button onClick={scrollToTop} className="flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform">
          <ChevronUp className="w-5 h-5 text-[#0A1628]" />
          <span className="text-[10px] uppercase tracking-wider text-[#7A8CA5] font-body">Top</span>
        </button>
      </div>
    </div>
  );
}
