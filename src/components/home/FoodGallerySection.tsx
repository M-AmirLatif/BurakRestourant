"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import { Sparkles, Eye, Flame, Heart } from "lucide-react";

const GALLERY_ITEMS = [
  {
    title: "Salato Crown Crust Pizza",
    category: "Gold Pizza Series",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80",
    badge: "Royalty Favorite",
    tag: "Pocket Stuffed Crust",
  },
  {
    title: "Crispy Mighty Zinger",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    badge: "Kasur #1 Crisp",
    tag: "Double Golden Fillet",
  },
  {
    title: "Special Platter Shawarma",
    category: "Shawarma Feast",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=900&auto=format&fit=crop&q=80",
    badge: "Platter Feast",
    tag: "Spiced Chicken & Garlic Toum",
  },
  {
    title: "Salato Special Loaded Fries",
    category: "Late Night Cravings",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&auto=format&fit=crop&q=80",
    badge: "Molten Cheese",
    tag: "Chicken & Jalapeño Sauce",
  },
  {
    title: "Sizzling Hot Wings (10 pcs)",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=900&auto=format&fit=crop&q=80",
    badge: "Fiery Buffalo",
    tag: "Crispy Golden Coating",
  },
  {
    title: "Baked Salato Special Pasta",
    category: "Italian Fusion",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&auto=format&fit=crop&q=80",
    badge: "House Pink Sauce",
    tag: "Overloaded Mozzarella Melt",
  },
];

export function FoodGallerySection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30" aria-label="Food Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Visual Feast"
          title="From Our"
          highlight="Sizzling Kitchen"
          subtitle="Real, mouthwatering snapshots of what awaits your plate at Bhatta Chowk, Kasur. Fresh ingredients, high heat, and uncompromising taste."
        />

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-brand-green/40 shadow-xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                category={item.category}
                fallbackTitle={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-brand-pink text-white font-display font-black text-xs shadow-md uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 transform transition-transform duration-300">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-display font-black text-xl text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-emerald-200/80 mt-1 flex items-center gap-1.5">
                  <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>{item.tag}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
