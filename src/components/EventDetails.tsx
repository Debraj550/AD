"use client";

import thumbsupcat from "@assets/thumbsupcat.jpg";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Heart,
  Sparkles,
  Navigation,
  Phone,
  Star,
  Crown,
  Diamond,
} from "lucide-react";

type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

export default function EventDetails() {
  const timeline: TimelineItem[] = [
    {
      time: "11:00 AM Onwards",
      title: "Guests Arrival",
      description: "Welcome drinks and mingling 🍹",
    },
    {
      time: "12:00 PM",
      title: "Registry Ceremony & Ring Exchange",
      description: "Official registration and exchanging of rings 💍",
    },
    {
      time: "12:45 PM",
      title: "Celebrations",
      description: "Let the fun begin with music, games, and joy 🎉",
    },
    {
      time: "1:00 PM",
      title: "Lunch",
      description: "A festive meal filled with flavors and laughter 🍽️🎶",
    },
  ];

  const FloatingElements = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: typeof window !== "undefined" ? window.innerHeight + 50 : 800,
              rotate: 0,
              scale: 0.3,
            }}
            animate={{
              y: -100,
              rotate: 360,
              scale: [0.3, 0.8, 0.3],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            {i % 4 === 0 && (
              <Heart className="w-4 h-4 text-rose-300/40" fill="currentColor" />
            )}
            {i % 4 === 1 && (
              <Star
                className="w-3 h-3 text-yellow-300/40"
                fill="currentColor"
              />
            )}
            {i % 4 === 2 && <Diamond className="w-4 h-4 text-purple-300/40" />}
            {i % 4 === 3 && <Sparkles className="w-3 h-3 text-pink-300/40" />}
          </motion.div>
        ))}
      </div>
    );
  };

  const PulsingOrb = ({
    className,
    delay = 0,
  }: {
    className: string;
    delay?: number;
  }) => (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <section
      id="event"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <PulsingOrb
        className="top-20 left-20 w-64 h-64 bg-rose-500/20"
        delay={0}
      />
      <PulsingOrb
        className="top-40 right-20 w-56 h-56 bg-purple-500/20"
        delay={1}
      />
      <PulsingOrb
        className="bottom-20 left-40 w-48 h-48 bg-indigo-500/20"
        delay={2}
      />
      <PulsingOrb
        className="bottom-40 right-40 w-40 h-40 bg-pink-500/20"
        delay={3}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 opacity-10">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Crown className="w-16 h-16 text-yellow-400" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Diamond className="w-12 h-12 text-purple-400" />
          </motion.div>
        </div>
      </div>

      <FloatingElements />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Crown className="w-4 h-4 text-yellow-400" />
            </motion.div>
            <span className="text-white font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
              Royal Celebration
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Diamond className="w-4 h-4 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="font-serif text-4xl md:text-6xl mb-6 leading-tight"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <span className="bg-gradient-to-r from-rose-300 via-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
              The Engagement
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-rose-400 via-purple-400 via-pink-400 to-yellow-400 mx-auto rounded-full mb-8 shadow-lg shadow-purple-500/50"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Join us for an{" "}
            <span className="text-rose-300 font-semibold">
              unforgettable celebration
            </span>{" "}
            of love, commitment, and the beginning of our{" "}
            <span className="text-purple-300 font-semibold">
              forever journey
            </span>
          </motion.p>
        </motion.div>

        {/* Main Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="group relative perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 group-hover:scale-105" />
            <motion.div
              className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 group-hover:shadow-purple-500/25 transition-all duration-700 h-full flex flex-col"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.3)",
              }}
            >
              <div className="text-center space-y-8">
                {/* When Section */}
                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 rounded-full shadow-xl shadow-purple-500/30 mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Calendar className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl text-white mb-4 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                    When
                  </h3>
                  <div className="bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
                    <p className="font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      July 10th, 2025
                    </p>
                    <p className="text-white/80 text-lg">Thursday, 11:30 AM</p>
                  </div>
                </motion.div>

                {/* Decorative Divider */}
                <motion.div
                  className="flex items-center justify-center gap-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-purple-400" />
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Diamond className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <div className="w-16 h-px bg-gradient-to-r from-purple-400 via-rose-400 to-transparent" />
                </motion.div>

                {/* Where Section */}
                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 rounded-full shadow-xl shadow-rose-500/30 mb-4"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl text-white mb-4 bg-gradient-to-r from-purple-300 to-rose-300 bg-clip-text text-transparent">
                    Where
                  </h3>
                  <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
                    <p className="font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      Garden Palace
                    </p>
                    <p className="text-white/80 text-lg mb-4">
                      Kalabagan Rd, Howrah
                    </p>
                    <div className="flex items-center justify-center gap-2 text-purple-300">
                      <Navigation className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        West Bengal, India
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Event Type */}
                <motion.div
                  className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                  }}
                >
                  <p className="text-white/90 italic text-lg leading-relaxed font-light">
                    An{" "}
                    <span className="text-rose-300 font-semibold">
                      elegant engagement ceremony
                    </span>{" "}
                    followed by
                    <span className="text-purple-300 font-semibold">
                      {" "}
                      registry and grand celebration
                    </span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Location Card with Photo */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="group relative perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-rose-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 group-hover:scale-105" />
            <motion.div
              className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden group-hover:shadow-rose-500/25 transition-all duration-700 h-full flex flex-col"
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                boxShadow: "0 20px 40px -12px rgba(244, 63, 94, 0.3)",
              }}
            >
              {/* Header */}
              <div className="p-8 text-center bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 via-rose-500 to-indigo-500 rounded-full shadow-xl shadow-indigo-500/30 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Crown className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-serif text-3xl text-white mb-2 bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                  Venue
                </h3>
                <p className="text-white/80 text-lg">Garden Palace, Howrah</p>
              </div>

              {/* Photo Section */}
              <div className="relative flex-1 overflow-hidden">
                <motion.img
                  src={thumbsupcat || "/placeholder.svg"}
                  alt="Debraj and Ankita with friends at the venue"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Animated overlay effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-purple-500/10"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    className="bg-gradient-to-r from-black/40 via-purple-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-5 border border-white/20 shadow-xl"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(255,255,255,0.2)",
                    }}
                  >
                    <p className="font-bold text-xl mb-2 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                      Garden Palace
                    </p>
                    <p className="text-white/90 mb-4 text-base">
                      Kalabagan Rd, Howrah, West Bengal
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href="https://maps.google.com/?q=Garden+Palace,+Kalabagan+Rd,+Howrah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:via-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Clock className="w-4 h-4 text-indigo-400" />
              </motion.div>
              <span className="text-white font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                 Schedule
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              </motion.div>
            </motion.div>

            <motion.h3
              className="font-serif text-3xl md:text-5xl mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
            >
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 via-rose-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
                Day Timeline
              </span>
            </motion.h3>
            <p className="text-white/80 text-lg font-light">
              A perfect day orchestrated with love and elegance
            </p>
          </div>

          {/* Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
              whileHover={{ boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
            >
              {/* Vertical Timeline Line */}
              <motion.div
                className="absolute left-12 md:left-16 top-12 bottom-12 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 via-rose-400 to-yellow-400 rounded-full shadow-lg shadow-purple-500/30"
                initial={{ height: 0 }}
                whileInView={{ height: "calc(100% - 6rem)" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: "backOut",
                    }}
                    className="relative flex items-start gap-6 md:gap-8 group"
                  >
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 shadow-xl shadow-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-white shadow-lg" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </div>

                    {/* Timeline Content */}
                    <motion.div
                      className="flex-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group-hover:shadow-purple-500/20 group-hover:scale-102 transition-all duration-500"
                      whileHover={{
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
                      }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Clock className="w-4 h-4 text-white" />
                            </motion.div>
                            <span className="font-bold text-indigo-300 text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                              {item.time}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl md:text-2xl text-white mb-2 drop-shadow-lg">
                            {item.title}
                          </h4>
                          <p className="text-white/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Users className="w-6 h-6 text-purple-300" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.div
              className="bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-3xl mx-auto"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(255,255,255,0.2)",
              }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart
                    className="w-6 h-6 text-rose-400"
                    fill="currentColor"
                  />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Crown className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Diamond className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
              <h4 className="font-serif text-2xl md:text-3xl text-white mb-4 bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                We can't wait to celebrate with you!
              </h4>
              <p className="text-white/90 leading-relaxed text-lg font-light max-w-2xl mx-auto">
                Your presence will transform our special day into an{" "}
                <span className="text-rose-300 font-semibold">
                  extraordinary celebration
                </span>{" "}
                of love, joy, and the beginning of our{" "}
                <span className="text-purple-300 font-semibold">
                  beautiful forever
                </span>
                .
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
