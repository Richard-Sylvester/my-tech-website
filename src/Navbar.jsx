// 1. Pass the onOpenContact function into the component
const Navbar = ({ onOpenContact }) => {
  return (
    // Adjusted width and top spacing for mobile
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl">
      {/* Kept your EXACT bg-white/30 backdrop-blur-lg to maintain the perfect glass effect! */}
      <div className="bg-white/30 backdrop-blur-lg border border-white/20 px-4 md:px-6 py-3 md:py-4 rounded-full flex justify-between items-center shadow-xl">
        
        {/* Added responsive text sizing so your full name fits beautifully on small screens */}
        <div className="font-black text-sm sm:text-base md:text-xl tracking-tighter text-gray-800 truncate mr-2">
          RICHARD SYLVESTER
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 uppercase tracking-widest">
          <a href="#work" className="hover:text-blue-600 transition">Work</a>
          <a href="#rates" className="hover:text-blue-600 transition">Rates</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </div>

        {/* 2. Add the onClick trigger to the button */}
        <button 
          onClick={onOpenContact}
          // Added shrink-0 and slight padding adjustments for mobile
          className="bg-black text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:scale-105 transition-transform shrink-0"
        >
          LET'S TALK
        </button>
      </div>
    </nav>
  );
};

export default Navbar;