import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Crown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "glass-effect border-b border-luxury-200/30 shadow-lg luxury-shadow"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group relative flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl luxury-gradient shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 luxury-shadow">
              <Crown className="h-7 w-7 text-hotel-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight text-hotel-900 luxury-text-shadow">
                Golden Oasis
              </span>
              <span className="text-xs font-semibold tracking-widest text-luxury-600">
                BOUTIQUE HOTEL
              </span>
            </div>
            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full luxury-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <nav className="hidden items-center space-x-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group relative text-sm font-semibold tracking-wide transition-all duration-300 hover:text-luxury-600",
                  location.pathname === item.href
                    ? "text-luxury-600"
                    : "text-hotel-700",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-0.5 bg-luxury-500 transition-all duration-300",
                    location.pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
                <span className="absolute inset-0 -z-10 scale-110 rounded-lg bg-luxury-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-2 border-luxury-300 px-6 py-2 font-semibold text-luxury-700 transition-all duration-300 hover:border-luxury-400 hover:bg-luxury-50 hover-lift"
            >
              <Link to="/booking">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <div className="flex h-full flex-col">
                  <div className="border-b pb-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg luxury-gradient">
                        <Crown className="h-5 w-5 text-hotel-900" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-hotel-900">
                          Golden Oasis
                        </span>
                        <span className="text-xs font-medium text-luxury-600">
                          BOUTIQUE HOTEL
                        </span>
                      </div>
                    </div>
                  </div>

                  <nav className="flex-1 py-6">
                    <div className="space-y-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                            location.pathname === item.href
                              ? "bg-luxury-50 text-luxury-700"
                              : "text-hotel-700 hover:bg-hotel-50 hover:text-hotel-900",
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  <div className="border-t pt-6">
                    <Button
                      asChild
                      className="w-full justify-start luxury-gradient text-hotel-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link to="/booking">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
