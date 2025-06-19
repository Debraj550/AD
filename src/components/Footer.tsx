"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Heart,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const socialLinks = [];

  const contactInfo = [
    { icon: Calendar, text: "July 10, 2025" },
    { icon: MapPin, text: "Garden Palace, Howrah" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 opacity-10">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              <Heart className="w-16 h-16 text-rose-400" fill="currentColor" />
            </motion.div>
          </div>
          <div className="absolute bottom-10 right-10 opacity-10">
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              <Calendar className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>
        </div>
      )}

      <div className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4">
                  Debraj & Ankita
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full mb-6" />
                <p className="text-white/80 leading-relaxed text-base md:text-lg max-w-md">
                  Join us as we celebrate our love and begin this beautiful
                  journey together. Your presence will make our special day even
                  more meaningful.
                </p>
              </div>

              {/* Social Links */}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">
                Event Details
              </h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <div className="p-2 bg-white/10 rounded-lg">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
          </div>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
              <span>Made with love for our special day</span>
            </div>
            <div className="text-white/60 text-sm">
              © 2025 Debraj & Ankita. All rights reserved.
            </div>
          </motion.div>

          {/* Floating hearts animation */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose-300/10"
                  initial={{
                    x:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerWidth
                        : 1200),
                    y:
                      typeof window !== "undefined"
                        ? window.innerHeight + 50
                        : 800,
                    rotate: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    y: -50,
                    rotate: 360,
                    scale: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 4,
                    ease: "linear",
                  }}
                  style={{ willChange: "transform" }}
                >
                  <Heart className="w-6 h-6" fill="currentColor" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
