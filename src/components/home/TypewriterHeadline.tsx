"use client";

import React, { useState, useEffect } from "react";

const LINE1_TEXT = "Crispy, Juicy";

const PHRASES = [
  "Legendary Food.",
  "Near Railway Phatak, Kasur.",
  "Dine-in, Takeaway & Delivery.",
  "Legendary Food.",
];

export function TypewriterHeadline() {
  const [isMounted, setIsMounted] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingLine1, setIsTypingLine1] = useState(true);

  // Mark client mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Typewriter engine
  useEffect(() => {
    if (!isMounted) return;

    // Phase 1: Typing Line 1 ("Crispy, Juicy")
    if (isTypingLine1) {
      if (line1.length < LINE1_TEXT.length) {
        const timeout = setTimeout(() => {
          setLine1(LINE1_TEXT.slice(0, line1.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Line 1 finished, transition to Line 2 after brief natural pause
        const timeout = setTimeout(() => {
          setIsTypingLine1(false);
        }, 220);
        return () => clearTimeout(timeout);
      }
    }

    // Phase 2: Typing / Deleting Line 2
    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      // Forward typing
      if (line2.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setLine2(currentPhrase.slice(0, line2.length + 1));
        }, 55);
        return () => clearTimeout(timeout);
      } else {
        // Fully typed phrase - hold for 3.8s for clear readability
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3800);
        return () => clearTimeout(timeout);
      }
    } else {
      // Backward deleting
      if (line2.length > 0) {
        const timeout = setTimeout(() => {
          setLine2(line2.slice(0, -1));
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }
  }, [isMounted, isTypingLine1, line1, line2, isDeleting, phraseIndex]);

  // Initial SSR fallback
  if (!isMounted) {
    return (
      <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white">
        Crispy, Juicy
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">
          Legendary Food.
        </span>
      </h1>
    );
  }

  return (
    <h1
      className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white min-h-[2.1em]"
      aria-label="Crispy, Juicy Legendary Food. BURAK Restaurant Kasur"
    >
      <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
        {line1}
        {isTypingLine1 && (
          <span
            className="inline-block w-1.5 sm:w-2 h-[0.85em] bg-amber-400 ml-1.5 align-middle animate-pulse"
            aria-hidden="true"
          />
        )}
      </span>

      <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 drop-shadow-[0_4px_24px_rgba(245,158,11,0.5)]">
        {line2}
        {!isTypingLine1 && (
          <span
            className="inline-block w-1.5 sm:w-2 h-[0.85em] bg-red-500 ml-1.5 align-middle animate-pulse"
            aria-hidden="true"
          />
        )}
      </span>
    </h1>
  );
}
