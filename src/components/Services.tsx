import React, { useState } from 'react';
import { Plane, Compass, ArrowRightCircle, Repeat, Camera, Users, Heart, Briefcase, Hotel, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/travelData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane': return <Plane className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'ArrowRightCircle': return <ArrowRightCircle className="w-6 h-6" />;
      case 'Repeat': return <Repeat className="w-6 h-6" />;
      case 'Camera': return <Camera className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Heart': return <Heart className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Hotel': return <Hotel className="w-6 h-6" />;
      default: return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Travel Solutions</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Premium <span className="text-emerald-400">Travel Services</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From seamless airport transfers and one-way outstation cabs to customized multi-state tour packages across South India, Two Four Travel handles every aspect with precision.
          </p>
        </div>

        {/* Services Grid (All 9 Core Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-card-dark rounded-3xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div>
                {/* Image & Icon Header */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-white/10 shadow-lg">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Tag Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
                    {service.tag}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-extrabold text-xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center space-x-1.5 text-xs text-sky-400 font-semibold mb-6">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{service.popularFor}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs transition-all flex items-center justify-center space-x-2 group-hover:bg-emerald-600 shadow-xs"
                >
                  <span>Book & Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Airport Hotspots Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-sky-950/80 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">24x7 Airport Transfers</span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Flying into Cochin (COK), Trivandrum (TRV), Calicut (CCJ) or Bangalore (BLR)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Send us your flight number. Our driver will be waiting at the arrival exit gate with a personalized name board. No flight delay penalties!
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Two Four Travel, I need an Airport Taxi pickup. Flight details:')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg transition-all flex items-center space-x-2"
              >
                <Plane className="w-4 h-4" />
                <span>Book Airport Taxi Now</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
