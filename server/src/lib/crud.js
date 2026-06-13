import { Router } from 'express';
import { pool } from '../db.js';
import { requireAuth } from '../auth/middleware.js';

// Postgres `pg` sends JS arrays/objects oddly for jsonb; stringify them.
const normalize = (v) =>
  v !== null && typeof v === 'object' ? JSON.stringify(v) : v;

/**
 * Builds a router with public reads and protected writes for one table.
 * cfg = { table, idCol, columns:[...writable...], orderBy }
 */
export function crudRouter(cfg) {
  const { table, idCol, columns, orderBy = 'sort_order ASC' } = cfg;
  const r = Router();

  // ---- public reads ----
  r.get('/', async (_req, res, next) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM ${table} ORDER BY ${orderBy}`
      );
      res.json(rows);
    } catch (e) {
      next(e);
    }
  });

  r.get('/:id', async (req, res, next) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM ${table} WHERE ${idCol} = $1`,
        [req.params.id]
      );
      rows[0] ? res.json(rows[0]) : res.sendStatus(404);
    } catch (e) {
      next(e);
    }
  });

  // ---- protected writes ----
  r.post('/', requireAuth, async (req, res, next) => {
    try {
      const cols = columns.filter((c) => req.body[c] !== undefined);
      if (!cols.length) return res.status(400).json({ error: 'no fields' });
      const vals = cols.map((c) => normalize(req.body[c]));
      const ph = cols.map((_, i) => `$${i + 1}`);
      const { rows } = await pool.query(
        `INSERT INTO ${table} (${cols.join(',')}) VALUES (${ph}) RETURNING *`,
        vals
      );
      res.status(201).json(rows[0]);
    } catch (e) {
      next(e);
    }
  });

  r.put('/:id', requireAuth, async (req, res, next) => {
    try {
      const cols = columns.filter((c) => req.body[c] !== undefined);
      if (!cols.length) return res.status(400).json({ error: 'no fields' });
      const set = cols.map((c, i) => `${c} = $${i + 1}`).join(', ');
      const vals = cols.map((c) => normalize(req.body[c]));
      vals.push(req.params.id);
      const { rows } = await pool.query(
        `UPDATE ${table} SET ${set}, updated_at = now() WHERE ${idCol} = $${vals.length} RETURNING *`,
        vals
      );
      rows[0] ? res.json(rows[0]) : res.sendStatus(404);
    } catch (e) {
      next(e);
    }
  });

  r.delete('/:id', requireAuth, async (req, res, next) => {
    try {
      await pool.query(`DELETE FROM ${table} WHERE ${idCol} = $1`, [
        req.params.id,
      ]);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  });

  return r;
}
