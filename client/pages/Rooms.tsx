import { FormEvent, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { rooms } from "@/data/rooms";
import {
  Star,
  Users,
  Bed,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Maximize,
  Eye,
  Crown,
} from "lucide-react";

export default function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") || "");
  const [guests, setGuests] = useState(searchParams.get("guests") || "2");
  const [roomType, setRoomType] = useState(searchParams.get("roomType") || "all");

  const filteredRooms = useMemo(() => {
    if (roomType === "all") {
      return rooms;
    }

    return rooms.filter((room) =>
      room.name.toLowerCase().includes(roomType.toLowerCase()),
    );
  }, [roomType]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextParams = new URLSearchParams();
    if (checkIn) nextParams.set("checkIn", checkIn);
    if (checkOut) nextParams.set("checkOut", checkOut);
    if (guests) nextParams.set("guests", guests);
    if (roomType && roomType !== "all") nextParams.set("roomType", roomType);
    setSearchParams(nextParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-r from-hotel-50 to-luxury-50 pb-12 pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6 flex items-center">
            <Button
              variant="ghost"
              asChild
              className="mr-4 p-0 text-luxury-600 hover:text-luxury-700"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="mb-4 flex items-center space-x-3">
            <Crown className="h-8 w-8 text-luxury-600" />
            <span className="text-lg font-medium text-luxury-600">
              Golden Oasis Collection
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-hotel-900 md:text-6xl">
            Luxury Accommodations
          </h1>
          <p className="max-w-3xl text-xl text-hotel-600">
            Discover our collection of elegantly appointed rooms and suites,
            each designed to provide the ultimate in comfort and sophistication.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="border border-border bg-card shadow-lg">
            <CardContent className="p-6">
              <form
                className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-[1fr_1fr_0.8fr_0.9fr_auto]"
                onSubmit={handleSearchSubmit}
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="flex h-12 w-full rounded-lg border border-border bg-background px-3 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="flex h-12 w-full rounded-lg border border-border bg-background px-3 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">
                    Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="flex h-12 w-full rounded-lg border border-border bg-background px-3 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">
                    Room Type
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="flex h-12 w-full rounded-lg border border-border bg-background px-3 text-sm"
                  >
                    <option value="all">All Rooms</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                    <option value="villa">Villa</option>
                    <option value="family">Family</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button
                    type="submit"
                    className="h-12 w-full bg-hotel-600 text-white hover:bg-hotel-700"
                  >
                    Update Search
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-hotel-900">
                Available rooms
              </h2>
              <p className="text-hotel-600">
                {filteredRooms.length} curated option
                {filteredRooms.length === 1 ? "" : "s"} for your stay.
              </p>
            </div>
            <Button asChild variant="outline" className="border-luxury-300 text-luxury-700 hover:bg-luxury-50">
              <Link to="/booking">Submit payment proof</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredRooms.map((room) => (
              <Card
                key={room.id}
                className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${room.image}')` }}
                    />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-luxury-500 font-semibold text-hotel-900">
                        ${room.price}/night
                      </Badge>
                      {room.originalPrice > room.price && (
                        <Badge variant="secondary" className="ml-2 line-through">
                          ${room.originalPrice}
                        </Badge>
                      )}
                    </div>
                    <div className="absolute right-4 top-4 flex space-x-2">
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <Link to={`/rooms/${room.id}`} aria-label={`View ${room.name} details`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-hotel-900">
                      {room.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-luxury-400 text-luxury-400" />
                      <span className="text-sm font-medium">{room.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({room.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="mb-4 text-muted-foreground">{room.description}</p>

                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Maximize className="h-4 w-4 text-hotel-600" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="h-4 w-4 text-hotel-600" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-hotel-600" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-hotel-600" />
                      <span>{room.view}</span>
                    </div>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{room.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-2xl font-bold text-hotel-900">
                        ${room.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          /night
                        </span>
                      </div>
                      {room.originalPrice > room.price && (
                        <div className="text-sm line-through text-muted-foreground">
                          ${room.originalPrice}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        variant="outline"
                        className="border-hotel-600 text-hotel-600 hover:bg-hotel-50"
                      >
                        <Link to={`/rooms/${room.id}`}>View Details</Link>
                      </Button>
                      <Button asChild className="bg-hotel-600 text-white hover:bg-hotel-700">
                        <Link to={`/booking?room=${encodeURIComponent(room.name)}`}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hotel-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold">Need Assistance?</h2>
              <p className="mb-8 text-lg text-gray-300">
                Our reservation specialists are available to help you find the
                ideal accommodation and complete your stay request.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-luxury-400" />
                  <div>
                    <div className="font-semibold">Reservations</div>
                    <div className="text-gray-300">0911908407</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-luxury-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">brookhishe@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-luxury-400" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">
                      123 Luxury Boulevard, Downtown District, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-800 p-8">
              <h3 className="mb-6 text-2xl font-bold">Exclusive Offers</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-700 p-4">
                  <div className="font-semibold text-luxury-400">
                    Golden Circle Member
                  </div>
                  <div className="text-sm text-gray-300">
                    Save up to 30% with our exclusive loyalty program.
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 p-4">
                  <div className="font-semibold text-luxury-400">
                    Extended Oasis Stay
                  </div>
                  <div className="text-sm text-gray-300">
                    Stay 4 nights or more and receive complimentary spa access.
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 p-4">
                  <div className="font-semibold text-luxury-400">
                    Luxury Weekend
                  </div>
                  <div className="text-sm text-gray-300">
                    Special weekend packages with fine dining included.
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full luxury-gradient text-hotel-900 hover:opacity-90"
              >
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book with Offers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
