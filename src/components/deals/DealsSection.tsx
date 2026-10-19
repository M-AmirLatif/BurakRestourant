"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { DEALS, DealItem, BUSINESS_INFO } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import {
  Sparkles,
  Users,
  Check,
  Plus,
  PhoneCall,
  Flame,
  ArrowRight,
} from "lucide-react";

export function DealsSection() {
  const { addItem } = useCart();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const heroDeal = DEALS.find((d) => d.isHero) || DEALS[0];
  const standardDeals = DEALS.filter((d) => !d.isHero);

  const handleAddDeal = (deal: DealItem) => {
    addItem({
      id: deal.id,
      menuItemId: deal.id,
      name: `${deal.title} (Combo)`,
      price: deal.price,
      image: deal.image,
      isDeal: true,
    });

    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1200);
  };

  return (
    <section
      id="deals"
      className="relative py-16 sm:py-24 bg-brand-forest-dark border-t border-brand-green/30 overflow-hidden"
      aria-label="Value Deals and Ramadan Buffet"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="BURAK Specials & Feast Combos"
          title="Featured Offers &"
          highlight="Ramadan Buffet"
          subtitle="Exclusive dining deals transcribed directly from BURAK restaurant menu. Generous portions crafted for friends, family, and celebrations in Kasur."
        />

        {/* HERO DEAL: Ramadan Buffet Deal */}
        <div className="mt-12 mb-14 relative rounded-3xl bg-gradient-to-br from-brand-forest/95 via-brand-forest-light/70 to-brand-forest/90 border-2 border-amber-400 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-amber-500/10 overflow-hidden group">
          
          {/* Top highlight ribbons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <SunburstBadge className="bg-gradient-to-r from-red-600 to-amber-500 text-white text-xs sm:text-sm py-2 px-4 shadow-lg">
                ★ 1 PERSON RAMADAN BUFFET DEAL
              </SunburstBadge>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                <Users className="w-3.5 h-3.5" />
                <span>Unlimited Feast • Rs 1,560 Only</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {heroDeal.originalPrice && (
                <span className="text-sm line-through text-emerald-300/60 font-semibold">
                  Rs {heroDeal.originalPrice.toLocaleString()}
                </span>
              )}
              <div className="px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark-text font-display font-black text-xl sm:text-2xl shadow-lg">
                Rs {heroDeal.price.toLocaleString()}/-
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {heroDeal.title}
              </h3>
              
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Experience Kasur&apos;s most luxurious 1-person buffet dinner spread! Enjoy a massive selection of Chinese, Desi Handi, Karahi, Charcoal Bar B.Q, mini burgers, spring rolls, chilled drinks, and refreshing desserts.
              </p>

              {/* Items List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {heroDeal.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100/90 font-medium"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleAddDeal(heroDeal)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-90 text-white font-display font-black text-sm shadow-xl flex items-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  {addedDealId === heroDeal.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Basket!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add Buffet Deal to Order</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Assalam o Alaikum BURAK Restaurant! I would like to reserve / order the ${heroDeal.title} (Rs ${heroDeal.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-brand-forest-light border border-amber-400/40 text-amber-300 font-display font-bold text-xs sm:text-sm hover:bg-brand-forest transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Reserve Table / Order</span>
                </a>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-amber-400/40 shadow-2xl group-hover:border-amber-400 transition-colors">
                <SafeImage
                  src={heroDeal.image}
                  alt={heroDeal.title}
                  category="buffet"
                  fallbackTitle={heroDeal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                    Special Ramadan Feast
                  </span>
                  <p className="font-display font-extrabold text-sm text-white">
                    17+ Menu Delights Included
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Standard Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardDeals.map((deal) => {
            const isAdded = addedDealId === deal.id;
            return (
              <div
                key={deal.id}
                className="rounded-3xl bg-brand-forest/70 border border-brand-green/40 p-5 sm:p-6 shadow-lg flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 space-y-4"
              >
                <div>
                  {/* Deal Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-forest-dark border border-brand-green/50 text-amber-300 font-display font-extrabold text-xs">
                      Deal #{deal.dealNumber}
                    </span>
                    {deal.tag && (
                      <span className="text-[11px] font-bold text-emerald-300/80">
                        {deal.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Serves */}
                  <h4 className="font-display font-black text-xl text-white">
                    {deal.title}
                  </h4>
                  {deal.serves && (
                    <p className="text-xs text-emerald-200/70 mt-0.5 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>{deal.serves}</span>
                    </p>
                  )}

                  {/* Deal Thumbnail */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden my-3 border border-brand-green/30">
                    <SafeImage
                      src={deal.image}
                      alt={deal.title}
                      category="deals"
                      fallbackTitle={deal.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover"
                    />
                  </div>

                  {/* Items list */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-100/90 pt-1">
                    {deal.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Add to Cart */}
                <div className="pt-3 border-t border-brand-green/30 flex items-center justify-between gap-3">
                  <div>
                    {deal.originalPrice && (
                      <span className="text-xs line-through text-emerald-300/50 block font-semibold">
                        Rs {deal.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="font-display font-black text-lg text-amber-300">
                      Rs {deal.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddDeal(deal)}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-amber-500 hover:opacity-90 text-white font-display font-extrabold text-xs shadow-md flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Deal</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
