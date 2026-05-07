import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Star,
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Users,
  Bed,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Maximize,
  Eye,
  Crown,
  Filter,
  SortDesc,
} from "lucide-react";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      rating: 5.0,
      reviews: 56,
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      rating: 5.0,
      reviews: 28,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-hotel-50 to-luxury-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              asChild
              className="text-luxury-600 hover:text-luxury-700 p-0 mr-4"
            >
              <Link to="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <Crown className="w-8 h-8 text-luxury-600" />
            <span className="text-luxury-600 font-medium text-lg">
              Golden Oasis Collection
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-hotel-900 mb-4">
            Luxury Accommodations
          </h1>
          <p className="text-xl text-hotel-600 max-w-3xl">
            Discover our collection of elegantly appointed rooms and suites,
            each designed to provide the ultimate in comfort and sophistication.
            Every detail crafted to exceed your expectations.
          </p>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-card border border-border shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Check-in
                  </label>
                  <div className="p-3 border border-border rounded-lg bg-background cursor-pointer hover:border-hotel-300 transition-colors">
                    <div className="text-sm text-muted-foreground">
                      Select date
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Check-out
                  </label>
                  <div className="p-3 border border-border rounded-lg bg-background cursor-pointer hover:border-hotel-300 transition-colors">
                    <div className="text-sm text-muted-foreground">
                      Select date
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Guests
                  </label>
                  <div className="p-3 border border-border rounded-lg bg-background cursor-pointer hover:border-hotel-300 transition-colors flex items-center">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      2 Adults
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Room Type
                  </label>
                  <div className="p-3 border border-border rounded-lg bg-background cursor-pointer hover:border-hotel-300 transition-colors">
                    <div className="text-sm text-muted-foreground">
                      All Rooms
                    </div>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-hotel-600 hover:bg-hotel-700 text-white h-12">
                    Update Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Card
                key={room.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${room.image}')` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-luxury-500 text-hotel-900 font-semibold">
                        ${room.price}/night
                      </Badge>
                      {room.originalPrice > room.price && (
                        <Badge
                          variant="secondary"
                          className="ml-2 line-through"
                        >
                          ${room.originalPrice}
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-hotel-900">
                      {room.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-luxury-400 text-luxury-400" />
                      <span className="text-sm font-medium">{room.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({room.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Maximize className="w-4 h-4 text-hotel-600" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-hotel-600" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-hotel-600" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-hotel-600" />
                      <span>{room.view}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{room.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-hotel-900">
                        ${room.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          /night
                        </span>
                      </div>
                      {room.originalPrice > room.price && (
                        <div className="text-sm text-muted-foreground line-through">
                          ${room.originalPrice}
                        </div>
                      )}
                    </div>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        className="border-hotel-600 text-hotel-600 hover:bg-hotel-50"
                      >
                        View Details
                      </Button>
                      <Button className="bg-hotel-600 hover:bg-hotel-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-20 bg-hotel-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Need Assistance?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our reservation specialists are available 24/7 to help you find
                the perfect accommodation and create unforgettable experiences
                at Golden Oasis.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-luxury-400 mt-1" />
                  <div>
                    <div className="font-semibold">Reservations</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-luxury-400 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      reservations@goldenoasis.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-luxury-400 mt-1" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">
                      123 Luxury Boulevard, Downtown District, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Exclusive Offers</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <div className="font-semibold text-luxury-400">
                    Golden Circle Member
                  </div>
                  <div className="text-sm text-gray-300">
                    Save up to 30% with our exclusive loyalty program
                  </div>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <div className="font-semibold text-luxury-400">
                    Extended Oasis Stay
                  </div>
                  <div className="text-sm text-gray-300">
                    Stay 4 nights or more and receive complimentary spa access
                  </div>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg">
                  <div className="font-semibold text-luxury-400">
                    Luxury Weekend
                  </div>
                  <div className="text-sm text-gray-300">
                    Special weekend packages with fine dining included
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full mt-6 luxury-gradient text-hotel-900 hover:opacity-90"
              >
                <Link to="/booking">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book with Offers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
