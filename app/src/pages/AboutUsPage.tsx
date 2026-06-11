import { Link } from 'react-router-dom';
import {
  Users, Globe, Shield, Headphones, Award, Plane,
  MapPin, Phone, Mail, ChevronLeft, Quote, Target, Eye, Briefcase,
  ShoppingCart, Factory, Package, Cpu, Truck
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import PartnersSection from '@/components/PartnersSection';

import Counter from '@/components/ui/Counter';

/* ────────────────────────────────────────────
   Section 1 — Hero
   ──────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/assets/about-hero.jpg" alt="Highority Global Logistics" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.5) 0%, rgba(10,22,40,0.7) 60%, #FFFFFF 100%)' }} />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />
      <div className="container-main relative z-10 text-center pt-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mb-6">
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">About Highority Group</span>
        </div>
        <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
          Driving Global Logistics With Excellence
        </h1>
        <p className="mt-5 text-lg font-body text-white/70 max-w-[720px] mx-auto leading-relaxed">
          Building trusted logistics, freight forwarding, and supply chain solutions across India and UAE with operational excellence and global connectivity.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <PrimaryButton to="/contact-us">Contact Us</PrimaryButton>
          <PrimaryButton to="/request-quote">Request Quote</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 2 — Company Introduction
   ──────────────────────────────────────────── */
function CompanyIntro() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container-main max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Who We Are</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628] mb-6">
            About Highority Group
          </h2>
          <div className="glass-card p-8 md:p-10">
            <p className="text-base font-body text-[#7A8CA5] leading-relaxed mb-6">
              Highority Group is a global logistics and supply chain company specializing in freight forwarding, cargo management, transportation, import-export operations, warehousing, and international trade solutions across India and UAE.
            </p>
            <p className="text-base font-body text-[#7A8CA5] leading-relaxed mb-6">
              With a commitment to operational excellence, customer satisfaction, and reliable cargo movement, Highority delivers customized logistics solutions for businesses across multiple industries including retail, manufacturing, industrial cargo, aviation logistics, and international distribution.
            </p>
            <p className="text-base font-body text-[#7A8CA5] leading-relaxed">
              The company focuses on efficiency, transparency, safety, and scalable logistics operations powered by experienced professionals and global operational standards.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 3 — Vision & Mission
   ──────────────────────────────────────────── */
function VisionMission() {
  return (
    <section className="relative w-full py-24 bg-[#F0F4F8]">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Purpose</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Vision & Mission</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glow-border-wrapper group">
              <div className="glow-border-inner p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <h3 className="font-display text-2xl font-normal text-[#0A1628] mb-4">Our Vision</h3>
                <p className="text-base font-body text-[#7A8CA5] leading-relaxed">
                  To become a globally trusted business partner in logistics, freight forwarding, and international trade by delivering operational excellence, innovative supply chain solutions, and quality export products while creating long-term value for customers worldwide.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="glow-border-wrapper group">
              <div className="glow-border-inner p-10 h-full">
                <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <h3 className="font-display text-2xl font-normal text-[#0A1628] mb-4">Our Mission</h3>
                <p className="text-base font-body text-[#7A8CA5] leading-relaxed">
                  To drive global trade by directly exporting quality products including fresh fruits, vegetables, FMCG, food, non-food, and general merchandise, while delivering reliable logistics, freight forwarding, and supply chain solutions for our clients through operational excellence and long-term partnerships.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 4 — Leadership Team
   ──────────────────────────────────────────── */
const founder = {
  name: 'Tirth Kumar',
  designation: 'Founder & Director',
  shortTitle: 'Founder & Director | Highority Group',
  image: '/assets/leader-tirth-kumar.png',
  bio: 'Tirth Kumar is a results-driven business leader and engineering professional with over 10 years of diversified experience across international trade, exports, procurement, quality management, business operations, and strategic leadership. As the Founder and Director of Highority Group, he is responsible for developing and executing business strategies that drive sustainable growth, operational excellence, and long-term profitability.\n\nHe has extensive expertise in preparing and implementing comprehensive business plans, market expansion strategies, cost optimization initiatives, and corporate governance frameworks. His leadership focuses on ensuring business compliance with financial policies, reporting standards, and regulatory requirements while maintaining high levels of operational efficiency.\n\nA Lean Six Sigma Green Belt trained professional by the American Society for Quality (ASQ), Tirth possesses strong analytical and problem-solving capabilities. Throughout his career, he has successfully led multidisciplinary teams, managed end-to-end business operations, and developed strategic partnerships with customers, suppliers, and stakeholders across multiple industries.\n\nHis core competencies include Strategic Business Planning & Corporate Growth, International Trade & Export Management, Procurement & Supply Chain Management, Quality Management Systems (QMS), Vendor Relationship Management, Risk Assessment & Mitigation, Root Cause Analysis (RCA) & Corrective Actions, Customer Complaint Resolution & Post Market Surveillance, Internal & External Auditing, ISO Documentation and Compliance (ISO 9001, ISO 13485, ISO 17025), Lean Six Sigma Methodologies, 7 QC Tools Implementation, Regulatory Compliance & Process Improvement, and Team Leadership & Organizational Development.\n\nTirth has a proven track record of implementing robust quality systems, optimizing operational processes, strengthening compliance frameworks, and delivering measurable business results. His commitment to excellence, innovation, and continuous improvement has contributed significantly to the growth and success of the organizations he has led.\n\nUnder his leadership, Highority Group continues to expand its global footprint while maintaining a strong focus on quality, customer satisfaction, operational efficiency, and sustainable business development.',
  tags: ['Strategic Planning', 'International Trade', 'Export Management', 'Lean Six Sigma', 'Quality Management', 'ISO Compliance', 'Business Development', 'Procurement', 'Supply Chain', 'Team Leadership'],
};

const leaders = [
  {
    name: 'Manish Kumar',
    designation: 'Operations Head',
    shortTitle: 'Operations Manager | Supply Chain & Logistics Expert',
    image: '/assets/leader-manish-kumar.png',
    bio: 'Manish Kumar is a results-driven Operations, Logistics and Supply Chain professional with over 11 years of experience in managing large-scale operations, transportation networks, warehousing, freight coordination, and international trade processes across India and UAE. Currently serving as Operations Head at Highority Group, he specializes in operational excellence, cost optimization, business growth, vendor management, and supply chain execution. Manish holds an MBA in Supply Chain Management.',
    tags: ['Logistics', 'Supply Chain', 'Export-Import', 'Transportation', 'Operations Management', 'Vendor Management', 'Freight Forwarding', 'Business Development'],
  },
  {
    name: 'Vinay Kumar Bohra',
    designation: 'General Manager',
    shortTitle: 'Aviation & Logistics Operations Leader',
    image: '/assets/leader-vinay-kumar-bohra.png',
    bio: 'With over 18 years of experience in the aviation, cargo, and logistics industry, Vinay Kumar Bohra is a seasoned operations leader known for driving efficiency, safety, and operational excellence across airline and supply chain environments. Currently serving as General Manager at Highority Group of Companies, UAE & India, Vinay leads international and domestic operations. His aviation career includes leadership roles with Go First Airlines, Vistara, Air Asia India, GoAir, and Kingfisher Airlines. Fluent in English, Hindi, Gujarati, and Punjabi.',
    tags: ['Airline Operations', 'Cargo Logistics', 'Import Export', 'Warehouse Management', 'Customs Clearance', 'Team Leadership', 'Retail Logistics', 'Distribution Management', 'Customer Operations'],
  },
  {
    name: 'Savita',
    designation: 'Director',
    shortTitle: 'Independent Advisor & Governance Support',
    image: '',
    bio: 'Savita is an accomplished professional with extensive experience in corporate governance, regulatory compliance, and legislative processes. As an Independent Advisor and Director, she provides strategic guidance to organizations in establishing robust governance frameworks, ensuring regulatory adherence, and supporting sustainable business growth.\n\nShe possesses in-depth knowledge of compliance management, corporate policies, risk mitigation, and statutory requirements, enabling organizations to navigate complex regulatory environments with confidence. Her expertise extends to advising management teams on governance best practices, legislative developments, and operational compliance matters.\n\nSavita is recognized for her analytical approach, strong ethical standards, and commitment to transparency, accountability, and organizational excellence.',
    tags: ['Corporate Governance & Board Advisory', 'Regulatory Compliance & Risk Management', 'Legislative & Policy Frameworks', 'Corporate Ethics & Accountability', 'Strategic Advisory & Business Support', 'Stakeholder Engagement', 'Compliance Monitoring & Reporting', 'Organizational Governance Enhancement'],
  },
];

function LeaderCard({ leader, featured = false }: { leader: typeof founder; featured?: boolean }) {
  return (
    <div className={`glow-border-wrapper group ${featured ? 'max-w-3xl mx-auto' : ''}`}>
      <div className="glow-border-inner p-8 md:p-10 transition-all duration-400 hover:-translate-y-1">
        {/* Profile Image */}
        <div className={`${featured ? 'w-56 h-56 md:w-64 md:h-64' : 'w-48 h-48 md:w-56 md:h-56'} rounded-2xl bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/5 border border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-8 overflow-hidden shadow-[0_8px_32px_rgba(0,212,255,0.15)]`}>
          {leader.image ? (
            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
          ) : (
            <Briefcase className={`${featured ? 'w-24 h-24' : 'w-20 h-20'} text-[#00D4FF]/40`} />
          )}
        </div>
        <div className="text-center">
          <h3 className={`font-display font-normal text-[#0A1628] ${featured ? 'text-2xl' : 'text-xl'}`}>{leader.name}</h3>
          <p className="text-sm font-body text-[#00D4FF] mt-1">{leader.designation}</p>
          <p className="text-xs font-body text-[#7A8CA5] mt-1">{leader.shortTitle}</p>
        </div>
        <div className="mt-6 relative">
          <Quote className="w-6 h-6 text-[#00D4FF]/20 absolute -top-2 -left-1" />
          <div className="pl-4 space-y-3">
            {leader.bio.split('\n\n').map((paragraph, k) => (
              <p key={k} className="text-sm font-body text-[#7A8CA5] leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {leader.tags.map((tag, j) => (
            <span key={j} className="px-3 py-1 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/10 text-[#0A1628] text-xs font-body">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeadershipTeam() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Team</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Leadership Team</h2>
            <p className="mt-3 text-base font-body text-[#7A8CA5] max-w-lg mx-auto">Experienced professionals driving operational excellence across India and UAE.</p>
          </div>
        </ScrollReveal>

        {/* Founder — Featured */}
        <ScrollReveal>
          <LeaderCard leader={founder} featured />
        </ScrollReveal>

        {/* Team Members */}
        <ScrollReveal stagger={0.15} className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {leaders.map((leader, i) => (
              <LeaderCard key={i} leader={leader} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 5 — Why Choose Highority
   ──────────────────────────────────────────── */
const whyChoose = [
  { title: 'Experienced Leadership', desc: 'Led by industry veterans with 18+ years in aviation and logistics operations.', icon: Users },
  { title: 'India & UAE Operations', desc: 'Direct offices and teams operating across India and the United Arab Emirates.', icon: MapPin },
  { title: 'Global Logistics Expertise', desc: 'Serving 50+ countries through our trusted global partner network.', icon: Globe },
  { title: 'Customer-Focused Solutions', desc: 'Tailored logistics strategies designed around your unique business needs.', icon: Headphones },
  { title: 'Safe Cargo Handling', desc: 'Certified processes for secure and compliant cargo operations.', icon: Shield },
  { title: 'End-to-End Supply Chain', desc: 'Complete logistics from origin to destination under one roof.', icon: Package },
  { title: 'International Freight Coordination', desc: 'Expert coordination of air, sea, and land freight across borders.', icon: Plane },
  { title: 'Operational Excellence', desc: 'Continuous improvement driven by data, technology, and best practices.', icon: Award },
];

function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 bg-[#F0F4F8]">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Strengths</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Why Choose Highority</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white border border-[#00D4FF]/10 rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/30">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-[#00D4FF]" />
                </div>
                <h3 className="font-display text-lg font-normal text-[#0A1628] mb-2">{item.title}</h3>
                <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 6 — Company Strengths (Stats)
   ──────────────────────────────────────────── */
const stats = [
  { value: 18, suffix: '+', label: 'Years Industry Experience' },
  { value: 2, suffix: '', label: 'Countries With Direct Offices' },
  { value: 50, suffix: '+', label: 'Countries in Our Network' },
  { value: 8, suffix: '+', label: 'Industries Served' },
  { value: 150000, suffix: '+', label: 'Successful Deliveries' },
  { value: 99, suffix: '%', label: 'Client Satisfaction Rate' },
];

function CompanyStats() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">By The Numbers</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Company Strengths</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#F0F4F8] border border-[#00D4FF]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/30" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <div className="font-display text-[clamp(28px,3vw,40px)] font-normal text-[#0A1628] leading-none">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-body text-[#7A8CA5] mt-2 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 7 — Global Presence
   ──────────────────────────────────────────── */
function GlobalPresence() {
  return (
    <section className="relative w-full py-24 bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Worldwide Network</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">Our Network</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-square max-w-[480px] mx-auto">
              <svg viewBox="0 0 100 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Continents */}
                <path d="M15 20 Q20 15 30 18 Q35 16 40 20 Q38 28 30 30 Q22 32 18 28 Q14 25 15 20Z" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.12)" strokeWidth="0.3" />
                <path d="M28 35 Q32 33 36 36 Q38 42 36 48 Q34 55 30 58 Q26 55 24 48 Q22 42 28 35Z" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.09)" strokeWidth="0.3" />
                <path d="M42 18 Q48 14 56 16 Q62 14 68 18 Q72 22 68 28 Q62 32 54 30 Q48 28 44 24 Q40 20 42 18Z" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.12)" strokeWidth="0.3" />
                <path d="M44 34 Q50 32 58 34 Q64 38 60 46 Q56 52 48 50 Q42 46 44 34Z" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.10)" strokeWidth="0.3" />
                <path d="M68 30 Q76 28 82 32 Q88 36 84 44 Q80 50 72 48 Q66 44 68 30Z" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.09)" strokeWidth="0.3" />
                <path d="M82 55 Q88 52 92 56 Q94 62 90 68 Q86 72 82 68 Q78 62 82 55Z" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.09)" strokeWidth="0.3" />

                {/* Animated route lines: India, UAE, Singapore, Hong Kong, UK, USA, Australia */}
                <path d="M 65 41 Q 61 40 57 38"  stroke="#00D4FF" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3"><animate attributeName="stroke-dashoffset" from="0" to="-10" dur="2.5s" repeatCount="indefinite" /></path>
                <path d="M 57 38 Q 67 45 77 52"  stroke="#00D4FF" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3"><animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3.0s" repeatCount="indefinite" /></path>
                <path d="M 77 52 Q 78 46 79 39"  stroke="#00D4FF" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3"><animate attributeName="stroke-dashoffset" from="0" to="-10" dur="2.8s" repeatCount="indefinite" /></path>
                <path d="M 65 41 Q 55 33 44 24"  stroke="#00D4FF" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3"><animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3.5s" repeatCount="indefinite" /></path>
                <path d="M 44 24 Q 33 29 22 33"  stroke="#00D4FF" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3"><animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3.2s" repeatCount="indefinite" /></path>
                <path d="M 79 39 Q 84 54 88 68"  stroke="#00D4FF" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3"><animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3.8s" repeatCount="indefinite" /></path>

                {/* All 18 country pins */}
                {/* India - direct */}
                <g><circle cx="65" cy="41" r="3" fill="none" stroke="#00D4FF" opacity="0.4"><animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" /></circle><circle cx="65" cy="41" r="1.4" fill="#00D4FF" /><text x="65" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="2.8" fontFamily="Inter" fontWeight="500">India</text></g>
                {/* UAE - direct */}
                <g><circle cx="57" cy="38" r="3" fill="none" stroke="#00D4FF" opacity="0.4"><animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" begin="0.5s" /><animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s" /></circle><circle cx="57" cy="38" r="1.4" fill="#00D4FF" /><text x="57" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="2.8" fontFamily="Inter" fontWeight="500">UAE</text></g>
                {/* Hong Kong */}
                <g><circle cx="79" cy="39" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="0.3s" /></circle><circle cx="79" cy="39" r="0.9" fill="#00A8CC" /><text x="79" y="35" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Hong Kong</text></g>
                {/* Canada */}
                <g><circle cx="20" cy="25" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="0.6s" /></circle><circle cx="20" cy="25" r="0.9" fill="#00A8CC" /><text x="20" y="21" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Canada</text></g>
                {/* Singapore */}
                <g><circle cx="77" cy="52" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="0.9s" /></circle><circle cx="77" cy="52" r="0.9" fill="#00A8CC" /><text x="77" y="57" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Singapore</text></g>
                {/* Australia */}
                <g><circle cx="88" cy="68" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.2s" /></circle><circle cx="88" cy="68" r="0.9" fill="#00A8CC" /><text x="88" y="73" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Australia</text></g>
                {/* Oman */}
                <g><circle cx="56" cy="41" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.5s" /></circle><circle cx="56" cy="41" r="0.9" fill="#00A8CC" /><text x="56" y="46" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Oman</text></g>
                {/* Germany */}
                <g><circle cx="48" cy="26" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.8s" /></circle><circle cx="48" cy="26" r="0.9" fill="#00A8CC" /><text x="48" y="22" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Germany</text></g>
                {/* Thailand */}
                <g><circle cx="76" cy="44" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="2.1s" /></circle><circle cx="76" cy="44" r="0.9" fill="#00A8CC" /><text x="76" y="40" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Thailand</text></g>
                {/* Kuwait */}
                <g><circle cx="55" cy="35" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="2.4s" /></circle><circle cx="55" cy="35" r="0.9" fill="#00A8CC" /><text x="55" y="31" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Kuwait</text></g>
                {/* United Kingdom */}
                <g><circle cx="44" cy="24" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="2.7s" /></circle><circle cx="44" cy="24" r="0.9" fill="#00A8CC" /><text x="44" y="20" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">United Kingdom</text></g>
                {/* Uzbekistan */}
                <g><circle cx="60" cy="32" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="0.4s" /></circle><circle cx="60" cy="32" r="0.9" fill="#00A8CC" /><text x="60" y="28" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Uzbekistan</text></g>
                {/* United States */}
                <g><circle cx="22" cy="33" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="0.7s" /></circle><circle cx="22" cy="33" r="0.9" fill="#00A8CC" /><text x="22" y="39" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">United States</text></g>
                {/* Philippines */}
                <g><circle cx="84" cy="45" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.0s" /></circle><circle cx="84" cy="45" r="0.9" fill="#00A8CC" /><text x="84" y="50" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Philippines</text></g>
                {/* Brazil */}
                <g><circle cx="30" cy="60" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.3s" /></circle><circle cx="30" cy="60" r="0.9" fill="#00A8CC" /><text x="30" y="65" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Brazil</text></g>
                {/* South Korea */}
                <g><circle cx="82" cy="35" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.6s" /></circle><circle cx="82" cy="35" r="0.9" fill="#00A8CC" /><text x="82" y="31" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">South Korea</text></g>
                {/* Uganda */}
                <g><circle cx="52" cy="50" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="1.9s" /></circle><circle cx="52" cy="50" r="0.9" fill="#00A8CC" /><text x="52" y="55" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Uganda</text></g>
                {/* Sri Lanka */}
                <g><circle cx="68" cy="47" r="2.5" fill="none" stroke="#00D4FF" opacity="0.25"><animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" begin="2.2s" /></circle><circle cx="68" cy="47" r="0.9" fill="#00A8CC" /><text x="68" y="52" textAnchor="middle" fill="#7A8CA5" fontSize="2.2" fontFamily="Inter">Sri Lanka</text></g>
              </svg>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {[
                { city: 'Chandigarh', address: 'Unit 1408, 14th Floor, Chandigarh Citi Center (CCC), VIP Road, Zirakpur, Punjab – 140603', type: 'Corporate Office' },
                { city: 'Ahmedabad', address: 'C-401-402, 4th Floor, Supath-2 Complex, Opp. Holiday Inn Express Hotel, Near Old Vadaj Bus Stand, Usmanpura, Ashram Road, Ahmedabad – 380013', type: 'Branch Office' },
                { city: 'Delhi', address: '333/1, G.P. Mahipalpur, Rangpuri, New Delhi – 110037', type: 'Branch Office' },
                { city: 'Jaipur', address: 'Shop No. B-07, Ghar Aangan, Village Hajyawala, Sanganer, Jaipur, Rajasthan – 302029', type: 'Branch Office' },
                { city: 'Dubai, UAE', address: 'HIGHORITY IMPEX TRADING L.L.C, 006, 1st Floor, Unique Time Business Center, Union Coop, Al Aweer Central Market, Dubai, United Arab Emirates', type: 'UAE Office' },
              ].map((office, i) => (
                <div key={i} className="glass-card-dark p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#00D4FF]" />
                    <span className="text-xs font-body text-[#00D4FF] uppercase tracking-wider">{office.type}</span>
                  </div>
                  <h3 className="font-display text-base text-white mb-1">{office.city}</h3>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{office.address}</p>
                </div>
              ))}
              <div className="mt-4 flex items-center gap-4 text-sm font-body text-[#7A8CA5]">
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#00D4FF]" /> 18+ Countries Connected</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#00D4FF]" /> 5 Offices</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00D4FF]" /> Global Cargo Partner Network</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 8 — Timeline / Journey
   ──────────────────────────────────────────── */
const timeline = [
  { year: '2015', title: 'Company Founded', desc: 'Highority established in Zirakpur, Punjab with a vision to transform logistics in North India.' },
  { year: '2017', title: 'UAE Expansion', desc: 'Opened Dubai office as Highority Impex Trading LLC, expanding into Middle East markets.' },
  { year: '2019', title: 'Multi-Modal Services', desc: 'Launched air freight, sea freight, and door-to-door delivery services across 25+ countries.' },
  { year: '2021', title: 'Specialized Cargo', desc: 'Added international marketing and specialized cargo handling services with expanded global capabilities.' },
  { year: '2023', title: 'Global Network', desc: 'Expanded network to 50+ countries with dedicated teams for key international trade routes.' },
  { year: '2025', title: 'Digital Transformation', desc: 'Launched real-time tracking platform and AI-powered logistics optimization systems.' },
];

function Timeline() {
  return (
    <section className="relative w-full py-24 bg-[#F0F4F8]">
      <div className="container-main max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Journey</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Timeline of Growth</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.1}>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D4FF] via-[#00D4FF]/30 to-transparent" />
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#00D4FF] border-2 border-white shadow-[0_0_10px_rgba(0,212,255,0.5)] z-10 mt-1.5" />
                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-24px)] ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <span className="font-display text-3xl text-[#00D4FF]/30 leading-none">{item.year}</span>
                  <h3 className="font-display text-lg text-[#0A1628] mt-1">{item.title}</h3>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed mt-1">{item.desc}</p>
                </div>
                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-24px)]" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 9 — Industries Served
   ──────────────────────────────────────────── */
const industries = [
  { name: 'Aviation', icon: Plane },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'FMCG', icon: Package },
  { name: 'Industrial Cargo', icon: Factory },
  { name: 'E-commerce', icon: Cpu },
  { name: 'International Trade', icon: Globe },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Logistics', icon: Truck },
];

function IndustriesServed() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Industries</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">Industries We Serve</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="group text-center p-8 bg-[#F0F4F8] border border-[#0A1628]/5 rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.08)] hover:border-[#00D4FF]/20">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-[#00D4FF]/20">
                  <ind.icon className="w-7 h-7 text-[#00D4FF]" />
                </div>
                <h3 className="font-display text-base font-normal text-[#0A1628]">{ind.name}</h3>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Section 10 — CTA
   ──────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="relative w-full py-24 bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
      </div>
      <div className="container-main relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Get Started</span>
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Partner With Highority For Reliable Global Logistics
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">
              Let our experienced team handle your logistics needs while you focus on growing your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <PrimaryButton to="/contact-us">Contact Us</PrimaryButton>
              <PrimaryButton to="/request-quote">Request Quote</PrimaryButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm font-body text-[#7A8CA5]">
              <a href="tel:+917087087333" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors"><Phone className="w-4 h-4 text-[#00D4FF]" /> +91-70870-87333</a>
              <a href="mailto:contact@highority.in" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors"><Mail className="w-4 h-4 text-[#00D4FF]" /> contact@highority.in</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Main About Us Page
   ──────────────────────────────────────────── */
export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <CompanyIntro />
      <VisionMission />
      <LeadershipTeam />
      <WhyChooseUs />
      <CompanyStats />
      <GlobalPresence />
      <Timeline />
      <PartnersSection />
      <IndustriesServed />
      <CTASection />
    </main>
  );
}
