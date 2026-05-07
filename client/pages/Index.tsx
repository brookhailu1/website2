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
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Bed,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-hotel-600 to-luxury-500 rounded-lg flex items-center justify-center">
                <Bed className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-hotel-900">
                Grandeur Hotel
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-hotel-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/rooms"
                className="text-foreground hover:text-hotel-600 transition-colors"
              >
                Rooms
              </Link>
              <Link
                to="/amenities"
                className="text-foreground hover:text-hotel-600 transition-colors"
              >
                Amenities
              </Link>
              <Link
                to="/dining"
                className="text-foreground hover:text-hotel-600 transition-colors"
              >
                Dining
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-hotel-600 transition-colors"
              >
                Contact
              </Link>
              <Button className="bg-hotel-600 hover:bg-hotel-700 text-white">
                Book Now
              </Button>
            </div>
            <Button className="md:hidden bg-hotel-600 hover:bg-hotel-700 text-white">
              Menu
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-900/80 to-hotel-800/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience
            <span className="text-luxury-400 block">Luxury Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover unparalleled elegance in the heart of the city. Where every
            moment becomes a cherished memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-luxury-500 hover:bg-luxury-600 text-hotel-900 text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reserve Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-hotel-900 text-lg px-8 py-6"
            >
              Explore Rooms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="relative -mt-16 z-30 max-w-6xl mx-auto px-4">
        <Card className="bg-card/95 backdrop-blur-sm border border-border shadow-2xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <div className="flex items-end">
                <Button className="w-full bg-hotel-600 hover:bg-hotel-700 text-white h-12">
                  Search Availability
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hotel-900 mb-4">
              Exquisite Accommodations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each room is a sanctuary of comfort and style, designed to exceed
              your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Deluxe Ocean View",
                price: "$299",
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
                features: ["Ocean View", "King Bed", "42m²"],
              },
              {
                name: "Executive Suite",
                price: "$499",
                image:
                  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
                features: ["City View", "Living Area", "65m²"],
              },
              {
                name: "Presidential Suite",
                price: "$899",
                image:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070",
                features: ["Panoramic View", "Private Terrace", "120m²"],
              },
            ].map((room, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('{room.image}')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-luxury-500 text-hotel-900 font-semibold">
                      {room.price}/night
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-hotel-900 mb-2">
                    {room.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-luxury-400 text-luxury-400"
                        />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="text-hotel-600 hover:text-hotel-700 p-0"
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-hotel-600 hover:bg-hotel-700 text-white"
            >
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hotel-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Indulge in premium facilities designed for your comfort and
              enjoyment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Infinity Pool",
                description: "Rooftop pool with city skyline views",
              },
              {
                icon: Utensils,
                title: "Fine Dining",
                description: "Michelin-starred restaurants and bars",
              },
              {
                icon: Coffee,
                title: "24/7 Room Service",
                description: "Gourmet meals delivered to your room",
              },
              {
                icon: Wifi,
                title: "High-Speed WiFi",
                description: "Complimentary internet throughout the hotel",
              },
              {
                icon: Car,
                title: "Valet Parking",
                description: "Premium parking with concierge service",
              },
              {
                icon: Star,
                title: "Spa & Wellness",
                description: "Full-service spa and fitness center",
              },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-hotel-100 to-luxury-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-hotel-600" />
                </div>
                <h3 className="text-xl font-bold text-hotel-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hotel-900 mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear what our guests say about their stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                location: "New York",
                review:
                  "Absolutely exceptional service and stunning views. The attention to detail is remarkable.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                location: "Los Angeles",
                review:
                  "The most luxurious hotel stay I've ever experienced. Every moment was perfect.",
                rating: 5,
              },
              {
                name: "Emma Thompson",
                location: "London",
                review:
                  "Outstanding hospitality and beautiful rooms. Will definitely return on my next visit.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-luxury-400 text-luxury-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="font-semibold text-hotel-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 bg-hotel-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Grandeur Hotel</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-luxury-400 mt-1" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">
                      123 Luxury Boulevard
                      <br />
                      Downtown District, NY 10001
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-luxury-400 mt-1" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-luxury-400 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      reservations@grandeurhotel.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Book?</h3>
              <p className="text-gray-300 mb-6">
                Experience luxury like never before. Our concierge team is ready
                to create your perfect stay.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-luxury-500 hover:bg-luxury-600 text-hotel-900"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Direct & Save
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-hotel-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Reservations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hotel-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-hotel-600 to-luxury-500 rounded-lg flex items-center justify-center">
              <Bed className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Grandeur Hotel</span>
          </div>
          <p className="text-gray-400">
            © 2024 Grandeur Hotel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
