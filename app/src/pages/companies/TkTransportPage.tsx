import CompanyProfileTemplate from '@/components/CompanyProfileTemplate';
import { useCompanies } from '@/lib/content';

export default function TkTransportPage() {
  const company = useCompanies().find((c) => c.id === 'tk-transport');
  return company ? <CompanyProfileTemplate company={company} /> : null;
}
