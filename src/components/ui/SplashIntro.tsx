"use client";

import React, { useState, useEffect } from "react";
import { StarMotif } from "@/components/brand/BrandMotifs";

export function SplashIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const flavorLines = [
    "Fired Fresh at Bhatta Chowk, Kasur",
    "Layered With Four-Cheese & Desi Spices",
    "Kasur's Midnight Flavor Hero Till 4 AM",
    "Delightful Taste With Deep Trust",
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
      aria-label="Salato Food Hub Loading Screen"
    >
      {/* Ambient Pulsing Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-pink/20 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "600ms" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-yellow/15 rounded-full blur-[100px]" />
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
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-pink via-amber-400 to-brand-green blur-md opacity-70 animate-pulse" />

          {/* Golden Badge Body */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-brand-pink via-brand-pink-dark to-amber-500 p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-brand-forest-dark flex items-center justify-center border-2 border-amber-400/60 p-4">
              <svg viewBox="0 0 24 24" className="w-full h-full text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] animate-pulse" fill="currentColor">
                <path d="M12 3C8.5 3 5.3 4 3 5.8L12 21L21 5.8C18.7 4 15.5 3 12 3ZM12 5.5C14.2 5.5 16.5 6.2 18.2 7.1L12 17.5L5.8 7.1C7.5 6.2 9.8 5.5 12 5.5ZM10 8C9.2 8 8.5 8.7 8.5 9.5C8.5 10.3 9.2 11 10 11C10.8 11 11.5 10.3 11.5 9.5C11.5 8.7 10.8 8 10 8ZM14.5 9.5C13.7 9.5 13 10.2 13 11C13 11.8 13.7 12.5 14.5 12.5C15.3 12.5 16 11.8 16 11C16 10.2 15.3 9.5 14.5 9.5ZM11 13C10.2 13 9.5 13.7 9.5 14.5C9.5 15.3 10.2 16 11 16C11.8 16 12.5 15.3 12.5 14.5C12.5 13.7 11.8 13 11 13Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* The Animated Wordmark */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-brand-yellow drop-shadow-[0_4px_24px_rgba(245,158,11,0.4)] animate-[pulse_2s_ease-in-out_infinite]">
            SALATO
          </h1>
          <span className="px-2.5 py-1 rounded-full bg-brand-pink font-display font-black text-xs sm:text-sm tracking-widest text-white uppercase shadow-lg shadow-brand-pink/50 border border-white/20 animate-bounce">
            FOOD HUB
          </span>
        </div>

        {/* Tagline With Symmetrical Stars */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-display font-extrabold tracking-widest uppercase text-amber-300/90">
          <span className="inline-block animate-spin" style={{ animationDuration: "6s" }}>
            <StarMotif className="w-3 h-3 text-brand-yellow" />
          </span>
          <span>Delightful Taste With Trust</span>
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

        {/* Sleek Golden-Pink Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 rounded-full bg-brand-forest-light/60 border border-brand-green/40 p-0.5 overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 via-brand-yellow to-brand-pink transition-all duration-75 ease-out shadow-[0_0_10px_rgba(225,29,116,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Badge */}
        <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-emerald-300/60 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Heating Kasur Ovens • {Math.round(progress)}%</span>
        </div>

      </div>
    </div>
  );
}
