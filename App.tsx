import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AffiliationsPage from './components/AffiliationsPage';
import BlackBeltsPage from './components/BlackBeltsPage';
import BlogPage from './components/BlogPage';
import ContactUsPage from './components/ContactUsPage';
import DojoEtiquettePage from './components/DojoEtiquettePage';
import FacilitiesPage from './components/FacilitiesPage';
import GradingsPage from './components/GradingsPage';
import HistoryPage from './components/HistoryPage';
import MarioSequeiraPage from './components/MarioSequeiraPage';
import OurDojoPage from './components/OurDojoPage';
import TerminologyPage from './components/TerminologyPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* About Us */}
            <Route path="/about-us/our-dojo" element={<OurDojoPage />} />
            <Route path="/about-us/facilities" element={<FacilitiesPage />} />
            <Route path="/about-us/mario-sequeira" element={<MarioSequeiraPage />} />
            <Route path="/about-us/affiliations" element={<AffiliationsPage />} />

            {/* Karate */}
            <Route path="/karate/history" element={<HistoryPage />} />
            <Route path="/karate/gradings" element={<GradingsPage />} />
            <Route path="/karate/dojo-etiquette" element={<DojoEtiquettePage />} />
            <Route path="/karate/terminology" element={<TerminologyPage />} />

            {/* Top Level */}
            <Route path="/black-belts" element={<BlackBeltsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;