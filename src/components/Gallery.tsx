("use client");
import { debrajAnkitaPhotos } from "@/lib/images";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import beachCarryPhoto from "@assets/20250208_140307 (1).jpg";
import riverPhoto from "@assets/20250207_144239.jpg";
import groupPhoto from "@assets/20250206_133038.jpg";
import homePhoto from "@assets/20241015_163356.jpg";
import cafePhoto from "@assets/20241123_195845.jpg";
import p1 from "@assets/p1.jpg";
import p2 from "@assets/p2.jpg";
import p3 from "@assets/p3.jpg";
import p4 from "@assets/p4.jpg";
import p5 from "@assets/p5.jpg";
import p6 from "@assets/p6.jpg";
import p7 from "@assets/p7.jpg";
import p8 from "@assets/p8.jpg";
import propose from "@assets/propose.png";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Sparkles, Camera, Eye } from "lucide-react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string;
};

interface GalleryProps {
  onImageClick: (image: GalleryImage) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: beachPhoto,
      alt: "Engagement Photo 1",
      category: "engagement",
    },
    {
      id: 2,
      src: p1,
      alt: "Couple Photo 1",
      category: "couple",
    },
    {
      id: 3,
      src: p2,
      alt: "Travel Photo 1",
      category: "travel",
    },
    {
      id: 4,
      src: p3,
      alt: "Engagement Photo 2",
      category: "engagement",
    },
    {
      id: 5,
      src: p4,
      alt: "Couple Photo 2",
      category: "couple",
    },
    {
      id: 6,
      src: p5,
      alt: "Travel Photo 2",
      category: "travel",
    },
    {
      id: 7,
      src: p6,
      alt: "Engagement Photo 3",
      category: "engagement",
    },
    {
      id: 8,
      src: p7,
      alt: "Couple Photo 3",
      category: "couple",
    },
    {
      id: 9,
      src: p8,
      alt: "Travel Photo 3",
      category: "travel",
    },
    {
      id: 10,
      src: resortPhoto,
      alt: "Travel Photo 3",
      category: "travel",
    },
    {
      id: 9,
      src: selfiePhoto,
      alt: "Travel Photo 3",
      category: "travel",
    },
    {
      id: 9,
      src: beachCarryPhoto,
      alt: "Travel Photo 3",
      category: "travel",
    },
    {
      id: 9,
      src: riverPhoto,
      alt: "Travel Photo 3",
      category: "travel",
    },
    {
      id: 9,
      src: groupPhoto,
      alt: "Travel Photo 3",
      category: "travel",
    },
    {
      id: 9,
      src: homePhoto,
      alt: "Travel Photo 3",
      category: "travel",
    },
  ];

  const categories = [{ id: "all", label: "All Photos", icon: Camera }];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const FloatingElements = () => {
    if (isMobile) return null;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
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
            <Camera className="w-5 h-5" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-rose-50 to-indigo-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 opacity-10">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              <Camera className="w-16 h-16 text-purple-400" />
            </motion.div>
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ willChange: "transform" }}
            >
              <Heart className="w-12 h-12 text-rose-400" fill="currentColor" />
            </motion.div>
          </div>
        </div>
      )}

      {/* <FloatingElements /> */}

      <div className="container mx-auto px-4 md:px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div
            className={`inline-flex items-center gap-3 ${
              isMobile
                ? "bg-purple-100 border border-purple-200"
                : "bg-purple-100/50 backdrop-blur-sm border border-purple-200/50"
            } rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8`}
          >
            <Camera className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            <span className="text-purple-700 font-medium tracking-wider text-xs md:text-sm uppercase">
              Our Memories
            </span>
            <Camera className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
              Photo Gallery
            </span>
          </h2>

          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-purple-400 via-rose-400 to-indigo-400 mx-auto rounded-full mb-6 md:mb-8" />

          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Capturing the beautiful moments of our journey together
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "text-white bg-gradient-to-r from-purple-500 to-rose-600 shadow-lg shadow-purple-500/30"
                    : isMobile
                    ? "text-gray-700 bg-white/80 border border-gray-200 hover:bg-purple-50"
                    : "text-gray-700 bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-purple-50 hover:border-purple-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm md:text-base">{category.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          layout
          transition={{ duration: 0.6 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={!isMobile ? { scale: 1.02, y: -5 } : {}}
              onClick={() => onImageClick(image)}
              layout
            >
              {/* Glow effect */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-rose-500/20 to-indigo-500/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              )}

              <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full h-full object-cover ${
                    isMobile
                      ? ""
                      : "transition-transform duration-700 group-hover:scale-110"
                  }`}
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${
                    isMobile
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-300`}
                >
                  {/* View icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`p-2 bg-white/20 ${
                        isMobile ? "" : "backdrop-blur-sm"
                      } rounded-full border border-white/30`}
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-rose-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, transparent)",
                      backgroundClip: "padding-box",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <div
            className={`${
              isMobile
                ? "bg-white/80 border border-white/50"
                : "bg-gradient-to-r from-purple-100/50 via-rose-100/50 to-indigo-100/50 backdrop-blur-sm border border-white/50"
            } rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto`}
          >
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Heart
                className="w-5 h-5 md:w-6 md:h-6 text-rose-500"
                fill="currentColor"
              />
              <Camera className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
            </div>
            <h4 className="font-serif text-xl md:text-2xl lg:text-3xl text-gray-800 mb-3 md:mb-4">
              More memories to come...
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              These are just a few snapshots of our beautiful journey. We can't
              wait to create many more memories with all of you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
