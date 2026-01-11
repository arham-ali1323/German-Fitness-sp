"use client";

import { usePathname } from "next/navigation";

export default function PageHero() {
  const pathname = usePathname(); // current URL path, e.g., /contact
  const pageName = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ") || "Home"; // fallback to Home if path is "/"

  return (
    <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://demo.bravisthemes.com/hadkaur/wp-content/uploads/2023/08/Intro2.png')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="font-orbitron text-white text-4xl md:text-6xl font-bold tracking-widest uppercase">
          {pageName}
        </h1>

        {/* Breadcrumb */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm tracking-widest uppercase">
          <a href="/"><span className="text-white">Home</span></a>
          {pathname !== "/" && (
            <>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500 font-semibold">{pageName}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
