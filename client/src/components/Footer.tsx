import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary/10 py-10">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-greatvibes text-4xl text-primary mb-6"
        >
          Debraj & Ankita
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-dark/80"
        >
          We can't wait to celebrate with you!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a href="#" className="text-primary hover:text-dark transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary hover:text-dark transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary hover:text-dark transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-dark/70 text-sm"
        >
          &copy; {new Date().getFullYear()} Debraj & Ankita | With love
        </motion.p>
      </div>
    </footer>
  );
}
