
import React from 'react';
import { Users, Shield, Zap, Lightbulb } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-56 pb-24 overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.bfldr.com/XG3NESCC/as/xjnj4k3m7q3b3j9n7nwnw/Halliburton_homepage_video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlays */}
      {/* 1. Base Darkening */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* 2. Heavy Left Vignette (60% more intensity as requested) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10 w-3/4 pointer-events-none"></div>
      
      {/* 3. Deep Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] z-10 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 lg:px-20 z-20 text-white">
        <div className="max-w-4xl mb-32">
          <div className="relative pl-12 pt-6 mb-12">
            {/* The Specific Red L-Shape Accent - Slightly larger for better visual balance */}
            <div className="absolute left-0 top-0 w-2.5 h-40 bg-[#BE1E2D]"></div>
            <div className="absolute left-0 top-0 w-32 h-2.5 bg-[#BE1E2D]"></div>
            
            <h1 className="text-5xl md:text-[92px] font-light leading-[1.0] mb-10 tracking-[-0.03em]">
              The Future of <br />
              <span className="font-normal">Energy</span>
            </h1>
          </div>
          
          <div className="pl-12">
            <p className="text-xl md:text-[26px] mb-14 max-w-2xl text-gray-100 font-light leading-snug">
              We collaborate and engineer solutions to maximize asset value for our customers.
            </p>
            <button className="bg-white text-[#BE1E2D] hover:bg-gray-100 px-14 py-5 font-bold text-[15px] tracking-[0.2em] uppercase transition-all shadow-2xl">
              EXPLORE
            </button>
          </div>
        </div>

        {/* Info Grid with Circular Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-32 gap-y-20 max-w-6xl pl-12">
          <div className="flex gap-10 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D] bg-black/20 backdrop-blur-sm">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-light mb-4 tracking-tight">Collaboration</h3>
              <p className="text-[17px] text-gray-200 font-light leading-relaxed max-w-sm">
                We work together with customers and understand that everyone has a role in providing the best solution.
              </p>
            </div>
          </div>
          
          <div className="flex gap-10 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D] bg-black/20 backdrop-blur-sm">
              <Shield size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-light mb-4 tracking-tight">Safety</h3>
              <p className="text-[17px] text-gray-200 font-light leading-relaxed max-w-sm">
                Priority number one. We are focused on our own personal safety as well as the safety of others.
              </p>
            </div>
          </div>

          <div className="flex gap-10 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D] bg-black/20 backdrop-blur-sm">
              <Zap size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-light mb-4 tracking-tight">Reliability</h3>
              <p className="text-[17px] text-gray-200 font-light leading-relaxed max-w-sm">
                We deliver what we promise. We believe the quality of our service defines who we are.
              </p>
            </div>
          </div>

          <div className="flex gap-10 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#BE1E2D] flex items-center justify-center text-[#BE1E2D] bg-black/20 backdrop-blur-sm">
              <Lightbulb size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-light mb-4 tracking-tight">Creativity</h3>
              <p className="text-[17px] text-gray-200 font-light leading-relaxed max-w-sm">
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
