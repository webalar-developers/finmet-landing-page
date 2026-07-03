import { ShieldCheck, Handshake, BarChart3, Cpu } from "lucide-react";
import Link from "next/link";
import { ParticleWave } from "@/components/ui/particle-wave";

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden flex flex-col justify-between min-h-[calc(100vh-60px)]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 md:pt-20">
        <span className="block text-sm font-medium uppercase tracking-widest text-[#0084eb] mb-4">
          For Banks, Jewellers and Financial Institutions
        </span>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-gray-900 leading-[1.06] md:max-w-[58%]">
            Gold Has Always Been Valuable. We Build the Infrastructure to Make It Work.
          </h1>
          <div className="md:max-w-md md:mt-3">
            <p className="text-xl leading-relaxed">
              FinMet Technologies provides the technology, operational frameworks
              and institutional partnerships that help banks, NBFCs and jewellers
              unlock the value of gold at scale, with precision and within a
              compliant operating environment.
            </p>
            <Link
              href="#pricing"
              className="mt-6 inline-flex items-center gap-2 bg-[#0084eb] text-white text-base font-medium px-4 py-2.5 hover:bg-[#006bbd] transition-colors"
            >
              Explore Solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Security-led operations", icon: ShieldCheck },
            { label: "Trusted financial partnerships", icon: Handshake },
            { label: "Deep gold market experience", icon: BarChart3 },
            { label: "Technology built for scale", icon: Cpu },
          ].map(({ label, icon: Icon }, i) => (
            <div
              key={i}
              className="flex flex-col justify-between h-32 md:h-36 p-5 bg-[#0C0D87] text-white"
            >
              <div className="flex items-start gap-2">
                <Icon size={18} className="opacity-80 shrink-0 mt-0.5" />
                <span className="text-[13px] md:text-lg font-medium leading-snug">{label}</span>
              </div>
              <span className="opacity-60">
                <ArrowUpRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
