"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function ArrowUpRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M2 11L11 2M11 2H4M11 2V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 38px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-center gap-[5px] px-12 pb-0">
        {[72, 88, 58, 100, 78, 112, 68, 94, 62, 84, 54, 90, 76].map((h, i) => (
          <div
            key={i}
            className="flex-1 max-w-[28px] rounded-t-[2px]"
            style={{
              height: `${h}%`,
              background: `rgba(255,255,255,${0.025 + (i % 3) * 0.01})`,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              borderLeft: "1px solid rgba(255,255,255,0.04)",
              borderRight: "1px solid rgba(255,255,255,0.04)",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D87]/95 via-[#0C0D87]/50 to-[#0C0D87]/20" />
    </div>
  );
}

function DashboardMock() {
  const bars = [38, 60, 42, 78, 52, 88, 58, 72, 46, 82, 50, 68];
  return (
    <div className="mt-5 rounded-xl bg-[#16161c] border border-white/[0.07] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/10" />
          <div className="h-2 w-2 rounded-full bg-white/10" />
          <div className="h-2 w-2 rounded-full bg-white/10" />
        </div>
        <div className="ml-2 h-1.5 w-20 rounded-full bg-white/[0.06]" />
        <div className="ml-auto h-1.5 w-8 rounded-full bg-[#0084eb]/40" />
      </div>
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-white text-lg font-bold">$48,290</span>
          <span className="text-emerald-400 text-[11px] ml-1">+12.4%</span>
        </div>
        <div className="flex items-end gap-[3px] h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-[2px]"
              style={{
                height: `${h}%`,
                background:
                  i === 7
                    ? "#0084eb"
                    : i === 11
                      ? "rgba(27,59,255,0.35)"
                      : "rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TableMock() {
  const rows = [
    { name: "Acme Corp", status: "Complete", amount: "$12,400", date: "Jun 10" },
    { name: "Globex Ltd", status: "Pending", amount: "$3,800", date: "Jun 11" },
    { name: "Initech LLC", status: "Complete", amount: "$9,500", date: "Jun 11" },
    { name: "Umbrella Co", status: "Complete", amount: "$21,000", date: "Jun 12" },
    { name: "Hooli Inc", status: "Failed", amount: "$650", date: "Jun 12" },
  ];
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] overflow-hidden">
      <div className="grid grid-cols-4 px-4 py-2.5 border-b border-white/[0.07] text-[10px] font-medium text-white/25 uppercase tracking-wider">
        <span>Client</span>
        <span>Status</span>
        <span>Amount</span>
        <span>Date</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-4 px-4 py-2.5 text-[12px] text-white/60 border-t border-white/[0.05]"
        >
          <span className="truncate">{row.name}</span>
          <span
            className={
              row.status === "Complete"
                ? "text-emerald-400"
                : row.status === "Pending"
                  ? "text-amber-400"
                  : "text-red-400"
            }
          >
            {row.status}
          </span>
          <span>{row.amount}</span>
          <span className="text-white/30">{row.date}</span>
        </div>
      ))}
    </div>
  );
}

export function Features() {
  const visibilityCardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: visibilityCardRef,
    offset: ["start end", "center center"],
  });
  const imageX = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, 1]);

  return (
    <section id="features" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
          Driving Change Across the Gold Industry
        </h2>
        <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed">
          The work of FinMet Technologies is guided by principles that make gold
          more accessible, more eﬃcient, and more relevant to the needs of a
          modern financial landscape.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2 relative overflow-hidden h-125">
            <Image
              src="/features/scale-banner.avif"
              alt="Built to scale"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 to-transparent" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col items-center justify-center min-h-125 text-center">
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  Innovation
                </h3>
                <p className="text-white text-[14px] leading-relaxed mb-6">
                  FinMet Technologies develops forward-looking solutions that rethink how
                  gold can be managed, monetized, and delivered.
                </p>
                <Link
                  href="#get-started"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 text-[13px] font-medium px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Get started <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-[#0f0f12] p-7 flex flex-col relative h-112.5">
            <h3 className="text-3xl font-semibold text-white mb-2">
              Accessibility
            </h3>
            <p className="text-white text-base leading-relaxed max-w-lg">
              FinMet Technologies works to broaden access to gold-based financial
              solutions through more flexible and practical models.
            </p>
            <Image
              src="/features/access-mock.avif"
              alt="Seamless access"
              width={400}
              height={340}
              className="mt-auto absolute -bottom-2"
            />
          </div>

          <div className="relative overflow-hidden bg-transparent flex flex-col h-112.5">
            <div className="relative z-10 flex flex-col h-full p-4">
              <h3 className="text-3xl font-semibold text-white mb-2">
                Sustainability
              </h3>
              <p className="text-white text-base leading-relaxed max-w-lg">
                FinMet Technologies builds with long-term relevance in mind, creating
                systems that support lasting value across the ecosystem.
              </p>
              <Image
                src="/features/flow-mock.avif"
                alt="Effortless flow"
                width={400}
                height={340}
                className="absolute object-cover inset-0 w-full -z-10 h-112.5"
              />
            </div>
          </div>

          <div ref={visibilityCardRef} className="md:col-span-2 relative  overflow-hidden bg-[#0C0D87] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  Transparency
                </h3>
                <p className="text-base text-white leading-relaxed mb-6">
                  FinMet Technologies believes trust is strengthened through clarity,
                  consistency, and dependable execution.
                </p>
                <Link
                  href="#learn-more"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 text-base font-medium px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Learn more <ArrowUpRight />
                </Link>
              </div>
              <motion.div
                className="hidden md:block"
                style={{ x: imageX, opacity: imageOpacity }}
              >
                <Image
                  src="/features/visibility-mock.avif"
                  alt="Clear visibility"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
