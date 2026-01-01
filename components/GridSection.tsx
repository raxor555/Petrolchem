
import React from 'react';

interface GridItem {
  image: string;
  title: string;
  desc: string;
}

interface GridSectionProps {
  title: string;
  items: GridItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ title, items }) => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="relative pl-8 mb-16">
          <div className="absolute left-0 top-0 w-6 h-2 bg-[#E83E00] shadow-[0_5px_10px_rgba(232,62,0,0.3)]"></div>
          <div className="absolute left-0 top-0 w-2 h-6 bg-[#E83E00] shadow-[0_5px_10px_rgba(232,62,0,0.3)]"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tighter leading-tight uppercase">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-20">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group hover:shadow-[0_20px_50px_rgba(232,62,0,0.1)] transition-all duration-500 rounded-sm bg-white overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-0 left-0 w-5 h-1.5 bg-[#E83E00] z-10 transition-all group-hover:w-full"></div>
                <div className="absolute top-0 left-0 w-1.5 h-5 bg-[#E83E00] z-10 transition-all"></div>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 group-hover:rotate-1" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-5 leading-tight group-hover:text-[#E83E00] transition-colors uppercase min-h-[3.5rem]">{item.title}</h3>
                <p className="text-sm text-gray-500 font-normal leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <a href="#" className="text-[#E83E00] text-[11px] font-semibold tracking-[0.3em] uppercase flex items-center gap-2 hover:translate-x-3 transition-transform">
                  EXPLORE <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-900 hover:bg-[#E83E00] text-white w-full md:w-auto px-16 py-5 text-[11px] font-semibold transition-all uppercase tracking-[0.4em] shadow-xl">
            LOAD MORE INSIGHTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
