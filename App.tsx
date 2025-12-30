
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GridSection from './components/GridSection';
import NewsSection from './components/NewsSection';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';

const innovationsData = [
  {
    title: "VoltaGrid and Petrolchem make 400 MW power commitment in the Eastern Hemisphere",
    desc: "The companies secured manufacturing for 400 MW of modular natural gas power systems for delivery in 2028 to support the development of data centers",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "5 reasons why umbilical-less intervention represents the future of smarter offshore operations",
    desc: "Subsea control systems have evolved from the complex umbilicals of over 5 decades ago. Today's offshore operations demand more agility, safety, and efficiency",
    image: "https://images.unsplash.com/photo-1517524008436-bbdb03ac833b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Petrolchem introduces StreamStar™ wired drill pipe interface system",
    desc: "StreamStar delivers continuous surface power and improves orchestrated closed-loop automation for superior well delivery",
    image: "https://images.unsplash.com/photo-1504384308090-c89e12076d22?q=80&w=800&auto=format&fit=crop"
  }
];

const assetValueData = [
  {
    title: "CCS eliminates stuck pipe and improves drilling efficiency",
    desc: "Continuous circulation system (CCS) deployment in an onshore field in Mexico eliminates stuck pipe, stabilizes drilling, and sets new operational benchmark",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Cement provides isolation for CCUS well in Adriatic Sea",
    desc: "Tailored CorrosaCem™ cement system provides a corrosion-resistant barrier and complete casing isolation for a CO2 injection well in the Adriatic Sea",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Expandable liner system suits deepwater installations",
    desc: "VersaFlex® ELH LECD system supports wellbore conditions and address instability and losses with string and hydraulic manipulation in Western Australia",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-red-50 selection:text-[#BE1E2D]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GridSection title="Explore our latest innovations" items={innovationsData} />
        <NewsSection />
        <GridSection title="Explore how we maximize asset value" items={assetValueData} />
        <CareerSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
