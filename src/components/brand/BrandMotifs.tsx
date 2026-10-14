import React from "react";

// The authentic Five-Point Star Motif used throughout the printed menu
export function StarMotif({
  className = "w-4 h-4 text-brand-yellow",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Celebratory Sunburst Badge for Discounts & Hero Deals
export function SunburstBadge({
  children,
  className = "bg-brand-pink text-white",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center font-display font-extrabold uppercase tracking-wider text-xs px-3 py-1.5 shadow-lg ${className}`}
      style={{
        clipPath:
          "polygon(50% 0%, 65% 10%, 82% 4%, 88% 22%, 100% 30%, 96% 48%, 100% 67%, 86% 75%, 82% 93%, 64% 90%, 50% 100%, 36% 90%, 18% 93%, 14% 75%, 0% 67%, 4% 48%, 0% 30%, 12% 22%, 18% 4%, 35% 10%)",
      }}
    >
      {children}
    </div>
  );
}

// Playful Tomato Doodle Vector
export function TomatoDoodle({
  className = "w-6 h-6 text-brand-red",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Tomato Body */}
      <circle cx="24" cy="27" r="16" fill="currentColor" fillOpacity="0.18" />
      <path d="M24 11V5M24 11c-3-2-7-1-10 1M24 11c3-2 7-1 10 1M24 11c-1 3-2 7 0 9M24 11c1 3 2 7 0 9" />
      <circle cx="20" cy="24" r="1.5" fill="currentColor" />
      <circle cx="29" cy="28" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Playful Chili Pepper Doodle Vector
export function ChiliDoodle({
  className = "w-6 h-6 text-brand-yellow-bright",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M36 8c-2 2-6 3-10 2s-8-4-12-1c-5 4-5 13-3 19 3 7 9 12 16 12 7 0 12-5 12-12 0-8-5-16-3-20z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M36 8c2-3 4-5 7-5" strokeWidth="3" />
      <path d="M30 18c-3 5-4 11-1 15" />
    </svg>
  );
}

// Green Leaf Accent Vector
export function LeafAccent({
  className = "w-5 h-5 text-brand-green-light",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M28 4C14 4 4 14 4 28c14 0 24-10 24-24zM6.5 25.5C7.8 17.2 14.5 10 23 7.5c-4 7-9 14.5-16.5 18z" />
    </svg>
  );
}

// Brand Logo Badge: Authentic Salato Food Hub Badge with Circular Ring, Tagline, Hot Pink & Deep Green
export function SalatoLogoBadge({
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
        className={`relative ${sizeClasses} rounded-full bg-gradient-to-tr from-brand-pink via-brand-pink-dark to-amber-500 p-0.5 shadow-md shadow-black/50 ring-1 ring-amber-400/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        {/* Outer decorative ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-amber-300/40" />
        
        {/* Inner solid badge with geometrically centered slice */}
        <div className="w-full h-full rounded-full bg-brand-forest-dark flex items-center justify-center border border-amber-400/40 p-2">
          <svg viewBox="0 0 24 24" className="w-full h-full text-amber-300" fill="currentColor">
            <path d="M12 3C8.5 3 5.3 4 3 5.8L12 21L21 5.8C18.7 4 15.5 3 12 3ZM12 5.5C14.2 5.5 16.5 6.2 18.2 7.1L12 17.5L5.8 7.1C7.5 6.2 9.8 5.5 12 5.5ZM10 8C9.2 8 8.5 8.7 8.5 9.5C8.5 10.3 9.2 11 10 11C10.8 11 11.5 10.3 11.5 9.5C11.5 8.7 10.8 8 10 8ZM14.5 9.5C13.7 9.5 13 10.2 13 11C13 11.8 13.7 12.5 14.5 12.5C15.3 12.5 16 11.8 16 11C16 10.2 15.3 9.5 14.5 9.5ZM11 13C10.2 13 9.5 13.7 9.5 14.5C9.5 15.3 10.2 16 11 16C11.8 16 12.5 15.3 12.5 14.5C12.5 13.7 11.8 13 11 13Z" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col min-w-0 justify-center">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors leading-none">
            SALATO
          </span>
          <span className="px-2 py-0.5 rounded-full bg-brand-pink font-display font-extrabold text-[9px] sm:text-[10px] tracking-wider text-white uppercase shadow-sm inline-flex items-center justify-center leading-none self-center shrink-0">
            FOOD HUB
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-xs font-bold text-amber-300/90 tracking-wide leading-none">
          <StarMotif className="w-2.5 h-2.5 text-brand-yellow shrink-0" />
          <span className="truncate">Delightful taste with trust</span>
          <StarMotif className="w-2.5 h-2.5 text-brand-yellow shrink-0" />
        </div>
      </div>
    </div>
  );
}
