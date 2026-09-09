"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Maximum vertical shift in pixels (positive = more noticeable). */
  strength?: number;
  /** Optional extra classes for the outer wrapper. */
  className?: string;
}

/**
 * ParallaxLayer
 *
 * Wrap any section with this component to give it a smooth vertical parallax
 * as you scroll the page. Intended for large background blocks or hero areas,
 * not for small UI elements.
 */
export function ParallaxLayer({ children, strength = 60, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll progress for this section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map local scroll to a vertical offset -strength/2 -> +strength/2
  const y = useTransform(scrollYProgress, [0, 1], [-strength / 2, strength / 2]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
