import { Link } from "react-router-dom";
import {
  Crown,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const quickLinks = [
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Spa & Wellness", href: "/facilities" },
  { name: "Fine Dining", href: "/facilities" },
  { name: "Business Center", href: "/facilities" },
  { name: "Event Venues", href: "/facilities" },
  { name: "Concierge", href: "/contact" },
];

const policies = [
  { name: "Privacy Policy", href: "/policies#privacy" },
  { name: "Terms & Conditions", href: "/policies#terms" },
  { name: "Cancellation Policy", href: "/policies#cancellation" },
  { name: "Cookie Policy", href: "/policies#cookies" },
];

const socialLabels = [
  { icon: Instagram, label: "Instagram: brookhailu1" },
  { icon: Twitter, label: "Twitter: @brookhailu1" },
];

const amenityIcons = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Valet Parking" },
  { icon: Coffee, label: "24/7 Room Service" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: Utensils, label: "Fine Dining" },
  { icon: Star, label: "Spa & Wellness" },
];

export default function Footer() {
  return (
    <footer className="bg-hotel-900 text-white">
      <div className="border-b border-hotel-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-4 text-2xl font-bold">
              Stay Connected with Golden Oasis
            </h3>
            <p className="mb-6 text-hotel-300">
              Subscribe for future offers, curated stay updates, and hotel news.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-hotel-600 bg-hotel-800 text-white placeholder:text-hotel-400 focus:border-luxury-500 focus:ring-luxury-500"
              />
              <Button
                type="button"
                className="luxury-gradient text-hotel-900 hover:opacity-90"
                onClick={() =>
                  toast({
                    title: "Newsletter signup coming soon",
                    description:
                      "The newsletter form is not active yet, but the rest of the site navigation is live.",
                  })
                }
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg luxury-gradient">
                <Crown className="h-6 w-6 text-hotel-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  Golden Oasis
                </span>
                <span className="text-xs font-medium tracking-wide text-luxury-400">
                  BOUTIQUE HOTEL
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-hotel-300">
              Experience unparalleled luxury and elegance in the heart of the
              city, where every moment becomes a cherished memory.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-luxury-400" />
                <div className="text-sm">
                  <div className="font-medium">123 Luxury Boulevard</div>
                  <div className="text-hotel-300">Downtown District, NY 10001</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-luxury-400" />
                <a
                  href="tel:0911908407"
                  className="text-sm transition-colors hover:text-luxury-400"
                >
                  0911908407
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-luxury-400" />
                <a
                  href="mailto:brookhishe@gmail.com"
                  className="text-sm transition-colors hover:text-luxury-400"
                >
                  brookhishe@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-hotel-300 transition-colors hover:text-luxury-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-hotel-300 transition-colors hover:text-luxury-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Amenities</h4>
            <div className="mb-8 grid grid-cols-2 gap-3">
              {amenityIcons.map((amenity) => (
                <div key={amenity.label} className="flex items-center space-x-2">
                  <amenity.icon className="h-4 w-4 text-luxury-400" />
                  <span className="text-xs text-hotel-300">{amenity.label}</span>
                </div>
              ))}
            </div>

            <h5 className="mb-3 font-medium">Policies</h5>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-xs text-hotel-400 transition-colors hover:text-luxury-400"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hotel-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-hotel-400">
              © 2024 Golden Oasis Boutique Hotel. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="mr-2 text-sm text-hotel-400">Follow us:</span>
              {socialLabels.map((social) => (
                <span
                  key={social.label}
                  className="inline-flex items-center gap-2 text-sm text-hotel-300"
                >
                  <social.icon className="h-4 w-4 text-luxury-400" />
                  {social.label}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-luxury-400 text-luxury-400"
                  />
                ))}
              </div>
              <span className="text-xs text-hotel-400">5-Star Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
