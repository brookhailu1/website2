import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body:
      "We use your details only to manage reservations, respond to inquiries, and provide your stay experience. Payment-proof submissions are reviewed only by the reservations team.",
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    body:
      "Rates, room availability, and special offers remain subject to confirmation. Reservation requests are finalized only after the hotel confirms the booking directly.",
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    body:
      "Cancellation terms depend on the room type and offer selected. Guests should review the terms provided during booking confirmation before finalizing payment.",
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    body:
      "This website uses essential cookies and analytics-related browser storage to improve browsing experience, remember UI preferences, and monitor performance.",
  },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="bg-gradient-to-r from-hotel-50 to-luxury-50 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
              Guest policies
            </p>
            <h1 className="mt-4 text-4xl font-bold text-hotel-900 md:text-5xl">
              Policies and reservation guidance
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-hotel-600">
              A clean summary of the policies guests usually review before
              booking or submitting payment confirmation.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {sections.map((section) => (
              <Card key={section.id} id={section.id} className="card-luxury border-luxury-200/70 scroll-mt-28">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-hotel-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-hotel-600 leading-8">{section.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
