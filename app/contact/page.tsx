import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact | Senotrams Digital Store",
  description:
    "Get in touch with Senotrams via WhatsApp, phone, or email. We're here to help with all your digital needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Page header */}
      <div className="relative py-20 px-5 sm:px-8 text-center overflow-hidden bg-black">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-5 items-center">
          <span className="inline-flex items-center gap-2 border border-[#F5B800]/30 bg-[#F5B800]/10 rounded-full px-4 py-1.5">
            <span className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
              We're Here
            </span>
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight font-bold">
            REACH <span className="text-gradient">OUT</span>
          </h1>

          <p className="text-white/60 font-body text-base sm:text-lg leading-relaxed max-w-xl mt-4">
            Have a question or ready to order a service? We respond quickly — 
            message us on WhatsApp for the fastest reply.
          </p>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}