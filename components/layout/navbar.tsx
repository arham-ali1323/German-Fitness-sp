"use client";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-white relative z-50">
      {/* ================= TOP BAR ================= */}
     <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-xs text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex justify-between items-center">

    {/* LEFT */}
    <div className="flex gap-4 items-center truncate">
      <Link href="mailto:hadkaurfitness@email.com">
        <span className="flex items-center gap-2 cursor-pointer transition-all duration-200 hover:text-yellow-300 hover:scale-105">
          <Mail size={14} />
          hadkaurfitness@email.com
        </span>
      </Link>

      <Link href="tel:+98765432122">
        <span className="hidden sm:flex items-center gap-2 cursor-pointer transition-all duration-200 hover:text-orange-300 hover:scale-105">
          <Phone size={14} />
          +987 654 321 22
        </span>
      </Link>

      <Link href="https://www.google.com/maps">
        <span className="hidden lg:flex items-center gap-2 cursor-pointer transition-all duration-200 hover:text-orange-300 hover:scale-105">
          <MapPin size={14} />
          17110 116th Ave SE Unit A Renton
        </span>
      </Link>
    </div>

    {/* RIGHT */}
    <div className="flex gap-4 items-center">
      <FaFacebookF className="cursor-pointer text-lg transition-all duration-200 hover:text-blue-400 hover:scale-110" />
      <FaTwitter className="cursor-pointer text-lg transition-all duration-200 hover:text-sky-400 hover:scale-110" />
      <FaGooglePlusG className="cursor-pointer text-lg transition-all duration-200 hover:text-red-400 hover:scale-110" />
      <FaInstagram className="cursor-pointer text-lg transition-all duration-200 hover:text-pink-400 hover:scale-110" />
    </div>

  </div>
</div>



      {/* ================= MAIN NAV ================= */}
      <div className="backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-orange-500 font-extrabold text-xl tracking-wide">
            <Link href="/"> 
              <Image 
                src="/images/german-and-fitness.png" 
                alt="Gym-logo" 
                width={200}
                height={200}
                className="h-8 w-auto md:h-[6rem] lg:h-[10rem] transition-all duration-300"
              /> 
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-sm text-gray-600 font-bold uppercase">
            {["Classes", "Services", "About", "Blog", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item.toLowerCase()}
                  className="hover:text-orange-500 transition"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-orange-500 px-6 py-3 text-sm font-bold text-white uppercase hover:bg-orange-400 transition">
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
          className={`lg:hidden absolute left-0 w-full bg-black/95 backdrop-blur transition-all duration-300 ${open ? "top-20 opacity-100" : "top-14 opacity-0 pointer-events-none"
            }`}
        >
          <nav className="flex flex-col items-center gap-6 py-8 text-sm font-semibold uppercase">
            {["Classes", "Services", "About", "Blog", "Contact"].map(

              (item) => (
                <Link
                  key={item}
                  href={item.toLowerCase()}
                  className="hover:text-orange-500 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            <button className="mt-4 bg-orange-500 px-8 py-3 text-white text-sm font-bold uppercase">
              Join Us Today
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}


