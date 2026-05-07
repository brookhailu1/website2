import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { submitPaymentProof } from "./routes/payment-proof";
import {
  getAllRooms,
  getRoomById,
  searchRooms,
  getRoomTypes,
} from "./routes/rooms";
import {
  createBooking,
  getBookingById,
  getUserBookings,
  updateBookingStatus,
  cancelBooking,
  getAddOns,
  confirmBooking,
} from "./routes/bookings";
import {
  register,
  login,
  verifyToken,
  getCurrentUser,
  updateProfile,
  changePassword,
  logout,
} from "./routes/auth";

process.loadEnvFile?.();

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Golden Oasis Hotel API - Running!" });
  });

  // Demo route
  app.get("/api/demo", handleDemo);
  app.post("/api/payment-proof", submitPaymentProof);

  // Authentication routes
  app.post("/api/auth/register", register);
  app.post("/api/auth/login", login);
  app.post("/api/auth/logout", logout);
  app.get("/api/auth/me", verifyToken, getCurrentUser);
  app.put("/api/auth/profile", verifyToken, updateProfile);
  app.put("/api/auth/password", verifyToken, changePassword);

  // Room routes
  app.get("/api/rooms", getAllRooms);
  app.get("/api/rooms/types", getRoomTypes);
  app.post("/api/rooms/search", searchRooms);
  app.get("/api/rooms/:id", getRoomById);

  // Booking routes
  app.get("/api/bookings/addons", getAddOns);
  app.post("/api/bookings", verifyToken, createBooking);
  app.get("/api/bookings/user", verifyToken, getUserBookings);
  app.get("/api/bookings/:id", verifyToken, getBookingById);
  app.put("/api/bookings/:id/status", verifyToken, updateBookingStatus);
  app.put("/api/bookings/:id/confirm", verifyToken, confirmBooking);
  app.delete("/api/bookings/:id", verifyToken, cancelBooking);

  return app;
}
