
import React from 'react';
import { Target } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Featured Content */}
        <div className="relative min-h-[450px] md:min-h-[650px] flex flex-col justify-end px-6 md:px-16 py-16 md:py-28 bg-cover bg-center group"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop")'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#e37249] via-black/60 to-black/20 group-hover:via-[#e37249]/40 transition-all duration-700"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="relative pl-6 md:pl-8 mb-8 md:mb-10">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-[#e37249] shadow-[0_0_15px_rgba(227,114,73,0.8)]"></div>
              <div className="absolute left-0 top-0 w-10 md:w-12 h-1.5 md:h-2 bg-[#e37249] shadow-[0_0_15px_rgba(227,114,73,0.8)]"></div>
              <h2 className="text-2xl md:text-5xl text-white font-semibold leading-tight uppercase tracking-tight">
                Global Standards, <br /> Local Excellence
              </h2>
            </div>
            <p className="text-orange-50 text-base md:text-lg font-normal mb-8 md:mb-10 leading-relaxed opacity-90">
              Petrolchem bridges the gap between international engineering prowess and localized industrial fulfillment, empowering regional energy independence.
            </p>
            <button 
              onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#e37249] px-8 md:px-10 py-4 font-semibold text-[11px] md:text-[12px] tracking-[0.3em] uppercase hover:bg-[#e37249] hover:text-white transition-all shadow-2xl"
            >
              EXPLORE OUR MISSION
            </button>
          </div>
        </div>

        {/* Strategic Pillars Feed */}
        <div className="p-8 md:p-16 lg:p-28 flex flex-col justify-center bg-[#1b0a05] text-white">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
             <div className="w-8 md:w-12 h-1 bg-[#e37249]"></div>
             <h3 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight">Strategic Pillars</h3>
          </div>
          <div className="space-y-6 md:space-y-10 mb-10 md:mb-12">
            {[
              { title: "IKTVA Excellence", desc: "Advancing local supply chain resilience and value creation." },
              { title: "Innovation Lab", desc: "On-site chemical engineering and real-time process analysis." },
              { title: "Vision 2030", desc: "Committed to the Kingdom's long-term industrial transformation." },
              { title: "Technical Advisory", desc: "Expert-led optimization for complex downstream operations." },
              { title: "HSQE Foundation", desc: "Maintaining a zero-incident culture through rigid safety protocols." }
            ].map((pillar, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6 items-start group cursor-pointer border-b border-white/5 pb-4 md:pb-6">
                <Target className="text-[#e37249] flex-shrink-0 mt-1 w-[18px] h-[18px] md:w-5 md:h-5" />
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider group-hover:text-[#e37249] transition-colors">{pillar.title}</h4>
                  <p className="text-xs md:text-base text-orange-100/60 font-normal group-hover:text-orange-50 transition-all leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#e37249] text-[11px] md:text-[12px] font-semibold tracking-[0.4em] uppercase flex items-center gap-3 hover:translate-x-4 transition-all w-fit text-left"
          >
            ENGAGE OUR SPECIALISTS <span className="text-xl md:text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;