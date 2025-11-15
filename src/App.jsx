import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';

// Load landing page immediately
import AccountingLandingPage1 from './pages/1AccountantLandingPage';

// Lazy load everything else
const PromoSelection2 = lazy(() => import('./pages/2PromoSelection'));
const Services3 = lazy(() => import('./pages/3Services'));
const Services4 = lazy(() => import('./pages/4Services'));
const Confidential5 = lazy(() => import('./pages/5Confidential'));
const CostSaving6 = lazy(() => import('./pages/6CostSavings'));
const AboutUs7 = lazy(() => import('./pages/7AboutUs'));
const Components8 = lazy(() => import('./pages/8WhyChooseUs'));
const AccountantProfiles9 = lazy(() => import('./pages/9AccountantProfile'));
const OurBestDeal10 = lazy(() => import('./pages/10OurBestDeal'));
const BookAnAppointment11 = lazy(() => import('./pages/11BookAnAppointment'));
const AppointmentForm12 = lazy(() => import('./pages/12AppointmentForm'));
const ExpandGlobal14 = lazy(() => import('./pages/14ExpandGlobal'));
const Footer15 = lazy(() => import('./pages/15Footer'));

const PageLayout = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

const HomePage = () => (
  <>
    <AccountingLandingPage1 />
    <PageLayout>
      <PromoSelection2 />
      <AboutUs7 />
      <Services3 />
      <Services4 />
      <Confidential5 />
      <CostSaving6 />
      <Components8 />
      <AccountantProfiles9 />
      <OurBestDeal10 />
      <BookAnAppointment11 />
      <AppointmentForm12 />
      <ExpandGlobal14 />
      <Footer15 />
    </PageLayout>
  </>
);

const AboutPage = () => (
  <PageLayout>
    <AboutUs7 />
    <Services3 />
    <Services4 />
    <Confidential5 />
    <CostSaving6 />
    <Components8 />
    <AccountantProfiles9 />
    <OurBestDeal10 />
    <BookAnAppointment11 />
    <AppointmentForm12 />
    <ExpandGlobal14 />
    <Footer15 />
  </PageLayout>
);

const ServicesPage = () => (
  <PageLayout>
    <Services3 />
    <Services4 />
    <Confidential5 />
    <CostSaving6 />
    <Components8 />
    <AccountantProfiles9 />
    <OurBestDeal10 />
    <BookAnAppointment11 />
    <AppointmentForm12 />
    <ExpandGlobal14 />
    <Footer15 />
  </PageLayout>
);

const ContactPage = () => (
  <PageLayout>
    <Footer15 />
  </PageLayout>
);

const AppointmentPage = () => (
  <PageLayout>
    <AppointmentForm12 />
  </PageLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/api/book-an-appointment" element={<AppointmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;