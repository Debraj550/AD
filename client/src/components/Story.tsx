import { motion } from "framer-motion";
import { debrajAnkitaPhotos } from "@/lib/images";

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-dark mb-3 gold-underline">Our Story</h2>
          <p className="text-accent mt-10 max-w-2xl mx-auto">Every love story is beautiful, but ours is our favorite.</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img 
              src={debrajAnkitaPhotos[0].src} 
              alt={debrajAnkitaPhotos[0].alt} 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="font-cormorant text-3xl text-primary mb-4">How We Met</h3>
            <p className="mb-6 text-dark/80">Our journey began with a chance encounter that felt like destiny. From the first conversation, we knew there was something special between us. Each moment we've spent together since has only strengthened our bond and deepened our love.</p>
            
            <h3 className="font-cormorant text-3xl text-primary mb-4">The Proposal</h3>
            <p className="text-dark/80">After years of creating beautiful memories together, the time felt right to take the next step in our journey. The proposal was intimate and heartfelt, just like our relationship. Now, we're excited to celebrate our engagement with our beloved friends and family.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
