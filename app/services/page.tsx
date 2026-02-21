import ServicesGrid from "@/components/ServicesGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Senotrams Digital Store",
  description:
    "Browse all 20+ digital services offered by Senotrams — movies, design, web development, online applications, printing, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-black min-h-screen">
      {/* Page header – dark version */}
      <div className="relative py-20 px-5 sm:px-8 text-center overflow-hidden bg-gradient-to-b from-black to-gray-950">
        {/* Subtle dark pattern instead of bright dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:24px_24px] opacity-40" />
        
        {/* Softer glow – dark gold / amber tone */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-purple-950/10 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6 items-center">
          <span className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-950/40 rounded-full px-5 py-2">
            <span className="font-heading text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/90">
              Full Catalogue
            </span>
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight font-bold">
            ALL <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>

          <p className="text-gray-400 font-body text-lg sm:text-xl leading-relaxed max-w-2xl">
            Movies • Design • Web & App Development • Printing • Official Online Services — everything you need in one place.
          </p>
        </div>
      </div>

      {/* Make sure ServicesGrid looks good on dark background */}
      <div className="bg-black">
        <ServicesGrid />
      </div>
    </div>
  );
}