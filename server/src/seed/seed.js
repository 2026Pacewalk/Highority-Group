import { pool } from '../db.js';
import { hashPassword } from '../auth/hash.js';
import {
  hero,
  offices,
  certifications,
  companies,
  partners,
  services,
} from './seedData.js';

const J = (v) => JSON.stringify(v);

export async function seed() {
  // ---- admin user ----
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'admin';
  const hash = await hashPassword(password);
  await pool.query(
    `INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)
     ON CONFLICT (username) DO NOTHING`,
    [username, hash]
  );

  // ---- offices ----
  for (const [i, o] of offices.entries()) {
    await pool.query(
      `INSERT INTO offices (id, type, name, address, city, phones, emails, map_query, city_image, icon, sort_order)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT (id) DO NOTHING`,
      [o.id, o.type, o.name, o.address, o.city, J(o.phones), J(o.emails), o.mapQuery, o.cityImage, o.icon, i]
    );
  }

  // ---- certifications ----
  for (const [i, c] of certifications.entries()) {
    await pool.query(
      `INSERT INTO certifications (id, title, subtitle, issuer, description, image, icon, sort_order)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT (id) DO NOTHING`,
      [c.id, c.title, c.subtitle, c.issuer, c.description, c.image, c.icon, i]
    );
  }

  // ---- companies ----
  for (const [i, c] of companies.entries()) {
    await pool.query(
      `INSERT INTO companies (id, slug, name, tagline, location, description, banner, services, industries, markets, icon, color, email, sort_order)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) ON CONFLICT (id) DO NOTHING`,
      [c.id, c.slug, c.name, c.tagline, c.location, c.description, c.banner, J(c.services), J(c.industries), J(c.markets), c.icon, c.color, c.email, i]
    );
  }

  // ---- services ----
  for (const [i, s] of services.entries()) {
    await pool.query(
      `INSERT INTO services (slug, title, subtitle, image, intro, benefits, process, industries, faqs, related_slugs, sort_order)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT (slug) DO NOTHING`,
      [s.slug, s.title, s.subtitle, s.image, s.intro, J(s.benefits), J(s.process), J(s.industries), J(s.faqs), J(s.relatedSlugs), i]
    );
  }

  // ---- partners ----
  for (const [i, p] of partners.entries()) {
    await pool.query(
      `INSERT INTO partners (name, logo, alt, sort_order) VALUES ($1,$2,$3,$4)`,
      [p.name, p.logo, p.alt, i]
    );
  }

  // ---- site content (hero) ----
  await pool.query(
    `INSERT INTO site_content (key, value) VALUES ('hero', $1) ON CONFLICT (key) DO NOTHING`,
    [J(hero)]
  );
}
