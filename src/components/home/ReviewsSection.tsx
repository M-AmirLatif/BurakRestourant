"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Usman Tariq",
    location: "Kasur City",
    dish: "Salato Special Pizza (Large)",
    rating: 5,
    text: "Ordered at 2:30 AM on a Friday night. Arrived piping hot in 35 minutes! The cheese pull was unreal and the meat toppings were generous. Best late-night spot in Kasur hands down.",
    date: "1 week ago",
  },
  {
    name: "Dr. Hamza Bilal",
    location: "Near Bhatta Chowk",
    dish: "Jumbo Family Deal",
    rating: 5,
    text: "The Jumbo Family Deal is incredible value for money. 7 of us had dinner and there was still pizza left. The Zinger fillets are super crispy, not soggy like other local shops.",
    date: "2 weeks ago",
  },
  {
    name: "Fatima Noor",
    location: "Bhatta Goryanwala",
    dish: "Chicken Loaded Fries & Zinger",
    rating: 5,
    text: "The loaded fries with melted cheese sauce and shredded chicken are addictive! Clean packaging and polite delivery rider. 10/10 recommended.",
    date: "A month ago",
  },
];

export function ReviewsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Local Kasur Love"
          title="What Our Customers"
          highlight="Are Saying"
          subtitle="4.2★ overall rating from 61+ verified Google reviews. Here is why Kasur trusts Salato Food Hub for daytime lunches and 3 AM cravings."
        />

        {/* Rating Overview Box */}
        <div className="mt-10 p-6 rounded-3xl bg-brand-forest/60 border border-brand-green/40 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-brand-yellow text-brand-dark-text flex items-center justify-center font-display font-black text-2xl shadow-lg">
              4.2
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-white">Google Customer Rating</p>
              <p className="text-[11px] text-emerald-200/70">Based on 61+ verified reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-pink text-white font-display font-bold text-xs shadow-md">
              100% Halal & Fresh
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  {rev.dish.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
