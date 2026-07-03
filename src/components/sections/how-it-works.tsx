const steps = [
  {
    num: ".01",
    title: "Understand the Use Case",
    description:
      "We begin by understanding your institution's objectives, operational context and existing infrastructure.",
  },
  {
    num: ".02",
    title: "Align the Right Solution",
    description:
      "Whether you are a bank managing a gold loan portfolio, a jeweller launching E-Gold or a business strengthening compliance, we scope the right solution around your needs.",
  },
  {
    num: ".03",
    title: "Deliver With Operational Rigour",
    description:
      "We bring together technology, SOPs, compliance workflows and partner coordination to move from planning to implementation.",
  },
  {
    num: ".04",
    title: "Support Ongoing Growth",
    description:
      "Gold markets move. Regulations change. We provide ongoing operational support, platform maintenance and partnership continuity.",
  },
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
            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <span className="text-sm font-medium uppercase tracking-widest text-[#0084eb]">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-[1.08]">
                From Requirement to Execution, Without the Friction
              </h2>
              <p className="text-base leading-relaxed max-w-md">
                FinMet operates as an embedded partner, not just a vendor. Every
                engagement is shaped around the partner&apos;s requirements,
                operating environment and long-term objectives.
              </p>
            </div>
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
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
