import React, { useState } from 'react';
import { Car, Users, Luggage, Wind, Check, Shield, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { FLEET_DATA, COMPANY_DETAILS } from '../data/travelData';
import { Vehicle } from '../types';

interface FleetProps {
  onBookVehicle: (vehicle: Vehicle) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onBookVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'hatchback', label: 'Hatchback' },
    { id: 'sedan', label: 'Sedan' },
    { id: '7-seater', label: '7 Seater SUV' },
    { id: 'premium-suv', label: 'Premium SUV' },
    { id: 'urbania', label: 'Urbania & Minibus' },
    { id: 'luxury-vehicles', label: 'Luxury Special' },
  ];

  const filteredFleet = activeCategory === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter((v) => v.id === activeCategory);

  return (
    <section id="fleet" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-emerald-600" />
            <span>Well-Maintained Modern Fleet</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Preferred <span className="text-emerald-600">Vehicle</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            All vehicles are equipped with dual AC, GPS tracking, plush seating, and driven by experienced, polite drivers trained for South Indian highways & mountain curves.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-52 bg-slate-900 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
                      {vehicle.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">{vehicle.category}</span>
                    <h3 className="font-heading font-extrabold text-2xl text-slate-900">{vehicle.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Models: {vehicle.models}</p>
                  </div>

                  {/* Specs Pill Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs">
                    <div className="flex items-center space-x-1.5 text-slate-700">
                      <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-[11px]">{vehicle.seats}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-slate-700">
                      <Luggage className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="font-semibold text-[11px]">{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-slate-700">
                      <Wind className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-[11px]">{vehicle.ac ? 'Dual AC' : 'Non-AC'}</span>
                    </div>
                  </div>

                  {/* Ideal usage */}
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <strong className="text-slate-800">Ideal For:</strong> {vehicle.idealFor}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Vehicle Highlights:</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onBookVehicle(vehicle)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book {vehicle.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 pt-1">
                  <span className="text-emerald-600 font-bold flex items-center space-x-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Best Rate Guaranteed</span>
                  </span>
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(`Hello Two Four Travel, I would like to check availability for ${vehicle.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-bold hover:underline flex items-center space-x-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Urbania Group Notice */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                  Planning a Group Tour, Wedding, or Pilgrim Yatra?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  We specialize in 12, 17, 20 & 26 seater Force Urbania and Tempo Travellers with pushback recliners & audio-visual setup across South India.
                </p>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone}`}
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 flex items-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Group Booking Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
