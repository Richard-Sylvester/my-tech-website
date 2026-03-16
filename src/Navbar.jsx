import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl">
      
      {/* THE MAIN PILL */}
      <div className="bg-white/30 backdrop-blur-lg border border-white/20 px-4 md:px-6 py-3 md:py-4 rounded-full flex justify-between items-center shadow-xl relative z-20">
        
        <div className="font-black text-sm sm:text-base md:text-xl tracking-tighter text-gray-800 truncate mr-2">
          RICHARD SYLVESTER
        </div>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 uppercase tracking-widest items-center">
          <a href="#work" className="hover:text-blue-600 transition">Work</a>
          <a href="#rates" className="hover:text-blue-600 transition">Rates</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          
          {/* DESKTOP BUTTON: Only shows on md screens and up */}
          <button 
            onClick={onOpenContact}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform shrink-0 ml-4"
          >
            LET'S TALK
          </button>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-white/40 hover:bg-white/60 rounded-full text-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* THE MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/30 backdrop-blur-lg border border-white/20 px-4 md:px-6 py-3 md:py-4 rounded-full flex justify-between items-center shadow-xl relative z-20">
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-4 text-sm font-bold text-gray-800 uppercase tracking-widest hover:bg-gray-100 transition">Work</a>
            <a href="#rates" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-4 text-sm font-bold text-gray-800 uppercase tracking-widest hover:bg-gray-100 transition">Rates</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-4 text-sm font-bold text-gray-800 uppercase tracking-widest hover:bg-gray-100 transition">About</a>
            
            {/* MOBILE BUTTON: Sits at the bottom of the dropdown */}
            <div className="w-full px-4 pt-2 pb-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false); // 1. Close the menu
                  onOpenContact();            // 2. Open the contact modal
                }}
                className="w-full bg-black text-white py-3 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-colors"
              >
                LET'S TALK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;