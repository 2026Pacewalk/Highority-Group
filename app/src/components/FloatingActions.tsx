import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, FileText, Phone, ArrowUp } from 'lucide-react';

/**
 * Desktop/tablet floating speed-dial. A single round button that expands
 * to reveal quick actions: Get a Quote, Call, and Back to Top.
 * Hidden on mobile (md:hidden bottom bar handles those).
 */
export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const itemClass =
    'group flex items-center gap-3 justify-end transition-all duration-300';
  const labelClass =
    'px-3 py-1.5 rounded-lg bg-white text-[#0A1628] text-sm font-body font-medium shadow-[0_4px_20px_rgba(10,22,40,0.12)] whitespace-nowrap';
  const dotClass =
    'w-12 h-12 rounded-full bg-white text-[#00D4FF] shadow-[0_4px_20px_rgba(10,22,40,0.15)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF] group-hover:text-white transition-colors duration-300';

  // Each item animates in with a small stagger when opened.
  const itemStyle = (i: number) => ({
    transitionDelay: open ? `${i * 60}ms` : '0ms',
    transform: open ? 'translateY(0)' : 'translateY(12px)',
    opacity: open ? 1 : 0,
  });

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-[90] flex-col items-end gap-3">
      {/* Actions */}
      <div className={`flex flex-col items-end gap-3 ${open ? '' : 'pointer-events-none'}`}>
        <Link to="/request-quote" onClick={() => setOpen(false)} className={itemClass} style={itemStyle(2)} aria-label="Get a quote">
          <span className={labelClass}>Get a Quote</span>
          <span className={dotClass}><FileText className="w-5 h-5" /></span>
        </Link>

        <a href="tel:+917087087333" onClick={() => setOpen(false)} className={itemClass} style={itemStyle(1)} aria-label="Call us">
          <span className={labelClass}>Call Us</span>
          <span className={dotClass}><Phone className="w-5 h-5" /></span>
        </a>

        <button onClick={() => { scrollTop(); setOpen(false); }} className={itemClass} style={itemStyle(0)} aria-label="Back to top">
          <span className={labelClass}>Back to Top</span>
          <span className={dotClass}><ArrowUp className="w-5 h-5" /></span>
        </button>
      </div>

      {/* Main toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close quick actions' : 'Open quick actions'}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] text-white shadow-[0_8px_30px_rgba(0,212,255,0.45)] flex items-center justify-center hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(0,212,255,0.55)] active:scale-95 transition-all duration-300"
      >
        <span className={`transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}>
          {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </span>
      </button>
    </div>
  );
}
