import Link from "next/link";

const steps = [
  {
    num: ".01",
    title: "Intro",
    description:'From gold loan solutions to E-Gold platforms and operational support, FinMet Technologies brings together sector knowledge, operational clarity, and purpose-built technology to deliver solutions that feel more structured, more dependable, and better aligned with the realities of the gold economy.'
  },
  {
    num: ".02",
    title: "Deep Industry Expertise",
    description:
      "FinMet Technologies brings together sector knowledge, operational clarity, and purpose-built technology to deliver solutions that feel more structured,more dependable, and better aligned with the realities of the gold economy.",
  },
  {
    num: ".03",
    title: "Execution Designed Around Partners",
    description:
      "From solution design to operational support, FinMet Technologies helps partners move with greater clarity, structure, and confidence.",
    cta: false,
  },
  {
    num: ".04",
    title:"Technology Built for Scale",
    description:"FinMet Technologies develops platforms and workflows that support more connected operations, stronger eﬃciency, and sustainable growth."
  }
];

function FanLines() {
  const W = 260;
  const H = 500;
  const ox = 0;
  const oy = H / 2;

  const count = 10;
  const topY = 8;
  const botY = H - 8;

  const lines = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    const ey = topY + t * (botY - topY);
    const isBlue = i >= 5;
    return { x1: ox, y1: oy, x2: W, y2: ey, isBlue };
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="w-full h-full overflow-visible"
      aria-hidden
    >
      <defs>
        <style>{`
          @keyframes ray-fill {
            0%   { stroke-dashoffset: 900; }
            50%  { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -900; }
          }
        `}</style>
      </defs>

      {lines.map((l, i) => {
        const bend = (l.y2 - l.y1) * 0.3;
        const d = `M ${l.x1} ${l.y1} C ${W * 0.3} ${l.y1 + bend} ${W * 0.7} ${l.y2 + bend} ${l.x2} ${l.y2}`;

        return (
          <g key={i}>
            <path
              d={d}
              fill="none"
              stroke="#c4cbe0"
              strokeWidth="0.8"
              strokeOpacity="0.52"
            />
            <path
              d={d}
              fill="none"
              stroke="#0084eb"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="900"
              strokeOpacity="0.85"
              style={{
                animation: `ray-fill 2.4s linear 0s infinite`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f0f0ee] py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10 items-stretch">

          <div className="md:col-span-2 relative flex flex-col gap-20">
            <h2 className="relative z-10 text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-[1.08] max-w-xl">
             Expertise, Infrastructure, and Execution in One Partner
            </h2>
            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-full pointer-events-none">
              <FanLines />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col gap-1.5">
                <span className="text-[#0084eb] text-4xl font-medium tracking-tight">
                  {step.num}
                </span>
                <h3 className="text-3xl font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed max-w-xs">
                  {step.description}
                </p>
                {step.cta && (
                  <Link
                    href="#get-started"
                    className="mt-3 inline-flex items-center gap-2 bg-[#0084eb] text-white text-base font-medium px-4 py-2.5  hover:bg-[#006bbd] transition-colors w-fit"
                  >
                    Get started
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M2 9L9 2M9 2H3.5M9 2V7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
