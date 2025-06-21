"use client";

import { motion } from "framer-motion";

interface SectionSkeletonProps {
  type: "hero" | "countdown" | "story" | "eventDetails" | "gallery" | "footer";
}

export default function SectionSkeleton({ type }: SectionSkeletonProps) {
  const getSkeletonContent = () => {
    switch (type) {
      case "hero":
        return (
          <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
              <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-2xl mx-auto" />
              <div className="flex gap-4 justify-center">
                <div className="h-12 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" />
                <div className="h-12 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        );

      case "countdown":
        return (
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-8">
                <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-md mx-auto" />
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="text-center space-y-2">
                      <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "story":
        return (
          <div className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-md mx-auto" />
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div className="space-y-4">
                      <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-3/4" />
                      </div>
                    </div>
                    <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "eventDetails":
        return (
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-md mx-auto" />
                <div className="grid md:grid-cols-2 gap-8">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-8 rounded-lg space-y-4"
                    >
                      <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-2/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "gallery":
        return (
          <div className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-md mx-auto" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "footer":
        return (
          <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-4">
                <div className="h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse max-w-md mx-auto" />
                <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse max-w-sm mx-auto" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {getSkeletonContent()}
    </motion.div>
  );
}
