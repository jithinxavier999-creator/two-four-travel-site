import React, { useState } from 'react';
import { TOUR_PACKAGES, COMPANY_DETAILS } from '../data/travelData';
import { TourPackage } from '../types';
import { Star, Clock, MapPin, ArrowRight, Compass, Sparkles, Check } from 'lucide-react';

interface TourPackagesProps {
  onOpenModal: (pkg: TourPackage) => void;
  onInquire: (pkg: TourPackage) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ onOpenModal, onInquire }) => {
  const [selectedState, setSelectedState] = useState<string>('All');

  const states = ['All', 'Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Multi-State'];

  const filteredPackages = selectedState === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((p) => p.category === selectedState || p.states.includes(selectedState));

  return (
    <section id="packages" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>South India Tour Packages</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Handcrafted <span className="text-emerald-600">Travel Packages</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            All packages include private air-conditioned cabs, polite drivers, fuel, toll taxes, state permits, and resort stay options tailored to your preferences.
          </p>
        </div>

        {/* State Filters */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {states.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedState(st)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedState === st
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Hero Photo Header */}
                <div className="relative h-60 overflow-hidden bg-slate-950">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Rating Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold text-xs flex items-center space-x-1 border border-white/10">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{pkg.rating} ({pkg.reviewsCount})</span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-xs shadow-sm">
                    {pkg.duration}
                  </div>

                  {/* Quote Badge Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs text-emerald-300 font-bold flex items-center space-x-1 bg-slate-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>Best Quote on Request</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-slate-500 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{pkg.states.join(', ')}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500">{pkg.subtitle}</p>
                  </div>

                  {/* Overview excerpt */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {pkg.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Top Highlights:</p>
                    <div className="space-y-1 text-xs text-slate-700">
                      {pkg.highlights.slice(0, 3).map((hl, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenModal(pkg)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center space-x-2"
                >
                  <span>View Full Day-Wise Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(`Hello Two Four Travel, I would like to inquire about the tour package: "${pkg.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/40 text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Book / Inquire on WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Tour Request Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-3xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-200">100% Customized Trips</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Want a Tailor-Made South India Itinerary?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50">
                Tell us your travel dates, pickup city, preferred destinations (Munnar, Alleppey, Coorg, Ooty, Madurai, Tirupati), and budget. Our travel experts will create a custom quote within 15 minutes!
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Two Four Travel, I need a 100% customized South India tour itinerary.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-white text-slate-900 hover:bg-emerald-50 font-extrabold text-xs shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Request Custom Itinerary</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
