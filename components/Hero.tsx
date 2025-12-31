
import React from 'react';
import { Users, Shield, Zap, Lightbulb } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-black">
      {/* Background Video Container */}
      <div className="relative w-full aspect-video md:absolute md:inset-0 md:h-full md:aspect-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.bfldr.com/XG3NESCC/as/xjnj4k3m7q3b3j9n7nwnw/Halliburton_homepage_video" type="video/mp4" />
        </video>
        {/* Mobile Vignette - overlay specifically for the video area on top */}
        <div className="absolute inset-0 bg-black/20 md:hidden"></div>
      </div>

      {/* Overlays (Desktop Only or merged with Mobile) */}
      <div className="hidden md:block absolute inset-0 bg-black/40 z-10"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10 w-full md:w-3/4 pointer-events-none"></div>

      <div className="relative flex-grow flex flex-col justify-center px-6 md:px-20 z-20 py-12 md:py-32">
        <div className="max-w-4xl mb-12 md:mb-32">
          <div className="relative pl-6 md:pl-12 pt-4 md:pt-6 mb-8 md:mb-12">
            {/* Red L-Shape Accent */}
            <div className="absolute left-0 top-0 w-1 md:w-2.5 h-20 md:h-40 bg-[#BE1E2D]"></div>
            <div className="absolute left-0 top-0 w-16 md:w-32 h-1 md:h-2.5 bg-[#BE1E2D]"></div>
            
            <h1 className="text-[32px] md:text-[92px] font-light leading-[1.1] md:leading-[1.0] text-white tracking-tight">
              The Future of Energy
            </h1>
          </div>
          
          <div className="pl-6 md:pl-12">
            <p className="text-[16px] md:text-[26px] mb-8 md:mb-14 max-w-2xl text-gray-100 font-light leading-snug">
              We collaborate and engineer solutions to maximize asset value for our customers.
            </p>
            <button className="bg-white text-[#BE1E2D] hover:bg-gray-100 w-full md:w-auto px-10 md:px-14 py-4 md:py-5 font-bold text-[14px] md:text-[15px] tracking-widest uppercase transition-all shadow-xl">
              EXPLORE
            </button>
          </div>
        </div>

        {/* Info Grid - Vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-32 md:gap-y-20 max-w-6xl pl-6 md:pl-12">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D]">
              <Users size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-[15px] md:text-[17px] text-gray-200 font-light leading-relaxed">
                We work together with customers and understand that everyone has a role in providing the best solution.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D]">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Safety</h3>
              <p className="text-[15px] md:text-[17px] text-gray-200 font-light leading-relaxed">
                Priority number one. We are focused on our own personal safety as well as the safety of others.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D]">
              <Zap size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Reliability</h3>
              <p className="text-[15px] md:text-[17px] text-gray-200 font-light leading-relaxed">
                We deliver what we promise. We believe the quality of our service defines who we are.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D]">
              <Lightbulb size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Creativity</h3>
              <p className="text-[15px] md:text-[17px] text-gray-200 font-light leading-relaxed">
                We are resourceful. We are innovative and strive to apply the right technology and solution every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
