"use client";

import React from "react";
import { BUSINESS_INFO } from "@/data/menuData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif } from "@/components/brand/BrandMotifs";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Bike,
  Utensils,
  ShoppingBag,
  ExternalLink,
  Navigation,
  Car,
  Users,
} from "lucide-react";

export function OrderAndContactSection() {
  const serviceBadges = [
    { icon: Utensils, label: "Dine-in", desc: "Cozy modern ambiance & seating" },
    { icon: ShoppingBag, label: "Takeaway", desc: "Piping hot in 15–20 mins" },
    { icon: Bike, label: "Home Delivery", desc: "Free on Rs 1,000+ across Kasur" },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30"
      aria-label="Contact and Delivery Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Easy Direct Ordering & Dine-In"
          title="Visit Us Or"
          highlight="Order to Your Door"
          subtitle="Located near the Railway Crossing (Phatak) in Kasur. Call us directly or place an instant WhatsApp order for fast delivery."
        />

        {/* 3 Service Methods Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {serviceBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-brand-forest/70 border border-brand-green/40 shadow-md"
              >
                <div className="p-3 rounded-xl bg-brand-forest-dark text-amber-400 border border-brand-green/40">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-white">
                    {badge.label}
                  </h4>
                  <p className="text-xs text-emerald-200/70">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Grid: Details Card & Map Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 rounded-3xl bg-brand-forest/80 border border-brand-green/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    Quick Contacts & Location
                  </h3>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    BURAK Kasur fast delivery & table reservations
                  </p>
                </div>
                <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open For Dine-In & Delivery
                </span>
              </div>

              {/* Direct Call & WhatsApp Action Row */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                {/* Tap to Call */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-2.5 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 to-brand-yellow text-brand-dark-text font-display font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all min-w-0"
                >
                  <Phone className="w-4 h-4 text-brand-dark-text shrink-0" />
                  <div className="text-left min-w-0">
                    <span className="text-[9px] sm:text-[10px] uppercase font-extrabold block opacity-80 leading-none">Tap to Call</span>
                    <span className="text-[11px] sm:text-sm font-black block leading-tight mt-0.5 whitespace-nowrap">{BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Assalam o Alaikum BURAK Restaurant! I want to check delivery options to my location in Kasur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-2.5 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 to-brand-pink hover:opacity-90 text-white font-display font-black text-xs sm:text-sm shadow-md shadow-red-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all min-w-0"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <div className="text-left min-w-0">
                    <span className="text-[9px] sm:text-[10px] uppercase font-extrabold block text-red-200 leading-none">Instant Chat</span>
                    <span className="text-[11px] sm:text-sm font-black block leading-tight mt-0.5 whitespace-nowrap">
                      WhatsApp Order
                    </span>
                  </div>
                </a>
              </div>

              {/* Delivery Conditions */}
              <div className="p-4 rounded-2xl bg-brand-forest-dark/80 border border-brand-green/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                  <Bike className="w-4 h-4 text-amber-400" />
                  <span>BURAK Delivery & Dine-In Perks</span>
                </div>
                <ul className="text-xs sm:text-sm text-emerald-100/90 space-y-1">
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                    <span><strong>Free Home Delivery</strong> on all orders of Rs 1,000 or more in Kasur.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>Average Delivery Time: <strong>25–40 minutes</strong> hot in thermal containers.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                    <span><strong>Plenty of Free Street Parking</strong> right outside the restaurant.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>Casual, kid-friendly seating suitable for families and large groups.</span>
                  </li>
                </ul>
              </div>

              {/* Address & Hours details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Restaurant Location</h5>
                    <p className="text-xs sm:text-sm text-emerald-200/80">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">Google Plus Code: 4C8V+GPC, Kasur</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Dining & Delivery Hours</h5>
                    <p className="text-xs sm:text-sm text-emerald-200/80">
                      Open Every Day • Lunch, Dinner & Evening Dining
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Directions Action Link */}
            <div className="pt-4 border-t border-brand-green/30 flex items-center justify-between">
              <span className="text-xs text-emerald-300/70">
                Price: Rs 1,000–2,000 per person
              </span>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Location Visual */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-brand-green/50 shadow-2xl relative min-h-[380px] flex flex-col">
            <iframe
              title="BURAK Restaurant Kasur Location Map"
              src="https://maps.google.com/maps?q=4C8V%2BGPC,+Kasur,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full flex-1 min-h-[350px] border-0 grayscale-[25%] contrast-[110%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Banner */}
            <div className="p-4 bg-brand-forest-dark border-t border-brand-green/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-100">
                  Near Railway Crossing (Phatak), Kasur
                </span>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs transition-colors shadow-sm"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
