import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import { verifyPassword } from '../auth/hash.js';

const r = Router();

// ---- simple in-memory brute-force protection ----
// Blocks an IP after too many failed attempts within the window.
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_FAILS = 8;
const fails = new Map(); // ip -> { count, first }

const clientIp = (req) =>
  req.headers['cf-connecting-ip'] || req.ip || req.socket.remoteAddress || 'unknown';

function isBlocked(ip) {
  const rec = fails.get(ip);
  if (!rec) return false;
  if (Date.now() - rec.first > WINDOW_MS) {
    fails.delete(ip);
    return false;
  }
  return rec.count >= MAX_FAILS;
}

function recordFail(ip) {
  const rec = fails.get(ip);
  if (!rec || Date.now() - rec.first > WINDOW_MS) {
    fails.set(ip, { count: 1, first: Date.now() });
  } else {
    rec.count += 1;
  }
}

r.post('/login', async (req, res, next) => {
  const ip = clientIp(req);
  try {
    if (isBlocked(ip))
      return res
        .status(429)
        .json({ error: 'Too many attempts. Try again in a few minutes.' });

    const { username, password } = req.body || {};
    if (!username || !password)
      return res.status(400).json({ error: 'username and password required' });

    const { rows } = await pool.query(
      'SELECT * FROM admin_users WHERE lower(username) = lower($1)',
      [username]
    );
    const user = rows[0];
    if (!user || !(await verifyPassword(password, user.password_hash))) {
      recordFail(ip);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    fails.delete(ip); // reset on success
    const token = jwt.sign(
      { uid: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, username: user.username });
  } catch (e) {
    next(e);
  }
});

export default r;
