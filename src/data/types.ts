export type RoomCategory =
  | 'living-room-1'
  | 'living-room-2'
  | 'kitchen'
  | 'bedroom'
  | 'bathroom'
  | 'gym'
  | 'exterior'
  | 'pool'
  | 'additional';

export interface ListingPhoto {
  id: string;
  category: RoomCategory;
  url: string;
  alt: string;
  caption?: string;
  isHero?: boolean;
  heroPosition?: 'main' | 'top-middle' | 'top-right' | 'bottom-middle' | 'bottom-right';
}

export interface RoomSection {
  id: RoomCategory;
  title: string;
  subtitle?: string;
  thumbnailUrl: string;
  photos: ListingPhoto[];
}

export type AmenityCategory =
  | 'Bathroom'
  | 'Bedroom and laundry'
  | 'Entertainment'
  | 'Heating and cooling'
  | 'Home safety'
  | 'Internet and office'
  | 'Kitchen and dining'
  | 'Location features'
  | 'Outdoor'
  | 'Parking and facilities'
  | 'Services';

export interface AmenityItem {
  id: string;
  label: string;
  category: AmenityCategory;
  iconName: string;
  isPopular?: boolean;
  isStrikethrough?: boolean;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  authorAvatarUrl?: string;
  authorDuration: string;
  rating: number;
  date: string;
  comment: string;
}

export interface RatingCategoryScores {
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface CoHost {
  name: string;
  avatarUrl: string;
}

export interface HostProfile {
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  isVerified: boolean;
  reviewsCount: number;
  rating: number;
  hostingYears: number;
  responseRate: string;
  responseTime: string;
  coHosts: CoHost[];
}

export interface ReservationPricing {
  nightlyRate: number;
  defaultNights: number;
  cleaningFee: number;
  serviceFee: number;
  discountPercent?: number;
}

export interface SleepingArrangement {
  title: string;
  description: string;
  iconType: 'double-bed' | 'sofa';
}

export interface ListingDetails {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  propertyType: string;
  guestCapacity: number;
  bedroomsCount: number;
  bedsCount: number;
  bathroomsCount: number;
  overallRating: number;
  totalReviews: number;
  isGuestFavourite: boolean;
  description: string[];
  sleepingArrangements: SleepingArrangement[];
  pricing: ReservationPricing;
  ratings: RatingCategoryScores;
  host: HostProfile;
  amenities: AmenityItem[];
  reviews: ReviewItem[];
  roomSections: RoomSection[];
  allPhotos: ListingPhoto[];
}
