import { 
  Mail, Phone, MapPin, MessageCircle, 
  Instagram, Facebook, Music, Linkedin   // Lucide icons
} from "lucide-react";

const contacts = [
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    value: "0683 073 428", 
    href: "https://wa.me/255683073428", 
    color: "#25D366" 
  },
  { 
    icon: Phone, 
    label: "Call / SMS", 
    value: "0627 733 041", 
    href: "tel:+255627733041", 
    color: "#F5B800" 
  },
  { 
    icon: Phone, 
    label: "Call / SMS", 
    value: "0745 760 527", 
    href: "tel:+255745760527", 
    color: "#F5B800" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    value: "senotrams@gmail.com", 
    href: "mailto:senotrams@gmail.com", 
    color: "#E8620A" 
  },
];

const socials = [
  { 
    platform: "Instagram", 
    handle: "@senotrams", 
    icon: Instagram, 
    href: "https://instagram.com/senotrams", 
    color: "#E1306C"   // Instagram's vibrant pinkish-red from gradient
  },
  { 
    platform: "Facebook", 
    handle: "@senotrams", 
    icon: Facebook, 
    href: "https://facebook.com/senotrams", 
    color: "#1877F2"   // Official Facebook blue
  },
  { 
    platform: "TikTok", 
    handle: "@senotrams", 
    icon: Music,       // Lucide doesn't have official TikTok → using Music (note or sound wave vibe)
    href: "https://tiktok.com/@senotrams", 
    color: "#FE2C55"   // TikTok's signature red/pink
  },
  { 
    platform: "LinkedIn", 
    handle: "@senotrams", 
    icon: Linkedin, 
    href: "https://linkedin.com/company/senotrams", 
    color: "#0A66C2"   // Official LinkedIn blue
  },
];

export default function ContactCTA() {
  return (
    <section className="relative py-24 px-5 sm:px-8 bg-black overflow-hidden">
      <div className="divider-line mb-24" />

      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#F5B800]/25 glow-border mb-16">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#131313] via-[#131313] to-[#0f0f0f]" />

          <div className="absolute -top-20 left-1/3 w-64 h-64 bg-[#F5B800]/10 rounded-full blur-[60px]" />
          <div className="absolute -bottom-20 right-1/4 w-48 h-48 bg-[#E8620A]/10 rounded-full blur-[60px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-10 sm:p-14">
            <div className="flex flex-col gap-5 text-center lg:text-left max-w-xl">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none">
                READY TO GET
                <br />
                <span className="text-gradient">STARTED?</span>
              </h2>
              <p className="text-gray-300 font-body leading-relaxed">
                Message us on WhatsApp, call, or email — we respond quickly and
                will help you figure out exactly what you need.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[240px]">
              <a
                href="https://wa.me/255683073428"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer text-black font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-full text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} />
                WhatsApp Us Now
              </a>
              <a
                href="mailto:senotrams@gmail.com"
                className="border border-[#F5B800]/40 text-[#F5B800] font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-full text-center hover:bg-[#F5B800]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={17} />
                Send an Email
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-white text-lg mb-2">
              Contact Details
            </h3>
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.value}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card flex items-center gap-4 bg-[#131313] border border-[#1e1e1e] rounded-2xl px-5 py-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color}22`, border: `1px solid ${c.color}33` }}
                  >
                    <Icon size={16} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="text-[11px] font-heading font-semibold tracking-widest uppercase text-gray-500">
                      {c.label}
                    </div>
                    <div className="font-heading font-bold text-white text-sm group-hover:text-[#F5B800] transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-heading font-bold text-white text-lg mb-4">
                Find Us Online
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.platform}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-card bg-[#131313] border border-[#1e1e1e] rounded-2xl p-4 flex items-center gap-3 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${s.color}22`, border: `1px solid ${s.color}33` }}
                      >
                        <Icon size={20} style={{ color: s.color }} />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-white text-sm group-hover:text-[#F5B800] transition-colors">
                          {s.platform}
                        </div>
                        <div className="text-gray-500 text-[11px]">{s.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#131313] border border-[#1e1e1e] rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F5B800]" />
                <span className="font-heading font-bold text-white text-sm">
                  Location
                </span>
              </div>
              <div className="img-placeholder w-full h-36 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 text-sm font-heading text-center">
                  📍 Add your Google Maps embed here
                </p>
              </div>
              <p className="text-gray-400 text-sm font-body">
                Tanzania — add your exact address here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}