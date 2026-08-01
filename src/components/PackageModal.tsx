import React from 'react';
import { X, Calendar, MapPin, CheckCircle, Star, Phone, MessageSquare, Clock, Users, ArrowRight } from 'lucide-react';
import { TourPackage } from '../types';
import { COMPANY_DETAILS } from '../data/travelData';

interface PackageModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  onInquire: (pkg: TourPackage) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose, onInquire }) => {
  if (!pkg) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello Two Four Travel, I am interested in the tour package: "${pkg.title}" (${pkg.duration}). Please send detailed pricing and availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200">
        
        {/* Modal Hero Header */}
        <div className="relative h-64 sm:h-72 bg-slate-950 shrink-0">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-xs">
                {pkg.category} Package
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-xs flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{pkg.duration}</span>
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">{pkg.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-800">
          
          {/* Pricing & Rating Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
            <div>
              <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Customized Tariff</p>
              <p className="font-heading font-extrabold text-xl text-emerald-700">Best Price Guaranteed on Request</p>
              <p className="text-[11px] text-slate-500">Includes private vehicle, driver batta, fuel, tolls & stay</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-amber-500 font-bold text-sm bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{pkg.rating} ({pkg.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-lg text-slate-900">Package Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{pkg.overview}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-slate-900">Key Tour Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-day Itinerary */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-slate-900">Day-Wise Detailed Itinerary</h3>
            <div className="space-y-3">
              {pkg.itinerary.map((dayItem) => (
                <div key={dayItem.day} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white font-extrabold text-xs">
                      Day {dayItem.day}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{dayItem.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-1">{dayItem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-slate-900">Package Inclusions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pkg.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_DETAILS.primaryPhone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call: {COMPANY_DETAILS.primaryPhone}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire Package on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
