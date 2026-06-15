const pillars = [
  {
    title: "Assess the Requirement",
    description:
      "FinMet Technologies begins by understanding the use case, partner objectives, and operational context.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1v14M1 8h14M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Align the Right Solution",
    description:
      "From onboarding and verification to solution design, each engagement is structured around the most suitable monetization pathway.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Enable Execution",
    description:
      "FinMet Technologies brings together technology, process support, and partner coordination to move from planning to delivery.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Support Ongoing Growth",
    description:
      "FinMet Technologies continues to support execution through operational oversight, workflow eﬃciency, and long-term engagement.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L9.8 5.7l4.5.4-3.3 3 1 4.4L8 11.2l-4 2.3 1-4.4-3.3-3 4.5-.4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section className="bg-[#0A1B4F] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
            A More Structured Approach to Gold Monetization
          </h2>
          <p className="mt-4 text-white/80 text-[14px] leading-relaxed max-w-2xl  mx-auto">
            FinMet Technologies brings clarity to gold monetization through a process
            built around practical execution, institutional alignment, and long-term
            partner value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {pillars.map((p,i) => (
            <div key={p.title} className="flex flex-col gap-3">
              <div className="text-white/80 text-2xl font-medium">Step {i+1}</div>
              <h3 className="text-white text-2xl font-medium">{p.title}</h3>
              <p className="text-white/80 text-base leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
