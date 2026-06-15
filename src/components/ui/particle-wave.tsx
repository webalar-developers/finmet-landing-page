"use client";

import { useEffect, useRef } from "react";

export function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = 140;
    const H = 28;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.006;

      for (let col = 0; col < W; col++) {
        const nx = col / W;
        const cx = nx * w;

        for (let b = 0; b < 2; b++) {
          const phase = b === 0 ? 0 : Math.PI * 0.9;
          const amp = b === 0 ? 0.13 : 0.09;
          const freq = b === 0 ? 2.8 : 4.2;
          const speed = b === 0 ? 1 : -0.65;

          const waveMid =
            0.5 +
            Math.sin(nx * Math.PI * freq + t * speed + phase) * amp +
            Math.sin(nx * Math.PI * 1.5 + t * 0.4 + phase) * 0.04;

          const spread = 0.22;

          for (let row = 0; row < H; row++) {
            const ny = row / H;
            const cy = ny * h;
            const dist = Math.abs(ny - waveMid);
            if (dist > spread) continue;

            const falloff = 1 - dist / spread;
            const opacity = Math.pow(falloff, 2.2) * 0.55;
            const radius = falloff * 1.8 + 0.3;

            const skip = Math.sin(col * 17.3 + row * 31.7 + b * 5) * 0.5 + 0.5;
            if (skip < 0.35) continue;

            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(27, 59, 255, ${opacity})`;
            ctx.fill();
          }
        }

        if (Math.sin(col * 13.7 + t * 0.3) > 0.82) {
          const scatterY =
            (Math.sin(col * 7.3 + t * 0.2) * 0.5 + 0.5) * h;
          ctx.beginPath();
          ctx.arc(cx, scatterY, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(27, 59, 255, 0.12)";
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
