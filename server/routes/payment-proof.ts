import type { Request, RequestHandler, Response } from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import { z } from "zod";
import type {
  PaymentProofResponse,
  PaymentProofSubmission,
} from "@shared/api";

const MAX_SCREENSHOT_SIZE = 5 * 1024 * 1024;
const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

const paymentProofSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  phone: z.string().trim().min(1, "Phone is required."),
  roomName: z.string().trim().optional(),
  checkIn: z.string().trim().optional(),
  checkOut: z.string().trim().optional(),
  guests: z.string().trim().optional(),
  paymentMethod: z.string().trim().min(1, "Payment method is required."),
  transactionReference: z
    .string()
    .trim()
    .min(1, "Transaction/reference number is required."),
  message: z.string().trim().optional(),
});

const smtpSchema = z.object({
  SMTP_HOST: z.string().trim().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_USER: z.string().trim().min(1),
  SMTP_PASS: z.string().trim().min(1),
  EMAIL_FROM: z.string().trim().min(1),
  HOTEL_RECEIVER_EMAIL: z.string().trim().email(),
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_SCREENSHOT_SIZE,
  },
  fileFilter: (_req, file, cb) => {
    if (!allowedMimeTypes.has(file.mimetype)) {
      cb(new Error("Screenshot must be a JPG, PNG, or WebP image."));
      return;
    }

    cb(null, true);
  },
});

const normalizeOptional = (value?: string) =>
  value && value.trim().length > 0 ? value.trim() : "Not provided";

const buildTextBody = (payload: PaymentProofSubmission) =>
  [
    "A new hotel payment proof has been submitted.",
    "",
    `Full name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Room / booking details: ${normalizeOptional(payload.roomName)}`,
    `Check-in: ${normalizeOptional(payload.checkIn)}`,
    `Check-out: ${normalizeOptional(payload.checkOut)}`,
    `Guests: ${normalizeOptional(payload.guests)}`,
    `Payment method: ${payload.paymentMethod}`,
    `Transaction/reference number: ${payload.transactionReference}`,
    `Message: ${normalizeOptional(payload.message)}`,
  ].join("\n");

const buildHtmlBody = (payload: PaymentProofSubmission) => `
  <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
    <h2 style="margin-bottom: 16px;">New Hotel Payment Proof</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tbody>
        <tr><td style="padding: 8px 0; font-weight: 700;">Full name</td><td style="padding: 8px 0;">${payload.fullName}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Email</td><td style="padding: 8px 0;">${payload.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Phone</td><td style="padding: 8px 0;">${payload.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Room / booking details</td><td style="padding: 8px 0;">${normalizeOptional(payload.roomName)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Check-in</td><td style="padding: 8px 0;">${normalizeOptional(payload.checkIn)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Check-out</td><td style="padding: 8px 0;">${normalizeOptional(payload.checkOut)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Guests</td><td style="padding: 8px 0;">${normalizeOptional(payload.guests)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Payment method</td><td style="padding: 8px 0;">${payload.paymentMethod}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Transaction/reference number</td><td style="padding: 8px 0;">${payload.transactionReference}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Message</td><td style="padding: 8px 0;">${normalizeOptional(payload.message)}</td></tr>
      </tbody>
    </table>
    <p style="margin-top: 20px;">The payment screenshot is attached to this email.</p>
  </div>
`;

const sendError = (
  res: Response<PaymentProofResponse>,
  status: number,
  error: string,
) => res.status(status).json({ success: false, error });

const runUpload = (req: Request, res: Response) =>
  new Promise<void>((resolve, reject) => {
    upload.single("screenshot")(req, res, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

const getSmtpConfig = () => {
  const parsed = smtpSchema.safeParse(process.env);
  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};

export const submitPaymentProof: RequestHandler = async (req, res) => {
  try {
    await runUpload(req, res);

    const parsedBody = paymentProofSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return sendError(res, 400, parsedBody.error.issues[0]?.message || "Invalid form submission.");
    }

    if (!req.file) {
      return sendError(res, 400, "Payment screenshot is required.");
    }

    const smtpConfig = getSmtpConfig();
    if (!smtpConfig) {
      return sendError(res, 500, "Email service is not configured.");
    }

    const transporter = nodemailer.createTransport({
      host: smtpConfig.SMTP_HOST,
      port: smtpConfig.SMTP_PORT,
      secure: smtpConfig.SMTP_PORT === 465,
      auth: {
        user: smtpConfig.SMTP_USER,
        pass: smtpConfig.SMTP_PASS,
      },
    });

    const payload: PaymentProofSubmission = {
      fullName: parsedBody.data.fullName,
      email: parsedBody.data.email,
      phone: parsedBody.data.phone,
      roomName: parsedBody.data.roomName,
      checkIn: parsedBody.data.checkIn,
      checkOut: parsedBody.data.checkOut,
      guests: parsedBody.data.guests,
      paymentMethod: parsedBody.data.paymentMethod,
      transactionReference: parsedBody.data.transactionReference,
      message: parsedBody.data.message,
    };

    await transporter.sendMail({
      from: smtpConfig.EMAIL_FROM,
      to: smtpConfig.HOTEL_RECEIVER_EMAIL,
      replyTo: payload.email,
      subject: `New Hotel Payment Proof - ${payload.fullName}`,
      text: buildTextBody(payload),
      html: buildHtmlBody(payload),
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ],
    });

    return res.json({
      success: true,
      message: "Payment proof submitted successfully.",
    });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      if (error.code === "LIMIT_FILE_SIZE") {
        return sendError(res, 400, "Screenshot must be 5MB or smaller.");
      }

      return sendError(res, 400, "Unable to process the uploaded screenshot.");
    }

    if (error instanceof Error) {
      if (error.message === "Screenshot must be a JPG, PNG, or WebP image.") {
        return sendError(res, 400, error.message);
      }
    }

    return sendError(res, 500, "Failed to submit payment proof.");
  }
};
