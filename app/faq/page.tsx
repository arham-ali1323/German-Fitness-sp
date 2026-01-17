import React from "react";
import Banner from "@/components/contact/Banner-section";
import FAQSection from "@/components/faq/FAQ-Section";
import SubscribeBanner from "@/components/contact/Subscribe-Banner";

const FAQ = () => {
  return (
    <div className="bg-black">
      <Banner />
      <FAQSection />
      <SubscribeBanner />
    </div>
  );
};

export default FAQ;
