"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  Sparkles,
  Music,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import GalleryModal from "@/components/GalleryModal";
import song from "@assets/song.mp3";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string;
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Initialize audio with placeholder
    const audioObj = new Audio(song); // Replace with your song
    audioObj.loop = true;
    audioObj.volume = volume;
    setAudio(audioObj);

    // Try to play automatically
    const playPromise = audioObj.play();

    playPromise
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log("Autoplay was prevented, showing overlay");
        setShowPlayOverlay(true);
      });

    // Cleanup
    return () => {
      audioObj.pause();
    };
  }, []);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
  }, [volume, audio]);

  const startAudio = (play = true) => {
    if (!audio) return;
    if (play)
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Playback error:", error);
        });
    setShowPlayOverlay(false);
  };

  const toggleMusic = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.log("Playback error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Floating music notes animation
  const FloatingNotes = () => {
    if (!isPlaying || isMobile) return null;

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/20"
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
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            <Music className="w-4 h-4" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Enhanced Play Overlay */}
      <AnimatePresence>
        {showPlayOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 z-50 flex flex-col items-center justify-center p-4"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerWidth
                        : 1200),
                    y:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerHeight
                        : 800),
                    scale: 0,
                    rotate: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: 360,
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                >
                  {i % 3 === 0 && (
                    <Heart
                      className="w-4 h-4 text-rose-300"
                      fill="currentColor"
                    />
                  )}
                  {i % 3 === 1 && (
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                  )}
                  {i % 3 === 2 && <Music className="w-3 h-3 text-purple-300" />}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
              className={`text-center text-white max-w-md relative z-10 ${
                isMobile ? "px-6" : ""
              }`}
            >
              <motion.div
                className="mb-8"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 rounded-full shadow-2xl shadow-purple-500/50 mb-6">
                  <Music className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Welcome to Our Engagement
              </motion.h2>

              <motion.p
                className="mb-8 text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                For the best experience, we recommend enabling our romantic
                background music to accompany your journey through our love
                story.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={() => startAudio(true)}
                  className="w-full bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl shadow-purple-500/50 flex items-center justify-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" fill="currentColor" />
                  Start Music & Enter
                </motion.button>

                <motion.button
                  onClick={() => startAudio(false)}
                  className={`w-full ${
                    isMobile
                      ? "bg-white/20 border border-white/30"
                      : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                  } text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <VolumeX className="w-5 h-5" />
                  Enter Without Music
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Notes */}
      {/* <FloatingNotes /> */}

      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Story />
        <EventDetails />
        <Gallery onImageClick={openModal} />
      </main>
      <Footer />

      {/* Enhanced Music Control Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
      >
        <motion.button
          onClick={toggleMusic}
          className={`group relative overflow-hidden ${
            isMobile
              ? "bg-gradient-to-r from-purple-600 to-rose-600 border border-white/20"
              : "bg-gradient-to-r from-purple-600 to-rose-600 backdrop-blur-xl border border-white/20"
          } text-white p-4 rounded-full shadow-2xl shadow-purple-500/50 transition-all duration-300`}
          whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
          whileTap={{ scale: 0.95 }}
          style={{ willChange: "transform" }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Icon with animation */}
          <motion.div
            className="relative z-10 flex items-center gap-2"
            animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6" fill="currentColor" />
            )}
            {!isMobile && (
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {isPlaying ? "Pause" : "Play"}
              </span>
            )}
          </motion.div>

          {/* Pulse effect when playing */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </motion.button>

        {/* Volume Control - Desktop Only */}
        {!isMobile && (
          <motion.div
            className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <div className="bg-black/80 backdrop-blur-xl rounded-lg p-3 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-medium">Volume</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
                className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        image={selectedImage}
      />

      {/* Custom CSS for volume slider */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
