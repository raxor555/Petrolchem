
import React from 'react';
import { Play } from 'lucide-react';

const CareerSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Call to Action */}
        <div className="bg-[#1b0a05] p-10 md:p-24 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#e37249]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl text-white font-semibold mb-8 md:mb-10 leading-[1.1] uppercase tracking-tight">
              Pioneer your <br /> <span className="text-[#e37249]">Future</span> at <br /> Petrolchem
            </h2>
            <button 
              onClick={scrollToContact}
              className="bg-[#e37249] text-white w-full sm:w-auto px-10 py-5 font-semibold text-[11px] md:text-[12px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#e37249] transition-all shadow-2xl"
            >
              JOIN OUR NETWORK
            </button>
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-3 md:gap-4 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#e37249] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Video Feature */}
        <div className="lg:col-span-2 relative min-h-[400px] md:min-h-[600px] bg-cover bg-center flex items-end p-8 md:p-24 group overflow-hidden"
             style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?semt=ais_hybrid&w=740&q=80")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b0a05] via-black/30 to-transparent group-hover:from-[#e37249]/60 transition-all duration-700"></div>
          <div className="relative z-10 w-full">
            <div className="relative pl-5 md:pl-6 mb-8 md:mb-10 border-l-4 border-[#e37249]">
              <h3 className="text-2xl md:text-4xl text-white font-semibold mb-2 uppercase tracking-tight">Our Talent Stories</h3>
              <p className="text-orange-100 text-xs md:text-base font-normal opacity-80 uppercase tracking-widest">Growth. Impact. Leadership.</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-white">
              <button 
                onClick={() => {}} // Could trigger video modal
                className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#e37249] flex items-center justify-center group/play hover:scale-110 transition-all shadow-[0_0_30px_rgba(227,114,73,0.6)]"
              >
                <Play fill="white" className="ml-1 w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="flex flex-col">
                 <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">Watch Feature</span>
                 <span className="text-[10px] md:text-xs font-normal opacity-60">Duration: 02:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;