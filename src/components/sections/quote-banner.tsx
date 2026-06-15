export function QuoteBanner() {
  return (
    <section className="relative bg-[#0A1B4F] py-20 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 36px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <svg
          className="mx-auto mb-8 text-white/20"
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="currentColor"
        >
          <path d="M0 32V19.2C0 14.4 1.2 10.267 3.6 6.8 6 3.333 9.6 1.067 14.4 0l2.4 3.6C13.6 4.667 11.333 6.267 9.6 8.4 7.867 10.533 7 12.933 7 15.6H14V32H0zm22 0V19.2c0-4.8 1.2-8.933 3.6-12.4C28 3.333 31.6 1.067 36.4 0l2.4 3.6c-3.2 1.067-5.467 2.667-7.2 4.8-1.733 2.133-2.6 4.533-2.6 7.2H36V32H22z" />
        </svg>

        <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug">
          &ldquo;Finmet has become the backbone of our operations. What used to
          take days now takes minutes, and our team finally works with the
          clarity and confidence we needed to scale.&rdquo;
        </blockquote>

        <div className="mt-8">
          <p className="text-white font-semibold text-base">Nova S.</p>
          <p className="text-blue-300/60 text-[12px] mt-0.5">
            Head of Strategy at Lumentech
          </p>
        </div>
      </div>
    </section>
  );
}
