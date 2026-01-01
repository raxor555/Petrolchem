
import React from 'react';

const InnovationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-44 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="absolute -top-10 -left-10 md:-top-14 md:-left-14 w-40 md:w-56 h-40 md:h-56 bg-[#e37249]/10 rounded-full z-0 group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 md:border-[12px] border-white ring-1 ring-orange-50">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop" 
                alt="High-Tech Manufacturing" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-[#e37249] p-8 md:p-14 text-white z-20 shadow-2xl rounded-sm">
              <span className="text-4xl md:text-8xl font-semibold block leading-none tracking-tighter">100+</span>
              <span className="text-[10px] md:text-sm tracking-[0.4em] font-semibold uppercase mt-2 md:mt-4 block text-orange-200">Decades of Discovery</span>
            </div>
          </div>
          
          <div className="flex flex-col order-1 lg:order-2">
            <span className="text-[#e37249] font-semibold tracking-[0.5em] text-xs md:text-base mb-6 md:mb-8 uppercase flex items-center gap-4">
              <span className="w-8 md:w-12 h-1 bg-[#e37249]"></span> Superior Intelligence
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-semibold text-slate-900 mb-8 md:mb-16 tracking-tighter leading-[1.1] md:leading-[0.8] uppercase">
              RECODING <br /> <span className="text-[#e37249]">THE CORE</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-2xl font-normal leading-relaxed mb-10 md:mb-16">
              "We don't just solve problems; we redefine the parameters of possibility."
            </p>
            <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed mb-10">
              Our legacy is built on the pursuit of precision. By merging historical data with real-time analytics, we have created an energy ecosystem that is both resilient and revolutionary.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-14 mb-10 md:mb-20">
              <div className="border-l-4 md:border-l-8 border-[#e37249] pl-6 md:pl-8 transition-all hover:bg-orange-50/50 py-2">
                <h4 className="font-semibold text-slate-900 mb-2 md:mb-4 uppercase text-xs tracking-widest">Holistic Integration</h4>
                <p className="text-sm md:text-base text-slate-500 font-normal leading-snug">Managing every phase of production with unmatched technological cohesion.</p>
              </div>
              <div className="border-l-4 md:border-l-8 border-slate-100 hover:border-[#e37249] pl-6 md:pl-8 transition-all hover:bg-orange-50/50 py-2">
                <h4 className="font-semibold text-slate-900 mb-2 md:mb-4 uppercase text-xs tracking-widest">Boundaryless Reach</h4>
                <p className="text-sm md:text-base text-slate-500 font-normal leading-snug">Leveraging a massive international network to fulfill local demands with global speed.</p>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="self-start px-12 md:px-24 py-4 md:py-6 bg-[#e37249] text-white font-semibold tracking-[0.4em] text-[10px] md:text-xs hover:bg-black transition-all shadow-xl uppercase"
            >
              EXPLORE OUR LINEAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;