import { Plane, Ship, Truck, ClipboardCheck, Package, Globe, TrendingUp, Shield, Zap, TrainFront, Warehouse } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  benefits: { title: string; desc: string; icon: LucideIcon }[];
  process: { step: string; title: string; desc: string }[];
  industries: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const sharedWhyUs = [
  { title: 'Expert Handling', desc: 'Our certified team ensures your cargo is managed with precision and care throughout the journey.', icon: Shield },
  { title: 'Global Network', desc: 'Access to 50+ countries through our direct offices and trusted partner network.', icon: Globe },
  { title: 'Real-Time Tracking', desc: 'Monitor your shipment 24/7 with our advanced digital tracking platform.', icon: TrendingUp },
  { title: '24/7 Support', desc: 'Our dedicated team is available round-the-clock to assist you at every step.', icon: Shield },
];

export const servicesData: Record<string, ServiceData> = {
  'air-freight': {
    slug: 'air-freight',
    title: 'Air Freight',
    subtitle: 'Fast, Reliable & Time-Critical Cargo Delivery Worldwide',
    image: '/assets/service-air-freight.jpg',
    intro: 'When speed is paramount, our air freight services deliver. We partner with leading airlines to provide express, standard, and charter cargo solutions across the globe. From urgent documents to large equipment, we ensure your cargo reaches its destination safely and on time.',
    benefits: [
      { title: 'Express Delivery', desc: 'Same-day and next-day options for time-critical shipments.', icon: Plane },
      { title: 'Global Coverage', desc: 'Access to 500+ airports across 50+ countries worldwide.', icon: Globe },
      { title: 'Multi-Weight Options', desc: 'From small parcels to full charter aircraft capacity.', icon: Package },
      { title: 'Secure Handling', desc: 'GPS-tracked cargo with tamper-proof sealing.', icon: Shield },
    ],
    process: [
      { step: '01', title: 'Booking & Pickup', desc: 'Schedule your shipment and we collect from your location.' },
      { step: '02', title: 'Documentation', desc: 'We handle all air waybills, customs docs, and compliance.' },
      { step: '03', title: 'Air Transport', desc: 'Cargo loaded onto partner airline for fastest route.' },
      { step: '04', title: 'Delivery', desc: 'Door-to-door delivery at destination with real-time tracking.' },
    ],
    industries: ['Electronics', 'Automotive', 'E-commerce', 'Fashion', 'Aerospace', 'Manufacturing'],
    faqs: [
      { q: 'How fast is air freight delivery?', a: 'Depending on the destination, our express air freight delivers within 1-3 days, while standard air freight takes 3-7 days globally.' },
      { q: 'What is the maximum weight for air freight?', a: 'We handle shipments from 1kg to 100+ tons. For large cargo, our charter services provide dedicated aircraft solutions.' },
      { q: 'Do you provide door-to-door air freight?', a: 'Yes, we offer complete door-to-door air freight service including pickup, documentation, customs clearance, and final delivery.' },
    ],
    relatedSlugs: ['sea-freight', 'door-to-door-delivery', 'import-express'],
  },
  'sea-freight': {
    slug: 'sea-freight',
    title: 'Sea Freight',
    subtitle: 'Cost-Effective Ocean Shipping for Global Trade',
    image: '/assets/service-sea-freight.jpg',
    intro: 'Our comprehensive sea freight solutions offer the most economical way to move large volumes across continents. Whether you need Full Container Load (FCL) or Less than Container Load (LCL), we provide reliable scheduling, competitive rates, and end-to-end management of your ocean cargo.',
    benefits: [
      { title: 'FCL & LCL Options', desc: 'Full container or shared space – flexibility for any volume.', icon: Ship },
      { title: 'Global Routes', desc: 'Major trade lanes covering Asia, Europe, Americas, and Africa.', icon: Globe },
      { title: 'Project Cargo', desc: 'Specialized handling for large-scale and heavy shipments.', icon: Package },
      { title: 'Break Bulk', desc: 'Non-containerized cargo handling for specialized loads.', icon: Ship },
    ],
    process: [
      { step: '01', title: 'Quote & Booking', desc: 'Receive a customized quote and confirm your shipment.' },
      { step: '02', title: 'Container Loading', desc: 'Cargo loaded at port with proper securing and documentation.' },
      { step: '03', title: 'Ocean Transit', desc: 'Vessel sails on scheduled route with GPS tracking.' },
      { step: '04', title: 'Port Clearance & Delivery', desc: 'Customs clearance and transport to final destination.' },
    ],
    industries: ['Automotive', 'FMCG', 'Industrial Equipment', 'Retail', 'Construction', 'Agriculture'],
    faqs: [
      { q: 'How long does sea freight take?', a: 'Transit times range from 15-45 days depending on origin, destination, and route. We provide accurate ETAs at booking.' },
      { q: 'What is the difference between FCL and LCL?', a: 'FCL (Full Container Load) gives you exclusive use of a container. LCL (Less than Container Load) shares container space with other shippers, ideal for smaller volumes.' },
      { q: 'Do you handle customs at ports?', a: 'Yes, our CHA team manages customs clearance at both origin and destination ports as part of our end-to-end service.' },
    ],
    relatedSlugs: ['air-freight', 'door-to-door-delivery', 'cha-services'],
  },
  'door-to-door-delivery': {
    slug: 'door-to-door-delivery',
    title: 'Door to Door Delivery',
    subtitle: 'Complete Logistics From Pickup to Final Destination',
    image: '/assets/service-door-to-door.jpg',
    intro: 'Our door-to-door delivery service takes the complexity out of logistics. We manage every step – from collecting goods at your premises to delivering them at the recipient\'s doorstep. With single-point accountability, real-time tracking, and hassle-free documentation, your cargo is in safe hands.',
    benefits: [
      { title: 'Single Point Contact', desc: 'One team handles everything from pickup to delivery.', icon: Truck },
      { title: 'Real-Time Tracking', desc: 'Know exactly where your shipment is at every stage.', icon: TrendingUp },
      { title: 'Hassle-Free Docs', desc: 'We manage all paperwork, permits, and customs forms.', icon: ClipboardCheck },
      { title: 'Flexible Modes', desc: 'Air, sea, or land – we choose the best route for you.', icon: Globe },
    ],
    process: [
      { step: '01', title: 'Pickup', desc: 'We collect your cargo from the specified location.' },
      { step: '02', title: 'Packaging & Docs', desc: 'Professional packing and documentation preparation.' },
      { step: '03', title: 'Transport & Customs', desc: 'Multi-modal transport with customs clearance handled.' },
      { step: '04', title: 'Final Delivery', desc: 'Delivered to the recipient\'s doorstep with confirmation.' },
    ],
    industries: ['E-commerce', 'Retail', 'Manufacturing', 'Personal Effects', 'Corporate Relocation', 'FMCG'],
    faqs: [
      { q: 'What does door-to-door service include?', a: 'It includes pickup from origin, packaging, documentation, customs clearance, international transport, and final delivery to the recipient.' },
      { q: 'Can I track my door-to-door shipment?', a: 'Yes, we provide full real-time tracking from pickup to final delivery through our digital platform.' },
      { q: 'Is insurance included?', a: 'Comprehensive cargo insurance is available and recommended for all door-to-door shipments.' },
    ],
    relatedSlugs: ['air-freight', 'sea-freight', 'by-road-line-haul'],
  },
  'cha-services': {
    slug: 'cha-services',
    title: 'Customs House Agent / CHA Services',
    subtitle: 'Expert Customs Clearance & Regulatory Compliance',
    image: '/assets/service-cha.jpg',
    intro: 'Navigating customs regulations can be complex and time-consuming. Our licensed Customs House Agents (CHA) simplify the entire process – from documentation and duty calculation to regulatory compliance and port clearance. With decades of experience, we ensure smooth, delay-free customs processing.',
    benefits: [
      { title: 'Documentation', desc: 'Complete import/export paperwork handled by experts.', icon: ClipboardCheck },
      { title: 'Duty Optimization', desc: 'Legal strategies to minimize duties and tariffs.', icon: TrendingUp },
      { title: 'HS Classification', desc: 'Accurate HS code assignment for your products.', icon: Shield },
      { title: 'Compliance Consulting', desc: 'Regulatory advice for smooth international trade.', icon: Globe },
    ],
    process: [
      { step: '01', title: 'Document Review', desc: 'Invoice, packing list, and permits verified.' },
      { step: '02', title: 'Customs Filing', desc: 'Shipping bill or bill of entry filed electronically.' },
      { step: '03', title: 'Examination', desc: 'Cargo inspection coordinated if required.' },
      { step: '04', title: 'Clearance', desc: 'Duty payment and customs release obtained.' },
    ],
    industries: ['Import/Export', 'Manufacturing', 'Retail', 'E-commerce', 'Automotive', 'Textile'],
    faqs: [
      { q: 'What documents are needed for customs clearance?', a: 'Typically invoice, packing list, bill of lading/airway bill, insurance certificate, and any required permits or certificates.' },
      { q: 'How long does customs clearance take?', a: 'With proper documentation, we achieve same-day or next-day clearance at major Indian ports.' },
      { q: 'Do you handle duty drawback claims?', a: 'Yes, we process duty drawback claims and export incentives as part of our CHA services.' },
    ],
    relatedSlugs: ['air-freight', 'sea-freight', 'import-express'],
  },
  'domestic-priority': {
    slug: 'domestic-priority',
    title: 'Domestic Priority',
    subtitle: 'Fast & Reliable Domestic Delivery Across India',
    image: '/assets/service-domestic-priority.jpg',
    intro: 'Our Domestic Priority service offers expedited delivery across every corner of India. Whether you need next-day delivery to metro cities or 2-3 day delivery to tier-2 and tier-3 locations, our priority network ensures your shipments move fast without compromising safety.',
    benefits: [
      { title: 'Next-Day Delivery', desc: 'Overnight delivery to all major Indian cities.', icon: Zap },
      { title: 'Pan-India Coverage', desc: 'Delivery to 19,000+ pin codes across India.', icon: Globe },
      { title: 'Real-Time Tracking', desc: 'Track every domestic shipment in real-time.', icon: TrendingUp },
      { title: 'COD Available', desc: 'Cash on delivery option for commercial shipments.', icon: Package },
    ],
    process: [
      { step: '01', title: 'Priority Pickup', desc: 'Same-day collection from your location.' },
      { step: '02', title: 'Express Transit', desc: 'Routed through priority lane network.' },
      { step: '03', title: 'Hub Processing', desc: 'Fast sorting and dispatch at regional hubs.' },
      { step: '04', title: 'Priority Delivery', desc: 'Next-day or 48-hour delivery with confirmation.' },
    ],
    industries: ['E-commerce', 'B2B', 'Healthcare', 'Banking', 'Legal', 'Manufacturing'],
    faqs: [
      { q: 'How fast is Domestic Priority delivery?', a: 'We offer next-day delivery to metros and major cities, and 48-72 hour delivery to tier-2 and tier-3 cities across India.' },
      { q: 'Do you deliver to remote areas?', a: 'Yes, we cover 19,000+ pin codes across India including remote and rural locations.' },
      { q: 'Is there a weight limit?', a: 'Domestic Priority accepts shipments from 500g up to 100kg. For heavier cargo, our By Road / Line Haul service is recommended.' },
    ],
    relatedSlugs: ['door-to-door-delivery', 'by-road-line-haul', 'by-train'],
  },
  'import-express': {
    slug: 'import-express',
    title: 'Import Express',
    subtitle: 'Fast-Track Import Solutions from Global Origins',
    image: '/assets/service-import-express.jpg',
    intro: 'Our Import Express service simplifies and accelerates the process of bringing goods into India. From supplier pickup anywhere in the world to fast-track customs clearance and final delivery, we manage the entire import chain.',
    benefits: [
      { title: 'Fast Clearance', desc: 'Express customs clearance with pre-filed documentation.', icon: Zap },
      { title: 'Global Pickup', desc: 'Collection from your supplier anywhere in the world.', icon: Globe },
      { title: 'Duty Guidance', desc: 'Expert advice on HS codes, duties, and tax optimization.', icon: ClipboardCheck },
      { title: 'Door Delivery', desc: 'Direct delivery to your warehouse or facility in India.', icon: Truck },
    ],
    process: [
      { step: '01', title: 'Supplier Coordination', desc: 'We contact your overseas supplier for pickup arrangement.' },
      { step: '02', title: 'International Transit', desc: 'Priority air or sea freight to India.' },
      { step: '03', title: 'Import Clearance', desc: 'Fast-track customs clearance with our CHA team.' },
      { step: '04', title: 'Final Delivery', desc: 'Delivered to your Indian address with full documentation.' },
    ],
    industries: ['Manufacturing', 'Retail', 'Automotive', 'Electronics', 'Textile', 'FMCG'],
    faqs: [
      { q: 'How fast can you clear imports?', a: 'With proper documentation, we achieve same-day or next-day customs clearance at all major Indian ports and airports.' },
      { q: 'Do I need an IEC for import express?', a: 'Yes, an Import Export Code (IEC) is mandatory for commercial imports into India. We can guide you through the IEC application process.' },
      { q: 'Can you handle supplier payments abroad?', a: 'We can coordinate with your bank for Letter of Credit (LC) and other payment arrangements with international suppliers.' },
    ],
    relatedSlugs: ['cha-services', 'air-freight', 'sea-freight'],
  },
  'international-marketing': {
    slug: 'international-marketing',
    title: 'International Marketing',
    subtitle: 'Expand Your Business Across Global Markets',
    image: '/assets/service-international-marketing.jpg',
    intro: 'Beyond logistics, we help businesses grow internationally. Our international marketing service connects you with global trade opportunities, market insights, and strategic partnerships. Whether you are exploring new export markets or seeking import suppliers, our team provides the intelligence and connections you need.',
    benefits: [
      { title: 'Market Research', desc: 'Insights into target markets and competition.', icon: TrendingUp },
      { title: 'Trade Connections', desc: 'Network of verified buyers and suppliers globally.', icon: Globe },
      { title: 'Growth Strategy', desc: 'Customized market entry and expansion plans.', icon: Shield },
      { title: 'Regulatory Guidance', desc: 'Navigate foreign trade regulations confidently.', icon: ClipboardCheck },
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'Understand your business goals and target markets.' },
      { step: '02', title: 'Research', desc: 'Market analysis and opportunity identification.' },
      { step: '03', title: 'Strategy', desc: 'Customized international growth plan created.' },
      { step: '04', title: 'Execution', desc: 'Ongoing support for market entry and expansion.' },
    ],
    industries: ['Export/Import Trading', 'Manufacturing', 'Agriculture', 'Textile', 'Consumer Goods', 'Technology'],
    faqs: [
      { q: 'How can you help my export business?', a: 'We connect you with verified international buyers, provide market intelligence, and handle the logistics – all under one roof.' },
      { q: 'Do you work with startups?', a: 'Yes, we help businesses of all sizes expand internationally with scalable solutions.' },
      { q: 'Which markets do you cover?', a: 'We have active trade networks across UAE, Singapore, Europe, Africa, USA, UK, and Southeast Asia.' },
    ],
    relatedSlugs: ['global-network', 'cha-services', 'air-freight'],
  },
  'global-network': {
    slug: 'global-network',
    title: 'Global Network',
    subtitle: '50+ Countries Connected, One Trusted Partner',
    image: '/assets/service-global-network.jpg',
    intro: 'With direct offices in India and UAE, and a trusted partner network spanning over 50 countries, Highority provides truly global logistics coverage. Our strategically located hubs and established relationships with local carriers ensure seamless cargo movement across continents.',
    benefits: [
      { title: 'Direct Offices', desc: 'Owned offices in India (Zirakpur, Ahmedabad, Delhi, Jaipur) and UAE (Dubai).', icon: Globe },
      { title: '50+ Countries', desc: 'Comprehensive coverage across six continents.', icon: Globe },
      { title: 'Local Expertise', desc: 'Partners with deep local market knowledge.', icon: Shield },
      { title: 'Unified Tracking', desc: 'Single platform to track across all destinations.', icon: TrendingUp },
    ],
    process: [
      { step: '01', title: 'Origin Handling', desc: 'Cargo collected and processed at origin office.' },
      { step: '02', title: 'International Transit', desc: 'Moved via optimal global route.' },
      { step: '03', title: 'Destination Clearance', desc: 'Customs and regulatory clearance at destination.' },
      { step: '04', title: 'Final Mile', desc: 'Local partner delivers to final destination.' },
    ],
    industries: ['All Industries', 'Global Trade', 'Multinational Corporations', 'SME Exporters', 'E-commerce', 'Project Cargo'],
    faqs: [
      { q: 'Which countries do you serve?', a: 'We serve 50+ countries including UAE, Singapore, USA, UK, Germany, Canada, Australia, Thailand, Kuwait, Hong Kong, Brazil, and more.' },
      { q: 'Do you have offices outside India?', a: 'Yes, we have a direct office in Dubai, UAE as Highority Impex Trading LLC, in addition to our Indian offices.' },
      { q: 'How do I track international shipments?', a: 'All shipments are tracked through our unified digital platform, regardless of destination country.' },
    ],
    relatedSlugs: ['air-freight', 'sea-freight', 'international-marketing'],
  },
  'by-road-line-haul': {
    slug: 'by-road-line-haul',
    title: 'By Road / Line Haul',
    subtitle: 'Intercity & Long-Distance Road Cargo Transportation',
    image: '/assets/service-by-road.jpg',
    intro: 'Our By Road / Line Haul service provides efficient intercity and long-distance cargo movement across India and beyond. With a modern fleet of container trucks, flatbeds, and specialized vehicles, we handle scheduled cargo delivery with precision. Ideal for manufacturers, distributors, and businesses that need reliable road logistics connecting major cities and industrial zones.',
    benefits: [
      { title: 'Pan-India Coverage', desc: 'Connected to all major cities and industrial corridors.', icon: Truck },
      { title: 'Scheduled Delivery', desc: 'Fixed routes with reliable pickup and delivery windows.', icon: Zap },
      { title: 'FTL & LTL Options', desc: 'Full truckload or part-load based on your cargo volume.', icon: Package },
      { title: 'GPS Tracking', desc: 'Real-time vehicle tracking on every route.', icon: TrendingUp },
    ],
    process: [
      { step: '01', title: 'Booking & Pickup', desc: 'Schedule your line haul and we collect from your facility.' },
      { step: '02', title: 'Loading & Securing', desc: 'Cargo safely loaded and secured for transit.' },
      { step: '03', title: 'Line Haul Transit', desc: 'Long-distance transport via optimized highway routes.' },
      { step: '04', title: 'On-Time Delivery', desc: 'Delivered to destination hub or final address.' },
    ],
    industries: ['Manufacturing', 'FMCG Distribution', 'Automotive', 'Retail', 'E-commerce', 'Construction'],
    faqs: [
      { q: 'What routes do you cover?', a: 'We cover all major highway corridors including Delhi-Mumbai, Mumbai-Chennai, Delhi-Kolkata, and pan-India connectivity.' },
      { q: 'How long does line haul delivery take?', a: 'Metro to metro: 1-3 days. Longer routes: 3-5 days depending on distance and route conditions.' },
      { q: 'Do you provide part-load (LTL) service?', a: 'Yes, our LTL service allows you to share truck space, reducing costs for smaller shipments.' },
    ],
    relatedSlugs: ['domestic-priority', 'by-train', 'door-to-door-delivery'],
  },
  'by-train': {
    slug: 'by-train',
    title: 'By Train',
    subtitle: 'Cost-Effective Rail Freight for Bulk Cargo',
    image: '/assets/service-by-train.jpg',
    intro: 'Our rail freight service leverages India\'s extensive railway network to move bulk cargo economically across the country. With dedicated freight corridors, container trains, and secure loading facilities, we provide a greener, more cost-effective alternative to road transport for large-volume shipments.',
    benefits: [
      { title: 'Cost-Effective', desc: 'Up to 40% savings compared to road freight for bulk cargo.', icon: TrainFront },
      { title: 'Large Capacity', desc: 'Move hundreds of tons in a single shipment.', icon: Package },
      { title: 'Eco-Friendly', desc: 'Lower carbon footprint compared to road transport.', icon: Globe },
      { title: 'Secure Transport', desc: 'Sealed container movement with minimal handling.', icon: Shield },
    ],
    process: [
      { step: '01', title: 'Cargo Assessment', desc: 'Volume, weight, and route planning for rail transport.' },
      { step: '02', title: 'Container Loading', desc: 'Cargo loaded into sealed rail containers at yard.' },
      { step: '03', title: 'Rail Transit', desc: 'Moved via dedicated freight corridors across India.' },
      { step: '04', title: 'Unloading & Delivery', desc: 'Cargo unloaded and delivered to your facility.' },
    ],
    industries: ['Steel & Metals', 'Agriculture', 'Coal & Mining', 'FMCG', 'Construction Materials', 'Automotive Parts'],
    faqs: [
      { q: 'How fast is rail freight compared to road?', a: 'Rail freight is comparable for long distances (500+ km) and often faster on dedicated freight corridors.' },
      { q: 'What is the minimum cargo volume for rail?', a: 'Rail freight becomes cost-effective for shipments above 5 tons or full container loads (FCL).' },
      { q: 'Do you handle first-mile and last-mile?', a: 'Yes, we provide complete logistics including pickup from your location and delivery to the final destination.' },
    ],
    relatedSlugs: ['by-road-line-haul', 'domestic-priority', 'sea-freight'],
  },
  'warehousing-distribution': {
    slug: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    subtitle: 'Smart Storage, Inventory & Distribution Solutions',
    image: '/assets/service-warehousing.jpg',
    intro: 'At Highority Group, we understand the critical role warehousing and distribution play in the freight forwarding and supply chain industry. Our warehousing solutions provide secure storage, inventory control, cargo handling, and efficient order fulfillment. Combined with our distribution network, we help businesses streamline operations, reduce transit times, and improve customer satisfaction.',
    benefits: [
      { title: 'Secure Storage', desc: 'Modern warehousing facilities with 24/7 security and climate control options.', icon: Warehouse },
      { title: 'Inventory Control', desc: 'Real-time inventory tracking and management systems.', icon: ClipboardCheck },
      { title: 'Efficient Distribution', desc: 'Pan-India distribution network for faster delivery.', icon: Truck },
      { title: 'Order Fulfillment', desc: 'Complete pick, pack, and ship services.', icon: Package },
    ],
    process: [
      { step: '01', title: 'Cargo Receipt', desc: 'Goods received, inspected, and logged into inventory system.' },
      { step: '02', title: 'Storage & Management', desc: 'Systematic storage with real-time inventory tracking.' },
      { step: '03', title: 'Order Processing', desc: 'Pick, pack, and prepare orders for dispatch.' },
      { step: '04', title: 'Distribution', desc: 'Delivered via our network to final destination.' },
    ],
    industries: ['Retail', 'FMCG', 'Manufacturing', 'Electronics', 'Automotive', 'Import & Export', 'E-commerce', 'International Trade'],
    faqs: [
      { q: 'What warehousing services do you offer?', a: 'We offer secure storage, inventory management, order fulfillment, pick & pack, cross-docking, and distribution services across India.' },
      { q: 'Do you provide real-time inventory tracking?', a: 'Yes, our digital inventory management system provides real-time tracking and reporting.' },
      { q: 'Can you handle e-commerce fulfillment?', a: 'Absolutely. We provide complete e-commerce fulfillment including storage, order processing, and last-mile delivery.' },
    ],
    relatedSlugs: ['domestic-priority', 'by-road-line-haul', 'door-to-door-delivery'],
  },
};

export const sharedWhyChooseUs = [
  { title: 'Expert Handling', desc: 'Our certified team ensures your cargo is managed with precision and care throughout the journey.', icon: Shield },
  { title: 'Global Network', desc: 'Access to 50+ countries through our direct offices and trusted partner network.', icon: Globe },
  { title: 'Real-Time Tracking', desc: 'Monitor your shipment 24/7 with our advanced digital tracking platform.', icon: TrendingUp },
  { title: '24/7 Support', desc: 'Our dedicated team is available round-the-clock to assist you at every step.', icon: Shield },
];
