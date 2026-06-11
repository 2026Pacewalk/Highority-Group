import { MapPin, Navigation } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Office {
  id: string;
  type: string;
  name: string;
  address: string;
  city: string;
  phones: string[];
  emails: string[];
  mapQuery: string;
  cityImage: string;
  icon: LucideIcon;
}

export const offices: Office[] = [
  {
    id: 'chandigarh',
    type: 'Corporate Office',
    name: 'Highority India Pvt Ltd',
    address: 'Unit 1408, 14th Floor, Chandigarh Citi Center (CCC), VIP Road, Zirakpur, Punjab – 140603',
    city: 'Chandigarh',
    phones: ['+91-70870-87333', '01762-500046'],
    emails: ['contact@highority.in'],
    mapQuery: 'Chandigarh+Citi+Center+Zirakpur',
    cityImage: '/assets/city-chandigarh.jpg',
    icon: Navigation,
  },
  {
    id: 'ahmedabad',
    type: 'Branch Office',
    name: 'Highority India Pvt Ltd',
    address: 'C-401-402, 4th Floor, Supath-2 Complex, Opp. Holiday Inn Express Hotel, Near Old Vadaj Bus Stand, Usmanpura, Ashram Road, Ahmedabad – 380013',
    city: 'Ahmedabad',
    phones: ['+91-70870-87333'],
    emails: ['contact@highority.in'],
    mapQuery: 'Supath+2+Complex+Ashram+Road+Ahmedabad',
    cityImage: '/assets/city-ahmedabad.jpg',
    icon: MapPin,
  },
  {
    id: 'delhi',
    type: 'Branch Office',
    name: 'Highority India Pvt Ltd',
    address: '333/1, G.P. Mahipalpur, Rangpuri, New Delhi – 110037',
    city: 'Delhi',
    phones: ['+91-70870-87333'],
    emails: ['contact@highority.in'],
    mapQuery: 'Mahipalpur+Rangpuri+New+Delhi',
    cityImage: '/assets/city-delhi.jpg',
    icon: MapPin,
  },
  {
    id: 'jaipur',
    type: 'Branch Office',
    name: 'Highority India Pvt Ltd',
    address: 'Shop No. B-07, Ghar Aangan, Village Hajyawala, Sanganer, Jaipur, Rajasthan – 302029',
    city: 'Jaipur',
    phones: ['+91-70870-87333'],
    emails: ['contact@highority.in'],
    mapQuery: 'Ghar+Aangan+Sanganer+Jaipur',
    cityImage: '/assets/city-jaipur.jpg',
    icon: MapPin,
  },
  {
    id: 'dubai',
    type: 'UAE Office',
    name: 'HIGHORITY IMPEX TRADING L.L.C',
    address: '006, 1st Floor, Unique Time Business Center, Union Coop, Al Aweer Central Market, Dubai, United Arab Emirates',
    city: 'Dubai',
    phones: ['+971-505059232', '+971-042597273'],
    emails: ['contact@highority.in'],
    mapQuery: 'Unique+Time+Business+Center+Al+Aweer+Dubai',
    cityImage: '/assets/city-dubai.jpg',
    icon: MapPin,
  },
];
