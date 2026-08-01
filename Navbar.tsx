import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Car, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/travelData';

interface NavbarProps {
  onOpenBookingModal: (prefillData?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100' : 'bg-slate-900/80 backdrop-blur-md py-3 border-b border-white/10'
    }`}>
      {/* Top Banner Bar for Phones */}
      <div className={`hidden lg:block border-b transition-colors duration-300 pb-2 mb-2 ${
        isScrolled ? 'border-slate-100 text-slate-600' : 'border-white/10 text-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>South India Coverage: Kerala | Tamil Nadu | Andhra Pradesh | Karnataka</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              24/7 Dispatch Active
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a href={`tel:${COMPANY_DETAILS.primaryPhone}`} className="flex items-center space-x-1.5 hover:text-emerald-500 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{COMPANY_DETAILS.formattedPrimaryPhone}</span>
            </a>
            <a href={`tel:${COMPANY_DETAILS.secondaryPhone}`} className="flex items-center space-x-1.5 hover:text-sky-500 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-500" />
              <span>{COMPANY_DETAILS.formattedSecondaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Two Four Travel, I would like to inquire about taxi/tour booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-500 font-semibold hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <img
              src={COMPANY_DETAILS.logoUrl}
              alt="Two Four Travel Official Logo"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-xl object-contain bg-white p-0.5 border border-slate-200/50 shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <div>
              <div className="flex items-center space-x-1">
                <span className={`font-heading font-extrabold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  TWO FOUR
                </span>
                <span className="font-heading font-extrabold text-xl text-emerald-500">
                  TRAVEL
                </span>
              </div>
              <p className={`text-[10px] font-semibold tracking-wider uppercase -mt-1 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Explore Beyond Boundaries
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                    : 'text-slate-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-emerald-500/40 text-emerald-600 bg-emerald-50/80 hover:bg-emerald-100 transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_DETAILS.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-sky-500 hover:from-emerald-500 hover:to-sky-400 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all active:scale-95"
            >
              <span>Instant Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500 text-white shadow-xs"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isScrolled
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-white/10 border-white/20 text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-6 transition-all animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone}`}
              className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Two Four Travel, I need a taxi/tour quote.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Numbers: <a href={`tel:${COMPANY_DETAILS.primaryPhone}`} className="text-emerald-400 font-semibold">{COMPANY_DETAILS.primaryPhone}</a> | <a href={`tel:${COMPANY_DETAILS.secondaryPhone}`} className="text-sky-400 font-semibold">{COMPANY_DETAILS.secondaryPhone}</a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
