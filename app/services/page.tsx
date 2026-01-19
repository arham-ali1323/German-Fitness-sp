import GymServicesSection from "@/components/services/GymServices";
import Banner from "@/components/contact/Banner-section";
import ClassesGridSection from "@/components/services/Classes-Grid";
import TrainerSection from "@/components/home/trainers-section";
import TestimonialSection from "@/components/home/testimonial";
import ScrollToTopWaterFill from "@/components/ui/back-to-top";

const Services = () => {
  return (
    <div className="bg-black">
      <Banner />
      <GymServicesSection />
      <ClassesGridSection />
      <TrainerSection />
      <TestimonialSection />
      <ScrollToTopWaterFill />
    </div>
  );
};

export default Services;
