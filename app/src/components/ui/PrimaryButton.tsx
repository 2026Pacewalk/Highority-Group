import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PrimaryButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  size?: 'default' | 'large' | 'small';
  className?: string;
  fullWidth?: boolean;
}

export default function PrimaryButton({ children, to, href, onClick, size = 'default', className = '', fullWidth = false }: PrimaryButtonProps) {
  const sizeClasses = {
    small: 'px-6 py-3 text-sm',
    default: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg',
  };

  const baseClasses = `group relative inline-flex items-center justify-center gap-2 font-body font-medium text-[#0A1628] rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4),0_0_60px_rgba(0,212,255,0.15)] hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

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
