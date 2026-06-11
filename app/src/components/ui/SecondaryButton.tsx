import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SecondaryButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function SecondaryButton({ children, to, href, onClick, className = '', fullWidth = false }: SecondaryButtonProps) {
  const baseClasses = `group relative inline-flex items-center justify-center gap-2 font-body font-medium text-[#00D4FF] border border-[#00D4FF]/50 rounded-lg bg-transparent px-8 py-4 transition-all duration-300 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
