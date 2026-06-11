import CompanyProfileTemplate from '@/components/CompanyProfileTemplate';
import { companies } from '@/data/ourCompaniesData';
export default function HighfiveGlobalPage() { return <CompanyProfileTemplate company={companies[2]} />; }
