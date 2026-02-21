"use client";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { MdMovie} from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CgGames } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 bg-black">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#F5B8000a_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#E8620A0a_0%,transparent_50%)]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text Content ── */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2.5 border border-[#F5B800]/25 bg-black/60 backdrop-blur-sm rounded-full px-5 py-2">
              <span className="w-2.5 h-2.5 bg-[#F5B800] rounded-full animate-pulse" />
              <span className="font-heading text-xs font-semibold tracking-[0.22em] uppercase text-[#F5B800]/90">
                Tanzania's Digital Hub
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tight text-white">
              ALL YOUR
              <br />
              <span className="bg-gradient-to-r from-[#F5B800] to-[#ffaa00] bg-clip-text text-transparent">
                DIGITAL
              </span>
              <br />
              NEEDS.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300 font-light max-w-lg">
              Movies • Games • Graphic Design • Web Development • Digital Printing • Online Services
              <br className="sm:hidden" /> — everything under one roof.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                { value: "20+", label: "Services" },
                { value: "500+", label: "Clients" },
                { value: "5★", label: "Rated" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[88px] bg-zinc-950/80 border border-zinc-800 rounded-xl px-5 py-3.5 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[#F5B800] tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-heading tracking-wider uppercase text-zinc-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#F5B800] hover:bg-[#ffaa00] text-black font-heading font-bold text-sm sm:text-base tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#F5B800]/20"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/255683073428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-[#F5B800]/40 hover:border-[#F5B800]/70 text-[#F5B800] font-heading font-bold text-sm sm:text-base tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#F5B800]/5"
              >
                <Play size={16} className="fill-current" />
                Get in Touch
              </a>
            </div>

            {/* Trust signal */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#F5B800] fill-[#F5B800]"
                    />
                  ))}
              </div>
              <span className="text-zinc-400 text-sm">
                Trusted by hundreds of customers
              </span>
            </div>
          </div>

          {/* ── Right: Visual showcase ── */}
          <div className="relative hidden lg:flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/3.2]">
              {/* Main hero image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl shadow-black/60">
                {/* Replace with real image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8">
                    <img
                    src="/images/WhatsApp Image 2026-02-21 at 15.43.00 (2).jpeg"
                    alt="Hero Image Placeholder"
                    className="w-full h-full object-cover opacity-20"
                  />
                 </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-8 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#F5B800]/15 flex items-center justify-center text-2xl">
                  <MdMovie />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">Movies & Series</div>
                  <div className="text-zinc-400 text-xs">Latest releases</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-8 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#E8620A]/15 flex items-center justify-center text-2xl">
                <TbWorld />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">Web Development</div>
                  <div className="text-zinc-400 text-xs">Fast & modern</div>
                </div>
              </div>

              {/* Side icons */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {[
                    { icon: <CgGames />, label: "Games" },
                    { icon: <FaWifi />, label: "WiFi" },
                    { icon: <SiAdobeindesign />, label: "Design" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className=" 
                        w-14 h-14 
                        bg-zinc-950/80 
                        border border-zinc-800 
                        rounded-2xl 
                        flex items-center justify-center 
                        text-2xl 
                        text-[#F5B800]/70               /* subtle base color */
                        transition-all duration-300
                        hover:border-[#F5B800]/60 
                        hover:text-[#F5B800] 
                        hover:shadow-[0_0_15px_#F5B800/40,0_0_30px_#F5B800/20] 
                        hover:drop-shadow-[0_0_8px_#F5B800/60]
                      "
                      title={item.label}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-[10px] font-heading tracking-[0.25em] uppercase text-zinc-400">
          Scroll to explore
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#F5B800]/70 to-transparent" />
      </div>
    </section>
  );
}