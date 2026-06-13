import { useRef, useState } from 'react';
import { Plus, Trash2, Upload, Loader2 } from 'lucide-react';
import { uploadImage } from '@/lib/api';
import { getIcon, iconNames } from '@/lib/iconMap';
import type { Field, SubField } from './resources';

const inputCls =
  'w-full rounded-lg border border-[#0A1628]/15 px-3 py-2 text-sm text-[#0A1628] outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition';
const labelCls = 'block text-sm font-medium text-[#0A1628] mb-1.5';

export function TextInput({ value, onChange, type = 'text', textarea, ...rest }: any) {
  if (textarea)
    return (
      <textarea
        className={inputCls + ' min-h-[90px] resize-y'}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    );
  return (
    <input
      type={type}
      className={inputCls}
      value={value ?? ''}
      onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
      {...rest}
    />
  );
}

export function IconPicker({ value, onChange }: { value?: string; onChange: (v: string) => void }) {
  const Preview = getIcon(value);
  return (
    <div className="flex items-center gap-3">
      <span className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
        <Preview className="w-5 h-5 text-[#00D4FF]" />
      </span>
      <select className={inputCls} value={value ?? ''} onChange={(e) => onChange(e.target.value)}>
        <option value="">— select icon —</option>
        {iconNames.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ImagePicker({ value, onChange }: { value?: string; onChange: (v: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function handleFile(file: File) {
    setBusy(true);
    setErr('');
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch {
      setErr('Upload failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        {value ? (
          <img
            src={value}
            alt=""
            className="w-16 h-16 rounded-lg object-contain bg-[#F5F8FA] border border-[#0A1628]/10"
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-[#F5F8FA] border border-dashed border-[#0A1628]/20 flex items-center justify-center text-[#7A8CA5] text-xs">
            none
          </div>
        )}
        <div className="flex-1">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-medium px-3 py-2 hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] disabled:opacity-60 transition"
          >
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            Upload image
          </button>
          {err && <p className="text-xs text-red-500 mt-1">{err}</p>}
        </div>
      </div>
      <input
        className={inputCls + ' mt-2'}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="/assets/… or /uploads/… or paste a URL"
      />
    </div>
  );
}

export function StringListInput({ value, onChange }: { value?: string[]; onChange: (v: string[]) => void }) {
  const list = Array.isArray(value) ? value : [];
  const update = (i: number, v: string) => onChange(list.map((x, j) => (j === i ? v : x)));
  return (
    <div className="space-y-2">
      {list.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input className={inputCls} value={item} onChange={(e) => update(i, e.target.value)} />
          <button
            type="button"
            onClick={() => onChange(list.filter((_, j) => j !== i))}
            className="px-2 text-[#7A8CA5] hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...list, ''])}
        className="inline-flex items-center gap-1.5 text-sm text-[#00A8CC] hover:text-[#0A1628]"
      >
        <Plus className="w-4 h-4" /> Add item
      </button>
    </div>
  );
}

export function RepeaterInput({
  value,
  onChange,
  subFields,
}: {
  value?: any[];
  onChange: (v: any[]) => void;
  subFields: SubField[];
}) {
  const list = Array.isArray(value) ? value : [];
  const update = (i: number, key: string, v: string) =>
    onChange(list.map((row, j) => (j === i ? { ...row, [key]: v } : row)));
  const blank = Object.fromEntries(subFields.map((s) => [s.key, '']));
  return (
    <div className="space-y-3">
      {list.map((row, i) => (
        <div key={i} className="rounded-lg border border-[#0A1628]/10 p-3 bg-[#F9FBFC]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-[#7A8CA5]">#{i + 1}</span>
            <button
              type="button"
              onClick={() => onChange(list.filter((_, j) => j !== i))}
              className="text-[#7A8CA5] hover:text-red-500"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            {subFields.map((s) => (
              <div key={s.key}>
                <label className="block text-xs text-[#7A8CA5] mb-1">{s.label}</label>
                {s.type === 'icon' ? (
                  <IconPicker value={row[s.key]} onChange={(v) => update(i, s.key, v)} />
                ) : (
                  <TextInput
                    value={row[s.key]}
                    onChange={(v: string) => update(i, s.key, v)}
                    textarea={s.type === 'textarea'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...list, { ...blank }])}
        className="inline-flex items-center gap-1.5 text-sm text-[#00A8CC] hover:text-[#0A1628]"
      >
        <Plus className="w-4 h-4" /> Add row
      </button>
    </div>
  );
}

export function FieldInput({
  field,
  value,
  onChange,
  disabled,
}: {
  field: Field;
  value: any;
  onChange: (v: any) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className={labelCls}>
        {field.label}
        {field.required && <span className="text-red-500"> *</span>}
      </label>
      {field.type === 'textarea' ? (
        <TextInput value={value} onChange={onChange} textarea />
      ) : field.type === 'number' ? (
        <TextInput value={value} onChange={onChange} type="number" />
      ) : field.type === 'icon' ? (
        <IconPicker value={value} onChange={onChange} />
      ) : field.type === 'image' ? (
        <ImagePicker value={value} onChange={onChange} />
      ) : field.type === 'stringList' ? (
        <StringListInput value={value} onChange={onChange} />
      ) : field.type === 'repeater' ? (
        <RepeaterInput value={value} onChange={onChange} subFields={field.subFields || []} />
      ) : (
        <TextInput value={value} onChange={onChange} disabled={disabled} />
      )}
      {field.help && <p className="text-xs text-[#7A8CA5] mt-1">{field.help}</p>}
    </div>
  );
}
