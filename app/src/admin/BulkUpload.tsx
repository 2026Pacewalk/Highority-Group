import { useRef, useState } from 'react';
import { Upload, Loader2, X, FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { parseShipmentFile, type ParsedShipment } from './shipmentImport';

interface Result {
  total: number;
  created: number;
  updated: number;
  failed: number;
  errors: string[];
}

export default function BulkUpload({ onDone }: { onDone: () => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [parsing, setParsing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [rows, setRows] = useState<ParsedShipment[] | null>(null);
  const [fileName, setFileName] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  async function handleFile(file: File) {
    setParsing(true);
    setResult(null);
    setRows(null);
    setFileName(file.name);
    try {
      const parsed = await parseShipmentFile(file);
      if (!parsed.length) {
        toast.error('No shipment rows found in that file.');
        setFileName('');
      } else {
        setRows(parsed);
      }
    } catch (e: any) {
      toast.error(e?.message || 'Could not read that file.');
      setFileName('');
    } finally {
      setParsing(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  async function doImport() {
    if (!rows) return;
    setUploading(true);
    try {
      const res = await api<Result>('/shipments/bulk', {
        method: 'POST',
        body: JSON.stringify({ shipments: rows }),
      });
      setResult(res);
      toast.success(`Imported: ${res.created} added, ${res.updated} updated`);
      onDone();
    } catch (e: any) {
      toast.error(e?.message || 'Import failed.');
    } finally {
      setUploading(false);
    }
  }

  function close() {
    setRows(null);
    setResult(null);
    setFileName('');
  }

  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept=".xlsx,.xls,.csv"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
      <button
        onClick={() => fileRef.current?.click()}
        disabled={parsing}
        className="inline-flex items-center gap-2 rounded-lg border border-[#00D4FF]/40 text-[#00A8CC] text-sm font-medium px-4 py-2 hover:bg-[#00D4FF]/10 disabled:opacity-60 transition"
      >
        {parsing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
        Import Excel
      </button>

      {(rows || result) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1628]/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#0A1628]/10">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#00A8CC]" />
                <h3 className="font-display text-lg text-[#0A1628]">
                  {result ? 'Import complete' : 'Confirm import'}
                </h3>
              </div>
              <button onClick={close} className="text-[#7A8CA5] hover:text-[#0A1628]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {!result && rows && (
                <>
                  <p className="text-sm text-[#5A6B82] mb-4">
                    <span className="font-medium text-[#0A1628]">{rows.length}</span> shipment
                    {rows.length === 1 ? '' : 's'} found in{' '}
                    <span className="font-medium">{fileName}</span>. Existing AWBs will be updated;
                    new ones added.
                  </p>
                  <div className="rounded-lg border border-[#0A1628]/10 max-h-52 overflow-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-[#F5F8FA] text-[#7A8CA5] sticky top-0">
                        <tr>
                          <th className="text-left px-3 py-2 font-medium">AWB</th>
                          <th className="text-left px-3 py-2 font-medium">Status</th>
                          <th className="text-left px-3 py-2 font-medium">Route</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.slice(0, 50).map((r, i) => (
                          <tr key={i} className="border-t border-[#0A1628]/5">
                            <td className="px-3 py-1.5 text-[#0A1628] font-medium">{r.awb}</td>
                            <td className="px-3 py-1.5 text-[#5A6B82]">{r.current_status || '—'}</td>
                            <td className="px-3 py-1.5 text-[#5A6B82]">
                              {[r.origin, r.destination].filter(Boolean).join(' → ') || '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {rows.length > 50 && (
                    <p className="text-xs text-[#7A8CA5] mt-2">Showing first 50 of {rows.length}.</p>
                  )}
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={doImport}
                      disabled={uploading}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-semibold px-5 py-2.5 hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] disabled:opacity-60 transition"
                    >
                      {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                      Import {rows.length} shipment{rows.length === 1 ? '' : 's'}
                    </button>
                    <button onClick={close} className="rounded-lg border border-[#0A1628]/15 text-sm px-5 py-2.5 hover:bg-[#F5F8FA]">
                      Cancel
                    </button>
                  </div>
                </>
              )}

              {result && (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="text-sm text-[#0A1628]">
                        <span className="font-semibold">{result.created}</span> added ·{' '}
                        <span className="font-semibold">{result.updated}</span> updated
                        {result.failed > 0 && (
                          <> · <span className="font-semibold text-red-500">{result.failed}</span> failed</>
                        )}
                      </p>
                      <p className="text-xs text-[#7A8CA5]">out of {result.total} rows</p>
                    </div>
                  </div>
                  {result.errors.length > 0 && (
                    <div className="rounded-lg bg-red-50 border border-red-100 p-3 max-h-40 overflow-auto">
                      <p className="text-xs font-medium text-red-600 flex items-center gap-1.5 mb-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Issues
                      </p>
                      <ul className="text-xs text-red-500 space-y-0.5">
                        {result.errors.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    onClick={close}
                    className="mt-5 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-semibold px-5 py-2.5 hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] transition"
                  >
                    Done
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
