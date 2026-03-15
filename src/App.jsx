import { useState } from 'react' // 1. Added useState
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import Footer from './footer'
import Contact from './Contact' // 2. Added Contact import
import { motion, AnimatePresence } from 'framer-motion' // 3. Added AnimatePresence
import ScrollReveal from './ScrollReveal';

function App() {
  // 4. This is the switch! False = modal hidden, True = modal drops down
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    // Removed the gradient background from the main wrapper
    <main className="relative w-full overflow-hidden">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* LAYER 1: THE BACKGROUND SKY */}
      {/* Added bg-[url('/sky.jpg')] bg-cover bg-center to set your new image perfectly */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative bg-[url('/sky.jpg')] bg-cover bg-bottom bg-no-repeat">
        
        {/* LAYER 2: THE FLOATING CLOUDS */}
        {/* Cloud 1 (Left Side) - Slides in from the left */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/4 -left-32 w-[500px] pointer-events-none drop-shadow-lg"
        >
          <motion.img 
            src="/cloud 1.png" 
            alt="cloud 1"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1.2 }}
            className="w-full"
          />
        </motion.div>
        
        {/* Cloud 2 (Right Side) - Slides in from the right */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-10 -right-20 md:bottom-20 md:-right-10 w-[400px] md:w-[600px] pointer-events-none drop-shadow-lg"
        >
          <motion.img 
            src="/cloud 2.png" 
            alt="cloud 2"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1.2 }}
            className="w-full"
          />
        </motion.div>

        {/* LAYER 3: THE FOREGROUND TEXT */}
        {/* z-10 ensures this text sits on top of everything else */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mt-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Where ideas become <br />
            <span className="text-blue-800 inline-flex">
              {"Interactive.".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  animate={{ y: [0, -12, 0] }} 
                  transition={{
                    duration: 0.4, 
                    // MAGIC FIX: Wait 0.8s for the parent to finish sliding up, THEN start the ripple
                    delay: 0.8 + (idx * 0.04), 
                    ease: "easeOut",
                  }}
                  className="inline-block" 
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium max-w-2xl mx-auto mb-10">
            I design and build modern, responsive websites that transform ideas into engaging digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Swapped to an <a> tag pointing to your Projects section */}
            <a 
              href="#work" 
              className="inline-flex justify-center items-center bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              View My Work
            </a>
            
            {/* Swapped to an <a> tag pointing to your Pricing/Services section */}
            <a 
              href="#rates" 
              className="inline-flex justify-center items-center bg-white/80 backdrop-blur-md border border-white/40 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-sm"
            >
              See Services
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
      </section>

      

      {/* The Rest of the Website */}
      <About />
      <Projects />
      <Testimonials />
      <Pricing onOpenContact={() => setIsContactOpen(true)} />
      
      {/* 5. We pass the trigger down to the Footer */}
      <ScrollReveal>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      </ScrollReveal>

      {/* 6. The drop-down modal lives here at the very bottom! */}
      <AnimatePresence>
        {isContactOpen && (
          <Contact onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>

    </main>
  )
}

export default App