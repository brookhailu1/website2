import { RequestHandler } from "express";
import {
  Booking,
  BookingRequest,
  BookingConfirmation,
  AddOn,
  ApiResponse,
} from "@shared/api";

// Mock data - in production, this would be from a database
const mockBookings: Booking[] = [];

const mockAddOns: AddOn[] = [
  {
    id: "1",
    name: "Gourmet Breakfast",
    description: "Daily continental breakfast for two",
    price: 45,
    type: "breakfast",
  },
  {
    id: "2",
    name: "Spa Package",
    description: "Couples massage and spa access",
    price: 250,
    type: "spa",
  },
  {
    id: "3",
    name: "Airport Transfer",
    description: "Luxury car service to/from airport",
    price: 85,
    type: "transfer",
  },
  {
    id: "4",
    name: "Wine Tasting",
    description: "Private wine tasting experience",
    price: 120,
    type: "activity",
  },
  {
    id: "5",
    name: "Late Checkout",
    description: "Extended checkout until 3 PM",
    price: 50,
    type: "other",
  },
];

// Generate booking confirmation number
const generateConfirmationNumber = (): string => {
  const prefix = "GO";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}${timestamp}${random}`;
};

// Create new booking
export const createBooking: RequestHandler = async (req, res) => {
  try {
    const bookingData: BookingRequest = req.body;
    const { roomId, checkIn, checkOut, guests, addOns, specialRequests } =
      bookingData;

    // Mock user ID - in production, this would come from authentication
    const userId = "user-123";

    // Calculate total amount
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    // Mock room price - in production, fetch from database
    const roomPrice = 399; // This would be fetched based on roomId
    const roomTotal = roomPrice * nights;

    // Calculate add-ons total
    const selectedAddOns = mockAddOns.filter((addon) =>
      addOns?.includes(addon.id),
    );
    const addOnsTotal = selectedAddOns.reduce(
      (sum, addon) => sum + addon.price,
      0,
    );

    const totalAmount = roomTotal + addOnsTotal;

    // Create booking
    const booking: Booking = {
      id: `booking-${Date.now()}`,
      userId,
      roomId,
      checkIn,
      checkOut,
      guests,
      totalAmount,
      currency: "USD",
      status: "pending",
      addOns: selectedAddOns,
      specialRequests,
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockBookings.push(booking);

    const response: ApiResponse<Booking> = {
      success: true,
      data: booking,
      message: "Booking created successfully",
    };

    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<Booking> = {
      success: false,
      error: "Failed to create booking",
    };
    res.status(500).json(response);
  }
};

// Get booking by ID
export const getBookingById: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const booking = mockBookings.find((b) => b.id === id);

    if (!booking) {
      const response: ApiResponse<Booking> = {
        success: false,
        error: "Booking not found",
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<Booking> = {
      success: true,
      data: booking,
      message: "Booking retrieved successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<Booking> = {
      success: false,
      error: "Failed to retrieve booking",
    };
    res.status(500).json(response);
  }
};

// Get user bookings
export const getUserBookings: RequestHandler = (req, res) => {
  try {
    // Mock user ID - in production, this would come from authentication
    const userId = "user-123";
    const userBookings = mockBookings.filter(
      (booking) => booking.userId === userId,
    );

    const response: ApiResponse<Booking[]> = {
      success: true,
      data: userBookings,
      message: "User bookings retrieved successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<Booking[]> = {
      success: false,
      error: "Failed to retrieve user bookings",
    };
    res.status(500).json(response);
  }
};

// Update booking status
export const updateBookingStatus: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const bookingIndex = mockBookings.findIndex((b) => b.id === id);
    if (bookingIndex === -1) {
      const response: ApiResponse<Booking> = {
        success: false,
        error: "Booking not found",
      };
      return res.status(404).json(response);
    }

    mockBookings[bookingIndex] = {
      ...mockBookings[bookingIndex],
      status,
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<Booking> = {
      success: true,
      data: mockBookings[bookingIndex],
      message: "Booking status updated successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<Booking> = {
      success: false,
      error: "Failed to update booking status",
    };
    res.status(500).json(response);
  }
};

// Cancel booking
export const cancelBooking: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const bookingIndex = mockBookings.findIndex((b) => b.id === id);

    if (bookingIndex === -1) {
      const response: ApiResponse<Booking> = {
        success: false,
        error: "Booking not found",
      };
      return res.status(404).json(response);
    }

    mockBookings[bookingIndex] = {
      ...mockBookings[bookingIndex],
      status: "cancelled",
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<Booking> = {
      success: true,
      data: mockBookings[bookingIndex],
      message: "Booking cancelled successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<Booking> = {
      success: false,
      error: "Failed to cancel booking",
    };
    res.status(500).json(response);
  }
};

// Get available add-ons
export const getAddOns: RequestHandler = (req, res) => {
  try {
    const response: ApiResponse<AddOn[]> = {
      success: true,
      data: mockAddOns,
      message: "Add-ons retrieved successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<AddOn[]> = {
      success: false,
      error: "Failed to retrieve add-ons",
    };
    res.status(500).json(response);
  }
};

// Confirm booking (after payment)
export const confirmBooking: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { paymentIntentId } = req.body;

    const bookingIndex = mockBookings.findIndex((b) => b.id === id);
    if (bookingIndex === -1) {
      const response: ApiResponse<BookingConfirmation> = {
        success: false,
        error: "Booking not found",
      };
      return res.status(404).json(response);
    }

    // Update booking with payment confirmation
    mockBookings[bookingIndex] = {
      ...mockBookings[bookingIndex],
      status: "confirmed",
      paymentStatus: "paid",
      paymentIntentId,
      updatedAt: new Date().toISOString(),
    };

    const confirmationNumber = generateConfirmationNumber();

    // Mock room and user data - in production, fetch from database
    const mockRoom = {
      id: mockBookings[bookingIndex].roomId,
      name: "Deluxe Ocean View",
      type: "deluxe" as const,
      description: "Beautiful ocean view room",
      price: 399,
      capacity: { adults: 2, children: 1 },
      size: 42,
      amenities: [],
      images: [],
      features: [],
      available: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const mockUser = {
      id: mockBookings[bookingIndex].userId,
      email: "guest@example.com",
      firstName: "John",
      lastName: "Doe",
      role: "guest" as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const confirmation: BookingConfirmation = {
      booking: mockBookings[bookingIndex],
      room: mockRoom,
      user: mockUser,
      totalAmount: mockBookings[bookingIndex].totalAmount,
      confirmationNumber,
    };

    const response: ApiResponse<BookingConfirmation> = {
      success: true,
      data: confirmation,
      message: "Booking confirmed successfully",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<BookingConfirmation> = {
      success: false,
      error: "Failed to confirm booking",
    };
    res.status(500).json(response);
  }
};
