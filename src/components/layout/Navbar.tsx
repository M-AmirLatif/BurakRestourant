"use client";

import React, { useState, useEffect } from "react";
import { BurakLogoBadge, StarMotif } from "@/components/brand/BrandMotifs";
import { useCart } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  ShoppingBag,
  Phone,
  Clock,
  Menu as MenuIcon,
  X,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalCount, subtotal, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Deals & Buffet", href: "#deals", badge: "Hot" },
    { label: "Story", href: "#about" },
    { label: "Ambiance", href: "#gallery" },
    { label: "Location", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-forest-dark/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-brand-green/30 py-2.5 sm:py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl min-w-0 outline-none"
            aria-label="BURAK Crispy Juicy Legendary Homepage"
          >
            <BurakLogoBadge size={isScrolled ? "small" : "default"} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-brand-forest-dark/80 border border-brand-green/40 px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap relative px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-emerald-100 hover:text-white transition-all rounded-full hover:bg-brand-green/30 flex items-center gap-1.5 group shrink-0"
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full bg-red-600 text-[9px] xl:text-[10px] font-extrabold text-white tracking-wider animate-pulse shrink-0">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Open Status Badge */}
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-semibold text-emerald-300 whitespace-nowrap">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Dine-In & Delivery</span>
            </div>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest-light/60 hover:bg-brand-forest-light text-xs font-bold text-amber-300 border border-amber-400/30 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-red-600 via-brand-pink to-amber-500 hover:opacity-95 text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-red-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label={`View Basket with ${totalCount} items`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline font-extrabold">Basket</span>
              {totalCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-brand-yellow text-brand-dark-text text-[11px] font-black leading-none shadow-sm">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-brand-forest-dark border border-brand-green/40 text-emerald-200 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-3xl bg-brand-forest-dark/95 border border-brand-green/50 backdrop-blur-xl shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl text-sm font-semibold text-white hover:bg-brand-forest transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <StarMotif className="w-3 h-3 text-amber-400" />
                    <span>{link.label}</span>
                  </span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-red-600 text-[10px] font-black text-white">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-brand-green/30 flex items-center justify-between text-xs text-emerald-200/80">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 text-amber-300 font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <span className="text-emerald-400 font-semibold">Near Railway Phatak</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
