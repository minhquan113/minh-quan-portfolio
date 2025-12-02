import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2, Upload } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Avatar Input */}
        <div className="flex items-center gap-3">
          <label className="relative group cursor-pointer w-10 h-10 block" title="Upload Avatar">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleAvatarUpload}
            />
            <div className={`w-full h-full rounded-xl flex items-center justify-center shadow-lg transition-all overflow-hidden border-2 ${avatar ? 'border-brand-500' : 'border-transparent'}`}>
              {avatar ? (
                <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-brand-700 text-white flex items-center justify-center group-hover:shadow-emerald-500/30">
                  <BarChart2 size={20} strokeWidth={2.5} />
                </div>
              )}
              
              {/* Upload Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
                <Upload size={16} className="text-white" />
              </div>
            </div>
          </label>
          
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className="block"
          >
            <h1 className="font-bold text-slate-800 text-lg leading-tight tracking-tight">Minh Quan</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Business Ops / Business Development / Business Intelligence</p>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full bg-brand-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
            
            </a>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-slate-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 font-medium hover:text-brand-700 py-2 border-b border-slate-50"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};