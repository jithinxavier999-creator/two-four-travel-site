import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, Star, MapPin, Calendar, Car, ArrowRight, Clock, Users } from 'lucide-react';
import { COMPANY_DETAILS, POPULAR_ROUTES, FLEET_DATA } from '../data/travelData';

interface HeroProps {
  onOpenBookingModal: (prefillData?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const [pickup, setPickup] = useState('Kochi Airport (COK)');
  const [drop, setDrop] = useState('Munnar Hill Station');
  const [serviceType, setServiceType] = useState('one-way');
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      pickupLocation: pickup,
      dropLocation: drop,
      serviceType: serviceType,
      vehicleType: selectedVehicle,
      travelDate: date,
    });
  };

  const directWhatsappHeroMsg = encodeURIComponent(
    `Hello Two Four Travel, I want to book a cab from ${pickup} to ${drop}. Travel Date: ${date}. Vehicle: ${selectedVehicle.toUpperCase()}. Please provide quote and driver availability.`
  );

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark & Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80"
          alt="Munnar Tea Gardens South India Two Four Travel"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-10000 animate-pulse-subtle"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Decorative Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Main Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Kerala's Top Rated Travel Agency & Taxi Fleet</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Discover South India with{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Two Four Travel
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Reliable Taxi Services, Airport Transfers, South India Tour Packages & Customized Travel Experiences across{' '}
              <strong className="text-white font-semibold">Kerala, Tamil Nadu, Andhra Pradesh & Karnataka</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${directWhatsappHeroMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-95 transition-all group"
              >
                <MessageSquare className="w-5 h-5 fill-white/20 text-white group-hover:rotate-12 transition-transform" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base backdrop-blur-md shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>Call Now: {COMPANY_DETAILS.primaryPhone}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              <div className="flex items-center space-x-2 text-slate-300 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Transparent Fares</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>On-Time Airport Pickup</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 text-xs sm:text-sm">
                <Car className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Sanitized Cabs</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 text-xs sm:text-sm">
                <Users className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Expert Local Drivers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Booking / Fare Estimator Card */}
          <div className="lg:col-span-5">
            <div className="glass-card-dark rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-white">
                    Quick Booking & Fare Estimate
                  </h3>
                  <p className="text-xs text-slate-400">Instant fare quote for any South India route</p>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Car className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleQuickQuoteSubmit} className="space-y-4 text-xs">
                {/* Trip Type Tabs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setServiceType('one-way')}
                    className={`py-2 px-2 rounded-lg font-bold transition-colors text-center ${
                      serviceType === 'one-way' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('round-trip')}
                    className={`py-2 px-2 rounded-lg font-bold transition-colors text-center ${
                      serviceType === 'round-trip' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Round Trip
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('airport')}
                    className={`py-2 px-2 rounded-lg font-bold transition-colors text-center ${
                      serviceType === 'airport' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Airport Taxi
                  </button>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Kochi Airport, Trivandrum, Bangalore"
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Destination / Drop</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-sky-400" />
                    <input
                      type="text"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      placeholder="e.g. Munnar, Alleppey, Coorg, Madurai"
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      required
                    />
                  </div>
                </div>

                {/* Vehicle Choice & Date */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Select Vehicle</label>
                    <select
                      value={selectedVehicle}
                      onChange={(e) => setSelectedVehicle(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="sedan">Sedan (Dzire / Etios)</option>
                      <option value="hatchback">Hatchback (Swift / WagonR)</option>
                      <option value="7-seater">7 Seater (Ertiga / Triber)</option>
                      <option value="premium-suv">Premium SUV (Innova Crysta)</option>
                      <option value="urbania">Urbania / Tempo (12-26 Seater)</option>
                      <option value="luxury">Luxury Special (BMW/Fortuner)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-2 py-2 text-white focus:outline-none focus:border-emerald-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Instant Fare Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Quick Phone Note */}
                <div className="pt-2 text-center text-[11px] text-slate-400">
                  Or call directly for immediate cab dispatch:{' '}
                  <a href={`tel:${COMPANY_DETAILS.primaryPhone}`} className="text-emerald-400 font-bold hover:underline">
                    {COMPANY_DETAILS.primaryPhone}
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
