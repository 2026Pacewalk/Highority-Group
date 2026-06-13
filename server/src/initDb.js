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
  return true;
}
