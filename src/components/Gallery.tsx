"use client";
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

import { useState, useEffect, useRef, useCallback } from "react";
import { Heart, Sparkles, Camera, Eye, Loader2 } from "lucide-react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string;
};

interface GalleryProps {
  onImageClick: (image: GalleryImage) => void;
}

// Lazy Image Component with Intersection Observer
const LazyImage = ({
  src,
  alt,
  className,
  onLoad,
}: {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observerRef.current.observe(img);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl md:rounded-3xl flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl md:rounded-3xl flex items-center justify-center">
          <Camera className="w-8 h-8 text-gray-400" />
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default function Gallery({ onImageClick }: GalleryProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState(8);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Your actual gallery images with proper imports
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: beachPhoto,
      alt: "Beach Photo - Romantic moment by the sea",
      category: "engagement",
    },
    {
      id: 2,
      src: p1,
      alt: "Couple Photo 1 - Beautiful together",
      category: "couple",
    },
    {
      id: 3,
      src: p2,
      alt: "Travel Photo 1 - Adventure together",
      category: "travel",
    },
    {
      id: 4,
      src: p3,
      alt: "Engagement Photo 2 - Special moments",
      category: "engagement",
    },
    {
      id: 5,
      src: p4,
      alt: "Couple Photo 2 - Love in the air",
      category: "couple",
    },
    {
      id: 6,
      src: p5,
      alt: "Travel Photo 2 - Exploring together",
      category: "travel",
    },
    {
      id: 7,
      src: p6,
      alt: "Engagement Photo 3 - Perfect day",
      category: "engagement",
    },
    {
      id: 8,
      src: p7,
      alt: "Couple Photo 3 - Sweet memories",
      category: "couple",
    },
    {
      id: 9,
      src: p8,
      alt: "Travel Photo 3 - Journey of love",
      category: "travel",
    },
    {
      id: 10,
      src: resortPhoto,
      alt: "Resort Photo - Vacation vibes",
      category: "travel",
    },
    {
      id: 11,
      src: selfiePhoto,
      alt: "Selfie Photo - Candid moments",
      category: "couple",
    },
    {
      id: 12,
      src: beachCarryPhoto,
      alt: "Beach Carry Photo - Romantic gesture",
      category: "travel",
    },
    {
      id: 13,
      src: riverPhoto,
      alt: "River Photo - Nature's beauty",
      category: "travel",
    },
    {
      id: 14,
      src: groupPhoto,
      alt: "Group Photo - With loved ones",
      category: "travel",
    },
    {
      id: 15,
      src: homePhoto,
      alt: "Home Photo - Cozy moments",
      category: "couple",
    },
    {
      id: 16,
      src: cafePhoto,
      alt: "Cafe Photo - Coffee dates",
      category: "couple",
    },
    {
      id: 17,
      src: propose,
      alt: "Proposal Photo - The big moment",
      category: "engagement",
    },
  ];

  const categories = [{ id: "all", label: "All Photos", icon: Camera }];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleImages);
  const hasMoreImages = visibleImages < filteredImages.length;

  const loadMoreImages = useCallback(() => {
    setVisibleImages((prev) => Math.min(prev + 8, filteredImages.length));
  }, [filteredImages.length]);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-rose-50 to-indigo-50 overflow-hidden"
    >
      {/* Static background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 opacity-10">
          <Camera className="w-16 h-16 text-purple-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Heart className="w-12 h-12 text-rose-400 fill-current" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-3 ${
              isMobile
                ? "bg-purple-100 border border-purple-200"
                : "bg-purple-100/50 backdrop-blur-sm border border-purple-200/50"
            } rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 transition-transform duration-300 hover:scale-105`}
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
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleImages(8);
                }}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "text-white bg-gradient-to-r from-purple-500 to-rose-600 shadow-lg shadow-purple-500/30"
                    : isMobile
                    ? "text-gray-700 bg-white/80 border border-gray-200 hover:bg-purple-50"
                    : "text-gray-700 bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-purple-50 hover:border-purple-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm md:text-base">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              onClick={() => onImageClick(image)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-rose-500/20 to-indigo-500/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full"
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
                      } rounded-full border border-white/30 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreImages && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-rose-600 hover:from-purple-600 hover:to-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-105"
            >
              <Camera className="w-5 h-5" />
              Load More Photos
            </button>
          </div>
        )}

        {/* Loading Stats */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Showing {displayedImages.length} of {filteredImages.length} photos
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div
            className={`${
              isMobile
                ? "bg-white/80 border border-white/50"
                : "bg-gradient-to-r from-purple-100/50 via-rose-100/50 to-indigo-100/50 backdrop-blur-sm border border-white/50"
            } rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-500 fill-current" />
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
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
