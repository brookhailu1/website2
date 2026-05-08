export type Room = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  size: string;
  beds: string;
  occupancy: string;
  view: string;
  amenities: string[];
  description: string;
  features: string[];
  rating: number;
  reviews: number;
};

export const rooms: Room[] = [
  {
    id: "1",
    name: "Deluxe Ocean View",
    price: 299,
    originalPrice: 349,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    ],
    size: "42m²",
    beds: "1 King Bed",
    occupancy: "2 Adults",
    view: "Ocean View",
    amenities: [
      "Free WiFi",
      "Mini Bar",
      "Ocean View",
      "Room Service",
      "Air Conditioning",
    ],
    description:
      "Elegant room with breathtaking ocean views and modern amenities for the perfect getaway.",
    features: ["Ocean View", "King Bed", "42m²"],
    rating: 4.8,
    reviews: 127,
  },
  {
    id: "2",
    name: "Executive Suite",
    price: 499,
    originalPrice: 599,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    ],
    size: "65m²",
    beds: "1 King Bed",
    occupancy: "2-3 Adults",
    view: "City View",
    amenities: [
      "Free WiFi",
      "Living Area",
      "City View",
      "Executive Lounge",
      "Premium Toiletries",
    ],
    description:
      "Spacious suite with separate living area and premium city views for business and leisure travelers.",
    features: ["City View", "Living Area", "65m²"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Presidential Suite",
    price: 899,
    originalPrice: 1099,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    ],
    size: "120m²",
    beds: "1 King Bed + Sofa Bed",
    occupancy: "4 Adults",
    view: "Panoramic View",
    amenities: [
      "Free WiFi",
      "Private Terrace",
      "Butler Service",
      "Jacuzzi",
      "Premium Bar",
    ],
    description:
      "The ultimate luxury experience with panoramic views, private terrace, and dedicated butler service.",
    features: ["Panoramic View", "Private Terrace", "120m²"],
    rating: 5,
    reviews: 56,
  },
  {
    id: "4",
    name: "Garden Villa",
    price: 699,
    originalPrice: 799,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
    ],
    size: "85m²",
    beds: "1 King Bed",
    occupancy: "2 Adults",
    view: "Garden View",
    amenities: [
      "Free WiFi",
      "Private Garden",
      "Outdoor Shower",
      "Kitchenette",
      "BBQ Area",
    ],
    description:
      "Private villa with beautiful garden setting, perfect for romantic getaways and special occasions.",
    features: ["Garden View", "Private Garden", "85m²"],
    rating: 4.7,
    reviews: 73,
  },
  {
    id: "5",
    name: "Family Suite",
    price: 549,
    originalPrice: 649,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    ],
    size: "75m²",
    beds: "1 King + 2 Twin Beds",
    occupancy: "4-6 Adults",
    view: "Pool View",
    amenities: [
      "Free WiFi",
      "Connecting Rooms",
      "Kids Amenities",
      "Pool Access",
      "Game Console",
    ],
    description:
      "Perfect for families with connecting rooms, kids amenities, and direct pool access.",
    features: ["Pool View", "Family Friendly", "75m²"],
    rating: 4.6,
    reviews: 112,
  },
  {
    id: "6",
    name: "Penthouse Suite",
    price: 1299,
    originalPrice: 1499,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
    ],
    size: "200m²",
    beds: "2 King Beds + Living Area",
    occupancy: "6 Adults",
    view: "360° City View",
    amenities: [
      "Free WiFi",
      "Private Elevator",
      "Rooftop Terrace",
      "Personal Chef",
      "Helicopter Pad",
    ],
    description:
      "The crown jewel of luxury accommodations with 360-degree city views and exclusive amenities.",
    features: ["360° View", "Rooftop Terrace", "200m²"],
    rating: 5,
    reviews: 28,
  },
];
