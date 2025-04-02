import { GalleryImage } from "@/types";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import beachCarryPhoto from "@assets/20250208_140307 (1).jpg";
import riverPhoto from "@assets/20250207_144239.jpg";
import groupPhoto from "@assets/20250206_133038.jpg";
import animatedBeachPhoto from "@assets/87462230-c1d9-44b3-900e-0f6812cb7eb4.png";

// Real photos of Debraj and Ankita
export const debrajAnkitaPhotos: GalleryImage[] = [
  {
    src: beachPhoto,
    alt: "Debraj and Ankita at the beach sunset"
  },
  {
    src: resortPhoto,
    alt: "Debraj and Ankita at a beach resort"
  },
  {
    src: selfiePhoto,
    alt: "Debraj and Ankita taking a selfie"
  },
  {
    src: beachCarryPhoto,
    alt: "Debraj carrying Ankita at the beach"
  },
  {
    src: riverPhoto,
    alt: "Debraj and Ankita by the river"
  },
  {
    src: groupPhoto,
    alt: "Debraj and Ankita with friends"
  },
  {
    src: animatedBeachPhoto,
    alt: "Artistic illustration of the couple at the beach"
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
  selfiePhoto,
  groupPhoto,
  beachCarryPhoto,
  animatedBeachPhoto,
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
  selfiePhoto,
  riverPhoto,
  beachCarryPhoto,
  animatedBeachPhoto,
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
];

// Floral arrangement images
export const floralImages = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];
