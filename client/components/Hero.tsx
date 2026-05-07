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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28 md:pb-20">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-900/90 via-hotel-800/70 to-hotel-900/90 z-10"></div>
        <div
          className="absolute inset-0 parallax-bg scale-110 hero-zoom-slow ease-linear hover:scale-105"
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
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col px-4 pt-12 text-center text-white">
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
        <div className="mb-10 flex flex-col justify-center gap-6 scale-in sm:flex-row md:mb-12">
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

        <Card className="mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-white/92 text-left shadow-2xl backdrop-blur-xl slide-up">
          <div className="absolute inset-x-0 top-0 h-1 luxury-gradient" />
          <CardContent className="p-5 sm:p-6 lg:p-7">
            <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-luxury-700">
                  Check Availability
                </p>
                <h3 className="mt-2 text-2xl font-bold text-hotel-900 luxury-text-shadow">
                  Plan your stay in one quick step
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-hotel-600">
                <span className="rounded-full bg-luxury-50 px-3 py-1.5">
                  Best Rate Guaranteed
                </span>
                <span className="rounded-full bg-luxury-50 px-3 py-1.5">
                  Free Cancellation
                </span>
                <span className="rounded-full bg-luxury-50 px-3 py-1.5">
                  Instant Request
                </span>
              </div>
            </div>

            <form className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1.1fr_0.85fr_auto] lg:items-end">
              <div className="space-y-2">
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
                    className="h-12 rounded-2xl border border-hotel-200 bg-white pl-11 pr-4 text-hotel-900 shadow-sm transition-all duration-300 hover:border-luxury-300 focus:border-luxury-500 focus:ring-luxury-500"
                  />
                  <Calendar className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-luxury-500 transition-colors group-hover:text-luxury-600" />
                </div>
              </div>

              <div className="space-y-2">
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
                    className="h-12 rounded-2xl border border-hotel-200 bg-white pl-11 pr-4 text-hotel-900 shadow-sm transition-all duration-300 hover:border-luxury-300 focus:border-luxury-500 focus:ring-luxury-500"
                  />
                  <Calendar className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-luxury-500 transition-colors group-hover:text-luxury-600" />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="guests"
                  className="text-sm font-semibold text-hotel-700 tracking-wide"
                >
                  Guests
                </Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12 rounded-2xl border border-hotel-200 bg-white px-3 shadow-sm transition-all duration-300 hover:border-luxury-300 focus:border-luxury-500 focus:ring-luxury-500">
                    <div className="flex items-center">
                      <Users className="mr-3 h-4.5 w-4.5 text-luxury-500" />
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
                  asChild
                  className="h-12 w-full rounded-2xl btn-luxury px-6 text-base font-semibold tracking-wide lg:min-w-[210px]"
                >
                  <Link to="/rooms">Search Availability</Link>
                </Button>
              </div>
            </form>

            <div className="mt-4 border-t border-luxury-200/50 pt-4">
              <div className="flex flex-col gap-3 text-sm text-hotel-600 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-medium text-hotel-700">
                    Premium direct booking widget
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-luxury-400 sm:block" />
                  <span>No booking fees</span>
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

        <div className="mt-8 flex justify-center">
          <div className="flex flex-col items-center space-y-2 floating">
            <span className="text-xs font-medium tracking-wider text-white/70">
              SCROLL DOWN
            </span>
            <ChevronDown className="h-6 w-6 text-white/70 pulse-luxury" />
          </div>
        </div>
      </div>
    </section>
  );
}
