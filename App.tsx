import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AffiliationsPage from './components/AffiliationsPage';
import BlackBeltsPage from './components/BlackBeltsPage';
import BlogPage from './components/BlogPage';
import ContactUsPage from './components/ContactUsPage';
import FacilitiesPage from './components/FacilitiesPage';
import MarioSequeiraPage from './components/MarioSequeiraPage';
import OurDojoPage from './components/OurDojoPage';
import DojoEtiquettePage from './components/DojoEtiquettePage';

const App = () => {
  let page;

  // Simple router
  switch (window.location.pathname) {
    case '/':
      page = <HomePage />;
      break;
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
    case '/black-belts':
      page = <BlackBeltsPage />;
      break;
    case '/blog':
      page = <BlogPage />;
      break;
    case '/contact-us':
      page = <ContactUsPage />;
      break;
    case '/dojo-etiquette':
      page = <DojoEtiquettePage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {page}
      </main>
      <Footer />
    </div>
  );
};

export default App;