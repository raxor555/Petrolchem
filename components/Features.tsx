
import React from 'react';
import { ArrowRight } from 'lucide-react';

const featureData = [
  {
    title: "DIGITAL TRANSFORMATION",
    desc: "Optimizing the lifecycle of the well with real-time data and AI-driven insights.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "View Digital Solutions"
  },
  {
    title: "SUSTAINABILITY",
    desc: "Committed to minimizing environmental impact through carbon capture and alternative energy.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    link: "Explore Sustainability"
  },
  {
    title: "OPERATIONAL EXCELLENCE",
    desc: "Delivering safety and efficiency across every project, everywhere in the world.",
    img: "https://thebuildingpeople.com/wp-content/uploads/2022/09/AdobeStock_512756773-1024x512.jpeg",
    link: "Learn About Our Impact"
  }
];

const FeatureCard: React.FC<{ data: typeof featureData[0] }> = ({ data }) => (
  <div className="group overflow-hidden bg-white shadow-lg flex flex-col h-full border-b-4 border-transparent hover:border-[#BE1E2D] transition-all duration-300">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={data.img} 
        alt={data.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <h3 className="text-xl font-black mb-4 tracking-tighter text-slate-800">{data.title}</h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed font-light">
        {data.desc}
      </p>
      <a href="#" className="flex items-center gap-2 text-[#BE1E2D] font-bold text-sm tracking-widest group/link mt-auto">
        {data.link.toUpperCase()}
        <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
      </a>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight">
              ENGINEERED TO <br className="hidden md:block" /> LEAD THE INDUSTRY
            </h2>
            <div className="w-20 h-2 bg-[#BE1E2D] mb-6"></div>
            <p className="text-slate-600 font-light text-lg">
              Our core values of integrity and safety drive us to provide sustainable solutions for the world's most complex energy challenges.
            </p>
          </div>
          <button className="text-sm font-bold tracking-[0.2em] border-b-2 border-[#BE1E2D] pb-1 hover:text-[#BE1E2D] transition-colors whitespace-nowrap">
            VIEW ALL HIGHLIGHTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, i) => (
            <FeatureCard key={i} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
