"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const NAVBAR_HEIGHT = 76; // h-[60px] nav + py-2 (8px×2) from navbar.tsx

const plans = [
  {
    name: "Gold Loans",
    price: "$0",
    period: "/month",
    description:
      "FinMet Technologies supports structured gold loan solutions that help customers unlock the value of their assets through trusted financial pathways.",
    features: [
      "Gold-backed financial access",
      "Structured lending support",
      "Built for trust and eﬃciency",
    ],
    theme: "light" as const,
    cta:"Explore Gold Loans"
  },
  {
    name: "E-Gold",
    price: "",
    period: "",
    description:
      "FinMet Technologies enables jewellers to offer fractional gold buying through a more accessible, digitally enabled customer experience.",
    features: [
      "Fractional ownership models",
      "Jeweller-ready integration",
      "Designed for modern demand",
    ],
    theme: "mid" as const,
    cta:"Explore E-Gold"
  },
  {
    name: "Technology",
    price: "",
    period: "",
    description:
      "FinMet Technologies develops digital infrastructure that supports seamless gold monetization, operational flow, and platform-led growth.",
    features: [
      "Digital-first systems",
      "Streamlined workflows",
      "Scalable platform support",
    ],
    theme: "dark" as const,
    cta:"Explore Technology"
  },
  {
    name: "KYC and Compliance",
    price: "",
    period: "",
    description:
      "FinMet Technologies supports onboarding and compliance workflows that strengthen consistency, confidence, and operational readiness.",
    features: [
      "Structured onboarding support",
      "Compliance-led workflows",
      "Built for trusted delivery",
    ],
    theme: "light" as const,
    cta: "Explore KYC and Compliance"
  },
  {
    name: "Gold Loan Asset Management",
    price: "",
    period: "",
    description:
      "FinMet Technologies provides operational support for managing gold-linked lending portfolios with greater visibility, structure, and control.",
    features: [
      "Asset handling support",
      "Operational coordination",
      "Portfolio-focused management",
    ],
    theme: "mid" as const,
    cta: "Explore Asset Management"
  },
];

const featureIcons = [
  <svg key="a" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2.5" y="7.5" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5 7.5V5a3 3 0 0 1 6 0v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="8" cy="11" r="1" fill="currentColor" />
  </svg>,
  <svg key="b" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.5 10.5L4 8l3.5 1.5L13 3.5l1 .5-5.5 7 2 2-1 1-2.5-1.5-1.5.5-1-1.5z" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 14h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
  <svg key="c" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M6.23 6.23L3.93 3.93M9.77 9.77L12.07 12.07M9.77 6.23L12.07 3.93M6.23 9.77L3.93 12.07" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
  <svg key="d" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.5 8a5.5 5.5 0 1 1-1.16-3.43" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M13.5 2v3.5H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="e" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.3" />
    <path d="M4 10h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
];

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(140);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => {
      setHeaderHeight(header.offsetHeight);
    });
    observer.observe(header);
    setHeaderHeight(header.offsetHeight);
    return () => observer.disconnect();
  }, []);

  const cardTop = NAVBAR_HEIGHT + headerHeight;

  return (
    <section id="pricing" className="bg-white">
      <div
        ref={headerRef}
        className="sticky bg-white border-b border-gray-100 py-8 md:py-10"
        style={{ top: NAVBAR_HEIGHT, zIndex: 10 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
              Built for the Modern Gold Economy
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-xl md:text-right">
              FinMet Technologies oﬀers a focused suite of solutions designed to help
              institutions and businesses unlock the value of gold with greater precision,
              flexibility, and control.
            </p>
          </div>
        </div>
      </div>

      {plans.map((plan, index) => {
        const isDark = plan.theme === "dark";
        const isMid = plan.theme === "mid";
        return (
          <div key={plan.name} className="h-170 sticky top-20">
            <div
              className="sticky mx-auto max-w-7xl px-6 pt-5"
              style={{ top: cardTop, zIndex: index + 1 }}
            >
              <div
                className={`grid md:grid-cols-3 gap-6 md:gap-0 p-7 md:p-8 items-center ${isDark
                    ? "bg-[#0A1B4F] border-[#0A1B4F] shadow-blue-950/20"
                    : isMid
                      ? "bg-secondary border-gray-200"
                      : "bg-secondary border-gray-200"
                  }`}
              >
                <div className="md:pr-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-[3px]">
                      <div className={`w-[6px] h-[6px] ${isDark ? "bg-blue-400" : "bg-[#1B3BFF]"}`} />
                      <div className={`w-[6px] h-[6px] ${isDark ? "bg-blue-500" : "bg-[#1B3BFF]"}`} />
                      <div className={`w-[6px] h-[6px] ${isDark ? "bg-blue-700" : "bg-[#1B3BFF]/40"}`} />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-3xl md:text-4xl font-medium tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-blue-200/60" : "text-black/80"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className={`md:px-8 md:border-l md:border-r ${isDark ? "border-blue-900/50" : "border-gray-200"}`}>
                  <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-blue-300/50" : "text-black/80"}`}>
                    Features
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {plan.features.map((f, i) => (
                      <li key={f} className={`flex items-center gap-3 text-lg ${isDark ? "text-blue-100/70" : "text-gray-600"}`}>
                        <span className={isDark ? "text-blue-300/60" : "text-[#1B3BFF]"}>
                          {featureIcons[i % featureIcons.length]}
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:pl-8 flex items-center">
                  <Link
                    href="#get-started"
                    className={`w-full inline-flex items-center justify-center gap-2 text-base font-medium px-5 py-3 transition-colors ${isDark
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "bg-[#1B3BFF] text-white hover:bg-[#1530d4]"
                      }`}
                  >
                    {plan.cta} <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="h-24 bg-white" />
    </section>
  );
}
