import { Star, Quote } from "lucide-react";
import { Navbar } from "@/shared/components/navigation/Navigation";
import { Nav } from "react-day-picker";

// 1. Sample Data (Modify this later)
const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Bride",
    rating: 5,
    text: "Francene made me feel absolutely beautiful on my wedding day. The makeup lasted all night despite the tears and dancing! She understood exactly the natural glow I wanted.",
  },
  {
    id: 2,
    name: "Mikaela Torres",
    role: "Debutante",
    rating: 5,
    text: "I booked the Full Glam package for my 18th birthday and received so many compliments. She was so professional, hygienic, and fun to talk to during the session.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Photoshoot Model",
    rating: 5,
    text: "As a model, I've worked with many artists, but Francene's attention to detail is unmatched. Her skin prep is amazing, making the foundation look like second skin.",
  },
];

export default function ReviewsSectionUI() {
  return (
    <>

    <Navbar />
    
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      
      {/* Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* 2. Minimal Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-action-color/30"></span>
            <span className="text-xs font-bold tracking-widest text-action-color uppercase">Client Love</span>
            <span className="h-px w-8 bg-action-color/30"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading-color mb-6">
            Kind Words from <br className="hidden md:block" /> Happy Clients
          </h2>
        </div>

        {/* 3. Responsive Grid (1 col mobile, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <div className="relative mb-8">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100/50 -z-10 transform -scale-x-100" />
                <p className="text-label-color text-sm leading-relaxed font-light relative z-10">
                  "{review.text}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center text-action-color font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                  {review.name.charAt(0)}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-heading-color">{review.name}</span>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}