import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Clock, CalendarDays } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { getBlogPost, blogPosts } from '@/data/blogData';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl text-[#0A1628]">Article not found</h1>
          <p className="mt-3 text-[#7A8CA5] font-body">The blog post you’re looking for doesn’t exist or may have been moved.</p>
          <div className="mt-6 flex justify-center">
            <PrimaryButton to="/blogs">Browse all blogs</PrimaryButton>
          </div>
        </div>
      </main>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
        <div className="container-main relative z-10 pt-32 pb-10 max-w-3xl">
          <Link to="/blogs" className="flex w-fit items-center gap-1.5 text-sm font-body text-[#B8C5D6] hover:text-[#00D4FF] transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <span className="inline-block mt-6 px-3 py-1 rounded-full bg-[#00D4FF]/90 text-[#0A1628] text-[11px] font-body font-medium uppercase tracking-wider">{post.category}</span>
          <h1 className="mt-4 font-display text-[clamp(28px,4vw,46px)] font-normal leading-[1.15] tracking-[-0.02em] text-white">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-5 text-sm font-body text-[#7A8CA5]">
            <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-[#00D4FF]" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#00D4FF]" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="container-main max-w-4xl -mt-2 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(10,22,40,0.18)] -translate-y-8">
          <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
        </div>
      </div>

      {/* Body */}
      <article className="container-main max-w-3xl pb-8">
        {post.content.map((section, i) => (
          <ScrollReveal key={i} delay={i * 0.04}>
            <div className="mt-8 first:mt-0">
              {section.heading && (
                <h2 className="font-display text-2xl font-normal text-[#0A1628] mb-3">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-[15px] md:text-base font-body text-[#465569] leading-[1.8] mb-4">{p}</p>
              ))}
            </div>
          </ScrollReveal>
        ))}

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-[#0A1628] p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent pointer-events-none" />
          <h3 className="relative font-display text-2xl text-white">Ready to ship with confidence?</h3>
          <p className="relative mt-2 text-sm font-body text-[#B8C5D6] max-w-md mx-auto">Get a tailored logistics quote from the Highority team in minutes.</p>
          <div className="relative mt-6 flex justify-center">
            <PrimaryButton to="/request-quote">Request a Quote</PrimaryButton>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="relative w-full pb-24 pt-4">
        <div className="container-main">
          <h3 className="font-display text-2xl font-normal text-[#0A1628] mb-8">Related articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} to={`/blogs/${p.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-white border border-[#0A1628]/5 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] group-hover:border-[#00D4FF]/25">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#00D4FF]/90 text-[#0A1628] text-[10px] font-body font-medium uppercase tracking-wider">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-body font-medium text-[15px] text-[#0A1628] leading-snug line-clamp-2 group-hover:text-[#00D4FF] transition-colors">{p.title}</h4>
                    <div className="flex items-center gap-2 mt-3 text-[#00D4FF] text-sm font-body group-hover:gap-3 transition-all">
                      <span>Read</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
