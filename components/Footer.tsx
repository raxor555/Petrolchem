
import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      id: 'about',
      title: 'About Petrolchem',
      links: [
        { label: 'Contact us', href: '#' },
        { label: 'Company overview', href: '#' },
        { label: 'Careers ↗', href: '#' },
        { label: 'Investors ↗', href: '#' },
        { label: 'HSE & service quality', href: '#' },
        { label: 'Suppliers', href: '#' },
        { label: 'News & press releases', href: '#' },
        { label: 'Community', href: '#' },
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      links: [
        { label: 'Sustainability overview', href: '#' },
        { label: 'The future of energy', href: '#' },
        { label: 'Guiding principles', href: '#' },
        { label: 'Climate change', href: '#' },
      ]
    },
    {
      id: 'discover',
      title: 'Discover & learn',
      links: [
        { label: 'Media hub', href: '#' },
        { label: 'Resource center', href: '#' },
        { label: 'Safety data sheets ↗', href: '#' },
        { label: 'Petrolchem Labs ↗', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-white pt-10 md:pt-20 pb-4 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Desktop View (Grid) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map(section => (
            <div key={section.id}>
              <h4 className="font-bold text-xs uppercase text-gray-900 mb-6">{section.title}</h4>
              <ul className="space-y-2 text-[11px] text-gray-600 font-medium">
                {section.links.map(link => (
                  <li key={link.label}><a href={link.href} className="hover:text-[#4B1771]">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View (Accordions) */}
        <div className="lg:hidden flex flex-col mb-10">
          {footerSections.map(section => (
            <div key={section.id} className="border-b border-gray-100">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full py-5 flex justify-between items-center text-sm font-bold uppercase tracking-tight text-gray-900"
              >
                {section.title}
                {openSection === section.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSection === section.id && (
                <ul className="pb-5 flex flex-col gap-3">
                  {section.links.map(link => (
                    <li key={link.label}><a href={link.href} className="text-sm text-gray-600 font-medium">{link.label}</a></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-[#4B1771]"><Linkedin size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-[#4B1771]"><Youtube size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-[#4B1771]"><Instagram size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-[#4B1771]"><Facebook size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-[#4B1771]"><Twitter size={22} /></a>
          </div>
          <div className="flex gap-6 text-[12px] md:text-[10px] text-gray-500 font-medium">
            <span>© 2025</span>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
      
      {/* Floating Accessibility Button */}
      <div className="fixed bottom-6 left-6 bg-[#2b3138] w-10 h-10 rounded-full flex items-center justify-center text-white z-50 cursor-pointer shadow-lg">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
