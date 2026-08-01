export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  popularFor: string;
  image: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  models: string;
  seats: string;
  luggage: string;
  ac: boolean;
  ratePerKm: string;
  startingFare: string;
  idealFor: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  states: string[];
  duration: string;
  priceStarting: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  category: 'Kerala' | 'Tamil Nadu' | 'Karnataka' | 'Andhra Pradesh' | 'Multi-State';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trip: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  state: 'Kerala' | 'Tamil Nadu' | 'Karnataka' | 'Andhra Pradesh' | 'Fleet';
  category: 'Beaches' | 'Hills' | 'Waterfalls' | 'Temples' | 'Houseboats' | 'Vehicles';
  image: string;
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  duration: string;
  estPrice: {
    sedan: number;
    suv: number;
    urbania: number;
  };
}

export interface QuoteRequest {
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  travelTime: string;
  serviceType: 'one-way' | 'round-trip' | 'airport' | 'tour';
  vehicleType: string;
  passengers: number;
  name: string;
  phone: string;
  notes?: string;
}
