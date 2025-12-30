
import React from 'react';

const InnovationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#f4f4f4] rounded-full z-0 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop" 
              alt="Engineering" 
              className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#BE1E2D] p-8 text-white z-20 hidden md:block">
              <span className="text-5xl font-black block leading-none">100+</span>
              <span className="text-xs tracking-widest font-bold uppercase">Years of Expertise</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[#BE1E2D] font-black tracking-widest text-sm mb-4">TECHNOLOGY & DATA</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              A CENTURY OF <br /> BREAKTHROUGHS
            </h2>
            <p className="text-slate-600 text-lg font-light leading-loose mb-10">
              We leverage data-driven science and superior engineering to solve sub-surface mysteries and surface-level constraints. From drilling fluids to complex well completions, Halliburton is at the forefront of the digital revolution in energy.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">INTEGRATED SERVICES</h4>
                <p className="text-sm text-slate-500 font-light">End-to-end management of projects from discovery to decommissioning.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">GLOBAL REACH</h4>
                <p className="text-sm text-slate-500 font-light">Present in over 70 countries, supporting global energy demand efficiently.</p>
              </div>
            </div>
            <button className="self-start px-10 py-4 bg-slate-900 text-white font-bold tracking-widest text-xs hover:bg-[#BE1E2D] transition-colors">
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
