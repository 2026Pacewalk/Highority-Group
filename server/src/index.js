import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import { hasDb } from './db.js';
import { initDb } from './initDb.js';

import authRoutes from './routes/auth.js';
import offices from './routes/offices.js';
import certifications from './routes/certifications.js';
import companies from './routes/companies.js';
import services from './routes/services.js';
import partners from './routes/partners.js';
import siteContent from './routes/siteContent.js';
import leads from './routes/leads.js';
import shipments from './routes/shipments.js';
import uploads from './routes/uploads.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json({ limit: '1mb' }));
// CORS only matters in local dev (vite proxy makes prod same-origin).
if (process.env.NODE_ENV !== 'production') app.use(cors());

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, db: hasDb, time: new Date().toISOString() })
);

// DB-backed API. Mounted only when a database is configured so the
// static site can still be served (Step 1 parity) before DB exists.
if (hasDb) {
  app.use('/api/auth', authRoutes);
  app.use('/api/offices', offices);
  app.use('/api/certifications', certifications);
  app.use('/api/companies', companies);
  app.use('/api/services', services);
  app.use('/api/partners', partners);
  app.use('/api/site-content', siteContent);
  app.use('/api/leads', leads);
  app.use('/api/shipments', shipments);
  app.use('/api/uploads', uploads);
}

// User-uploaded images (persistent volume in production).
app.use('/uploads', express.static(process.env.UPLOAD_DIR || './uploads'));

// API JSON error handler.
app.use('/api', (err, _req, res, _next) => {
  console.error('[api error]', err);
  res.status(500).json({ error: 'server error' });
});

// ---- Static SPA + client-side routing fallback ----
const dist = path.join(__dirname, '../public');
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

const PORT = process.env.PORT || 4000;

initDb()
  .catch((e) => console.error('[db] init failed — serving with fallback:', e))
  .finally(() => {
    app.listen(PORT, () => console.log(`[server] listening on ${PORT}`));
  });
