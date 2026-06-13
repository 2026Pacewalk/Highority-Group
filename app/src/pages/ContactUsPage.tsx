import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, Send, CheckCircle2, Phone, Mail, MapPin, Clock,
  ArrowRight, AlertCircle, User, Building2, MessageSquare,
  PhoneCall, MessageCircle, ExternalLink
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';
import type { Office } from '@/data/officesData';
import { emailContacts } from '@/data/emailsData';
import { api } from '@/lib/api';
import { useOffices } from '@/lib/content';

/* ────────────────────────────────────────────
   Service options
   ──────────────────────────────────────────── */
const serviceOptions = [
  'Air Freight', 'Sea Freight', 'Door To Door Delivery',
  'CHA Services', 'Domestic Priority', 'Import Express',
  'By Road / Line Haul', 'By Train', 'Warehousing & Distribution',
  'International Marketing', 'Global Network',
];

/* ────────────────────────────────────────────
   Form types
   ──────────────────────────────────────────── */
interface FormState {
  fullName: string; companyName: string; mobile: string;
  email: string; service: string; message: string;
}
interface FormErrors {
  fullName?: string; mobile?: string; email?: string;
  service?: string; message?: string;
}
const initialForm: FormState = {
  fullName: '', companyName: '', mobile: '', email: '', service: '', message: '',
};
function validateEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validateMobile(m: string) { return /^[+]?[\d\s-]{10,15}$/.test(m.replace(/\s/g, '')); }

/* ────────────────────────────────────────────
   Office Card Component
   ──────────────────────────────────────────── */
function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="group bg-white border border-[#0A1628]/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)] hover:border-[#00D4FF]/20">
      <div className="relative h-44 overflow-hidden">
        <img src={office.cityImage} alt={office.city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-[#00D4FF]/20 rounded-full px-3 py-1">
          <office.icon className="w-3 h-3 text-[#00D4FF]" />
          <span className="text-[10px] font-body text-[#00D4FF] font-medium uppercase tracking-wider">{office.type}</span>
        </div>
        <div className="absolute bottom-3 left-3">
          <h3 className="font-display text-xl text-white">{office.city}</h3>
          <p className="text-xs font-body text-white/70">{office.name}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" />
          <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">{office.address}</p>
        </div>
        {office.phones.map((phone, i) => (
          <a key={i} href={`tel:${phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-sm font-body text-[#0A1628] hover:text-[#00D4FF] transition-colors mb-1">
            <Phone className="w-3.5 h-3.5 text-[#00D4FF]" /> {phone}
          </a>
        ))}
        {office.emails.map((email, i) => (
          <a key={i} href={`mailto:${email}`} className="flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mt-1">
            <Mail className="w-3.5 h-3.5 text-[#7A8CA5]" /> {email}
          </a>
        ))}
        <div className="mt-4 pt-4 border-t border-[#0A1628]/5 flex items-center gap-2">
          <a href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-body text-[#00D4FF] hover:underline">
            <ExternalLink className="w-3 h-3" /> Google Maps
          </a>
          <span className="text-[#0A1628]/10">|</span>
          <a href={`tel:${office.phones[0].replace(/-/g, '')}`} className="inline-flex items-center gap-1 text-xs font-body text-[#0A1628] hover:text-[#00D4FF] transition-colors">
            <PhoneCall className="w-3 h-3" /> Call
          </a>
          <span className="text-[#0A1628]/10">|</span>
          <a href={`mailto:${office.emails[0]}`} className="inline-flex items-center gap-1 text-xs font-body text-[#0A1628] hover:text-[#00D4FF] transition-colors">
            <Mail className="w-3 h-3" /> Email
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────── */
export default function ContactUsPage() {
  const offices = useOffices();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!validateMobile(form.mobile)) newErrors.mobile = 'Please enter a valid mobile number';
    if (!form.email.trim()) newErrors.email = 'Email address is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Please enter a valid email address';
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await api('/leads', {
        method: 'POST',
        body: JSON.stringify({ type: 'contact', source: 'contact-us', payload: form }),
      });
    } catch {
      const subject = encodeURIComponent(`Contact Inquiry from ${form.fullName} - ${form.service}`);
      const body = encodeURIComponent(
        `Name: ${form.fullName}\nCompany: ${form.companyName || 'N/A'}\nMobile: ${form.mobile}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
      );
      window.location.href = `mailto:contact@highority.in?subject=${subject}&body=${body}`;
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  /* ── SUCCESS STATE ── */
  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
          <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute inset-0 z-[1] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />
          <div className="container-main relative z-10 text-center pt-24 pb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Contact</span>
            </div>
            <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
              Contact Highority Group
            </h1>
          </div>
        </section>
        <section className="relative w-full py-24 bg-white">
          <div className="container-main max-w-lg">
            <ScrollReveal>
              <div className="glow-border-wrapper">
                <div className="glow-border-inner p-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00D4FF]" />
                  </div>
                  <h2 className="font-display text-3xl font-normal text-[#0A1628] mb-3">Message Sent</h2>
                  <p className="text-base font-body text-[#7A8CA5] leading-relaxed mb-2">
                    Thank you, <span className="text-[#0A1628] font-medium">{form.fullName}</span>! Your inquiry about <span className="text-[#00D4FF] font-medium">{form.service}</span> has been received.
                  </p>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed mb-8">Our team will respond within 24 hours.</p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button onClick={resetForm}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-[#0A1628] font-body font-medium px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                      <Send className="w-4 h-4" /> Send Another Message
                    </button>
                    <Link to="/" className="inline-flex items-center gap-2 text-[#7A8CA5] font-body hover:text-[#00D4FF] transition-colors">
                      <ArrowRight className="w-4 h-4" /> Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />
        <div className="container-main relative z-10 text-center pt-24 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Connect With Us</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            Contact Highority Group
          </h1>
          <p className="mt-5 text-lg font-body text-white/70 max-w-[680px] mx-auto leading-relaxed">
            Connect with our logistics experts for freight forwarding, cargo movement, customs clearance, and global supply chain support.
          </p>
        </div>
      </section>

      {/* ═══ QUICK ACTIONS ═══ */}
      <section className="relative w-full py-10 bg-[#F0F4F8]">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Call Now', icon: PhoneCall, href: 'tel:+917087087333' },
                { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/917087087333' },
                { label: 'Email Us', icon: Mail, href: 'mailto:contact@highority.in' },
                { label: 'Request Quote', icon: ArrowRight, href: '/request-quote' },
              ].map((action, i) => (
                <Link
                  key={i}
                  to={action.href.startsWith('/') ? action.href : '#'}
                  {...(!action.href.startsWith('/') ? { onClick: (e: React.MouseEvent) => { e.preventDefault(); window.open(action.href, action.href.startsWith('https') ? '_blank' : '_self'); } } : {})}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-[#0A1628]/5 hover:border-[#00D4FF]/30 hover:shadow-[0_8px_24px_rgba(0,212,255,0.08)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] flex items-center justify-center flex-shrink-0">
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-body text-sm font-medium text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">{action.label}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ OUR OFFICES GRID ═══ */}
      <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Our Locations</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Branch Office Network
              </h2>
              <p className="mt-4 text-base font-body text-[#7A8CA5] max-w-[600px] mx-auto leading-relaxed">
                Strategically located offices across India and the Middle East to serve your logistics needs.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => <OfficeCard key={office.id} office={office} />)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ GOOGLE MAPS ═══ */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Find Us</span>
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">
                Our Office Locations
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div key={office.id} className="rounded-2xl overflow-hidden border border-[#0A1628]/5 hover:border-[#00D4FF]/20 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,212,255,0.06)]">
                  <div className="relative h-56 bg-[#F0F4F8]">
                    <iframe src={`https://www.google.com/maps/embed?pb&q=${office.mapQuery}&zoom=15&maptype=roadmap`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${office.city} Map`} />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-[#00D4FF]/20 rounded-full px-3 py-1">
                      <MapPin className="w-3 h-3 text-[#00D4FF]" />
                      <span className="text-[10px] font-body text-[#0A1628] font-medium uppercase tracking-wider">{office.type}</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-display text-base font-normal text-[#0A1628] mb-1">{office.name}</h3>
                    <p className="text-sm font-body text-[#7A8CA5] leading-relaxed mb-3">{office.address}</p>
                    <div className="flex items-center gap-3">
                      <a href={`tel:${office.phones[0].replace(/-/g, '')}`} className="text-xs font-body text-[#00D4FF] hover:underline flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {office.phones[0]}
                      </a>
                      <button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`, '_blank')}
                        className="text-xs font-body text-[#7A8CA5] hover:text-[#00D4FF] transition-colors flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Open Map
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section className="relative w-full py-24 bg-[#F0F4F8] overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glow-border-wrapper">
                  <div className="glow-border-inner p-8 md:p-10 bg-white">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                      <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Send Inquiry</span>
                    </div>
                    <h2 className="font-display text-2xl font-normal text-[#0A1628] mb-2">Send Us a Message</h2>
                    <p className="text-sm font-body text-[#7A8CA5] mb-8">Fill in the form below and our team will get back to you within 24 hours.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Full Name <span className="text-[#00D4FF]">*</span></label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none transition-all ${errors.fullName ? 'border-red-400' : 'border-transparent'}`} />
                          </div>
                          {errors.fullName && <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Company Name</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input type="text" name="companyName" value={form.companyName} onChange={handleChange} placeholder="ABC Pvt Ltd"
                              className="w-full bg-[#F0F4F8] border border-transparent rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none transition-all" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Mobile Number <span className="text-[#00D4FF]">*</span></label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="+91 98765 43210"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none transition-all ${errors.mobile ? 'border-red-400' : 'border-transparent'}`} />
                          </div>
                          {errors.mobile && <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.mobile}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Email Address <span className="text-[#00D4FF]">*</span></label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none transition-all ${errors.email ? 'border-red-400' : 'border-transparent'}`} />
                          </div>
                          {errors.email && <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-body text-[#0A1628] mb-2">Service Required <span className="text-[#00D4FF]">*</span></label>
                        <div className="relative">
                          <select name="service" value={form.service} onChange={handleChange}
                            className={`w-full bg-[#F0F4F8] border rounded-lg pl-4 pr-10 py-3.5 text-sm font-body text-[#0A1628] focus:border-[#00D4FF] focus:outline-none transition-all appearance-none cursor-pointer ${errors.service ? 'border-red-400' : 'border-transparent'} ${!form.service ? 'text-[#7A8CA5]/70' : ''}`}>
                            <option value="" disabled>Select a service</option>
                            {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-[#7A8CA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                        {errors.service && <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.service}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-body text-[#0A1628] mb-2">Message <span className="text-[#00D4FF]">*</span></label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#7A8CA5]" />
                          <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you? Tell us about your logistics requirements..."
                            className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none transition-all resize-none ${errors.message ? 'border-red-400' : 'border-transparent'}`} />
                        </div>
                        {errors.message && <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                      </div>
                      <div className="pt-2">
                        <button type="submit" disabled={submitting}
                          className="group relative w-full inline-flex items-center justify-center gap-2 font-body font-medium text-[#0A1628] rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] px-8 py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed">
                          {submitting ? <><div className="w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />Sending...</>
                            : <><Send className="w-4 h-4" />Send Message<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></>}
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h4 className="font-display text-base text-[#0A1628]">Response Time</h4>
                      <p className="text-xs font-body text-[#7A8CA5]">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">
                    Our logistics team reviews every inquiry personally and responds with tailored solutions within one business day.
                  </p>
                </div>
              </ScrollReveal>

              {/* All 4 emails sidebar */}
              <ScrollReveal delay={0.15}>
                <div className="space-y-3">
                  <h3 className="font-display text-lg text-[#0A1628] mb-2">Email Contacts</h3>
                  {emailContacts.map((ec) => (
                    <a key={ec.id} href={`mailto:${ec.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F0F4F8] border border-[#0A1628]/5 hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all duration-300 group">
                      <div className="w-9 h-9 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                        <ec.icon className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-body text-[#7A8CA5] uppercase tracking-wider">{ec.label}</p>
                        <p className="text-sm font-body text-[#0A1628] group-hover:text-[#00D4FF] transition-colors truncate">{ec.email}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-3">
                  <h3 className="font-display text-lg text-[#0A1628] mb-2">Quick Contact</h3>
                  <a href="tel:+917087087333" className="flex items-center gap-4 p-4 rounded-xl bg-[#F0F4F8] border border-[#0A1628]/5 hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-[#7A8CA5] uppercase tracking-wider">Call Us</p>
                      <p className="text-sm font-body text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">+91-70870-87333</p>
                    </div>
                  </a>
                  <a href="https://wa.me/917087087333" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F0F4F8] border border-[#0A1628]/5 hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-[#7A8CA5] uppercase tracking-wider">WhatsApp</p>
                      <p className="text-sm font-body text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">+91-70870-87333</p>
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative w-full py-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
        </div>
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Ready to Ship</span>
            </div>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Need a Custom Quote for Your Shipment?
            </h2>
            <p className="mt-4 text-base font-body text-[#7A8CA5] leading-relaxed">
              Get competitive pricing for your cargo within 24 hours. Our experts will recommend the best logistics solution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <PrimaryButton to="/request-quote">Request a Quote</PrimaryButton>
              <a href="mailto:contact@highority.in" className="inline-flex items-center gap-2 text-white font-body hover:text-[#00D4FF] transition-colors">
                <Mail className="w-4 h-4" /> contact@highority.in
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
