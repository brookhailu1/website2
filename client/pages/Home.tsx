import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Award,
  Shield,
  Heart,
  Crown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const featuredRooms = [
  {
    id: "1",
    name: "Deluxe Ocean View",
    price: 399,
    originalPrice: 499,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    features: ["Ocean View", "King Bed", "42m²", "Private Balcony"],
    amenities: ["Wi-Fi", "Mini Bar", "Room Service", "Concierge"],
  },
  {
    id: "2",
    name: "Executive Suite",
    price: 699,
    originalPrice: 849,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    features: ["City View", "Living Area", "65m²", "Work Desk"],
    amenities: ["Wi-Fi", "Kitchenette", "24/7 Service", "Business Center"],
  },
  {
    id: "3",
    name: "Presidential Suite",
    price: 1299,
    originalPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
    features: ["Panoramic View", "Private Terrace", "120m²", "Dining Area"],
    amenities: ["Butler Service", "Private Chef", "Spa Access", "Limousine"],
  },
];

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool & Spa",
    description: "Rooftop infinity pool with panoramic city views and spa",
  },
  {
    icon: Utensils,
    title: "Michelin Star Dining",
    description: "Award-winning restaurants with world-class cuisine",
  },
  {
    icon: Coffee,
    title: "24/7 Concierge",
    description: "Personalized service available around the clock",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary ultra-fast internet throughout",
  },
  {
    icon: Car,
    title: "Luxury Transportation",
    description: "Valet parking and luxury car service available",
  },
  {
    icon: Crown,
    title: "VIP Services",
    description: "Exclusive access to premium amenities and experiences",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    location: "New York, USA",
    review:
      "The epitome of luxury and elegance. Every detail was perfect, from the stunning ocean views to the impeccable service. The staff anticipated our every need.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=100&h=100&fit=crop&crop=face",
    stayDate: "October 2024",
    roomType: "Presidential Suite",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    location: "Los Angeles, USA",
    review:
      "An extraordinary experience that exceeded all expectations. The attention to detail and personalized service made our anniversary celebration truly magical.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    stayDate: "September 2024",
    roomType: "Executive Suite",
  },
  {
    id: "3",
    name: "Emma Thompson",
    location: "London, UK",
    review:
      "Golden Oasis redefined luxury for me. The spa treatments were divine, the dining exceptional, and the staff made us feel like royalty throughout our stay.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    stayDate: "November 2024",
    roomType: "Deluxe Ocean View",
  },
];

const awards = [
  {
    icon: Award,
    title: "World's Best Hotel 2024",
    organization: "Travel Excellence Awards",
  },
  {
    icon: Star,
    title: "5-Star Diamond Rating",
    organization: "Luxury Hotel Association",
  },
  {
    icon: Crown,
    title: "Best Luxury Experience",
    organization: "International Tourism Board",
  },
  {
    icon: Heart,
    title: "Guest Choice Award",
    organization: "TripAdvisor Travelers' Choice",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 luxury-gradient rounded-full opacity-5 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 hotel-gradient rounded-full opacity-5 translate-x-48 translate-y-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-6 py-3 mb-8 border border-luxury-200/30 scale-in">
              <Sparkles className="w-5 h-5 text-luxury-600 pulse-luxury" />
              <span className="text-sm font-semibold text-luxury-700 tracking-wider">
                EXPERIENCE TRUE LUXURY
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hotel-900 mb-8 leading-tight slide-up luxury-text-shadow">
              A Symphony of
              <span className="text-luxury-600 block font-serif italic relative">
                Elegance & Comfort
                <div className="absolute -top-8 -right-8 w-16 h-16 luxury-gradient rounded-full opacity-20 floating"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-hotel-600 leading-relaxed mb-10 slide-up opacity-90">
              Nestled in the heart of the city, Golden Oasis offers an
              unparalleled luxury experience where every detail is crafted to
              perfection. From our world-class amenities to our personalized
              service, we create moments that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center scale-in">
              <Button
                asChild
                size="lg"
                className="btn-luxury text-lg px-8 py-4 h-auto hover-lift rounded-xl"
              >
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-luxury-300 text-luxury-700 hover:bg-luxury-50 hover:border-luxury-400 text-lg px-8 py-4 h-auto hover-lift rounded-xl transition-all duration-300"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gradient-to-b from-background via-luxury-50/20 to-hotel-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-400/10 rounded-full floating"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-hotel-400/10 rounded-full floating animation-delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <Crown className="w-8 h-8 text-luxury-600 mx-auto mb-4 pulse-luxury" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hotel-900 mb-6 slide-up luxury-text-shadow">
              Exquisite Accommodations
            </h2>
            <p className="text-xl md:text-2xl text-hotel-600 max-w-3xl mx-auto leading-relaxed slide-up">
              Each room is a sanctuary of comfort and style, designed to exceed
              your expectations with premium amenities and breathtaking views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <Card
                key={room.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl luxury-shadow transition-all duration-700 hover:-translate-y-4 card-luxury rounded-2xl"
              >
                <div className="relative h-72 overflow-hidden rounded-t-2xl">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4">
                    <Badge className="luxury-gradient text-hotel-900 font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                      Save{" "}
                      {(
                        ((room.originalPrice - room.price) /
                          room.originalPrice) *
                        100
                      ).toFixed(0)}
                      %
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="glass-effect rounded-xl px-4 py-3 border border-white/30">
                      <div className="text-sm text-white/80 line-through font-medium">
                        ${room.originalPrice}
                      </div>
                      <div className="text-lg font-bold text-white">
                        ${room.price}/night
                      </div>
                    </div>
                  </div>

                  {/* Luxury corner decoration */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-luxury-400 text-luxury-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-hotel-900 luxury-text-shadow">
                      {room.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-luxury-400 text-luxury-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-luxury-50 text-luxury-700 border border-luxury-200 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-hotel-600 mb-3 tracking-wide">
                      Premium Amenities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-hotel-600 bg-hotel-50 px-3 py-1.5 rounded-lg border border-hotel-100 font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-luxury-100">
                    <div className="flex flex-col">
                      <div className="text-2xl font-bold text-luxury-600">
                        ${room.price}
                        <span className="text-lg font-normal text-hotel-500">
                          /night
                        </span>
                      </div>
                      <div className="text-sm text-hotel-400 line-through">
                        Was ${room.originalPrice}
                      </div>
                    </div>
                    <Button
                      asChild
                      className="btn-luxury hover-lift rounded-xl px-6 py-2"
                    >
                      <Link to={`/rooms/${room.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
              className="hotel-gradient text-white hover:opacity-90"
            >
              <Link to="/rooms">
                View All Rooms & Suites
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* World-Class Amenities */}
      <section className="py-20 relative overflow-hidden">
        {/* Elegant background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-40 h-40 luxury-gradient rounded-full floating"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 hotel-gradient rounded-full floating animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-1 h-8 luxury-gradient rounded-full"></div>
              <Sparkles className="w-6 h-6 text-luxury-600 pulse-luxury" />
              <div className="w-1 h-8 luxury-gradient rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hotel-900 mb-6 slide-up luxury-text-shadow">
              World-Class Amenities
            </h2>
            <p className="text-xl md:text-2xl text-hotel-600 max-w-3xl mx-auto leading-relaxed slide-up">
              Indulge in premium facilities and services designed to elevate
              your stay to extraordinary heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className="text-center p-10 border-0 shadow-lg hover:shadow-2xl luxury-shadow transition-all duration-500 hover:-translate-y-3 group card-luxury rounded-2xl relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 luxury-gradient opacity-10 rounded-bl-full"></div>

                <div className="w-24 h-24 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <amenity.icon className="w-12 h-12 text-hotel-900" />
                </div>
                <h3 className="text-2xl font-bold text-hotel-900 mb-4 luxury-text-shadow">
                  {amenity.title}
                </h3>
                <p className="text-hotel-600 leading-relaxed text-lg">
                  {amenity.description}
                </p>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-luxury-300 text-luxury-700 hover:bg-luxury-50"
            >
              <Link to="/facilities">
                Explore All Facilities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-20 bg-gradient-to-b from-hotel-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hotel-900 mb-4">
              Cherished Memories
            </h2>
            <p className="text-xl text-hotel-600">
              Hear from our valued guests about their extraordinary experiences
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl luxury-shadow">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-luxury-400 text-luxury-400"
                        />
                      ),
                    )}
                  </div>
                  <blockquote className="text-2xl md:text-3xl text-hotel-700 font-serif italic leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].review}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold text-hotel-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-hotel-600">
                        {testimonials[currentTestimonial].location}
                      </div>
                      <div className="text-sm text-luxury-600">
                        {testimonials[currentTestimonial].roomType} •{" "}
                        {testimonials[currentTestimonial].stayDate}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 border-2 border-luxury-200 hover:bg-luxury-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 border-2 border-luxury-200 hover:bg-luxury-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-luxury-500"
                      : "bg-hotel-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-hotel-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-hotel-600">
              Celebrating excellence in luxury hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 border-luxury-100 hover:border-luxury-300 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-100 to-luxury-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-luxury-600" />
                </div>
                <h3 className="font-bold text-hotel-900 mb-2">{award.title}</h3>
                <p className="text-sm text-hotel-600">{award.organization}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hotel-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-900/90 to-hotel-800/80"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-luxury-400/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-luxury-400/10 rounded-full"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Luxury Escape Awaits
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the finest in hospitality with personalized service,
            world-class amenities, and unforgettable moments. Book your stay
            today and discover why Golden Oasis is the ultimate luxury
            destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="luxury-gradient text-hotel-900 hover:opacity-90 text-lg px-8"
            >
              <Link to="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Stay
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-hotel-900 text-lg px-8"
            >
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Speak to Concierge
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
