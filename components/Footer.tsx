
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-4 relative overflow-hidden">
      {/* Network Background Pattern Placeholder */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <circle cx="200" cy="100" r="4" fill="red" />
          <circle cx="400" cy="50" r="3" fill="red" />
          <circle cx="600" cy="150" r="4" fill="red" />
          <circle cx="800" cy="80" r="3" fill="red" />
          <circle cx="300" cy="400" r="4" fill="red" />
          <circle cx="500" cy="550" r="5" fill="red" />
          <circle cx="700" cy="350" r="3" fill="red" />
          <line x1="200" y1="100" x2="400" y2="50" stroke="gray" strokeWidth="0.5" />
          <line x1="400" y1="50" x2="600" y2="150" stroke="gray" strokeWidth="0.5" />
          <line x1="600" y1="150" x2="800" y2="80" stroke="gray" strokeWidth="0.5" />
          <line x1="200" y1="100" x2="300" y2="400" stroke="gray" strokeWidth="0.5" />
          <line x1="300" y1="400" x2="500" y2="550" stroke="gray" strokeWidth="0.5" />
          <line x1="500" y1="550" x2="700" y2="350" stroke="gray" strokeWidth="0.5" />
          <line x1="700" y1="350" x2="600" y2="150" stroke="gray" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-bold text-xs uppercase text-gray-900 mb-6">About Petrolchem</h4>
            <ul className="space-y-2 text-[11px] text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#BE1E2D]">Contact us</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Company overview</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Careers <span className="inline-block scale-75">↗</span></a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Investors <span className="inline-block scale-75">↗</span></a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">HSE & service quality</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Suppliers</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">News & press releases</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase text-gray-900 mb-6">Sustainability</h4>
            <ul className="space-y-2 text-[11px] text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#BE1E2D]">Sustainability overview</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">The future of energy</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Guiding principles</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Climate change</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase text-gray-900 mb-6">Discover & learn</h4>
            <ul className="space-y-2 text-[11px] text-gray-600 font-medium">
              <li><a href="#" className="hover:text-[#BE1E2D]">Media hub</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Resource center</a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Safety data sheets <span className="inline-block scale-75">↗</span></a></li>
              <li><a href="#" className="hover:text-[#BE1E2D]">Petrolchem Labs <span className="inline-block scale-75">↗</span></a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-[#BE1E2D]"><Linkedin size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-[#BE1E2D]"><Youtube size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-[#BE1E2D]"><Instagram size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-[#BE1E2D]"><Facebook size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-[#BE1E2D]"><Twitter size={18} /></a>
          </div>
          <div className="flex gap-6 text-[10px] text-gray-500 font-medium">
            <span>©2025</span>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
      
      {/* Bottom utility accessibility icon */}
      <div className="fixed bottom-4 left-4 bg-[#2b3138] w-8 h-8 rounded-full flex items-center justify-center text-white z-50 cursor-pointer">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
