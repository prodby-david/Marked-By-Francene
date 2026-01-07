"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
      
      <div className="container mx-auto px-6 max-w-3xl">
        
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-heading-color tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-label-color text-lg">
            Everything you need to know about booking your session.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-lg border transition-all duration-200 overflow-hidden
                ${openIndex === index 
                  ? "border-action-color ring-1 ring-action-color shadow-sm" 
                  : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`font-medium text-[15px] ${openIndex === index ? "text-action-color" : "text-heading-color"}`}>
                  {faq.question}
                </span>
                
                <div className={`transition-transform duration-200 ${openIndex === index ? "rotate-180 text-action-color" : "text-gray-400"}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div 
                className={`
                  transition-all duration-300 ease-in-out
                  ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <p className="px-5 pb-5 text-label-color text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-label-color text-sm">
            Still have questions?{" "}
            <a href="mailto:hello@marked.com" className="text-action-color font-medium hover:underline">
              Contact Support
            </a>
          </p>
        </div>

      </div>
    </section>
    </>
  );
}