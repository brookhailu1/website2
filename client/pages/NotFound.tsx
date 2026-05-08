import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BedDouble } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-screen items-center justify-center px-4 pt-24">
        <Card className="w-full max-w-2xl border-luxury-200/70 card-luxury">
          <CardContent className="p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl luxury-gradient">
              <BedDouble className="h-8 w-8 text-hotel-900" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-luxury-700">
              404
            </p>
            <h1 className="mt-4 text-4xl font-bold text-hotel-900">
              This page is not part of the current hotel site.
            </h1>
            <p className="mt-4 text-lg leading-8 text-hotel-600">
              The route <span className="font-semibold">{location.pathname}</span> does not exist in the current experience.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="btn-luxury text-hotel-900">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-luxury-300 text-luxury-700 hover:bg-luxury-50">
                <Link to="/rooms">Browse Rooms</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
