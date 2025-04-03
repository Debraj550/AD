import { GalleryImage } from "@/types";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import beachCarryPhoto from "@assets/20250208_140307 (1).jpg";
import riverPhoto from "@assets/20250207_144239.jpg";
import groupPhoto from "@assets/20250206_133038.jpg";
import homePhoto from "@assets/20241015_163356.jpg";
import cafePhoto from "@assets/20241123_195845.jpg";

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
    src: homePhoto,
    alt: "Debraj and Ankita at home"
  },
  {
    src: cafePhoto,
    alt: "Debraj and Ankita at a cafe"
  }
];

// Using only the real photos for all galleries
export const galleryImages: GalleryImage[] = debrajAnkitaPhotos;

// Engagement celebration images - using only real photos
export const engagementImages = [
  beachPhoto,
  resortPhoto,
  selfiePhoto,
  groupPhoto,
  beachCarryPhoto,
  homePhoto,
  cafePhoto,
  riverPhoto
];

// Couple celebration images - using only real photos
export const coupleImages = [
  beachPhoto,
  resortPhoto,
  selfiePhoto,
  riverPhoto,
  beachCarryPhoto,
  homePhoto,
  cafePhoto,
  groupPhoto
];
