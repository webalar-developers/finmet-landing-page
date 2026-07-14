"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Phase = "intro" | "revealing" | "done";

const TIMING = {
  plainHold: 600,
  textFade: 400,
  textHold: 900,
  textFadeOut: 400,
  rotateDuration: 600,
  finalHold: 1000,
  revealDuration: 800,
};

export function IntroLock() {
  const [showText, setShowText] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const textInAt = TIMING.plainHold;
    const textOutAt = textInAt + TIMING.textFade + TIMING.textHold;
    const rotateAt = textOutAt + TIMING.textFadeOut;
    const revealAt = rotateAt + TIMING.rotateDuration + TIMING.finalHold;
    const doneAt = revealAt + TIMING.revealDuration;

    const timers = [
      setTimeout(() => setShowText(true), textInAt),
      setTimeout(() => setShowText(false), textOutAt),
      setTimeout(() => setRotated(true), rotateAt),
      setTimeout(() => setPhase("revealing"), revealAt),
      setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, doneAt),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at 50% 45%, #241d13 0%, #0a0806 55%, #000000 100%)",
      }}
      transition={{ duration: TIMING.revealDuration / 1000, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.div
        className="rounded-full blur-3xl"
        style={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "30rem",
          height: "30rem",
          background:
            "radial-gradient(circle, rgba(246,196,83,0.45), transparent 70%)",
        }}
        animate={{ opacity: rotated ? [0.5, 1, 0.5] : [0.35, 0.6, 0.35] }}
        transition={{
          duration: rotated ? 1.6 : 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="h-80 w-80 sm:h-104 sm:w-104 md:h-120 md:w-120"
        style={{ position: "relative" }}
        animate={{
          opacity: phase === "revealing" ? 0 : 1,
          scale: phase === "revealing" ? 1.06 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          animate={{ rotate: rotated ? -25 : 0 }}
          transition={{ duration: TIMING.rotateDuration / 1000, ease: [0.34, 1.15, 0.64, 1] }}
        >
          <Image
            src="/lock/step-one.png"
            alt=""
            fill
            sizes="(min-width: 768px) 480px, (min-width: 640px) 416px, 320px"
            style={{ objectFit: "contain" }}
            loading="eager"
            preload
          />

          <motion.div
            style={{
              position: "absolute",
              left: "55%",
              top: "27%",
              width: "22%",
              height: "24%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(#1c150c 45%, rgba(28,21,12,0) 75%)",
            }}
            animate={{ opacity: rotated ? 1 : 0, scale: rotated ? 1 : 0.5 }}
            transition={{
              duration: TIMING.textFadeOut / 1000,
              delay: rotated ? TIMING.rotateDuration / 1000 - 0.15 : 0,
              ease: "easeOut",
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: "58%",
            transform: "translate(-50%, -50%)",
            width: "88%",
          }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ duration: TIMING.textFade / 1000, ease: "easeInOut" }}
        >
          <span
            className="block rounded-md px-4 py-2 text-center text-sm font-semibold text-neutral-900 shadow-lg sm:text-base"
            style={{
              background: "linear-gradient(135deg, #f8dd8b, #d9a53a)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
            }}
          >
            Unlock Premium Gold Opportunities
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
