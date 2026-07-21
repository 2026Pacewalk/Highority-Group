import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { ADMIN_BASE } from '@/admin/config';

const AdminApp = lazy(() => import('@/admin/AdminApp'));
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActions from '@/components/MobileActions';
import FloatingActions from '@/components/FloatingActions';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PlaceholderPage from '@/pages/PlaceholderPage';
import AboutUsPage from '@/pages/AboutUsPage';
import BlogsPage from '@/pages/BlogsPage';
import BlogPostPage from '@/pages/BlogPostPage';
import RequestQuotePage from '@/pages/RequestQuotePage';
import ContactUsPage from '@/pages/ContactUsPage';
import CertificationsPage from '@/pages/CertificationsPage';
import SitemapPage from '@/pages/SitemapPage';
import TrackShipmentPage from '@/pages/TrackShipmentPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Service pages
import AirFreightPage from '@/pages/services/AirFreightPage';
import SeaFreightPage from '@/pages/services/SeaFreightPage';
import DoorToDoorPage from '@/pages/services/DoorToDoorPage';
import ChaServicesPage from '@/pages/services/ChaServicesPage';
import DomesticPriorityPage from '@/pages/services/DomesticPriorityPage';
import ImportExpressPage from '@/pages/services/ImportExpressPage';
import InternationalMarketingPage from '@/pages/services/InternationalMarketingPage';
import ByRoadLineHaulPage from '@/pages/services/ByRoadLineHaulPage';
import ByTrainPage from '@/pages/services/ByTrainPage';
import WarehousingDistributionPage from '@/pages/services/WarehousingDistributionPage';
import GlobalNetworkPage from '@/pages/GlobalNetworkPage';

// Company pages
import OurCompaniesPage from '@/pages/OurCompaniesPage';
import TkTransportPage from '@/pages/companies/TkTransportPage';
import HighorityImpexPage from '@/pages/companies/HighorityImpexPage';
import HighfiveGlobalPage from '@/pages/companies/HighfiveGlobalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // The /products route lands on the home page; HomePage handles scrolling
    // to the products section once its content is laid out.
    if (pathname === '/products') return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  // The admin dashboard renders without the public header/footer chrome.
  if (pathname.startsWith(ADMIN_BASE)) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#0A1628] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00D4FF] border-t-transparent rounded-full animate-spin" /></div>}>
        <AdminApp />
      </Suspense>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00D4FF] border-t-transparent rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<HomePage loaderDone={true} />} />
          <Route path="/products" element={<HomePage loaderDone={true} />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* 11 Final Service Pages */}
          <Route path="/air-freight" element={<AirFreightPage />} />
          <Route path="/sea-freight" element={<SeaFreightPage />} />
          <Route path="/door-to-door-delivery" element={<DoorToDoorPage />} />
          <Route path="/cha-services" element={<ChaServicesPage />} />
          <Route path="/domestic-priority" element={<DomesticPriorityPage />} />
          <Route path="/import-express" element={<ImportExpressPage />} />
          <Route path="/by-road-line-haul" element={<ByRoadLineHaulPage />} />
          <Route path="/by-train" element={<ByTrainPage />} />
          <Route path="/warehousing-distribution" element={<WarehousingDistributionPage />} />
          <Route path="/international-marketing" element={<InternationalMarketingPage />} />
          <Route path="/global-network" element={<GlobalNetworkPage />} />

          {/* Legacy /services/ redirects */}
          <Route path="/services/air-freight" element={<AirFreightPage />} />
          <Route path="/services/sea-freight" element={<SeaFreightPage />} />
          <Route path="/services/door-to-door-delivery" element={<DoorToDoorPage />} />
          <Route path="/services/cha-services" element={<ChaServicesPage />} />
          <Route path="/services/domestic-priority" element={<DomesticPriorityPage />} />
          <Route path="/services/import-express" element={<ImportExpressPage />} />
          <Route path="/services/by-road-line-haul" element={<ByRoadLineHaulPage />} />
          <Route path="/services/by-train" element={<ByTrainPage />} />
          <Route path="/services/warehousing-distribution" element={<WarehousingDistributionPage />} />
          <Route path="/services/international-marketing" element={<InternationalMarketingPage />} />
          <Route path="/services/global-network" element={<GlobalNetworkPage />} />

          {/* Other pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/careers" element={<PlaceholderPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPostPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* Our Companies */}
          <Route path="/our-companies" element={<OurCompaniesPage />} />
          <Route path="/companies/tk-transport-services-india" element={<TkTransportPage />} />
          <Route path="/companies/highority-impex-trading-llc" element={<HighorityImpexPage />} />
          <Route path="/companies/highfive-global-ltd" element={<HighfiveGlobalPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/track-shipment" element={<TrackShipmentPage />} />
          <Route path="/privacy-policy" element={<PlaceholderPage />} />
          <Route path="/terms-of-service" element={<PlaceholderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <MobileActions />
      <FloatingActions />
    </>
  );
}
