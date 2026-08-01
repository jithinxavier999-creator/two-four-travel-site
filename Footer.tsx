import React from 'react';
import { Car, MapPin, Phone, Mail, MessageSquare, Heart, Shield, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center space-x-3">
              <img
                src={COMPANY_DETAILS.logoUrl}
                alt="Two Four Travel Official Logo"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-contain bg-white p-1 border border-slate-700 shadow-md"
              />
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">TWO FOUR </span>
                <span className="font-heading font-extrabold text-2xl text-emerald-500">TRAVEL</span>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Explore Beyond Boundaries</p>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed text-xs">
              Two Four Travel is Kerala’s premier travel agency providing 24/7 airport taxi transfers, customized South India holiday packages, outstation cabs, and luxury mini-buses across Kerala, Tamil Nadu, Andhra Pradesh, and Karnataka.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Fleet & Vehicles</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Tour Packages</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Popular South India Destinations */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Destinations & States</h4>
            <ul className="space-y-2">
              <li className="text-emerald-400 font-semibold">Kerala Tours</li>
              <li className="text-slate-400">Munnar • Alleppey • Wayanad • Kochi</li>
              <li className="text-sky-400 font-semibold pt-1">Tamil Nadu Tours</li>
              <li className="text-slate-400">Madurai • Kanyakumari • Ooty • Chennai</li>
              <li className="text-amber-400 font-semibold pt-1">Karnataka Tours</li>
              <li className="text-slate-400">Coorg • Mysore • Bangalore • Hampi</li>
              <li className="text-indigo-400 font-semibold pt-1">Andhra Pradesh Tours</li>
              <li className="text-slate-400">Vizag • Araku Valley • Tirupati</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Direct Hotline</h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Primary Booking Phone</p>
                <a href={`tel:${COMPANY_DETAILS.primaryPhone}`} className="font-heading font-extrabold text-base text-emerald-400 hover:underline">
                  {COMPANY_DETAILS.primaryPhone}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Secondary Hotline</p>
                <a href={`tel:${COMPANY_DETAILS.secondaryPhone}`} className="font-heading font-extrabold text-base text-sky-400 hover:underline">
                  {COMPANY_DETAILS.secondaryPhone}
                </a>
              </div>

              <p className="text-[11px] text-slate-400 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Near Cochin Intl Airport, Nedumbassery, Kerala</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} Two Four Travel. All Rights Reserved. South India's Trusted Taxi & Tour Services.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-300 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">24x7 Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
