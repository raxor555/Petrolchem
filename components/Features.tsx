
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const featureData = [
  {
    title: "COGNITIVE WELLBORE",
    desc: "Implementing adaptive machine learning to decode subsurface mysteries and optimize production cycles in real-time.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "Inspect Technology"
  },
  {
    title: "PLANETARY STEWARDSHIP",
    desc: "Advancing the ecological frontier with high-efficiency carbon capture and zero-waste industrial processes.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    link: "View Sustainability Pulse"
  },
  {
    title: "PRODUCTION MASTERMIND",
    desc: "Achieving peak efficiency through hyper-localized strategy and seamless global resource orchestration.",
    img: "https://thebuildingpeople.com/wp-content/uploads/2022/09/AdobeStock_512756773-1024x512.jpeg",
    link: "Map Our Presence"
  }
];

const FeatureCard: React.FC<{ data: typeof featureData[0] }> = ({ data }) => (
  <div className="group overflow-hidden bg-white shadow-[0_30px_70px_rgba(75,23,113,0.05)] flex flex-col h-full border-t-[12px] border-transparent hover:border-[#4B1771] transition-all duration-700 rounded-lg">
    <div className="relative h-80 overflow-hidden">
      <div className="absolute inset-0 bg-[#4B1771]/0 group-hover:bg-[#4B1771]/30 transition-all duration-700 z-10"></div>
      <img 
        src={data.img} 
        alt={data.title} 
        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
      />
    </div>
    <div className="p-10 md:p-12 flex flex-col flex-grow bg-white">
      <h3 className="text-2xl font-semibold mb-6 tracking-tight text-[#4B1771] uppercase leading-none">{data.title}</h3>
      <p className="text-slate-600 mb-10 flex-grow leading-relaxed font-normal text-[17px]">
        {data.desc}
      </p>
      <a href="#" className="flex items-center gap-4 text-[#4B1771] font-semibold text-sm tracking-[0.3em] group/link mt-auto hover:gap-6 transition-all">
        {data.link.toUpperCase()}
        <ArrowUpRight size={22} className="group-hover/link:-translate-y-2 group-hover/link:translate-x-2 transition-transform text-[#4B1771]" />
      </a>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#fbf9ff]">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-semibold text-slate-900 mb-10 tracking-tighter uppercase leading-[0.85]">
              ARCHITECTS OF <br className="hidden md:block" /> <span className="text-[#4B1771]">GLOBAL VELOCITY</span>
            </h2>
            <div className="w-32 h-4 bg-[#4B1771] mb-10 shadow-[0_10px_25px_rgba(75,23,113,0.4)]"></div>
            <p className="text-slate-600 font-normal text-2xl leading-relaxed max-w-2xl">
              We redefine performance through the lens of technical mastery and ecological balance.
            </p>
          </div>
          <button className="text-sm font-semibold tracking-[0.4em] text-white bg-[#4B1771] px-10 py-5 hover:bg-black transition-all shadow-xl uppercase">
            FULL SERVICE SPECTRUM
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {featureData.map((feature, i) => (
            <FeatureCard key={i} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
