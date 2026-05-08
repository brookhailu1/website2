import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const values = [
  {
    title: "Quiet luxury",
    description:
      "We favor restraint, warmth, and considered detail over excess, so the property feels elevated without ever becoming cold.",
    icon: Sparkles,
  },
  {
    title: "Dependable service",
    description:
      "Guests should never have to wonder who will respond or when. Clear communication is part of the luxury promise.",
    icon: ShieldCheck,
  },
  {
    title: "Human hospitality",
    description:
      "Personal recognition, thoughtful pacing, and genuine welcome matter as much as design and amenities.",
    icon: HeartHandshake,
  },
];

const reasons = [
  "Boutique scale with premium attention",
  "Elegant rooms designed for true rest",
  "Flexible stays for romantic, family, and business travel",
  "Reservation support that stays clear and responsive",
];

const philosophy = [
  {
    label: "Before arrival",
    text: "We keep planning simple, from room guidance to special requests, so guests feel looked after well before check-in.",
  },
  {
    label: "During the stay",
    text: "Service is present when needed and discreet when not, balancing attentiveness with privacy throughout the property.",
  },
  {
    label: "After checkout",
    text: "The experience should feel complete, with helpful follow-up and a clear reason to return for the next visit.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-hotel-950 via-hotel-900 to-hotel-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,186,62,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(244,186,62,0.14),transparent_25%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <Badge className="border border-white/15 bg-white/10 px-4 py-2 text-luxury-300 hover:bg-white/10">
                About Golden Oasis
              </Badge>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                A boutique hotel story shaped by calm design and attentive hospitality.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Golden Oasis was built for guests who want luxury to feel warm,
                personal, and beautifully composed from the first arrival moment
                to the final late checkout.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="btn-luxury text-hotel-900">
                  <Link to="/rooms">
                    Explore Rooms
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-hotel-900"
                >
                  <Link to="/booking">Book Your Stay</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-0">
              <div className="overflow-hidden rounded-[1.8rem] sm:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80"
                  alt="Golden Oasis style luxury hotel exterior"
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury hotel lounge seating"
                  className="h-64 w-full object-cover"
                />
              </div>
              <Card className="border-white/10 bg-white/10 text-white backdrop-blur">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-luxury-300">
                      Service philosophy
                    </p>
                    <p className="mt-4 text-lg leading-8 text-white/82">
                      Luxury should feel composed, human, and easy to trust.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-luxury-300">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                Our story
              </p>
              <h2 className="mt-4 text-3xl font-bold text-hotel-900 md:text-5xl">
                Crafted to feel intimate, polished, and effortlessly welcoming.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-hotel-600 md:text-lg">
              <p>
                Golden Oasis began with a simple idea: luxury hotels should feel
                memorable not just because of finishes and amenities, but because
                of how smoothly they care for people.
              </p>
              <p>
                The result is a boutique property that pairs elegant interiors with
                calm operational discipline. Rooms are intentionally restful,
                shared spaces are designed to breathe, and service is built around
                clarity rather than complexity.
              </p>
              <p>
                Whether a stay is romantic, restorative, or tied to business,
                every guest should feel the same quiet confidence throughout the
                experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-luxury-50/50 to-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                Brand values
              </p>
              <h2 className="mt-4 text-3xl font-bold text-hotel-900 md:text-5xl">
                Principles behind the Golden Oasis experience
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="card-luxury border-luxury-200/70">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl luxury-gradient">
                      <value.icon className="h-7 w-7 text-hotel-900" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-hotel-900">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-hotel-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.7rem] sm:row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury hotel bedroom with elegant styling"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.7rem]">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury hotel dining and lounge area"
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.7rem]">
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80"
                  alt="Premium boutique hotel lounge corner"
                  className="h-44 w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                Why choose Golden Oasis
              </p>
              <h2 className="mt-4 text-3xl font-bold text-hotel-900 md:text-5xl">
                Luxury that feels composed from reservation to departure.
              </h2>
              <div className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-4 rounded-2xl border border-luxury-200/70 bg-white/90 p-5 shadow-sm"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-luxury-500" />
                    <p className="text-base leading-7 text-hotel-600">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border border-hotel-800 bg-hotel-900 text-white">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-300">
                    Hospitality philosophy
                  </p>
                  <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                    Service should be elegant, timely, and deeply reassuring.
                  </h2>
                </div>
                <div className="space-y-6">
                  {philosophy.map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/75">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="btn-luxury text-hotel-900">
                <Link to="/rooms">View Rooms & Suites</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-luxury-300 text-luxury-700 hover:bg-luxury-50"
              >
                <Link to="/booking">Reserve Your Stay</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
