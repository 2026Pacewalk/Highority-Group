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

// bulk upsert from Excel import
r.post('/bulk', async (req, res, next) => {
  try {
    const list = Array.isArray(req.body?.shipments) ? req.body.shipments : null;
    if (!list) return res.status(400).json({ error: 'shipments array required' });
    if (list.length > 5000)
      return res.status(413).json({ error: 'Too many rows (max 5000 per upload).' });

    let created = 0;
    let updated = 0;
    let failed = 0;
    const errors = [];

    for (const s of list) {
      const awb = String(s?.awb ?? '').trim();
      if (!awb) {
        failed++;
        errors.push('A row is missing an AWB / tracking number.');
        continue;
      }
      try {
        const cols = COLUMNS.filter((c) => s[c] !== undefined && s[c] !== null);
        if (!cols.includes('awb')) cols.unshift('awb');
        const vals = cols.map((c) => norm(c === 'awb' ? awb : s[c]));
        const ph = cols.map((_, i) => `$${i + 1}`);
        const setCols = cols.filter((c) => c !== 'awb');
        const setClause = setCols
          .map((c) => `${c} = EXCLUDED.${c}`)
          .concat('updated_at = now()')
          .join(', ');
        const { rows } = await pool.query(
          `INSERT INTO shipments (${cols.join(',')}) VALUES (${ph})
           ON CONFLICT (awb) DO UPDATE SET ${setClause}
           RETURNING (xmax = 0) AS inserted`,
          vals
        );
        rows[0].inserted ? created++ : updated++;
      } catch (e) {
        failed++;
        errors.push(`${awb}: ${e.message}`);
      }
    }

    res.json({ total: list.length, created, updated, failed, errors: errors.slice(0, 25) });
  } catch (e) {
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
