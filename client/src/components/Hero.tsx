import { motion } from "framer-motion";

export default function Hero() {
  const scrollToRsvp = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      window.scrollTo({
        top: rsvpSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative py-24" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1519741347686-c1e331c5ffb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white font-montserrat tracking-widest text-lg mb-4"
        >
          WE ARE GETTING ENGAGED
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-greatvibes text-6xl md:text-8xl text-white mb-6"
        >
          Debraj & Ankita
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white font-cormorant text-2xl md:text-3xl mb-10"
        >
          10 July, 2025
        </motion.p>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-1 bg-[hsl(var(--gold))] mx-auto mb-10"
        ></motion.div>
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          href="#rsvp" 
          onClick={(e) => {
            e.preventDefault();
            scrollToRsvp();
          }}
          className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          RSVP Now
        </motion.a>
      </motion.div>
    </section>
  );
}
