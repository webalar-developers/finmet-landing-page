import Image from "next/image";

const logos = [
  { name: "IDFC First Bank", src: "/parteners/idfc-bank.png" },
  { name: "ICICI Bank", src: "/parteners/icici-bank.png" },
  { name: "RBL Bank", src: "/parteners/rbl-bank.png" },
  { name: "DCB Bank", src: "/parteners/dcb-bank.png" },
];

export function LogoBar() {
  return (
    <section id="partners" className="bg-secondary py-10 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-8">
          <span className="text-sm font-medium tracking-wide text-gray-400">
            Trusted Banking Partners
          </span>
          <p className="text-black/70 text-base max-w-lg">
            Working alongside established institutions across the gold value chain.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="object-contain h-6 w-auto"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Trusted relationships that strengthen access, reliability and scale.
        </p>
      </div>
    </section>
  );
}
