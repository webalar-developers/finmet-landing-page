"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    q: "How fast can we get started?",
    a: "You can be up and running within minutes. Once you sign up, your workspace is ready immediately — no lengthy setup required.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free forever and includes everything you need to get your workflows organised and your team aligned.",
  },
  {
    q: "Can we integrate Finmet with our existing tools?",
    a: "Absolutely. Finmet connects with the tools your team already uses, from communication platforms to data sources, without complex configuration.",
  },
  {
    q: "How secure is our data?",
    a: "Security is foundational. We use AES-256 encryption, SOC 2 Type II controls, and regular third-party audits to keep your data protected.",
  },
  {
    q: "Do you offer support for enterprise teams?",
    a: "Yes. Enterprise plans include a dedicated account manager, priority support SLAs, and onboarding tailored to your organization's needs.",
  },
  {
    q: "Can we customize the platform?",
    a: "Enterprise customers get full white-labelling, custom workflows, and API access. Pro plans support custom automations and branding options.",
  },
  {
    q: "How do payments work?",
    a: "We accept all major cards and bank transfers. Billing is monthly or annual, with a discount for annual plans. Invoices are issued automatically.",
  },
  {
    q: "Where is your team based?",
    a: "Finmet is built and supported by the Webalar team. We're distributed globally, with primary operations managed from the UK and India.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full flex items-start justify-between gap-4 py-4 border-b border-gray-100 text-left group bg-secondary px-4"
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex-1">
        <p className="text-xl font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
          {q}
        </p>
        {open && (
          <p className="mt-2 text-md text-gray-400 leading-relaxed">{a}</p>
        )}
      </div>
      <span className="mt-0.5 flex-shrink-0 text-gray-300 group-hover:text-gray-500 transition-colors">
        {open ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </button>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-black/80 text-base leading-relaxed max-w-lg mx-auto">
            Simple answers to what most teams ask before joining Finmet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="space-y-2" >
            {questions.slice(0, 4).map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div className="space-y-2"  >
            {questions.slice(4).map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="#get-started"
            className="inline-flex items-center gap-2 bg-[#1B3BFF] text-white text-base font-medium px-5 py-2.5 hover:bg-[#1530d4] transition-colors"
          >
            Get started
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
