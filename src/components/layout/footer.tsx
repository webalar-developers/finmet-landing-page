import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "F.A.Q", href: "#faq" },
];

const social = [
  { label: "Former/Export", href: "#" },
  { label: "X/Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Get Template", href: "#" },
];

export function Footer() {
  return (
    <footer className=" w-full">
      <div className="mx-auto max-w-7xl px-6 py-16 bg-[#1B3BFF] mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/brand/main-logo.png"
                alt="Finmet logo"
                width={400}
                height={300}
                className="w-auto h-20 object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-medium uppercase tracking-widest text-white mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-base text-white hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium uppercase tracking-widest text-white mb-4">
              Social
            </p>
            <ul className="flex flex-col gap-2.5">
              {social.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-base text-white hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-white text-base">
            &copy; {new Date().getFullYear()} Finmet Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
