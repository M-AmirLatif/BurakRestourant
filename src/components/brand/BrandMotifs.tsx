import React from "react";

// Symmetrical Star Motif for Badges and Accents
export function StarMotif({ className = "w-3 h-3 text-amber-400" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L14.4 8.6L21.5 9.2L16.2 13.9L17.8 21L12 17.3L6.2 21L7.8 13.9L2.5 9.2L9.6 8.6L12 2Z" />
    </svg>
  );
}

// Scalloped / Sunburst Price Badge
export function SunburstBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center font-display font-black tracking-tight rounded-2xl shadow-lg border border-amber-400/40 ${className}`}
    >
      {children}
    </div>
  );
}

// Hand-Drawn Tomato Motif (Local Kasur Market Authenticity)
export function TomatoDoodle({ className = "w-6 h-6 text-red-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 6C9 6 4 11 4 18C4 24.5 9.5 28 16 28C22.5 28 28 24.5 28 18C28 11 23 6 16 6Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M16 6C16 3 17 2 19 2" />
      <path d="M13 5C14.5 3.5 16 3 16 6C16 6 17.5 4 20 4.5" />
      <path d="M11 7C13 6 16 6 16 6C16 6 19 6 21 7" />
    </svg>
  );
}

// Chili Motif (Desi Spice Indicator)
export function ChiliDoodle({ className = "w-5 h-5 text-red-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M23 5C23 5 21 3 18 4C14 5.5 11 9 10 13C8.5 19 12 25 15 28C15.5 28.5 16.5 28.5 17 28C19 26 21 21 21 16C21 11 23 5 23 5Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M23 5C25 3 27 3 28 2" />
    </svg>
  );
}

// Organic Leaf Accent
export function LeafAccent({ className = "w-5 h-5 text-emerald-400" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C12 19.5 21 18 21 3C18 3 15 4 17 8Z" />
    </svg>
  );
}

// Brand Logo Badge: BURAK Crispy Juicy Legendary with Flame & Pan Motif
export function BurakLogoBadge({
  size = "default",
}: {
  size?: "small" | "default" | "large";
}) {
  const sizeClasses = {
    small: "w-9 h-9 sm:w-10 sm:h-10",
    default: "w-11 h-11 sm:w-12 sm:h-12",
    large: "w-20 h-20 sm:w-22 sm:h-22",
  }[size];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* Brand Emblem */}
      <div
        className={`relative ${sizeClasses} rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 p-0.5 shadow-md shadow-black/50 ring-1 ring-amber-400/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        {/* Outer decorative ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-amber-300/40" />
        
        {/* Inner solid badge with Flame & Skillet Emblem */}
        <div className="w-full h-full rounded-full bg-brand-forest-dark flex items-center justify-center border border-amber-400/40 p-2">
          <svg viewBox="0 0 24 24" className="w-full h-full text-amber-400" fill="currentColor">
            {/* Wok/Pan flame icon */}
            <path d="M19.4 13c-.3-2.1-1.7-3.9-3.4-4.8.1.9-.1 1.9-.7 2.6-.7.8-1.7 1.2-2.3 2.1-.8 1.1-.7 2.6.2 3.6.9 1 2.4 1.2 3.6.5 1.5-.9 2.4-2.5 2.6-4zm-8.8-9C9 6.2 9.5 8.6 8.5 10.8c-.5 1-1.3 1.8-1.6 2.9-.6 1.9.1 4.1 1.6 5.3 1.9 1.5 4.6 1.4 6.4-.3-1.2-.2-2.4-.8-3.1-1.8-.8-1.1-.9-2.6-.3-3.8.5-1.1 1.6-2 1.8-3.2.3-1.8-.7-3.6-2.7-5.9zM2 20h20v2H2z" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col min-w-0 justify-center">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors leading-none">
            BURAK
          </span>
          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-amber-500 font-display font-extrabold text-[9px] sm:text-[10px] tracking-wider text-white uppercase shadow-sm inline-flex items-center justify-center leading-none self-center shrink-0">
            RESTAURANT
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-xs font-bold text-amber-300/90 tracking-wide leading-none">
          <StarMotif className="w-2.5 h-2.5 text-brand-yellow shrink-0" />
          <span className="truncate">Crispy • Juicy • Legendary</span>
          <StarMotif className="w-2.5 h-2.5 text-brand-yellow shrink-0" />
        </div>
      </div>
    </div>
  );
}

// Backwards-compatible alias for existing imports
export const SalatoLogoBadge = BurakLogoBadge;
