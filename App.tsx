import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import TeamSection from './components/TeamSection';
import TournamentsSection from './components/TournamentsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <TeamSection />
        <TournamentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
