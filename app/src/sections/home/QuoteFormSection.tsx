import { useState, type FormEvent } from 'react';
import { CheckCircle, Phone, Mail, Shield, Clock, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PrimaryButton from '@/components/ui/PrimaryButton';

const benefits = [
  { num: '1', title: 'Competitive Pricing', description: 'Get the best rates for air and sea freight with no hidden charges.' },
  { num: '2', title: 'Expert Guidance', description: 'Our specialists recommend the optimal shipping method for your cargo.' },
  { num: '3', title: 'Fast Response', description: 'Receive your customized quote within 24 hours of submission.' },
  { num: '4', title: 'Door-to-Door Service', description: 'We handle everything from pickup to final delivery.' },
];

const cargoTypes = ['General Cargo', 'Electronics', 'Automotive Parts', 'Food & Beverage', 'FMCG Products', 'Agro Products', 'Textile', 'Other'];
const serviceTypes = ['Air Freight', 'Sea Freight', 'Door to Door', 'Customs Clearance'];

const inputClass = "w-full bg-[#F0F4F8] border border-[#0A1628]/10 rounded-lg px-4 py-3 text-sm font-body text-[#0A1628] placeholder-[#7A8CA5]/60 focus:border-[#00D4FF]/60 focus:ring-2 focus:ring-[#00D4FF]/10 focus:outline-none transition-all";

export default function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', mobile: '', email: '', cargoType: '', weight: '', dimensions: '', origin: '', destination: '', serviceType: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Deliver the collected details via the same mailto pattern used by the
    // Contact and Request-Quote forms (no backend wired up yet).
    const subject = encodeURIComponent(`Quote Request from ${formData.fullName || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName || 'N/A'}\n` +
      `Mobile: ${formData.mobile || 'N/A'}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Service Type: ${formData.serviceType || 'N/A'}\n` +
      `Cargo Type: ${formData.cargoType || 'N/A'}\n` +
      `Weight: ${formData.weight || 'N/A'}\n` +
      `Dimensions: ${formData.dimensions || 'N/A'}\n` +
      `Origin: ${formData.origin || 'N/A'}\n` +
      `Destination: ${formData.destination || 'N/A'}\n` +
      `Message: ${formData.message || 'N/A'}`
    );
    window.location.href = `mailto:contact@highority.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative w-full section-padding bg-white">
        <div className="container-main max-w-lg mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-[#00D4FF] mx-auto mb-6" />
          <h3 className="font-display text-2xl text-[#0A1628] mb-2">Quote Request Submitted!</h3>
          <p className="text-[#7A8CA5] font-body">Our team will contact you within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full section-padding bg-[#F0F4F8] overflow-hidden">
      <div className="absolute left-1/4 top-0 bottom-0 w-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(0,212,255,0.06) 0%, transparent 100%)' }} />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="glow-border-wrapper">
              <div className="glow-border-inner p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">Get a Quote</span>
                </div>
                <h3 className="font-display text-2xl text-[#0A1628] mb-2">Confused About Choosing The Right Shipping Service for Your Goods?</h3>
                <p className="text-sm font-body text-[#7A8CA5] mb-8">Fill in the details below and our team will get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Full Name <span className="text-[#00D4FF]">*</span></label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} placeholder="John Doe" /></div>
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Mobile Number <span className="text-[#00D4FF]">*</span></label><input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Email Address <span className="text-[#00D4FF]">*</span></label><input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@company.com" /></div>
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Cargo Type</label><select name="cargoType" value={formData.cargoType} onChange={handleChange} className={inputClass}><option value="">Select type</option>{cargoTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Weight (kg)</label><input type="number" name="weight" value={formData.weight} onChange={handleChange} className={inputClass} placeholder="e.g. 500" /></div>
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Dimensions</label><input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className={inputClass} placeholder="L x W x H in cm" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Origin <span className="text-[#00D4FF]">*</span></label><input type="text" name="origin" required value={formData.origin} onChange={handleChange} className={inputClass} placeholder="City, Country" /></div>
                    <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Destination <span className="text-[#00D4FF]">*</span></label><input type="text" name="destination" required value={formData.destination} onChange={handleChange} className={inputClass} placeholder="City, Country" /></div>
                  </div>
                  <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Service Type</label><select name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass}><option value="">Select service</option>{serviceTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                  <div><label className="block text-xs font-body text-[#7A8CA5] mb-1.5">Additional Message</label><textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Any special requirements..." /></div>
                  <PrimaryButton fullWidth>Submit Quote Request</PrimaryButton>
                </form>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="lg:pt-10">
              <h4 className="font-display text-xl text-[#0A1628] mb-8">Why Request a Quote from Highority?</h4>
              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00D4FF] font-body font-medium text-sm">{b.num}</span>
                    </div>
                    <div><h5 className="font-body font-medium text-[#0A1628]">{b.title}</h5><p className="text-sm font-body text-[#7A8CA5] mt-1">{b.description}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-[#0A1628]/5">
                <p className="text-sm font-body text-[#7A8CA5]">Prefer to talk?</p>
                <a href="tel:+917087087333" className="block text-lg text-[#0A1628] font-body mt-2 hover:text-[#00D4FF] transition-colors"><Phone className="w-4 h-4 inline mr-2" />+91-70870-87333</a>
                <a href="mailto:contact@highority.in" className="block text-sm text-[#00D4FF] font-body mt-2 hover:underline"><Mail className="w-4 h-4 inline mr-2" />contact@highority.in</a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {[{ icon: Shield, label: 'IATA Certified' }, { icon: Award, label: 'ISO 9001' }, { icon: Clock, label: '24/7 Support' }].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#7A8CA5]"><item.icon className="w-4 h-4" /><span className="text-xs font-body">{item.label}</span></div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
