"use client";

import React, { useState, useEffect } from "react";
import { StarMotif } from "@/components/brand/BrandMotifs";

export function SplashIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const flavorLines = [
    "Near Railway Crossing (Phatak), Kasur",
    "Spicy Injected Broast & Bar B.Q Platters",
    "Wood-Fired Pizzas & Royal Mandi Pulao",
    "BURAK — Crispy, Juicy, Legendary",
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // reaches 100% in ~2.0s
      });
    }, 40);

    // Dynamic text cycling
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % flavorLines.length);
    }, 600);

    // Trigger smooth fade-out exit
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2400);

    // Completely unmount from DOM
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2900);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-forest-dark cursor-pointer select-none overflow-hidden transition-all duration-500 ease-out ${
        isFadingOut
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      aria-label="BURAK Restaurant Kasur Loading Screen"
    >
      {/* Ambient Pulsing Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "600ms" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-forest/30 rounded-full blur-[100px]" />
      </div>

      {/* Skip button top right */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 text-[11px] sm:text-xs font-display font-extrabold text-emerald-200/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
      >
        Skip ➔
      </button>

      {/* Main Animated Showcase Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        
        {/* Animated Brand Crest Emblem */}
        <div className="relative mb-6">
          {/* Outer rotating dashed ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-400/50 animate-[spin_10s_linear_infinite]" />
          
          {/* Soft outer aura glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-yellow-400 blur-md opacity-70 animate-pulse" />

          {/* Golden/Red Badge Body */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-brand-forest-dark flex items-center justify-center border-2 border-amber-400/60 p-4">
              <svg viewBox="0 0 24 24" className="w-full h-full text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] animate-pulse" fill="currentColor">
                <path d="M19.4 13c-.3-2.1-1.7-3.9-3.4-4.8.1.9-.1 1.9-.7 2.6-.7.8-1.7 1.2-2.3 2.1-.8 1.1-.7 2.6.2 3.6.9 1 2.4 1.2 3.6.5 1.5-.9 2.4-2.5 2.6-4zm-8.8-9C9 6.2 9.5 8.6 8.5 10.8c-.5 1-1.3 1.8-1.6 2.9-.6 1.9.1 4.1 1.6 5.3 1.9 1.5 4.6 1.4 6.4-.3-1.2-.2-2.4-.8-3.1-1.8-.8-1.1-.9-2.6-.3-3.8.5-1.1 1.6-2 1.8-3.2.3-1.8-.7-3.6-2.7-5.9zM2 20h20v2H2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* The Animated Wordmark */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-amber-300 drop-shadow-[0_4px_24px_rgba(239,68,68,0.5)] animate-[pulse_2s_ease-in-out_infinite]">
            BURAK
          </h1>
          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 font-display font-black text-xs sm:text-sm tracking-widest text-white uppercase shadow-lg shadow-red-950/50 border border-white/20 animate-bounce">
            RESTAURANT
          </span>
        </div>

        {/* Tagline With Symmetrical Stars */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-display font-extrabold tracking-widest uppercase text-amber-300/90">
          <span className="inline-block animate-spin" style={{ animationDuration: "6s" }}>
            <StarMotif className="w-3 h-3 text-brand-yellow" />
          </span>
          <span>Crispy • Juicy • Legendary</span>
          <span className="inline-block animate-spin" style={{ animationDuration: "6s" }}>
            <StarMotif className="w-3 h-3 text-brand-yellow" />
          </span>
        </div>

        {/* Cycling Animated Sizzling Culinary Micro-Text */}
        <div className="h-7 mb-6 flex items-center justify-center">
          <p
            key={textIndex}
            className="text-xs sm:text-sm font-medium text-emerald-200/90 tracking-wide transition-all duration-300 transform animate-[fadeInUp_0.35s_ease-out]"
          >
            {flavorLines[textIndex]}
          </p>
        </div>

        {/* Sleek Golden-Red Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 rounded-full bg-brand-forest-light/60 border border-brand-green/40 p-0.5 overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-yellow-300 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Badge */}
        <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-emerald-300/60 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Fired Fresh in Kasur • {Math.round(progress)}%</span>
        </div>

      </div>
    </div>
  );
}
