import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !lettersRef.current) return;
    const letters = lettersRef.current.querySelectorAll('.loader-letter');
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut', onComplete: () => onComplete() });
      },
    });
    tl.fromTo(letters, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: 'power3.out' })
      .to(lettersRef.current, { boxShadow: '0 0 40px rgba(0, 212, 255, 0.5), 0 0 80px rgba(0, 212, 255, 0.2)', duration: 0.3, ease: 'power2.out' })
      .to(lettersRef.current, { boxShadow: '0 0 0px rgba(0, 212, 255, 0)', duration: 0.3, ease: 'power2.in' })
      .to({}, { duration: 0.4 });
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[200] bg-white flex items-center justify-center">
      <div ref={lettersRef} className="flex rounded-lg px-4 py-2 transition-shadow">
        {'HIGHORITY'.split('').map((letter, i) => (
          <span key={i} className="loader-letter font-display text-3xl md:text-4xl font-medium tracking-[0.1em] text-[#0A1628] opacity-0">{letter}</span>
        ))}
        <span className="loader-letter w-2 h-2 bg-[#00D4FF] rounded-sm self-center ml-1 opacity-0" />
      </div>
    </div>
  );
}
