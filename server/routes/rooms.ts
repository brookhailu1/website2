import { RequestHandler } from "express";
import {
  Room,
  RoomSearchRequest,
  RoomAvailability,
  ApiResponse,
} from "@shared/api";

// Mock data - in production, this would be from a database
const mockRooms: Room[] = [
  {
    id: "1",
    name: "Deluxe Ocean View",
    description:
      "Experience breathtaking ocean views from this elegantly appointed room featuring premium amenities and a private balcony perfect for sunrise coffee or sunset cocktails.",
    type: "deluxe",
    price: 399,
    capacity: { adults: 2, children: 1 },
    size: 42,
    amenities: [
      "High-speed Wi-Fi",
      "Mini bar",
      "24/7 room service",
      "Premium bedding",
      "Marble bathroom",
      "Private balcony",
      "Ocean view",
      "Air conditioning",
      "Flat-screen TV",
      "Safe",
      "Coffee maker",
      "Bathrobes & slippers",
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=2070&auto=format&fit=crop",
    ],
    features: ["Ocean View", "King Bed", "42m²", "Private Balcony"],
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Executive Suite",
    description:
      "Sophisticated suite with separate living area, perfect for business travelers or those seeking extra space and luxury during their stay.",
    type: "executive",
    price: 699,
    capacity: { adults: 3, children: 2 },
    size: 65,
    amenities: [
      "High-speed Wi-Fi",
      "Kitchenette",
      "Business center access",
      "Premium bedding",
      "Marble bathroom",
      "Separate living area",
      "City view",
      "Air conditioning",
      "2 Flat-screen TVs",
      "Safe",
      "Coffee maker",
      "Work desk",
      "Bathrobes & slippers",
    ],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    ],
    features: ["City View", "Living Area", "65m²", "Work Desk"],
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury living with panoramic views, private terrace, and exclusive amenities designed for the most discerning guests.",
    type: "presidential",
    price: 1299,
    capacity: { adults: 4, children: 2 },
    size: 120,
    amenities: [
      "Butler service",
      "Private chef available",
      "Spa access",
      "Limousine service",
      "Premium bedding",
      "Master bathroom with jacuzzi",
      "Private terrace",
      "Panoramic view",
      "Climate control",
      "Multiple flat-screen TVs",
      "Safe",
      "Full kitchen",
      "Dining area",
      "Living room",
      "Walk-in closet",
      "Premium amenities",
    ],
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    ],
    features: ["Panoramic View", "Private Terrace", "120m²", "Dining Area"],
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Luxury Garden Suite",
    description:
      "Tranquil suite overlooking our beautifully landscaped gardens, offering a peaceful retreat with premium amenities and serene views.",
    type: "suite",
    price: 899,
    capacity: { adults: 2, children: 2 },
    size: 85,
    amenities: [
      "High-speed Wi-Fi",
      "Garden view",
      "Separate living area",
      "Premium bedding",
      "Marble bathroom",
      "Private patio",
      "Air conditioning",
      "Flat-screen TV",
      "Safe",
      "Coffee maker",
      "Mini refrigerator",
      "Bathrobes & slippers",
    ],
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    ],
    features: ["Garden View", "Private Patio", "85m²", "Living Area"],
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

// Get all rooms
export const getAllRooms: RequestHandler = (req, res) => {
  try {
    const response: ApiResponse<Room[]> = {
      success: true,
      data: mockRooms,
      message: "Rooms retrieved successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<Room[]> = {
      success: false,
      error: "Failed to retrieve rooms",
    };
    res.status(500).json(response);
  }
};

// Get room by ID
export const getRoomById: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const room = mockRooms.find((r) => r.id === id);

    if (!room) {
      const response: ApiResponse<Room> = {
        success: false,
        error: "Room not found",
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<Room> = {
      success: true,
      data: room,
      message: "Room retrieved successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<Room> = {
      success: false,
      error: "Failed to retrieve room",
    };
    res.status(500).json(response);
  }
};

// Search available rooms
export const searchRooms: RequestHandler = (req, res) => {
  try {
    const searchParams: RoomSearchRequest = req.body;
    const {
      checkIn,
      checkOut,
      adults,
      children,
      roomType,
      minPrice,
      maxPrice,
    } = searchParams;

    // Mock availability logic - in production, this would check actual bookings
    let availableRooms = mockRooms.filter((room) => {
      // Check capacity
      if (room.capacity.adults < adults || room.capacity.children < children) {
        return false;
      }

      // Check room type
      if (roomType && room.type !== roomType) {
        return false;
      }

      // Check price range
      if (minPrice && room.price < minPrice) {
        return false;
      }
      if (maxPrice && room.price > maxPrice) {
        return false;
      }

      return room.available;
    });

    // Calculate nights and total price
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    const roomAvailability: RoomAvailability[] = availableRooms.map((room) => ({
      room,
      available: true,
      price: room.price,
      totalPrice: room.price * nights,
      nights,
    }));

    const response: ApiResponse<RoomAvailability[]> = {
      success: true,
      data: roomAvailability,
      message: "Room availability retrieved successfully",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<RoomAvailability[]> = {
      success: false,
      error: "Failed to search rooms",
    };
    res.status(500).json(response);
  }
};

// Get room types
export const getRoomTypes: RequestHandler = (req, res) => {
  try {
    const roomTypes = [
      {
        value: "deluxe",
        label: "Deluxe",
        count: mockRooms.filter((r) => r.type === "deluxe").length,
      },
      {
        value: "executive",
        label: "Executive",
        count: mockRooms.filter((r) => r.type === "executive").length,
      },
      {
        value: "suite",
        label: "Suite",
        count: mockRooms.filter((r) => r.type === "suite").length,
      },
      {
        value: "presidential",
        label: "Presidential",
        count: mockRooms.filter((r) => r.type === "presidential").length,
      },
    ];

    const response: ApiResponse<typeof roomTypes> = {
      success: true,
      data: roomTypes,
      message: "Room types retrieved successfully",
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<any> = {
      success: false,
      error: "Failed to retrieve room types",
    };
    res.status(500).json(response);
  }
};
