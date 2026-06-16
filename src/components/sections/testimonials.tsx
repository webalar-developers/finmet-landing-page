"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "This platform has completely transformed how we manage our supply chain. Orders are processed faster, and our margins have never looked better.",
    name: "Marc & Judith",
    role: "Operations Managers",
    company: "Logoipsum",
  },
  {
    quote:
      "Finmet gave our team the structure we were missing. Everything is in one place now, and onboarding new members takes a fraction of the time.",
    name: "Sarah K.",
    role: "Head of Finance",
    company: "Logoipsum",
  },
];

function PersonPhoto() {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-500/30 to-transparent" />
      <div className="absolute bottom-6 left-6 flex gap-3 items-end">
        <div className="w-14 h-20 rounded-lg bg-white/20 border border-white/30" />
        <div className="w-12 h-16 rounded-lg bg-white/15 border border-white/25" />
      </div>
    </div>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight">
            What our clients say.
          </h2>
          <p className="mt-3 text-black/60 text-base leading-relaxed max-w-2xl mx-auto">
            We don&apos;t promise transformation, we make trust simple. That&apos;s why teams choose us - they can rely on us to keep their operations moving without friction.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-0  overflow-hidden bg-secondary p-4">
          <div className="md:col-span-2">
            <PersonPhoto />
          </div>

          <div className="md:col-span-3  p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="grid grid-cols-2 gap-[2px] h-[14px] w-[14px]">
                  <div className="bg-gray-300 rounded-[1px]" />
                  <div className="bg-gray-300 rounded-[1px]" />
                  <div className="bg-gray-300 rounded-[1px]" />
                  <div className="bg-gray-300 rounded-[1px]" />
                </div>
                <span className="text-[12px] font-semibold text-gray-300 tracking-tight">
                  {t.company}
                </span>
              </div>

            </div>

            <div className="mt-8">
              <blockquote className="text-[17px] md:text-xl font-medium text-gray-900 leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-base font-semibold text-gray-800 mt-4">{t.name}</p>
              <p className="text-base text-gray-400">{t.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() =>
              setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
            className="w-9 h-9 rounded-full bg-[#0084eb] text-white flex items-center justify-center hover:bg-[#1530d4] transition-colors"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            className="w-9 h-9 rounded-full bg-[#0084eb] text-white flex items-center justify-center hover:bg-[#1530d4] transition-colors"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
