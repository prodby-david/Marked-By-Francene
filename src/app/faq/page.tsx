"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Navbar } from "@/shared/components/navigation/Navigation";

interface FaqItem {
  question: string;
  answer: string;
}


const faqs: FaqItem[] = [
  {
    question: "Do you provide hair services as well?",
    answer: "Yes! All our packages (except 'Minimal Glow') include basic hairstyling. For intricate updos or specific hair requirements, please let us know in the booking notes so we can prepare.",
  },
  {
    question: "What brands of makeup do you use?",
    answer: "I use a curated kit of high-end and professional-grade products including NARS, Charlotte Tilbury, MAC, and Dior to ensure longevity and a flawless finish for your special day.",
  },
  {
    question: "Do I need to pay a deposit to secure my date?",
    answer: "Yes, a 50% non-refundable downpayment is required to block your date. The remaining balance is due on the day of the event.",
  },
  {
    question: "Can you travel to my location?",
    answer: "Absolutely! I offer on-location services. A travel fee may apply depending on the distance from my studio in Quezon City.",
  },
];

export default function FaqSectionUI() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <section id="faq" className="py-24 bg-gray-50 relative">
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6">
            <HelpCircle className="w-6 h-6 text-action-color" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading-color mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-label-color text-lg font-light">
            Everything you need to know about booking your session.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                ${openIndex === index ? "border-action-color/30 shadow-md" : "border-gray-200 hover:border-gray-300"}
              `}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? "text-action-color" : "text-heading-color"}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? "bg-blue-50 text-action-color" : "text-gray-400"}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <div 
                className={`
                  transition-all duration-300 ease-in-out
                  ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <p className="px-6 pb-6 text-label-color text-base leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-label-color text-sm">
            Still have questions?{" "}
            <a href="mailto:hello@marked.com" className="text-action-color font-semibold hover:underline">
              Email us directly
            </a>
          </p>
        </div>

      </div>
    </section>
    </>
  );
}