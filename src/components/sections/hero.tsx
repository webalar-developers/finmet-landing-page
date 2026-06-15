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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-gray-900 leading-[1.06] md:max-w-[58%]">
            Your Partner in Precious Metals<br />
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed md:max-w-md md:mt-3">
            FinMet Technologies helps unlock the value of gold through secure,
            technology-enabled solutions built for financial inclusion, operational
            eﬃciency, and long-term growth.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Security led operations",
            "Trusted financial partnerships",
            "Industry experience",
            "Efficient technology platforms",
          ].map((label, i) => (
            <div
              key={i}
              className="flex flex-col justify-between h-32 md:h-36 p-5 bg-[#0A1B4F] text-white"
            >
              <span className="text-[13px] md:text-[14px] font-medium leading-snug">{label}</span>
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
