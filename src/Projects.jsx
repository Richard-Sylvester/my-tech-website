import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="work" className="w-full bg-white pt-10 pb-24 relative z-20">
      
      {/* 1. THE SOCIAL PROOF BAR */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <p className="text-center text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">
          Powering digital growth for local leaders
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale">
          <h3 className="text-xl font-black">Guru Sai Constructions</h3>
          <h3 className="text-xl font-black text-gray-600">Client Two</h3>
          <h3 className="text-xl font-black text-gray-600">Client Three</h3>
          <h3 className="text-xl font-black text-gray-600">Client Four</h3>
        </div>
      </div>

      {/* 2. THE PREMIUM FADED CAROUSEL */}
      <div className="max-w-[100vw] overflow-hidden">
        
        {/* Section Title */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Featured <span className="text-blue-600">Work.</span>
          </h2>
        </div>

        {/* The Carousel Wrapper with Gradient Masks */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* THE MAGIC FADE ILLUSION (Stolen from your Testimonials!) */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* The Scrolling Container */}
          {/* Increased md:px-24 so the first card starts slightly indented behind the fade */}
          <div className="flex overflow-x-auto gap-6 px-6 md:px-24 pb-16 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* BIG CARD: Guru Sai Constructions (Now in premium bg-gray-50) */}
            <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group snap-center shrink-0 w-[85vw] md:w-[600px]">
              <div>
                <div className="bg-blue-100/60 text-blue-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-wide">
                  Completed
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Guru Sai Constructions</h3>
                <p className="text-gray-600 text-sm max-w-md">
                  A complete digital transformation for a leading construction firm. High-performance architecture built for lead generation and brand authority.
                </p>
              </div>
              
              {/* The Interactive Video Showcase */}
              <div className="w-full mt-8 rounded-2xl border-4 border-white shadow-inner overflow-hidden relative group bg-gray-200">
                <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-auto">
                  <a 
                    href="https://www.gurusaiconstructions.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-lg border border-white/40 text-blue-900 font-bold px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    View Live Site
                    <span>→</span>
                  </a>
                </div>
                <video 
                  src="/gurusai-demo.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-contain object-top transform group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* SMALL CARD 1: Upcoming Project 1 */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group snap-center shrink-0 w-[85vw] md:w-[400px]">
              <div>
                <div className="bg-orange-100/60 text-orange-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-wide">
                  Planning
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">E-Commerce Build</h3>
                <p className="text-gray-600 mb-6">Modern storefront with optimized checkout flow.</p>
              </div>
              <div className="w-full h-40 mt-auto bg-gray-200/50 rounded-xl border-4 border-white flex items-center justify-center text-gray-400 font-bold">Wireframing...</div>
            </div>

            {/* SMALL CARD 2: Upcoming Project 2 */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group snap-center shrink-0 w-[85vw] md:w-[400px]">
               <div>
                <div className="bg-orange-100/60 text-orange-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-wide">
                  Planning
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Landing Page</h3>
                <p className="text-gray-600 mb-6">High-conversion layout for local business.</p>
              </div>
              <div className="w-full h-40 mt-auto bg-gray-200/50 rounded-xl border-4 border-white flex items-center justify-center text-gray-400 font-bold">Designing...</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;