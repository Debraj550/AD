import { GalleryImage } from "@/types";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";

// Real photos of Debraj and Ankita
export const debrajAnkitaPhotos: GalleryImage[] = [
  {
    src: beachPhoto,
    alt: "Debraj and Ankita at the beach sunset"
  },
  {
    src: resortPhoto,
    alt: "Debraj and Ankita at a beach resort"
  }
];

export const galleryImages: GalleryImage[] = [
  // Add the real photos at the beginning for prominence
  ...debrajAnkitaPhotos,
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
  },
  {
    src: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Engagement celebration"
  },
  {
    src: "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Floral arrangements"
  }
];

// Engagement celebration images
export const engagementImages = [
  beachPhoto,
  resortPhoto,
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

// Elegant wedding decor images
export const decorImages = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579583764979-a3a5054af17e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

// Couple celebration images
export const coupleImages = [
  beachPhoto,
  resortPhoto,
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

// Floral arrangement images
export const floralImages = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];
