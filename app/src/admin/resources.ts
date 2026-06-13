// Configuration that drives the generic admin list + form screens.

export type FieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'color'
  | 'icon'
  | 'image'
  | 'stringList'
  | 'repeater';

export interface SubField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'icon';
}

export interface Field {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  subFields?: SubField[]; // for repeater
}

export interface ResourceConfig {
  key: string;
  path: string; // API path, e.g. '/offices'
  label: string; // plural label
  singular: string;
  idField: string;
  autoId?: boolean; // true when DB assigns the id (serial)
  titleField: string; // shown as the row title
  subtitleField?: string;
  fields: Field[];
}

export const resources: Record<string, ResourceConfig> = {
  offices: {
    key: 'offices',
    path: '/offices',
    label: 'Offices',
    singular: 'Office',
    idField: 'id',
    titleField: 'name',
    subtitleField: 'city',
    fields: [
      { key: 'id', label: 'ID / slug', type: 'text', required: true, help: 'Lowercase, no spaces (e.g. "chandigarh"). Cannot change later.' },
      { key: 'type', label: 'Type', type: 'text', required: true, help: 'e.g. Corporate Office, Branch Office' },
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'city', label: 'City', type: 'text', required: true },
      { key: 'address', label: 'Address', type: 'textarea', required: true },
      { key: 'phones', label: 'Phone numbers', type: 'stringList' },
      { key: 'emails', label: 'Emails', type: 'stringList' },
      { key: 'map_query', label: 'Google Maps query', type: 'text', help: 'e.g. Chandigarh+Citi+Center+Zirakpur' },
      { key: 'city_image', label: 'City image', type: 'image' },
      { key: 'icon', label: 'Icon', type: 'icon' },
      { key: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },
  certifications: {
    key: 'certifications',
    path: '/certifications',
    label: 'Certifications',
    singular: 'Certification',
    idField: 'id',
    titleField: 'title',
    subtitleField: 'issuer',
    fields: [
      { key: 'id', label: 'ID / slug', type: 'text', required: true, help: 'Lowercase, no spaces (e.g. "iso-9001").' },
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'issuer', label: 'Issuer', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'image', label: 'Certificate image', type: 'image' },
      { key: 'icon', label: 'Icon', type: 'icon' },
      { key: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },
  companies: {
    key: 'companies',
    path: '/companies',
    label: 'Companies',
    singular: 'Company',
    idField: 'id',
    titleField: 'name',
    subtitleField: 'location',
    fields: [
      { key: 'id', label: 'ID / slug', type: 'text', required: true, help: 'Lowercase, no spaces (e.g. "tk-transport").' },
      { key: 'slug', label: 'URL slug', type: 'text', required: true, help: 'Used in the page URL, e.g. "tk-transport-services-india".' },
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'tagline', label: 'Tagline', type: 'text' },
      { key: 'location', label: 'Location', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'banner', label: 'Banner image', type: 'image' },
      { key: 'services', label: 'Services', type: 'stringList' },
      { key: 'industries', label: 'Industries', type: 'stringList' },
      { key: 'markets', label: 'Markets', type: 'stringList' },
      { key: 'email', label: 'Contact email', type: 'text' },
      { key: 'icon', label: 'Icon', type: 'icon' },
      { key: 'color', label: 'Gradient classes', type: 'color', help: 'Tailwind gradient, e.g. "from-[#00D4FF] to-[#00A8CC]".' },
      { key: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },
  services: {
    key: 'services',
    path: '/services',
    label: 'Services',
    singular: 'Service',
    idField: 'slug',
    titleField: 'title',
    subtitleField: 'subtitle',
    fields: [
      { key: 'slug', label: 'Slug', type: 'text', required: true, help: 'URL slug, e.g. "air-freight". Cannot change later.' },
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'image', label: 'Hero image', type: 'image' },
      { key: 'intro', label: 'Intro', type: 'textarea' },
      {
        key: 'benefits',
        label: 'Benefits',
        type: 'repeater',
        subFields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
          { key: 'icon', label: 'Icon', type: 'icon' },
        ],
      },
      {
        key: 'process',
        label: 'Process steps',
        type: 'repeater',
        subFields: [
          { key: 'step', label: 'Step #', type: 'text' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ],
      },
      { key: 'industries', label: 'Industries', type: 'stringList' },
      {
        key: 'faqs',
        label: 'FAQs',
        type: 'repeater',
        subFields: [
          { key: 'q', label: 'Question', type: 'text' },
          { key: 'a', label: 'Answer', type: 'textarea' },
        ],
      },
      { key: 'related_slugs', label: 'Related service slugs', type: 'stringList' },
      { key: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },
  partners: {
    key: 'partners',
    path: '/partners',
    label: 'Partners',
    singular: 'Partner',
    idField: 'id',
    autoId: true,
    titleField: 'name',
    fields: [
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'logo', label: 'Logo', type: 'image', required: true },
      { key: 'alt', label: 'Alt text', type: 'text' },
      { key: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },
};

export const resourceList = Object.values(resources);
