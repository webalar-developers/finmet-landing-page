const pillars = [
  {
    title: "Sector knowledge that goes all the way down",
    description:
      "Our team has spent years inside the gold market, not studying it from the outside. That experience helps our platforms handle the real operational edge cases that generic systems often miss.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1v14M1 8h14M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Institutional credibility",
    description:
      "We work with established banking partners across the gold value chain. These relationships are not just logos. They are the operational foundation behind the solutions we deliver.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built for how gold actually moves",
    description:
      "Physical gold moves through jewellers, refiners, bullion dealers, customers and bank vaults. Our platforms reflect that reality instead of simplifying it away.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section className="bg-[#0C0D87] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="block text-sm font-medium uppercase tracking-widest text-blue-300/70 mb-3">
            Why FinMet Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
            The Difference Is in the Depth
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white">
                {p.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white text-lg font-medium leading-snug">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
