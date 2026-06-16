import Link from "next/link";
import { ParticleWave } from "@/components/ui/particle-wave";

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StairsPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-2/3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute border-l border-t border-white/[0.07]"
            style={{
              right: `${i * 18}%`,
              top: `${i * 15}%`,
              width: "60%",
              height: "60%",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D87]/80 to-transparent" />
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="py-6 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="relative  overflow-hidden bg-[#0084eb] flex flex-col justify-between min-h-64 p-8">
            <div className="absolute inset-0">
              <ParticleWave />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0084eb]/90 via-transparent to-transparent" />
            <div className="relative z-10 flex gap-2 mb-auto">
              <div className="w-3 h-3 bg-white/60 rounded-sm" />
              <div className="w-3 h-3 bg-white/30 rounded-sm" />
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
                Build smarter.<br />Start today.
              </h3>
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 bg-white text-gray-900 text-[13px] font-medium px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                Get started <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="relative  overflow-hidden bg-[#0C0D87] flex flex-col justify-between min-h-64 p-8">
            <StairsPattern />
            <div className="relative z-10 flex gap-2 mb-auto">
              <div className="w-3 h-3 bg-white/40 rounded-sm" />
              <div className="w-3 h-3 bg-white/20 rounded-sm" />
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
                Got questions?<br />Contact us.
              </h3>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 text-[13px] font-medium px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                Get in touch <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
