import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  User,
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  ApiResponse,
} from "@shared/api";

// Mock users database - in production, this would be a real database
const mockUsers: User[] = [
  {
    id: "admin-1",
    email: "admin@goldenoasis.com",
    firstName: "Admin",
    lastName: "User",
    phone: "+1-555-0100",
    role: "admin",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "guest-1",
    email: "guest@example.com",
    firstName: "John",
    lastName: "Doe",
    phone: "+1-555-0123",
    role: "guest",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

// Mock passwords (in production, these would be properly hashed and stored securely)
const mockPasswords: Record<string, string> = {
  "admin@goldenoasis.com":
    "$2a$10$rQZ8J8VNvU5KqF5RnK1N2.8F8xF5J8ZQF5RnK1N2.8F8xF5J8ZQF5",
  "guest@example.com":
    "$2a$10$rQZ8J8VNvU5KqF5RnK1N2.8F8xF5J8ZQF5RnK1N2.8F8xF5J8ZQF5",
};

const JWT_EXPIRES_IN = "7d";

const getJwtSecret = () => process.env.JWT_SECRET || "your-secret-key";

// Generate JWT token
const generateToken = (user: User): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    getJwtSecret(),
    { expiresIn: JWT_EXPIRES_IN },
  );
};

// Register new user
export const register: RequestHandler = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone }: RegisterRequest =
      req.body;

    // Check if user already exists
    const existingUser = mockUsers.find((user) => user.email === email);
    if (existingUser) {
      const response: ApiResponse<AuthResponse> = {
        success: false,
        error: "User with this email already exists",
      };
      return res.status(400).json(response);
    }

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      const response: ApiResponse<AuthResponse> = {
        success: false,
        error: "All required fields must be provided",
      };
      return res.status(400).json(response);
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      firstName,
      lastName,
      phone,
      role: "guest",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Store user and password (in production, use proper database)
    mockUsers.push(newUser);
    mockPasswords[email] = hashedPassword;

    // Generate token
    const token = generateToken(newUser);

    const response: ApiResponse<AuthResponse> = {
      success: true,
      data: {
        user: newUser,
        token,
        expiresIn: 7 * 24 * 60 * 60, // 7 days in seconds
      },
      message: "User registered successfully",
    };

    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<AuthResponse> = {
      success: false,
      error: "Registration failed",
    };
    res.status(500).json(response);
  }
};

// Login user
export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password }: LoginRequest = req.body;

    // Validate input
    if (!email || !password) {
      const response: ApiResponse<AuthResponse> = {
        success: false,
        error: "Email and password are required",
      };
      return res.status(400).json(response);
    }

    // Find user
    const user = mockUsers.find((u) => u.email === email);
    if (!user) {
      const response: ApiResponse<AuthResponse> = {
        success: false,
        error: "Invalid email or password",
      };
      return res.status(401).json(response);
    }

    // Check password
    const storedPassword = mockPasswords[email];
    if (!storedPassword) {
      const response: ApiResponse<AuthResponse> = {
        success: false,
        error: "Invalid email or password",
      };
      return res.status(401).json(response);
    }

    // For demo purposes, accept any password for existing users
    const isValidPassword = password === "password" || password === "admin123";

    if (!isValidPassword) {
      const response: ApiResponse<AuthResponse> = {
        success: false,
        error: "Invalid email or password",
      };
      return res.status(401).json(response);
    }

    // Generate token
    const token = generateToken(user);

    const response: ApiResponse<AuthResponse> = {
      success: true,
      data: {
        user,
        token,
        expiresIn: 7 * 24 * 60 * 60, // 7 days in seconds
      },
      message: "Login successful",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<AuthResponse> = {
      success: false,
      error: "Login failed",
    };
    res.status(500).json(response);
  }
};

// Verify token middleware
export const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      const response: ApiResponse<any> = {
        success: false,
        error: "Access token is required",
      };
      return res.status(401).json(response);
    }

    const decoded = jwt.verify(token, getJwtSecret()) as any;
    const user = mockUsers.find((u) => u.id === decoded.id);

    if (!user) {
      const response: ApiResponse<any> = {
        success: false,
        error: "Invalid token",
      };
      return res.status(401).json(response);
    }

    // Add user to request object
    (req as any).user = user;
    next();
  } catch (error) {
    const response: ApiResponse<any> = {
      success: false,
      error: "Invalid token",
    };
    res.status(401).json(response);
  }
};

// Get current user
export const getCurrentUser: RequestHandler = (req, res) => {
  try {
    const user = (req as any).user;

    const response: ApiResponse<User> = {
      success: true,
      data: user,
      message: "User retrieved successfully",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<User> = {
      success: false,
      error: "Failed to retrieve user",
    };
    res.status(500).json(response);
  }
};

// Update user profile
export const updateProfile: RequestHandler = (req, res) => {
  try {
    const user = (req as any).user;
    const { firstName, lastName, phone } = req.body;

    // Find user index
    const userIndex = mockUsers.findIndex((u) => u.id === user.id);
    if (userIndex === -1) {
      const response: ApiResponse<User> = {
        success: false,
        error: "User not found",
      };
      return res.status(404).json(response);
    }

    // Update user
    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      firstName: firstName || mockUsers[userIndex].firstName,
      lastName: lastName || mockUsers[userIndex].lastName,
      phone: phone || mockUsers[userIndex].phone,
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<User> = {
      success: true,
      data: mockUsers[userIndex],
      message: "Profile updated successfully",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<User> = {
      success: false,
      error: "Failed to update profile",
    };
    res.status(500).json(response);
  }
};

// Change password
export const changePassword: RequestHandler = async (req, res) => {
  try {
    const user = (req as any).user;
    const { currentPassword, newPassword } = req.body;

    // Validate input
    if (!currentPassword || !newPassword) {
      const response: ApiResponse<any> = {
        success: false,
        error: "Current password and new password are required",
      };
      return res.status(400).json(response);
    }

    // For demo purposes, allow password change with any current password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    mockPasswords[user.email] = hashedPassword;

    const response: ApiResponse<any> = {
      success: true,
      message: "Password changed successfully",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<any> = {
      success: false,
      error: "Failed to change password",
    };
    res.status(500).json(response);
  }
};

// Logout (client-side token removal, but we can log it server-side)
export const logout: RequestHandler = (req, res) => {
  try {
    // In a production app, you might want to blacklist the token
    const response: ApiResponse<any> = {
      success: true,
      message: "Logged out successfully",
    };

    res.json(response);
  } catch (error) {
    const response: ApiResponse<any> = {
      success: false,
      error: "Logout failed",
    };
    res.status(500).json(response);
  }
};
