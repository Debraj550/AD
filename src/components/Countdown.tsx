"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import { Heart, Sparkles, Calendar, Clock } from "lucide-react";
import beachPhoto from "@assets/20250207_181846.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import homePhoto from "@assets/20241015_163356.jpg";
import cafePhoto from "@assets/20241123_195845.jpg";
import koletolaPhoto from "@assets/20250208_140307 (1).jpg";
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const eventDate = useMemo(() => dayjs("2025-07-10 11:30:00"), []);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const now = dayjs();
      const difference = eventDate.diff(now, "second");

      if (difference <= 0) return;

      const newTimeLeft = {
        days: Math.floor(difference / (60 * 60 * 24)),
        hours: Math.floor((difference % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((difference % (60 * 60)) / 60),
        seconds: difference % 60,
      };

      setTimeLeft((prev) =>
        JSON.stringify(prev) !== JSON.stringify(newTimeLeft)
          ? newTimeLeft
          : prev
      );
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  const padWithZero = (num: number) => String(num).padStart(2, "0");

  // Using placeholder images for demo
  const photos = [koletolaPhoto, selfiePhoto, homePhoto, cafePhoto];

  const countdownData = [
    {
      label: "Days",
      value: timeLeft.days,
      icon: Calendar,
      color: "from-rose-500 to-pink-600",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      icon: Clock,
      color: "from-purple-500 to-violet-600",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      icon: Heart,
      color: "from-blue-500 to-indigo-600",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      icon: Sparkles,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  // Floating particles animation
  const FloatingParticles = () => {
    return null;
  };

  if (!mounted) {
    return <div className="min-h-[800px] bg-gray-100" />;
  }

  return (
    <section className="relative overflow-hidden min-h-[900px] flex items-center justify-center">
      {/* Enhanced Photo Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 h-full">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <img
                src={photo || "/placeholder.svg"}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Multi-layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 via-transparent to-purple-900/30" />
      </div>

      {/* Floating Particles */}
      {/* <FloatingParticles /> */}

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Heart className="w-8 h-8 text-rose-300" fill="currentColor" />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <Calendar className="w-5 h-5 text-rose-300" />
            <span className="text-white font-medium tracking-wider text-sm uppercase">
              Save The Date
            </span>
            <Calendar className="w-5 h-5 text-rose-300" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl mb-4 leading-tight">
            <span className="bg-gradient-to-r from-rose-200 via-white to-purple-200 bg-clip-text text-transparent">
              Counting Down to
            </span>
            <br />
            <span className="text-rose-300">Our Special Day</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {countdownData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                />

                {/* Main card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Number with animation */}
                  <div className="mb-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={item.value}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {padWithZero(item.value)}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wider">
                    {item.label}
                  </div>

                  {/* Decorative line */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-4">
              Every second brings us closer to forever
            </p>
            <div className="flex items-center justify-center gap-2 text-rose-300">
              <Heart className="w-5 h-5" fill="currentColor" />
              <span className="text-sm uppercase tracking-widest font-medium">
                July 10, 2025
              </span>
              <Heart className="w-5 h-5" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
}
