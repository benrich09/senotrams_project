import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senotrams Digital Store | All-in-One Digital Services Tanzania",
  description:
    "Quality movies, series, games, WiFi, graphic design, web development, digital printing, online services & more — your one-stop digital hub.",
  keywords:
    "Senotrams, digital store Tanzania, movies Tanzania, graphic design, web development, WiFi, printing, SGR tickets, RITA services",
  openGraph: {
    title: "Senotrams Digital Store",
    description: "All digital services in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
