import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { resources } from './resources';

export default function GenericList() {
  const { resource } = useParams();
  const cfg = resource ? resources[resource] : undefined;
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    if (!cfg) return;
    setLoading(true);
    api<any[]>(cfg.path)
      .then(setRows)
      .catch(() => toast.error('Failed to load'))
      .finally(() => setLoading(false));
  };

  useEffect(load, [cfg?.path]);

  if (!cfg) return <p className="text-[#7A8CA5]">Unknown section.</p>;

  async function remove(id: string | number, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await api(`${cfg!.path}/${id}`, { method: 'DELETE' });
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
          <h1 className="text-2xl font-semibold text-[#0A1628]">{cfg.label}</h1>
          <p className="text-sm text-[#7A8CA5]">{rows.length} item(s)</p>
        </div>
        <Link
          to={`/admin/${cfg.key}/new`}
          className="inline-flex items-center gap-2 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-medium px-4 py-2 hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] transition"
        >
          <Plus className="w-4 h-4" /> New {cfg.singular}
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-[#00D4FF]" />
        </div>
      ) : (
        <div className="rounded-xl border border-[#0A1628]/10 overflow-hidden bg-white">
          {rows.map((row) => {
            const id = row[cfg.idField];
            return (
              <div
                key={id}
                className="flex items-center justify-between px-4 py-3 border-b border-[#0A1628]/5 last:border-0 hover:bg-[#F9FBFC]"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#0A1628] truncate">
                    {row[cfg.titleField] || '(untitled)'}
                  </p>
                  {cfg.subtitleField && (
                    <p className="text-xs text-[#7A8CA5] truncate">{row[cfg.subtitleField]}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Link
                    to={`/admin/${cfg.key}/${id}/edit`}
                    className="p-2 rounded-lg text-[#7A8CA5] hover:text-[#00A8CC] hover:bg-[#00D4FF]/10"
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => remove(id, row[cfg.titleField])}
                    className="p-2 rounded-lg text-[#7A8CA5] hover:text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
          {rows.length === 0 && (
            <p className="px-4 py-10 text-center text-sm text-[#7A8CA5]">
              No items yet. Click “New {cfg.singular}” to add one.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
