import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import GalleryModal from "@/components/GalleryModal";
import { GalleryImage } from "@/types";
import song from "@assets/song.mp3"; // Ensure this is correctly resolved

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(song)); // Background music instance
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  audio.loop = true;

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.log("Playback error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    toggleMusic();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Story />
        <EventDetails />
        <Gallery onImageClick={openModal} />
      </main>
      <Footer />

      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}
