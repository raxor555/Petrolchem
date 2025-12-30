
import React from 'react';
import { FileText } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-[#f0f3f5] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Featured News */}
        <div className="relative min-h-[500px] flex items-center px-12 py-24 bg-cover bg-center"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop")'}}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-xl">
            <div className="relative pl-6 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BE1E2D]"></div>
              <div className="absolute left-0 top-0 w-6 h-1 bg-[#BE1E2D]"></div>
              <h2 className="text-3xl md:text-4xl text-white font-light leading-tight">
                Shannon Slocum appointed as executive vice president and chief operating officer
              </h2>
            </div>
            <p className="text-gray-200 text-sm font-light mb-8 leading-relaxed">
              Slocum will be responsible for the Company's global operations, as well as business development, health, safety and environment, and global technology.
            </p>
            <button className="bg-white text-black px-6 py-2.5 font-bold text-[10px] tracking-widest uppercase hover:bg-gray-100 transition-all">
              READ PRESS RELEASE
            </button>
          </div>
        </div>

        {/* News Feed */}
        <div className="p-12 lg:p-24 flex flex-col justify-center">
          <h3 className="text-2xl font-light text-gray-800 mb-8">News feed</h3>
          <div className="space-y-6 mb-8">
            {[
              "VoltaGrid and Petrolchem make 400 MW power commitment in the Eastern Hemisphere",
              "Petrolchem appoints Shannon Slocum as executive vice president and chief operating officer",
              "Petrolchem appoints Timothy A. Leach to board of directors",
              "Petrolchem awarded integrated drilling & completion services contract in Nigeria",
              "Petrolchem launches LOGIX™ unit vitality to advance cementing operations"
            ].map((news, idx) => (
              <div key={idx} className="flex gap-4 items-start group cursor-pointer">
                <FileText size={16} className="text-gray-400 group-hover:text-[#BE1E2D] flex-shrink-0 mt-1" />
                <p className="text-[13px] text-gray-600 font-light group-hover:text-black transition-colors leading-tight">
                  {news}
                </p>
              </div>
            ))}
          </div>
          <a href="#" className="text-[#BE1E2D] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 hover:underline">
            SEE ALL NEWS <span className="text-[14px]">›</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
