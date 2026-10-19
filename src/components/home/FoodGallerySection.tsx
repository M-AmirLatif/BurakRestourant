"use client";

import React from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif } from "@/components/brand/BrandMotifs";

const GALLERY_ITEMS = [
  {
    title: "Burak Dining Hall & Neon Decor",
    category: "Restaurant Ambiance",
    image: "/images/ambiance_2.jpg",
    badge: "Modern Vibe",
    tag: "Spacious & Clean Seating",
  },
  {
    title: "Comfortable Family Dining Space",
    category: "Interior & Crowd",
    image: "/images/ambiance_1.jpg",
    badge: "Family Friendly",
    tag: "Quiet Atmosphere",
  },
  {
    title: "Lively Evening Diners & Vibe",
    category: "Kasur Food Scene",
    image: "/images/ambiance_3.jpg",
    badge: "Top Choice",
    tag: "Easy Street Parking",
  },
  {
    title: "Crispy Spicy Injected Broast",
    category: "Injected Broast",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    badge: "Crispy & Juicy",
    tag: "With Garlic Dip & Golden Fries",
  },
  {
    title: "Seekh Kebab Crust & Wood-fired Pizzas",
    category: "Pizza Specials",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    badge: "Stuffed Crust",
    tag: "Overloaded Mozzarella Cheese",
  },
  {
    title: "Smoky Bar B.Q & Mandi Pulao",
    category: "Desi Charcoal Feast",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80",
    badge: "Desi Heritage",
    tag: "Tikka, Kabab & Malai Boti",
  },
];

export function FoodGallerySection() {
  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30" aria-label="Food and Ambiance Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Visual Ambiance & Menu"
          title="From Our"
          highlight="Kitchen & Dining Hall"
          subtitle="Explore the lively modern interior, cozy seating, and mouthwatering culinary creations at BURAK Crispy Juicy Legendary in Kasur."
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
                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-display font-black text-xs shadow-md uppercase tracking-wider">
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
