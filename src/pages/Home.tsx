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
import song from "@assets/song.mp3";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  useEffect(() => {
    // Initialize audio
    const audioObj = new Audio(song);
    audioObj.loop = true;
    setAudio(audioObj);

    // Try to play automatically
    const playPromise = audioObj.play();

    playPromise
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log("Autoplay was prevented, showing overlay");
        setShowPlayOverlay(true);
      });

    // Cleanup
    return () => {
      audioObj.pause();
    };
  }, []);

  const startAudio = (play = true) => {
    if (!audio) return;
    if (play)
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Playback error:", error);
        });
    setShowPlayOverlay(false);
  };

  const toggleMusic = () => {
    if (!audio) return;

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

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Play overlay */}
      {showPlayOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center p-4">
          <div className="text-center text-white max-w-md">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Wedding</h2>
            <p className="mb-6">
              For the best experience, we recommend enabling background music.
            </p>
            <button
              onClick={() => startAudio(true)}
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
            >
              Start Music & Enter Site
            </button>
            <button
              onClick={() => startAudio(false)}
              className="bg-white my-2 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
            >
              No Music, Just Enter
            </button>
          </div>
        </div>
      )}

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
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition z-40"
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
