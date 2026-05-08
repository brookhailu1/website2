import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body:
      "We use guest details only to manage reservations, respond to stay-related questions, and support the hotel experience before, during, and after arrival. Payment-proof submissions are reviewed only by the reservations team and are handled for booking confirmation purposes.",
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    body:
      "Rates, room availability, and promotional offers remain subject to confirmation. Reservation requests are not considered final until the hotel confirms the booking directly, including any details tied to the requested room or stay period.",
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    body:
      "Cancellation terms depend on the room type and offer selected. Guests should review the terms shared during booking confirmation before completing payment, especially for limited offers, holiday periods, or custom arrangements.",
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    body:
      "This website uses essential cookies and browser storage to improve navigation, remember UI preferences, and monitor general site performance. The goal is to keep the booking and browsing experience consistent and dependable.",
  },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-hotel-950 via-hotel-900 to-hotel-800 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,186,62,0.24),transparent_26%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Badge className="border border-white/15 bg-white/10 px-4 py-2 text-luxury-300 hover:bg-white/10">
              Guest policies
            </Badge>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Policies and reservation guidance
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              A simple, professional summary of the main policies guests usually
              review before booking or submitting payment confirmation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white hover:text-hotel-900"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              {sections.map((section) => (
                <Card key={section.id} className="card-luxury border-luxury-200/70">
                  <CardContent className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-luxury-700">
                      Section
                    </p>
                    <h2 className="mt-3 text-lg font-bold text-hotel-900">
                      {section.title}
                    </h2>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <Card
                  key={section.id}
                  id={section.id}
                  className="card-luxury border-luxury-200/70 scroll-mt-28"
                >
                  <CardContent className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-luxury-700">
                      Golden Oasis policy
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-hotel-900">
                      {section.title}
                    </h2>
                    <p className="mt-4 leading-8 text-hotel-600">{section.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border border-hotel-800 bg-hotel-900 text-white">
              <CardContent className="flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold">
                    Ready to continue with your stay planning?
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Review rooms or proceed to booking when you are ready to
                    submit your reservation details.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="btn-luxury text-hotel-900">
                    <Link to="/booking">Go to Booking</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-hotel-900"
                  >
                    <Link to="/rooms">Browse Rooms</Link>
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
