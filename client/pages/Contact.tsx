import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import {
  Calendar,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const contactCards = [
  {
    title: "Reservations",
    detail: "0911908407",
    href: "tel:0911908407",
    description:
      "For room selection help, booking timing, and reservation guidance.",
    icon: Phone,
  },
  {
    title: "Guest email",
    detail: "brookhishe@gmail.com",
    href: "mailto:brookhishe@gmail.com",
    description:
      "Best for pre-arrival notes, confirmation questions, and follow-up support.",
    icon: Mail,
  },
  {
    title: "Hotel location",
    detail: "123 Luxury Boulevard, Downtown District, NY 10001",
    href: "#visit-us",
    description:
      "Use this as the arrival reference point for check-in and concierge coordination.",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    value: "brookhailu1",
    href: "https://instagram.com/brookhailu1",
    icon: Instagram,
  },
  {
    label: "Twitter",
    value: "@brookhailu1",
    href: "https://twitter.com/brookhailu1",
    icon: Twitter,
  },
];

const helpTopics = [
  "Room selection and suite guidance",
  "Special arrivals, celebrations, and stay notes",
  "Payment-proof follow-up after booking submission",
  "Pre-arrival timing and concierge assistance",
];

export default function Contact() {
  const handleInquiryToast = () => {
    toast({
      title: "Inquiry support is routed through reservations",
      description:
        "Use the booking page for stay requests or contact the hotel directly by phone or email for assistance.",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-hotel-950 via-hotel-900 to-hotel-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,186,62,0.24),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <Badge className="border border-white/15 bg-white/10 px-4 py-2 text-luxury-300 hover:bg-white/10">
                Contact & Concierge
              </Badge>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Speak with the team behind your Golden Oasis stay.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                For room questions, arrival planning, booking support, or payment
                proof follow-up, our reservations and guest care team is ready to
                guide the next step.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="btn-luxury text-hotel-900">
                  <Link to="/booking">
                    Continue to Booking
                    <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={handleInquiryToast}
                  className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-hotel-900"
                >
                  Quick Inquiry Help
                </Button>
              </div>
            </div>

            <Card className="mt-12 border border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur lg:mt-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 text-luxury-300">
                  <Clock3 className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.28em]">
                    Guest assistance
                  </p>
                </div>
                <h2 className="mt-5 text-2xl font-bold">How we can help</h2>
                <ul className="mt-6 space-y-4">
                  {helpTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-luxury-400" />
                      <span className="text-sm leading-7 text-white/80">{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/15 p-5">
                  <p className="text-sm leading-7 text-white/72">
                    The booking page remains the correct path when you are ready
                    to submit reservation details and payment proof together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {contactCards.map((card) => (
                <Card key={card.title} className="card-luxury border-luxury-200/70">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl luxury-gradient">
                      <card.icon className="h-7 w-7 text-hotel-900" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-hotel-900">
                      {card.title}
                    </h2>
                    <a
                      href={card.href}
                      className="mt-4 block break-words text-lg font-semibold text-luxury-700 transition-colors hover:text-luxury-800"
                    >
                      {card.detail}
                    </a>
                    <p className="mt-3 text-sm leading-7 text-hotel-600">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-luxury-50/40 to-background py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <Card id="visit-us" className="overflow-hidden border border-hotel-200/80 bg-white">
              <CardContent className="p-0">
                <div className="relative h-full min-h-[320px] bg-[linear-gradient(160deg,#1c2430_0%,#243245_52%,#f4ba3e_52.5%,#f7e8ba_100%)] p-8 text-white">
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-300">
                        Location preview
                      </p>
                      <h2 className="mt-4 text-3xl font-bold">Visit the hotel</h2>
                    </div>
                    <div className="max-w-sm rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
                      <p className="text-sm leading-7 text-white/80">
                        123 Luxury Boulevard
                        <br />
                        Downtown District
                        <br />
                        NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                  Social & contact
                </p>
                <h2 className="mt-4 text-3xl font-bold text-hotel-900 md:text-5xl">
                  Reach the hotel on the channels already in use.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-hotel-600">
                  Reservations are best handled directly through phone, email, or
                  the booking page, but our public channels remain available for
                  lighter updates and guest touchpoints.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-luxury-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-luxury-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-luxury-100 p-3 text-luxury-700">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-hotel-500">
                          {social.label}
                        </p>
                        <p className="text-lg font-semibold text-hotel-900">
                          {social.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <Card className="card-luxury border-luxury-200/70">
                <CardContent className="p-7">
                  <h3 className="text-2xl font-bold text-hotel-900">
                    Need help with a stay inquiry?
                  </h3>
                  <p className="mt-4 text-base leading-8 text-hotel-600">
                    If your question is tied to a reservation, room choice, or a
                    payment proof update, the fastest next step is the booking
                    page or a direct phone call to the hotel team.
                  </p>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="btn-luxury text-hotel-900">
                      <Link to="/booking">Go to Booking</Link>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleInquiryToast}
                      className="border-luxury-300 text-luxury-700 hover:bg-luxury-50"
                    >
                      Show Inquiry Guidance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
