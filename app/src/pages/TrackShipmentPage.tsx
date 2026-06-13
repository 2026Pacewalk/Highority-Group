import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search, Package, MapPin, Calendar, Clock, Truck, User, CheckCircle2,
  AlertCircle, Loader2, Printer, Share2, Box, FileText, PackageCheck,
  PackageX, Navigation, ArrowRight,
} from 'lucide-react';
import { api, ApiError } from '@/lib/api';

interface TrackingUpdate {
  status?: string;
  location?: string;
  date?: string;
  time?: string;
  remarks?: string;
}

interface Shipment {
  awb: string;
  service_type?: string;
  origin?: string;
  destination?: string;
  booking_date?: string;
  expected_delivery_date?: string;
  current_status?: string;
  consignor_name?: string;
  consignee_name?: string;
  cargo_type?: string;
  package_type?: string;
  pieces?: string;
  weight?: string;
  dimensions?: string;
  invoice_number?: string;
  receiver_name?: string;
  delivery_date?: string;
  delivery_time?: string;
  pod_remarks?: string;
  pod_image?: string;
  updates?: TrackingUpdate[];
}

type State = 'idle' | 'loading' | 'found' | 'notfound' | 'error';

const isDelivered = (s?: string) => (s || '').toLowerCase() === 'delivered';
const isNegative = (s?: string) =>
  ['hold', 'returned', 'cancelled'].includes((s || '').toLowerCase());

function StatusBadge({ status }: { status?: string }) {
  const delivered = isDelivered(status);
  const negative = isNegative(status);
  const cls = delivered
    ? 'bg-green-500/10 text-green-600 border-green-500/30'
    : negative
    ? 'bg-red-500/10 text-red-600 border-red-500/30'
    : 'bg-[#00D4FF]/10 text-[#00A8CC] border-[#00D4FF]/30';
  const Icon = delivered ? PackageCheck : negative ? PackageX : Truck;
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${cls}`}>
      <Icon className="w-4 h-4" />
      {status || 'Unknown'}
    </span>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-[#00D4FF]" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5] font-body">{label}</p>
        <p className="text-sm font-body text-[#0A1628] break-words">{value}</p>
      </div>
    </div>
  );
}

export default function TrackShipmentPage() {
  const [params, setParams] = useSearchParams();
  const [awb, setAwb] = useState(params.get('awb') || '');
  const [state, setState] = useState<State>('idle');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState('');

  const track = useCallback(async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError('Please enter your AWB / tracking number.');
      setState('idle');
      return;
    }
    setError('');
    setState('loading');
    try {
      const data = await api<Shipment>(`/shipments/track/${encodeURIComponent(trimmed)}`);
      setShipment(data);
      setState('found');
    } catch (e) {
      if (e instanceof ApiError && e.status === 404) setState('notfound');
      else setState('error');
    }
  }, []);

  // Auto-track when arriving via a shared link (?awb=...)
  useEffect(() => {
    const q = params.get('awb');
    if (q) track(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setParams(awb.trim() ? { awb: awb.trim() } : {});
    track(awb);
  };

  const shareWhatsApp = () => {
    if (!shipment) return;
    const url = `${window.location.origin}/track-shipment?awb=${encodeURIComponent(shipment.awb)}`;
    const text = `Track shipment ${shipment.awb}\nStatus: ${shipment.current_status}\n${shipment.origin || ''} → ${shipment.destination || ''}\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const updates = [...(shipment?.updates || [])];

  return (
    <main className="bg-white">
      <style>{`@media print { header, footer, .no-print { display: none !important; } main { padding-top: 0 !important; } }`}</style>

      {/* ===== HERO + SEARCH ===== */}
      <section className="relative w-full overflow-hidden bg-[#0A1628] pt-28 pb-16">
        <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(0,212,255,0.14) 0%, transparent 60%)' }} />
        <div className="container-main relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#00D4FF] font-body">Shipment Tracking</span>
          </div>
          <h1 className="font-display text-[clamp(34px,5vw,60px)] font-normal leading-[1.05] tracking-[-0.02em] text-white">
            Track Your Shipment
          </h1>
          <p className="mt-4 text-base md:text-lg font-body text-white/70 max-w-[640px] mx-auto leading-relaxed">
            Enter your AWB / Tracking Number to view shipment status and movement updates.
          </p>

          <form onSubmit={onSubmit} className="no-print mt-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A8CA5]" />
                <input
                  value={awb}
                  onChange={(e) => setAwb(e.target.value)}
                  placeholder="AWB / Tracking Number"
                  className="w-full rounded-xl bg-white/[0.06] border border-white/15 pl-12 pr-4 py-4 text-white placeholder:text-[#7A8CA5] outline-none focus:border-[#00D4FF]/60 focus:bg-white/[0.09] transition"
                />
              </div>
              <button
                type="submit"
                disabled={state === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold font-body text-[#0A1628] bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] hover:shadow-[0_0_24px_rgba(0,212,255,0.45)] hover:-translate-y-0.5 transition disabled:opacity-70 whitespace-nowrap"
              >
                {state === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Navigation className="w-5 h-5" />}
                Track Now
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-400 flex items-center justify-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> {error}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="relative w-full py-12 md:py-16 min-h-[30vh]">
        <div className="container-main">
          {state === 'loading' && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative w-16 h-16 mb-5">
                <div className="absolute inset-0 rounded-full border-2 border-[#00D4FF]/20" />
                <div className="absolute inset-0 rounded-full border-2 border-[#00D4FF] border-t-transparent animate-spin" />
                <Package className="absolute inset-0 m-auto w-6 h-6 text-[#00D4FF]" />
              </div>
              <p className="text-sm font-body text-[#7A8CA5]">Fetching latest shipment status…</p>
            </div>
          )}

          {state === 'notfound' && (
            <div className="max-w-md mx-auto text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">
                <PackageX className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="font-display text-2xl text-[#0A1628] mb-2">No Shipment Found</h2>
              <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">
                We couldn't find a shipment for that tracking number. Please check the AWB and try again, or contact our team for assistance.
              </p>
            </div>
          )}

          {state === 'error' && (
            <div className="max-w-md mx-auto text-center py-16">
              <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-4" />
              <h2 className="font-display text-xl text-[#0A1628] mb-2">Something went wrong</h2>
              <p className="text-sm font-body text-[#7A8CA5]">Please try again in a moment.</p>
            </div>
          )}

          {state === 'found' && shipment && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Summary card */}
              <div className="relative rounded-2xl glass-card-dark overflow-hidden bg-[#0A1628] text-white p-6 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5]">AWB / Tracking Number</p>
                      <p className="font-display text-2xl text-white">{shipment.awb}</p>
                    </div>
                    <StatusBadge status={shipment.current_status} />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-center">
                      <p className="text-xs text-[#7A8CA5]">Origin</p>
                      <p className="text-sm font-medium text-white">{shipment.origin || '—'}</p>
                    </div>
                    <div className="flex-1 relative h-px bg-white/15">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D4FF]" />
                      <Truck className="absolute left-1/2 -translate-x-1/2 -top-2.5 w-5 h-5 text-[#00D4FF]" />
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D4FF]" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-[#7A8CA5]">Destination</p>
                      <p className="text-sm font-medium text-white">{shipment.destination || '—'}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5]">Booking Date</p>
                      <p className="text-white">{shipment.booking_date || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5]">Expected Delivery</p>
                      <p className="text-white">{shipment.expected_delivery_date || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5]">Service Type</p>
                      <p className="text-white">{shipment.service_type || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5]">Consignee</p>
                      <p className="text-white">{shipment.consignee_name || '—'}</p>
                    </div>
                  </div>

                  {/* actions */}
                  <div className="no-print flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
                    <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-sm rounded-lg border border-white/15 px-4 py-2 hover:bg-white/5 transition">
                      <Printer className="w-4 h-4 text-[#00D4FF]" /> Print
                    </button>
                    <button onClick={shareWhatsApp} className="inline-flex items-center gap-2 text-sm rounded-lg border border-white/15 px-4 py-2 hover:bg-white/5 transition">
                      <Share2 className="w-4 h-4 text-[#00D4FF]" /> Share on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl border border-[#0A1628]/8 bg-white p-6 md:p-8">
                <h2 className="font-display text-xl text-[#0A1628] mb-6 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#00D4FF]" /> Shipment Timeline
                </h2>
                {updates.length === 0 ? (
                  <p className="text-sm text-[#7A8CA5]">No tracking updates yet.</p>
                ) : (
                  <ol className="relative">
                    {updates.map((u, i) => {
                      const latest = i === updates.length - 1;
                      return (
                        <li key={i} className="relative pl-10 pb-7 last:pb-0">
                          {i !== updates.length - 1 && (
                            <span className="absolute left-[14px] top-3 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 to-[#00D4FF]/10" />
                          )}
                          <span className={`absolute left-0 top-1 w-[30px] h-[30px] rounded-full flex items-center justify-center ${latest ? 'bg-[#00D4FF] shadow-[0_0_14px_rgba(0,212,255,0.7)]' : 'bg-[#00D4FF]/15'}`}>
                            <CheckCircle2 className={`w-4 h-4 ${latest ? 'text-[#0A1628]' : 'text-[#00A8CC]'}`} />
                          </span>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <p className={`font-body font-semibold ${latest ? 'text-[#0A1628]' : 'text-[#0A1628]/80'}`}>{u.status}</p>
                            <p className="text-xs text-[#7A8CA5]">
                              {[u.date, u.time].filter(Boolean).join(' · ')}
                            </p>
                          </div>
                          {u.location && (
                            <p className="text-sm text-[#5A6B82] flex items-center gap-1.5 mt-0.5">
                              <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" /> {u.location}
                            </p>
                          )}
                          {u.remarks && <p className="text-sm text-[#7A8CA5] mt-0.5">{u.remarks}</p>}
                        </li>
                      );
                    })}
                  </ol>
                )}
              </div>

              {/* Cargo + Parties */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-[#0A1628]/8 bg-white p-6">
                  <h2 className="font-display text-lg text-[#0A1628] mb-5 flex items-center gap-2">
                    <Box className="w-5 h-5 text-[#00D4FF]" /> Cargo Details
                  </h2>
                  <div className="space-y-4">
                    <InfoRow icon={Package} label="Cargo Type" value={shipment.cargo_type} />
                    <InfoRow icon={Box} label="Package Type" value={shipment.package_type} />
                    <InfoRow icon={Package} label="Number of Pieces" value={shipment.pieces} />
                    <InfoRow icon={Truck} label="Weight" value={shipment.weight} />
                    <InfoRow icon={Box} label="Dimensions" value={shipment.dimensions} />
                    <InfoRow icon={FileText} label="Invoice Number" value={shipment.invoice_number} />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#0A1628]/8 bg-white p-6">
                  <h2 className="font-display text-lg text-[#0A1628] mb-5 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#00D4FF]" /> Parties
                  </h2>
                  <div className="space-y-4">
                    <InfoRow icon={User} label="Consignor (Sender)" value={shipment.consignor_name} />
                    <InfoRow icon={User} label="Consignee (Receiver)" value={shipment.consignee_name} />
                    <InfoRow icon={MapPin} label="Origin" value={shipment.origin} />
                    <InfoRow icon={MapPin} label="Destination" value={shipment.destination} />
                  </div>
                </div>
              </div>

              {/* Delivery details (when delivered) */}
              {(isDelivered(shipment.current_status) || shipment.receiver_name || shipment.delivery_date || shipment.pod_remarks || shipment.pod_image) && (
                <div className="rounded-2xl border border-green-500/20 bg-green-50/40 p-6 md:p-8">
                  <h2 className="font-display text-lg text-[#0A1628] mb-5 flex items-center gap-2">
                    <PackageCheck className="w-5 h-5 text-green-600" /> Delivery Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InfoRow icon={User} label="Receiver Name" value={shipment.receiver_name} />
                    <InfoRow icon={Calendar} label="Delivery Date" value={shipment.delivery_date} />
                    <InfoRow icon={Clock} label="Delivery Time" value={shipment.delivery_time} />
                    <InfoRow icon={FileText} label="Proof of Delivery" value={shipment.pod_remarks} />
                  </div>
                  {shipment.pod_image && (
                    <div className="mt-5">
                      <p className="text-[11px] uppercase tracking-wide text-[#7A8CA5] mb-2">Proof of Delivery</p>
                      <img src={shipment.pod_image} alt="Proof of delivery" className="max-h-64 rounded-xl border border-[#0A1628]/10" />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {state === 'idle' && (
            <div className="max-w-md mx-auto text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-5">
                <PackageSearchFallback />
              </div>
              <p className="text-sm font-body text-[#7A8CA5] leading-relaxed">
                Enter a tracking number above to see live shipment status, movement timeline, and delivery details.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function PackageSearchFallback() {
  return (
    <span className="relative">
      <Package className="w-8 h-8 text-[#00D4FF]" />
      <ArrowRight className="absolute -right-1 -bottom-1 w-4 h-4 text-[#00A8CC]" />
    </span>
  );
}
