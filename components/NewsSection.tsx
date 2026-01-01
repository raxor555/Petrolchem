
import React from 'react';
import { Newspaper } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Featured News */}
        <div className="relative min-h-[450px] md:min-h-[650px] flex flex-col justify-end px-6 md:px-16 py-16 md:py-28 bg-cover bg-center group"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop")'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B1771] via-black/60 to-black/20 group-hover:via-[#4B1771]/40 transition-all duration-700"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="relative pl-6 md:pl-8 mb-8 md:mb-10">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-[#4B1771] shadow-[0_0_15px_rgba(75,23,113,0.8)]"></div>
              <div className="absolute left-0 top-0 w-10 md:w-12 h-1.5 md:h-2 bg-[#4B1771] shadow-[0_0_15px_rgba(75,23,113,0.8)]"></div>
              <h2 className="text-2xl md:text-5xl text-white font-semibold leading-tight uppercase tracking-tight">
                Executive Leadership Expansion: New COO Designated for Global Operations
              </h2>
            </div>
            <p className="text-purple-50 text-base md:text-lg font-normal mb-8 md:mb-10 leading-relaxed opacity-90">
              The company has announced a key executive appointment to oversee international project delivery across all active regions.
            </p>
            <button className="bg-white text-[#4B1771] px-8 md:px-10 py-4 font-semibold text-[11px] md:text-[12px] tracking-[0.3em] uppercase hover:bg-[#4B1771] hover:text-white transition-all shadow-2xl">
              ACCESS PRESS RELEASE
            </button>
          </div>
        </div>

        {/* News Feed */}
        <div className="p-8 md:p-16 lg:p-28 flex flex-col justify-center bg-[#1a0828] text-white">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
             <div className="w-8 md:w-12 h-1 bg-[#4B1771]"></div>
             <h3 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight">Operational Updates</h3>
          </div>
          <div className="space-y-6 md:space-y-10 mb-10 md:mb-12">
            {[
              "Asia-Pacific Strategy: 400 MW Energy commitment finalized for regional growth",
              "Leadership News: Executive team strengthened with key board appointments",
              "Technical Milestone: Autonomous subsea systems reach 10,000 operational hours",
              "Contract Award: Integrated project management secured for Nigerian deepwater field",
              "Service Innovation: LOGIX™ platform updates enhance cementing precision"
            ].map((news, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6 items-start group cursor-pointer border-b border-white/5 pb-4 md:pb-6">
                {/* Fixed invalid md:size prop and used Tailwind for responsive sizing */}
                <Newspaper className="text-[#4B1771] flex-shrink-0 mt-1 w-[18px] h-[18px] md:w-5 md:h-5" />
                <p className="text-sm md:text-lg text-purple-100 font-normal group-hover:text-white group-hover:translate-x-2 transition-all leading-snug">
                  {news}
                </p>
              </div>
            ))}
          </div>
          <a href="#" className="text-[#4B1771] text-[11px] md:text-[12px] font-semibold tracking-[0.4em] uppercase flex items-center gap-3 hover:translate-x-4 transition-all w-fit">
            VIEW NEWS ARCHIVE <span className="text-xl md:text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
