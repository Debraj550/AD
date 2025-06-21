"use client";

import { useEffect, useState, Suspense, lazy } from "react";
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

import SectionSkeleton from "@/components/SectionSkeleton";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load heavy components
const Hero = lazy(() => import("@/components/Hero"));
const Countdown = lazy(() => import("@/components/Countdown"));
const Story = lazy(() => import("@/components/Story"));
const EventDetails = lazy(() => import("@/components/EventDetails"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Footer = lazy(() => import("@/components/Footer"));
const GalleryModal = lazy(() => import("@/components/GalleryModal"));

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string;
};

type LoadingState = {
  hero: boolean;
  countdown: boolean;
  story: boolean;
  eventDetails: boolean;
  gallery: boolean;
  footer: boolean;
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [sectionsLoaded, setSectionsLoaded] = useState<LoadingState>({
    hero: false,
    countdown: false,
    story: false,
    eventDetails: false,
    gallery: false,
    footer: false,
  });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Preload critical sections first
    const loadSectionsSequentially = async () => {
      // Load hero first (most important)
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, hero: true }));
        setVisibleSections((prev) => new Set([...prev, "hero"]));
      }, 100);

      // Load countdown after hero
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, countdown: true }));
        setVisibleSections((prev) => new Set([...prev, "countdown"]));
      }, 300);

      // Load story section
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, story: true }));
        setVisibleSections((prev) => new Set([...prev, "story"]));
      }, 600);

      // Load event details
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, eventDetails: true }));
        setVisibleSections((prev) => new Set([...prev, "eventDetails"]));
      }, 900);

      // Load gallery (potentially heavy)
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, gallery: true }));
        setVisibleSections((prev) => new Set([...prev, "gallery"]));
      }, 1200);

      // Load footer last
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, footer: true }));
        setVisibleSections((prev) => new Set([...prev, "footer"]));
      }, 1500);
    };

    loadSectionsSequentially();
  }, []);

  useEffect(() => {
    const audioObj = new Audio("/assets/song.mp3");
    audioObj.loop = true;
    audioObj.volume = volume;
    setAudio(audioObj);

    const playPromise = audioObj.play();

    playPromise
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log("Autoplay was prevented, showing overlay");
        setShowPlayOverlay(true);
      });

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

  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatePresence>
        {showPlayOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 z-50 flex flex-col items-center justify-center p-4"
          >
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

      <Navbar />
      <main>
        {/* Hero Section */}
        <Suspense fallback={<SectionSkeleton type="hero" />}>
          {sectionsLoaded.hero && visibleSections.has("hero") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
            </motion.div>
          )}
        </Suspense>

        {/* Countdown Section */}
        <Suspense fallback={<SectionSkeleton type="countdown" />}>
          {sectionsLoaded.countdown && visibleSections.has("countdown") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Countdown />
            </motion.div>
          )}
        </Suspense>

        {/* Story Section */}
        <Suspense fallback={<SectionSkeleton type="story" />}>
          {sectionsLoaded.story && visibleSections.has("story") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Story />
            </motion.div>
          )}
        </Suspense>

        {/* Event Details Section */}
        <Suspense fallback={<SectionSkeleton type="eventDetails" />}>
          {sectionsLoaded.eventDetails &&
            visibleSections.has("eventDetails") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <EventDetails />
              </motion.div>
            )}
        </Suspense>

        {/* Gallery Section */}
        <Suspense fallback={<SectionSkeleton type="gallery" />}>
          {sectionsLoaded.gallery && visibleSections.has("gallery") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Gallery onImageClick={openModal} />
            </motion.div>
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<SectionSkeleton type="footer" />}>
        {sectionsLoaded.footer && visibleSections.has("footer") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Footer />
          </motion.div>
        )}
      </Suspense>

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
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

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

          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Gallery Modal */}
      <Suspense fallback={<LoadingSpinner />}>
        {modalOpen && (
          <GalleryModal
            isOpen={modalOpen}
            onClose={closeModal}
            image={selectedImage}
          />
        )}
      </Suspense>
    </div>
  );
}
