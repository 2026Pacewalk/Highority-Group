// One-off: set the single admin account's email + password.
//
// Usage (from the server/ directory):
//   node scripts/set-admin.js "email@example.com" "NewPassword"
//
// Falls back to ADMIN_USERNAME / ADMIN_PASSWORD from .env if args omitted.

import 'dotenv/config';
import { pool } from '../src/db.js';
import { hashPassword } from '../src/auth/hash.js';

const username = (process.argv[2] || process.env.ADMIN_USERNAME || '').trim();
const password = process.argv[3] || process.env.ADMIN_PASSWORD || '';

if (!username || !password) {
  console.error('Provide a username and password (args or .env).');
  process.exit(1);
}

const hash = await hashPassword(password);
await pool.query('DELETE FROM admin_users');
await pool.query(
  'INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)',
  [username, hash]
);
console.log(`✔ Admin login updated. You can now sign in as: ${username}`);
process.exit(0);
