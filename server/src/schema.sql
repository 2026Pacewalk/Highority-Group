-- Idempotent schema. Safe to run on every boot.

CREATE TABLE IF NOT EXISTS admin_users (
  id            SERIAL PRIMARY KEY,
  username      TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS offices (
  id          TEXT PRIMARY KEY,
  type        TEXT NOT NULL,
  name        TEXT NOT NULL,
  address     TEXT NOT NULL,
  city        TEXT NOT NULL,
  phones      JSONB NOT NULL DEFAULT '[]',
  emails      JSONB NOT NULL DEFAULT '[]',
  map_query   TEXT,
  city_image  TEXT,
  icon        TEXT NOT NULL DEFAULT 'MapPin',
  sort_order  INTEGER NOT NULL DEFAULT 0,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS certifications (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  subtitle    TEXT,
  issuer      TEXT,
  description TEXT,
  image       TEXT,
  icon        TEXT NOT NULL DEFAULT 'Award',
  sort_order  INTEGER NOT NULL DEFAULT 0,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS companies (
  id          TEXT PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  tagline     TEXT,
  location    TEXT,
  description TEXT,
  banner      TEXT,
  services    JSONB NOT NULL DEFAULT '[]',
  industries  JSONB NOT NULL DEFAULT '[]',
  markets     JSONB NOT NULL DEFAULT '[]',
  icon        TEXT NOT NULL DEFAULT 'Building2',
  color       TEXT,
  email       TEXT,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  slug          TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  subtitle      TEXT,
  image         TEXT,
  intro         TEXT,
  benefits      JSONB NOT NULL DEFAULT '[]',
  process       JSONB NOT NULL DEFAULT '[]',
  industries    JSONB NOT NULL DEFAULT '[]',
  faqs          JSONB NOT NULL DEFAULT '[]',
  related_slugs JSONB NOT NULL DEFAULT '[]',
  sort_order    INTEGER NOT NULL DEFAULT 0,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS partners (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  logo       TEXT NOT NULL,
  alt        TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS site_content (
  key        TEXT PRIMARY KEY,
  value      JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS leads (
  id         SERIAL PRIMARY KEY,
  type       TEXT NOT NULL CHECK (type IN ('quote', 'contact')),
  source     TEXT,
  payload    JSONB NOT NULL,
  is_read    BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS leads_created_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_unread_idx ON leads (is_read) WHERE is_read = false;
