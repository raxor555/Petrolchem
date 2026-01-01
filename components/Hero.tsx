
import React from 'react';
import { ShieldCheck, Cpu, Database, Network } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] md:min-h-screen w-full flex flex-col bg-black overflow-hidden">
      {/* Immersive Background Image Layer */}
      <div className="absolute inset-0">
        <img 
          src="https://res.cloudinary.com/dsscxxw0b/image/upload/v1767245559/9dcd5832-b595-4ab0-9ccf-ac4ecd7e3011.png"
          alt="Petrolchem Industrial Excellence"
          className="w-full h-full object-cover opacity-60 md:opacity-85 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent md:hidden"></div>
      </div>

      {/* High-Contrast Desktop Overlays */}
      <div className="hidden md:block absolute inset-0 bg-black/40 z-10"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#1b0a05] via-[#1b0a05]/70 to-transparent z-10 w-full md:w-3/4 pointer-events-none"></div>

      <div className="relative flex-grow flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 z-20 py-24 md:py-32">
        <div className="max-w-6xl mb-16 md:mb-32">
          <div className="relative pl-6 md:pl-20 pt-4 md:pt-10 mb-8 md:mb-16">
            <div className="absolute left-0 top-0 w-1.5 md:w-4 h-full bg-[#e37249] shadow-[0_0_40px_rgba(227,114,73,0.7)]"></div>
            <div className="absolute left-0 top-0 w-24 md:w-64 h-1.5 md:h-4 bg-[#e37249] shadow-[0_0_40px_rgba(227,114,73,0.7)]"></div>
            
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[145px] font-black leading-[0.9] text-white tracking-tighter uppercase mb-4 md:mb-8">
              Be the <br /> <span className="text-[#e37249]">Future</span>
            </h1>
          </div>
          
          <div className="pl-6 md:pl-20">
            <p className="text-lg sm:text-xl md:text-3xl mb-10 md:mb-16 max-w-3xl text-orange-50 font-normal leading-snug">
              Harnessing radical engineering and integrated intelligence to define the next era of energy transformation.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-[#e37249] text-white hover:bg-white hover:text-[#e37249] w-full sm:w-auto px-12 md:px-24 py-5 md:py-8 font-black text-sm md:text-xl tracking-[0.4em] uppercase transition-all duration-500 shadow-[0_20px_50px_rgba(227,114,73,0.5)] border-2 border-[#e37249]"
            >
              EXPLORE OUR MISSION
            </button>
          </div>
        </div>

        {/* Core Strength Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 max-w-full pl-6 md:pl-20">
          {[
            { icon: <Network />, title: "Radical Unity", desc: "Synthesizing diverse expertise into a single force for innovation." },
            { icon: <ShieldCheck />, title: "Absolute Security", desc: "Safety as our foundational promise to every global ecosystem." },
            { icon: <Database />, title: "Data Integrity", desc: "Delivering truth through metrics and high-fidelity performance." },
            { icon: <Cpu />, title: "Cognitive Tech", desc: "Automating complexity via adaptive logic and engineering." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 group">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl rotate-45 border-4 border-[#e37249] flex items-center justify-center text-[#e37249] bg-[#e37249]/10 group-hover:bg-[#e37249] group-hover:text-white transition-all duration-500 shadow-xl">
                {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 2, className: "-rotate-45 w-6 h-6 md:w-10 md:h-10" })}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm md:text-lg text-orange-100 font-light leading-snug opacity-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;