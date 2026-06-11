import {
  FileCheck, Leaf, Building2, ShieldCheck, Award,
  Plane, Factory, Utensils, BookmarkCheck, Receipt
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  {
    id: 'iec',
    title: 'Importer Exporter Code Certificate',
    subtitle: 'IEC Registration',
    issuer: 'DGFT, Ministry of Commerce, Government of India',
    description: 'Registered Importer Exporter Code (IEC AAFCH3999D) enabling seamless import and export operations from India.',
    image: '/assets/cert-iec.jpg?v=2',
    icon: FileCheck,
  },
  {
    id: 'spices-board',
    title: 'Spices Board Registration Certificate',
    subtitle: 'Exporter of Spices',
    issuer: 'Spices Board of India',
    description: 'Authorized for the export of Indian spices, herbs, and spice products to global markets.',
    image: '/assets/cert-spices.jpg?v=2',
    icon: Leaf,
  },
  {
    id: 'dubai-chamber',
    title: 'Dubai Chamber Membership Certificate',
    subtitle: 'Corporate Membership',
    issuer: 'Dubai Chamber of Commerce',
    description: 'Highority Impex Trading LLC is a registered member authorized for trade across UAE and Middle East.',
    image: '/assets/cert-dubai.jpg?v=2',
    icon: Building2,
  },
  {
    id: 'aeo-t1',
    title: 'AEO T1 MSME Certificate',
    subtitle: 'Authorized Economic Operator',
    issuer: 'Indian Customs, CBIC',
    description: 'Tier 1 AEO certification for Importer & Exporter categories with priority customs clearance.',
    image: '/assets/cert-aeo.jpg?v=2',
    icon: ShieldCheck,
  },
  {
    id: 'trademark',
    title: 'Trademark Certificate',
    subtitle: 'Registered Trademark',
    issuer: 'Trade Marks Registry, Government of India',
    description: 'Registered trademark under Section 23(2) & Rule 56(1) protecting the Highority brand identity.',
    image: '/assets/cert-trademark.jpg?v=2',
    icon: BookmarkCheck,
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Certificate',
    subtitle: 'Quality Management System',
    issuer: 'International Standards Organization',
    description: 'Certified Quality Management System demonstrating commitment to consistent quality in logistics.',
    image: '/assets/cert-iso.jpg?v=2',
    icon: Award,
  },
  {
    id: 'iata',
    title: 'IATA Accreditation Certificate',
    subtitle: 'Air Transport Association',
    issuer: 'International Air Transport Association',
    description: 'Accredited for cargo agency operations enabling direct partnerships with airlines for air freight.',
    image: '/assets/cert-iata.jpg?v=2',
    icon: Plane,
  },
  {
    id: 'udyam',
    title: 'Udyam Registration Certificate',
    subtitle: 'MSME Registration',
    issuer: 'Ministry of MSME, Government of India',
    description: 'Registered Micro, Small and Medium Enterprise recognized by the Ministry of MSME.',
    image: '/assets/cert-udyam.jpg?v=2',
    icon: Factory,
  },
  {
    id: 'gst',
    title: 'GST Registration Certificate',
    subtitle: 'Goods & Services Tax',
    issuer: 'Goods and Services Tax Network, Government of India',
    description: 'Registered GST taxpayer (03AAFCH3999D1ZK) for Highority India Private Limited under regular registration.',
    image: '/assets/cert-gst.jpg?v=1',
    icon: Receipt,
  },
  {
    id: 'fssai',
    title: 'FSSAI License Certificate',
    subtitle: 'Food Safety License',
    issuer: 'Food Safety and Standards Authority of India',
    description: 'Licensed for handling, storage, and transportation of food products and perishable cargo.',
    image: '/assets/cert-fssai.jpg?v=2',
    icon: Utensils,
  },
];
