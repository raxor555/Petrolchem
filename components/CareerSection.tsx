
import React from 'react';
import { Play } from 'lucide-react';

const CareerSection: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Side: Call to Action */}
        <div className="bg-[#444b54] p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl text-white font-light mb-10 leading-tight">
              Own your career at <br /> Petrolchem
            </h2>
            <button className="bg-white text-black px-6 py-2.5 font-bold text-[10px] tracking-widest uppercase hover:bg-gray-100 transition-all">
              JOIN PETROLCHEM
            </button>
          </div>
          {/* Subtle decoration dots in bottom right */}
          <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-4 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Right Side: Video Feature */}
        <div className="lg:col-span-2 relative min-h-[500px] bg-cover bg-center flex items-end p-12 lg:p-20"
             style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?semt=ais_hybrid&w=740&q=80")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative z-10">
            <div className="relative pl-4 mb-6">
              <div className="absolute left-0 top-0 w-1 h-3 bg-[#BE1E2D]"></div>
              <div className="absolute left-0 top-0 w-3 h-1 bg-[#BE1E2D]"></div>
              <h3 className="text-2xl text-white font-light mb-1">Petrolchem career story</h3>
              <p className="text-gray-300 text-sm font-light">Own your career at Petrolchem</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <button className="w-16 h-16 rounded-full border border-white flex items-center justify-center group hover:bg-[#BE1E2D] hover:border-[#BE1E2D] transition-all">
                <Play size={24} fill="white" className="ml-1" />
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
