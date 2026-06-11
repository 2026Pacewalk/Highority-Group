import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, Send, CheckCircle2, Phone, Mail, MapPin,
  Package, Clock, ArrowRight, AlertCircle, User,
  Building2, Weight, CalendarDays, MessageSquare, Route,
  Plane, Ship, Truck,
  ClipboardCheck, Zap, Globe, TrendingUp, TrainFront, Warehouse
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

/* ────────────────────────────────────────────
   Service options with icons
   ──────────────────────────────────────────── */
const serviceOptions = [
  { label: 'Air Freight', icon: Plane },
  { label: 'Sea Freight', icon: Ship },
  { label: 'Door To Door Delivery', icon: Truck },
  { label: 'CHA Services', icon: ClipboardCheck },
  { label: 'Domestic Priority', icon: Zap },
  { label: 'Import Express', icon: Package },
  { label: 'By Road / Line Haul', icon: Truck },
  { label: 'By Train', icon: TrainFront },
  { label: 'Warehousing & Distribution', icon: Warehouse },
  { label: 'International Marketing', icon: TrendingUp },
  { label: 'Global Network', icon: Globe },
];

/* ────────────────────────────────────────────
   Cargo type options
   ──────────────────────────────────────────── */
const cargoTypes = [
  'General Cargo',
  'Electronics',
  'Automotive Parts',
  'Textiles',
  'Machinery',
  'Food & Beverage',
  'FMCG Products',
  'Agro Products',
  'Documents',
  'Other',
];

/* ────────────────────────────────────────────
   Form state type
   ──────────────────────────────────────────── */
interface FormState {
  fullName: string;
  companyName: string;
  mobile: string;
  email: string;
  service: string;
  cargoType: string;
  origin: string;
  destination: string;
  weight: string;
  shipmentDate: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  email?: string;
  service?: string;
  origin?: string;
  destination?: string;
}

const initialForm: FormState = {
  fullName: '',
  companyName: '',
  mobile: '',
  email: '',
  service: '',
  cargoType: '',
  origin: '',
  destination: '',
  weight: '',
  shipmentDate: '',
  message: '',
};

/* ────────────────────────────────────────────
   Validation helpers
   ──────────────────────────────────────────── */
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateMobile(mobile: string): boolean {
  return /^[+]?[\d\s-]{10,15}$/.test(mobile.replace(/\s/g, ''));
}

/* ────────────────────────────────────────────
   Logistics Graphic (SVG)
   ──────────────────────────────────────────── */
function LogisticsGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circles */}
        <circle cx="200" cy="200" r="180" stroke="#00D4FF" strokeWidth="0.5" opacity="0.1" />
        <circle cx="200" cy="200" r="140" stroke="#00D4FF" strokeWidth="0.5" opacity="0.15" />
        <circle cx="200" cy="200" r="100" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />

        {/* Connection lines */}
        <line x1="80" y1="120" x2="160" y2="180" stroke="#00D4FF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="320" y1="120" x2="240" y2="180" stroke="#00D4FF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="80" y1="280" x2="160" y2="220" stroke="#00D4FF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="320" y1="280" x2="240" y2="220" stroke="#00D4FF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="2.2s" repeatCount="indefinite" />
        </line>

        {/* Central hub */}
        <circle cx="200" cy="200" r="40" fill="url(#hubGrad)" opacity="0.9">
          <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="35" fill="#00D4FF" opacity="0.1" />
        <text x="200" y="195" textAnchor="middle" fill="#00D4FF" fontSize="14" fontFamily="Inter" fontWeight="600">QUOTE</text>
        <text x="200" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="Inter" opacity="0.7">REQUEST</text>

        {/* Top node - Air */}
        <g>
          <circle cx="200" cy="60" r="30" fill="rgba(0,212,255,0.08)" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
          <text x="200" y="55" textAnchor="middle" fill="#00D4FF" fontSize="16">✈</text>
          <text x="200" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="Inter" opacity="0.8">AIR</text>
          <circle cx="200" cy="60" r="34" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="34;38;34" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Right node - Sea */}
        <g>
          <circle cx="340" cy="200" r="30" fill="rgba(0,212,255,0.08)" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
          <text x="340" y="195" textAnchor="middle" fill="#00D4FF" fontSize="16">🚢</text>
          <text x="340" y="212" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="Inter" opacity="0.8">SEA</text>
          <circle cx="340" cy="200" r="34" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="34;38;34" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Bottom node - Land */}
        <g>
          <circle cx="200" cy="340" r="30" fill="rgba(0,212,255,0.08)" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
          <text x="200" y="335" textAnchor="middle" fill="#00D4FF" fontSize="16">🚛</text>
          <text x="200" y="352" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="Inter" opacity="0.8">LAND</text>
          <circle cx="200" cy="340" r="34" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="34;38;34" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Left node - Door */}
        <g>
          <circle cx="60" cy="200" r="30" fill="rgba(0,212,255,0.08)" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
          <text x="60" y="195" textAnchor="middle" fill="#00D4FF" fontSize="16">📦</text>
          <text x="60" y="212" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="Inter" opacity="0.8">DOOR</text>
          <circle cx="60" cy="200" r="34" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="r" values="34;38;34" dur="3.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Corner nodes */}
        <circle cx="100" cy="100" r="4" fill="#00D4FF" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="100" r="4" fill="#00D4FF" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="300" r="4" fill="#00D4FF" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.7s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="300" r="4" fill="#00D4FF" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.6s" repeatCount="indefinite" />
        </circle>

        {/* Gradient definition */}
        <defs>
          <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00A8CC" stopOpacity="0.05" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────
   Contact Info Card
   ──────────────────────────────────────────── */
function ContactInfoCard({ icon: Icon, title, value, href }: { icon: typeof Phone; title: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 p-4 rounded-xl bg-[#F0F4F8] border border-[#0A1628]/5 hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5 transition-all duration-300 group">
      <div className="w-11 h-11 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#00D4FF]" />
      </div>
      <div>
        <p className="text-xs font-body text-[#7A8CA5] uppercase tracking-wider">{title}</p>
        <p className="text-sm font-body text-[#0A1628] group-hover:text-[#00D4FF] transition-colors">{value}</p>
      </div>
    </a>
  );
}

/* ────────────────────────────────────────────
   Main Page Component
   ──────────────────────────────────────────── */
export default function RequestQuotePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!validateMobile(form.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.service) {
      newErrors.service = 'Please select a service';
    }

    if (!form.origin.trim()) {
      newErrors.origin = 'Origin city/country is required';
    }

    if (!form.destination.trim()) {
      newErrors.destination = 'Destination city/country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Construct email body for mailto fallback
    const subject = encodeURIComponent(`Quote Request from ${form.fullName} - ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.fullName}\n` +
      `Company: ${form.companyName || 'N/A'}\n` +
      `Mobile: ${form.mobile}\n` +
      `Email: ${form.email}\n` +
      `Service Required: ${form.service}\n` +
      `Cargo Type: ${form.cargoType || 'N/A'}\n` +
      `Origin: ${form.origin}\n` +
      `Destination: ${form.destination}\n` +
      `Approx Weight: ${form.weight || 'N/A'}\n` +
      `Shipment Date: ${form.shipmentDate || 'N/A'}\n` +
      `Message: ${form.message || 'N/A'}`
    );

    // Open email client
    window.location.href = `mailto:contact@highority.in?subject=${subject}&body=${body}`;

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
        {/* Hero */}
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
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Quote Request</span>
            </div>
            <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
              Request a Quote
            </h1>
          </div>
        </section>

        {/* Success Card */}
        <section className="relative w-full py-24 bg-white">
          <div className="container-main max-w-lg">
            <ScrollReveal>
              <div className="glow-border-wrapper">
                <div className="glow-border-inner p-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00D4FF]" />
                  </div>
                  <h2 className="font-display text-3xl font-normal text-[#0A1628] mb-3">Quote Request Submitted</h2>
                  <p className="text-base font-body text-[#7A8CA5] leading-relaxed mb-2">
                    Thank you, <span className="text-[#0A1628] font-medium">{form.fullName}</span>! Your quote request for <span className="text-[#00D4FF] font-medium">{form.service}</span> has been received.
                  </p>
                  <p className="text-sm font-body text-[#7A8CA5] leading-relaxed mb-8">
                    Our logistics experts will review your requirements and get back to you within 24 hours with a personalized quote.
                  </p>

                  {/* Summary */}
                  <div className="text-left bg-[#F0F4F8] rounded-xl p-6 mb-8 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-body text-[#7A8CA5]">Service</span>
                      <span className="font-body text-[#0A1628] font-medium">{form.service}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-body text-[#7A8CA5]">Route</span>
                      <span className="font-body text-[#0A1628] font-medium">{form.origin} → {form.destination}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-body text-[#7A8CA5]">Email</span>
                      <span className="font-body text-[#0A1628] font-medium">{form.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-body text-[#7A8CA5]">Mobile</span>
                      <span className="font-body text-[#0A1628] font-medium">{form.mobile}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-[#0A1628] font-body font-medium px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
                    >
                      <Send className="w-4 h-4" /> Submit Another Request
                    </button>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 text-[#7A8CA5] font-body hover:text-[#00D4FF] transition-colors"
                    >
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

  /* ── FORM STATE ── */
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
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
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Get Started</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
            Request a Quote
          </h1>
          <p className="mt-5 text-lg font-body text-white/70 max-w-[600px] mx-auto leading-relaxed">
            Fill in your shipment details and our logistics experts will provide a competitive quote within 24 hours.
          </p>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Subtle cyan glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 100%)' }} />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: Form (3/5) */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glow-border-wrapper">
                  <div className="glow-border-inner p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                      <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Shipment Details</span>
                    </div>
                    <h2 className="font-display text-2xl font-normal text-[#0A1628] mb-2">Get Your Personalized Quote</h2>
                    <p className="text-sm font-body text-[#7A8CA5] mb-8">All fields marked with <span className="text-[#00D4FF]">*</span> are required</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {/* Row 1: Full Name + Company */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">
                            Full Name <span className="text-[#00D4FF]">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="text"
                              name="fullName"
                              value={form.fullName}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all ${errors.fullName ? 'border-red-400' : 'border-transparent'}`}
                            />
                          </div>
                          {errors.fullName && (
                            <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Company Name</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="text"
                              name="companyName"
                              value={form.companyName}
                              onChange={handleChange}
                              placeholder="ABC Pvt Ltd"
                              className="w-full bg-[#F0F4F8] border border-transparent rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Mobile + Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">
                            Mobile Number <span className="text-[#00D4FF]">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="tel"
                              name="mobile"
                              value={form.mobile}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all ${errors.mobile ? 'border-red-400' : 'border-transparent'}`}
                            />
                          </div>
                          {errors.mobile && (
                            <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.mobile}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">
                            Email Address <span className="text-[#00D4FF]">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all ${errors.email ? 'border-red-400' : 'border-transparent'}`}
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Service + Cargo Type */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">
                            Service Required <span className="text-[#00D4FF]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              name="service"
                              value={form.service}
                              onChange={handleChange}
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-4 pr-10 py-3.5 text-sm font-body text-[#0A1628] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all appearance-none cursor-pointer ${errors.service ? 'border-red-400' : form.service ? 'border-transparent' : 'text-[#7A8CA5]/70'}`}
                            >
                              <option value="" disabled>Select a service</option>
                              {serviceOptions.map((s) => (
                                <option key={s.label} value={s.label}>{s.label}</option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-4 h-4 text-[#7A8CA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                          {errors.service && (
                            <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.service}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Cargo Type</label>
                          <div className="relative">
                            <select
                              name="cargoType"
                              value={form.cargoType}
                              onChange={handleChange}
                              className={`w-full bg-[#F0F4F8] border border-transparent rounded-lg pl-4 pr-10 py-3.5 text-sm font-body text-[#0A1628] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all appearance-none cursor-pointer ${!form.cargoType ? 'text-[#7A8CA5]/70' : ''}`}
                            >
                              <option value="" disabled>Select cargo type</option>
                              {cargoTypes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-4 h-4 text-[#7A8CA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 4: Origin + Destination */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">
                            Origin City / Country <span className="text-[#00D4FF]">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="text"
                              name="origin"
                              value={form.origin}
                              onChange={handleChange}
                              placeholder="e.g. Mumbai, India"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all ${errors.origin ? 'border-red-400' : 'border-transparent'}`}
                            />
                          </div>
                          {errors.origin && (
                            <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.origin}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">
                            Destination City / Country <span className="text-[#00D4FF]">*</span>
                          </label>
                          <div className="relative">
                            <Route className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="text"
                              name="destination"
                              value={form.destination}
                              onChange={handleChange}
                              placeholder="e.g. Dubai, UAE"
                              className={`w-full bg-[#F0F4F8] border rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all ${errors.destination ? 'border-red-400' : 'border-transparent'}`}
                            />
                          </div>
                          {errors.destination && (
                            <p className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.destination}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 5: Weight + Shipment Date */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Approx Weight</label>
                          <div className="relative">
                            <Weight className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="text"
                              name="weight"
                              value={form.weight}
                              onChange={handleChange}
                              placeholder="e.g. 500 kg or 2 tons"
                              className="w-full bg-[#F0F4F8] border border-transparent rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-body text-[#0A1628] mb-2">Shipment Date</label>
                          <div className="relative">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                            <input
                              type="date"
                              name="shipmentDate"
                              value={form.shipmentDate}
                              onChange={handleChange}
                              className="w-full bg-[#F0F4F8] border border-transparent rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 6: Message */}
                      <div>
                        <label className="block text-sm font-body text-[#0A1628] mb-2">Additional Message</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#7A8CA5]" />
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Any special requirements, packaging needs, or additional details..."
                            className="w-full bg-[#F0F4F8] border border-transparent rounded-lg pl-11 pr-4 py-3.5 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/50 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/20 transition-all resize-none"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="group relative w-full inline-flex items-center justify-center gap-2 font-body font-medium text-[#0A1628] rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] px-8 py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4),0_0_60px_rgba(0,212,255,0.15)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {submitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Submit Quote Request
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                        <p className="mt-4 text-center text-xs font-body text-[#7A8CA5]">
                          By submitting, you agree to our <Link to="/terms-of-service" className="text-[#00D4FF] hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-[#00D4FF] hover:underline">Privacy Policy</Link>.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Graphic + Contact (2/5) */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <LogisticsGraphic />
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="space-y-4">
                  <h3 className="font-display text-lg text-[#0A1628] mb-4">Direct Contact</h3>
                  <ContactInfoCard
                    icon={Phone}
                    title="Call Us"
                    value="+91-70870-87333"
                    href="tel:+917087087333"
                  />
                  <ContactInfoCard
                    icon={Mail}
                    title="Email Us"
                    value="contact@highority.in"
                    href="mailto:contact@highority.in"
                  />
                  <ContactInfoCard
                    icon={MapPin}
                    title="Visit Us"
                    value="Zirakpur, Punjab, India"
                    href="#"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
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
                    Our logistics experts review every quote request personally and respond with tailored pricing and service recommendations within one business day.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
