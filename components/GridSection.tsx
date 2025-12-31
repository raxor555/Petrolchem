
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
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative pl-6 mb-10">
          <div className="absolute left-0 top-0 w-4 h-1 bg-[#BE1E2D]"></div>
          <div className="absolute left-0 top-0 w-1 h-4 bg-[#BE1E2D]"></div>
          <h2 className="text-[28px] md:text-3xl font-light text-gray-800 tracking-tight leading-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-0 left-0 w-3 h-1 bg-[#BE1E2D] z-10"></div>
                <div className="absolute top-0 left-0 w-1 h-3 bg-[#BE1E2D] z-10"></div>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-[18px] md:text-xl font-medium text-gray-900 mb-4 leading-tight min-h-auto md:min-h-[3.5rem]">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <a href="#" className="text-[#BE1E2D] text-[11px] font-bold tracking-[0.1em] uppercase flex items-center gap-1 hover:underline">
                  EXPLORE <span className="text-[16px]">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-full md:w-auto px-12 py-3 text-xs font-bold transition-colors uppercase tracking-widest">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
