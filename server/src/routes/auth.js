import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import { verifyPassword } from '../auth/hash.js';

const r = Router();

r.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password)
      return res.status(400).json({ error: 'username and password required' });

    const { rows } = await pool.query(
      'SELECT * FROM admin_users WHERE username = $1',
      [username]
    );
    const user = rows[0];
    if (!user || !(await verifyPassword(password, user.password_hash)))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ uid: user.id, username }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.json({ token, username });
  } catch (e) {
    next(e);
  }
});

export default r;
