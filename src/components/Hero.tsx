"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import beachCarryPhoto from "@assets/20250208_140307 (1).jpg";
import riverPhoto from "@assets/20250207_144239.jpg";
import groupPhoto from "@assets/20250206_133038.jpg";
import homePhoto from "@assets/20241015_163356.jpg";
import cafePhoto from "@assets/20241123_195845.jpg";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToStory = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      window.scrollTo({
        top: storySection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Using placeholder images for demo
  const backgroundImages = [beachPhoto, resortPhoto];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      },
      isMobile ? 8000 : 6000
    ); // Slower on mobile

    return () => clearInterval(interval);
  }, [backgroundImages.length, isMobile]);

  // Reduced floating hearts for mobile
  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/20"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: typeof window !== "undefined" ? window.innerHeight + 50 : 800,
              rotate: 0,
              scale: 0.3,
            }}
            animate={{
              y: -50,
              rotate: 360,
              scale: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 3,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            <Heart className="w-4 h-4" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: isMobile ? 1 : 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: isMobile ? 1 : 0.95 }}
          transition={{ duration: isMobile ? 1 : 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      {!isMobile && (
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 via-transparent to-purple-900/20"></div>
      )}

      {/* Floating Hearts - Desktop Only */}
      <FloatingHearts />

      {/* Decorative Elements - Desktop Only */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              <Sparkles className="w-4 h-4 text-pink-300" />
            </motion.div>
          </div>
        </>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: isMobile ? 0.8 : 1.2, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-4xl"
      >
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: isMobile ? "easeOut" : "backOut",
          }}
          className={`inline-flex items-center gap-2 ${
            isMobile
              ? "bg-white/20 border border-white/30"
              : "bg-white/10 backdrop-blur-sm border border-white/20"
          } rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8`}
        >
          <Heart
            className="w-3 h-3 md:w-4 md:h-4 text-rose-300"
            fill="currentColor"
          />
          <span className="text-white font-medium tracking-wider text-xs md:text-sm uppercase">
            We Are Getting Engaged
          </span>
          <Heart
            className="w-3 h-3 md:w-4 md:h-4 text-rose-300"
            fill="currentColor"
          />
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-4 leading-none"
          style={{
            fontFamily: "Georgia, serif",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          <span className="bg-gradient-to-r from-rose-200 via-white to-purple-200 bg-clip-text text-transparent">
            Debraj
          </span>
          <span className="text-rose-300 mx-2 md:mx-4">&</span>
          <span className="bg-gradient-to-r from-purple-200 via-white to-rose-200 bg-clip-text text-transparent">
            Ankita
          </span>
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative mb-8 md:mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px top-1/2 transform -translate-y-1/2"></div>
          <div
            className={`relative ${
              isMobile ? "bg-black/40" : "bg-black/30 backdrop-blur-sm"
            } inline-block px-6 md:px-8 py-2 md:py-3 rounded-full border border-white/20`}
          >
            <p className="text-white font-serif text-xl md:text-2xl lg:text-3xl tracking-wide">
              10 July, 2025
            </p>
          </div>
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="space-y-4 md:space-y-6 mb-8 md:mb-12"
        >
          <p className="text-white/90 font-light text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            After surviving hundreds of breakups, weekly debates over "why one
            should watch a k-drama?" After countless breakups, we choose chaos
            over calm. Sorry, peace was never meant for us.
          </p>
          <p className="text-white/80 font-light text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-4">
            Now, welcome to watch us turn our endless arguments from episodes
            into a lifetime web series.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToStory}
            className="group relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-medium py-3 md:py-4 px-6 md:px-10 rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform" }}
          >
            <div
              className={`absolute inset-0 ${
                isMobile
                  ? ""
                  : "bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              }`}
            ></div>
            <Heart
              className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
              fill="currentColor"
            />
            <span className="relative z-10 tracking-wide text-sm md:text-base">
              Our Love Story
            </span>
            {!isMobile && (
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            )}
          </motion.button>
        </motion.div>

        {/* Scroll Indicator - Desktop Only */}
      </motion.div>
    </section>
  );
}
