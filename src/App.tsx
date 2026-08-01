import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { TourPackages } from './components/TourPackages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { PackageModal } from './components/PackageModal';
import { FareCalculatorModal } from './components/FareCalculatorModal';
import { TourPackage, Vehicle, ServiceItem } from './types';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<any>(null);

  const handleOpenBookingModal = (prefillData?: any) => {
    setBookingPrefill(prefillData || null);
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenBookingModal({
      notes: `Interested in service: ${service.title}`,
    });
  };

  const handleBookVehicle = (vehicle: Vehicle) => {
    handleOpenBookingModal({
      vehicleType: vehicle.id,
      notes: `Interested in renting ${vehicle.name} (${vehicle.models})`,
    });
  };

  const handleInquirePackage = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBookingModal={handleOpenBookingModal} />
        <AboutUs />
        <Services onSelectService={handleSelectService} />
        <Fleet onBookVehicle={handleBookVehicle} />
        <TourPackages
          onOpenModal={(pkg) => setSelectedPackage(pkg)}
          onInquire={handleInquirePackage}
        />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bar for Mobile Devices */}
      <MobileQuickBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Tour Package Detailed Itinerary Modal */}
      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onInquire={handleInquirePackage}
      />

      {/* Instant Fare Quote & Booking Modal */}
      <FareCalculatorModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        prefillData={bookingPrefill}
      />
    </div>
  );
}
