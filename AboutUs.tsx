import React from 'react';
import { ShieldCheck, Award, Clock, MapPin, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/travelData';

export const AboutUs: React.FC = () => {
  const stats = [
    { label: 'Happy Travelers', value: '15,000+' },
    { label: 'On-Time Trips', value: '99.8%' },
    { label: 'South India Drivers', value: '50+' },
    { label: 'Customer Rating', value: '4.9 ★' },
  ];

  const statesCovered = [
    {
      name: 'Kerala',
      tag: 'God’s Own Country',
      cities: 'Kochi, Munnar, Alleppey, Wayanad, Trivandrum, Calicut',
      bg: 'from-emerald-500/10 to-teal-500/5',
      border: 'border-emerald-500/20',
      badgeBg: 'bg-emerald-500/10 text-emerald-700'
    },
    {
      name: 'Tamil Nadu',
      tag: 'Land of Temples & Hills',
      cities: 'Chennai, Madurai, Ooty, Kanyakumari, Rameswaram, Coimbatore',
      bg: 'from-sky-500/10 to-blue-500/5',
      border: 'border-sky-500/20',
      badgeBg: 'bg-sky-500/10 text-sky-700'
    },
    {
      name: 'Karnataka',
      tag: 'Royal Palaces & Coffee Hills',
      cities: 'Bangalore, Mysore, Coorg, Mangalore, Hampi, Chikmagalur',
      bg: 'from-amber-500/10 to-orange-500/5',
      border: 'border-amber-500/20',
      badgeBg: 'bg-amber-500/10 text-amber-800'
    },
    {
      name: 'Andhra Pradesh',
      tag: 'Coastal Beauty & Spiritual Shrines',
      cities: 'Visakhapatnam, Araku Valley, Tirupati, Vijayawada, Guntur',
      bg: 'from-indigo-500/10 to-purple-500/5',
      border: 'border-indigo-500/20',
      badgeBg: 'bg-indigo-500/10 text-indigo-700'
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>About Two Four Travel</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Trusted Travel Partner in{' '}
            <span className="text-emerald-600">South India</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Two Four Travel is committed to providing safe, comfortable, and affordable travel experiences across South India. We focus on punctuality, customer satisfaction, professional drivers, and well-maintained vehicles, serving Kerala, Tamil Nadu, Andhra Pradesh, and Karnataka.
          </p>
        </div>

        {/* Top Grid: Image + Core Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
                alt="Two Four Travel Premium Taxi Fleet South India"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Premium Fleet & Courteous Chauffeurs</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold">
                  Punctuality & Safety on Every Kilometer
                </h3>
                <p className="text-xs text-slate-300">
                  Operating 24/7 with zero compromise on cleanliness, driver etiquette, and vehicle maintenance.
                </p>
              </div>
            </div>

            {/* Floating Logo Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-3">
              <img
                src={COMPANY_DETAILS.logoUrl}
                alt="Two Four Travel Official Logo"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-contain bg-white p-0.5 border border-slate-200 shadow-sm"
              />
              <div>
                <p className="font-extrabold text-xs sm:text-sm text-slate-900">Two Four Travel</p>
                <p className="text-[11px] text-emerald-600 font-bold">Explore Beyond Boundaries</p>
              </div>
            </div>
          </div>

          {/* Right Text / Key Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Why Travelers Across India & Overseas Choose Us
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need a quick airport pickup at Cochin International Airport, a customized 7-day family tour to Munnar and Alleppey, or an outstation taxi across Tamil Nadu, Karnataka, and Andhra Pradesh, Two Four Travel ensures a seamless, worry-free journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Punctual Pickups</span>
                </div>
                <p className="text-xs text-slate-500">Drivers arrive 15 minutes ahead of schedule for all airport and hotel pickups.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-sky-600 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Drivers</span>
                </div>
                <p className="text-xs text-slate-500">Police-verified, courteous drivers with expert knowledge of South Indian routes.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-xs text-slate-500">No surprise charges. Fuel, toll, driver allowance clearly communicated upfront.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-sky-600 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Customized Itineraries</span>
                </div>
                <p className="text-xs text-slate-500">Tailored tour packages designed around your timing, budget, and family needs.</p>
              </div>
            </div>

            {/* Quick Contact Numbers Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div>
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Direct Hotline Numbers</p>
                <p className="text-sm font-semibold text-slate-200">Have questions or custom trip requests?</p>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-md transition-colors"
                >
                  {COMPANY_DETAILS.primaryPhone}
                </a>
                <a
                  href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
                  className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md transition-colors"
                >
                  {COMPANY_DETAILS.secondaryPhone}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* States Covered Section */}
        <div className="mt-12 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
              Serving All 4 Major South Indian States
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Seamless inter-state taxi permits, highway toll passes, and experienced long-distance drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statesCovered.map((state) => (
              <div
                key={state.name}
                className={`p-5 rounded-2xl bg-gradient-to-br ${state.bg} border ${state.border} bg-white shadow-xs hover:shadow-md transition-all space-y-3`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-extrabold text-lg text-slate-900 flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{state.name}</span>
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${state.badgeBg}`}>
                    {state.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Popular hubs:</strong> {state.cities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md">
          {stats.map((st, idx) => (
            <div key={idx} className="text-center space-y-1">
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-600">{st.value}</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">{st.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
