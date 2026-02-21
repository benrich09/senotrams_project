import { 
  Shield, 
  Zap, 
  Clock, 
  HeartHandshake, 
  Award, 
  Users, 
  MapPin 
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
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-[#F5B800]/3 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-10 w-80 h-80 bg-[#E8620A]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left — visual area */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Image container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/40">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                
                {/* Placeholder - replace with real photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#111] to-[#0a0a0a]">
                  <span className="text-6xl opacity-30">📍🏪</span>
                  <p className="text-white/30 text-sm font-medium tracking-wide text-center px-6">
                    Add your team / shop / workspace photo here
                  </p>
                </div>

                {/* Floating stats badges */}
                <div className="absolute -bottom-5 -right-5 bg-[#F5B800] text-black rounded-xl px-5 py-3.5 shadow-xl shadow-black/50">
                  <div className="text-3xl font-bold leading-none">500+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5">
                    Happy Clients
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-[#111] border border-[#F5B800]/20 rounded-xl px-4 py-3 shadow-xl shadow-black/40 flex items-center gap-2.5">
                  <MapPin size={18} className="text-[#F5B800]" />
                  <div>
                    <div className="text-xl font-bold text-white leading-none">Dar es Salaam</div>
                    <div className="text-[11px] text-white/50 font-medium">
                      -6.7924, 39.2083
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B800]/20 bg-[#F5B800]/5 w-fit">
                <span className="text-[#F5B800] text-xs font-semibold tracking-wider uppercase">
                  Why Choose Us?
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                The <span className="text-[#F5B800]">Smarter</span> Choice
                <br className="hidden sm:block" /> in Tanzania
              </h2>

              <p className="text-white/60 leading-relaxed text-lg">
                Senotrams is built to be your complete digital partner in Dar es Salaam — 
                combining quality work, fast delivery, and genuine care for every client.
              </p>

              {/* Reasons grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={reason.title}
                      className="group bg-[#111] border border-white/5 hover:border-[#F5B800]/30 
                               rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#F5B800]/10 border border-[#F5B800]/20 
                                    flex items-center justify-center mb-4 group-hover:bg-[#F5B800]/20 transition-colors">
                        <Icon size={18} className="text-[#F5B800]" />
                      </div>
                      <h3 className="font-semibold text-white mb-1.5">
                        {reason.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}