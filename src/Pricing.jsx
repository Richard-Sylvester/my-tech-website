import { motion } from 'framer-motion'

// 1. Pass the onOpenContact prop into the component
const Pricing = ({ onOpenContact }) => {
  return (
    <section id="rates" className="w-full  pt-8 pb-32 relative bg-gradient-to-b from-gray-50 to-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Let's build something <span className="text-blue-600">incredible.</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            No hidden fees. No surprise invoices. Just world-class web development that scales with your business.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {/* TIER 1: THE ANCHOR */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Launchpad</h3>
            <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">Perfect for local businesses needing a professional digital footprint.</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-gray-900">₹18k</span>
              <span className="text-gray-500 font-medium"> /project</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Custom 1-5 Page Website', 'Mobile Responsive Design', 'Basic SEO Setup', 'Contact Form Integration'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600 font-medium text-sm">
                  <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            {/* 2. Added onClick here */}
            <button onClick={onOpenContact} className="w-full py-4 rounded-full font-bold text-gray-900 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
              Start Project
            </button>
          </motion.div>

          {/* TIER 2: THE TARGET (Highlighted) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-700 shadow-2xl relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Blueprint</h3>
            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">The ultimate conversion engine for growing brands and agencies.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">₹25k</span>
              <span className="text-slate-400 font-medium"> /project</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Up to 8 Custom Pages', 'Premium Animations (Framer Motion)', 'CMS Integration (Blogs/Projects)', 'Advanced Technical SEO', 'Priority 3 Week Delivery'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-300 font-medium text-sm">
                  <svg className="w-5 h-5 text-blue-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            {/* 3. Added onClick here */}
            <button onClick={onOpenContact} className="w-full py-4 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-500 hover:scale-[1.02] transition-all shadow-lg">
              Start Project
            </button>
          </motion.div>

          {/* TIER 3: THE DECOY */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Empire</h3>
            <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">Full-scale web applications and massive digital infrastructures.</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-gray-900">Custom</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Full-Stack Web App (React/Node)', 'Complex API Integrations', 'Custom Dashboards & Auth', 'E-Commerce Infrastructure', 'Dedicated Monthly Retainer'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600 font-medium text-sm">
                  <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            {/* 4. Added onClick here */}
            <button onClick={onOpenContact} className="w-full py-4 rounded-full font-bold text-gray-900 bg-white border-2 border-gray-200 hover:border-gray-900 hover:text-gray-900 transition-colors">
              Let's Talk
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;