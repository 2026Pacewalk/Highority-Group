import { useRef, type ReactNode, type MouseEvent } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  enableSpotlight?: boolean;
  dark?: boolean;
}

export default function GlowCard({ children, className = '', enableSpotlight = false, dark = false }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableSpotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className={`glow-border-wrapper group ${className}`}>
      <div
        ref={cardRef}
        className={dark ? 'glow-border-inner-dark relative transition-all' : 'glow-border-inner relative transition-all'}
        onMouseMove={handleMouseMove}
        style={enableSpotlight ? { background: 'radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 255, 0.06), transparent)' } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
