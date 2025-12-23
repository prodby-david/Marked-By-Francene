import { ArrowRight, Star, Sparkles } from "lucide-react";
import Link from "next/link"; 
import Image from "next/image";


export default function HeroSectionUI(){

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-bg-color overflow-hidden">
        
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-input-color rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 px-5 flex flex-col md:flex-row items-center gap-x-30 mt-15">
          
          <div className="flex-1 space-y-6">

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-input-color w-fit mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-action-color fill-action-color" />
              <span className="text-xs font-medium text-label-color tracking-wide uppercase">
                Professional Makeup Artist
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center md:text-left font-bold text-heading-color leading-tight">
              Elevate Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-action-color to-purple-600">
                Natural Beauty
              </span>
            </h1>

            <p className="text-label-color text-sm md:text-md lg:text-lg max-w-lg mx-auto md:mx-0 font-light leading-relaxed text-center md:text-left">
              Marked By Francene brings out your best self for weddings, debuts, and special events. Book your session today.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-start">
              <Link 
                href="/signin" 
                className="flex items-center justify-center gap-2 px-8 py-2 md:py-3.5 text-sm font-medium w-40 text-white transition-all bg-action-color rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 active:scale-95"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/service-offered"
                className=" items-center justify-center gap-2 px-8 py-2 md:py-3.5 text-sm font-medium text-heading-color transition-all bg-white border border-input-color rounded-lg hover:bg-gray-50 hover:border-gray-300 active:scale-95"
              >
                Pick Your Look
              </Link>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-heading-color">5.0</span>
                <span className="text-sm text-label-color">(50+ Reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex-1 justify-around items-center hidden md:flex">

              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200 ">

                  <Image 
                  src={'/images/makeup.jpg'}
                  alt="Francene Applying Makeup"
                  priority
                  width={500}
                  height={500}
                  />
              </div>
              
          </div>

        </div>
      </section>
    )

}
    