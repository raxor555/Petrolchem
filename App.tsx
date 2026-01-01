
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProductionPage from './pages/ProductionPage';
import CMWPage from './pages/CMWPage';
import DownstreamPage from './pages/DownstreamPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'production' | 'cmw' | 'downstream'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'production' | 'cmw' | 'downstream') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#4B1771]/10 selection:text-[#4B1771]">
      <Header onNavigate={navigateTo} />
      <main className="flex-grow pt-[70px] md:pt-[85px]">
        {currentPage === 'home' && <LandingPage />}
        {currentPage === 'production' && <ProductionPage />}
        {currentPage === 'cmw' && <CMWPage />}
        {currentPage === 'downstream' && <DownstreamPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
