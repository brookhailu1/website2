import { Link } from "react-router-dom";
import {
  Crown,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Spa & Wellness", href: "/facilities#spa" },
  { name: "Fine Dining", href: "/facilities#dining" },
  { name: "Business Center", href: "/facilities#business" },
  { name: "Event Venues", href: "/facilities#events" },
  { name: "Concierge", href: "/contact" },
];

const policies = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Cancellation Policy", href: "/cancellation" },
  { name: "Cookie Policy", href: "/cookies" },
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
      {/* Newsletter Section */}
      <div className="border-b border-hotel-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected with Golden Oasis
            </h3>
            <p className="text-hotel-300 mb-6">
              Subscribe to our newsletter for exclusive offers, luxury travel
              tips, and updates on our latest amenities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-hotel-800 border-hotel-600 text-white placeholder:text-hotel-400 focus:ring-luxury-500 focus:border-luxury-500"
              />
              <Button className="luxury-gradient text-hotel-900 hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-hotel-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  Golden Oasis
                </span>
                <span className="text-xs text-luxury-400 font-medium tracking-wide">
                  BOUTIQUE HOTEL
                </span>
              </div>
            </div>
            <p className="text-hotel-300 mb-6 text-sm leading-relaxed">
              Experience unparalleled luxury and elegance in the heart of the
              city. Where every moment becomes a cherished memory.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium">123 Luxury Boulevard</div>
                  <div className="text-hotel-300">
                    Downtown District, NY 10001
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-400 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm hover:text-luxury-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-400 flex-shrink-0" />
                <a
                  href="mailto:info@goldenoasis.com"
                  className="text-sm hover:text-luxury-400 transition-colors"
                >
                  info@goldenoasis.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-hotel-300 hover:text-luxury-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-hotel-300 hover:text-luxury-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Amenities</h4>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {amenityIcons.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <amenity.icon className="w-4 h-4 text-luxury-400" />
                  <span className="text-xs text-hotel-300">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>

            <h5 className="font-medium mb-3">Policies</h5>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-xs text-hotel-400 hover:text-luxury-400 transition-colors"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-hotel-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-hotel-400">
              © 2024 Golden Oasis Boutique Hotel. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-hotel-400 mr-2">Follow us:</span>
              <a
                href="#"
                className="text-hotel-400 hover:text-luxury-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-hotel-400 hover:text-luxury-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-hotel-400 hover:text-luxury-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-hotel-400 hover:text-luxury-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Awards */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-luxury-400 text-luxury-400"
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
