import { ArrowRight, Star } from "lucide-react";
import Link from "next/link"; 

export default function HeroSectionUI() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden border-b border-gray-200 py-12 md:py-20">
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-action-color opacity-10 blur-[100px]"></div>
            </div>

            <div className="container relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm transition-transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="flex h-2 w-2 rounded-full bg-action-color"></span>
                    <span className="text-[10px] md:text-xs font-semibold text-heading-color tracking-wide uppercase">
                        Now Accepting 2026 Bookings
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-heading-color tracking-tight leading-[1.1] max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                    Elevate Your <br />
                    <span className="text-action-color">Natural Beauty</span>
                </h1>

                <p className="text-label-color text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                    Professional bridal and event styling managed effortlessly. Book your session, track your history, and glow with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                    <Link 
                        href="/signin" 
                        className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm md:text-base font-semibold text-white transition-all bg-action-color rounded-xl hover:bg-opacity-90 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Book Appointment
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    
                    <Link 
                        href="/services"
                        className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm md:text-base font-semibold text-heading-color transition-all bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300"
                    >
                        View Packages
                    </Link>
                </div>

                <div className="flex items-center gap-2 pt-6 opacity-80 animate-in fade-in duration-1000 delay-500">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                U{i}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-1.5 pl-2">
                        <Star className="w-4 h-4 text-action-color fill-action-color" />
                        <span className="text-sm font-bold text-heading-color">5.0</span>
                        <span className="text-sm text-label-color">(50+ Reviews)</span>
                    </div>
                </div>

            </div>
        </section>
    );
}