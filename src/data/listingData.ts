import {
  ListingDetails,
  ListingPhoto,
  RoomSection,
  AmenityItem,
  ReviewItem,
} from './types';

// ============================================================================
// 43 Categorized Photos across 9 Room Sections
// ============================================================================

export const allPhotos: ListingPhoto[] = [
  // --- Section 1: Living room 1 (3 photos) ---
  {
    id: 'lr1-1',
    category: 'living-room-1',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spacious living room featuring vibrant yellow accent wall, brown sofa, wooden coffee table, and dining set',
    caption: 'Bright living room with plush sofa and dining area',
  },
  {
    id: 'lr1-2',
    category: 'living-room-1',
    url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Living room media console with 55-inch smart television and indoor botanical decor',
    caption: 'Entertainment center with 4K television and audio setup',
  },
  {
    id: 'lr1-3',
    category: 'living-room-1',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perspective from living room looking towards open dining space and entry doorway',
    caption: 'Open concept living and dining layout',
  },

  // --- Section 2: Living room 2 & Patio Lounge (4 photos) ---
  {
    id: 'lr2-1',
    category: 'living-room-2',
    url: '/images/hero/hero-0.jpg',
    alt: 'Expansive private patio lounge with wicker armchairs, slate stone wall, and jacuzzi terrace',
    caption: 'Private covered outdoor lounge and terrace',
    isHero: true,
    heroPosition: 'main',
  },
  {
    id: 'lr2-2',
    category: 'living-room-2',
    url: '/images/hero/hero-2.jpg',
    alt: 'Closeup of private hydrotherapy jacuzzi with timber surround and soothing hot tub jets',
    caption: 'Private hydrotherapy hot tub on the wooden deck',
    isHero: true,
    heroPosition: 'top-right',
  },
  {
    id: 'lr2-3',
    category: 'living-room-2',
    url: '/images/hero/hero-1.jpg',
    alt: 'High ceiling atrium corridor connecting indoor living suite with the terrace',
    caption: 'Interior transition to patio terrace',
    isHero: true,
    heroPosition: 'top-middle',
  },
  {
    id: 'lr2-4',
    category: 'living-room-2',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Evening atmosphere of the patio lounge illuminated by warm spotlight sconces',
    caption: 'Evening ambient lighting across the outdoor seating',
  },

  // --- Section 3: Full kitchen (2 photos) ---
  {
    id: 'kit-1',
    category: 'kitchen',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary kitchen with dark granite countertops, wooden cabinetry, gas hob, and refrigerator',
    caption: 'Fully equipped modern kitchen with appliances',
  },
  {
    id: 'kit-2',
    category: 'kitchen',
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kitchen perspective showing wooden dining table and breakfast bar',
    caption: 'Dining corner and kitchen prep counter',
  },

  // --- Section 4: Bedroom (3 photos) ---
  {
    id: 'bed-1',
    category: 'bedroom',
    url: '/images/hero/hero-3.jpg',
    alt: 'Primary bedroom featuring comfortable double bed, crisp white linens, dark wood flooring, and linen drapes',
    caption: 'Tranquil master bedroom with premium mattress and linens',
    isHero: true,
    heroPosition: 'bottom-middle',
  },
  {
    id: 'bed-2',
    category: 'bedroom',
    url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bedroom wardrobe, full length dressing mirror, and luggage storage space',
    caption: 'Wardrobe and vanity area',
  },
  {
    id: 'bed-3',
    category: 'bedroom',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bedside perspective with woven pendant light and silent air conditioning unit',
    caption: 'Bedside lighting and climate control',
  },

  // --- Section 5: Full bathroom (1 photo) ---
  {
    id: 'bath-1',
    category: 'bathroom',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Designer bathroom featuring grey marble tiles, teardrop mirror, modern vanity, and glass shower enclosure',
    caption: 'Spa-style ensuite bathroom with walk-in rain shower',
  },

  // --- Section 6: Gym (3 photos) ---
  {
    id: 'gym-1',
    category: 'gym',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    alt: 'Complex fitness center equipped with commercial treadmills, ellipticals, and stationary cycle',
    caption: 'Resident fitness center cardio equipment',
  },
  {
    id: 'gym-2',
    category: 'gym',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Closeup of free weight dumbbells, benches, and strength conditioning rack',
    caption: 'Strength training and free weights zone',
  },
  {
    id: 'gym-3',
    category: 'gym',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Air-conditioned fitness studio interior with mirrors and stretching mats',
    caption: 'Studio stretching and yoga area',
  },

  // --- Section 7: Exterior (5 photos) ---
  {
    id: 'ext-1',
    category: 'exterior',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    alt: 'Aerial drone panoramic view of Candolim palm tree canopies and peaceful neighborhood',
    caption: 'Aerial canopy over Candolim neighborhood',
  },
  {
    id: 'ext-2',
    category: 'exterior',
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gated entrance driveway of Amor De Goa complex with security gatehouse and palms',
    caption: 'Gated complex entrance and driveway',
  },
  {
    id: 'ext-3',
    category: 'exterior',
    url: '/images/hero/hero-4.jpg?v=2',
    alt: 'Full architectural facade of Amor De Goa residential building with yellow balconies and terracotta roofing',
    caption: 'Amor De Goa complex architectural facade',
    isHero: true,
    heroPosition: 'bottom-right',
  },
  {
    id: 'ext-4',
    category: 'exterior',
    url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    alt: 'Lush landscaped garden pathway connecting the apartments to courtyard amenities',
    caption: 'Tropical landscaped gardens and walkways',
  },
  {
    id: 'ext-5',
    category: 'exterior',
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rear elevation of the resort property bathed in warm Goa sunset glow',
    caption: 'Sunset lighting over the residential wing',
  },

  // --- Section 8: Pool (3 photos) ---
  {
    id: 'pool-1',
    category: 'pool',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Centrally located crystal blue swimming pool with wooden deck sun loungers',
    caption: 'Main courtyard swimming pool and wooden sun deck',
  },
  {
    id: 'pool-2',
    category: 'pool',
    url: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunlit pool waters with tropical potted palms along the poolside terrace',
    caption: 'Poolside relaxation area with shaded umbrellas',
  },
  {
    id: 'pool-3',
    category: 'pool',
    url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Symmetric perspective across the pool toward the residential apartment balconies',
    caption: 'Courtyard overview from pool deck',
  },

  // --- Section 9: Additional photos (19 photos to reach 43 total) ---
  {
    id: 'add-1',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Covered outdoor dining patio with solid teak dining table and ambient ceiling fan',
    caption: 'Covered patio dining space for al fresco meals',
  },
  {
    id: 'add-2',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wicker patio lounge chair with soft decorative cushions',
    caption: 'Comfortable outdoor wicker seating',
  },
  {
    id: 'add-3',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-ceiling covered dining pavilion adjacent to private jacuzzi deck',
    caption: 'Open pavilion with high wooden rafters',
  },
  {
    id: 'add-4',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Terrace utility counter with stainless steel wash sink and front-loading washing machine',
    caption: 'Utility wash counter and laundry facility',
  },
  {
    id: 'add-5',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    alt: 'Artistic wall decor and minimalist decorative pottery in the living area',
    caption: 'Curated interior art and ceramics',
  },
  {
    id: 'add-6',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Living room cozy reading nook with warm floor lamp and armchair',
    caption: 'Cozy reading corner in the living space',
  },
  {
    id: 'add-7',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Designer coffee table with art book and candle centerpiece',
    caption: 'Living room coffee table styling',
  },
  {
    id: 'add-8',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern bedside lamp illuminating handcrafted wooden headboard',
    caption: 'Bedside ambient night lamp',
  },
  {
    id: 'add-9',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bathroom luxury rain shower head with chrome fixtures and natural daylight',
    caption: 'Walk-in rainfall shower fixture',
  },
  {
    id: 'add-10',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gourmet kitchen spice rack and complimentary artisan tea and coffee selection',
    caption: 'Complimentary tea, coffee, and cooking spices',
  },
  {
    id: 'add-11',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Outdoor terrace view of vibrant tropical bougainvillea flowering vines',
    caption: 'Private terrace garden foliage',
  },
  {
    id: 'add-12',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dedicated workspace desk with high-speed WiFi router and ergonomic chair',
    caption: 'Dedicated remote work station with high-speed WiFi',
  },
  {
    id: 'add-13',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    alt: 'Plush decorative throw pillows on bedroom double bed',
    caption: 'Comfortable bedding details',
  },
  {
    id: 'add-14',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    alt: 'Organic cotton bath towels, branded toiletries, and amenities basket',
    caption: 'Fresh towels and complimentary toiletries',
  },
  {
    id: 'add-15',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wide apartment perspective showing smooth open flow from entry to terrace',
    caption: 'Spacious apartment layout perspective',
  },
  {
    id: 'add-16',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm evening lighting in the living room creating an inviting ambiance',
    caption: 'Evening atmosphere in the living suite',
  },
  {
    id: 'add-17',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Outdoor jacuzzi steam and crystal clear water ready for relaxation',
    caption: 'Jacuzzi hydrotherapy jets running',
  },
  {
    id: 'add-18',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Porcelain bathroom vanity with LED backlit organic mirror',
    caption: 'Vanity basin with modern fittings',
  },
  {
    id: 'add-19',
    category: 'additional',
    url: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Private shaded terrace with outdoor ceiling fan and gentle tropical breeze',
    caption: 'Covered terrace retreat',
  },
];

// ============================================================================
// 9 Categorized Room Sections for Photo Tour
// ============================================================================

export const roomSections: RoomSection[] = [
  {
    id: 'living-room-1',
    title: 'Living room 1',
    subtitle: 'Sofa · Air conditioning · Ceiling fan · TV',
    thumbnailUrl: allPhotos.find((p) => p.id === 'lr1-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'living-room-1'),
  },
  {
    id: 'living-room-2',
    title: 'Living room 2',
    subtitle: 'Ceiling fan · Hot tub',
    thumbnailUrl: allPhotos.find((p) => p.id === 'lr2-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'living-room-2'),
  },
  {
    id: 'kitchen',
    title: 'Full kitchen',
    subtitle:
      'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    thumbnailUrl: allPhotos.find((p) => p.id === 'kit-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'kitchen'),
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    subtitle:
      'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    thumbnailUrl: allPhotos.find((p) => p.id === 'bed-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'bedroom'),
  },
  {
    id: 'bathroom',
    title: 'Full bathroom',
    subtitle: 'Hairdryer · Hot water · Shampoo · Shower gel',
    thumbnailUrl: allPhotos.find((p) => p.id === 'bath-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'bathroom'),
  },
  {
    id: 'gym',
    title: 'Gym',
    subtitle: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    thumbnailUrl: allPhotos.find((p) => p.id === 'gym-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'gym'),
  },
  {
    id: 'exterior',
    title: 'Exterior',
    subtitle: 'Exterior building & surrounding neighborhood',
    thumbnailUrl: allPhotos.find((p) => p.id === 'ext-3')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'exterior'),
  },
  {
    id: 'pool',
    title: 'Pool',
    subtitle: 'Pool',
    thumbnailUrl: allPhotos.find((p) => p.id === 'pool-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'pool'),
  },
  {
    id: 'additional',
    title: 'Additional photos',
    subtitle: 'Property highlights & details',
    thumbnailUrl: allPhotos.find((p) => p.id === 'add-1')?.url || '',
    photos: allPhotos.filter((p) => p.category === 'additional'),
  },
];

// ============================================================================
// 50 Categorized Amenities
// ============================================================================

export const listingAmenities: AmenityItem[] = [
  // Bathroom (6)
  { id: 'am-1', label: 'Hair dryer', category: 'Bathroom', iconName: 'HairDryer', isPopular: true },
  { id: 'am-2', label: 'Cleaning products', category: 'Bathroom', iconName: 'Cleanliness' },
  { id: 'am-3', label: 'Shampoo', category: 'Bathroom', iconName: 'Bathroom' },
  { id: 'am-4', label: 'Conditioner', category: 'Bathroom', iconName: 'Bathroom' },
  { id: 'am-5', label: 'Body soap', category: 'Bathroom', iconName: 'Bathroom' },
  { id: 'am-6', label: 'Hot water', category: 'Bathroom', iconName: 'HotWater' },

  // Bedroom and laundry (9)
  { id: 'am-7', label: 'Washing machine in unit', category: 'Bedroom and laundry', iconName: 'Washer', isPopular: true },
  { id: 'am-8', label: 'Essentials (Towels, bed sheets, soap, and toilet paper)', category: 'Bedroom and laundry', iconName: 'Bed' },
  { id: 'am-9', label: 'Hangers', category: 'Bedroom and laundry', iconName: 'Hanger' },
  { id: 'am-10', label: 'Bed linen', category: 'Bedroom and laundry', iconName: 'Bed' },
  { id: 'am-11', label: 'Extra pillows and blankets', category: 'Bedroom and laundry', iconName: 'Bed' },
  { id: 'am-12', label: 'Room-darkening shades', category: 'Bedroom and laundry', iconName: 'Shades' },
  { id: 'am-13', label: 'Iron', category: 'Bedroom and laundry', iconName: 'Iron' },
  { id: 'am-14', label: 'Clothes drying rack', category: 'Bedroom and laundry', iconName: 'Laundry' },
  { id: 'am-15', label: 'Wardrobe and chest of drawers', category: 'Bedroom and laundry', iconName: 'Wardrobe' },

  // Entertainment (3)
  { id: 'am-16', label: '55" HDTV with standard cable and Netflix', category: 'Entertainment', iconName: 'Tv', isPopular: true },
  { id: 'am-17', label: 'Bluetooth sound system', category: 'Entertainment', iconName: 'Music' },
  { id: 'am-18', label: 'Books and reading material', category: 'Entertainment', iconName: 'Books' },

  // Heating and cooling (2)
  { id: 'am-19', label: 'Air conditioning', category: 'Heating and cooling', iconName: 'Ac', isPopular: true },
  { id: 'am-20', label: 'Ceiling fan', category: 'Heating and cooling', iconName: 'Fan' },

  // Home safety (5)
  { id: 'am-21', label: 'Smoke alarm', category: 'Home safety', iconName: 'SmokeAlarm', isPopular: true },
  { id: 'am-22', label: 'Carbon monoxide alarm', category: 'Home safety', iconName: 'CarbonMonoxideAlarm', isPopular: true },
  { id: 'am-23', label: 'Fire extinguisher', category: 'Home safety', iconName: 'FireExtinguisher' },
  { id: 'am-24', label: 'First aid kit', category: 'Home safety', iconName: 'FirstAid' },
  { id: 'am-25', label: 'Exterior security cameras on property', category: 'Home safety', iconName: 'SecurityCamera', isPopular: true },

  // Internet and office (2)
  { id: 'am-26', label: 'Fast wifi – 150 Mbps', category: 'Internet and office', iconName: 'Wifi', isPopular: true },
  { id: 'am-27', label: 'Dedicated workspace (desk with chair)', category: 'Internet and office', iconName: 'Workspace', isPopular: true },

  // Kitchen and dining (12)
  { id: 'am-28', label: 'Kitchen (space where guests can cook their own meals)', category: 'Kitchen and dining', iconName: 'Kitchen', isPopular: true },
  { id: 'am-29', label: 'Refrigerator', category: 'Kitchen and dining', iconName: 'Fridge' },
  { id: 'am-30', label: 'Microwave', category: 'Kitchen and dining', iconName: 'Microwave' },
  { id: 'am-31', label: 'Cooking basics (pots and pans, oil, salt and pepper)', category: 'Kitchen and dining', iconName: 'Cookware' },
  { id: 'am-32', label: 'Dishes and silverware (bowls, plates, cups)', category: 'Kitchen and dining', iconName: 'Dishes' },
  { id: 'am-33', label: 'Freezer', category: 'Kitchen and dining', iconName: 'Freezer' },
  { id: 'am-34', label: 'Gas cooker and stove', category: 'Kitchen and dining', iconName: 'Stove' },
  { id: 'am-35', label: 'Hot water kettle', category: 'Kitchen and dining', iconName: 'Kettle' },
  { id: 'am-36', label: 'Coffee maker', category: 'Kitchen and dining', iconName: 'Coffee' },
  { id: 'am-37', label: 'Wine glasses', category: 'Kitchen and dining', iconName: 'Wine' },
  { id: 'am-38', label: 'Toaster', category: 'Kitchen and dining', iconName: 'Toaster' },
  { id: 'am-39', label: 'Dining table', category: 'Kitchen and dining', iconName: 'Table' },

  // Location features (2)
  { id: 'am-40', label: 'Private entrance (separate street or building entrance)', category: 'Location features', iconName: 'Door' },
  { id: 'am-41', label: 'Resort access (guests can use nearby resort facilities)', category: 'Location features', iconName: 'Resort' },

  // Outdoor (4)
  { id: 'am-42', label: 'Private patio or balcony', category: 'Outdoor', iconName: 'Balcony', isPopular: true },
  { id: 'am-43', label: 'Private hot tub (hydrotherapy jacuzzi on deck)', category: 'Outdoor', iconName: 'HotTub', isPopular: true },
  { id: 'am-44', label: 'Outdoor dining area', category: 'Outdoor', iconName: 'Dining' },
  { id: 'am-45', label: 'Outdoor furniture and sun lounger', category: 'Outdoor', iconName: 'Chair' },

  // Parking and facilities (3)
  { id: 'am-46', label: 'Free parking on premises', category: 'Parking and facilities', iconName: 'Parking', isPopular: true },
  { id: 'am-47', label: 'Shared outdoor pool (available all year)', category: 'Parking and facilities', iconName: 'Pool', isPopular: true },
  { id: 'am-48', label: 'Shared gym in building', category: 'Parking and facilities', iconName: 'Gym', isPopular: true },

  // Services (2)
  { id: 'am-49', label: 'Long-term stays allowed (28+ days)', category: 'Services', iconName: 'Calendar' },
  { id: 'am-50', label: 'Self check-in with keypad smart lock', category: 'Services', iconName: 'Key', isPopular: true },
];

// ============================================================================
// 19 Guest Reviews
// ============================================================================

export const listingReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    authorName: 'Amit',
    authorDuration: '2 months on Airbnb',
    rating: 5,
    date: '1 week ago',
    comment:
      'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
  },
  {
    id: 'rev-2',
    authorName: 'Aheesh',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    authorDuration: '3 years on Airbnb',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
  },
  {
    id: 'rev-3',
    authorName: 'Samiksha',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    authorDuration: '8 months on Airbnb',
    rating: 5,
    date: 'May 2026',
    comment: 'the host nitish was really great help',
  },
  {
    id: 'rev-4',
    authorName: 'Vedant',
    authorDuration: '4 years on Airbnb',
    rating: 5,
    date: 'May 2026',
    comment:
      'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
  },
  {
    id: 'rev-5',
    authorName: 'Vaibhav S',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    authorDuration: '3 years on Airbnb',
    rating: 5,
    date: 'May 2026',
    comment:
      'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.',
  },
  {
    id: 'rev-6',
    authorName: 'Mohd',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    authorDuration: '5 years on Airbnb',
    rating: 5,
    date: 'May 2026',
    comment: 'Great place. Exactly as described in the listing.',
  },
  {
    id: 'rev-7',
    authorName: 'Rohan',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 2 nights',
    rating: 5,
    date: 'June 2026',
    comment:
      'A wonderful oasis in Candolim! Peaceful neighborhood while still being close to supermarkets, cafes, and shacks. The gym was well equipped and the apartment was thoroughly sanitized.',
  },
  {
    id: 'rev-8',
    authorName: 'Meera',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 4 nights',
    rating: 5,
    date: 'May 2026',
    comment:
      'From the comfortable king bed to the relaxing hot tub, Mirashya has thought of everything. The apartment is stylishly decorated with great aesthetic taste.',
  },
  {
    id: 'rev-9',
    authorName: 'Karan',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 7 nights',
    rating: 5,
    date: 'April 2026',
    comment:
      'Stayed for a week of remote work. The 150 Mbps WiFi connection was flawless. Having a dedicated desk and quiet surroundings made it productive and refreshing.',
  },
  {
    id: 'rev-8',
    authorName: 'Pooja',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 3 nights',
    rating: 5,
    date: 'March 2026',
    comment:
      'The jacuzzi deck is completely private and felt like our own mini private resort. Excellent communication and seamless coordination throughout our visit.',
  },
  {
    id: 'rev-9',
    authorName: 'Dev',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 5 nights',
    rating: 4,
    date: 'February 2026',
    comment:
      'Fantastic apartment, true to the photos. Great location close to Candolim beach. Only small note is finding parking during peak evening hours, but security guard assisted promptly.',
  },
  {
    id: 'rev-10',
    authorName: 'Kavita',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 4 nights',
    rating: 5,
    date: 'January 2026',
    comment:
      'Everything was five stars! The bathroom is sparkling clean with hot water around the clock. The complex is quiet and secure with 24/7 security staff.',
  },
  {
    id: 'rev-11',
    authorName: 'Siddharth',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 3 nights',
    rating: 5,
    date: 'December 2025',
    comment:
      'Celebrated New Year’s in Goa and this was the perfect sanctuary. Super comfortable sofa, Smart TV with all streaming apps, and lovely terrace ambiance.',
  },
  {
    id: 'rev-12',
    authorName: 'Ayesha',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 4 nights',
    rating: 5,
    date: 'November 2025',
    comment:
      'Host Mirashya and co-host Rohit were so helpful before and during our stay. The apartment was ready early and spotlessly clean. Can’t wait to return.',
  },
  {
    id: 'rev-13',
    authorName: 'Nikhil',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 2 nights',
    rating: 5,
    date: 'October 2025',
    comment:
      'Ideal place for a couple looking for privacy and comfort. The jacuzzi heats up well and provides great jet pressure. Highly recommend!',
  },
  {
    id: 'rev-14',
    authorName: 'Rhea',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 5 nights',
    rating: 5,
    date: 'September 2025',
    comment:
      'Felt like home the moment we stepped in. The kitchen had all the essentials to cook light meals and morning coffee on the balcony was magical.',
  },
  {
    id: 'rev-15',
    authorName: 'Aditya',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 3 nights',
    rating: 5,
    date: 'August 2025',
    comment:
      'Unbelievable value for money in Candolim! The gym is well-maintained and the pool is huge and clean. Top notch property.',
  },
  {
    id: 'rev-16',
    authorName: 'Tanvi',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 4 nights',
    rating: 5,
    date: 'July 2025',
    comment:
      'The apartment is beautifully designed with quality fixtures and furniture. The bed linen is soft and luxurious. Thank you Mirashya!',
  },
  {
    id: 'rev-17',
    authorName: 'Sameer',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 6 nights',
    rating: 5,
    date: 'June 2025',
    comment:
      'Great location—quiet residential lane yet 5 minutes from Candolim main road. The private terrace made our trip memorable.',
  },
  {
    id: 'rev-18',
    authorName: 'Isha',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 3 nights',
    rating: 5,
    date: 'May 2025',
    comment:
      'Cleanliness was 10/10. Fresh smelling towels, spotless bathroom and kitchen. The jacuzzi was completely clean and ready to use.',
  },
  {
    id: 'rev-19',
    authorName: 'Varun',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    authorDuration: 'Stayed 5 nights',
    rating: 5,
    date: 'April 2025',
    comment:
      'One of the best Airbnbs I have stayed at in Goa. Modern, upscale, quiet, and the hosts are prompt and accommodating.',
  },
];

// ============================================================================
// Master Listing Details Object
// ============================================================================

export const listingData: ListingDetails = {
  id: 'romantic-jacuzzi-1bhk-candolim-mirashya-ug10',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  location: 'Candolim, Goa, India',
  neighborhood: 'Candolim, North Goa',
  propertyType: 'Entire serviced apartment in Candolim, India',
  guestCapacity: 3,
  bedroomsCount: 1,
  bedsCount: 1,
  bathroomsCount: 1,
  overallRating: 4.95,
  totalReviews: 19,
  isGuestFavourite: true,
  description: [
    '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨',
    '1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect getaway.',
    'Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and access to a shared pool 🏊‍♂️.',
    'Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife!',
  ],
  sleepingArrangements: [
    {
      title: 'Bedroom',
      description: '1 double bed',
      iconType: 'double-bed',
    },
    {
      title: 'Living room',
      description: '1 sofa bed',
      iconType: 'sofa',
    },
  ],
  pricing: {
    nightlyRate: 5699.8,
    defaultNights: 5,
    cleaningFee: 1500,
    serviceFee: 3200,
    discountPercent: 10,
  },
  ratings: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.8,
  },
  host: {
    name: 'Mirashya Homes',
    avatarUrl: '/images/host/mirashya-avatar.png',
    isSuperhost: true,
    isVerified: true,
    reviewsCount: 1463,
    rating: 4.68,
    hostingYears: 2,
    responseRate: '100%',
    responseTime: 'within an hour',
    coHosts: [
      {
        name: 'Sharath',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Aman Dev Pahwa',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Maria Karen Priyanka',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Simran',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Pallavi',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Sanyukta',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Shruti',
        avatarUrl: '', // Letter avatar
      },
      {
        name: 'Amisha',
        avatarUrl: '', // Letter avatar
      },
    ],
  },
  amenities: listingAmenities,
  reviews: listingReviews,
  roomSections: roomSections,
  allPhotos: allPhotos,
};

export default listingData;
