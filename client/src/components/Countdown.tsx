import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

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

  return (
    <section className="relative bg-center bg-cover bg-fixed py-20" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1509610973147-232dfea52a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
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
