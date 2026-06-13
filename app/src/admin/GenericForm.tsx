import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { resources } from './resources';
import { FieldInput } from './fields';

export default function GenericForm() {
  const { resource, id } = useParams();
  const cfg = resource ? resources[resource] : undefined;
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!cfg || !isEdit) return;
    api<Record<string, any>>(`${cfg.path}/${id}`)
      .then(setForm)
      .catch(() => toast.error('Failed to load'))
      .finally(() => setLoading(false));
  }, [cfg?.path, id]);

  if (!cfg) return <p className="text-[#7A8CA5]">Unknown section.</p>;

  const set = (key: string, value: any) => setForm((f) => ({ ...f, [key]: value }));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    for (const f of cfg!.fields) {
      if (f.required && !form[f.key]) {
        toast.error(`${f.label} is required`);
        return;
      }
    }
    setSaving(true);
    try {
      if (isEdit) {
        await api(`${cfg!.path}/${id}`, { method: 'PUT', body: JSON.stringify(form) });
      } else {
        await api(cfg!.path, { method: 'POST', body: JSON.stringify(form) });
      }
      toast.success('Saved');
      navigate(`/admin/${cfg!.key}`);
    } catch (err: any) {
      toast.error(err?.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  if (loading)
    return (
      <div className="flex justify-center py-16">
        <Loader2 className="w-6 h-6 animate-spin text-[#00D4FF]" />
      </div>
    );

  return (
    <div className="max-w-2xl">
      <Link
        to={`/admin/${cfg.key}`}
        className="inline-flex items-center gap-1.5 text-sm text-[#7A8CA5] hover:text-[#0A1628] mb-4"
      >
        <ChevronLeft className="w-4 h-4" /> Back to {cfg.label}
      </Link>
      <h1 className="text-2xl font-semibold text-[#0A1628] mb-6">
        {isEdit ? `Edit ${cfg.singular}` : `New ${cfg.singular}`}
      </h1>

      <form onSubmit={save} className="space-y-5 bg-white rounded-xl border border-[#0A1628]/10 p-6">
        {cfg.fields.map((field) => {
          // The id/slug key is fixed once created.
          const lockId = isEdit && field.key === cfg.idField;
          if (cfg.autoId && field.key === cfg.idField) return null;
          return (
            <div key={field.key}>
              {field.section && (
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#00A8CC] pt-3 pb-1 border-t border-[#0A1628]/10 first:border-0 first:pt-0">
                  {field.section}
                </h3>
              )}
              <FieldInput
                field={field}
                value={form[field.key]}
                onChange={(v) => set(field.key, v)}
                disabled={lockId}
              />
            </div>
          );
        })}

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-medium px-5 py-2.5 hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] disabled:opacity-60 transition"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save
          </button>
          <Link
            to={`/admin/${cfg.key}`}
            className="rounded-lg border border-[#0A1628]/15 text-sm text-[#0A1628] px-5 py-2.5 hover:bg-[#F5F8FA] transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
