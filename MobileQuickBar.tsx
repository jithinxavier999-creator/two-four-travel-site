import React from 'react';
import { Phone, MessageSquare, Car } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/travelData';

interface MobileQuickBarProps {
  onOpenBookingModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 p-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_DETAILS.primaryPhone}`}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span className="truncate">Call Now</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Two Four Travel, I need a quick taxi/tour quote.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md hover:bg-emerald-500 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="truncate">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBookingModal}
          className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
        >
          <Car className="w-4 h-4" />
          <span className="truncate">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
