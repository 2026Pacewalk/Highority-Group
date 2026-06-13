import {
  MapPin, Navigation, FileCheck, Leaf, Building2, ShieldCheck, Award, Plane,
  Factory, Utensils, BookmarkCheck, Receipt, Handshake, Truck, Globe, TrendingUp,
  Shield, Package, ClipboardCheck, Ship, Zap, TrainFront, Warehouse, Mail, Phone,
  Clock, Star, Box, Anchor, Container,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Central registry mapping stored icon-name strings (from the database)
 * back to lucide-react components. Add new icons here as needed.
 */
export const iconMap: Record<string, LucideIcon> = {
  MapPin, Navigation, FileCheck, Leaf, Building2, ShieldCheck, Award, Plane,
  Factory, Utensils, BookmarkCheck, Receipt, Handshake, Truck, Globe, TrendingUp,
  Shield, Package, ClipboardCheck, Ship, Zap, TrainFront, Warehouse, Mail, Phone,
  Clock, Star, Box, Anchor, Container,
};

export const iconNames = Object.keys(iconMap);

/**
 * Resolves an icon value to a component. Accepts either a string name
 * (from the API) or an already-resolved LucideIcon (from fallback data).
 * Falls back to MapPin so a bad/missing name never crashes a render.
 */
export function getIcon(icon?: string | LucideIcon): LucideIcon {
  if (typeof icon === 'function') return icon;
  return iconMap[icon ?? ''] ?? MapPin;
}
