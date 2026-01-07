import { Star } from "lucide-react";
import { Navbar } from "@/shared/components/navigation/Navigation";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Bride",
    rating: 5,
    text: "Francene made me feel absolutely beautiful. The makeup lasted all night despite the dancing! She understood exactly the natural glow I wanted.",
  },
  {
    id: 2,
    name: "Mikaela Torres",
    role: "Debutante",
    rating: 5,
    text: "I booked the Full Glam package for my 18th birthday. She was so professional, hygienic, and fun to talk to during the session.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Model",
    rating: 5,
    text: "Francene's attention to detail is unmatched. Her skin prep is amazing, making the foundation look like second skin.",
  },
];

export default function ReviewsSectionUI() {
  return (
    <>
    <Navbar />
    
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
             <h2 className="text-3xl font-bold text-heading-color tracking-tight">
               Loved by Clients
             </h2>
             <p className="text-label-color mt-2">
               Don't just take our word for it. Here is what people are saying.
             </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
             <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
               ))}
             </div>
             <div className="text-xs font-medium text-heading-color">
               <span className="font-bold">5.0</span> Rating
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="p-6 rounded-xl border border-gray-200 bg-white hover:border-action-color/50 transition-colors"
            >

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                  />
                ))}
              </div>

              <p className="text-label-color text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-action-color font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-heading-color">{review.name}</p>
                  <p className="text-xs text-label-color uppercase tracking-wide">{review.role}</p>
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