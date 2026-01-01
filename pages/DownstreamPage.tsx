
import React from 'react';
import { Beaker, Waves, Fuel, ChevronRight, Download, Microscope } from 'lucide-react';

const DownstreamPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Redesigned Hero Section - Updated with requested image */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0d0414] overflow-hidden py-32 md:py-48">
        <img 
          src="https://res.cloudinary.com/dsscxxw0b/image/upload/v1767245745/989de171-dec9-4c36-a5eb-8d333ef15d4d.png" 
          alt="Downstream Refining Excellence" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0414] via-[#0d0414]/60 to-transparent"></div>
        
        <div className="relative container mx-auto px-8 lg:px-20 z-10">
          <div className="max-w-5xl relative pl-10 md:pl-24">
            {/* Elegant Brand Accents */}
            <div className="absolute left-0 top-0 w-1.5 md:w-2 h-32 md:h-56 bg-[#4B1771] shadow-[0_0_40px_rgba(75,23,113,0.5)]"></div>
            <div className="absolute left-0 top-0 w-24 md:w-48 h-1.5 md:h-2 bg-[#4B1771] shadow-[0_0_40px_rgba(75,23,113,0.5)]"></div>
            
            <div className="mb-10">
              <span className="text-[#4B1771] font-medium tracking-[0.4em] text-xs md:text-sm uppercase block mb-6">Specialty Chemicals</span>
              <h1 className="text-5xl md:text-8xl font-semibold text-white uppercase tracking-tight leading-[1.1]">
                Downstream <br /> 
                <span className="text-[#4B1771]">Operations</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-2xl text-purple-100/90 font-normal max-w-3xl leading-relaxed mb-12">
              Petrolchem enhances downstream productivity through world-class water and process treatment programs, delivering specialized chemistries and expert stream analysis.
            </p>
            
            <button className="bg-[#4B1771] text-white px-12 py-6 font-semibold text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#4B1771] transition-all shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex items-center gap-4">
              TALK TO AN EXPERT <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Core Capability Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="relative group">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#4B1771]/10 rounded-full z-0 group-hover:scale-125 transition-transform duration-1000"></div>
               <img 
                 src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=1200&auto=format&fit=crop" 
                 alt="Laboratory Analysis" 
                 className="relative z-10 rounded-2xl shadow-3xl border-8 border-white"
               />
               <div className="absolute -bottom-8 -left-8 bg-[#4B1771] text-white p-10 z-20 shadow-2xl rounded-sm">
                 <Microscope size={40} className="mb-4" />
                 <p className="text-xl font-semibold uppercase tracking-tight leading-none">Process <br /> Intelligence</p>
               </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-10 tracking-tight uppercase leading-[1.1]">
                Expert Analysis of <br /> <span className="text-[#4B1771]">Process Streams</span>
              </h2>
              <div className="w-20 h-2 bg-[#4B1771] mb-10"></div>
              <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed mb-8">
                To help refiners, petrochemical plants and heavy industrial operators meet performance and cost objectives, Petrolchem provides customized water treatment, process treatment, and finished fuel additive solutions.
              </p>
              <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed mb-12">
                Our on-site specialists evaluate the critical mechanical, operational, and chemical shifts required to safeguard your assets, boost production throughput, and maximize the long-term value of your equipment.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xs font-semibold tracking-[0.4em] uppercase text-gray-400 mb-6">Related Resources</h4>
                {[
                  "Refining capabilities - Technical Data Sheet",
                  "Ammonia and fertilizer industrial treatment overview",
                  "Petrochemical process treatment solutions catalog"
                ].map((item, i) => (
                  <a key={i} href="#" className="flex items-center gap-4 group p-5 border border-gray-100 hover:border-[#4B1771] transition-all hover:bg-purple-50/30">
                    <Download size={20} className="text-[#4B1771]" />
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-[#4B1771] uppercase tracking-wide">{item}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Spectrum Grid */}
      <section className="py-24 md:py-40 bg-[#fbf9ff]">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#4B1771] font-semibold tracking-[0.5em] text-sm uppercase mb-6 block">Industrial Solutions</span>
            <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 mb-8 tracking-tight uppercase leading-none">
              Strategic <span className="text-[#4B1771]">Integrity</span>
            </h2>
            <p className="text-slate-500 font-normal text-xl leading-relaxed">
              Targeted chemistries designed for the most demanding downstream environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="bg-white p-12 shadow-[0_30px_80px_rgba(75,23,113,0.06)] border-b-8 border-transparent hover:border-[#4B1771] transition-all duration-500 group">
              <div className="w-16 h-16 bg-purple-50 flex items-center justify-center text-[#4B1771] mb-8 group-hover:bg-[#4B1771] group-hover:text-white transition-all duration-500">
                <Waves size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 uppercase tracking-tight">Water Treatment</h3>
              <p className="text-slate-500 font-normal text-lg leading-relaxed mb-10">
                Mechanical, operational and chemical solutions specifically engineered for heavy industrial and downstream operations.
              </p>
              <a href="#" className="text-[#4B1771] font-semibold text-xs tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE <ChevronRight size={16} />
              </a>
            </div>

            <div className="bg-white p-12 shadow-[0_30px_80px_rgba(75,23,113,0.06)] border-b-8 border-transparent hover:border-[#4B1771] transition-all duration-500 group">
              <div className="w-16 h-16 bg-purple-50 flex items-center justify-center text-[#4B1771] mb-8 group-hover:bg-[#4B1771] group-hover:text-white transition-all duration-500">
                <Beaker size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 uppercase tracking-tight">Process Treatment</h3>
              <p className="text-slate-500 font-normal text-lg leading-relaxed mb-10">
                Customized mechanical and chemical interventions designed for the unique constraints of downstream operators.
              </p>
              <a href="#" className="text-[#4B1771] font-semibold text-xs tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE <ChevronRight size={16} />
              </a>
            </div>

            <div className="bg-white p-12 shadow-[0_30px_80px_rgba(75,23,113,0.06)] border-b-8 border-transparent hover:border-[#4B1771] transition-all duration-500 group">
              <div className="w-16 h-16 bg-purple-50 flex items-center justify-center text-[#4B1771] mb-8 group-hover:bg-[#4B1771] group-hover:text-white transition-all duration-500">
                <Fuel size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 uppercase tracking-tight">Fuel Additives</h3>
              <p className="text-slate-500 font-normal text-lg leading-relaxed mb-10">
                Broad selection of performance additives backed by experienced personnel, specialized equipment, and field support.
              </p>
              <a href="#" className="text-[#4B1771] font-semibold text-xs tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-[#1a0828] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4B1771]/10 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-8 lg:px-20 text-center relative z-10">
          <div className="w-20 h-1.5 bg-[#4B1771] mx-auto mb-10 shadow-[0_0_20px_rgba(75,23,113,0.5)]"></div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-10 tracking-tight uppercase leading-none">
            Ready to <span className="text-[#4B1771]">Take the Next Step?</span>
          </h2>
          <p className="text-purple-100/70 text-xl md:text-2xl font-normal mb-14 max-w-3xl mx-auto leading-relaxed">
            Discuss your downstream optimization strategy with a Petrolchem expert and unlock immediate operational value.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-[#4B1771] text-white px-16 py-6 font-semibold text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-[#4B1771] transition-all shadow-3xl w-full md:w-auto">
              GET IN TOUCH
            </button>
            <button className="bg-transparent border-2 border-white/20 text-white px-16 py-6 font-semibold text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all w-full md:w-auto">
              VIEW CASE STUDIES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownstreamPage;
