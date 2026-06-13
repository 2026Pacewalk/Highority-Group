import { Router } from 'express';
import { pool } from '../db.js';
import { requireAuth } from '../auth/middleware.js';

const r = Router();

// Public: read a single content block by key (e.g. /api/site-content/hero)
r.get('/:key', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT value FROM site_content WHERE key = $1',
      [req.params.key]
    );
    rows[0] ? res.json(rows[0].value) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
});

// Protected: upsert a content block
r.put('/:key', requireAuth, async (req, res, next) => {
  try {
    const value = JSON.stringify(req.body);
    const { rows } = await pool.query(
      `INSERT INTO site_content (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = now()
       RETURNING value`,
      [req.params.key, value]
    );
    res.json(rows[0].value);
  } catch (e) {
    next(e);
  }
});

export default r;
