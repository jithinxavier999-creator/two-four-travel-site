import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/travelData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Customer Reviews</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by <span className="text-emerald-600">Travelers</span> Across India
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read authentic experiences from families, honeymoon couples, and corporate groups who traveled with Two Four Travel.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 group-hover:text-emerald-200 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {/* Trip Tag */}
                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100">
                  Route: {rev.trip}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center space-x-3 mt-6">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 flex items-center space-x-1">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-slate-500">{rev.location} • {rev.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Counter Banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-slate-200 max-w-2xl mx-auto shadow-xs">
          <div className="flex items-center justify-center space-x-2 text-amber-400 mb-1">
            <Star className="w-5 h-5 fill-amber-400" />
            <Star className="w-5 h-5 fill-amber-400" />
            <Star className="w-5 h-5 fill-amber-400" />
            <Star className="w-5 h-5 fill-amber-400" />
            <Star className="w-5 h-5 fill-amber-400" />
            <span className="font-extrabold text-slate-900 text-base ml-1">4.9 / 5.0</span>
          </div>
          <p className="text-xs text-slate-600">
            Based on 500+ verified trip reviews on Google & TripAdvisor for Two Four Travel Kerala.
          </p>
        </div>

      </div>
    </section>
  );
};
