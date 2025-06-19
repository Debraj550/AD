"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, Sparkles, Quote } from "lucide-react";
import river from "@assets/20250207_144239.jpg";
import propose from "@assets/propose.png";

export default function Story() {
  // Using placeholder for demo - replace with your actual images
  const riverPhoto = river;
  const proposePhoto = propose;
  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200/20"
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
              scale: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 3,
              ease: "linear",
            }}
          >
            <Heart className="w-8 h-8" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="story"
      className="relative py-32 bg-gradient-to-br from-rose-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Sparkles className="w-16 h-16 text-rose-400" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Heart className="w-12 h-12 text-purple-400" fill="currentColor" />
          </motion.div>
        </div>
      </div>

      <FloatingHearts />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-rose-100/50 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
            <span className="text-rose-700 font-medium tracking-wider text-sm uppercase">
              Our Journey
            </span>
            <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
          </div>

          <h2 className="font-serif text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              Our Love Story
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-purple-400 to-rose-400 mx-auto rounded-full" />
        </motion.div>

        {/* Main Story Content */}
        <div className="max-w-7xl mx-auto">
          {/* The Proposal Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-purple-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-white/50">
                <img
                  src={proposePhoto || "/placeholder.svg"}
                  alt="The Proposal in Goa"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2 text-rose-600 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Goa, 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 md:block hidden"
            >
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-rose-300/50" />
                <h3 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
                  The <span className="text-rose-500">Proposal</span>
                </h3>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Well, that happened fast! One moment, we were just getting to
                  know each other, and before we knew it, we had shared
                  countless laughs, a few silly fights, and endless adventures.
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-rose-200/50">
                  <div className="flex items-center gap-2 text-rose-600">
                    <Heart className="w-5 h-5" fill="currentColor" />
                    <span className="font-medium">The Beginning</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Journey Continues Section */}
        </div>

        {/* Bottom Decorative Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-rose-100/50 via-white/50 to-purple-100/50 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
              <div className="w-16 h-px bg-gradient-to-r from-rose-400 to-purple-400" />
              <Sparkles className="w-8 h-8 text-purple-500" />
              <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-rose-400" />
              <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
            </div>
            <h4 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
              And so our <span className="text-rose-500">adventure</span>{" "}
              continues...
            </h4>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From two hearts to one story, from individual dreams to shared
              hopes, we're ready to write the next chapter together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
