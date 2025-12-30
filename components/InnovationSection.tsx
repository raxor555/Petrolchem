
import React from 'react';

const InnovationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 bg-[#f4f4f4] rounded-full z-0 opacity-50"></div>
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop" 
                alt="Engineering" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-[#BE1E2D] p-4 md:p-8 text-white z-20">
              <span className="text-3xl md:text-5xl font-black block leading-none">100+</span>
              <span className="text-[10px] md:text-xs tracking-widest font-bold uppercase">Years of Expertise</span>
            </div>
          </div>
          
          <div className="flex flex-col order-1 lg:order-2">
            <span className="text-[#BE1E2D] font-black tracking-widest text-sm mb-4">TECHNOLOGY & DATA</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-tight uppercase">
              A CENTURY OF <br /> BREAKTHROUGHS
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed md:leading-loose mb-8 md:mb-10">
              We leverage data-driven science and superior engineering to solve sub-surface mysteries and surface-level constraints. From drilling fluids to complex well completions, Petrolchem is at the forefront of the digital revolution in energy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="border-l-2 border-slate-100 pl-4">
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm">INTEGRATED SERVICES</h4>
                <p className="text-sm text-slate-500 font-light">End-to-end management of projects from discovery to decommissioning.</p>
              </div>
              <div className="border-l-2 border-slate-100 pl-4">
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm">GLOBAL REACH</h4>
                <p className="text-sm text-slate-500 font-light">Present in over 70 countries, supporting global energy demand efficiently.</p>
              </div>
            </div>
            <button className="self-start px-8 md:px-10 py-3 md:py-4 bg-slate-900 text-white font-bold tracking-widest text-[10px] md:text-xs hover:bg-[#BE1E2D] transition-colors">
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
