
import React from 'react';
import Hero from '../components/Hero';
import InnovationSection from '../components/InnovationSection';
import Features from '../components/Features';
import NewsSection from '../components/NewsSection';
import CareerSection from '../components/CareerSection';
import ContactForm from '../components/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <InnovationSection />
      <Features />
      <NewsSection />
      
      {/* Spacer / Divider between News and Career sections */}
      <div className="h-16 md:h-32 bg-white flex items-center justify-center">
        <div className="w-1 h-12 md:h-20 bg-gray-100"></div>
      </div>
      
      <CareerSection />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
