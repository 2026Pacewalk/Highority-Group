import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { blogPosts } from '@/data/blogData';

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] rounded-full bg-[#00D4FF]/10 blur-[120px] pointer-events-none" />
        <div className="container-main relative z-10 text-center pt-36 pb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Latest Insights</span>
          </div>
          <h1 className="font-display text-[clamp(34px,5vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
            Industry Insights & Updates
          </h1>
          <p className="mt-4 text-base font-body text-[#B8C5D6] max-w-2xl mx-auto leading-relaxed">
            Practical guides on freight, customs, warehousing and global supply-chain best practices from the Highority team.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative w-full section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <Link to={`/blogs/${post.slug}`} className="group block h-full">
                  <article className="h-full rounded-2xl overflow-hidden bg-white border border-[#0A1628]/5 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] group-hover:border-[#00D4FF]/25">
                    <div className="relative h-52 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/80" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#00D4FF]/90 text-[#0A1628] text-[11px] font-body font-medium uppercase tracking-wider">{post.category}</span>
                    </div>
                    <div className="p-6">
                      <h2 className="font-body font-medium text-lg text-[#0A1628] leading-snug line-clamp-2 group-hover:text-[#00D4FF] transition-colors">{post.title}</h2>
                      <p className="mt-3 text-sm font-body text-[#7A8CA5] leading-relaxed line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 mt-4 text-xs text-[#7A8CA5] font-body">
                        <span>{post.readTime}</span><span className="text-[#0A1628]/15">|</span><span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-4 text-[#00D4FF] text-sm font-body group-hover:gap-3 transition-all">
                        <span>Read More</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
