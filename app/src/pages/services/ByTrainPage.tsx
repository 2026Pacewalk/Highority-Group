import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/serviceData';
export default function ByTrainPage() { return <ServicePageTemplate service={servicesData['by-train']} />; }
