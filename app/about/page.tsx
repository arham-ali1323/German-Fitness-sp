import React from "react";
import GymAboutSection from "@/components/about/Gym-Abbout";
import Banner from "@/components/contact/Banner-section";
import GymFeatures from "@/components/about/Gym-feature";
import TrainerSection from "@/components/home/trainers-section";
import TestimonialSection from "@/components/home/testimonial";
import SubscribeBanner from "@/components/contact/Subscribe-Banner";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Banner />
      <GymAboutSection />
      <GymFeatures />
      <TrainerSection />
      <TestimonialSection />
      <SubscribeBanner />
    </div>
  );
};

export default About;
