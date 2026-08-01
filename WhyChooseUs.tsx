import React from 'react';
import { UserCheck, Sparkles, Tag, Headphones, ShieldCheck, Clock, Award, Phone } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_DETAILS } from '../data/travelData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-600" />;
      case 'Tag': return <Tag className="w-6 h-6 text-emerald-600" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-sky-600" />;
      default: return <Award className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>The Two Four Travel Advantage</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Choose <span className="text-emerald-400">Two Four Travel</span>?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We prioritize your safety, comfort, and peace of mind on every journey across Kerala, Tamil Nadu, Andhra Pradesh, and Karnataka.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card-dark rounded-3xl p-7 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                {getIcon(feature.icon)}
              </div>

              <h3 className="font-heading font-extrabold text-xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-extrabold text-xl text-white">
              Zero Hidden Charges Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Your final quoted fare includes vehicle fuel, toll gate fees, interstate taxes, driver allowances, and parking.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone}`}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline: {COMPANY_DETAILS.primaryPhone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
