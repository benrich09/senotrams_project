import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Music,
  Linkedin,
} from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0683 073 428",
    href: "https://wa.me/255683073428",
    color: "#25D366",
  },
  {
    icon: Phone,
    label: "Call / SMS",
    value: "0746 795 020",
    href: "tel:+255746795020",
    color: "#F5B800",
  },
  {
    icon: Phone,
    label: "Call / SMS",
    value: "0783 073 428",
    href: "tel:+255783073428",
    color: "#F5B800",
  },
  {
    icon: Mail,
    label: "Email",
    value: "senotrams@gmail.com",
    href: "mailto:senotrams@gmail.com",
    color: "#E8620A",
  },
];

const socials = [
  {
    platform: "Instagram",
    handle: "@senotrams",
    icon: Instagram,
    href: "https://instagram.com/senotrams",
    color: "#E1306C",
  },
  {
    platform: "Facebook",
    handle: "@senotrams",
    icon: Facebook,
    href: "https://facebook.com/senotrams",
    color: "#1877F2",
  },
  {
    platform: "TikTok",
    handle: "@senotrams",
    icon: Music,
    href: "https://tiktok.com/@senotrams",
    color: "#FE2C55",
  },
  {
    platform: "LinkedIn",
    handle: "@senotrams",
    icon: Linkedin,
    href: "https://linkedin.com/company/senotrams",
    color: "#0A66C2",
  },
];

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-24 px-5 sm:px-8 bg-black overflow-hidden">
      {/* Decorative divider */}
      <div className="divider-line mb-16 md:mb-20" />

      {/* Background glow effect */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main call-to-action card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#F5B800]/20 glow-border mb-12 md:mb-16">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#131313] via-[#131313] to-[#0f0f0f]" />

          {/* Decorative blurred blobs */}
          <div className="absolute -top-20 left-1/3 w-64 h-64 bg-[#F5B800]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 w-48 h-48 bg-[#E8620A]/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-8 sm:p-12 lg:p-14">
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                READY TO GET
                <br />
                <span className="text-gradient">STARTED?</span>
              </h2>
              <p className="text-gray-300 font-body text-lg leading-relaxed">
                Message us on WhatsApp, call, or email — we respond quickly and
                will help you figure out exactly what you need.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[260px]">
              <a
                href="https://wa.me/255683073428"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer flex items-center justify-center gap-2.5 bg-white text-black font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp Us Now
              </a>

              <a
                href="mailto:senotrams@gmail.com"
                className="flex items-center justify-center gap-2.5 border border-[#F5B800]/40 text-[#F5B800] font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-full hover:bg-[#F5B800]/10 transition-all duration-300"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </div>
          </div>
        </div>

        {/* Contact + Social + Map grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-bold text-white text-xl mb-3">
              Contact Details
            </h3>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.value}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[#131313] border border-[#1e1e1e] rounded-2xl px-5 py-4 hover:border-[#F5B800]/40 transition-colors"
                  aria-label={`${contact.label}: ${contact.value}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${contact.color}15`,
                      border: `1px solid ${contact.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: contact.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-semibold tracking-widest uppercase text-gray-500">
                      {contact.label}
                    </div>
                    <div className="font-heading font-bold text-white text-base group-hover:text-[#F5B800] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links + Map */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-4">
                Find Us Online
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-[#131313] border border-[#1e1e1e] rounded-2xl p-4 hover:border-[#F5B800]/40 transition-colors"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${social.color}15`,
                          border: `1px solid ${social.color}30`,
                        }}
                      >
                        <Icon size={20} style={{ color: social.color }} />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-white text-base group-hover:text-[#F5B800] transition-colors">
                          {social.platform}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-[#131313] border border-[#1e1e1e] rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#F5B800]" />
                <span className="font-heading font-bold text-white text-base">
                  Location
                </span>
              </div>

              <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.92!2d39.283!3d-6.792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b55c6e8e3b1%3A0x3e8a00a0b0f0e0f0!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1730000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Senotrams location - Dar es Salaam, Tanzania"
                />
              </div>

              <p className="text-gray-400 text-sm font-body">
                Dar es Salaam, Tanzania
                <br />
                {/* Add your exact street address here when available */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}