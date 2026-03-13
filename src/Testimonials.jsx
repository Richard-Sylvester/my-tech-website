const Testimonials = () => {
  return (
    // THE FIX: Added bg-gradient-to-b from-white to-gray-50 
    // This perfectly melts the white from the Projects section into the soft gray!
    <section id="testimonials" className="w-full pt-8 pb-32 relative z-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Word on the <span className="text-blue-600">Street.</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium">What it's like to work with Richie.</p>
        </div>

        {/* THE MINIMALIST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-600 font-medium leading-relaxed mb-8">
              "Working with Richie was seamless. The site loads instantly and the entire process was handled with absolute professionalism."
            </p>
            <div className="font-bold text-gray-900 text-sm uppercase tracking-wider">Upcoming Client 1</div>
          </div>

          {/* Card 2 - Staggered layout */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:mt-12">
            <p className="text-gray-600 font-medium leading-relaxed mb-8">
              "We needed a digital storefront that matched the quality of our work. The final product exceeded our expectations entirely."
            </p>
            <div className="font-bold text-gray-900 text-sm uppercase tracking-wider">Upcoming Client 2</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-600 font-medium leading-relaxed mb-8">
              "From wireframe to final launch, the communication was top-tier. Highly recommend if you want an agency-level website."
            </p>
            <div className="font-bold text-gray-900 text-sm uppercase tracking-wider">Upcoming Client 3</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;