import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.split('/').filter(Boolean).join(' / ').replace(/-/g, ' ');
  const displayName = pageName || 'Page';

  return (
    <main className="min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="container-main text-center py-24">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Coming Soon</span>
        </div>
        <h1 className="font-display text-[clamp(32px,5vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628] capitalize">{displayName}</h1>
        <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-lg mx-auto leading-relaxed">This page is under development. We're working hard to bring you the best experience. Please check back soon or explore our available pages.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <PrimaryButton to="/"><ArrowLeft className="w-4 h-4 mr-1" /> Back to Home</PrimaryButton>
          <PrimaryButton to="/services">View Services</PrimaryButton>
        </div>
      </div>
    </main>
  );
}
