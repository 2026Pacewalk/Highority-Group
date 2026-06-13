import { Router } from 'express';
import { pool } from '../db.js';
import { requireAuth } from '../auth/middleware.js';

const COLUMNS = [
  'awb', 'service_type', 'origin', 'destination', 'booking_date',
  'expected_delivery_date', 'current_status', 'consignor_name',
  'consignor_mobile', 'consignor_address', 'consignee_name',
  'consignee_mobile', 'consignee_address', 'cargo_type', 'package_type',
  'pieces', 'weight', 'dimensions', 'invoice_number', 'remarks',
  'receiver_name', 'delivery_date', 'delivery_time', 'pod_remarks',
  'pod_image', 'updates',
];

const norm = (v) => (v !== null && typeof v === 'object' ? JSON.stringify(v) : v);

const r = Router();

// ---- PUBLIC: track by AWB (case-insensitive) ----
r.get('/track/:awb', async (req, res, next) => {
  try {
    const awb = String(req.params.awb || '').trim();
    if (!awb) return res.status(400).json({ error: 'AWB required' });
    const { rows } = await pool.query(
      'SELECT * FROM shipments WHERE lower(awb) = lower($1)',
      [awb]
    );
    rows[0] ? res.json(rows[0]) : res.status(404).json({ error: 'not found' });
  } catch (e) {
    next(e);
  }
});

// ---- everything below requires admin auth ----
r.use(requireAuth);

// list with optional ?q= (awb/names) and ?status=
r.get('/', async (req, res, next) => {
  try {
    const { q, status } = req.query;
    const where = [];
    const params = [];
    if (status) {
      params.push(status);
      where.push(`current_status = $${params.length}`);
    }
    if (q) {
      params.push(`%${q}%`);
      const i = params.length;
      where.push(
        `(awb ILIKE $${i} OR consignee_name ILIKE $${i} OR consignor_name ILIKE $${i})`
      );
    }
    const sql = `SELECT * FROM shipments ${
      where.length ? 'WHERE ' + where.join(' AND ') : ''
    } ORDER BY created_at DESC`;
    const { rows } = await pool.query(sql, params);
    res.json(rows);
  } catch (e) {
    next(e);
  }
});

r.get('/:awb', async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM shipments WHERE awb = $1', [
      req.params.awb,
    ]);
    rows[0] ? res.json(rows[0]) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
});

r.post('/', async (req, res, next) => {
  try {
    const cols = COLUMNS.filter((c) => req.body[c] !== undefined);
    if (!cols.includes('awb'))
      return res.status(400).json({ error: 'AWB required' });
    const vals = cols.map((c) => norm(req.body[c]));
    const ph = cols.map((_, i) => `$${i + 1}`);
    const { rows } = await pool.query(
      `INSERT INTO shipments (${cols.join(',')}) VALUES (${ph}) RETURNING *`,
      vals
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    if (e.code === '23505')
      return res.status(409).json({ error: 'AWB already exists' });
    next(e);
  }
});

r.put('/:awb', async (req, res, next) => {
  try {
    const cols = COLUMNS.filter(
      (c) => c !== 'awb' && req.body[c] !== undefined
    );
    if (!cols.length) return res.status(400).json({ error: 'no fields' });
    const set = cols.map((c, i) => `${c} = $${i + 1}`).join(', ');
    const vals = cols.map((c) => norm(req.body[c]));
    vals.push(req.params.awb);
    const { rows } = await pool.query(
      `UPDATE shipments SET ${set}, updated_at = now() WHERE awb = $${vals.length} RETURNING *`,
      vals
    );
    rows[0] ? res.json(rows[0]) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
});

r.delete('/:awb', async (req, res, next) => {
  try {
    await pool.query('DELETE FROM shipments WHERE awb = $1', [req.params.awb]);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

export default r;
