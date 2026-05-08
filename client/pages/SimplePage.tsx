import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type Cta = {
  label: string;
  href: string;
  variant?: "default" | "outline";
};

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  ctas: Cta[];
};

export default function SimplePage({
  eyebrow,
  title,
  description,
  icon: Icon,
  features,
  ctas,
}: SimplePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden pb-16 pt-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_36%),linear-gradient(180deg,rgba(248,243,234,0.96),rgba(255,255,255,1))]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-luxury-200 bg-white/80 px-5 py-2 text-sm font-semibold tracking-[0.24em] text-luxury-700 uppercase shadow-sm">
                <Icon className="h-4 w-4" />
                <span>{eyebrow}</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-hotel-900 md:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-hotel-600 md:text-xl">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href + cta.label}
                    asChild
                    variant={cta.variant === "outline" ? "outline" : "default"}
                    className={
                      cta.variant === "outline"
                        ? "border-luxury-300 text-luxury-700 hover:bg-luxury-50"
                        : "btn-luxury text-hotel-900"
                    }
                  >
                    <Link to={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="card-luxury border-luxury-200/70">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-hotel-900">
                      {feature.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-hotel-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
