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
import AdultsPage from './components/AdultsPage';
import ScholarsPage from './components/ScholarsPage';
import PreSchoolPage from './components/PreSchoolPage';
import SelfDefencePage from './components/SelfDefencePage';
import SchedulePage from './components/SchedulePage';
import HistoryPage from './components/HistoryPage';
import FitnessPage from './components/FitnessPage';
import TerminologyPage from './components/TerminologyPage';

function App() {
  const renderPage = () => {
    const { pathname } = window.location;

    if (pathname.startsWith('/blog/')) {
      const slug = pathname.split('/blog/')[1];
      return <BlogPostPage slug={slug} />;
    }

    switch (pathname) {
      case '/':
        return <HomePage />;
      case '/affiliations':
        return <AffiliationsPage />;
      case '/black-belts':
        return <BlackBeltsPage />;
      case '/blog':
        return <BlogPage />;
      case '/contact-us':
        return <ContactUsPage />;
      case '/facilities':
        return <FacilitiesPage />;
      case '/mario-sequeira':
        return <MarioSequeiraPage />;
      case '/our-dojo':
        return <OurDojoPage />;
      case '/dojo-etiquette':
        return <DojoEtiquettePage />;
      case '/gradings':
        return <GradingsPage />;
      case '/courses/adults':
        return <AdultsPage />;
      case '/courses/scholars':
        return <ScholarsPage />;
      case '/courses/pre-school':
        return <PreSchoolPage />;
      case '/courses/self-defence':
        return <SelfDefencePage />;
      case '/courses/fitness':
        return <FitnessPage />;
      case '/schedule':
        return <SchedulePage />;
      case '/history':
        return <HistoryPage />;
      case '/terminology':
        return <TerminologyPage />;
      default:
        // You can add a 404 component here
        return <HomePage />;
    }
  };

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
  );
}

export default App;
