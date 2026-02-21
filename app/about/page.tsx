import type { Metadata } from "next";
import WhyUs from "@/components/WhyUs";
import { Zap, Sparkles, Award, Clock, ShieldCheck, User, UserRound, Users, UserCog } from "lucide-react";

// You can change which icon is used for each role — or use the same one for simplicity
const team = [
  { name: "Add Team Member", role: "Founder / Director", icon: UserCog },
  { name: "Add Team Member", role: "Design Lead", icon: UserRound },
  { name: "Add Team Member", role: "Tech Specialist", icon: User },
  { name: "Add Team Member", role: "Customer Service", icon: Users },
];

export const metadata: Metadata = {
  title: "About Us | Senotrams Digital Store",
  description:
    "Learn about Senotrams Digital Store — Tanzania's all-in-one digital services hub.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-black min-h-screen">
      {/* Header */}
      <div className="relative py-20 px-5 sm:px-8 text-center overflow-hidden bg-black">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 hero-glow opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-5 items-center">
          <span className="inline-flex items-center gap-2 border border-[#F5B800]/40 bg-[#F5B800]/10 rounded-full px-5 py-2">
            <Sparkles size={14} className="text-[#F5B800]" />
            <span className="font-heading text-[11px] font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
              Our Story
            </span>
          </span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide">
            ABOUT <span className="text-gradient">US</span>
          </h1>
        </div>
      </div>

      {/* Story section */}
      <section className="py-16 px-5 sm:px-8 max-w-7xl mx-auto bg-black">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#F5B800]/20 glow-border">
            <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-3 bg-black/40">
              <span className="text-6xl">🏬</span>
              <p className="text-white/30 text-sm font-heading text-center px-8">
                Add your store photo here
                <br />
                <span className="text-[11px] text-white/20">
                  Recommended: 800×600px
                </span>
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide">
              BORN FROM A
              <br />
              <span className="text-gradient">SIMPLE IDEA</span>
            </h2>
            <div className="flex flex-col gap-5 text-white/70 font-body leading-relaxed text-lg">
              <p>
                Senotrams Digital Store was created with a clear mission: bring
                every digital service Tanzanians need into one convenient,
                affordable, and reliable location.
              </p>
              <p>
                From downloading movies and setting up WiFi to designing logos,
                building websites, handling RITA services, and booking train
                tickets — we saw how much people struggled to find trustworthy
                help. So we built the solution.
              </p>
              <p>
                Today, Senotrams serves hundreds of customers — students,
                entrepreneurs, families, and businesses — with the same
                commitment to quality and speed that started it all.
              </p>
            </div>

            {/* Mission pills */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { label: "Quality", icon: Award },
                { label: "Speed", icon: Zap },
                { label: "Affordability", icon: Clock },
                { label: "Trust", icon: ShieldCheck },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 border border-[#F5B800]/40 bg-[#F5B800]/10 text-[#F5B800] font-heading text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full"
                >
                  <Icon size={14} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-16 px-5 sm:px-8 bg-black border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "Services Offered" },
            { value: "500+", label: "Happy Clients" },
            { value: "3+", label: "Years Experience" },
            { value: "5★", label: "Customer Rating" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="font-display text-5xl sm:text-6xl text-gradient tracking-wide">
                {s.value}
              </span>
              <span className="text-white/50 font-heading text-sm uppercase tracking-wider">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 px-5 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14 gap-4">
            <span className="inline-flex items-center gap-2 border border-[#F5B800]/40 bg-[#F5B800]/10 rounded-full px-5 py-2">
              <Sparkles size={14} className="text-[#F5B800]" />
              <span className="font-heading text-[11px] font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
                The Team
              </span>
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide">
              MEET THE <span className="text-gradient">TEAM</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const Icon = member.icon;
              return (
                <div
                  key={i}
                  className="service-card bg-[#0f0f0f] border border-[#1e1e1e] hover:border-[#F5B800]/30 transition-colors rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
                >
                  {/* Photo placeholder → now using Lucide icon */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-[#F5B800]/20 bg-black/40 flex items-center justify-center">
                    <Icon size={64} className="text-[#F5B800]/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-lg">
                      {member.name}
                    </div>
                    <div className="text-[#F5B800]/70 text-xs font-heading tracking-wider uppercase mt-1">
                      {member.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyUs />
    </div>
  );
}