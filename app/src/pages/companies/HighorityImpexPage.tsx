import CompanyProfileTemplate from '@/components/CompanyProfileTemplate';
import { useCompanies } from '@/lib/content';

export default function HighorityImpexPage() {
  const company = useCompanies().find((c) => c.id === 'highority-impex');
  return company ? <CompanyProfileTemplate company={company} /> : null;
}
