import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: The Narrative */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              About <span className="text-blue-600">Me.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Hi, I'm Richie. I'm a web developer and digital architect based in Bangalore. 
              </p>
              <p>
                With a formal background in Artificial Intelligence and Data Science, I approach web development differently. I don't just build websites that look good, I build intelligent, high-performance systems designed to scale and convert.
              </p>
              <p>
                Beyond the editor, I have a deep passion for videography and content creation. This multimedia perspective allows me to bridge the gap between heavy technical architecture and highly engaging, cinematic user experiences.
              </p>
            </div>

            {/* Signature or Sign-off */}
            <div className="mt-10 pt-10 border-t border-gray-100">
              <p className="font-bold text-gray-900 tracking-widest uppercase text-sm mb-2">The Mission</p>
              <p className="text-blue-600 font-medium italic">"Building the digital infrastructure for tomorrow's leading brands."</p>
            </div>
          </div>

          {/* RIGHT SIDE: The Visual Bento Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            
            {/* Box 1: Location */}
            <div className="bg-sky-50 rounded-3xl p-8 flex flex-col justify-center items-start border border-sky-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mb-4">
                📍
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-1">Bangalore</h3>
              <p className="text-gray-500 text-sm font-medium">Operating Globally</p>
            </div>

            {/* Box 2: The Stack */}
            <div className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-center items-start shadow-xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl mb-4 border border-slate-700">
                ⚡
              </div>
              <h3 className="text-white font-bold text-xl mb-1">The Stack</h3>
              <p className="text-slate-400 text-sm font-medium">React, Tailwind, Framer, Python</p>
            </div>

            {/* Box 3: The Creative Edge (Spans 2 columns) */}
            <div className="col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0">
                🎥
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-xl mb-1">Cinematic Eye</h3>
                <p className="text-gray-500 text-sm font-medium">Integrating videography and modern content creation into web experiences.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;