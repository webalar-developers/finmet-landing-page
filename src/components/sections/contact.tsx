"use client";

import { useState } from "react";

const avatarColors = ["#c7d2fe", "#a5b4fc", "#818cf8"];
const avatarInitials = ["A", "B", "C"];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="bg-[#f0f0ee] py-20 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-3">
            {avatarColors.map((bg, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[#f0f0ee] flex items-center justify-center text-[13px] font-semibold text-white"
                style={{ background: bg }}
              >
                {avatarInitials[i]}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-10">
          <span className="block text-sm font-medium uppercase tracking-widest text-[#0084eb] mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight">
            Start the Conversation
          </h2>
          <p className="mt-3 text-black/80 text-base leading-relaxed max-w-xl mx-auto">
            Whether you are a bank reviewing your gold loan operations, a
            jeweller exploring E-Gold or PMLA compliance, or an institution
            looking for a long-term partner in the gold economy, FinMet
            Technologies is ready to help you find the right path forward.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500">Full Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={set("name")}
                className="h-10 border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-300 outline-none focus:border-[#0084eb] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500">Company Name</label>
              <input
                type="text"
                placeholder="FinMet"
                value={form.company}
                onChange={set("company")}
                className="h-10 border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-300 outline-none focus:border-[#0084eb] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500">Email Address</label>
              <input
                type="email"
                placeholder="jane@email.com"
                value={form.email}
                onChange={set("email")}
                className="h-10 border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-300 outline-none focus:border-[#0084eb] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                value={form.phone}
                onChange={set("phone")}
                className="h-10 border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-300 outline-none focus:border-[#0084eb] transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-gray-500">Enquiry Type</label>
            <select
              value={form.enquiry}
              onChange={set("enquiry")}
              className="h-10 border border-gray-200 bg-white px-3 text-[13px] text-gray-400 outline-none focus:border-[#0084eb] transition-colors appearance-none"
            >
              <option value="" disabled>Select...</option>
              <option value="gold-loans">Gold Loans</option>
              <option value="e-gold">E-Gold</option>
              <option value="kyc-compliance">KYC and Compliance</option>
              <option value="gold-loan-asset-management">Gold Loan Asset Management</option>
              <option value="partnerships">Partnerships</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-gray-500">Message</label>
            <textarea
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={set("message")}
              className="border border-gray-200 bg-white px-3 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-300 outline-none focus:border-[#0084eb] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-[#0084eb] text-white text-[13px] font-semibold hover:bg-[#006bbd] transition-colors"
          >
            Submit Enquiry
          </button>

          <p className="text-center text-[11px] text-gray-300">
            We will respond within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
