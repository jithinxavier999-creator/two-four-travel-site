import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, Car, Calendar, User } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/travelData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    pickup: '',
    drop: '',
    vehicle: 'Sedan (Dzire / Etios)',
    serviceType: 'Taxi Booking',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const constructWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Booking Request from Two Four Travel Website*\n\n` +
      `*Name:* ${formData.name || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Pickup:* ${formData.pickup || 'Not specified'}\n` +
      `*Destination:* ${formData.drop || 'Not specified'}\n` +
      `*Vehicle:* ${formData.vehicle}\n` +
      `*Service:* ${formData.serviceType}\n` +
      `*Message:* ${formData.message || 'None'}\n\n` +
      `Please confirm quote and driver availability.`
    );
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch 24/7</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-emerald-400">Two Four Travel</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ready to plan your South India road trip or need an instant airport cab dispatch? Call or WhatsApp us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Phone / WhatsApp / Location Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Action Buttons Card */}
            <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-white">Instant Contact Hotlines</h3>

              <div className="space-y-4">
                {/* Primary Phone */}
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Primary Hotline (Call Anytime)</p>
                    <p className="font-heading font-extrabold text-xl text-white group-hover:text-emerald-400 transition-colors">
                      {COMPANY_DETAILS.primaryPhone}
                    </p>
                  </div>
                </a>

                {/* Secondary Phone */}
                <a
                  href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-sky-600/20 border border-white/10 hover:border-sky-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Secondary Hotline / Dispatch</p>
                    <p className="font-heading font-extrabold text-xl text-white group-hover:text-sky-400 transition-colors">
                      {COMPANY_DETAILS.secondaryPhone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Direct Button */}
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Two Four Travel, I need a quick taxi/tour quote.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/40 transition-all flex items-center justify-center space-x-3"
                >
                  <MessageSquare className="w-5 h-5 fill-white/20" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

              {/* Address & Hours */}
              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.address}</span>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>24 Hours a day / 7 Days a week Dispatch Operations</span>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.email}</span>
                </div>
              </div>

            </div>

            {/* Google Maps Frame Container */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl h-64 relative bg-slate-950">
              <iframe
                title="Two Four Travel Kerala Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.086389772836!2d76.3888323!3d10.1501524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08082f4e04040b%3A0x884a4cbfa62779a7!2sCochin%20International%20Airport!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-[11px] font-bold border border-white/10 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Base Location: Nedumbassery, Kochi, Kerala</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-white">Send Us a Travel Query</h3>
                <p className="text-xs sm:text-sm text-slate-400">Fill out this quick form or send directly to WhatsApp for instant confirmation.</p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-white">Inquiry Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our travel manager will review your trip details and call you back shortly on <strong className="text-emerald-400">{formData.phone}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={constructWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Same Query to WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all"
                    >
                      Send Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Nair"
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (WhatsApp) *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pickup & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Pickup Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-emerald-400" />
                        <input
                          type="text"
                          name="pickup"
                          value={formData.pickup}
                          onChange={handleChange}
                          placeholder="e.g. Cochin Airport / Calicut"
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Drop Location / Tour Destination</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-sky-400" />
                        <input
                          type="text"
                          name="drop"
                          value={formData.drop}
                          onChange={handleChange}
                          placeholder="e.g. Munnar / Alleppey / Coorg"
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service & Vehicle Choice */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Vehicle Preference</label>
                      <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Sedan (Dzire / Etios)">Sedan (Dzire / Etios)</option>
                        <option value="Hatchback (Swift / WagonR)">Hatchback (Swift / WagonR)</option>
                        <option value="7 Seater SUV (Ertiga / Triber)">7 Seater SUV (Ertiga / Triber)</option>
                        <option value="Premium SUV (Innova Crysta)">Premium SUV (Innova Crysta)</option>
                        <option value="Urbania Minibus (12-26 Seater)">Urbania Minibus (12-26 Seater)</option>
                        <option value="Luxury Car (Fortuner / BMW)">Luxury Car (Fortuner / BMW)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Travel Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message / Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Notes / Preferences</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Flight arrival time, total passengers, hotel requirements, special stops..."
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Web Form</span>
                    </button>

                    <a
                      href={constructWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all border border-white/20 flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
