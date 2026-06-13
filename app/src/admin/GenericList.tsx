import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Plus, Pencil, Trash2, Loader2, Search } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { resources } from './resources';

export default function GenericList() {
  const { resource } = useParams();
  const cfg = resource ? resources[resource] : undefined;
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [filterVal, setFilterVal] = useState('');

  const load = () => {
    if (!cfg) return;
    setLoading(true);
    api<any[]>(cfg.path)
      .then(setRows)
      .catch(() => toast.error('Failed to load'))
      .finally(() => setLoading(false));
  };

  useEffect(load, [cfg?.path]);

  const visibleRows = useMemo(() => {
    if (!cfg) return [];
    let r = rows;
    if (cfg.filterField && filterVal)
      r = r.filter((row) => row[cfg.filterField!.key] === filterVal);
    if (cfg.searchable && query.trim()) {
      const q = query.trim().toLowerCase();
      r = r.filter((row) =>
        [row[cfg.idField], row[cfg.titleField], row[cfg.subtitleField || '']]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q))
      );
    }
    return r;
  }, [rows, query, filterVal, cfg]);

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

      {(cfg.searchable || cfg.filterField) && (
        <div className="flex flex-wrap gap-3 mb-4">
          {cfg.searchable && (
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="w-full rounded-lg border border-[#0A1628]/15 pl-9 pr-3 py-2 text-sm outline-none focus:border-[#00D4FF]"
              />
            </div>
          )}
          {cfg.filterField && (
            <select
              value={filterVal}
              onChange={(e) => setFilterVal(e.target.value)}
              className="rounded-lg border border-[#0A1628]/15 px-3 py-2 text-sm outline-none focus:border-[#00D4FF]"
            >
              <option value="">All {cfg.filterField.label}</option>
              {cfg.filterField.options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          )}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-[#00D4FF]" />
        </div>
      ) : (
        <div className="rounded-xl border border-[#0A1628]/10 overflow-hidden bg-white">
          {visibleRows.map((row) => {
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
          {visibleRows.length === 0 && (
            <p className="px-4 py-10 text-center text-sm text-[#7A8CA5]">
              {rows.length === 0
                ? `No items yet. Click “New ${cfg.singular}” to add one.`
                : 'No matches.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
