"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import athlete from "../../public/images/strength.png";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count.toLocaleString()}+</>;
}

export default function StatsSection() {
  return (
    <section className="relative bg-black overflow-hidden py-32">
      {/* smoky background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,90,30,0.25),transparent_60%)]" />
         <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <div className="relative">
            {/* Background text */}
            <span className="absolute top-0 left-0 w-full h-full text-[150px] md:text-[200px] font-extrabold text-white/10 uppercase select-none pointer-events-none"
              style={{ fontFamily: '"Plateia Bold", sans-serif', lineHeight: 1 }}>
              ABOUT
            </span>

            {/* Foreground main text */}
            <h2 className="uppercase font-extrabold text-orange-500 text-5xl md:text-6xl leading-[1.05] tracking-tight relative z-10"
              style={{ fontFamily: '"Plateia Bold", sans-serif', fontWeight: 700 }}>
              We are pushing <br />
              the limit of your <br />
              <span className="text-orange-500">core strength</span>
            </h2>
          </div>


          <p className="mt-6 text-gray-400 font-semibold max-w-md">
            we understand that your lifestyle changes, that’s why we’ve made fitness straightforward and stress free. Join today on a no lock-in contract membership and start achieving your fitness goals. We value flexibility at Jetts, with unlimited 24/7 access.
          </p>

          <button className="mt-8 px-8 py-4 border-2 border-orange-500 text-sm font-bold uppercase text-white hover:bg-orange-500 hover:text-black transition shadow-[0_0_20px_rgba(255,90,30,0.4)]">
            Get started today +
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* STAT CARDS */}
          <div className="space-y-10 md:absolute md:top-48 md:right-[-60px] md:z-0 mb-[100px]">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative bg-zinc-900/80 backdrop-blur rounded-2xl px-10 py-8 w-80 md:w-80 shadow-2xl border border-white/10 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center justify-end">
                  <h3 className="text-4xl font-extrabold text-white">
                    <span>
                      <span className="absolute top-4 right-4 w-8 h-[3px] bg-orange-500" />
                      <span className="absolute top-8 right-4 w-6 h-[3px] bg-orange-500" />
                      <p className="text-sm text-gray-400 uppercase tracking-widest">
                        Fitness trainee
                      </p>
                    </span>
                    <Counter target={251} />
                  </h3>

                </div>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="relative z-20 transition-transform duration-500 ease-out hover:scale-105 hidden md:block">
            <Image
              src={athlete}
              alt="Athlete"
              width={400}
              priority
              className="relative z-10 scale-110"
            />
          </div>
        </div>
      </div>

       {/* BACK STRIP (PARALLAX DEPTH) */}
      <div className="absolute bottom-28 right-0 w-full bg-zinc-900/80 uppercase font-bold tracking-widest py-8 transform skew-y-6 overflow-hidden z-10">
        <div className="flex animate-marquee-right w-max">
          <span className="inline-block">
            Cardio ✖ Bench Press ✖ Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ 
          </span>
          <span className="inline-block">
            Cardio ✖ Bench Press ✖ Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ 
          </span>
          <span className="inline-block">
            Cardio ✖ Bench Press ✖ Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ 
          </span>
          <span className="inline-block">
            Cardio ✖ Bench Press ✖ Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ 
          </span>
        </div>
      </div>

      {/* FRONT STRIP */}
      <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-black uppercase font-extrabold tracking-widest py-10 transform -skew-y-1 shadow-[0_0_30px_rgba(255,90,30,0.5)] overflow-hidden z-20">
        <div className="flex animate-marquee-right w-max text-lg md:text-xl">
          <span className="mr-10">
            Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ Cardio ✖ Bench Press ✖
          </span>
          <span className="mr-10">
            Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ Cardio ✖ Bench Press ✖
          </span>
          <span className="mr-10">
            Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ Cardio ✖ Bench Press ✖
          </span>
          <span className="mr-10">
            Dead Lift ✖ Pilates ✖ Dumbbell ✖ Plank ✖ Cardio ✖ Bench Press ✖
          </span>
        </div>
      </div>
    </section>
  );
}