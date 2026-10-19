"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Sparkles,
  Users,
  Camera,
  Car,
  Wind,
  PhoneCall,
  CheckCircle2,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";

const SITTING_IMAGES = [
  {
    id: "neon-wall",
    title: "Signature Buraq Neon & Foliage Feature Wall",
    badge: "★ Signature Dining Spot",
    tagline: "Iconic Glowing Neon & Ivy Wall Decor",
    description:
      "Our Instagram-worthy feature wall with glowing 'Buraq Crispy Juicy Legendary' neon lights, lush artificial greenery, and warm hanging Edison bulb chandeliers.",
    image: "/images/ambiance_neon_wall.jpg",
    highlight: "Popular Photo Spot",
  },
  {
    id: "dining-hall",
    title: "Spacious Family Dining Hall",
    badge: "Family & Groups",
    tagline: "Air-Conditioned & Clean Environment",
    description:
      "A calm, comfortable dining hall equipped with sleek tables, modern chairs, and a relaxed atmosphere free from noisy street rush.",
    image: "/images/ambiance_dining_hall.jpg",
    highlight: "Groups & Parties",
  },
  {
    id: "cozy-booths",
    title: "Modern Seating & Ambient Lighting",
    badge: "Cozy Dining",
    tagline: "Ergonomic Furniture & Warm Lights",
    description:
      "Thoughtfully arranged tables with designer brick-column accents, ambient ceiling lamps, and comfortable seating for couples, friends, and family meals.",
    image: "/images/ambiance_seating_1.jpg",
    highlight: "Comfort Seating",
  },
];

const AMENITIES = [
  {
    icon: Users,
    title: "Family & Group Seating",
    desc: "Spacious tables and dedicated dining arrangements for family dinners, birthdays, and celebrations.",
  },
  {
    icon: Wind,
    title: "Calm & Modern Vibe",
    desc: "A relaxed, air-conditioned dining atmosphere that sets BURAK apart from traditional crowded street spots.",
  },
  {
    icon: Car,
    title: "Plenty of Street Parking",
    desc: "Easy, hassle-free parking right outside the restaurant near Railway Crossing (Phatak), Kasur.",
  },
  {
    icon: Camera,
    title: "Instagrammable Decor",
    desc: "Vibrant custom neon signs, hanging greenery, and artistic interiors perfect for memorable photos.",
  },
];

export function FoodGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(SITTING_IMAGES[0]);

  return (
    <section
      id="ambiance"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-brand-forest-dark via-brand-forest to-brand-forest-dark border-t border-brand-green/30 overflow-hidden"
      aria-label="BURAK Real Sitting Area & Dining Hall Showcase"
    >
      {/* Anchor for old links */}
      <span id="gallery" className="absolute -top-20" aria-hidden="true" />

      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Real Restaurant Photos • Kasur"
          title="Step Inside Our"
          highlight="Sitting Area & Dining Hall"
          subtitle="Take an authentic visual tour of BURAK Crispy Juicy Legendary located near Railway Crossing (Phatak), Kasur. Explore our signature glowing neon foliage wall, comfortable family tables, and modern welcoming atmosphere."
        />

        {/* Real Sitting Area Gallery Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Featured Photo (Large Showcase) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-neutral-900/90 border-2 border-amber-400/50 shadow-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
              <SafeImage
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                category="ambiance"
                fallbackTitle={selectedPhoto.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              {/* Photo Badges */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-display font-black text-xs shadow-lg uppercase tracking-wider">
                  {selectedPhoto.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[11px] font-bold">
                  Real Sitting Photo
                </span>
              </div>
            </div>

            {/* Bottom Caption Info */}
            <div className="p-6 sm:p-8 bg-brand-forest/90 border-t border-brand-green/30">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {selectedPhoto.tagline}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                {selectedPhoto.title}
              </h3>
              <p className="mt-2 text-sm text-emerald-100/90 leading-relaxed">
                {selectedPhoto.description}
              </p>

              {/* Action Link to Reserve */}
              <div className="mt-5 pt-4 border-t border-brand-green/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Dine-in Open Daily • Families & Groups Welcome</span>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Assalam o Alaikum BURAK Restaurant! I saw the sitting area on your website and would like to reserve a table for my family / group."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-95 text-white font-display font-extrabold text-xs shadow-lg transition-transform active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Table on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Thumbnails & Selection List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between px-1">
                <span className="font-display font-black text-sm uppercase tracking-wider text-amber-300">
                  Choose Dining View
                </span>
                <span className="text-xs text-emerald-300/70">
                  Click to enlarge photo
                </span>
              </div>

              {SITTING_IMAGES.map((item) => {
                const isActive = selectedPhoto.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPhoto(item)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center gap-4 cursor-pointer ${
                      isActive
                        ? "bg-brand-forest-light border-amber-400 shadow-xl shadow-amber-400/10 scale-[1.01]"
                        : "bg-brand-forest/60 border-brand-green/30 hover:border-brand-green hover:bg-brand-forest/80"
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-24 sm:w-28 h-20 sm:h-22 rounded-xl overflow-hidden shrink-0 border border-brand-green/40">
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        category="ambiance"
                        fallbackTitle={item.title}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                      {isActive && (
                        <div className="absolute inset-0 border-2 border-amber-400 rounded-xl" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-amber-400 text-brand-dark-text"
                              : "bg-black/40 text-emerald-300"
                          }`}
                        >
                          {item.highlight}
                        </span>
                      </div>
                      <h4 className="font-display font-black text-sm sm:text-base text-white truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-emerald-200/80 line-clamp-2 mt-0.5">
                        {item.tagline}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isActive ? "text-amber-400 translate-x-1" : "text-emerald-400/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/30 border border-brand-green/40 flex items-center justify-between gap-4 mt-2">
              <div>
                <span className="text-[11px] font-bold text-emerald-300/80 block">
                  Planning a family dinner or event?
                </span>
                <p className="font-display font-black text-base text-white">
                  Call for Table Reservations
                </p>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-display font-extrabold text-xs hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>0322 1711222</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Key Dining Hall Amenities */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AMENITIES.map((amenity, idx) => {
            const Icon = amenity.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-brand-forest/60 border border-brand-green/30 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-3.5 border border-amber-400/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-base text-white mb-1">
                  {amenity.title}
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
