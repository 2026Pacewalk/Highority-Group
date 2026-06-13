// Content hooks: fetch live data from the API, falling back to the
// bundled snapshot if the API is unreachable. Icon-name strings from the
// API are resolved to lucide components here, so existing render code that
// does <item.icon /> keeps working unchanged.

import { useMemo } from 'react';
import { useResource } from '@/hooks/useResource';
import { getIcon } from '@/lib/iconMap';

import { offices as officesFallback } from '@/data/officesData';
import type { Office } from '@/data/officesData';
import { certifications as certsFallback } from '@/data/certificationsData';
import type { Certification } from '@/data/certificationsData';
import { companies as companiesFallback } from '@/data/ourCompaniesData';
import type { Company } from '@/data/ourCompaniesData';
import { servicesData } from '@/data/serviceData';
import type { ServiceData } from '@/data/serviceData';
import { partners as partnersFallback } from '@/data/partnersData';
import type { Partner } from '@/data/partnersData';

const servicesFallback = Object.values(servicesData);

const heroFallback = {
  eyebrow: 'Global Logistics Solutions',
  heading: 'Global Trade, Logistics & Supply Chain Solutions',
  subheading:
    'Import • Export • Trading • Transportation • Freight Forwarding Worldwide',
};

// ---- normalizers (handle both API snake_case and fallback camelCase) ----
const normOffice = (o: any): Office => ({
  id: o.id,
  type: o.type,
  name: o.name,
  address: o.address,
  city: o.city,
  phones: o.phones ?? [],
  emails: o.emails ?? [],
  mapQuery: o.mapQuery ?? o.map_query ?? '',
  cityImage: o.cityImage ?? o.city_image ?? '',
  icon: getIcon(o.icon),
});

const normCert = (c: any): Certification => ({
  id: c.id,
  title: c.title,
  subtitle: c.subtitle,
  issuer: c.issuer,
  description: c.description,
  image: c.image,
  icon: getIcon(c.icon),
});

const normCompany = (c: any): Company => ({
  id: c.id,
  name: c.name,
  tagline: c.tagline,
  location: c.location,
  description: c.description,
  banner: c.banner,
  slug: c.slug,
  services: c.services ?? [],
  industries: c.industries ?? [],
  markets: c.markets ?? [],
  icon: getIcon(c.icon),
  color: c.color,
  email: c.email ?? undefined,
});

const normService = (s: any): ServiceData => ({
  slug: s.slug,
  title: s.title,
  subtitle: s.subtitle,
  image: s.image,
  intro: s.intro,
  benefits: (s.benefits ?? []).map((b: any) => ({
    title: b.title,
    desc: b.desc,
    icon: getIcon(b.icon),
  })),
  process: s.process ?? [],
  industries: s.industries ?? [],
  faqs: s.faqs ?? [],
  relatedSlugs: s.relatedSlugs ?? s.related_slugs ?? [],
});

export function useOffices(): Office[] {
  const { data } = useResource<any[]>('/offices', officesFallback);
  return useMemo(() => data.map(normOffice), [data]);
}

export function useCertifications(): Certification[] {
  const { data } = useResource<any[]>('/certifications', certsFallback);
  return useMemo(() => data.map(normCert), [data]);
}

export function useCompanies(): Company[] {
  const { data } = useResource<any[]>('/companies', companiesFallback);
  return useMemo(() => data.map(normCompany), [data]);
}

export function useServices(): ServiceData[] {
  const { data } = useResource<any[]>('/services', servicesFallback);
  return useMemo(() => data.map(normService), [data]);
}

export function useService(slug: string): ServiceData | undefined {
  const all = useServices();
  return useMemo(() => all.find((s) => s.slug === slug), [all, slug]);
}

export function usePartners(): Partner[] {
  const { data } = useResource<Partner[]>('/partners', partnersFallback);
  return data;
}

export function useHero() {
  const { data } = useResource<typeof heroFallback>('/site-content/hero', heroFallback);
  return data;
}
