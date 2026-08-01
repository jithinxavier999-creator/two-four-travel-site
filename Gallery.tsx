import React, { useState } from 'react';
import { Camera, MapPin, X, ZoomIn, Filter } from 'lucide-react';
import { GALLERY_DATA } from '../data/travelData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Fleet', 'Houseboats', 'Hills', 'Temples', 'Beaches', 'Waterfalls'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) =>
        item.state === activeFilter || item.category === activeFilter
      );

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>South India Visual Journey</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore <span className="text-emerald-600">South India</span> with Us
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Feast your eyes on the breathtaking landscapes, misty tea slopes, ancient temples, emerald backwaters, and pristine fleets awaiting your next journey.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((flt) => (
            <button
              key={flt}
              onClick={() => setActiveFilter(flt)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeFilter === flt
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {flt}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 font-extrabold text-[10px] uppercase tracking-wider border border-white/10">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-heading font-extrabold text-lg leading-snug">{item.title}</h3>
                <div className="flex items-center space-x-1.5 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-slate-950/80 text-white hover:bg-slate-950 transition-colors border border-white/20 z-10"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-[65vh] bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-t border-white/10">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-400">{selectedPhoto.category} • {selectedPhoto.state}</span>
                <h3 className="font-heading font-extrabold text-xl text-white">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-400 flex items-center space-x-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{selectedPhoto.location}</span>
                </p>
              </div>

              <a
                href={`https://wa.me/918592879989?text=${encodeURIComponent(`Hello Two Four Travel, I saw this destination photo (${selectedPhoto.title}) and want to book a taxi tour here.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md"
              >
                Book Trip Here
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
