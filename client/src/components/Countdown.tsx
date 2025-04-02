import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import beachPhoto from "@assets/20250207_181846.jpg";
import resortPhoto from "@assets/20250208_145445.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
import beachCarryPhoto from "@assets/20250208_140307 (1).jpg";
import riverPhoto from "@assets/20250207_144239.jpg";
import groupPhoto from "@assets/20250206_133038.jpg";
import homePhoto from "@assets/20241015_163356.jpg";
import cafePhoto from "@assets/20241123_195845.jpg";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = dayjs('2025-07-10 11:30:00');
    
    const calculateTimeLeft = () => {
      const now = dayjs();
      const difference = eventDate.diff(now, 'second');
      
      if (difference > 0) {
        const days = Math.floor(difference / (60 * 60 * 24));
        const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((difference % (60 * 60)) / 60);
        const seconds = Math.floor(difference % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const padWithZero = (num: number): string => {
    return String(num).padStart(2, '0');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  // CSS for photo collage
  const photoCollageStyle = {
    position: 'relative',
    overflow: 'hidden',
    padding: '80px 0'
  };

  // Create the collage grid with CSS
  const collageGridStyle = `
    .photo-collage-grid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 4px;
      filter: brightness(0.6);
    }
    
    .collage-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  return (
    <section className="relative py-20" style={photoCollageStyle}>
      <style>{collageGridStyle}</style>
      
      {/* Photo Collage Grid */}
      <div className="photo-collage-grid">
        <img src={beachPhoto} alt="Beach" className="collage-img" />
        <img src={riverPhoto} alt="River" className="collage-img" />
        <img src={selfiePhoto} alt="Selfie" className="collage-img" />
        <img src={groupPhoto} alt="Group" className="collage-img" />
        <img src={homePhoto} alt="Home" className="collage-img" />
        <img src={cafePhoto} alt="Cafe" className="collage-img" />
        <img src={beachCarryPhoto} alt="Beach Carry" className="collage-img" />
        <img src={resortPhoto} alt="Resort" className="collage-img" />
      </div>
      
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white font-cormorant text-4xl mb-12"
          >
            Counting Down to Our Special Day
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="countdown" 
            className="flex flex-wrap justify-center gap-4 md:gap-10"
          >
            <motion.div variants={item} className="bg-white/90 rounded-lg p-4 md:p-6 w-[80px] md:w-[120px] shadow-lg">
              <div className="text-2xl md:text-4xl font-cormorant font-semibold text-primary">{padWithZero(timeLeft.days)}</div>
              <div className="text-sm md:text-base text-dark font-montserrat">Days</div>
            </motion.div>
            <motion.div variants={item} className="bg-white/90 rounded-lg p-4 md:p-6 w-[80px] md:w-[120px] shadow-lg">
              <div className="text-2xl md:text-4xl font-cormorant font-semibold text-primary">{padWithZero(timeLeft.hours)}</div>
              <div className="text-sm md:text-base text-dark font-montserrat">Hours</div>
            </motion.div>
            <motion.div variants={item} className="bg-white/90 rounded-lg p-4 md:p-6 w-[80px] md:w-[120px] shadow-lg">
              <div className="text-2xl md:text-4xl font-cormorant font-semibold text-primary">{padWithZero(timeLeft.minutes)}</div>
              <div className="text-sm md:text-base text-dark font-montserrat">Minutes</div>
            </motion.div>
            <motion.div variants={item} className="bg-white/90 rounded-lg p-4 md:p-6 w-[80px] md:w-[120px] shadow-lg">
              <div className="text-2xl md:text-4xl font-cormorant font-semibold text-primary">{padWithZero(timeLeft.seconds)}</div>
              <div className="text-sm md:text-base text-dark font-montserrat">Seconds</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
