import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GalleryImage } from "@/types";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryImage | null;
}

export default function GalleryModal({ isOpen, onClose, image }: GalleryModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        >
          <div className="relative w-full max-w-4xl p-4">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-primary z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={image?.src} 
              alt={image?.alt || "Gallery image"} 
              className="max-w-full max-h-[80vh] mx-auto" 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
