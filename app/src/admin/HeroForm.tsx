import { useEffect, useState } from 'react';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { TextInput } from './fields';

interface Hero {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export default function HeroForm() {
  const [hero, setHero] = useState<Hero>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api<Hero>('/site-content/hero')
      .then(setHero)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await api('/site-content/hero', { method: 'PUT', body: JSON.stringify(hero) });
      toast.success('Homepage hero saved');
    } catch {
      toast.error('Save failed');
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
      <h1 className="text-2xl font-semibold text-[#0A1628] mb-1">Homepage Hero</h1>
      <p className="text-sm text-[#7A8CA5] mb-6">The main banner text on the home page.</p>
      <form onSubmit={save} className="space-y-5 bg-white rounded-xl border border-[#0A1628]/10 p-6">
        <div>
          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Eyebrow</label>
          <TextInput value={hero.eyebrow} onChange={(v: string) => setHero({ ...hero, eyebrow: v })} />
          <p className="text-xs text-[#7A8CA5] mt-1">Small label above the heading.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Heading</label>
          <TextInput value={hero.heading} onChange={(v: string) => setHero({ ...hero, heading: v })} textarea />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Subheading</label>
          <TextInput value={hero.subheading} onChange={(v: string) => setHero({ ...hero, subheading: v })} textarea />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-medium px-5 py-2.5 hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] disabled:opacity-60 transition"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save
        </button>
      </form>
    </div>
  );
}
