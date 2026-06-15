import Image from "next/image";

const logos = [
  { name: "Axis Bank", src: "/parteners/axis-bank.png" },
  { name: "HDFC Bank", src: "/parteners/hdfc-bank.png" },
  { name: "ICICI Bank", src: "/parteners/icici-bank.png" },
  { name: "IDFC Bank", src: "/parteners/idfc-bank.png" },
];

export function LogoBar() {
  return (
    <section className="bg-secondary py-10 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-sm font-medium tracking-wide text-gray-400">
           Trusted Banking Partners
          </span>
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
      </div>
    </section>
  );
}
