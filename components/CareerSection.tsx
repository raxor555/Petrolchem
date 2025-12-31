
import React from 'react';
import { Play } from 'lucide-react';

const CareerSection: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Call to Action */}
        <div className="bg-[#444b54] p-10 md:p-20 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-[28px] md:text-4xl text-white font-light mb-8 leading-tight">
              Own your career at <br /> Petrolchem
            </h2>
            <button className="bg-white text-black w-full md:w-auto px-8 py-4 md:py-3 font-bold text-[11px] tracking-widest uppercase hover:bg-gray-100 transition-all">
              JOIN PETROLCHEM
            </button>
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-4 opacity-10">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Video Feature */}
        <div className="lg:col-span-2 relative min-h-[350px] md:min-h-[500px] bg-cover bg-center flex items-end p-8 md:p-20"
             style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?semt=ais_hybrid&w=740&q=80")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 w-full">
            <div className="relative pl-4 mb-6 border-l-2 border-[#BE1E2D]">
              <h3 className="text-xl md:text-3xl text-white font-light mb-1">Petrolchem career story</h3>
              <p className="text-gray-300 text-xs md:text-sm font-light">Own your career at Petrolchem</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white flex items-center justify-center group hover:bg-[#BE1E2D] hover:border-[#BE1E2D] transition-all">
                <Play size={20} fill="white" className="ml-1 md:w-[24px] md:h-[24px]" />
              </button>
              <span className="text-sm font-medium">02:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
