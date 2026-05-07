import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Users,
  ArrowRight,
  PlayCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Hero() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-900/90 via-hotel-800/70 to-hotel-900/90 z-10"></div>
        <div
          className="absolute inset-0 parallax-bg scale-110 transition-transform duration-[30s] ease-linear hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')`,
          }}
        ></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 luxury-gradient rounded-full floating pulse-luxury"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-luxury-300 rounded-full floating animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-luxury-500 rounded-full floating animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-luxury-200 rounded-full floating animation-delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-1.5 h-1.5 bg-luxury-400 rounded-full floating animation-delay-1500"></div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 shimmer opacity-30 z-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4 pt-20">
        {/* Luxury Badge */}
        <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8 border border-white/30 scale-in">
          <Sparkles className="w-5 h-5 text-luxury-400 pulse-luxury" />
          <span className="text-sm font-semibold tracking-wider luxury-text-shadow">
            5-STAR LUXURY EXPERIENCE
          </span>
        </div>

        {/* Main Heading with Enhanced Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight fade-in luxury-text-shadow">
          <span className="block mb-2">Welcome to</span>
          <span className="block text-luxury-400 font-serif italic relative">
            Golden Oasis
            <div className="absolute -top-4 -right-8 w-12 h-12 luxury-gradient rounded-full opacity-30 floating"></div>
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <div className="slide-up max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 opacity-95 leading-relaxed luxury-text-shadow">
            Where luxury meets tranquility in the heart of the city.
          </p>
          <p className="text-lg md:text-xl text-luxury-200 opacity-90 leading-relaxed">
            Experience unparalleled elegance and personalized service that
            creates unforgettable memories.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 scale-in">
          <Button
            asChild
            size="lg"
            className="btn-luxury text-lg px-10 py-7 h-auto group hover-lift rounded-xl"
          >
            <Link to="/booking">
              <Calendar className="w-6 h-6 mr-3" />
              Reserve Your Stay
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-hotel-900 text-lg px-10 py-7 h-auto glass-effect group hover-lift rounded-xl backdrop-blur-lg"
          >
            <PlayCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Virtual Tour
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 floating">
            <span className="text-xs font-medium text-white/70 tracking-wider">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-6 h-6 text-white/70 pulse-luxury" />
          </div>
        </div>
      </div>

      {/* Luxury Booking Card */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4 z-30 slide-up">
        <Card className="card-luxury backdrop-blur-lg border-0 shadow-2xl luxury-shadow hover-lift rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 luxury-gradient"></div>
          <CardContent className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-hotel-900 mb-3 luxury-text-shadow">
                Check Availability
              </h3>
              <p className="text-hotel-600 text-lg">
                Find the perfect room for your luxury getaway
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              <div className="space-y-3">
                <Label
                  htmlFor="checkin"
                  className="text-sm font-semibold text-hotel-700 tracking-wide"
                >
                  Check-in Date
                </Label>
                <div className="relative group">
                  <Input
                    id="checkin"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="pl-12 pr-4 py-3 border-2 border-hotel-200 focus:ring-luxury-500 focus:border-luxury-500 rounded-xl transition-all duration-300 hover:border-luxury-300 focus-luxury"
                  />
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-500 group-hover:text-luxury-600 transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="checkout"
                  className="text-sm font-semibold text-hotel-700 tracking-wide"
                >
                  Check-out Date
                </Label>
                <div className="relative group">
                  <Input
                    id="checkout"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="pl-12 pr-4 py-3 border-2 border-hotel-200 focus:ring-luxury-500 focus:border-luxury-500 rounded-xl transition-all duration-300 hover:border-luxury-300 focus-luxury"
                  />
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-500 group-hover:text-luxury-600 transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="guests"
                  className="text-sm font-semibold text-hotel-700 tracking-wide"
                >
                  Guests
                </Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="border-2 border-hotel-200 focus:ring-luxury-500 focus:border-luxury-500 rounded-xl py-3 hover:border-luxury-300 transition-all duration-300">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-luxury-500" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-luxury-200">
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full h-12 btn-luxury font-semibold text-lg rounded-xl hover-lift tracking-wide"
                >
                  Search Rooms
                </Button>
              </div>
            </form>

            {/* Enhanced Additional Info */}
            <div className="mt-8 pt-6 border-t border-luxury-200/30">
              <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-hotel-600">
                <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                    <span className="font-medium">Best Rate Guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                    <span className="font-medium">Free Cancellation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                    <span className="font-medium">No Booking Fees</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-hotel-500">Need assistance?</span>
                  <Link
                    to="/contact"
                    className="text-luxury-600 hover:text-luxury-700 font-semibold underline decoration-luxury-300 underline-offset-2 hover:decoration-luxury-500 transition-all"
                  >
                    Contact our concierge
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
