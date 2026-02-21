"use client";

import { useState } from "react";
import { services, categories } from "../lib/services-data";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="relative py-24 px-5 sm:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <span className="inline-flex items-center gap-2 border border-[#F5B800]/30 bg-[#F5B800]/8 rounded-full px-4 py-1.5">
            <span className="font-heading text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
              What We Offer
            </span>
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide">
            OUR <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-white/50 font-body max-w-lg text-base leading-relaxed">
            Over 20 professional services to meet every digital need — all in one convenient place.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-heading text-[12px] md:text-[13px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                active === cat
                  ? "bg-[#F5B800] text-black border-[#F5B800] shadow-[0_0_20px_rgba(245,184,0,0.4)]"
                  : "border-gray-700 text-gray-400 hover:border-[#F5B800]/60 hover:text-[#F5B800] hover:bg-black/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((service, i) => (
            <div
              key={service.id}
              className={`service-card group relative rounded-2xl border p-6 flex flex-col gap-5 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl ${
                service.highlight
                  ? "bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#F5B800]/40 shadow-[0_0_25px_rgba(245,184,0,0.15)]"
                  : "bg-[#0f0f0f] border-gray-800 hover:border-gray-600"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#F5B800]/25 border border-[#F5B800]/50 rounded-full px-3 py-1 text-[10px] font-heading font-bold tracking-wider uppercase text-[#F5B800]">
                    Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#222] flex items-center justify-center text-[#F5B800] transition-transform group-hover:scale-110">
                <service.icon size={28} />
              </div>

              {/* Category tag */}
              <span className="text-[10px] md:text-[11px] font-heading font-semibold tracking-[0.22em] uppercase text-[#F5B800]/60">
                {service.category}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-lg md:text-xl leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 font-body text-sm md:text-base leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Image / visual placeholder - you can later replace with real images */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center">
                <service.icon size={64} className="opacity-20" />
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/255683073428?text=Hello,%20I%20need%20${encodeURIComponent(
                  service.title
                )}%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-[#F5B800] font-heading font-bold text-xs md:text-sm tracking-wider uppercase hover:gap-3 transition-all duration-200 hover:text-[#ffc107]"
              >
                Order Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}