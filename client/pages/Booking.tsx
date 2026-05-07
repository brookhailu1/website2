import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Users,
  CreditCard,
  Check,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Star,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Shield,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingStep {
  id: number;
  title: string;
  description: string;
}

const steps: BookingStep[] = [
  {
    id: 1,
    title: "Select Dates",
    description: "Choose your check-in and check-out dates",
  },
  {
    id: 2,
    title: "Choose Room",
    description: "Select your preferred accommodation",
  },
  {
    id: 3,
    title: "Add Services",
    description: "Enhance your stay with premium add-ons",
  },
  {
    id: 4,
    title: "Guest Details",
    description: "Provide your contact information",
  },
  {
    id: 5,
    title: "Payment",
    description: "Secure payment and confirmation",
  },
];

const mockRooms = [
  {
    id: "1",
    name: "Deluxe Ocean View",
    price: 399,
    originalPrice: 499,
    image:
      "C:\Users\naina\Desktop\website2\pic 1 (1).png ",
    features: ["Ocean View", "King Be", "42m²", "Private Balcony"],
    amenities: ["Wi-Fi", "Mini Bar", "Room Service", "Concierge"],
    capacity: "2 Adults, 1 Child",
  },
  {
    id: "2",
    name: "Executive Suite",
    price: 699,
    originalPrice: 849,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=500&auto=format&fit=crop",
    features: ["City View", "Living Area", "65m²", "Work Desk"],
    amenities: ["Wi-Fi", "Kitchenette", "24/7 Service", "Business Center"],
    capacity: "3 Adults, 2 Children",
  },
  {
    id: "3",
    name: "Presidential Suite",
    price: 1299,
    originalPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=500&auto=format&fit=crop",
    features: ["Panoramic View", "Private Terrace", "120m²", "Dining Area"],
    amenities: ["Butler Service", "Private Chef", "Spa Access", "Limousine"],
    capacity: "4 Adults, 2 Children",
  },
];

const addOns = [
  {
    id: "1",
    name: "Gourmet Breakfast",
    description: "Daily continental breakfast for two",
    price: 45,
    icon: Coffee,
  },
  {
    id: "2",
    name: "Spa Package",
    description: "Couples massage and spa access",
    price: 250,
    icon: Crown,
  },
  {
    id: "3",
    name: "Airport Transfer",
    description: "Luxury car service to/from airport",
    price: 85,
    icon: Car,
  },
  {
    id: "4",
    name: "Fine Dining",
    description: "3-course dinner at our Michelin-starred restaurant",
    price: 180,
    icon: Utensils,
  },
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    selectedRoom: "",
    selectedAddOns: [] as string[],
    guestInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAddOnToggle = (addOnId: string) => {
    setBookingData((prev) => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(addOnId)
        ? prev.selectedAddOns.filter((id) => id !== addOnId)
        : [...prev.selectedAddOns, addOnId],
    }));
  };

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    return Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
    );
  };

  const calculateTotal = () => {
    const selectedRoom = mockRooms.find(
      (r) => r.id === bookingData.selectedRoom,
    );
    const roomPrice = selectedRoom ? selectedRoom.price : 0;
    const nights = calculateNights();
    const roomTotal = roomPrice * nights;

    const addOnsTotal = addOns
      .filter((addon) => bookingData.selectedAddOns.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);

    return {
      roomTotal,
      addOnsTotal,
      nights,
      total: roomTotal + addOnsTotal,
    };
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="checkin">Check-in Date</Label>
                <div className="relative">
                  <Input
                    id="checkin"
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        checkIn: e.target.value,
                      }))
                    }
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout">Check-out Date</Label>
                <div className="relative">
                  <Input
                    id="checkout"
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        checkOut: e.target.value,
                      }))
                    }
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="adults">Adults</Label>
                <Select
                  value={bookingData.adults.toString()}
                  onValueChange={(value) =>
                    setBookingData((prev) => ({
                      ...prev,
                      adults: parseInt(value),
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Adult{num > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="children">Children</Label>
                <Select
                  value={bookingData.children.toString()}
                  onValueChange={(value) =>
                    setBookingData((prev) => ({
                      ...prev,
                      children: parseInt(value),
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Child{num > 1 ? "ren" : num === 1 ? "" : "ren"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {calculateNights() > 0 && (
              <div className="bg-luxury-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-luxury-700 font-medium">
                    Your Stay Duration
                  </span>
                  <span className="text-luxury-800 font-bold">
                    {calculateNights()} night{calculateNights() > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {mockRooms.map((room) => (
                <Card
                  key={room.id}
                  className={cn(
                    "cursor-pointer transition-all duration-200 hover:shadow-lg",
                    bookingData.selectedRoom === room.id
                      ? "ring-2 ring-luxury-500 shadow-lg"
                      : "",
                  )}
                  onClick={() =>
                    setBookingData((prev) => ({
                      ...prev,
                      selectedRoom: room.id,
                    }))
                  }
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-32 md:h-auto">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-hotel-900">
                            {room.name}
                          </h3>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground line-through">
                              ${room.originalPrice}/night
                            </div>
                            <div className="text-2xl font-bold text-luxury-600">
                              ${room.price}/night
                            </div>
                          </div>
                        </div>
                        <p className="text-hotel-600 mb-3">
                          Capacity: {room.capacity}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {room.features.map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-hotel-500 bg-hotel-50 px-2 py-1 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                        {calculateNights() > 0 && (
                          <div className="mt-4 p-3 bg-luxury-50 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="text-luxury-700">
                                Total for {calculateNights()} night
                                {calculateNights() > 1 ? "s" : ""}:
                              </span>
                              <span className="text-xl font-bold text-luxury-800">
                                ${room.price * calculateNights()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon) => (
                <Card
                  key={addon.id}
                  className={cn(
                    "cursor-pointer transition-all duration-200 hover:shadow-md",
                    bookingData.selectedAddOns.includes(addon.id)
                      ? "ring-2 ring-luxury-500 shadow-md"
                      : "",
                  )}
                  onClick={() => handleAddOnToggle(addon.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <addon.icon className="w-6 h-6 text-hotel-900" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-hotel-900">
                            {addon.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-luxury-600">
                              ${addon.price}
                            </span>
                            <Checkbox
                              checked={bookingData.selectedAddOns.includes(
                                addon.id,
                              )}
                              onChange={() => handleAddOnToggle(addon.id)}
                            />
                          </div>
                        </div>
                        <p className="text-hotel-600 text-sm">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={bookingData.guestInfo.firstName}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      guestInfo: {
                        ...prev.guestInfo,
                        firstName: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={bookingData.guestInfo.lastName}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      guestInfo: {
                        ...prev.guestInfo,
                        lastName: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.guestInfo.email}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      guestInfo: {
                        ...prev.guestInfo,
                        email: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={bookingData.guestInfo.phone}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      guestInfo: {
                        ...prev.guestInfo,
                        phone: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Textarea
                id="specialRequests"
                placeholder="Any special requests or preferences..."
                value={bookingData.guestInfo.specialRequests}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    guestInfo: {
                      ...prev.guestInfo,
                      specialRequests: e.target.value,
                    },
                  }))
                }
                rows={4}
              />
            </div>
          </div>
        );

      case 5:
        const total = calculateTotal();
        return (
          <div className="space-y-6">
            <Card className="border-luxury-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-luxury-600" />
                  <span>Secure Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-8 bg-luxury-50 rounded-lg">
                  <CreditCard className="w-16 h-16 text-luxury-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-hotel-900 mb-2">
                    Payment Integration
                  </h3>
                  <p className="text-hotel-600 mb-4">
                    In a production environment, this would integrate with
                    Stripe or another payment processor.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-luxury-200">
                    <div className="text-left space-y-2">
                      <div className="flex justify-between">
                        <span>Room Total:</span>
                        <span>${total.roomTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Add-ons:</span>
                        <span>${total.addOnsTotal}</span>
                      </div>
                      <hr className="border-luxury-200" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>${total.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-hotel-900 to-hotel-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your Luxury Escape
              </h1>
              <p className="text-xl opacity-90">
                Create unforgettable memories at Golden Oasis Hotel
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4 overflow-x-auto">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center min-w-0">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                          currentStep >= step.id
                            ? "luxury-gradient text-hotel-900"
                            : "bg-hotel-100 text-hotel-400",
                        )}
                      >
                        {currentStep > step.id ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          step.id
                        )}
                      </div>
                      <div className="mt-2 text-center">
                        <div
                          className={cn(
                            "text-sm font-medium",
                            currentStep >= step.id
                              ? "text-luxury-600"
                              : "text-hotel-400",
                          )}
                        >
                          {step.title}
                        </div>
                        <div className="text-xs text-hotel-500 hidden md:block">
                          {step.description}
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "w-16 h-0.5 mx-4 transition-colors",
                          currentStep > step.id
                            ? "bg-luxury-400"
                            : "bg-hotel-200",
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-hotel-900">
                  {steps[currentStep - 1].title}
                </CardTitle>
                <p className="text-hotel-600">
                  {steps[currentStep - 1].description}
                </p>
              </CardHeader>
              <CardContent>{renderStepContent()}</CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={nextStep}
                  className="luxury-gradient text-hotel-900 hover:opacity-90 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button className="luxury-gradient text-hotel-900 hover:opacity-90 flex items-center space-x-2">
                  <span>Complete Booking</span>
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
