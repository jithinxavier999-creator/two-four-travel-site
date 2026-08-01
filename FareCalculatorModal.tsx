import React, { useState, useEffect } from 'react';
import { X, Car, Calendar, MapPin, User, Phone, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, POPULAR_ROUTES, FLEET_DATA } from '../data/travelData';

interface FareCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    pickupLocation?: string;
    dropLocation?: string;
    serviceType?: string;
    vehicleType?: string;
    travelDate?: string;
  };
}

export const FareCalculatorModal: React.FC<FareCalculatorModalProps> = ({ isOpen, onClose, prefillData }) => {
  const [pickup, setPickup] = useState('Kochi Airport (COK)');
  const [drop, setDrop] = useState('Munnar Hill Station');
  const [serviceType, setServiceType] = useState('one-way');
  const [vehicle, setVehicle] = useState('sedan');
  const [travelDate, setTravelDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (prefillData) {
      if (prefillData.pickupLocation) setPickup(prefillData.pickupLocation);
      if (prefillData.dropLocation) setDrop(prefillData.dropLocation);
      if (prefillData.serviceType) setServiceType(prefillData.serviceType);
      if (prefillData.vehicleType) setVehicle(prefillData.vehicleType);
      if (prefillData.travelDate) setTravelDate(prefillData.travelDate);
    }
  }, [prefillData, isOpen]);

  if (!isOpen) return null;

  // Calculate rough fare estimate based on popular routes or general mileage
  const calculateEstimatedFare = () => {
    const matchedRoute = POPULAR_ROUTES.find(
      (r) => r.from.toLowerCase().includes(pickup.toLowerCase().slice(0, 5)) && r.to.toLowerCase().includes(drop.toLowerCase().slice(0, 5))
    );

    if (matchedRoute) {
      if (vehicle === 'hatchback') return Math.round(matchedRoute.estPrice.sedan * 0.85);
      if (vehicle === 'sedan') return matchedRoute.estPrice.sedan;
      if (vehicle === '7-seater') return Math.round(matchedRoute.estPrice.suv * 0.9);
      if (vehicle === 'premium-suv') return matchedRoute.estPrice.suv;
      if (vehicle === 'urbania') return matchedRoute.estPrice.urbania;
      return matchedRoute.estPrice.sedan;
    }

    // Default fallback calculation (rough 100km standard base)
    let base = 2500;
    if (serviceType === 'round-trip') base *= 1.8;
    if (vehicle === 'hatchback') base *= 0.85;
    if (vehicle === '7-seater') base *= 1.35;
    if (vehicle === 'premium-suv') base *= 1.6;
    if (vehicle === 'urbania') base *= 2.4;
    return Math.round(base);
  };

  const estimatedFare = calculateEstimatedFare();

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Instant Fare Quote & Booking Request - Two Four Travel*\n\n` +
      `*Name:* ${name || 'Not provided'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Route:* ${pickup} ➔ ${drop}\n` +
      `*Trip Type:* ${serviceType.toUpperCase()}\n` +
      `*Vehicle Selected:* ${vehicle.toUpperCase()}\n` +
      `*Passengers:* ${passengers}\n` +
      `*Date:* ${travelDate}\n` +
      `*Notes:* ${notes || 'None'}\n\n` +
      `Please provide your best fare quote and confirm vehicle availability.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/15 text-white">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-900 via-slate-900 to-sky-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl text-white">Instant Quote & Booking</h3>
              <p className="text-xs text-slate-300">Two Four Travel South India Cab Service</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendWhatsapp} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto text-xs">
          
          {/* Trip Type Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setServiceType('one-way')}
              className={`py-2 text-center rounded-lg font-bold transition-colors ${
                serviceType === 'one-way' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              One Way
            </button>
            <button
              type="button"
              onClick={() => setServiceType('round-trip')}
              className={`py-2 text-center rounded-lg font-bold transition-colors ${
                serviceType === 'round-trip' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setServiceType('airport')}
              className={`py-2 text-center rounded-lg font-bold transition-colors ${
                serviceType === 'airport' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              Airport Pickup
            </button>
          </div>

          {/* Pickup & Drop Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Pickup Location *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-emerald-400" />
                <input
                  type="text"
                  required
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="e.g. Cochin Airport"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Drop / Destination *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-sky-400" />
                <input
                  type="text"
                  required
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  placeholder="e.g. Munnar / Alleppey"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Vehicle & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Select Vehicle</label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="sedan">Sedan (Dzire / Etios) - 4 Seater</option>
                <option value="hatchback">Hatchback (Swift / WagonR) - 4 Seater</option>
                <option value="7-seater">7 Seater SUV (Ertiga / Triber)</option>
                <option value="premium-suv">Premium SUV (Innova Crysta)</option>
                <option value="urbania">Force Urbania (12-26 Seater)</option>
                <option value="luxury">Luxury Car (Fortuner / BMW)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Travel Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-2 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Your Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anish Kumar"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Mobile / WhatsApp No. *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 8592879989"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Quote Guarantee Display Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 to-teal-950 border border-emerald-500/40 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-extrabold text-emerald-400 tracking-wider">Best Price Guarantee</p>
              <p className="font-heading font-extrabold text-lg text-white">
                Guaranteed Lowest Rates On Request
              </p>
              <p className="text-[10px] text-slate-300">Includes Fuel, Driver Allowance, Tolls & Interstate Taxes</p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-600/30 hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Confirm Fare & Request Cab on WhatsApp</span>
          </button>

          <div className="text-center text-[11px] text-slate-400 pt-1">
            Or call hotline directly: <a href={`tel:${COMPANY_DETAILS.primaryPhone}`} className="text-emerald-400 font-bold hover:underline">{COMPANY_DETAILS.primaryPhone}</a>
          </div>

        </form>

      </div>
    </div>
  );
};
