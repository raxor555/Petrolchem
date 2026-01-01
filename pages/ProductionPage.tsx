
import React from 'react';
import { Settings, Droplets, Zap, Shield, ChevronRight, Download } from 'lucide-react';

interface ProductionPageProps {
  onNavigate: (page: 'home' | 'production' | 'cmw' | 'downstream') => void;
}

const ProductionPage: React.FC<ProductionPageProps> = ({ onNavigate }) => {
  const scrollToContact = () => {
    onNavigate('home');
    setTimeout(() => {
      document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Segment Hero */}
      <section className="relative py-32 md:py-56 bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop" 
          alt="Production Facility" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-20">
          <div className="max-w-4xl border-l-8 border-[#e37249] pl-8 md:pl-16">
            <span className="text-[#e37249] font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-6 block">Business Segment</span>
            <h1 className="text-5xl md:text-9xl font-semibold text-white uppercase tracking-tighter leading-none mb-10">
              Production <br /> <span className="text-[#e37249]">Solutions</span>
            </h1>
            <p className="text-xl md:text-3xl text-orange-50 font-light max-w-2xl leading-relaxed">
              Maximizing reservoir recovery and operational efficiency through integrated chemical and mechanical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Focus Section */}
      <section className="py-24 md:py-44">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 mb-10 tracking-tight uppercase leading-none">
                Optimizing the <br /> <span className="text-[#e37249]">Lifecycle</span>
              </h2>
              <div className="w-24 h-2 bg-[#e37249] mb-12"></div>
              <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed mb-8">
                Our production solutions are engineered to address the specific challenges of aging reservoirs, complex completions, and harsh environments. By deploying intelligent chemistry and autonomous mechanical systems, we ensure consistent throughput.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Settings className="text-[#e37249]" />, title: "Artificial Lift", desc: "Advanced ESP and gas lift optimization." },
                  { icon: <Droplets className="text-[#e37249]" />, title: "Fluid Management", desc: "Chemical solutions for separation and flow." },
                  { icon: <Zap className="text-[#e37249]" />, title: "Power Systems", desc: "On-site energy generation and efficiency." },
                  { icon: <Shield className="text-[#e37249]" />, title: "Asset Integrity", desc: "Corrosion and scale inhibition strategies." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 border-b-4 border-transparent hover:border-[#e37249] transition-all group">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542128962-9d50ad7bf714?q=80&w=1200&auto=format&fit=crop" 
                className="rounded-3xl shadow-3xl"
                alt="Production Site"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#e37249] text-white p-12 hidden md:block">
                <p className="text-5xl font-black mb-2">99.8%</p>
                <p className="text-xs tracking-widest uppercase opacity-70">Uptime Reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 md:py-44 bg-[#fffbf9]">
        <div className="container mx-auto px-6 lg:px-20 text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 mb-6 tracking-tight uppercase">Operational Insights</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">Real-world results from our latest production deployments across the globe.</p>
        </div>
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-10 shadow-2xl hover:-translate-y-4 transition-all duration-500 flex flex-col group">
              <span className="text-[#e37249] font-bold text-xs tracking-widest uppercase mb-6 block">Case Study 0{i}</span>
              <h3 className="text-2xl font-semibold mb-6 uppercase tracking-tight leading-tight">North Sea Subsea Recovery Optimization</h3>
              <p className="text-slate-500 mb-10 flex-grow">How integrated umbilical-less systems increased production by 14% in mature offshore fields.</p>
              <button 
                onClick={scrollToContact}
                className="flex items-center gap-3 text-[#e37249] font-bold text-xs tracking-[0.3em] uppercase group-hover:gap-5 transition-all text-left"
              >
                READ REPORT <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Document Downloads */}
      <section className="py-24 bg-[#1b0a05]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="bg-white p-12 md:p-20 shadow-3xl flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Technical Resources</h3>
              <p className="text-slate-500 text-lg">Download the complete Production Solutions brochure and safety specifications.</p>
            </div>
            <button className="bg-[#e37249] text-white px-12 py-6 font-bold text-sm tracking-widest uppercase flex items-center gap-4 hover:bg-black transition-all">
              DOWNLOAD ALL <Download size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionPage;