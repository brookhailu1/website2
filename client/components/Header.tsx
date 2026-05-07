import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Crown,
  Calendar,
  User,
  LogOut,
  Settings,
  BookOpen,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Mock user state - replace with actual auth context
  const [user, setUser] = useState<any>(null);
  const isLoggedIn = !!user;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    setUser(null);
    // Add logout logic here
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass-effect border-b border-luxury-200/30 shadow-lg luxury-shadow"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg luxury-shadow">
              <Crown className="w-7 h-7 text-hotel-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-hotel-900 leading-tight luxury-text-shadow">
                Golden Oasis
              </span>
              <span className="text-xs text-luxury-600 font-semibold tracking-widest">
                BOUTIQUE HOTEL
              </span>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-1 -right-1 w-3 h-3 luxury-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 hover:text-luxury-600 relative group tracking-wide",
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
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-luxury-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></span>
              </Link>
            ))}
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button
              asChild
              variant="outline"
              className="border-2 border-luxury-300 text-luxury-700 hover:bg-luxury-50 hover:border-luxury-400 hover-lift rounded-xl px-6 py-2 font-semibold transition-all duration-300"
            >
              <Link to="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Link>
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-sm">Welcome back!</p>
                      <p className="text-xs text-muted-foreground">
                        {user?.email || "guest@example.com"}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">
                      <BookOpen className="mr-2 h-4 w-4" />
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <Settings className="mr-2 h-4 w-4" />
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                asChild
                className="btn-luxury hover-lift rounded-xl px-6 py-2 font-semibold"
              >
                <Link to="/login">
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-6 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 luxury-gradient rounded-lg flex items-center justify-center">
                        <Crown className="w-5 h-5 text-hotel-900" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-hotel-900">
                          Golden Oasis
                        </span>
                        <span className="text-xs text-luxury-600 font-medium">
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
                            "block px-3 py-2 rounded-md text-base font-medium transition-colors",
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

                  <div className="border-t pt-6 space-y-3">
                    <Button
                      asChild
                      className="w-full justify-start luxury-gradient text-hotel-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link to="/booking">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Link>
                    </Button>

                    {isLoggedIn ? (
                      <div className="space-y-2">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Link to="/dashboard">
                            <BookOpen className="w-4 h-4 mr-2" />
                            My Bookings
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-red-600 hover:text-red-700"
                          onClick={() => {
                            handleLogout();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link to="/login">
                          <User className="w-4 h-4 mr-2" />
                          Sign In
                        </Link>
                      </Button>
                    )}
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
