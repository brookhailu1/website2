import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BriefcaseBusiness,
  ConciergeBell,
  Sparkles,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

const facilitySections = [
  {
    title: "Spa and wellness",
    description:
      "Massage rooms, slow heat therapy, and recovery spaces are designed to soften the pace of a full travel day.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Signature treatments and private wellness rituals",
      "Calm lounge areas with warm lighting and soft finishes",
      "A boutique atmosphere focused on restoration rather than volume",
    ],
  },
  {
    title: "Dining and lounge",
    description:
      "From polished breakfast service to late-evening cocktails, the dining spaces extend the mood of the hotel rather than competing with it.",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Curated morning service and all-day menus",
      "A lounge setting for light meetings and evening unwinding",
      "Presentation and pacing aligned with the hotel’s luxury tone",
    ],
  },
  {
    title: "Pool and terrace",
    description:
      "Open-air leisure spaces create a clean transition between private room time and the more social side of the property.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Rooftop-style views and premium daybeds",
      "Quiet morning lounging and golden-hour ambience",
      "Ideal for restorative downtime during longer stays",
    ],
  },
  {
    title: "Concierge and guest services",
    description:
      "Support stays close to the guest experience, from arrival logistics to thoughtful extras tied to celebrations or special timing.",
    icon: ConciergeBell,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Arrival planning and pre-stay coordination",
      "Special requests for celebrations and tailored stays",
      "Direct support through hotel reservations and guest care",
    ],
  },
  {
    title: "Business and events",
    description:
      "For guests blending work with comfort, select spaces support private meetings, executive stays, and refined small-scale gatherings.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Executive-friendly surroundings and meeting-ready spaces",
      "A premium setting for private dining or intimate events",
      "A boutique alternative to large, impersonal conference hotels",
    ],
  },
];

export default function Facilities() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-luxury-50/40 to-background">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/3 -translate-y-1/3 rounded-full bg-luxury-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-hotel-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <Badge className="bg-luxury-100 px-4 py-2 text-luxury-800 hover:bg-luxury-100">
                Facilities & Services
              </Badge>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-hotel-900 md:text-6xl">
                Designed for indulgent stays from morning recovery to evening ease.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-hotel-600 md:text-xl">
                Golden Oasis pairs restorative wellness, elegant social spaces,
                and attentive guest support so every hour of the stay feels
                considered rather than improvised.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="btn-luxury text-hotel-900">
                  <Link to="/booking">
                    Book Your Stay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-luxury-300 text-luxury-700 hover:bg-luxury-50"
                >
                  <Link to="/rooms">View Rooms & Suites</Link>
                </Button>
              </div>
            </div>

            <Card className="mt-12 overflow-hidden border border-luxury-200/70 card-luxury lg:mt-0">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury hotel room with premium facilities feel"
                  className="h-72 w-full object-cover"
                />
                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                    Golden Oasis standard
                  </p>
                  <p className="mt-4 text-base leading-8 text-hotel-600">
                    The facilities are arranged to support different kinds of
                    stays without losing the boutique calm that defines the
                    property.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {facilitySections.map((section, index) => (
                <Card
                  key={section.title}
                  className="overflow-hidden border border-luxury-200/70 card-luxury"
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="h-full min-h-[280px] w-full object-cover"
                        />
                      </div>
                      <div
                        className={`flex flex-col justify-center p-8 md:p-10 ${
                          index % 2 === 1 ? "lg:order-1" : ""
                        }`}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl luxury-gradient">
                          <section.icon className="h-7 w-7 text-hotel-900" />
                        </div>
                        <h2 className="mt-6 text-3xl font-bold text-hotel-900">
                          {section.title}
                        </h2>
                        <p className="mt-4 text-base leading-8 text-hotel-600">
                          {section.description}
                        </p>
                        <div className="mt-6 space-y-3">
                          {section.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-3">
                              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-luxury-500" />
                              <p className="text-sm leading-7 text-hotel-600">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Card className="border border-hotel-800 bg-hotel-900 text-white">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-300">
                    Plan the full stay
                  </p>
                  <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                    Choose the room and facilities combination that fits your pace.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                    Whether the stay centers on recovery, dining, celebration, or
                    business, you can continue from here into the booking flow
                    without leaving the polished guest journey.
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button asChild size="lg" className="btn-luxury text-hotel-900">
                    <Link to="/booking">Reserve Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-hotel-900"
                  >
                    <Link to="/contact">Contact Concierge</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
