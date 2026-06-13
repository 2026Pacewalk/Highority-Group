import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ target, suffix = '', duration = 2, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');

  useGSAP(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target, duration, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
      onUpdate: () => setDisplay(Math.round(obj.val).toLocaleString()),
      onComplete: () => setDisplay(target.toLocaleString()),
    });
  }, { scope: ref });

  return <span ref={ref} className={className}>{display}{suffix}</span>;
}
