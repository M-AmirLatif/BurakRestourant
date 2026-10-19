"use client";

import React from "react";
import { BurakLogoBadge, StarMotif } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO, MENU_CATEGORIES } from "@/data/menuData";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Bike,
  Heart,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-brand-forest-dark border-t border-brand-green/40 pt-12 sm:pt-16 pb-4 sm:pb-8 text-brand-cream overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-brand-green/30">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <BurakLogoBadge size="default" />
            
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-sm leading-relaxed pt-2">
              Kasur&apos;s celebrated destination for Crispy Injected Broast, wood-fired Pizzas, juicy Beef Smash Burgers, live charcoal Bar B.Q, and royal Mandi Pulao. Dine-in with modern ambiance, takeaway, or fast home delivery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-forest border border-brand-green/40 text-xs font-bold text-amber-300 hover:border-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-brand-pink border border-red-500/40 text-xs font-bold text-white hover:opacity-90 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-wider flex items-center gap-2">
              <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Menu Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80 font-medium">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Injected Broast (Quarter, Half, Full)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Special Buraq & Qabab Crust Pizzas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Beef Smash & Mighty Bite Burgers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Charcoal Bar B.Q Platter & Seekh Kababs
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Boneless Handi & Chicken Mandi Pulao
                </a>
              </li>
              <li>
                <a href="#deals" className="text-amber-300 font-bold hover:underline">
                  Ramadan 1-Person Buffet Deal (Rs 1,560)
                </a>
              </li>
            </ul>
          </div>

          {/* Timings & Kasur Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Kasur Location & Hours</span>
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-emerald-200/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Near Railway Crossing (Phatak), 4C8V+GPC, Kasur, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Delivery in Kasur on orders Rs 1,000+</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Halal Food • Family Seating • Plenty of Parking</span>
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                ✓ Dine-In, Takeaway & Delivery Active
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <p>© 2026 BURAK Crispy Juicy Legendary. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span>for the food lovers of Kasur</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
