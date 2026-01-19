// src/app/layout.js
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Association pour la Préservation de l'Œuvre du Dr de la Ferrière",
  description:
    "Association pour la préservation de l'œuvre du Dr Serge Raynaud de la Ferrière en Europe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
