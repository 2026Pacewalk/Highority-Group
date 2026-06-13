import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

// Local Postgres needs no SSL; hosted (Railway public proxy) does. The
// Railway *internal* host (*.railway.internal) also works without SSL.
const isLocal =
  !connectionString ||
  /@(localhost|127\.0\.0\.1|.*\.railway\.internal)/.test(connectionString);

export const pool = connectionString
  ? new Pool({
      connectionString,
      ssl: isLocal ? false : { rejectUnauthorized: false },
    })
  : null;

export const hasDb = Boolean(pool);
