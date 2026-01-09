"use client";

export default function ContactHero() {
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
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-widest uppercase">
          Contact Us 2
        </h1>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm tracking-widest uppercase">
          <span className="text-white">Home</span>
          <span className="text-orange-500">•</span>
          <span className="text-orange-500 font-semibold">Contact Us</span>
        </div>
      </div>
    </section>
  );
}
