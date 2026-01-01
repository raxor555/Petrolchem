
import React, { useState } from 'react';
import { Search, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (page: 'home' | 'production' | 'cmw' | 'downstream') => void;
}

const utilityLinks = [
  { label: 'Green Energy Vision', href: '#' },
  { label: 'Global Impact', href: '#' },
  { label: 'Knowledge Base', href: '#' },
  { label: 'Career Opportunities', href: '#', icon: <ExternalLink size={10} /> },
  { label: 'Stakeholder Portal', href: '#', icon: <ExternalLink size={10} /> },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  const scrollToContact = () => {
    onNavigate('home');
    setTimeout(() => {
      document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Utility Nav */}
      <div className="hidden lg:flex justify-end items-center px-16 py-1.5 bg-white text-[10px] font-semibold text-gray-400 border-b border-orange-50">
        <div className="flex gap-8 items-center">
          {utilityLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#e37249] flex items-center gap-1 transition-all uppercase tracking-widest">
              {link.label} {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b-2 border-orange-100 flex items-stretch h-[70px] md:h-[85px]">
        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center px-6">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#e37249] p-2 hover:bg-orange-50 transition-colors rounded-lg">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Brand Logo Section */}
        <div 
          className="flex-grow lg:flex-grow-0 flex items-center justify-center lg:justify-start lg:pl-16 py-2 border-r border-orange-50 pr-12 cursor-pointer group"
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
        >
          <Logo className="h-10 md:h-12 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-grow justify-center">
          <div className="flex gap-12 xl:gap-16 px-4">
            {/* Production Menu with Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setProdOpen(true)}
              onMouseLeave={() => setProdOpen(false)}
            >
              <button 
                onClick={() => onNavigate('production')}
                className="flex items-center gap-2 text-[14px] font-semibold tracking-[0.2em] text-gray-900 hover:text-[#e37249] transition-all uppercase"
              >
                Production <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-300 ${prodOpen ? 'rotate-180 text-[#e37249]' : ''}`} />
              </button>
              
              {prodOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-[0_25px_60px_rgba(227,114,73,0.2)] border-t-4 border-[#e37249] py-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {/* Non-clickable labels */}
                  <div className="px-6 py-4 text-[12px] font-semibold text-gray-300 uppercase cursor-default border-l-4 border-transparent">
                    Upstream
                  </div>
                  <div className="px-6 py-4 text-[12px] font-semibold text-gray-300 uppercase cursor-default border-l-4 border-transparent">
                    Midstream
                  </div>
                  {/* Clickable Downstream link */}
                  <button 
                    onClick={() => { onNavigate('downstream'); setProdOpen(false); }}
                    className="w-full text-left block px-6 py-4 text-[12px] font-semibold text-[#e37249] hover:bg-orange-50 transition-all uppercase border-l-4 border-transparent hover:border-[#e37249]"
                  >
                    Downstream
                  </button>
                </div>
              )}
            </div>
            
            {/* CM&W Menu - No dropdown now */}
            <button 
              onClick={() => onNavigate('cmw')}
              className="text-[14px] font-semibold tracking-[0.2em] text-gray-900 hover:text-[#e37249] transition-all uppercase py-2"
            >
              CM&W
            </button>
          </div>
        </div>

        {/* Search Call to Action */}
        <button className="bg-[#e37249] w-[70px] md:w-[85px] h-full flex items-center justify-center text-white hover:bg-[#c45a33] transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <Search strokeWidth={2} className="relative z-10 group-hover:scale-110 transition-transform w-6 h-6 md:w-7 md:h-7" />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-40 lg:hidden flex flex-col p-6 md:p-10 overflow-y-auto animate-in slide-in-from-left duration-300">
          <button 
            onClick={() => { onNavigate('production'); setMobileMenuOpen(false); }}
            className="text-left py-6 text-2xl font-semibold text-[#e37249] border-b border-orange-50 uppercase tracking-tighter"
          >
            Production
          </button>

          <button 
            onClick={() => { onNavigate('downstream'); setMobileMenuOpen(false); }}
            className="text-left py-6 text-2xl font-semibold text-gray-900 border-b border-orange-50 uppercase tracking-tighter pl-6 border-l-4 border-[#e37249]"
          >
            Downstream
          </button>
          
          <button 
            onClick={() => { onNavigate('cmw'); setMobileMenuOpen(false); }}
            className="text-left py-6 text-2xl font-semibold text-gray-900 border-b border-orange-50 uppercase tracking-tighter"
          >
            CM&W
          </button>

          <button 
            onClick={scrollToContact}
            className="text-left py-6 text-2xl font-semibold text-[#e37249] border-b border-orange-50 uppercase tracking-tighter"
          >
            Contact Us
          </button>

          <div className="mt-auto pt-10 grid grid-cols-1 gap-6">
            {utilityLinks.map(link => (
              <a key={link.label} href={link.href} className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] hover:text-[#e37249] transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;