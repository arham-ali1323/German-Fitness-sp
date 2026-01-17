"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your gym hours?",
      answer: "We're open Monday-Friday from 5:00 AM to 11:00 PM, Saturday from 6:00 AM to 9:00 PM, and Sunday from 7:00 AM to 8:00 PM."
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes! We have certified personal trainers available for one-on-one sessions. Contact us to schedule a consultation and discuss your fitness goals."
    },
    {
      question: "What types of equipment do you have?",
      answer: "Our gym features state-of-the-art cardio machines, free weights, resistance training equipment, functional training area, and dedicated spaces for group classes."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year. Please visit the front desk or contact us at least 7 days before you want to freeze it."
    },
    {
      question: "Do you offer group classes?",
      answer: "We offer a variety of group classes including yoga, HIIT, spinning, strength training, and more. Check our schedule for class times and availability."
    },
    {
      question: "Is there a joining fee?",
      answer: "We occasionally have special promotions with no joining fee. Standard joining fees vary based on membership type. Contact us for current offers."
    },
    {
      question: "Can I bring a guest?",
      answer: "Yes, members can bring guests for a day pass fee. Guests must sign a waiver and follow all gym rules and policies."
    },
    {
      question: "Do you have parking available?",
      answer: "Yes, we have free parking available for all members and guests. Our parking lot is well-lit and monitored for your safety."
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers for your belongings (bring your own lock)."
    },
    {
      question: "Do you offer nutritional guidance?",
      answer: "Yes, our certified trainers can provide basic nutritional guidance. We also partner with nutritionists for more comprehensive meal planning services."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our gym, memberships, and services. Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <span className="text-orange-500 transition-transform duration-200">
                  {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-950">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-6">
              Our team is here to help you with any additional questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:+98765432122"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-200"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
