import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setResultMessage("Message sent successfully! I'll be in touch soon.");
        event.target.reset();
        setTimeout(() => onClose(), 3000);
      } else {
        setResultMessage(data.message);
      }
    } catch (error) {
      setResultMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Reduced outer padding to p-2 on mobile so the modal can be wider
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 pointer-events-auto">
      
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-md cursor-pointer"
      ></motion.div>

      <motion.div 
        initial={{ y: "-100vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100vh", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        // Changed rounded-[2rem] to rounded-2xl on mobile
        className="relative w-full max-w-6xl bg-white rounded-2xl md:rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden z-10 max-h-[95vh] overflow-y-auto"
      >
        
        {/* Tucked the close button tighter into the corner on mobile (top-4 right-4) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors z-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Reduced massive p-12 padding to p-6 on mobile, added pt-16 so text clears the X button */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center p-6 pt-16 md:p-12">
          
          {/* LEFT SIDE: The Invitation */}
          <div>
            {/* Shrunk text from 4xl to 3xl on mobile */}
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 md:mb-6">
              Ready to <span className="text-blue-600">level up?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium mb-8 md:mb-12 max-w-md leading-relaxed">
              Whether you need high-performance web architecture, a cinematic digital experience, or just want to chat about AI data pipelines, I'm ready to help.
            </p>

            {/* Shrunk gaps and font sizes for the contact info */}
            <div className="space-y-6 md:space-y-10">
              <div>
                <h4 className="text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase mb-1 md:mb-2">Direct Line</h4>
                <a href="mailto:richardsylvester865@gmail.com" className="text-lg md:text-3xl font-black text-gray-900 hover:text-blue-600 transition-colors break-all">
                  richardsylvester865@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 md:mb-2">Local / Global</h4>
                <p className="text-base md:text-xl font-bold text-gray-900">
                  Bangalore, India <span className="text-gray-400 font-medium text-sm md:text-base ml-1 md:ml-2">(Operating Everywhere)</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="relative group mt-4 md:mt-0">
            <form className="relative z-10 space-y-4 md:space-y-6" onSubmit={onSubmit}>
              
              {/* Reduced gap between inputs on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label htmlFor="name" className="text-xs md:text-sm font-bold text-gray-900 ml-2">Name</label>
                  {/* Reduced input padding on mobile (py-3) */}
                  <input type="text" name="name" id="name" required placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label htmlFor="email" className="text-xs md:text-sm font-bold text-gray-900 ml-2">Email</label>
                  <input type="email" name="email" id="email" required placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label htmlFor="phone" className="text-xs md:text-sm font-bold text-gray-900 ml-2">Phone <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="tel" name="phone" id="phone" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400" />
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label htmlFor="service" className="text-xs md:text-sm font-bold text-gray-900 ml-2">How can I help?</label>
                  <div className="relative">
                    <select name="service" id="service" defaultValue="Blueprint Package (₹25k)" className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer font-medium">
                      <option>Launchpad Package </option>
                      <option>Blueprint Package </option>
                      <option>Empire Package </option>
                      <option>Other !</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 md:right-2 flex items-center pointer-events-none text-gray-400">▼</div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label htmlFor="message" className="text-xs md:text-sm font-bold text-gray-900 ml-2">Message</label>
                {/* Changed rows="4" to rows="3" on mobile to save space */}
                <textarea name="message" id="message" required rows="3" placeholder="Tell me a bit about your project..." className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-gray-400 md:rows-4"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full font-bold text-base md:text-lg py-4 md:py-5 rounded-xl md:rounded-2xl transition-all shadow-lg ${
                  isSuccess 
                    ? 'bg-green-500 text-white shadow-green-500/25' 
                    : isSubmitting
                      ? 'bg-blue-400 text-white cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 shadow-blue-600/25'
                }`}
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent! ✓' : 'Send Message'}
              </button>

              {resultMessage && (
                <p className={`text-center text-xs md:text-sm font-bold mt-2 md:mt-4 ${isSuccess ? 'text-green-600' : 'text-red-500'}`}>
                  {resultMessage}
                </p>
              )}

            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;