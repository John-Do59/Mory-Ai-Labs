"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBannerCardProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioPadding?: string; // e.g. "57.14%" for 1344x768 (16:9)
  badgeTopLeft?: React.ReactNode;
  overlayBottom?: React.ReactNode;
  priority?: boolean;
}

export default function ParallaxBannerCard({
  src,
  alt,
  className = "",
  aspectRatioPadding = "57.14%",
  badgeTopLeft,
  overlayBottom,
  priority = false,
}: ParallaxBannerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Smooth cinematic vertical parallax translation and subtle scale
  const y = useTransform(scrollYProgress, [0, 1], [-18, 22]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.03]);

  return (
    <div
      ref={cardRef}
      className={`w-full max-w-6xl mx-auto neomorph-card p-0 group relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_55px_var(--accent-glow)] hover:border-[var(--accent-primary)] transition-all duration-500 rounded-3xl sm:rounded-[36px] z-10 border border-[var(--card-border)] bg-[var(--bg-card)] backdrop-blur-2xl ${className}`}
    >
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: aspectRatioPadding }}>
        {/* Parallax Image Layer */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[108%] -top-[4%]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1536px) 100vw, 1400px"
            className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority}
          />
        </motion.div>

        {/* Neomorphic Glass Sheen & Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)]/15 pointer-events-none z-10 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none z-10" />

        {/* Optional Top-Left Badge */}
        {badgeTopLeft && (
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 pointer-events-auto max-w-[90%]">
            {badgeTopLeft}
          </div>
        )}

        {/* Optional Bottom Overlay / Content */}
        {overlayBottom && (
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-auto">
            {overlayBottom}
          </div>
        )}
      </div>
    </div>
  );
}
