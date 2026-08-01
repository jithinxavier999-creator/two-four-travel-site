import { ServiceItem, Vehicle, TourPackage, Testimonial, GalleryItem, PopularRoute } from '../types';
import brandLogo from '../assets/images/two_four_travel_logo_1785305479030.jpg';

export const COMPANY_DETAILS = {
  name: 'Two Four Travel',
  tagline: 'Trusted South India Taxi Services & Customized Tour Packages',
  logoUrl: brandLogo,
  location: 'Kerala, India',
  primaryPhone: '8592879989',
  secondaryPhone: '8921676391',
  formattedPrimaryPhone: '+91 85928 79989',
  formattedSecondaryPhone: '+91 89216 76391',
  whatsappNumber: '918592879989',
  email: 'info@twofourtravel.com',
  address: 'Two Four Travel, Near Cochin International Airport, Nedumbassery, Kochi, Kerala 683572',
  operatingStates: ['Kerala', 'Tamil Nadu', 'Andhra Pradesh', 'Karnataka'],
  operatingCities: ['Kochi', 'Trivandrum', 'Calicut', 'Munnar', 'Alleppey', 'Wayanad', 'Coimbatore', 'Chennai', 'Madurai', 'Bangalore', 'Mysore', 'Mangalore', 'Hyderabad', 'Visakhapatnam'],
  colors: {
    emerald: '#16A34A',
    oceanBlue: '#0EA5E9',
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'airport-transfer',
    title: 'Airport Pickup & Drop',
    description: 'Punctual, 24/7 hassle-free transfers for Cochin (COK), Trivandrum (TRV), Calicut (CCJ), Kannur (CNN), Bangalore (BLR), and Coimbatore (CJB) airports.',
    iconName: 'Plane',
    tag: '24/7 Available',
    popularFor: 'Zero flight-delay penalty & flight tracking',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'holiday-packages',
    title: 'South India Holiday Packages',
    description: 'Customized multi-day tour itineraries spanning misty hill stations, serene backwaters, heritage temples, and golden beaches across South India.',
    iconName: 'Compass',
    tag: 'Bestseller',
    popularFor: 'Munnar, Alleppey, Coorg, Ooty, Kanyakumari',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'one-way-taxi',
    title: 'One Way Taxi',
    description: 'Pay only for one-side travel across Kerala, Tamil Nadu, Karnataka & Andhra Pradesh with transparent, zero return-fare surcharges.',
    iconName: 'ArrowRightCircle',
    tag: 'Budget Friendly',
    popularFor: 'Intercity travel with zero return charge',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'round-trip-taxi',
    title: 'Round Trip Taxi',
    description: 'Comfortable outstation round trips with experienced drivers who double as friendly local guides throughout your journey.',
    iconName: 'Repeat',
    tag: 'Most Popular',
    popularFor: 'Multi-city family trips & business tours',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'local-sightseeing',
    title: 'Local Sightseeing',
    description: 'Full-day and half-day guided city sightseeing packages tailored to your pace in Kochi, Mysore, Chennai, Madurai, Hyderabad, and more.',
    iconName: 'Camera',
    tag: 'Flexible Timings',
    popularFor: 'Historical monuments, waterfalls & spice plantations',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'family-tours',
    title: 'Family Tours',
    description: 'Spacious 7-seater SUVs and Urbania tempo travellers with child-safe driving, comfortable seats, and ample luggage room.',
    iconName: 'Users',
    tag: 'Comfort First',
    popularFor: 'Large families & multi-generational groups',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'honeymoon-packages',
    title: 'Honeymoon Packages',
    description: 'Romantic getaways with luxury private cabs, private houseboat cruises, flower-bed decorations, and handpicked romantic resorts.',
    iconName: 'Heart',
    tag: 'Romantic Escape',
    popularFor: 'Alleppey houseboat, Munnar mist, Wayanad treehouses',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Executive sedan and luxury SUV fleet for corporate events, delegate movement, VIP airport pickups, and monthly corporate rentals.',
    iconName: 'Briefcase',
    tag: 'Executive Service',
    popularFor: 'GST invoicing, professional attire & punctuality',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Assistance',
    description: 'Exclusive negotiated rates at top luxury resorts, authentic heritage homestays, Ayurveda wellness retreats, and premium beach resorts.',
    iconName: 'Hotel',
    tag: 'Exclusive Rates',
    popularFor: 'Homestays, luxury resorts & houseboat stays',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  }
];

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'hatchback',
    name: 'Hatchback Cars',
    category: 'Compact & Economic',
    models: 'Maruti Suzuki Swift, WagonR, Tata Tiago',
    seats: '4 Passengers',
    luggage: '2 Bags',
    ac: true,
    ratePerKm: '₹12 - ₹14 / km',
    startingFare: '₹1,499 / day',
    idealFor: 'Budget city transfers, small couples & quick airport runs',
    features: ['Fully Air Conditioned', 'Clean & Sanitized Interiors', 'Music System', 'Experienced Driver', 'GPS Navigation'],
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Value'
  },
  {
    id: 'sedan',
    name: 'Sedan Cars',
    category: 'Comfort & Elegance',
    models: 'Maruti Dzire, Toyota Etios, Honda Amaze',
    seats: '4 Passengers',
    luggage: '3 Bags',
    ac: true,
    ratePerKm: '₹15 - ₹17 / km',
    startingFare: '₹2,199 / day',
    idealFor: 'Executive travel, small family outstation trips & airport drop',
    features: ['Plush Rear Seating', 'Ample Boot Space', 'Dual Airbags', 'Phone Chargers', 'Mineral Water Provided'],
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    badge: 'Most Popular'
  },
  {
    id: '7-seater',
    name: '7 Seater Vehicles',
    category: 'Family SUV',
    models: 'Maruti Ertiga, Renault Triber, Mahindra Marazzo',
    seats: '6-7 Passengers',
    luggage: '4 Bags',
    ac: true,
    ratePerKm: '₹18 - ₹20 / km',
    startingFare: '₹3,199 / day',
    idealFor: 'Family hill station trips, multi-day tours & medium groups',
    features: ['Rear AC Vents', 'Foldable 3rd Row', 'Smooth Hill Drive', 'First Aid Box', 'Spacious Seating'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    badge: 'Family Favorite'
  },
  {
    id: 'premium-suv',
    name: 'Premium SUV',
    category: 'Luxury Comfort',
    models: 'Toyota Innova Crysta, Innova Hycross',
    seats: '6-7 Passengers',
    luggage: '5 Bags',
    ac: true,
    ratePerKm: '₹21 - ₹25 / km',
    startingFare: '₹3,999 / day',
    idealFor: 'VIP guests, long outstation journeys & ultimate road comfort',
    features: ['Captain Seats', 'Dual Climate Control', 'Push-back Leather Recliners', 'Ambient Lighting', 'Premium Audio System'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Rated Comfort'
  },
  {
    id: 'luxury-vehicles',
    name: 'Luxury Travel Vehicles',
    category: 'VVIP & Wedding Special',
    models: 'Toyota Fortuner, Mercedes C-Class, BMW 5 Series',
    seats: '4-5 Passengers',
    luggage: '4 Bags',
    ac: true,
    ratePerKm: '₹45 - ₹65 / km',
    startingFare: '₹8,999 / day',
    idealFor: 'Weddings, VIP corporate delegates & luxury celebrations',
    features: ['Sunroof', 'Chauffeur in Uniform', 'Leather Interiors', 'High Security', 'Champagne/Beverage Setup on request'],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    badge: 'Luxury VVIP'
  },
  {
    id: 'urbania',
    name: 'Urbania & Tempo Traveller',
    category: 'Group Minibus (12 to 26 Seater)',
    models: 'Force Urbania (12/17/20 Seater), Force Tempo Traveller (12 to 26 Seater)',
    seats: '12 to 26 Passengers',
    luggage: '12+ Bags',
    ac: true,
    ratePerKm: '₹28 - ₹42 / km',
    startingFare: '₹5,499 / day',
    idealFor: 'Large family reunions, pilgrim group tours, wedding parties & corporate outings',
    features: ['Push-back Reclining Seats', 'Individual AC Vents', 'Individual USB Charging Ports', 'HD LED TV & Stereo', 'Panoramic Windows'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    badge: 'Large Group Special'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'kerala-mist-and-backwaters',
    title: 'Kerala Mist & Magical Backwaters',
    subtitle: 'Munnar Hill Station, Thekkady Spice Valley & Alleppey Houseboat Cruise',
    states: ['Kerala'],
    duration: '5 Days / 4 Nights',
    priceStarting: '₹14,999 per couple',
    rating: 4.9,
    reviewsCount: 128,
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    overview: 'Experience the essence of God’s Own Country with lush green tea gardens in Munnar, wildlife and spice plantations in Thekkady, and a private luxury houseboat overnight stay in the serene Alleppey backwaters.',
    category: 'Kerala',
    highlights: [
      'Munnar Tea Gardens & Mattupetty Dam boat ride',
      'Eravikulam National Park (Nilgiri Tahr sanctuary)',
      'Thekkady Elephant Ride & Spice Plantation Walk',
      'Overnight Private Deluxe Houseboat with all meals',
      'Private dedicated cab with driver throughout'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi & Drive to Munnar', description: 'Pickup from Kochi Airport/Railway Station. Enroute visit Cheeyappara & Valara Waterfalls. Evening check-in to Munnar resort.' },
      { day: 2, title: 'Munnar Full Day Sightseeing', description: 'Visit Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum, and Rajamalai (Eravikulam National Park).' },
      { day: 3, title: 'Munnar to Thekkady (Periyar)', description: 'Drive to Thekkady through scenic cardamom hills. Enjoy spice plantation tour and Periyar lake boating.' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat', description: 'Arrive in Alleppey by 12 PM. Board your luxury private houseboat. Traditional Kerala lunch, afternoon canal cruise, sunset view & delicious dinner.' },
      { day: 5, title: 'Alleppey to Kochi Departure', description: 'Breakfast on houseboat, checkout, Fort Kochi heritage walk, Chinese Fishing Nets, and airport/railway drop.' }
    ],
    inclusions: [
      'Private Air Conditioned Sedan / SUV Car',
      'Fuel, Tolls, Parking, Driver Batta & State Taxes',
      'Breakfast at Resorts & All Meals on Houseboat',
      'Sightseeing as per itinerary',
      '24/7 On-call customer support'
    ]
  },
  {
    id: 'tamil-nadu-temple-heritage',
    title: 'Tamil Nadu Divine Temple & Coastal Tour',
    subtitle: 'Chennai, Mahabalipuram Shore Temples, Tanjore & Madurai Meenakshi',
    states: ['Tamil Nadu'],
    duration: '6 Days / 5 Nights',
    priceStarting: '₹18,499 per couple',
    rating: 4.8,
    reviewsCount: 94,
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    overview: 'Journey through centuries of Dravidian architecture, UNESCO heritage shore temples, grand Gopurams, rich silk weaving heritage, and coastal beauty across Tamil Nadu.',
    category: 'Tamil Nadu',
    highlights: [
      'UNESCO World Heritage Shore Temple Mahabalipuram',
      'Thanjavur Brihadeeswarar Temple (Big Temple)',
      'Madurai Meenakshi Amman Temple & Night ceremony',
      'Rameswaram Agnitheertham & Pamban Bridge view',
      'Kanyakumari Sunset & Vivekananda Rock Memorial'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Chennai to Mahabalipuram', description: 'Pickup at Chennai Airport/Station. Drive to Mahabalipuram shore temple and Arjuna Penance.' },
      { day: 2, title: 'Mahabalipuram to Pondicherry', description: 'Visit Auroville, Sri Aurobindo Ashram, Promenade Beach, and French Colony architecture.' },
      { day: 3, title: 'Pondicherry to Tanjore (Thanjavur)', description: 'Visit Chidambaram Nataraja Temple and Tanjore Big Temple.' },
      { day: 4, title: 'Tanjore to Madurai', description: 'Explore Chettinad heritage mansions and Madurai Meenakshi Temple.' },
      { day: 5, title: 'Madurai to Rameswaram', description: 'Visit Pamban Bridge, Ramanathaswamy Temple, and Dhanushkodi beach point.' },
      { day: 6, title: 'Rameswaram to Kanyakumari & Departure', description: 'Vivekananda Rock Memorial, Thiruvalluvar Statue, and drop at Trivandrum or Madurai Airport.' }
    ],
    inclusions: [
      'Dedicated AC Taxi with courteous driver',
      'All inter-state vehicle permits & toll taxes',
      'Daily breakfast at handpicked 3-star hotels',
      'Flexible sightseeing schedule'
    ]
  },
  {
    id: 'karnataka-hills-and-heritage',
    title: 'Karnataka Royal Heritage & Coorg Coffee Hills',
    subtitle: 'Bangalore, Mysore Grand Palace, Coorg Coffee Estates & Wayanad',
    states: ['Karnataka', 'Kerala'],
    duration: '5 Days / 4 Nights',
    priceStarting: '₹16,999 per couple',
    rating: 4.9,
    reviewsCount: 112,
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1200&q=80',
    overview: 'Discover the grandeur of Mysore Palace, fragrant coffee plantations of Coorg (Scotland of India), cascading Abbey Falls, and the misty green peaks of Wayanad.',
    category: 'Karnataka',
    highlights: [
      'Mysore Palace Illumination & Chamundi Hills',
      'Ranganathittu Bird Sanctuary & Srirangapatna',
      'Coorg Coffee Plantation Tour & Abbey Waterfalls',
      'Golden Temple Bylakuppe Tibetan Settlement',
      'Wayanad Banasura Sagar Dam & Edakkal Caves'
    ],
    itinerary: [
      { day: 1, title: 'Bangalore Pickup & Drive to Mysore', description: 'Pickup from Bangalore Airport/Station. Visit Srirangapatna, Mysore Palace, and Chamundi Hill.' },
      { day: 2, title: 'Mysore to Coorg (Madikeri)', description: 'Visit Bylakuppe Tibetan Monastery, Nisargadhama bamboo park, check-in Coorg resort.' },
      { day: 3, title: 'Coorg Full Day Sightseeing', description: 'Explore Abbey Falls, Raja Seat sunset point, Dubare Elephant Camp, and coffee estate walk.' },
      { day: 4, title: 'Coorg to Wayanad Hill Station', description: 'Drive into Kerala. Visit Banasura Sagar Dam, Meenmutty Falls, and Karlad Lake.' },
      { day: 5, title: 'Wayanad Sightseeing & Departure', description: 'Visit Lakkidi Viewpoint, Pookode Lake, and drop at Calicut (CCJ) or Bangalore Airport.' }
    ],
    inclusions: [
      'Private AC Sedan / SUV Vehicle',
      'All driver charges, parking & interstate permits',
      'Resort stay with complimentary breakfast'
    ]
  },
  {
    id: 'andhra-vizag-and-araku',
    title: 'Andhra Coastal Vizag & Araku Valley Eco Tour',
    subtitle: 'Visakhapatnam Beaches, Borra Caves, Araku Valley & Tirupati Pilgrim Special',
    states: ['Andhra Pradesh'],
    duration: '4 Days / 3 Nights',
    priceStarting: '₹13,999 per couple',
    rating: 4.8,
    reviewsCount: 76,
    heroImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    overview: 'Explore the scenic eastern coast at Visakhapatnam, thrilling submarine museum, million-year-old Borra Caves, and misty coffee hills of Araku Valley.',
    category: 'Andhra Pradesh',
    highlights: [
      'Vizag Submarine Museum & RK Beach',
      'Kailasagiri Hilltop Cable Car View',
      'Million-year-old Borra Limestone Caves',
      'Araku Tribal Museum & Coffee Plantations',
      'Option to add Tirupati Balaji Darshan Transfer'
    ],
    itinerary: [
      { day: 1, title: 'Vizag Airport Pickup & City Tour', description: 'Pickup at Vizag Airport/Station. Visit Submarine Museum, Aircraft Museum, and RK Beach.' },
      { day: 2, title: 'Vizag to Araku Valley via Borra Caves', description: 'Drive through Eastern Ghats, visit Ananthagiri coffee plantations & Borra Caves.' },
      { day: 3, title: 'Araku Valley Local Exploration', description: 'Visit Chaparai Waterfalls, Tribal Museum, Padmapuram Gardens, and Katiki Waterfalls.' },
      { day: 4, title: 'Araku to Vizag & Departure', description: 'Return drive to Vizag, shopping for local handicrafts, drop at Vizag Airport.' }
    ],
    inclusions: [
      'Private air-conditioned vehicle',
      'Professional local driver guide',
      'Fuel & toll charges included'
    ]
  },
  {
    id: 'grand-south-india-panorama',
    title: 'Grand South India Panorama Circuit',
    subtitle: 'Ultimate 10-Day Journey across Kerala, Tamil Nadu & Karnataka Highlights',
    states: ['Kerala', 'Tamil Nadu', 'Karnataka'],
    duration: '10 Days / 9 Nights',
    priceStarting: '₹32,999 per couple',
    rating: 5.0,
    reviewsCount: 156,
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    overview: 'The ultimate South India road trip connecting Kochi, Munnar, Thekkady, Alleppey houseboat, Kanyakumari, Madurai, Mysore, and Bangalore in seamless comfort.',
    category: 'Multi-State',
    highlights: [
      'Comprehensive 3-state luxury road trip',
      'Munnar tea hills & Alleppey deluxe houseboat',
      'Southernmost tip Kanyakumari sunrise & sunset',
      'Madurai Meenakshi & Mysore Royal Palace',
      'Experienced long-distance driver with 10+ yrs experience'
    ],
    itinerary: [
      { day: 1, title: 'Kochi Arrival & Sightseeing', description: 'Fort Kochi, Mattancherry Palace, Chinese Fishing Nets.' },
      { day: 2, title: 'Kochi to Munnar', description: 'Cheeyappara falls, tea gardens & Munnar check-in.' },
      { day: 3, title: 'Munnar Sightseeing', description: 'Eravikulam National park & Mattupetty Dam.' },
      { day: 4, title: 'Munnar to Thekkady', description: 'Spice plantation & Periyar elephant sanctuary.' },
      { day: 5, title: 'Thekkady to Alleppey Houseboat', description: 'Overnight luxury cruise on Vembanad Lake.' },
      { day: 6, title: 'Alleppey to Kanyakumari', description: 'Drive to Kanyakumari coastal tip, sunset point.' },
      { day: 7, title: 'Kanyakumari to Madurai', description: 'Sunrise, Vivekananda rock, drive to Madurai temple.' },
      { day: 8, title: 'Madurai to Mysore', description: 'Scenic interstate drive to Mysore royal city.' },
      { day: 9, title: 'Mysore Sightseeing & Palace', description: 'Mysore Palace, Chamundi Hills, Brindavan Gardens.' },
      { day: 10, title: 'Mysore to Bangalore Departure', description: 'Bangalore city tour & drop at BLR Airport.' }
    ],
    inclusions: [
      'Innova Crysta / Premium SUV for 10 Days',
      'All interstate vehicle taxes, tolls, parking & batta',
      'Deluxe hotel accommodations with breakfast',
      'Private Houseboat stay with all meals'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar & Family',
    location: 'Mumbai, Maharashtra',
    trip: '5-Day Kerala Munnar & Alleppey Package',
    rating: 5,
    comment: 'Exceptional service by Two Four Travel! Driver Rajesh was super polite, punctual, and drove extremely safely in the Munnar hairpin turns. Vehicle (Innova Crysta) was spotless clean. Will 100% recommend to anyone visiting South India!',
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Dr. Ananya & Vignesh',
    location: 'Bangalore, Karnataka',
    trip: 'Honeymoon Package - Munnar & Wayanad',
    rating: 5,
    comment: 'Booked our honeymoon tour cab with Two Four Travel. From airport pickup at Cochin to drop at Bangalore, everything was seamlessly organized. They arranged a flower-decorated houseboat in Alleppey. Thank you so much!',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Suresh Menon & Team',
    location: 'Hyderabad, Telangana',
    trip: '17-Seater Urbania Corporate Outing to Coorg',
    rating: 5,
    comment: 'We booked a 17-seater Force Urbania for a 25-member corporate team trip across Karnataka & Kerala. Vehicle was brand new with great AC and comfortable recliners. The driver knew all the best local food joints along the highway!',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Alleppey Backwater Houseboat Cruise',
    location: 'Alleppey, Kerala',
    state: 'Kerala',
    category: 'Houseboats',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g2',
    title: 'Munnar Tea Estates & Rolling Hills',
    location: 'Munnar, Kerala',
    state: 'Kerala',
    category: 'Hills',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g3',
    title: 'Madurai Meenakshi Amman Temple Gopuram',
    location: 'Madurai, Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Temples',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g4',
    title: 'Mysore Grand Palace Illumination',
    location: 'Mysore, Karnataka',
    state: 'Karnataka',
    category: 'Temples',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g5',
    title: 'Kovalam Golden Sand Beach',
    location: 'Trivandrum, Kerala',
    state: 'Kerala',
    category: 'Beaches',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g6',
    title: 'Borra Limestone Caves Araku',
    location: 'Visakhapatnam, Andhra Pradesh',
    state: 'Andhra Pradesh',
    category: 'Hills',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g7',
    title: 'Athirappilly Waterfalls - Niagara of India',
    location: 'Thrissur, Kerala',
    state: 'Kerala',
    category: 'Waterfalls',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g8',
    title: 'Toyota Innova Crysta Fleet Unit',
    location: 'South India Fleet',
    state: 'Fleet',
    category: 'Vehicles',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g9',
    title: 'Force Urbania Luxury Group Traveller',
    location: 'South India Fleet',
    state: 'Fleet',
    category: 'Vehicles',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80'
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  { id: 'r1', from: 'Kochi Airport (COK)', to: 'Munnar Hill Station', distanceKm: 110, duration: '3.5 Hours', estPrice: { sedan: 2600, suv: 3800, urbania: 5800 } },
  { id: 'r2', from: 'Kochi Airport (COK)', to: 'Alleppey Houseboat Point', distanceKm: 85, duration: '2.5 Hours', estPrice: { sedan: 2200, suv: 3200, urbania: 4800 } },
  { id: 'r3', from: 'Trivandrum (TRV)', to: 'Kanyakumari Shore', distanceKm: 90, duration: '2.5 Hours', estPrice: { sedan: 2400, suv: 3500, urbania: 5200 } },
  { id: 'r4', from: 'Calicut Airport (CCJ)', to: 'Wayanad Vythiri', distanceKm: 80, duration: '2.5 Hours', estPrice: { sedan: 2200, suv: 3200, urbania: 4900 } },
  { id: 'r5', from: 'Bangalore (BLR)', to: 'Coorg Madikeri', distanceKm: 260, duration: '5.5 Hours', estPrice: { sedan: 4200, suv: 6200, urbania: 8900 } },
  { id: 'r6', from: 'Coimbatore Airport (CJB)', to: 'Ooty Lake', distanceKm: 90, duration: '3 Hours', estPrice: { sedan: 2500, suv: 3600, urbania: 5500 } }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'UserCheck',
    title: 'Professional Drivers',
    description: 'Polite, uniformed, verified drivers with 8+ years of mountain and long-distance driving experience.'
  },
  {
    icon: 'Sparkles',
    title: 'Clean & Sanitized Vehicles',
    description: 'Every vehicle undergoes thorough washing, interior vacuuming, and AC fragrance sanitization before every pickup.'
  },
  {
    icon: 'Tag',
    title: 'Affordable & Transparent Prices',
    description: 'Flat rates with zero hidden charges, zero return surcharges for one-way cabs, and clear breakdowns.'
  },
  {
    icon: 'Headphones',
    title: '24/7 Customer Support',
    description: 'Round-the-clock live phone and WhatsApp assistance for trip modifications, flight updates, and emergency support.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe & Secure Journey',
    description: 'GPS tracked vehicles, speed governors, comprehensive insurance, and emergency roadside assistance.'
  },
  {
    icon: 'Clock',
    title: 'On-Time Guaranteed Pickup',
    description: 'Strict punctuality commitment. Driver details sent 2 hours before pickup, arriving 15 mins ahead of time.'
  }
];
