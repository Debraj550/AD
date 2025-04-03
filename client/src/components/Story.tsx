import { motion } from "framer-motion";
import riverPhoto from "@assets/20250207_144239.jpg";

export default function Story() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-dark mb-3 gold-underline">
            Our Story
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={riverPhoto}
              alt="Debraj and Ankita by the river"
              className="rounded-lg shadow-lg w-full md:w-[450px] lg:w-[500px] h-auto object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 max-w-2xl mx-auto text-center md:text-left"
          >
            <h3 className="font-cormorant text-3xl md:text-4xl text-primary mb-6">
              The Proposal
            </h3>
            <p className="text-dark/80 text-sm md:text-base leading-relaxed">
              Well, that happened fast! One moment, we were just getting to know
              each other, and before we knew it, we had shared countless laughs,
              a few silly fights, and endless adventures. From traveling to new
              places to indulging in amazing food, from meeting each other's
              families to finally getting down on one knee in Goa—it’s been a
              whirlwind of emotions and beautiful moments.
              <br />
              <br />
              This past year flew by in a flash, but every second was filled
              with love, joy, and memories we’ll cherish forever. And now, as we
              step into the next chapter—one that’s both exciting and a little
              terrifying—we embrace the unknown together. The late-night talks
              about the future, the compromises, the growth, and the realization
              that love isn’t just about the grand gestures but also about
              showing up for each other, every single day. Here’s to forever,
              with all its uncertainties and all its magic!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
