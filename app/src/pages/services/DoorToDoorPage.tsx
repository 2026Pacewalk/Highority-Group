import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/serviceData';
export default function DoorToDoorPage() { return <ServicePageTemplate service={servicesData['door-to-door-delivery']} />; }
