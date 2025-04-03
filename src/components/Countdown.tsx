import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import beachPhoto from "@assets/20250207_181846.jpg";
import selfiePhoto from "@assets/image_1743634855775.png";
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
    seconds: 0,
  });
  const eventDate = useMemo(() => dayjs("2025-07-10 11:30:00"), []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const difference = eventDate.diff(now, "second");

      if (difference <= 0) return;

      const newTimeLeft = {
        days: Math.floor(difference / (60 * 60 * 24)),
        hours: Math.floor((difference % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((difference % (60 * 60)) / 60),
        seconds: difference % 60,
      };

      setTimeLeft((prev) =>
        JSON.stringify(prev) !== JSON.stringify(newTimeLeft)
          ? newTimeLeft
          : prev
      );
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  const padWithZero = (num: number) => String(num).padStart(2, "0");

  const photos = [beachPhoto, selfiePhoto, homePhoto, cafePhoto];

  return (
    <section className="relative overflow-hidden min-h-[800px] flex items-center justify-center">
      {/* Grid section behind */}
      <div className="absolute inset-0 grid md:grid-cols-4 grid-cols-2 gap-2 z-0">
        {/* Dark overlay for dimming effect */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay with text & countdown */}
      <div className="relative z-20 text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-cormorant text-4xl mb-8"
        >
          Counting Down to Our Special Day
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <motion.div
              key={label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 text-primary rounded-lg p-4 md:p-6 w-[80px] md:w-[120px] shadow-lg"
            >
              <div className="text-2xl md:text-4xl font-cormorant font-semibold">
                {padWithZero(
                  [
                    timeLeft.days,
                    timeLeft.hours,
                    timeLeft.minutes,
                    timeLeft.seconds,
                  ][index]
                )}
              </div>
              <div className="text-sm md:text-base text-dark font-montserrat">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
