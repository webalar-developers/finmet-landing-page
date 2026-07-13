"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Phase = "locked" | "unlocking" | "revealing" | "done";

export function IntroLock() {
  const [phase, setPhase] = useState<Phase>("locked");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const unlockTimer = setTimeout(() => setPhase("unlocking"), 1000);
    const revealTimer = setTimeout(() => setPhase("revealing"), 1700);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 2600);

    return () => {
      clearTimeout(unlockTimer);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0b0904]"
      animate={{
        clipPath:
          phase === "revealing" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
      }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: phase === "revealing" ? 1.15 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(246,196,83,0.45), transparent 70%)",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          className="relative drop-shadow-[0_0_25px_rgba(246,196,83,0.35)]"
        >
          <defs>
            <linearGradient id="goldBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3c4" />
              <stop offset="35%" stopColor="#f6c453" />
              <stop offset="70%" stopColor="#c8891f" />
              <stop offset="100%" stopColor="#8a5a10" />
            </linearGradient>
            <linearGradient id="goldShackle" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff8dd" />
              <stop offset="50%" stopColor="#eab654" />
              <stop offset="100%" stopColor="#9c6b1c" />
            </linearGradient>
            <clipPath id="bodyClip">
              <rect x="25" y="60" width="70" height="60" rx="10" />
            </clipPath>
          </defs>

          <motion.path
            d="M 40 68 V 42 A 20 20 0 0 1 80 42 V 68"
            fill="none"
            stroke="url(#goldShackle)"
            strokeWidth="12"
            strokeLinecap="round"
            style={{ transformOrigin: "80px 68px" }}
            animate={
              phase === "locked"
                ? { y: 0, rotate: 0 }
                : { y: -16, rotate: -32 }
            }
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          />

          <rect
            x="25"
            y="60"
            width="70"
            height="60"
            rx="10"
            fill="url(#goldBody)"
            stroke="#7a4e12"
            strokeWidth="1.5"
          />

          <g clipPath="url(#bodyClip)">
            <motion.rect
              x="-30"
              y="55"
              width="20"
              height="70"
              fill="rgba(255,255,255,0.55)"
              transform="skewX(-20)"
              animate={{ x: [-30, 140] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 0.4,
                ease: "easeInOut",
              }}
            />
          </g>

          <circle cx="60" cy="86" r="7" fill="#3a2410" />
          <rect x="57" y="90" width="6" height="14" rx="2" fill="#3a2410" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
