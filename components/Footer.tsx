import Link from "next/link";
import { Zap } from "lucide-react";

const serviceLinks = [
  { label: "Movies & Series", href: "/services" },
  { label: "Graphic Design", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "Digital Printing", href: "/services" },
  { label: "Online Services", href: "/services" },
  { label: "WiFi Services", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#181818] pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#F5B800] rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-black fill-black" />
              </div>
              <div className="leading-none">
                <div>
                  <span className="font-display text-[1.35rem] tracking-widest text-white">
                    SENOT
                  </span>
                  <span className="font-display text-[1.35rem] tracking-widest text-[#F5B800]">
                    RAMS
                  </span>
                </div>
                <div className="text-[9px] font-heading tracking-[0.2em] text-[#F5B800]/70 uppercase -mt-0.5">
                  Digital Store
                </div>
              </div>
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-[220px]">
              Tanzania's all-in-one digital service center. Quality, speed, and care in every interaction.
            </p>
            <div className="flex gap-3">
              {["📸", "👍", "🎵", "💼"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-[#131313] border border-[#222] rounded-xl flex items-center justify-center text-base hover:border-[#F5B800]/50 transition-colors cursor-pointer"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-gray-400 text-sm hover:text-[#F5B800] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-gray-400 text-sm hover:text-[#F5B800] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "WhatsApp", value: "0683 073 428", href: "https://wa.me/255683073428" },
                { label: "Phone", value: "0746 795 020", href: "tel:+255746795020" },
                { label: "Email", value: "senotrams@gmail.com", href: "mailto:senotrams@gmail.com" },
              ].map((c) => (
                <a key={c.value} href={c.href} className="flex flex-col group">
                  <span className="text-[10px] font-heading uppercase tracking-wider text-gray-500">
                    {c.label}
                  </span>
                  <span className="text-gray-300 text-sm font-body group-hover:text-[#F5B800] transition-colors">
                    {c.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-line mb-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-[12px] font-body">
          <p>© {new Date().getFullYear()} Senotrams Digital Store. All rights reserved.</p>
          <p>Made with ❤️ in Tanzania</p>
        </div>
      </div>
    </footer>
  );
}