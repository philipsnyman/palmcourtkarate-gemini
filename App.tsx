import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AffiliationsPage from './components/AffiliationsPage';
import BlackBeltsPage from './components/BlackBeltsPage';
import BlogPage from './components/BlogPage';
import ContactUsPage from './components/ContactUsPage';

const App = () => {
  let page;

  // Simple router
  switch (window.location.pathname) {
    case '/':
      page = <HomePage />;
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
