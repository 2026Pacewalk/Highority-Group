import { Wheat, Apple, ShoppingCart, Cookie, Home, Sparkles, Boxes, Factory } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const categories = [
  { title: 'Agro Products', icon: Wheat, desc: 'Fresh fruits, vegetables, grains, and agricultural commodities sourced from trusted farms worldwide.' },
  { title: 'Food & Non-Food Products', icon: Apple, desc: 'A wide range of consumable and non-consumable goods for retail and wholesale distribution.' },
  { title: 'FMCG Products', icon: ShoppingCart, desc: 'Fast-moving consumer goods including daily essentials with high turnover and reliable supply.' },
  { title: 'Snacks & Confectionery', icon: Cookie, desc: 'Chips, biscuits, chocolates, candies, and baked goods from leading global brands.' },
  { title: 'Household Products', icon: Home, desc: 'Cleaning supplies, kitchenware, home essentials, and durable household items.' },
  { title: 'Personal Care Products', icon: Sparkles, desc: 'Skincare, haircare, hygiene products, cosmetics, and wellness essentials.' },
  { title: 'General Trading Items', icon: Boxes, desc: 'Diverse range of import-export goods including textiles, electronics accessories, and consumer merchandise.' },
  { title: 'Industrial & Commercial Supplies', icon: Factory, desc: 'Raw materials, machinery parts, packaging supplies, and commercial equipment for businesses.' },
];

export default function ProductCategoriesSection() {
  return (
    <section id="products" className="relative w-full section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 30% at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 100%)' }} />
      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Products</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Product Categories</h2>
            <p className="mt-3 text-base font-body text-[#7A8CA5] max-w-lg mx-auto">
              Highority Impex Trading LLC offers a diverse portfolio of quality products for global markets.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal className="mt-14" stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="glow-border-wrapper group">
                <div className="glow-border-inner p-8 h-full transition-all duration-400 group-hover:-translate-y-1.5">
                  <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#00D4FF]/20">
                    <cat.icon className="w-7 h-7 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-display text-lg font-normal text-[#0A1628] tracking-tight">{cat.title}</h3>
                  <p className="mt-2 text-sm font-body text-[#7A8CA5] leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
