import { 
  FaStar, 
  FaUserTie,        // Business Owner / professional
  FaGraduationCap,   // Student / university
  FaMicrophoneAlt,   // Event planner (mic for events/singing)
  FaLaptopCode,      // Entrepreneur / coder/business
  FaChalkboardTeacher, // Teacher
  FaGamepad          // Gamer
} from 'react-icons/fa';

const testimonials = [
  {
    name: "Amina Salehe",
    role: "Business Owner",
    text: "Senotrams designed my business logo and printed my uniforms. The quality was outstanding and delivery was super fast! Highly recommended.",
    icon: FaUserTie,
    stars: 5,
  },
  {
    name: "Brian Msigwa",
    role: "Student",
    text: "They handled my university application from start to finish. Got into my first choice! The team is very professional and helpful.",
    icon: FaGraduationCap,
    stars: 5,
  },
  {
    name: "Fatuma Hassan",
    role: "Event Planner",
    text: "The harusi cards they designed for my client were absolutely beautiful. Everyone asked where we got them. Will definitely use again!",
    icon: FaMicrophoneAlt,
    stars: 5,
  },
  {
    name: "John Kimaro",
    role: "Entrepreneur",
    text: "Got my BRELA registration done in record time and they built me a great website too. One-stop shop indeed — I didn't need to go anywhere else.",
    icon: FaLaptopCode,
    stars: 5,
  },
  {
    name: "Grace Mwambene",
    role: "Teacher",
    text: "They helped me get my RITA birth certificate renewal sorted quickly. The process was smooth and the team explained everything clearly.",
    icon: FaChalkboardTeacher,
    stars: 5,
  },
  {
    name: "David Swai",
    role: "Gamer",
    text: "Fast game installation and great WiFi setup. Very affordable prices. I've been a loyal customer for over a year now.",
    icon: FaGamepad,
    stars: 5,
  },
] as const;

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-24 px-5 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="divider-line mb-16 sm:mb-20 lg:mb-24" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-4">
          <span className="inline-flex items-center gap-2 border border-[#F5B800]/30 bg-[#F5B800]/10 rounded-full px-4 py-1.5 text-sm">
            <span className="font-heading font-semibold tracking-wider uppercase text-[#F5B800] text-[11px] sm:text-xs">
              Customer Love
            </span>
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight font-bold">
            WHAT THEY <span className="text-gradient">SAY</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#131313] border border-[#1e1e1e] rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:border-[#F5B800]/30 hover:shadow-xl hover:shadow-[#F5B800]/5"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#F5B800] text-lg sm:text-xl"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white/70 font-body text-base leading-relaxed flex-grow italic mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#222]">
                <div className="w-11 h-11 rounded-full bg-[#1e1e1e] flex items-center justify-center text-2xl flex-shrink-0 text-[#F5B800]/80">
                  <testimonial.icon />
                </div>

                <div>
                  <div className="font-heading font-semibold text-white text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-white/50 text-sm mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}