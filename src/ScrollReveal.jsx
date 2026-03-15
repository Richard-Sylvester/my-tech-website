import { motion } from 'framer-motion';

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      // Starts hidden and pushed down 50 pixels
      initial={{ opacity: 0, y: 50 }}
      
      // Animates to full opacity and original position when it enters the screen
      whileInView={{ opacity: 1, y: 0 }}
      
      // Controls the speed and smoothness
      transition={{ duration: 0.8, ease: "easeOut" }}
      
      // once: true ensures it only animates the first time they scroll past
      // margin: "-100px" means it waits until the element is a bit further up the screen before triggering
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;