import { Router } from 'express';
import { pool } from '../db.js';
import { requireAuth } from '../auth/middleware.js';

const r = Router();

// ---- public: submit a lead (quote or contact form) ----
r.post('/', async (req, res, next) => {
  try {
    const { type, source, payload, website } = req.body || {};

    // Honeypot: bots fill hidden "website" field; silently accept & drop.
    if (website) return res.status(201).json({ ok: true });

    if (!['quote', 'contact'].includes(type))
      return res.status(400).json({ error: 'invalid type' });
    if (!payload || typeof payload !== 'object')
      return res.status(400).json({ error: 'payload required' });

    // Basic size cap to limit abuse.
    if (JSON.stringify(payload).length > 8000)
      return res.status(413).json({ error: 'payload too large' });

    const { rows } = await pool.query(
      `INSERT INTO leads (type, source, payload) VALUES ($1, $2, $3) RETURNING id, created_at`,
      [type, source || null, JSON.stringify(payload)]
    );
    res.status(201).json({ ok: true, id: rows[0].id });
  } catch (e) {
    next(e);
  }
});

// ---- protected: manage leads ----
r.get('/', requireAuth, async (req, res, next) => {
  try {
    const { type } = req.query;
    const params = [];
    let where = '';
    if (type === 'quote' || type === 'contact') {
      params.push(type);
      where = 'WHERE type = $1';
    }
    const { rows } = await pool.query(
      `SELECT * FROM leads ${where} ORDER BY created_at DESC`,
      params
    );
    const { rows: counts } = await pool.query(
      `SELECT count(*)::int AS total,
              count(*) FILTER (WHERE is_read = false)::int AS unread
       FROM leads`
    );
    res.json({ leads: rows, ...counts[0] });
  } catch (e) {
    next(e);
  }
});

r.put('/:id', requireAuth, async (req, res, next) => {
  try {
    const { is_read } = req.body || {};
    const { rows } = await pool.query(
      'UPDATE leads SET is_read = $1 WHERE id = $2 RETURNING *',
      [Boolean(is_read), req.params.id]
    );
    rows[0] ? res.json(rows[0]) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
});

r.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    await pool.query('DELETE FROM leads WHERE id = $1', [req.params.id]);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

export default r;
