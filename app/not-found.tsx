import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center gap-8">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="font-display text-[10rem] sm:text-[14rem] text-gradient leading-none tracking-wide">
          404
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide">
          PAGE NOT FOUND
        </h1>
        <p className="text-white/40 font-body max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 btn-shimmer text-black font-heading font-bold text-sm tracking-wider px-7 py-4 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
