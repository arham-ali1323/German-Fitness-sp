"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import whyChooseUsImage from "@/public/images/why-choose-us.jpg";


export default function WhyChooseUs() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2
          className=" font-orbitron uppercase text-white text-3xl md:text-5xl font-extrabold tracking-widest"
         >
          Why Choose Us
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] items-center">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block w-full h-full">
          <Image
            src={whyChooseUsImage}
            alt="Gym Training"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
            priority
          />

          {/* Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <span className="w-24 h-24 rounded-full bg-white/80 backdrop-blur flex items-center justify-center transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-black ml-1" />
            </span>
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="relative grid sm:grid-cols-2">
           {/* ORANGE CARD */}
          <div className="relative bg-orange-500 hover:bg-orange-600 p-6 text-black transition-all shadow-lg z-10 aspect-square flex flex-col justify-center">
            <div className="mb-4">
              <Image
                src="/icons/dumbbell.svg"
                alt="Dumbbell"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h4 className="uppercase font-extrabold text-lg tracking-wide mb-3 text-center">
              22,000 Square Feet Gym
            </h4>
            <p className="text-sm leading-relaxed text-center">
              Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve maximum results.
            </p>
          </div>

            {/* Dark CARD */}
          <div className="relative bg-zinc-900 hover:bg-zinc-800 p-6 text-white transition-all shadow-lg z-10 aspect-square flex flex-col justify-center">
            <div className="mb-4">
              <Image
                src="/icons/weight-loss.svg"
                alt="Gym Building"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h4 className="uppercase font-extrabold text-lg tracking-wide mb-3 text-center">
              22,000 Square Feet Gym
            </h4>
            <p className="text-sm leading-relaxed text-center">
              Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve maximum results.
            </p>
          </div>

          {/* DARK CARD */}
            <div className="relative bg-zinc-900 hover:bg-zinc-800 p-6 text-white transition-all  shadow-lg z-10 aspect-square flex flex-col justify-center">
            <div className="mb-4">
              <Image
                src="/icons/weight-loss.svg"
                alt="Weight Loss Programs"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h4 className="uppercase font-extrabold text-lg tracking-wide mb-3 text-center">
              Programs for Weight Loss
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed text-center">
             High-priority programs designed by professionals to help you reach your fitness goals.
            </p>
          </div>

         {/* ORANGE CARD */}
          <div className="relative bg-orange-500 hover:bg-orange-600 p-6 text-black transition-all shadow-lg z-10 aspect-square flex flex-col justify-center">
            <div className="mb-4">
              <Image
                src="/icons/high-intensity.svg"
                alt="High Intensity Studios"
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h4 className="uppercase font-extrabold text-lg tracking-wide mb-3 text-center">
              High Intensity Studios
            </h4>
            <p className="text-sm leading-relaxed text-center">
            Studios are designed for high-intensity classes with modern equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
