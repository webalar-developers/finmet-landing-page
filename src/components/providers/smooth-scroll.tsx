"use client";

import { useEffect } from "react";
import { useAnimationFrame } from "motion/react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useAnimationFrame((time) => {
    lenis?.raf(time);
  });

  return <>{children}</>;
}
