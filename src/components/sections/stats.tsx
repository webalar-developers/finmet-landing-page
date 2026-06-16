"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { NumberTicker } from "../ui/number-ticker";

const BUFFER = 60;

const stats = [
  {
    label: "Experience",
    value: "10",
    description: "Years of industry expertise in gold-backed financial services.",
    suffix: "+",
  },
  {
    label: "Transactions",
    value: "600",
    description: "Successful transactions executed across our partner network.",
    suffix: "+",
  },
  {
    label: "Loan Value",
    value: "1.6",
    description: "Total loan value disbursed through trusted client relationships.",
    suffix: "B+",
  },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const progress = -sectionRef.current.getBoundingClientRect().top / window.innerHeight;
      if (img1Ref.current) img1Ref.current.style.transform = `translateY(${progress * 40}px)`;
      if (img2Ref.current) img2Ref.current.style.transform = `translateY(${progress * 70}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.08]">
            A Track Record Built on Momentum
          </h2>
          <p className="mt-4 text-[13px] leading-relaxed">
            A growing footprint across gold-backed financial services, trusted
            partnerships, and operational delivery.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="col-span-1 overflow-hidden" style={{ height: "31.25rem" }}>
            <div
              ref={img1Ref}
              className="relative will-change-transform"
              style={{ height: `calc(100% + ${BUFFER * 2}px)`, marginTop: `-${BUFFER}px` }}
            >
              <Image
                src="/stats/stats-building.avif"
                alt="Building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="col-span-2 overflow-hidden" style={{ height: "31.25rem" }}>
            <div
              ref={img2Ref}
              className="relative will-change-transform"
              style={{ height: `calc(100% + ${BUFFER * 2}px)`, marginTop: `-${BUFFER}px` }}
            >
              <Image
                src="/stats/stats-wall.avif"
                alt="Wall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="text-lg text-black/80 uppercase tracking-wide">
                {s.label}
              </span>
              <span className="text-4xl font-medium text-[#0084eb] tracking-tight">
                <NumberTicker className="text-4xl font-medium text-[#0084eb] tracking-tight" value={Number(s.value)} /> {s.suffix}
              </span>
              <p className="text-black/80 text-base leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
