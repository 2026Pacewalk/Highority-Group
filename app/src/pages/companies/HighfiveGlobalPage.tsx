import CompanyProfileTemplate from '@/components/CompanyProfileTemplate';
import { useCompanies } from '@/lib/content';

export default function HighfiveGlobalPage() {
  const company = useCompanies().find((c) => c.id === 'highfive-global');
  return company ? <CompanyProfileTemplate company={company} /> : null;
}
