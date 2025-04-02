import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import GalleryModal from "@/components/GalleryModal";
import { GalleryImage } from "@/types";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Story />
        <EventDetails />
        <Gallery onImageClick={openModal} />
        <Rsvp />
      </main>
      <Footer />
      <GalleryModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        image={selectedImage} 
      />
    </div>
  );
}
