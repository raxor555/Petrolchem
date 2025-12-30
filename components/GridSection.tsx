
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative pl-6 mb-12">
          <div className="absolute left-0 top-0 w-4 h-1 bg-[#BE1E2D]"></div>
          <div className="absolute left-0 top-0 w-1 h-4 bg-[#BE1E2D]"></div>
          <h2 className="text-3xl font-light text-gray-800 tracking-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-0 left-0 w-3 h-1 bg-[#BE1E2D] z-10"></div>
                <div className="absolute top-0 left-0 w-1 h-3 bg-[#BE1E2D] z-10"></div>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight min-h-[3.5rem]">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <a href="#" className="text-[#BE1E2D] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 hover:underline">
                  EXPLORE <span className="text-[14px]">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-12 py-2 text-xs font-medium transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
