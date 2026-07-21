// Parses an uploaded shipment Excel/CSV into shipment objects that match the
// API. Handles the template's two-row header, Excel date serials, and numbers.

export interface ParsedShipment {
  awb: string;
  [key: string]: any;
}

// Header text -> shipment field. Order matters: more specific patterns first
// (e.g. "Proof of Delivery Remarks" must win over plain "Remarks").
const MATCHERS: [RegExp, string][] = [
  [/awb|tracking\s*(no|number)/i, 'awb'],
  [/service\s*type/i, 'service_type'],
  [/origin/i, 'origin'],
  [/destination/i, 'destination'],
  [/booking\s*date/i, 'booking_date'],
  [/current\s*status|status/i, 'current_status'],
  [/consignor\s*name/i, 'consignor_name'],
  [/consignor\s*(mobile|phone|contact)/i, 'consignor_mobile'],
  [/consignor\s*address/i, 'consignor_address'],
  [/consignee\s*name/i, 'consignee_name'],
  [/consignee\s*(mobile|phone|contact)/i, 'consignee_mobile'],
  [/consignee\s*address/i, 'consignee_address'],
  [/cargo\s*type/i, 'cargo_type'],
  [/package\s*type/i, 'package_type'],
  [/pieces|no\.?\s*of\s*pcs|pcs/i, 'pieces'],
  [/weight/i, 'weight'],
  [/dimension/i, 'dimensions'],
  [/invoice/i, 'invoice_number'],
  [/proof\s*of\s*delivery|(^|\W)pod(\W|$)/i, 'pod_remarks'],
  [/receiver\s*name/i, 'receiver_name'],
  [/delivery\s*date/i, 'delivery_date'],
  [/remarks/i, 'remarks'], // generic — keep LAST
];

const DATE_FIELDS = new Set(['booking_date', 'delivery_date']);

const pad = (n: number) => String(n).padStart(2, '0');

function toDateStr(v: any, XLSX: any): string {
  if (v == null || v === '') return '';
  if (v instanceof Date)
    return `${v.getFullYear()}-${pad(v.getMonth() + 1)}-${pad(v.getDate())}`;
  if (typeof v === 'number') {
    const d = XLSX.SSF?.parse_date_code(v);
    if (d && d.y) return `${d.y}-${pad(d.m)}-${pad(d.d)}`;
    return String(v);
  }
  return String(v).trim();
}

function fieldForHeader(h: string): string | null {
  const text = h.trim();
  if (!text) return null;
  for (const [re, field] of MATCHERS) if (re.test(text)) return field;
  return null;
}

export async function parseShipmentFile(file: File): Promise<ParsedShipment[]> {
  const XLSX = await import('xlsx');
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: 'array', cellDates: false });
  const ws = wb.Sheets[wb.SheetNames[0]];
  if (!ws) throw new Error('The file has no sheets.');

  const rows: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

  // Find the header row (the one that contains the AWB column label).
  let headerIdx = -1;
  for (let i = 0; i < Math.min(rows.length, 20); i++) {
    if (rows[i].some((c) => /awb|tracking\s*(no|number)/i.test(String(c)))) {
      headerIdx = i;
      break;
    }
  }
  if (headerIdx === -1)
    throw new Error(
      'Could not find the header row. Make sure the sheet has an "AWB / Tracking Number" column.'
    );

  const headers = rows[headerIdx].map((h) => String(h));
  const colField = headers.map(fieldForHeader);

  const out: ParsedShipment[] = [];
  for (let i = headerIdx + 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.every((c) => c === '' || c == null)) continue;

    const obj: any = {};
    colField.forEach((field, idx) => {
      if (!field) return;
      let v = row[idx];
      if (v === '' || v == null) return;
      if (DATE_FIELDS.has(field)) v = toDateStr(v, XLSX);
      else v = typeof v === 'string' ? v.trim() : String(v).trim();
      if (v !== '') obj[field] = v;
    });

    if (!obj.awb) continue; // skip rows without an AWB

    // Seed a single timeline entry from the current status so the tracking
    // page shows a starting point (admin can add more later).
    obj.updates = obj.current_status
      ? [
          {
            status: obj.current_status,
            location: obj.origin || obj.destination || '',
            date: obj.booking_date || '',
            time: '',
            remarks: '',
          },
        ]
      : [];

    out.push(obj);
  }

  return out;
}
