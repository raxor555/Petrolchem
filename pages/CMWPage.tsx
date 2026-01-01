
import React from 'react';
import { Droplets, Warehouse, ShieldAlert, Zap, Factory } from 'lucide-react';

const CMWPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Redesigned Hero Section - Updated with requested image */}
      <section className="relative py-32 md:py-48 flex items-center bg-black overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dsscxxw0b/image/upload/v1767245960/76d6c805-a6d6-4a5c-bb17-ff03c974dcdb.png" 
          alt="Chemical Manufacturing & Warehousing" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11051b] via-[#11051b]/40 to-transparent"></div>
        
        <div className="relative container mx-auto px-8 lg:px-20 z-10">
          <div className="max-w-4xl relative pl-10 md:pl-24">
            <div className="absolute left-0 top-0 w-2 md:w-3 h-24 md:h-48 bg-[#4B1771] shadow-[0_0_30px_rgba(75,23,113,0.5)]"></div>
            <div className="absolute left-0 top-0 w-20 md:w-40 h-1.5 md:h-2 bg-[#4B1771] shadow-[0_0_30px_rgba(75,23,113,0.5)]"></div>
            
            <h1 className="text-5xl md:text-8xl font-semibold text-white uppercase tracking-tight leading-[1.1] mb-8">
              CM&W <br /> <span className="text-[#4B1771]">Solutions</span>
            </h1>
            <p className="text-xl md:text-3xl text-purple-50 font-normal max-w-3xl leading-relaxed">
              Propelling the Vision 2030 mission through innovative chemical localization and industrial autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <span className="text-[#4B1771] font-semibold tracking-[0.4em] text-sm uppercase mb-6 block">Strategic Localization</span>
              <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8 tracking-tight uppercase leading-[1.1]">
                Forged for the <br /> <span className="text-[#4B1771]">Kingdom’s Vision</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed mb-8">
                PETROLCHEM was initiated as a cornerstone of the IKTVA framework and Kingdom’s Vision 2030. Our primary objective is the localization of advanced manufacturing, fueling national economic resilience while elevating the capabilities of local industrial sectors.
              </p>
              <p className="text-slate-500 text-lg font-normal leading-relaxed">
                We are a recognized authority in the creation of sophisticated oilfield specialty chemicals, engineered with precision to address the evolving complexities of the modern energy landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="bg-[#fbf9ff] p-12 border-t-8 border-[#4B1771] shadow-2xl">
                <Zap size={40} className="text-[#4B1771] mb-6" />
                <h3 className="font-semibold text-xl mb-4 uppercase tracking-tight">Upstream</h3>
                <ul className="space-y-4 text-slate-500 font-normal">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Drilling Enhancements</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Cementing Solutions</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Stimulation Agents</li>
                </ul>
              </div>
              <div className="bg-[#fbf9ff] p-12 border-t-8 border-[#4B1771] shadow-2xl">
                <Droplets size={40} className="text-[#4B1771] mb-6" />
                <h3 className="font-semibold text-xl mb-4 uppercase tracking-tight">Midstream</h3>
                <ul className="space-y-4 text-slate-500 font-normal">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Production Chem</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Water Remediation</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Industrial Sanitation</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#4B1771] rounded-full"></span> Pipeline Lifecycle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Blending Section - Updated with requested image */}
      <section className="py-24 md:py-44 bg-[#fbf9ff] overflow-hidden">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4B1771]/10 rounded-full z-0 group-hover:scale-125 transition-transform duration-1000"></div>
              <img 
                src="https://res.cloudinary.com/dsscxxw0b/image/upload/v1767246076/e21ed9f7-b26d-4011-821d-3615a34cabd8.png" 
                alt="Petrolchem Manufacturing Excellence" 
                className="relative z-10 rounded-2xl shadow-3xl border-8 border-white object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#4B1771] text-white p-12 z-20 shadow-2xl rounded-sm">
                <Factory size={48} className="mb-4" />
                <p className="text-xl font-semibold uppercase tracking-tight">Precision <br /> Blending</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#4B1771] font-semibold tracking-[0.4em] text-sm uppercase mb-6 block">Confidentiality & Quality</span>
              <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 mb-8 tracking-tight uppercase leading-[1.1]">
                Toll Blending <br /> <span className="text-[#4B1771]">& Manufacturing</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed mb-10">
                We specialize in delivering high-fidelity Toll Blending services that exceed global industry benchmarks. Every formulation is meticulously managed to your exact parameters, with an absolute focus on safeguarding your intellectual property and process integrity.
              </p>
              <button className="bg-black text-white px-12 py-5 font-semibold text-xs tracking-[0.3em] uppercase hover:bg-[#4B1771] transition-all shadow-xl">
                REQUEST TECHNICAL SPECS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Storage Section */}
      <section className="py-24 md:py-44 bg-white">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 mb-6 tracking-tight uppercase leading-none">
              Strategic <span className="text-[#4B1771]">Logistics Hub</span>
            </h2>
            <p className="text-slate-500 font-normal text-xl max-w-3xl">
              Engineered for absolute safety and operational flow, our warehouse infrastructure meets the most rigorous HSQE requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
            <div className="flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" 
                alt="Storage Tanks Facility" 
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl mb-10"
              />
              <div className="bg-[#fafbfc] p-12 flex-grow border-l-8 border-[#4B1771] shadow-xl">
                <h4 className="text-2xl font-semibold mb-6 uppercase tracking-tight text-[#4B1771]">Facility Intelligence</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <ShieldAlert size={24} className="text-[#4B1771] flex-shrink-0" />
                    <p className="text-slate-600 font-normal leading-snug">State-of-the-art fire suppression systems integrated with high-velocity ventilation arrays.</p>
                  </li>
                  <li className="flex gap-4">
                    <Warehouse size={24} className="text-[#4B1771] flex-shrink-0" />
                    <p className="text-slate-600 font-normal leading-snug">Spanning over 2,000 m² of specialized storage, optimized for both fluid and solid material management.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#1a0828] p-14 text-white mb-10 rounded-2xl shadow-3xl relative overflow-hidden flex-grow flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#4B1771]/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <span className="text-[#4B1771] font-semibold tracking-[0.4em] text-xs uppercase mb-12 block">Capacity Metrics</span>
                
                <div className="space-y-16">
                  <div className="flex items-end gap-8">
                    <span className="text-7xl md:text-9xl font-semibold text-white leading-none tracking-tighter">2,880</span>
                    <div className="pb-3">
                      <p className="text-[#4B1771] font-semibold uppercase text-sm">Units</p>
                      <p className="text-purple-100 font-normal text-sm">55gal Drum Storage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-end gap-8">
                    <span className="text-7xl md:text-9xl font-semibold text-[#4B1771] leading-none tracking-tighter">320KL</span>
                    <div className="pb-3">
                      <p className="text-white font-semibold uppercase text-sm">Total Bulk</p>
                      <p className="text-purple-100 font-normal text-sm">In 4x 80KL Reinforced Tanks</p>
                    </div>
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" 
                alt="Warehouse Interior" 
                className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#4B1771] text-white">
        <div className="container mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-tight uppercase">Secure Your Localization Strategy</h2>
          <p className="text-purple-100 text-xl font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Petrolchem to elevate your chemical manufacturing and storage performance. Our teams are ready to deploy.
          </p>
          <button className="bg-white text-[#4B1771] px-16 py-6 font-semibold text-sm tracking-[0.4em] uppercase hover:bg-black hover:text-white transition-all shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            CONNECT WITH EXPERTS
          </button>
        </div>
      </section>
    </div>
  );
};

export default CMWPage;
