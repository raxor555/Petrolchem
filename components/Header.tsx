
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ExternalLink } from 'lucide-react';

const utilityLinks = [
  { label: 'Low carbon solutions', href: '#' },
  { label: 'Sustainability', href: '#' },
  { label: 'Media hub', href: '#' },
  { label: 'Careers', href: '#', icon: <ExternalLink size={10} /> },
  { label: 'Investors', href: '#', icon: <ExternalLink size={10} /> },
];

const mainNav = [
  'Subsurface', 'Well construction', 'Completions', 'Production', 'Abandonment', 'Integrated services', 'Software'
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Utility Nav */}
      <div className="hidden lg:flex justify-end items-center px-16 py-1 bg-white text-[10px] font-normal text-gray-600">
        <div className="flex gap-5 items-center">
          {utilityLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-red-600 flex items-center gap-1 transition-colors">
              {link.label} {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white border-b border-gray-100 transition-all duration-300 flex justify-between items-stretch`}>
        {/* Brand */}
        <div className="flex items-center pl-16 py-4">
          <div className="text-[28px] font-black text-[#BE1E2D] tracking-[-0.05em] leading-none">
            PETROLCHEM
          </div>
        </div>

        {/* Desktop Links & Search */}
        <div className="hidden lg:flex items-center">
          <div className="flex gap-8 px-8 h-full items-center">
            {mainNav.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[12px] font-medium tracking-normal text-gray-800 hover:text-[#BE1E2D] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Distinct Search Block */}
          <button className="bg-[#BE1E2D] w-[60px] h-[60px] flex items-center justify-center text-white hover:bg-red-800 transition-colors">
            <Search size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center pr-6">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 lg:hidden flex flex-col p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          {mainNav.map((item) => (
            <a key={item} href="#" className="py-4 text-xl font-bold border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            {utilityLinks.map(link => (
              <a key={link.label} href={link.href} className="text-sm text-gray-500">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
