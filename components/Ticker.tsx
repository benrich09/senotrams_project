import { 
  FaFilm, 
  FaMusic, 
  FaWifi, 
  FaPaintBrush, 
  FaPrint, 
  FaHeart, 
  FaGlobe, 
  FaBullhorn, 
  FaGamepad, 
  FaTools, 
  FaIdCard, 
  FaUniversity, 
  FaFileAlt, 
  FaGraduationCap, 
  FaBriefcase, 
  FaTicketAlt,
  FaVideo 
} from 'react-icons/fa';

const services = [
  { text: "Movies & Series",       icon: FaFilm },
  { text: "Music",                 icon: FaMusic },
  { text: "WiFi Services",         icon: FaWifi },
  { text: "Graphic Design",        icon: FaPaintBrush },
  { text: "Digital Printing",      icon: FaPrint },
  { text: "Harusi Cards",          icon: FaHeart },
  { text: "Web Development",       icon: FaGlobe },
  { text: "Social Media Mgmt",     icon: FaBullhorn },
  { text: "Software & Games",      icon: FaGamepad },
  { text: "Computer Maintenance",  icon: FaTools },
  { text: "BRELA Registration",    icon: FaIdCard },
  { text: "RITA Services",         icon: FaUniversity },
  { text: "Loss Report",           icon: FaFileAlt },
  { text: "Vyuo Application",      icon: FaGraduationCap },
  { text: "Job Applications",      icon: FaBriefcase },
  { text: "SGR & Bus Tickets",     icon: FaTicketAlt },
  { text: "Video & Animation Ads", icon: FaVideo },
];

export default function Ticker() {
  // Double the array for seamless infinite loop
  const doubledServices = [...services, ...services];

  return (
    <div className="relative w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-4 shadow-md overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-amber-500 to-transparent" />
      
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-amber-500 to-transparent" />

      <div className="ticker-wrapper flex animate-marquee whitespace-nowrap">
        {doubledServices.map((service, index) => (
          <div
            key={`${service.text}-${index}`}
            className="inline-flex items-center gap-3 px-8 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide text-black/90 hover:text-black transition-colors"
          >
            <service.icon className="text-xl md:text-2xl opacity-90" />
            <span>{service.text}</span>
            <span className="text-black/30 text-xl md:text-2xl leading-none mx-2">•</span>
          </div>
        ))}
      </div>

      {/* Optional second track for smoother continuous feel */}
      <div className="ticker-wrapper flex animate-marquee2 whitespace-nowrap">
        {doubledServices.map((service, index) => (
          <div
            key={`${service.text}-${index}-2`}
            className="inline-flex items-center gap-3 px-8 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide text-black/90 hover:text-black transition-colors"
          >
            <service.icon className="text-xl md:text-2xl opacity-90" />
            <span>{service.text}</span>
            <span className="text-black/30 text-xl md:text-2xl leading-none mx-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}