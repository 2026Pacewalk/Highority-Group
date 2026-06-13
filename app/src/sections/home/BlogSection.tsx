import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { blogPosts } from '@/data/blogData';

const blogs = blogPosts.map((p) => ({
  title: p.title,
  category: p.category.toUpperCase(),
  date: p.date,
  readTime: p.readTime,
  image: p.image,
  href: `/blogs/${p.slug}`,
}));

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => { if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' }); };
  return (
    <section className="relative w-full section-padding bg-white overflow-hidden">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Latest Insights</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Industry Insights & Updates</h2>
            </div>
            <SecondaryButton to="/blogs">View All Blogs</SecondaryButton>
          </div>
        </ScrollReveal>
        <div className="hidden md:flex justify-end gap-2 mt-8">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-[#0A1628]/10 bg-white flex items-center justify-center hover:border-[#00D4FF] transition-colors"><ChevronLeft className="w-5 h-5 text-[#0A1628]" /></button>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-[#0A1628]/10 bg-white flex items-center justify-center hover:border-[#00D4FF] transition-colors"><ChevronRight className="w-5 h-5 text-[#0A1628]" /></button>
        </div>
        <ScrollReveal className="mt-8" delay={0.1}>
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {blogs.map((blog, i) => (
              <Link key={i} to={blog.href} className="group flex-shrink-0 w-[340px] md:w-[380px] snap-start">
                <div className="rounded-2xl overflow-hidden bg-white border border-[#0A1628]/5 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)]">
                  <div className="relative h-52 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/90" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#00D4FF]/90 text-[#0A1628] text-[11px] font-body font-medium uppercase tracking-wider">{blog.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-body font-medium text-lg text-[#0A1628] leading-snug line-clamp-2 group-hover:text-[#00D4FF] transition-colors">{blog.title}</h3>
                    <div className="flex items-center gap-3 mt-3 text-xs text-[#7A8CA5] font-body"><span>{blog.readTime}</span><span>|</span><span>{blog.date}</span></div>
                    <div className="flex items-center gap-2 mt-4 text-[#00D4FF] text-sm font-body group-hover:gap-3 transition-all"><span>Read More</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
