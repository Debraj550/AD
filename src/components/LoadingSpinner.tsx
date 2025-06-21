"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-lg p-8 flex flex-col items-center space-y-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-8 h-8 text-rose-500 fill-current" />
        </motion.div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </motion.div>
    </div>
  );
}
