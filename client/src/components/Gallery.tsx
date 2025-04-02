import { motion } from "framer-motion";
import { GalleryImage } from "@/types";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";

interface GalleryProps {
  onImageClick: (image: GalleryImage) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  // Create gallery images array directly with imported assets
  const galleryImages: GalleryImage[] = [
    {
      src: beachPhoto,
      alt: "Debraj and Ankita at the beach sunset"
    },
    {
      src: resortPhoto,
      alt: "Debraj and Ankita at a beach resort"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Engagement celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant wedding decor"
    },
    {
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Floral arrangements"
    },
    {
      src: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant wedding decor"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Couple celebration"
    }
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
          <h2 className="font-cormorant text-4xl md:text-5xl text-dark mb-3 gold-underline">Our Gallery</h2>
          <p className="text-accent mt-10 max-w-2xl mx-auto">Moments we cherish</p>
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
