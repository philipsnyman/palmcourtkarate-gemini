import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AffiliationsPage from './components/AffiliationsPage';
import BlackBeltsPage from './components/BlackBeltsPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import ContactUsPage from './components/ContactUsPage';
import FacilitiesPage from './components/FacilitiesPage';
import MarioSequeiraPage from './components/MarioSequeiraPage';
import OurDojoPage from './components/OurDojoPage';
import DojoEtiquettePage from './components/DojoEtiquettePage';
import GradingsPage from './components/GradingsPage';
import HistoryPage from './components/HistoryPage';
import TerminologyPage from './components/TerminologyPage';
import PreSchoolPage from './components/PreSchoolPage';
import ScholarsPage from './components/ScholarsPage';
import AdultsPage from './components/AdultsPage';
import SelfDefencePage from './components/SelfDefencePage';
import SchedulePage from './components/SchedulePage';
import FitnessPage from './components/FitnessPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookieSettingsPage from './components/CookieSettingsPage';
import AuthPage from './components/AuthPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ChatWidget from './components/ChatWidget';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';


const App = () => {
  let page;

  // Simple router
  switch (window.location.pathname) {
    case '/':
      page = <HomePage />;
      break;
    // Auth
    case '/auth':
      page = <AuthPage />;
      break;
    case '/forgot-password':
      page = <ForgotPasswordPage />;
      break;
    case '/dashboard':
      page = <DashboardPage />;
      break;
    case '/profile':
      page = <ProfilePage />;
      break;
    // About Us
    case '/our-dojo':
      page = <OurDojoPage />;
      break;
    case '/facilities':
      page = <FacilitiesPage />;
      break;
    case '/mario-sequeira':
      page = <MarioSequeiraPage />;
      break;
    case '/affiliations':
      page = <AffiliationsPage />;
      break;
    // Karate
    case '/history':
      page = <HistoryPage />;
      break;
    case '/gradings':
      page = <GradingsPage />;
      break;
    case '/dojo-etiquette':
      page = <DojoEtiquettePage />;
      break;
    case '/terminology':
      page = <TerminologyPage />;
      break;
    // Courses
    case '/courses/pee-wee':
      page = <PreSchoolPage />;
      break;
    case '/courses/scholars':
      page = <ScholarsPage />;
      break;
    case '/courses/adults':
      page = <AdultsPage />;
      break;
    case '/courses/self-defence':
      page = <SelfDefencePage />;
      break;
    case '/courses/fitness':
      page = <FitnessPage />;
      break;
    // Other
    case '/schedule':
      page = <SchedulePage />;
      break;
    case '/black-belts':
      page = <BlackBeltsPage />;
      break;
    case '/blog':
      page = <BlogPage />;
      break;
    case '/contact-us':
      page = <ContactUsPage />;
      break;
    case '/privacy-policy':
      page = <PrivacyPolicyPage />;
      break;
    case '/terms-of-service':
      page = <TermsOfServicePage />;
      break;
    case '/cookie-settings':
      page = <CookieSettingsPage />;
      break;
    default:
      if (window.location.pathname.startsWith('/blog/')) {
        page = <BlogPostPage />;
      } else {
        page = <HomePage />;
      }
  }

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {page}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;