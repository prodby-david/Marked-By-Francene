import { CheckCircle2, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { ServiceProps } from "@/shared/types/ServiceProps";


const services: ServiceProps[] = [
  {
    title: "Minimal Glow",
    price: "₱1,500",
    description: "Perfect for photoshoots or a fresh, everyday look. Enhances your natural features.",
    features: [
      "Skin prep & priming",
      "Light to medium coverage",
      "Natural false lashes",
      "Soft hairstyling included"
    ],
  },
  {
    title: "Full Glam",
    price: "₱2,000",
    description: "Ideal for evening events, parties, or when you want to make a statement.",
    features: [
      "Full coverage foundation",
      "Contour & highlight",
      "Premium lashes",
      "Long-lasting setting spray",
      "Hairstyling included"
    ],
    isPopular: true,
  },
  {
    title: "Bridal Package",
    price: "₱5,000",
    description: "A comprehensive package to ensure you look radiant on your special day.",
    features: [
      "Trial makeup session",
      "Premium skin prep",
      "Airbrush option available",
      "Touch-up kit included",
      "Hairstyling & veil setting"
    ],
  },
];

export default function ServicesSectionUI() {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-5">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-action-color" />
            <span className="text-xs font-semibold text-action-color tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading-color mb-4">
            Choose Your Perfect Look
          </h2>
          <p className="text-label-color text-lg font-light">
            Whether it's a subtle glow or dramatic glam, we have a package tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                ${service.isPopular 
                  ? "border-action-color shadow-lg scale-105 md:scale-110 z-10" 
                  : "border-gray-100 shadow-sm"
                }
              `}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-action-color to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 fill-white" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-heading-color mb-2">{service.title}</h3>
                <p className="text-label-color text-sm leading-relaxed min-h-10">
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-heading-color">{service.price}</span>
                <span className="text-label-color text-sm font-medium"> / session</span>
              </div>

              <div className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 ${service.isPopular ? "bg-blue-50" : "bg-gray-50"}`}>
                      <CheckCircle2 className={`w-4 h-4 ${service.isPopular ? "text-action-color" : "text-gray-400"}`} />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={`/reserve?service=${encodeURIComponent(service.title)}`}
                className={`
                  block w-full py-3.5 px-6 rounded-xl text-center font-medium text-sm transition-all
                  ${service.isPopular 
                    ? "bg-action-color text-white hover:bg-blue-600 shadow-md hover:shadow-lg" 
                    : "bg-white text-heading-color border border-gray-200 hover:border-action-color hover:text-action-color"
                  }
                `}
              >
                Book This Look
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-label-color mb-4">
            Need a custom package for a large group or special event?
          </p>
          <Link 
            href="/contact" 
            className="text-action-color font-semibold hover:text-purple-600 transition-colors inline-flex items-center gap-1 group"
          >
            Contact us for a quote 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}