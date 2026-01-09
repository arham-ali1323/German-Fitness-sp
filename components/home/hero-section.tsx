import Image from "next/image";
import heroImage from "../../public/images/hero.png";
import heroBg from "../../public/images/Hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[60px] sm:pt-[50px] md:pt-[100px] lg:pt-[120px] xl:pt-[140px] pb-[25px]">

      {/* BACKGROUND IMAGE */}
      <Image
        src={heroBg}
        alt="Fitness Man Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* TEXT */}
      <div className="absolute inset-0 z-10">
        {/* OBTAIN – top left */}
        <span
          className="
    absolute top-6 left-6
    uppercase font-montserrat font-black
    text-[3rem] tracking-wide text-white md:pt-16
    pt-[180px] pl-[0px] md:text-[6rem] xl:text-[8rem]
  "
        >
          OBTAIN
        </span>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="uppercase font-montserrat leading-none text-white/90">
            <span className="block text-[6rem] sm:text-[8rem] md:text-[14rem] xl:text-[18rem]">
              FITNESS
            </span>
          </h1>
        </div>

        {/* GOAL – bottom right */}
        <span
          className="
    absolute bottom-6 right-6
    uppercase font-montserrat font-bold
    text-[3rem] tracking-wide text-white md:pb-16
    pb-[180px] pr-[0px] md:text-[6rem] xl:text-[8rem]
  ">
          GOAL
        </span>
      </div>

      {/* IMAGE (center, above text) */}
      <div className="relative z-20 transition-transform duration-500 ease-out hover:scale-105"> <Image src={heroImage} alt="Fitness Man" width={820} priority className="mx-auto" /> </div>

    </section>
  );
}
