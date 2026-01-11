"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaRss,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-white relative z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex justify-between items-center">
          {/* Left */}
          <div className="flex gap-4 items-center truncate">
            <span className="flex items-center gap-2">
              <Mail size={14} /> hadkaurfitness@email.com
            </span>

            <span className="hidden sm:flex items-center gap-2">
              <Phone size={14} /> +987 654 321 22
            </span>

            <span className="hidden lg:flex items-center gap-2">
              <MapPin size={14} />
              17110 116th Ave SE Unit A Renton
            </span>
          </div>

          {/* Right */}
          <div className="flex gap-3">
            <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaTwitter className="hover:text-orange-400 cursor-pointer" />
            <FaGooglePlusG className="hover:text-orange-400 cursor-pointer" />
            <FaRss className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-orange-500 font-extrabold text-xl tracking-wide">
          <Link href="/">  HADKAUR</Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-sm font-semibold uppercase">
            {[ "Classes", "Services", "About", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={item.toLowerCase()}
                  className="hover:text-orange-500 transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-orange-500 px-6 py-3 text-sm font-bold text-black uppercase hover:bg-orange-400 transition">
              Join Us Today
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden bg-orange-500 p-3"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-black/95 backdrop-blur transition-all duration-300 ${
            open ? "top-20 opacity-100" : "top-14 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-8 text-sm font-semibold uppercase">
            {["Home", "Classes", "Services", "Pages", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-orange-500 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              )
            )}

            <button className="mt-4 bg-orange-500 px-8 py-3 text-black font-bold uppercase">
              Join Us Today
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
