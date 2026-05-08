import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Camera, ImageIcon } from "lucide-react";

type GallerySection = {
  title: string;
  description: string;
  highlight: string;
  images: {
    src: string;
    alt: string;
    label: string;
    size?: "wide" | "tall";
  }[];
};

const gallerySections: GallerySection[] = [
  {
    title: "Exterior",
    description:
      "First impressions begin with sculpted arrival lines, glowing stonework, and a quiet sense of exclusivity.",
    highlight: "Arrival experience",
    images: [
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        alt: "Luxury hotel exterior with poolside architecture",
        label: "Grand Facade",
        size: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury hotel entrance at sunset",
        label: "Valet Arrival",
        size: "tall",
      },
      {
        src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
        alt: "Boutique hotel exterior with landscaped courtyard",
        label: "Courtyard Approach",
      },
    ],
  },
  {
    title: "Lobby",
    description:
      "Layered lighting, warm marble, and composed seating areas create a lobby that feels intimate rather than busy.",
    highlight: "Refined welcome",
    images: [
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Hotel lobby with luxury seating and chandeliers",
        label: "Reception Lounge",
        size: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80",
        alt: "Elegant hotel seating area",
        label: "Quiet Corner",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury hotel lobby with warm interior design",
        label: "Evening Check-In",
        size: "tall",
      },
    ],
  },
  {
    title: "Rooms & Suites",
    description:
      "Soft textures, tailored lighting, and restful layouts define each room as a private retreat within the city.",
    highlight: "Signature accommodations",
    images: [
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        alt: "Executive hotel suite interior",
        label: "Suite Living",
        size: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury king hotel room",
        label: "Deluxe Bedroom",
        size: "tall",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        alt: "Hotel room seating area with premium finishes",
        label: "Private Lounge",
      },
    ],
  },
  {
    title: "Dining",
    description:
      "Breakfast feels bright, dinner feels cinematic, and the lounge carries the same calm confidence as the rest of the property.",
    highlight: "Curated dining",
    images: [
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Fine dining restaurant in a luxury hotel",
        label: "Signature Restaurant",
        size: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
        alt: "Elegant restaurant table setting",
        label: "Evening Service",
        size: "tall",
      },
      {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury breakfast spread in hotel dining room",
        label: "Morning Table",
      },
    ],
  },
  {
    title: "Pool & Spa",
    description:
      "The leisure spaces are designed for recovery, not spectacle, with soft materials, open air, and slow transitions from day to evening.",
    highlight: "Wellness ritual",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        alt: "Luxury rooftop pool at hotel",
        label: "Rooftop Pool",
        size: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
        alt: "Spa relaxation area with warm lighting",
        label: "Spa Lounge",
        size: "tall",
      },
      {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury pool terrace with loungers",
        label: "Sun Terrace",
      },
    ],
  },
  {
    title: "Night Ambience",
    description:
      "After dark, Golden Oasis shifts into a quieter mood, with candlelit corners, warm glass reflections, and skyline views.",
    highlight: "After-hours atmosphere",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
        alt: "Luxury hotel terrace at night",
        label: "Terrace Glow",
        size: "wide",
      },
      {
        src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
        alt: "Boutique hotel courtyard lit at night",
        label: "Lantern Courtyard",
      },
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury hotel suite at night with ambient lighting",
        label: "Suite After Dusk",
        size: "tall",
      },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hotel-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,186,62,0.26),transparent_28%),linear-gradient(180deg,rgba(17,24,39,0.18),rgba(17,24,39,0.74))]" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-luxury-300 backdrop-blur">
                  <Camera className="h-4 w-4" />
                  Visual Journal
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                  A gallery shaped around mood, texture, and the quiet luxury of arrival.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                  Explore the spaces guests remember most, from the first evening
                  entrance to the final slow morning by the pool.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="btn-luxury text-hotel-900">
                    <Link to="/booking">
                      Book Your Stay
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-hotel-900"
                  >
                    <Link to="/rooms">Browse Rooms & Suites</Link>
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden border border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
                <CardContent className="p-0">
                  <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                    {[
                      "6 curated visual collections",
                      "Signature suites and social spaces",
                      "Easy-to-swap image data structure",
                      "Designed to support future image refreshes",
                    ].map((item) => (
                      <div key={item} className="bg-hotel-950/55 p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-luxury-400/20 p-2 text-luxury-300">
                            <ImageIcon className="h-4 w-4" />
                          </div>
                          <p className="text-sm leading-7 text-white/78">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-background via-luxury-50/30 to-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Badge className="bg-luxury-100 text-luxury-800 hover:bg-luxury-100">
                  Premium gallery
                </Badge>
                <h2 className="mt-4 text-3xl font-bold text-hotel-900 md:text-5xl">
                  Visual chapters of the Golden Oasis experience
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-hotel-600 md:text-lg">
                Each section is driven by a small data array so the image set can
                be refreshed later without reworking the page structure.
              </p>
            </div>

            <div className="space-y-16">
              {gallerySections.map((section) => (
                <section key={section.title} className="space-y-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                        {section.highlight}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold text-hotel-900">
                        {section.title}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-base leading-7 text-hotel-600">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid auto-rows-[240px] gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {section.images.map((image) => (
                      <article
                        key={image.src + image.label}
                        className={`group relative overflow-hidden rounded-[1.75rem] ${
                          image.size === "wide"
                            ? "md:col-span-2"
                            : image.size === "tall"
                              ? "md:row-span-2"
                              : ""
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-luxury-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                            {section.title}
                          </div>
                          <h4 className="mt-3 text-2xl font-bold text-white">
                            {image.label}
                          </h4>
                          <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                            {image.alt}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border border-luxury-200/70 card-luxury">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-luxury-700">
                    Ready to stay
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-hotel-900 md:text-4xl">
                    Turn the gallery preview into a confirmed arrival.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-hotel-600">
                    Explore room types, choose the stay that fits your pace, and
                    continue to the booking page when you are ready to submit your
                    reservation details.
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button asChild size="lg" className="btn-luxury text-hotel-900">
                    <Link to="/booking">Proceed to Booking</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-luxury-300 text-luxury-700 hover:bg-luxury-50"
                  >
                    <Link to="/rooms">Compare Rooms & Suites</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
