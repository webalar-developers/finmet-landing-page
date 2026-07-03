"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { NumberTicker } from "../ui/number-ticker";

const BUFFER = 60;

const stats = [
  {
    label: "Experience",
    value: "10",
    description: "Years of Experience",
    suffix: "+",
    prefix: "",
  },
  {
    label: "Transactions",
    value: "600",
    description: "Transactions",
    suffix: "+",
    prefix: "",
  },
  {
    label: "Loan Value",
    value: "1.6",
    description: "in Loan Value",
    suffix: "B",
    prefix: "₹",
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
    <section id="about" ref={sectionRef} className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <span className="block text-sm font-medium uppercase tracking-widest text-[#0084eb] mb-3">
            About FinMet Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.08]">
            Built From Inside the Gold Market
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Most technology platforms come to gold from the outside. FinMet
            Technologies was built from direct experience inside the market,
            across bullion banking, jewellers, refiners, dealers and financial
            institutions.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            That background shapes everything we do. It informs the SOPs behind
            our gold loan solutions, the compliance infrastructure we build for
            jewellers, and the asset management systems designed around how gold
            actually moves through the market. We are building the infrastructure
            India&apos;s gold economy has needed for a long time: for the banks
            that lend against gold, the jewellers who sell it, and the customers
            who depend on it.
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
                src="/stats/stats-building.png"
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
                src="/stats/stats-wall.png"
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
              <span className="text-4xl font-medium text-[#0084eb] tracking-tight">
                {s.prefix}
                <NumberTicker className="text-4xl font-medium text-[#0084eb] tracking-tight" value={Number(s.value)} />{s.suffix}
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
