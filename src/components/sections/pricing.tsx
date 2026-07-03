"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const NAVBAR_HEIGHT = 76; // h-[60px] nav + py-2 (8px×2) from navbar.tsx

const plans = [
  {
    name: "Gold Loans",
    tagline: "Transfer. Not Originate.",
    description:
      "India's gold loan market includes a wide range of lending rates, often creating a gap between what borrowers pay and what they could access through more structured financial channels. FinMet Technologies facilitates the transfer of high-interest gold loans to partner banks at significantly lower rates, supported by asset management, compliance infrastructure and operational coordination.",
    features: [
      "Gold loan transfer through partner banks",
      "End-to-end asset management and custody coordination",
      "Compliance built into every transaction",
      "Designed for lower-cost financial access",
    ],
    theme: "light" as const,
    cta: "Talk to Us About Gold Loans",
  },
  {
    name: "E-Gold",
    tagline: "Fractional Gold. Full Ownership.",
    description:
      "FinMet's E-Gold platform allows jewellers to offer digital gold to their customers starting from as little as ₹1, without inventory risk, upfront stock requirements or disruption to showroom operations. Customers can accumulate digital gold in a wallet linked to their jeweller and redeem it for physical jewellery when they are ready. The jeweller stays at the centre of the relationship. FinMet provides the infrastructure behind it.",
    features: [
      "Fractional digital gold from ₹1",
      "Seamless redemption for physical jewellery",
      "Jeweller-ready integration",
      "Zero inventory risk",
    ],
    theme: "mid" as const,
    cta: "Talk to Us About E-Gold",
  },
  {
    name: "KYC and Compliance",
    tagline: "PMLA Compliance Built for Jewellers",
    description:
      "Since the jewellery sector was brought under PMLA, many businesses have known they are liable, but fewer have had a clear operating system for what compliance requires in practice. FinMet's compliance platform is built around the obligations jewellers face, including customer screening, transaction records, due diligence documentation and audit-ready reporting.",
    features: [
      "Customer screening against sanctions and PEP lists",
      "Audit-ready documentation and reporting",
      "Built specifically for the jewellery sector",
      "Used by 50+ clients",
    ],
    theme: "dark" as const,
    cta: "Talk to Us About Compliance",
  },
  {
    name: "Gold Loan Asset Management",
    tagline: "Managing the Collateral Is as Important as Managing the Loan",
    description:
      "Gold loans create an operational challenge that standard lending systems are not always built for: a physical asset that must be tracked, valued, monitored and managed across locations throughout the life of the loan. FinMet's asset management platform gives banks and NBFCs the visibility and control to manage gold-linked lending portfolios with greater precision.",
    features: [
      "Real-time inventory tracking across locations",
      "Portfolio-wide LTV monitoring",
      "Regulatory audit trails",
      "Data analytics and operational reporting",
    ],
    theme: "mid" as const,
    cta: "Talk to Us About Asset Management",
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
            <div>
              <span className="block text-sm font-medium uppercase tracking-widest text-[#0084eb] mb-3">
                Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
                Four Products. One Connected Gold Infrastructure.
              </h2>
            </div>
            <p className="text-black text-base leading-relaxed max-w-xl md:text-right">
              FinMet Technologies offers a focused suite of solutions designed to
              help institutions and businesses manage, monetise and deliver
              gold-backed services with greater visibility, control and
              efficiency.
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
                    ? "bg-[#0C0D87] border-[#0C0D87] shadow-blue-950/20"
                    : isMid
                      ? "bg-secondary border-gray-200"
                      : "bg-secondary border-gray-200"
                  }`}
              >
                <div className="md:pr-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-[3px]">
                      <div className={`w-[6px] h-[6px] ${isDark ? "bg-blue-400" : "bg-[#0084eb]"}`} />
                      <div className={`w-[6px] h-[6px] ${isDark ? "bg-blue-500" : "bg-[#0084eb]"}`} />
                      <div className={`w-[6px] h-[6px] ${isDark ? "bg-blue-700" : "bg-[#0084eb]/40"}`} />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-3xl md:text-4xl font-medium tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </span>
                  </div>
                  <p className={`text-sm font-medium mb-3 ${isDark ? "text-blue-300/70" : "text-[#0084eb]"}`}>
                    {plan.tagline}
                  </p>
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
                        <span className={isDark ? "text-blue-300/60" : "text-[#0084eb]"}>
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
                        : "bg-[#0084eb] text-white hover:bg-[#006bbd]"
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
