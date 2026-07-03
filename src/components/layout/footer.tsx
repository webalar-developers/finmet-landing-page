import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#pricing" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
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
      <div className="mx-auto max-w-7xl px-6 py-16 bg-[#0084eb] mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/brand/main-logo.png"
                alt="FinMet Technologies logo"
                width={400}
                height={300}
                className="w-auto h-20 object-contain"
              />
            </div>
            <p className="text-white/80 text-base max-w-xs">
              Building the infrastructure India&apos;s gold economy needs.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium uppercase tracking-widest text-white mb-4">
              Quick Links
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
            FinMet Technologies Pvt Ltd | Coimbatore, India
          </p>
          <p className="text-white/80 text-sm mt-1">
            &copy; {new Date().getFullYear()} FinMet Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
