import Banner from "@/components/contact/Banner-section";
import ClassesSection from "@/components/classes/Classes-Section";
import TrainerSection from "@/components/home/trainers-section";
import TestimonialSection from "@/components/home/testimonial";
import ClassTimeTable from "@/components/classes/ClassTimetable";

const CardioWorkoutPage = () => {
  return (
    <div className="bg-black">
      <Banner />
      <ClassesSection />
      <TrainerSection />
      <TestimonialSection />
      <ClassTimeTable/>
    </div>
  );
};

export default CardioWorkoutPage;