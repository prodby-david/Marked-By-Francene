import { Check } from "lucide-react";
import Link from "next/link";
import { ServiceProps } from "@/shared/types/ServiceProps";

const services: ServiceProps[] = [
  {
    title: "Soft Glam",
    price: "₱1,500",
    description: "Perfect for photoshoots or a fresh, everyday look.",
    features: ["Skin prep & priming", "Light/medium coverage", "Natural false lashes", "Soft hairstyling"],
  },
  {
    title: "Full Glam",
    price: "₱2,000",
    description: "Ideal for evening events and parties.",
    features: ["Full coverage foundation", "Contour & highlight", "Premium lashes", "Long-lasting setting spray", "Hairstyling included"],
    isPopular: true,
  },
  {
    title: "Bridal Package",
    price: "₱5,000",
    description: "Comprehensive package for your special day.",
    features: ["Trial makeup session", "Premium skin prep", "Airbrush option", "Touch-up kit", "Hairstyling & veil"],
  },
];

export default function ServicesSectionUI() {
  return (
    <section id="services" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-heading-color tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-label-color text-lg max-w-xl mx-auto">
            Choose the perfect package for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                relative flex flex-col p-8 rounded-xl bg-white transition-all
                ${service.isPopular 
                  ? "border-2 border-action-color shadow-sm" 
                  : "border border-gray-200 hover:border-gray-300"
                }
              `}
            >
              {service.isPopular && (
                <div className="absolute top-0 right-0 bg-action-color text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-heading-color">{service.title}</h3>
                <p className="text-label-color text-sm mt-2 min-h-10">
                  {service.description}
                </p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-heading-color">{service.price}</span>
                <span className="text-label-color text-sm">/ session</span>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-action-color shrink-0 mt-0.5" />
                    <span className="text-sm text-label-color">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={'/reserve'} 
                className={`
                  w-full py-2.5 rounded-lg text-sm font-medium text-center transition-colors
                  ${service.isPopular 
                    ? "bg-action-color text-white hover:bg-opacity-90" 
                    : "bg-white text-heading-color border border-gray-300 hover:bg-gray-50"
                  }
                `}
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}