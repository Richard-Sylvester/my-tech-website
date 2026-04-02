import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  return (
    // THE FIX: Added bg-gradient-to-b from-white to-gray-50 
    // This perfectly melts the white from the Projects section into the soft gray!
    <section id="testimonials" className="w-full pt-8 pb-32 relative z-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
 
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Word on the <span className="text-blue-600">Street.</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium">What it's like to work with Richie.</p>
        </div>    

        {/* THE FIX: Swapped the grid layout for a centered flex container */}
        <div className="flex justify-center items-center w-full px-4">
          <ScrollReveal>
            {/* Added max-w-2xl, w-full, and text-center to make it a featured quote */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full max-w-2xl mx-auto text-center">
              
              {/* Made the text slightly larger and italicized for that premium feel */}
              <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                "We needed a digital storefront that matched the quality of our work. The final product exceeded our expectations entirely."
              </p>
              
              {/* Client Name */}
              <div className="font-bold text-gray-900 text-sm uppercase tracking-wider">
                Guru - GSCD 
              </div>
              
            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;