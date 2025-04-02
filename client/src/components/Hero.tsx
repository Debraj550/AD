import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";

export default function Hero() {
  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      window.scrollTo({
        top: storySection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Background images including our couple photos
  const backgroundImages = [
    beachPhoto,
    resortPhoto,
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Animation for background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section 
      id="hero" 
      className="w-full min-h-screen flex items-center justify-center relative py-24 overflow-hidden"
    >
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center h-full w-full" 
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              filter: 'brightness(0.7)'
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay with animated particles for elegant effect */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white font-montserrat tracking-widest text-lg mb-4"
        >
          WE ARE GETTING ENGAGED
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-greatvibes text-6xl md:text-8xl text-white mb-6"
        >
          Debraj & Ankita
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white font-cormorant text-2xl md:text-3xl mb-10"
        >
          10 July, 2025
        </motion.p>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-1 bg-[hsl(var(--gold))] mx-auto mb-10"
        ></motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={scrollToStory}
          className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Our Story
        </motion.button>
      </motion.div>
    </section>
  );
}
