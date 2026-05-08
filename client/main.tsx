import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BedDouble, Camera, FileText, HeartHandshake, Mail, Sparkles } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import Policies from "./pages/Policies";
import SimplePage from "./pages/SimplePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/facilities"
            element={
              <SimplePage
                eyebrow="Facilities"
                icon={Sparkles}
                title="Designed for indulgent stays from arrival to late evening."
                description="Golden Oasis pairs refined leisure spaces with attentive service, so every part of the property feels curated rather than improvised."
                features={[
                  {
                    title: "Spa and wellness",
                    description:
                      "Signature massage rooms, heat therapy, and a rooftop recovery lounge create a slow luxury rhythm throughout the day.",
                  },
                  {
                    title: "Dining and lounge",
                    description:
                      "Curated breakfast service, all-day dining, and a premium evening lounge bring the hotel atmosphere beyond the guest room.",
                  },
                  {
                    title: "Guest services",
                    description:
                      "Private transfers, concierge coordination, and tailored celebration support are available through the reservations team.",
                  },
                ]}
                ctas={[
                  { label: "Browse Rooms", href: "/rooms" },
                  { label: "Contact Concierge", href: "/contact", variant: "outline" },
                ]}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <SimplePage
                eyebrow="Gallery"
                icon={Camera}
                title="A preview of the spaces, textures, and views guests remember."
                description="Explore the visual side of Golden Oasis, from serene suites and terrace views to the quieter corners that define the hotel’s atmosphere."
                features={[
                  {
                    title: "Rooms and suites",
                    description:
                      "Light-filled interiors, layered textures, and premium finishing details across our signature room collection.",
                  },
                  {
                    title: "Pool and wellness",
                    description:
                      "A calm visual tour through the spa atmosphere, rooftop pool moments, and private relaxation zones.",
                  },
                  {
                    title: "Dining and arrival",
                    description:
                      "Scenes from breakfast service, evening dining, and the refined first impression guests receive on arrival.",
                  },
                ]}
                ctas={[
                  { label: "View Rooms", href: "/rooms" },
                  { label: "Book a Stay", href: "/booking", variant: "outline" },
                ]}
              />
            }
          />
          <Route
            path="/about"
            element={
              <SimplePage
                eyebrow="About Golden Oasis"
                icon={HeartHandshake}
                title="Luxury hospitality shaped around calm service and memorable stays."
                description="Golden Oasis was built to feel intimate, polished, and dependable, with boutique-hotel warmth backed by premium amenities and attentive reservations support."
                features={[
                  {
                    title: "Boutique atmosphere",
                    description:
                      "The property is designed to feel elegant without becoming formal or distant, balancing comfort with unmistakable luxury.",
                  },
                  {
                    title: "Personal service",
                    description:
                      "From booking questions to arrival planning, our team focuses on clarity, speed, and thoughtful guest support.",
                  },
                  {
                    title: "Intentional stays",
                    description:
                      "Whether the visit is romantic, restorative, or business-oriented, each room category is shaped around a specific guest experience.",
                  },
                ]}
                ctas={[
                  { label: "Explore Facilities", href: "/facilities" },
                  { label: "Contact Us", href: "/contact", variant: "outline" },
                ]}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <SimplePage
                eyebrow="Contact"
                icon={Mail}
                title="Speak with the Golden Oasis reservations and concierge team."
                description="For room questions, booking assistance, or payment-proof follow-up, contact the hotel directly and our team will guide you through the next step."
                features={[
                  {
                    title: "Reservations",
                    description:
                      "Phone: 0911908407. Use the booking page when you are ready to submit payment proof for a room request.",
                  },
                  {
                    title: "Social and updates",
                    description:
                      "Instagram: brookhailu1. Twitter: @brookhailu1. We use these channels for light updates, but reservations are best handled through the site or direct contact.",
                  },
                  {
                    title: "Concierge support",
                    description:
                      "For special arrivals, celebration stays, or pre-arrival requests, submit your message in the booking form so the team can review it together with your payment details.",
                  },
                ]}
                ctas={[
                  { label: "Submit Payment Proof", href: "/booking" },
                  { label: "Browse Rooms", href: "/rooms", variant: "outline" },
                ]}
              />
            }
          />
          <Route path="/policies" element={<Policies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
