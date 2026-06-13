import { useEffect, useState } from 'react';
import { Loader2, Trash2, Mail, MailOpen, Inbox } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';

interface Lead {
  id: number;
  type: string;
  source: string | null;
  payload: Record<string, any>;
  is_read: boolean;
  created_at: string;
}

const TABS = [
  { key: '', label: 'All' },
  { key: 'quote', label: 'Quotes' },
  { key: 'contact', label: 'Contact' },
];

export default function LeadsInbox() {
  const [tab, setTab] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [counts, setCounts] = useState({ total: 0, unread: 0 });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<number | null>(null);

  const load = () => {
    setLoading(true);
    api<{ leads: Lead[]; total: number; unread: number }>(
      `/leads${tab ? `?type=${tab}` : ''}`
    )
      .then((d) => {
        setLeads(d.leads);
        setCounts({ total: d.total, unread: d.unread });
      })
      .catch(() => toast.error('Failed to load leads'))
      .finally(() => setLoading(false));
  };

  useEffect(load, [tab]);

  async function toggleRead(lead: Lead) {
    try {
      await api(`/leads/${lead.id}`, {
        method: 'PUT',
        body: JSON.stringify({ is_read: !lead.is_read }),
      });
      load();
    } catch {
      toast.error('Update failed');
    }
  }

  async function remove(id: number) {
    if (!confirm('Delete this lead?')) return;
    try {
      await api(`/leads/${id}`, { method: 'DELETE' });
      toast.success('Deleted');
      load();
    } catch {
      toast.error('Delete failed');
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[#0A1628]">Leads</h1>
          <p className="text-sm text-[#7A8CA5]">
            {counts.total} total · {counts.unread} unread
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-5 border-b border-[#0A1628]/10">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition ${
              tab === t.key
                ? 'border-[#00D4FF] text-[#0A1628]'
                : 'border-transparent text-[#7A8CA5] hover:text-[#0A1628]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-[#00D4FF]" />
        </div>
      ) : leads.length === 0 ? (
        <div className="text-center py-16 text-[#7A8CA5]">
          <Inbox className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p className="text-sm">No leads yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {leads.map((lead) => {
            const p = lead.payload || {};
            const name = p.fullName || p.name || 'Unknown';
            return (
              <div
                key={lead.id}
                className={`rounded-xl border bg-white overflow-hidden ${
                  lead.is_read ? 'border-[#0A1628]/10' : 'border-[#00D4FF]/40'
                }`}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#F9FBFC]"
                  onClick={() => setOpen(open === lead.id ? null : lead.id)}
                >
                  {!lead.is_read && (
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] flex-shrink-0" />
                  )}
                  <span
                    className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0 ${
                      lead.type === 'quote'
                        ? 'bg-[#00D4FF]/10 text-[#00A8CC]'
                        : 'bg-[#0A1628]/5 text-[#7A8CA5]'
                    }`}
                  >
                    {lead.type}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[#0A1628] truncate">{name}</p>
                    <p className="text-xs text-[#7A8CA5] truncate">
                      {p.email || ''} {p.mobile ? `· ${p.mobile}` : ''}
                    </p>
                  </div>
                  <span className="text-xs text-[#7A8CA5] flex-shrink-0 hidden sm:block">
                    {new Date(lead.created_at).toLocaleString()}
                  </span>
                </div>

                {open === lead.id && (
                  <div className="px-4 pb-4 border-t border-[#0A1628]/5 pt-3">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
                      {Object.entries(p).map(([k, v]) => (
                        <div key={k}>
                          <dt className="text-[11px] uppercase tracking-wide text-[#7A8CA5]">
                            {k}
                          </dt>
                          <dd className="text-sm text-[#0A1628] break-words">{String(v)}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleRead(lead)}
                        className="inline-flex items-center gap-1.5 text-xs rounded-lg border border-[#0A1628]/15 px-3 py-1.5 hover:bg-[#F5F8FA]"
                      >
                        {lead.is_read ? (
                          <>
                            <Mail className="w-3.5 h-3.5" /> Mark unread
                          </>
                        ) : (
                          <>
                            <MailOpen className="w-3.5 h-3.5" /> Mark read
                          </>
                        )}
                      </button>
                      <a
                        href={`mailto:${p.email || ''}`}
                        className="inline-flex items-center gap-1.5 text-xs rounded-lg border border-[#0A1628]/15 px-3 py-1.5 hover:bg-[#F5F8FA]"
                      >
                        <Mail className="w-3.5 h-3.5" /> Reply
                      </a>
                      <button
                        onClick={() => remove(lead.id)}
                        className="inline-flex items-center gap-1.5 text-xs rounded-lg border border-red-200 text-red-500 px-3 py-1.5 hover:bg-red-50"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
