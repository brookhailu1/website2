import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

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
          <Route path="/booking" element={<Booking />} />

          {/* Placeholder routes for future pages */}
          <Route
            path="/facilities"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Facilities Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/gallery"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Gallery Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/blog"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">Blog Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">About Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Contact Page - 0911908407 <n />
                    instagram - brookhailu1 <n />
                    twitter - @brookhailu1 <n />
                </h1>
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">
                  User Dashboard - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">Login Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/admin/*"
            element={
              <div className="pt-20 p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Admin Panel - Coming Soon
                </h1>
              </div>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
