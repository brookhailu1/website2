/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// User Authentication
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: "guest" | "admin" | "staff";
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  expiresIn: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

// Room Management
export interface Room {
  id: string;
  name: string;
  description: string;
  type: "deluxe" | "executive" | "suite" | "presidential";
  price: number;
  capacity: {
    adults: number;
    children: number;
  };
  size: number; // in square meters
  amenities: string[];
  images: string[];
  features: string[];
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RoomSearchRequest {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface RoomAvailability {
  room: Room;
  available: boolean;
  price: number;
  totalPrice: number;
  nights: number;
}

// Booking Management
export interface Booking {
  id: string;
  userId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
  };
  totalAmount: number;
  currency: string;
  status: "pending" | "confirmed" | "checked-in" | "checked-out" | "cancelled";
  addOns: AddOn[];
  specialRequests?: string;
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  paymentIntentId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "breakfast" | "spa" | "transfer" | "activity" | "other";
}

export interface BookingRequest {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
  };
  addOns?: string[];
  specialRequests?: string;
  promoCode?: string;
}

export interface BookingConfirmation {
  booking: Booking;
  room: Room;
  user: User;
  totalAmount: number;
  confirmationNumber: string;
}

// Payment
export interface PaymentIntent {
  clientSecret: string;
  amount: number;
  currency: string;
  bookingId: string;
}

export interface PaymentRequest {
  bookingId: string;
  paymentMethodId: string;
}

// Blog & Content
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

// Gallery
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category: "rooms" | "facilities" | "dining" | "spa" | "events" | "exterior";
  featured: boolean;
  createdAt: string;
}

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  roomType?: string;
  stayDate?: string;
  verified: boolean;
  featured: boolean;
  createdAt: string;
}

// Facilities
export interface Facility {
  id: string;
  name: string;
  description: string;
  category:
    | "dining"
    | "spa"
    | "fitness"
    | "business"
    | "recreation"
    | "services";
  image: string;
  features: string[];
  hours: {
    opening: string;
    closing: string;
  };
  available: boolean;
}

// Contact & Inquiries
export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: "general" | "booking" | "events" | "corporate" | "feedback";
}

// Promotions
export interface Promotion {
  id: string;
  code: string;
  title: string;
  description: string;
  type: "percentage" | "fixed";
  value: number;
  minStay?: number;
  validFrom: string;
  validTo: string;
  active: boolean;
  usageLimit?: number;
  usageCount: number;
}

// Admin Analytics
export interface BookingStats {
  totalBookings: number;
  totalRevenue: number;
  occupancyRate: number;
  averageStay: number;
  topRoomType: string;
  monthlyTrend: {
    month: string;
    bookings: number;
    revenue: number;
  }[];
}

// API Response Wrappers
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
