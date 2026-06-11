import { Truck, Globe, TrendingUp, Shield, Package, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Company {
  id: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  banner: string;
  slug: string;
  services: string[];
  industries: string[];
  markets: string[];
  icon: LucideIcon;
  color: string;
}

export const companies: Company[] = [
  {
    id: 'tk-transport',
    name: 'TK Transport Services India',
    tagline: "Driving India's Logistics Network",
    location: 'India',
    description: 'TK Transport Services India is a leading logistics and transportation company specializing in Last Mile Delivery, Middle Mile Transportation, Warehousing, and Supply Chain Solutions. We work with e-commerce companies, retail businesses, manufacturers, and distributors to ensure fast, reliable, and cost-effective transportation services across India.',
    banner: '/assets/company-tk-transport.jpg',
    slug: 'tk-transport-services-india',
    services: [
      'Last Mile Delivery',
      'Middle Mile Transportation',
      'E-commerce Logistics',
      'Warehousing & Distribution',
      'Supply Chain Management',
      'Full Truck Load (FTL)',
      'Part Truck Load (PTL)',
      'Express Cargo Services',
    ],
    industries: [
      'E-commerce Companies',
      'Retail Chains',
      'FMCG Companies',
      'Manufacturing Units',
      'Distribution Networks',
    ],
    markets: ['India'],
    icon: Truck,
    color: 'from-[#00D4FF] to-[#00A8CC]',
  },
  {
    id: 'highority-impex',
    name: 'Highority Impex Trading LLC',
    tagline: 'Global Trading & Procurement Solutions',
    location: 'United Arab Emirates',
    description: 'Highority Impex Trading LLC is a UAE-based general trading company engaged in import, export, sourcing, and distribution of a wide range of products. The company connects manufacturers, suppliers, and buyers across international markets while ensuring quality products and competitive pricing.',
    banner: '/assets/company-highority-impex.jpg',
    slug: 'highority-impex-trading-llc',
    services: [
      'Import & Export',
      'International Trading',
      'Product Sourcing',
      'Procurement Services',
      'Distribution & Supply',
      'Global Business Partnerships',
    ],
    industries: [
      'Agro Products',
      'Food & Non-Food Products',
      'FMCG Products',
      'Snacks & Confectionery',
      'Household Products',
      'Personal Care Products',
      'General Trading Items',
      'Industrial & Commercial Supplies',
    ],
    markets: ['UAE', 'GCC Countries', 'Asia', 'Africa', 'Europe'],
    icon: Globe,
    color: 'from-[#00D4FF] to-[#0088AA]',
  },
  {
    id: 'highfive-global',
    name: 'HighFive Global Ltd.',
    tagline: 'Global Trade & Business Development',
    location: 'United Kingdom',
    description: 'HighFive Global Ltd. is a UK-based international trading company involved in local distribution, import-export operations, and global sourcing solutions. The company focuses on building strong trade relationships between the UK and international markets.',
    banner: '/assets/company-highfive-global.jpg',
    slug: 'highfive-global-ltd',
    services: [
      'Import & Export',
      'Local UK Distribution',
      'International Trade Solutions',
      'Product Sourcing',
      'Procurement & Supply Chain Support',
      'Business Development Services',
    ],
    industries: [
      'Agro Products',
      'Food & Beverage Products',
      'FMCG Products',
      'Household Goods',
      'Personal Care Products',
      'General Trading Products',
      'Commercial Supplies',
    ],
    markets: ['United Kingdom', 'Europe', 'Middle East', 'Asia', 'Africa'],
    icon: TrendingUp,
    color: 'from-[#00A8CC] to-[#0066AA]',
  },
];

export const groupStructure = {
  parent: 'Highority Group',
  children: [
    { name: 'Highority India Pvt Ltd', location: 'India', type: 'Headquarters' },
    { name: 'TK Transport Services India', location: 'India', type: 'Logistics' },
    { name: 'Highority Impex Trading LLC', location: 'UAE', type: 'Trading' },
    { name: 'HighFive Global Ltd.', location: 'UK', type: 'Trading' },
  ],
};

export const whyChooseUs = [
  { title: 'Multi-National Presence', desc: 'Direct operations across India, UAE, and UK with a global partner network.', icon: Globe },
  { title: 'End-to-End Solutions', desc: 'From logistics and warehousing to international trading and distribution.', icon: Package },
  { title: 'Industry Expertise', desc: 'Decades of combined experience in freight, trade, and supply chain management.', icon: Shield },
  { title: 'Certified & Compliant', desc: 'ISO 9001, AEO, IATA, FSSAI, and DGFT certified operations.', icon: ClipboardCheck },
];
