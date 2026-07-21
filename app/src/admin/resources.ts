// Configuration that drives the generic admin list + form screens.

export type FieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'date'
  | 'time'
  | 'select'
  | 'color'
  | 'icon'
  | 'image'
  | 'stringList'
  | 'repeater';

export interface SubField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'icon' | 'select' | 'date' | 'time';
  options?: string[];
}

export interface Field {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  options?: string[]; // for select
  subFields?: SubField[]; // for repeater
  section?: string; // optional group heading shown above the field
}

export const SHIPMENT_STATUSES = [
  'Shipment Booked',
  'Picked Up',
  'Arrived at Origin Hub',
  'Departed from Origin Hub',
  'In Transit',
  'Arrived at Destination Hub',
  'Out for Delivery',
  'Delivered',
  'Hold',
  'Returned',
  'Cancelled',
];

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
  searchable?: boolean; // show a search box (filters title + id client-side)
  filterField?: { key: string; label: string; options: string[] };
  bulkImport?: boolean; // show the Excel bulk-import button
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
  shipments: {
    key: 'shipments',
    path: '/shipments',
    label: 'Shipments',
    singular: 'Shipment',
    idField: 'awb',
    titleField: 'awb',
    subtitleField: 'current_status',
    searchable: true,
    bulkImport: true,
    filterField: { key: 'current_status', label: 'Status', options: SHIPMENT_STATUSES },
    fields: [
      { key: 'awb', label: 'AWB / Tracking Number', type: 'text', required: true, section: 'Basic Details', help: 'Unique. Cannot change later.' },
      { key: 'service_type', label: 'Service Type', type: 'select', options: ['Air Freight', 'Sea Freight', 'Door to Door', 'By Road / Line Haul', 'By Train', 'Domestic Priority', 'Import Express', 'International'] },
      { key: 'origin', label: 'Origin', type: 'text' },
      { key: 'destination', label: 'Destination', type: 'text' },
      { key: 'booking_date', label: 'Booking Date', type: 'date' },
      { key: 'expected_delivery_date', label: 'Expected Delivery Date', type: 'date' },
      { key: 'current_status', label: 'Current Status', type: 'select', options: SHIPMENT_STATUSES, required: true },

      { key: 'consignor_name', label: 'Consignor Name', type: 'text', section: 'Consignor (Sender)' },
      { key: 'consignor_mobile', label: 'Consignor Mobile', type: 'text' },
      { key: 'consignor_address', label: 'Consignor Address', type: 'textarea' },

      { key: 'consignee_name', label: 'Consignee Name', type: 'text', section: 'Consignee (Receiver)' },
      { key: 'consignee_mobile', label: 'Consignee Mobile', type: 'text' },
      { key: 'consignee_address', label: 'Consignee Address', type: 'textarea' },

      { key: 'cargo_type', label: 'Cargo Type', type: 'text', section: 'Cargo Details' },
      { key: 'package_type', label: 'Package Type', type: 'text' },
      { key: 'pieces', label: 'Number of Pieces', type: 'text' },
      { key: 'weight', label: 'Weight', type: 'text' },
      { key: 'dimensions', label: 'Dimensions', type: 'text' },
      { key: 'invoice_number', label: 'Invoice Number', type: 'text' },
      { key: 'remarks', label: 'Remarks', type: 'textarea' },

      {
        key: 'updates',
        label: 'Tracking Timeline Updates',
        type: 'repeater',
        section: 'Tracking Timeline',
        subFields: [
          { key: 'status', label: 'Status', type: 'select', options: SHIPMENT_STATUSES },
          { key: 'location', label: 'Location', type: 'text' },
          { key: 'date', label: 'Date', type: 'date' },
          { key: 'time', label: 'Time', type: 'time' },
          { key: 'remarks', label: 'Remarks', type: 'textarea' },
        ],
      },

      { key: 'receiver_name', label: 'Receiver Name', type: 'text', section: 'Delivery Details' },
      { key: 'delivery_date', label: 'Delivery Date', type: 'date' },
      { key: 'delivery_time', label: 'Delivery Time', type: 'time' },
      { key: 'pod_remarks', label: 'Proof of Delivery Remarks', type: 'textarea' },
      { key: 'pod_image', label: 'Proof of Delivery Image', type: 'image' },
    ],
  },
};

export const resourceList = Object.values(resources);
