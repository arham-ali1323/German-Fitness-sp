"use client";

import { useEffect, useState } from "react";

export default function FitnessTrainers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  const trainers = [
    {
      id: 1,
      name: "Marcus Stone",
      specialty: "Strength & Conditioning",
      experience: "12 years",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Alex Rivera",
      specialty: "HIIT & Performance",
      experience: "8 years",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Jake Wilson",
      specialty: "CrossFit Training",
      experience: "9 years",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop",
    },
    {
      id: 5,
      name: "David Chen",
      specialty: "Boxing & Cardio",
      experience: "11 years",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    },
    {
      id: 6,
      name: "Michael Brooks",
      specialty: "Bodybuilding",
      experience: "15 years",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
    },
  ];

  // Auto carousel for desktop row 1
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto carousel for desktop row 2
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto carousel for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % 6);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* ===================== DESKTOP ===================== */}
        <div className="hidden md:block space-y-16">

          {/* ROW 1 */}
          <div className="grid grid-cols-3 gap-6 items-center">

            {/* HEADING SPACE */}
            <div>
              <h2 className="text-4xl font-extrabold tracking-widest">
                MEET OUR
              </h2>
              <h3 className="text-4xl font-extrabold tracking-widest text-orange-600">
                FITNESS TRAINERS
              </h3>
            </div>

            {/* SLIDER */}
            <div className="col-span-2 relative overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {trainers.slice(0, 3).map((trainer) => (
                  <div
                    key={trainer.id}
                    className="min-w-[50%] lg:min-w-[45%] flex-shrink-0"
                  >
                    <TrainerCard trainer={trainer} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide2 * 33.33}%)` }}
            >
              {trainers.slice(2, 6).map((trainer) => (
                <div
                  key={trainer.id}
                  className="min-w-[33%] lg:min-w-[30%] flex-shrink-0"
                >
                  <TrainerCard trainer={trainer} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================== MOBILE ===================== */}
        <div className="md:hidden">
          <h2 className="text-3xl font-extrabold text-center mb-6">
            OUR TRAINERS
          </h2>

          <div className="relative overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentMobileSlide * 50}%)` }}
            >
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="min-w-[50%] flex-shrink-0"
                >
                  <TrainerCard trainer={trainer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== CARD ===================== */
function TrainerCard({ trainer }: any) {
  return (
    <div className="relative overflow-hidden border border-gray-800 hover:border-orange-600 transition group">
      <div className="aspect-[3/4] relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 p-5">
          <h3 className="text-xl font-bold">{trainer.name}</h3>
          <p className="text-orange-500 text-sm">{trainer.specialty}</p>
          <p className="text-gray-400 text-xs">{trainer.experience}</p>

          <button className="mt-3 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-sm font-semibold transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
