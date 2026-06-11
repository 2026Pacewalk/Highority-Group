import { Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface EmailContact {
  id: string;
  label: string;
  description: string;
  email: string;
  icon: LucideIcon;
}

export const emailContacts: EmailContact[] = [
  {
    id: 'general',
    label: 'Official Email',
    description: 'For all inquiries, partnerships, bookings, and business communication.',
    email: 'contact@highority.in',
    icon: Mail,
  },
];

export const allEmails = emailContacts.map(e => e.email);
