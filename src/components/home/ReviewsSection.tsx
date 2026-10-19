"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif } from "@/components/brand/BrandMotifs";
import { Star, Quote, CheckCircle2, ThumbsUp } from "lucide-react";
import { BUSINESS_INFO } from "@/data/menuData";

const REVIEWS = [
  {
    name: "Ali Akbar",
    location: "Local Guide • 47 reviews",
    dish: "Modern Vibe & Fast Food",
    rating: 5,
    text: "BURAK Crispy Juicy Legendary, located near the Railway Crossing (Phatak) in Kasur, is a fresh and welcome addition to the city’s food scene. The environment is calm and comfortable compared to crowded local spots, with a slightly modern vibe that sets it apart. Definitely worth a visit for good food and relaxed atmosphere!",
    date: "5 months ago",
  },
  {
    name: "Apsara G",
    location: "Kasur Foodie",
    dish: "Achari Handi",
    rating: 5,
    text: "The Achari Handi tasted absolutely amazing! 😋 The spices were perfectly balanced, and the rich achari flavor made the dish even more delicious. Highly recommended for desi food lovers in Kasur!",
    date: "2 weeks ago",
  },
  {
    name: "Daud Siddique",
    location: "Dinner Guest",
    dish: "Qabab Crust Pizza",
    rating: 5,
    text: "We just ate kebab crust pizza, it was very special and unique. Great dough crunch, loaded cheese, and wonderful hospitality.",
    date: "3 months ago",
  },
  {
    name: "Usama Zahid",
    location: "Dine-in Guest",
    dish: "Family Dine-in",
    rating: 5,
    text: "Great experience, delicious food and cozy atmosphere. Highly recommended place in Kasur for family dinner!",
    date: "2 months ago",
  },
  {
    name: "Zahid Javed",
    location: "Local Guide • 32 reviews",
    dish: "Dinner Ambiance",
    rating: 5,
    text: "Good Ambiance and Food is Also Good. Quiet environment, easy to talk, plenty of parking space right outside.",
    date: "Recent",
  },
  {
    name: "Sultan Khan",
    location: "Local Guide • 31 reviews",
    dish: "Dine-in Experience",
    rating: 5,
    text: "Excellent service 👏, fresh crispy broast and mouthwatering barbecue. Kasur really needed a place like this.",
    date: "2 months ago",
  },
];

export function ReviewsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Real Kasur Customer Love"
          title="What Our Guests"
          highlight="Are Saying"
          subtitle={`Verified Google customer feedback for ${BUSINESS_INFO.name}. Discover why Kasur foodies love our modern vibe, Injected Broast, Pizzas & Bar B.Q.`}
        />

        {/* Rating Overview Box */}
        <div className="mt-10 p-6 rounded-3xl bg-brand-forest/60 border border-brand-green/40 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-brand-yellow text-brand-dark-text flex items-center justify-center font-display font-black text-2xl shadow-lg">
              {BUSINESS_INFO.rating}
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-white">Google Customer Rating</p>
              <p className="text-[11px] text-emerald-200/70">Based on {BUSINESS_INFO.reviewCount}+ Google reviews in Kasur</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-pink text-white font-display font-bold text-xs shadow-md">
              100% Halal Food
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-700 text-white font-display font-bold text-xs shadow-md">
              Modern Ambiance
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-brand-forest/70 border border-brand-green/40 shadow-lg flex flex-col justify-between space-y-4 hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-300/60 font-medium">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-brand-yellow/30 mb-2" />

                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-brand-green/30 flex items-center justify-between">
                <div>
                  <h5 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h5>
                  <span className="text-[11px] text-emerald-300/70">{rev.location}</span>
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-brand-forest-dark px-2.5 py-1 rounded-md border border-brand-green/30">
                  {rev.dish}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
