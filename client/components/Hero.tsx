import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Users,
  ArrowRight,
  ImageIcon,
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
  const navigate = useNavigate();

  const handleAvailabilitySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);

    const search = params.toString();
    navigate(search ? `/rooms?${search}` : "/rooms");
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28 md:pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-hotel-900/90 via-hotel-800/70 to-hotel-900/90" />
        <div
          className="absolute inset-0 parallax-bg scale-110 hero-zoom-slow ease-linear hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute bottom-32 left-1/4 h-2.5 w-2.5 rounded-full bg-luxury-500 floating animation-delay-500" />
        <div className="absolute bottom-40 right-10 h-1.5 w-1.5 rounded-full bg-luxury-400 floating animation-delay-1500" />
        <div className="absolute left-10 top-20 h-3 w-3 rounded-full luxury-gradient floating pulse-luxury" />
        <div className="absolute right-20 top-40 h-2 w-2 rounded-full bg-luxury-300 floating animation-delay-1000" />
        <div className="absolute right-1/3 top-1/3 h-1 w-1 rounded-full bg-luxury-200 floating animation-delay-2000" />
        <div className="absolute inset-0 z-5 shimmer opacity-30" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col px-4 pt-12 text-center text-white">
        <div className="mb-8 inline-flex items-center space-x-2 self-center rounded-full border border-white/30 glass-effect px-6 py-3 scale-in">
          <Sparkles className="h-5 w-5 text-luxury-400 pulse-luxury" />
          <span className="text-sm font-semibold tracking-wider luxury-text-shadow">
            5-STAR LUXURY EXPERIENCE
          </span>
        </div>

        <h1 className="mb-8 text-5xl font-bold leading-tight fade-in luxury-text-shadow md:text-7xl lg:text-8xl">
          <span className="mb-2 block">Welcome to</span>
          <span className="relative block font-serif italic text-luxury-400">
            Golden Oasis
            <div className="absolute -right-8 -top-4 h-12 w-12 rounded-full luxury-gradient opacity-30 floating" />
          </span>
        </h1>

        <div className="mx-auto mb-12 max-w-4xl slide-up">
          <p className="mb-4 text-xl leading-relaxed opacity-95 luxury-text-shadow md:text-2xl lg:text-3xl">
            Where luxury meets tranquility in the heart of the city.
          </p>
          <p className="text-lg leading-relaxed text-luxury-200 opacity-90 md:text-xl">
            Experience unparalleled elegance and personalized service that
            creates unforgettable memories.
          </p>
        </div>

        <div className="mb-10 flex flex-col justify-center gap-6 scale-in sm:flex-row md:mb-12">
          <Button
            asChild
            size="lg"
            className="group h-auto rounded-xl px-10 py-7 text-lg btn-luxury hover-lift"
          >
            <Link to="/booking">
              <Calendar className="mr-3 h-6 w-6" />
              Reserve Your Stay
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="group h-auto rounded-xl border-2 border-white/80 px-10 py-7 text-lg text-white glass-effect backdrop-blur-lg hover:bg-white hover:text-hotel-900 hover-lift"
          >
            <Link to="/gallery">
              <ImageIcon className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              View Gallery
            </Link>
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

            <form
              className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1.1fr_0.85fr_auto] lg:items-end"
              onSubmit={handleAvailabilitySubmit}
            >
              <div className="space-y-2">
                <Label
                  htmlFor="hero-checkin"
                  className="text-sm font-semibold tracking-wide text-hotel-700"
                >
                  Check-in Date
                </Label>
                <div className="group relative">
                  <Input
                    id="hero-checkin"
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
                  htmlFor="hero-checkout"
                  className="text-sm font-semibold tracking-wide text-hotel-700"
                >
                  Check-out Date
                </Label>
                <div className="group relative">
                  <Input
                    id="hero-checkout"
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
                  htmlFor="hero-guests"
                  className="text-sm font-semibold tracking-wide text-hotel-700"
                >
                  Guests
                </Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger
                    id="hero-guests"
                    className="h-12 rounded-2xl border border-hotel-200 bg-white px-3 shadow-sm transition-all duration-300 hover:border-luxury-300 focus:border-luxury-500 focus:ring-luxury-500"
                  >
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
                  type="submit"
                  className="h-12 w-full rounded-2xl px-6 text-base font-semibold tracking-wide btn-luxury lg:min-w-[210px]"
                >
                  Search Availability
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
                    className="font-semibold text-luxury-600 underline decoration-luxury-300 underline-offset-2 transition-all hover:text-luxury-700 hover:decoration-luxury-500"
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
