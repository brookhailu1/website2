import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Maximize,
  Star,
  Users,
  Bed,
  Eye,
} from "lucide-react";

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find((item) => item.id === id);

  if (!room) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-hotel-900">Room not found</h1>
            <p className="mt-4 text-hotel-600">
              The suite you requested is no longer available in this collection.
            </p>
            <Button asChild className="mt-8 btn-luxury text-hotel-900">
              <Link to="/rooms">Browse all rooms</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="bg-gradient-to-r from-hotel-50 to-luxury-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6 px-0 text-luxury-700 hover:bg-transparent">
              <Link to="/rooms">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all rooms
              </Link>
            </Button>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Badge className="luxury-gradient text-hotel-900">
                    ${room.price}/night
                  </Badge>
                  <span className="text-sm text-hotel-500 line-through">
                    ${room.originalPrice}
                  </span>
                </div>
                <h1 className="mt-5 text-4xl font-bold text-hotel-900 md:text-6xl">
                  {room.name}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-hotel-600">
                  {room.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {room.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="secondary"
                      className="border border-luxury-200 bg-luxury-50 text-luxury-700"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <Card className="card-luxury border-luxury-200/70">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-hotel-700">
                    <Star className="h-4 w-4 fill-luxury-400 text-luxury-400" />
                    <span className="font-semibold">{room.rating}</span>
                    <span className="text-sm text-hotel-500">
                      from {room.reviews} reviews
                    </span>
                  </div>
                  <div className="mt-6 space-y-4 text-sm text-hotel-700">
                    <div className="flex items-center gap-3">
                      <Maximize className="h-4 w-4 text-luxury-600" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bed className="h-4 w-4 text-luxury-600" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-luxury-600" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Eye className="h-4 w-4 text-luxury-600" />
                      <span>{room.view}</span>
                    </div>
                  </div>
                  <Button asChild className="mt-8 w-full btn-luxury text-hotel-900">
                    <Link to={`/booking?room=${encodeURIComponent(room.name)}`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Book {room.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2 overflow-hidden rounded-3xl">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
                {room.images.slice(1).map((image, index) => (
                  <div key={image + index} className="overflow-hidden rounded-3xl">
                    <img
                      src={image}
                      alt={`${room.name} view ${index + 2}`}
                      className="h-56 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <Card className="border-hotel-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-hotel-900">
                    Included in your stay
                  </h2>
                  <div className="mt-6 space-y-4">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-3 text-hotel-700">
                        <CheckCircle2 className="h-4 w-4 text-luxury-600" />
                        <span>{amenity}</span>
                      </div>
                    ))}
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
