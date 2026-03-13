// We pass in the onOpenContact function so the new button can trigger the modal
const Footer = ({ onOpenContact }) => {
  return (
    // REDUCED HEIGHT: Changed pt-32 to pt-20
    <footer className="w-full relative bg-[url('/sky.jpg')] bg-cover bg-bottom bg-no-repeat pt-20 pb-8 overflow-hidden">
      
      {/* THE SEAMLESS MELT (Shrunk from h-40 to h-24 to match the new size) */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      {/* Subtle cloud accent */}
      <img 
        src="/cloud 4.png" 
        alt="cloud" 
        className="absolute bottom-0 right-0 md:right-20 w-80 md:w-[500px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. THE ORGANIZED COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-blue-900/10 pt-8 pb-12">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-blue-950 tracking-tight mb-4">RICHARD SYLVESTER</h3>
            <p className="text-blue-900 font-medium max-w-sm mb-8 leading-relaxed">
              Building high-performance web architectures one at a time, for businesses of all sizes. Based in Bangalore, building for the world.
            </p>
            
            {/* The Premium Availability Badge */}
            <div className="flex items-center gap-3 w-max bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-blue-900/10 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-black text-blue-950 uppercase tracking-widest">Available for new projects</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-blue-950 font-black mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 font-medium text-blue-900/80 mb-6">
              <li><a href="#about" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">About</a></li>
              <li><a href="#work" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Featured Work</a></li>
              <li><a href="#rates" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Pricing & Rates</a></li>
              <li><a href="#testimonials" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Client Reviews</a></li>
            </ul>
          </div>

          {/* Socials & Contact Column */}
          <div>
            <h4 className="text-blue-950 font-black mb-6 uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-4 font-medium text-blue-900/80">
              {/* Phone - Updated with real tel link */}
              <li>
                <a href="tel:+919731369582" className="hover:text-blue-600 hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <span>📞</span> <span>+91 9731369582</span>
                </a>
              </li>
              {/* Email - Updated with real mailto link */}
              <li>
                <a href="mailto:richardsylvester865@gmail.com" className="hover:text-blue-600 hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <span>✉️</span> <span>richardsylvester865@gmail.com</span>
                </a>
              </li>
              {/* Instagram - Updated with real URL */}
              <li>
                <a href="https://instagram.com/richard_sylvester_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:translate-x-1 inline-flex items-center gap-2 transition-all group">
                  <span>📸</span> <span>@richard_sylvester_</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs ml-1">↗</span>
                </a>
              </li>
             {/*The New "Let's Talk" Button triggering the modal*/}      
            <li>
            <button 
              onClick={onOpenContact}
              className="bg-blue-600 text-white font-bold py-2.5 px-6 rounded-full text-sm hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md shadow-blue-600/20">
              Get in touch
            </button>
            </li>
            </ul>
          </div>

        </div>

        {/* 2. THE COPYRIGHT BOTTOM BAR */}
        <div className="pt-8 border-t border-blue-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-900/60 text-sm font-bold">
            © {new Date().getFullYear()} Richard Sylvester. All rights reserved.
          </p>
          <div className="text-blue-900/50 text-sm font-bold flex gap-6">
            <span className="text-blue-900/60 text-sm font-bold">Engineered by Richard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;