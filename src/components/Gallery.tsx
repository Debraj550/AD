import { motion } from "framer-motion";
import { GalleryImage } from "@/types";
import { debrajAnkitaPhotos } from "@/lib/images";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import beachCarryPhoto from "@assets/20250208_140307 (1).jpg";
import riverPhoto from "@assets/20250207_144239.jpg";
import groupPhoto from "@assets/20250206_133038.jpg";
import homePhoto from "@assets/20241015_163356.jpg";
import cafePhoto from "@assets/20241123_195845.jpg";

interface GalleryProps {
  onImageClick: (image: GalleryImage) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  // Use only the real photos from debrajAnkitaPhotos
  const galleryImages: GalleryImage[] = [
    {
      src: beachPhoto,
      alt: "Debraj and Ankita at the beach sunset",
    },
    {
      src: resortPhoto,
      alt: "Debraj and Ankita at a beach resort",
    },
    {
      src: selfiePhoto,
      alt: "Debraj and Ankita taking a selfie",
    },
    {
      src: beachCarryPhoto,
      alt: "Debraj carrying Ankita at the beach",
    },
    {
      src: riverPhoto,
      alt: "Debraj and Ankita by the river",
    },
    {
      src: groupPhoto,
      alt: "Debraj and Ankita with friends",
    },
    {
      src: homePhoto,
      alt: "Debraj and Ankita at home",
    },
    {
      src: cafePhoto,
      alt: "Debraj and Ankita at a cafe",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-dark mb-3 gold-underline">
            Our Gallery
          </h2>
          <p className="text-accent mt-10 max-w-2xl mx-auto">
            Some of the moments we cherish !!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => onImageClick(image)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
