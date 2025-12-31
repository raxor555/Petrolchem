
import React, { useState } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Utility Nav - Hidden on Mobile */}
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
      <nav className="bg-white border-b border-gray-100 flex items-stretch h-[60px] md:h-auto">
        {/* Mobile Hamburger - Left */}
        <div className="flex lg:hidden items-center px-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Brand - Centered on mobile, Left on Desktop */}
        <div className="flex-grow lg:flex-grow-0 flex items-center justify-center lg:justify-start lg:pl-16 py-2 lg:py-4">
          <div className="text-[20px] md:text-[28px] font-black text-[#BE1E2D] tracking-[-0.05em] leading-none uppercase">
            PETROLCHEM
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center flex-grow justify-center">
          <div className="flex gap-6 px-4">
            {mainNav.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[11px] font-bold tracking-tight text-gray-800 hover:text-[#BE1E2D] transition-colors whitespace-nowrap"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Search Block - Right (Red Square on mobile) */}
        <button className="bg-[#BE1E2D] w-[60px] h-full flex items-center justify-center text-white hover:bg-red-800 transition-colors">
          <Search size={22} strokeWidth={2.5} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 lg:hidden flex flex-col p-6 overflow-y-auto">
          {mainNav.map((item) => (
            <a key={item} href="#" className="py-4 text-lg font-bold border-b border-gray-50 text-gray-800 uppercase tracking-tight" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            {utilityLinks.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-500 hover:text-[#BE1E2D]">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
