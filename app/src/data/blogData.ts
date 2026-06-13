export interface BlogContentSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: BlogContentSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'air-freight-vs-sea-freight',
    title: 'Air Freight vs Sea Freight: Choosing the Right Option',
    category: 'Logistics Guide',
    date: 'January 15, 2025',
    readTime: '5 min read',
    image: '/assets/blog-air-freight.jpg',
    excerpt:
      'Speed, cost, capacity and carbon — a practical framework for deciding whether your shipment should fly or sail.',
    content: [
      {
        paragraphs: [
          'One of the first decisions in any international shipment is the mode of transport. Air freight and sea freight each have clear strengths, and the right choice depends on your cargo, timeline, and budget. Getting this decision right can save weeks of transit time or thousands in shipping costs.',
        ],
      },
      {
        heading: 'Speed and Transit Time',
        paragraphs: [
          'Air freight is unmatched for speed — most intercontinental shipments arrive within 1 to 3 days. Sea freight, by contrast, typically takes 20 to 45 days depending on the trade lane. If your goods are time-critical, perishable, or high-value, air is usually the answer.',
          'For non-urgent inventory, raw materials, or bulk orders planned weeks in advance, the longer ocean transit is rarely a problem and the savings are substantial.',
        ],
      },
      {
        heading: 'Cost Considerations',
        paragraphs: [
          'Air freight is priced on a combination of actual and volumetric (dimensional) weight, which makes it expensive for large or heavy consignments. Sea freight is dramatically more economical per kilogram, especially for full-container loads (FCL).',
          'A useful rule of thumb: for shipments under ~150 kg, the gap narrows and air can be competitive once you factor in faster cash-flow and lower inventory holding costs. Above that, sea freight almost always wins on price.',
        ],
      },
      {
        heading: 'Capacity, Cargo Type and Sustainability',
        paragraphs: [
          'Ocean carriers can move volumes that simply cannot fit on an aircraft, and they accept many hazardous and oversized goods that air carriers restrict. Air freight also carries a significantly higher carbon footprint per tonne-kilometre — an increasingly important factor for companies with sustainability targets.',
        ],
      },
      {
        heading: 'The Bottom Line',
        paragraphs: [
          'Choose air freight for speed, high-value goods, and tight deadlines. Choose sea freight for cost efficiency, large volumes, and flexible timelines. Many businesses use a hybrid strategy — sea for routine replenishment and air for urgent top-ups. Highority’s team helps you model both options on your real lanes so the decision is driven by data, not guesswork.',
        ],
      },
    ],
  },
  {
    slug: 'by-road-vs-by-train',
    title: 'By Road vs By Train: Best Cargo Transport for Your Business',
    category: 'Transport',
    date: 'January 10, 2025',
    readTime: '7 min read',
    image: '/assets/blog-by-road.jpg',
    excerpt:
      'When does rail beat road for domestic freight? A breakdown of cost, reach, speed and reliability for Indian logistics.',
    content: [
      {
        paragraphs: [
          'For domestic cargo movement across India, road and rail are the two workhorses. Each has a sweet spot, and choosing well can cut both your freight bill and your delivery times.',
        ],
      },
      {
        heading: 'Reach and Flexibility',
        paragraphs: [
          'Road transport offers unbeatable door-to-door flexibility. Trucks can reach virtually any pincode, handle small and large consignments, and adapt routes on the fly. This makes road ideal for first-mile pickup, last-mile delivery, and shipments to locations without rail connectivity.',
          'Rail is fixed to the network and terminals, so it almost always needs road legs at each end — but for the long middle haul between major hubs, it is hard to beat.',
        ],
      },
      {
        heading: 'Cost and Volume',
        paragraphs: [
          'For long distances and bulk cargo, rail freight is markedly cheaper per tonne and far more fuel-efficient. A single freight train replaces dozens of trucks, which also reduces road congestion and emissions.',
          'Road becomes more economical for shorter distances, smaller loads, and time-sensitive deliveries where the cost of multiple handling steps would erode rail’s savings.',
        ],
      },
      {
        heading: 'Speed, Reliability and Risk',
        paragraphs: [
          'Rail schedules are largely immune to traffic and offer predictable transit on busy corridors, while road can be faster on shorter point-to-point runs but is exposed to congestion and driver-hour limits. Rail also tends to see less handling damage on long hauls.',
        ],
      },
      {
        heading: 'Our Recommendation',
        paragraphs: [
          'Use rail for long-distance, high-volume movements between major cities, and road for regional distribution and the crucial first and last mile. A combined road-rail (intermodal) plan often delivers the best of both — Highority designs these multimodal routes to balance cost, speed, and reliability for your specific network.',
        ],
      },
    ],
  },
  {
    slug: 'customs-clearance-guide',
    title: 'Understanding Customs Clearance: A Complete Guide',
    category: 'Customs',
    date: 'January 5, 2025',
    readTime: '6 min read',
    image: '/assets/blog-customs.jpg',
    excerpt:
      'Documentation, duties, and common pitfalls — how to keep your shipments moving smoothly through customs.',
    content: [
      {
        paragraphs: [
          'Customs clearance is often the step where shipments stall. Understanding the process — and preparing for it — is the single biggest thing you can do to avoid costly delays and demurrage charges.',
        ],
      },
      {
        heading: 'Get the Documentation Right',
        paragraphs: [
          'Most clearance delays trace back to paperwork. The core documents are the commercial invoice, packing list, bill of lading or airway bill, and a certificate of origin where applicable. Product-specific licences, permits, or compliance certificates may also be required.',
          'Accurate values, correct HS (tariff) codes, and consistent details across every document are essential. A single mismatch can trigger inspection and hold up the entire consignment.',
        ],
      },
      {
        heading: 'Duties, Taxes and Valuation',
        paragraphs: [
          'Import duty and applicable taxes are calculated from the declared customs value and the HS classification of your goods. Misclassification can mean overpaying duty — or penalties for underpaying. Knowing your codes and any preferential trade agreements that apply can materially reduce landed cost.',
        ],
      },
      {
        heading: 'Why a CHA Matters',
        paragraphs: [
          'A licensed Customs House Agent (CHA) understands local regulations, files declarations correctly, and liaises with customs on your behalf. They flag issues before they become hold-ups and keep your goods moving.',
          'Highority’s in-house CHA services handle classification, documentation, duty assessment, and clearance end-to-end — so your cargo clears the border the first time, without surprises.',
        ],
      },
    ],
  },
  {
    slug: 'door-to-door-logistics',
    title: 'Door-to-Door Logistics: Simplifying Global Shipping',
    category: 'Shipping',
    date: 'December 28, 2024',
    readTime: '4 min read',
    image: '/assets/blog-door-to-door.jpg',
    excerpt:
      'One partner, one point of accountability — how end-to-end logistics removes the headaches of global shipping.',
    content: [
      {
        paragraphs: [
          'Door-to-door logistics means a single provider manages your shipment from the moment it leaves the supplier to the moment it arrives at the final destination — pickup, freight, customs, and last-mile delivery, all under one roof.',
        ],
      },
      {
        heading: 'One Point of Accountability',
        paragraphs: [
          'Traditional shipping splits responsibility across freight forwarders, customs brokers, and local carriers. When something goes wrong, accountability gets murky. A door-to-door model gives you one partner and one point of contact for the entire journey.',
        ],
      },
      {
        heading: 'What It Covers',
        paragraphs: [
          'A complete door-to-door service typically includes origin pickup and export handling, main-leg air or sea freight, customs clearance at both ends, duties and taxes management, and final delivery with proof of receipt — plus tracking visibility throughout.',
        ],
      },
      {
        heading: 'The Business Benefit',
        paragraphs: [
          'You get predictable costs, fewer touch-points, less paperwork, and a team that resolves exceptions before they reach you. For businesses scaling internationally, that simplicity is a genuine competitive advantage. Highority delivers true door-to-door coverage across air, sea, road, and rail.',
        ],
      },
    ],
  },
  {
    slug: 'warehousing-solutions',
    title: 'Warehousing Solutions for Growing Businesses',
    category: 'Warehousing',
    date: 'December 20, 2024',
    readTime: '8 min read',
    image: '/assets/blog-warehousing.jpg',
    excerpt:
      'From inventory accuracy to faster fulfilment — how modern warehousing scales with your business.',
    content: [
      {
        paragraphs: [
          'As order volumes grow, warehousing shifts from a simple storage cost to a strategic capability. The right setup improves inventory accuracy, speeds up fulfilment, and lets you expand into new regions without building your own facilities.',
        ],
      },
      {
        heading: 'Beyond Storage',
        paragraphs: [
          'Modern warehousing is about flow, not just space. Receiving, put-away, picking, packing, and dispatch all need to be fast and accurate. Good slotting, barcode or RFID scanning, and a capable warehouse management system keep stock counts reliable and orders error-free.',
        ],
      },
      {
        heading: 'Scaling Without the Capex',
        paragraphs: [
          'Outsourced and shared warehousing lets growing businesses pay for the space and labour they actually use, flex up during peak seasons, and position inventory closer to customers in multiple cities — all without the capital outlay of owning a facility.',
        ],
      },
      {
        heading: 'Distribution That Keeps Up',
        paragraphs: [
          'Warehousing works best when tightly integrated with distribution. Co-locating stock with transport planning shortens delivery times and lowers per-order cost. Highority offers secure storage, inventory management, and distribution from strategically located facilities, so your supply chain scales smoothly as you grow.',
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
