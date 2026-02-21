import {
  // Entertainment
  FaFilm,
  FaMusic,
  FaGamepad,
  // Connectivity
  FaWifi,
  // Design & Print
  FaPaintBrush,
  FaTshirt,
  FaRing,
  FaVideo,
  // Tech & Web
  FaGlobe,
  FaUsers,
  FaTools,
  // Online Services
  FaIdCard,
  FaCertificate,
  FaFileAlt,
  FaGraduationCap,
  FaBriefcase,
  FaLaptop,
  FaTrain,
} from "react-icons/fa";

import { MdPrint, MdComputer } from "react-icons/md"; // Some alternatives

export type Service = {
  id: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  title: string;
  description: string;
  category: string;
  highlight?: boolean;
};

export const services: Service[] = [
  // ──────────────────────────────────────────────
  //              Entertainment
  // ──────────────────────────────────────────────
  {
    id: "movies",
    icon: FaFilm,
    title: "Movies, Series & Documentaries",
    description:
      "Latest blockbusters, TV series, documentaries, and specific videos downloaded fresh for you.",
    category: "Entertainment",
    highlight: true,
  },
  {
    id: "songs",
    icon: FaMusic,
    title: "Songs & Music",
    description:
      "Full albums, singles, and curated playlists across all genres — Bongo, Afro, RnB, Pop & more.",
    category: "Entertainment",
  },
  {
    id: "games",
    icon: FaGamepad,
    title: "PS Games & Software Installation",
    description:
      "Install PS games, PC games, and any software on your device professionally and quickly.",
    category: "Entertainment",
  },

  // ──────────────────────────────────────────────
  //              Connectivity
  // ──────────────────────────────────────────────
  {
    id: "wifi",
    icon: FaWifi,
    title: "WiFi Services",
    description:
      "Fast, affordable internet access. Setup, sharing, and data solutions for homes and businesses.",
    category: "Connectivity",
    highlight: true,
  },

  // ──────────────────────────────────────────────
  //              Design & Print
  // ──────────────────────────────────────────────
  {
    id: "graphic-design",
    icon: FaPaintBrush,
    title: "Graphic Design",
    description:
      "Logos, posters, banners, flyers, and brand identity — designed to impress and convert.",
    category: "Design & Print",
    highlight: true,
  },
  {
    id: "digital-printing",
    icon: FaTshirt, // or MdPrint if you prefer a printer icon
    title: "Digital Printing",
    description:
      "Custom T-shirts, stickers, mabango, branded merchandise — print anything you can imagine.",
    category: "Design & Print",
  },
  {
    id: "harusi-cards",
    icon: FaRing,
    title: "Harusi & Michango Cards",
    description:
      "Beautiful wedding invitation cards, michango cards, and event materials designed with love.",
    category: "Design & Print",
  },
  {
    id: "ads",
    icon: FaVideo,
    title: "Video, Audio & Animation Ads",
    description:
      "Professional 2D & 3D animations, video ads, audio jingles, and photo-based advertisements.",
    category: "Design & Print",
    highlight: true,
  },

  // ──────────────────────────────────────────────
  //              Tech & Web
  // ──────────────────────────────────────────────
  {
    id: "web-dev",
    icon: FaGlobe,
    title: "Website Development",
    description:
      "Modern, mobile-responsive websites and web apps — from landing pages to full e-commerce.",
    category: "Tech & Web",
    highlight: true,
  },
  {
    id: "social-media",
    icon: FaUsers,
    title: "Social Media Management",
    description:
      "Content creation, scheduling, engagement, and growth strategies for all your platforms.",
    category: "Tech & Web",
  },
  {
    id: "computer-maintenance",
    icon: MdComputer, // or FaTools
    title: "Computer Maintenance",
    description:
      "Hardware repair, virus removal, OS installation, and full IT support for your devices.",
    category: "Tech & Web",
  },

  // ──────────────────────────────────────────────
  //              Online Services
  // ──────────────────────────────────────────────
  {
    id: "brela",
    icon: FaIdCard,
    title: "BRELA Registration",
    description:
      "Business name & company registration through BRELA — we handle all paperwork for you.",
    category: "Online Services",
  },
  {
    id: "rita",
    icon: FaCertificate,
    title: "RITA Services",
    description:
      "Birth certificates (new & renewal), verification, and all RITA document services simplified.",
    category: "Online Services",
    highlight: true,
  },
  {
    id: "loss-report",
    icon: FaFileAlt,
    title: "Loss Report",
    description:
      "Assistance with filing official loss reports for IDs, documents, and personal items.",
    category: "Online Services",
  },
  {
    id: "vyuo",
    icon: FaGraduationCap,
    title: "Vyuo Application",
    description:
      "University and college applications — from form filling to submission, we guide you through.",
    category: "Online Services",
  },
  {
    id: "job-application",
    icon: FaBriefcase,
    title: "Job Application",
    description:
      "CV writing, cover letters, and online job applications submitted on time and professionally.",
    category: "Online Services",
  },
  {
    id: "online-apps",
    icon: FaLaptop,
    title: "Any Online Application",
    description:
      "NIDA, passport, permits, scholarships, and any other online form or application sorted for you.",
    category: "Online Services",
  },
  {
    id: "tickets",
    icon: FaTrain,
    title: "SGR & Bus Tickets",
    description:
      "Book SGR train tickets and online bus tickets across Tanzania fast and hassle-free.",
    category: "Online Services",
    highlight: true,
  },
];

export const categories = [
  "All",
  "Entertainment",
  "Connectivity",
  "Design & Print",
  "Tech & Web",
  "Online Services",
] as const;