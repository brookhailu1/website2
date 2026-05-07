import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  ImageUp,
  Landmark,
  LockKeyhole,
  Mail,
  Phone,
  ReceiptText,
  UserRound,
  Users,
} from "lucide-react";

type PaymentProofFormState = {
  fullName: string;
  email: string;
  phone: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  paymentMethod: string;
  transactionReference: string;
  message: string;
};

type ApiResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

const initialFormState: PaymentProofFormState = {
  fullName: "",
  email: "",
  phone: "",
  roomName: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  paymentMethod: "",
  transactionReference: "",
  message: "",
};

const acceptedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
const maxFileSize = 5 * 1024 * 1024;

const paymentMethodOptions = [
  "Bank transfer",
  "Telebirr",
  "CBE Birr",
  "Mobile money",
  "Cash deposit",
];

export default function Booking() {
  const [form, setForm] = useState<PaymentProofFormState>(initialFormState);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(0);

  const staySummary = useMemo(() => {
    if (!form.checkIn || !form.checkOut) {
      return null;
    }

    const checkInDate = new Date(form.checkIn);
    const checkOutDate = new Date(form.checkOut);
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) /
        (1000 * 60 * 60 * 24),
    );

    if (Number.isNaN(nights) || nights <= 0) {
      return null;
    }

    return `${nights} night${nights > 1 ? "s" : ""}`;
  }, [form.checkIn, form.checkOut]);

  const handleInputChange =
    (field: keyof PaymentProofFormState) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const validateScreenshot = (file: File | null) => {
    if (!file) {
      return "Payment screenshot is required.";
    }

    if (!acceptedMimeTypes.includes(file.type)) {
      return "Upload a JPG, PNG, or WebP screenshot.";
    }

    if (file.size > maxFileSize) {
      return "Screenshot must be 5MB or smaller.";
    }

    return "";
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    const fileError = validateScreenshot(file);

    setSubmitSuccess("");

    if (fileError) {
      setScreenshot(null);
      setSubmitError(fileError);
      return;
    }

    setSubmitError("");
    setScreenshot(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fileError = validateScreenshot(screenshot);
    if (fileError) {
      setSubmitSuccess("");
      setSubmitError(fileError);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    const payload = new FormData();
    payload.append("fullName", form.fullName);
    payload.append("email", form.email);
    payload.append("phone", form.phone);
    payload.append("roomName", form.roomName);
    payload.append("checkIn", form.checkIn);
    payload.append("checkOut", form.checkOut);
    payload.append("guests", form.guests);
    payload.append("paymentMethod", form.paymentMethod);
    payload.append("transactionReference", form.transactionReference);
    payload.append("message", form.message);
    payload.append("screenshot", screenshot as File);

    try {
      const response = await fetch("/api/payment-proof", {
        method: "POST",
        body: payload,
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to submit payment proof.");
      }

      setSubmitSuccess(
        data.message || "Payment proof submitted successfully.",
      );
      setForm(initialFormState);
      setScreenshot(null);
      setFileInputKey((current) => current + 1);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit payment proof.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-x-hidden">
        <section className="relative isolate pt-32 pb-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_38%),linear-gradient(135deg,#111827_0%,#1f2937_45%,#f8f3ea_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="text-white">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold tracking-[0.24em] text-luxury-200 uppercase">
                  Manual payment confirmation
                </span>
                <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-balance md:text-6xl">
                  Send your hotel payment proof directly to our reservations
                  team.
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white/78 md:text-xl">
                  Complete the booking details, upload your payment screenshot,
                  and we will review it and confirm your stay by email.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <Card className="border-white/10 bg-white/10 text-white shadow-none backdrop-blur-md">
                    <CardContent className="flex items-start gap-3 p-5">
                      <LockKeyhole className="mt-0.5 h-5 w-5 text-luxury-300" />
                      <div>
                        <p className="font-semibold">Private handling</p>
                        <p className="mt-1 text-sm text-white/70">
                          Your proof is sent to the hotel inbox only.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-white/10 bg-white/10 text-white shadow-none backdrop-blur-md">
                    <CardContent className="flex items-start gap-3 p-5">
                      <ReceiptText className="mt-0.5 h-5 w-5 text-luxury-300" />
                      <div>
                        <p className="font-semibold">Fast verification</p>
                        <p className="mt-1 text-sm text-white/70">
                          Include the exact transaction reference for review.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-white/10 bg-white/10 text-white shadow-none backdrop-blur-md">
                    <CardContent className="flex items-start gap-3 p-5">
                      <ImageUp className="mt-0.5 h-5 w-5 text-luxury-300" />
                      <div>
                        <p className="font-semibold">Image proof</p>
                        <p className="mt-1 text-sm text-white/70">
                          Accepted formats: JPG, PNG, or WebP up to 5MB.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border border-luxury-200/60 bg-white/95 shadow-2xl backdrop-blur">
                <CardHeader className="space-y-3 pb-3">
                  <CardTitle className="text-2xl text-hotel-900 md:text-3xl">
                    Payment proof form
                  </CardTitle>
                  <p className="text-sm leading-6 text-hotel-600">
                    Fill in the guest details exactly as they appear on the
                    transfer. Fields marked with * are required.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {submitError ? (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Submission failed</AlertTitle>
                        <AlertDescription>{submitError}</AlertDescription>
                      </Alert>
                    ) : null}

                    {submitSuccess ? (
                      <Alert className="border-luxury-300 bg-luxury-50 text-hotel-900">
                        <CheckCircle2 className="h-4 w-4 text-luxury-700" />
                        <AlertTitle>Payment proof received</AlertTitle>
                        <AlertDescription>{submitSuccess}</AlertDescription>
                      </Alert>
                    ) : null}

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full name *</Label>
                        <div className="relative">
                          <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="fullName"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleInputChange("fullName")}
                            className="h-11 border-hotel-200 pl-10"
                            autoComplete="name"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleInputChange("email")}
                            className="h-11 border-hotel-200 pl-10"
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleInputChange("phone")}
                            className="h-11 border-hotel-200 pl-10"
                            autoComplete="tel"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Guests</Label>
                        <div className="relative">
                          <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="guests"
                            name="guests"
                            type="number"
                            min="1"
                            value={form.guests}
                            onChange={handleInputChange("guests")}
                            className="h-11 border-hotel-200 pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="roomName">Room / booking details</Label>
                      <Input
                        id="roomName"
                        name="roomName"
                        value={form.roomName}
                        onChange={handleInputChange("roomName")}
                        className="h-11 border-hotel-200"
                        placeholder="Example: Deluxe Ocean View, honeymoon booking"
                      />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="checkIn">Check-in date</Label>
                        <div className="relative">
                          <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="checkIn"
                            name="checkIn"
                            type="date"
                            value={form.checkIn}
                            onChange={handleInputChange("checkIn")}
                            className="h-11 border-hotel-200 pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="checkOut">Check-out date</Label>
                        <div className="relative">
                          <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="checkOut"
                            name="checkOut"
                            type="date"
                            value={form.checkOut}
                            onChange={handleInputChange("checkOut")}
                            className="h-11 border-hotel-200 pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    {staySummary ? (
                      <div className="rounded-2xl border border-luxury-200 bg-luxury-50/80 px-4 py-3 text-sm text-hotel-700">
                        Planned stay: <span className="font-semibold">{staySummary}</span>
                      </div>
                    ) : null}

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="paymentMethod">Payment method *</Label>
                        <div className="relative">
                          <CreditCard className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={form.paymentMethod}
                            onChange={handleInputChange("paymentMethod")}
                            className="flex h-11 w-full appearance-none rounded-md border border-hotel-200 bg-background pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            required
                          >
                            <option value="">Select a payment method</option>
                            {paymentMethodOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="transactionReference">
                          Transaction/reference number *
                        </Label>
                        <div className="relative">
                          <Landmark className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hotel-400" />
                          <Input
                            id="transactionReference"
                            name="transactionReference"
                            value={form.transactionReference}
                            onChange={handleInputChange("transactionReference")}
                            className="h-11 border-hotel-200 pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="screenshot">Payment screenshot *</Label>
                      <div className="rounded-2xl border border-dashed border-luxury-300 bg-luxury-50/40 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-semibold text-hotel-900">
                              Upload a clear screenshot of the payment proof
                            </p>
                            <p className="mt-1 text-sm text-hotel-600">
                              JPG, PNG, or WebP. Maximum size 5MB.
                            </p>
                          </div>
                          <ImageUp className="h-10 w-10 text-luxury-600" />
                        </div>

                        <Input
                          key={fileInputKey}
                          id="screenshot"
                          name="screenshot"
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                          onChange={handleFileChange}
                          className="mt-4 border-white bg-white file:mr-4 file:rounded-md file:border-0 file:bg-hotel-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-hotel-800"
                          required
                        />

                        <p className="mt-3 text-sm text-hotel-700">
                          {screenshot
                            ? `Selected file: ${screenshot.name}`
                            : "No file selected yet."}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message / special request
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleInputChange("message")}
                        className="min-h-32 border-hotel-200"
                        placeholder="Add any notes for the reservation team."
                      />
                    </div>

                    <div className="flex flex-col gap-4 rounded-2xl bg-hotel-900 px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold">Ready for review</p>
                        <p className="mt-1 text-sm text-white/70">
                          The hotel will receive your payment proof by email
                          with the uploaded screenshot attached.
                        </p>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="min-w-52 bg-luxury-500 text-hotel-900 hover:bg-luxury-400"
                      >
                        {isSubmitting ? "Submitting..." : "Submit payment proof"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <Card className="card-luxury border-luxury-200/70">
                <CardHeader>
                  <CardTitle className="text-hotel-900">
                    Before you submit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-6 text-hotel-700">
                  <p>
                    Use the same email and phone number you want the hotel to
                    use when confirming your reservation.
                  </p>
                  <p>
                    Make sure the screenshot clearly shows the amount, the date,
                    and the transaction/reference number.
                  </p>
                  <p>
                    If you have not selected a room yet, you can browse current
                    options before sending the payment proof.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-2 border-luxury-300 text-luxury-700 hover:bg-luxury-50"
                  >
                    <Link to="/rooms">Browse rooms and suites</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-hotel-200">
                <div className="relative h-full min-h-72 bg-[linear-gradient(160deg,rgba(17,24,39,0.96),rgba(55,65,81,0.9)),url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative flex h-full flex-col justify-end p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.3em] text-luxury-300">
                      Golden Oasis reservations
                    </p>
                    <h2 className="mt-3 max-w-xl text-3xl font-bold">
                      A polished arrival starts with a clear confirmation.
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                      Once your proof is reviewed, the reservations team can
                      follow up with room confirmation and next steps for your
                      stay.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
