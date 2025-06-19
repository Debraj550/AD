"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Download, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string;
};

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryImage | null;
}

export default function GalleryModal({
  isOpen,
  onClose,
  image,
}: GalleryModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!image) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.src;
    link.download = `${image.alt}.jpg`;
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.alt,
          text: "Check out this beautiful photo from Debraj & Ankita's engagement!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Background floating hearts */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
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
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerHeight
                        : 800),
                    scale: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 1,
                  }}
                >
                  <Heart className="w-6 h-6" fill="currentColor" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute -top-12 right-0 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <div
              className={`relative ${
                isMobile ? "bg-white/10" : "bg-white/10 backdrop-blur-xl"
              } rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  loading="lazy"
                />

                {/* Gradient overlay for better text readability */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent h-32" />
              </div>

              {/* Image Info */}

              {/* Decorative corner elements */}
              {!isMobile && (
                <>
                  <div className="absolute top-4 left-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Heart
                        className="w-4 h-4 text-rose-300/50"
                        fill="currentColor"
                      />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Heart
                        className="w-3 h-3 text-purple-300/50"
                        fill="currentColor"
                      />
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
