import React from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { StarMotif, SunburstBadge, TomatoDoodle, ChiliDoodle } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Clock,
  Bike,
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  MapPin,
  Star,
  Users,
  Car,
  UtensilsCrossed,
  Flame,
} from "lucide-react";

export function BrandStrip() {
  const trustPillars = [
    {
      icon: Flame,
      title: "Signature Injected Broast",
      desc: "Our renowned marinated chicken injected with signature spicy rub, fried golden and extra crispy on the outside, succulent and juicy on the inside.",
      badge: "Kasur Crispy Legend",
      color: "border-red-500/40 text-red-400",
    },
    {
      icon: UtensilsCrossed,
      title: "Family Dine-In & Modern Vibe",
      desc: "Relatively calm and comfortable dining environment with modern cafe aesthetics, perfect for friends and family gatherings away from city rush.",
      badge: "Modern Ambiance",
      color: "border-amber-400/40 text-amber-300",
    },
    {
      icon: Bike,
      title: "Delivery & Takeaway (0322 1711222)",
      desc: "Free home delivery across Kasur on orders of Rs 1,000+. Piping hot packing ensures your broast, burgers, and handis arrive fresh.",
      badge: "Piping Hot Delivery",
      color: "border-emerald-400/40 text-emerald-300",
    },
    {
      icon: Car,
      title: "Free Street Parking & Kid-Friendly",
      desc: "Convenient location near Railway Crossing (Phatak) Kasur with plenty of street parking space, wheelchair accessibility, and child-friendly seating.",
      badge: "Ample Parking",
      color: "border-yellow-400/40 text-yellow-300",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-brand-forest-dark border-y border-brand-green/30 overflow-hidden"
      aria-label="About BURAK Crispy Juicy Legendary"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Story Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-forest/90 via-brand-forest-card/90 to-brand-forest/70 border border-brand-green/50 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden mb-16">
          
          {/* Subtle watermark logo pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none">
            <span className="font-display font-black text-[180px] leading-none text-white">
              BURAK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest-light/60 border border-amber-400/30">
                <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="font-display font-extrabold text-xs uppercase tracking-wider text-amber-300">
                  Kasur&apos;s Modern Culinary Landmark
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                BURAK: Crispy, Juicy,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">
                  Legendary Taste.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                Located near the <strong className="text-amber-300 font-bold">Railway Crossing (Phatak) in Kasur</strong>, BURAK brings a vibrant modern vibe and culinary excellence to the city. Whether you crave our signature injected crispy broast, wood-fired stuffed crust pizzas, charcoal Bar B.Q, or savory clay-pot handis, every plate is crafted to perfection.
              </p>

              <p className="text-base text-emerald-100/80 leading-relaxed">
                With a comfortable, well-lit interior, calm seating, friendly staff, and ample free parking, BURAK is the top choice for family get-togethers, celebrations, and late evening dining.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest-dark/80 border border-brand-green/40">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-200">
                    {BUSINESS_INFO.shortAddress}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest-dark/80 border border-brand-green/40">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-200">
                    {BUSINESS_INFO.priceRange}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Feature: Real Ambiance Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl group">
                <SafeImage
                  src="/images/ambiance_neon_wall.jpg"
                  alt="BURAK Restaurant Kasur Modern Interior Ambiance"
                  category="ambiance"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white font-display font-black text-xs uppercase tracking-wider inline-block mb-1 shadow-md">
                    Dine-In Ambiance
                  </span>
                  <h4 className="font-display font-black text-lg text-white">
                    Modern Greenery & Neon Vibes
                  </h4>
                  <p className="text-xs text-emerald-200/90">
                    Comfortable family dining near Kasur Railway Crossing
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-brand-forest/60 border border-brand-green/40 shadow-lg flex flex-col justify-between space-y-4 hover:border-amber-400/50 transition-all hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-brand-forest-dark border border-brand-green/40 text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-forest-light/70 text-emerald-300 border border-brand-green/40">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
