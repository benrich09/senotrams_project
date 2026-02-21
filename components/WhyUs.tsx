import {
  Shield,
  Zap,
  Clock,
  HeartHandshake,
  Award,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description:
      "Hundreds of satisfied customers trust Senotrams for consistent, quality digital services.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We respect your time — most services are delivered quickly without compromising quality.",
  },
  {
    icon: Clock,
    title: "Available Daily",
    description:
      "We're here when you need us. Reach us via WhatsApp or in person any day of the week.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "Every client gets personal attention — we listen, advise, and tailor services to your needs.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "From graphic designs to web development, we don't settle for anything less than excellent.",
  },
  {
    icon: Users,
    title: "One-Stop Shop",
    description:
      "20+ services under one roof — no need to go anywhere else for your digital needs.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-[#F5B800]/3 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-10 w-80 h-80 bg-[#E8620A]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          {/* Top: Text content + badge */}
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B800]/20 bg-[#F5B800]/5 mb-6">
              <span className="text-[#F5B800] text-xs font-semibold tracking-wider uppercase">
                Why Choose Us?
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              The <span className="text-[#F5B800]">Smarter</span> Choice
              <br className="hidden sm:block" /> in Tanzania
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
              Senotrams is built to be your complete digital partner in Dar es Salaam —
              combining quality work, fast delivery, and genuine care for every client.
            </p>
          </div>

          {/* Middle: Large image */}
          <div className="w-full max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 pointer-events-none" />
              <img
                src="/images/WhatsApp Image 2026-02-21 at 15.44.27.jpeg"
                alt="Senotrams team or workspace — Why choose us"
                className="w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Bottom: Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group bg-[#111] border border-white/5 hover:border-[#F5B800]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5B800]/10 border border-[#F5B800]/20 flex items-center justify-center mb-5 group-hover:bg-[#F5B800]/20 transition-colors">
                    <Icon size={22} className="text-[#F5B800]" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mt-auto">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}