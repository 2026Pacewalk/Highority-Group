import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pool, hasDb } from './db.js';
import { seed } from './seed/seed.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Creates the schema (idempotent) and seeds initial data on first boot.
// Returns true if the DB is ready, false if running without a database
// (the public site still works via the frontend's fallback data).
export async function initDb() {
  if (!hasDb) {
    console.warn('[db] DATABASE_URL not set — running without a database.');
    return false;
  }
  const ddl = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  await pool.query(ddl);

  const { rows } = await pool.query('SELECT count(*)::int AS n FROM offices');
  if (rows[0].n === 0) {
    console.log('[db] empty — seeding initial content…');
    await seed();
    console.log('[db] seed complete.');
  }

  await seedDemoShipment();
  return true;
}

// A sample shipment so the tracking page is testable out of the box.
async function seedDemoShipment() {
  const demo = {
    awb: 'HG123456789',
    service_type: 'Air Freight',
    origin: 'New Delhi, India',
    destination: 'Dubai, UAE',
    booking_date: '2026-06-08',
    expected_delivery_date: '2026-06-14',
    current_status: 'In Transit',
    consignor_name: 'Highority India Pvt Ltd',
    consignor_mobile: '+91-70870-87333',
    consignor_address: 'Chandigarh Citi Center, Zirakpur, Punjab',
    consignee_name: 'Al Aweer Trading LLC',
    consignee_mobile: '+971-505059232',
    consignee_address: 'Al Aweer Central Market, Dubai, UAE',
    cargo_type: 'General Cargo',
    package_type: 'Carton Box',
    pieces: '12',
    weight: '240 kg',
    dimensions: '120 x 80 x 90 cm',
    invoice_number: 'INV-2026-0481',
    remarks: 'Handle with care',
    updates: [
      { status: 'Shipment Booked', location: 'New Delhi, India', date: '2026-06-08', time: '10:15', remarks: 'Booking confirmed' },
      { status: 'Picked Up', location: 'New Delhi, India', date: '2026-06-08', time: '16:40', remarks: 'Collected from consignor' },
      { status: 'Arrived at Origin Hub', location: 'Delhi Cargo Terminal', date: '2026-06-09', time: '09:05', remarks: '' },
      { status: 'Departed from Origin Hub', location: 'Delhi (DEL)', date: '2026-06-10', time: '22:30', remarks: 'Flight departed' },
      { status: 'In Transit', location: 'En route to Dubai', date: '2026-06-11', time: '02:10', remarks: '' },
    ],
  };
  await pool.query(
    `INSERT INTO shipments (awb, service_type, origin, destination, booking_date, expected_delivery_date,
       current_status, consignor_name, consignor_mobile, consignor_address, consignee_name, consignee_mobile,
       consignee_address, cargo_type, package_type, pieces, weight, dimensions, invoice_number, remarks, updates)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)
     ON CONFLICT (awb) DO NOTHING`,
    [
      demo.awb, demo.service_type, demo.origin, demo.destination, demo.booking_date,
      demo.expected_delivery_date, demo.current_status, demo.consignor_name, demo.consignor_mobile,
      demo.consignor_address, demo.consignee_name, demo.consignee_mobile, demo.consignee_address,
      demo.cargo_type, demo.package_type, demo.pieces, demo.weight, demo.dimensions,
      demo.invoice_number, demo.remarks, JSON.stringify(demo.updates),
    ]
  );
}
