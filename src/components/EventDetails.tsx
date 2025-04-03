import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { TimelineItem } from "@/types";
import thumbsupcat from "@assets/thumbsupcat.jpg";

export default function EventDetails() {
  const timeline: TimelineItem[] = [
    {
      time: "11:30 AM",
      title: "Guests Arrival",
      description: "Welcome drinks and mingling",
    },
    {
      time: "12:30 PM",
      title: "Engagement Ceremony",
      description: "Exchange of rings and vows",
    },
    {
      time: "1:30 PM",
      title: "Registry Ceremony",
      description: "Official registration of engagement",
    },
    {
      time: "2:00 PM",
      title: "Celebration Lunch",
      description: "Festive meal with music and celebration",
    },
  ];

  return (
    <section id="event" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-dark mb-3 gold-underline">
            The Engagement
          </h2>
          <p className="text-accent mt-10 max-w-2xl mx-auto">
            Join us as we celebrate our love and commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl text-dark mb-2">When</h3>
              <p className="font-semibold text-lg mb-1">July 10th, 2025</p>
              <p>Thursday, 11:30 AM</p>
              <div className="w-16 h-px bg-primary mx-auto my-6"></div>
              <h3 className="font-cormorant text-2xl text-dark mb-2">Where</h3>
              <p className="font-semibold text-lg mb-1">Garden Palace</p>
              <p>Kalabagan Rd, Howrah</p>
              <div className="w-16 h-px bg-primary mx-auto my-6"></div>
              <p className="italic text-dark/80">
                Engagement ceremony followed by registry and celebration
              </p>
            </div>
          </motion.div>

          {/* Event Location Card with Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="p-6 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl text-dark mb-4">
                At Garden Palace, Howrah
              </h3>
            </div>

            {/* Updated Image Section */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] ">
              <img
                src={thumbsupcat}
                alt="Debraj and Ankita with friends"
                className="h-full w-full object-cover right-4"
              />

              {/* Gradient Overlay (Optional, can be adjusted or removed) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center">
                <div className="text-center p-6">
                  <p className="font-medium text-white mb-2">
                    Garden Palace, Kalabagan Rd, Howrah
                  </p>
                  <a
                    href="https://maps.google.com/?q=Garden+Palace,+Kalabagan+Rd,+Howrah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full text-sm transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 relative">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-cormorant text-3xl md:text-4xl text-primary mb-12 animated-gradient-text"
          >
            Event Schedule
          </motion.h3>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-3 top-0 h-full w-1 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-12 ${
                  index !== timeline.length - 1 ? "pb-10" : ""
                } flex items-center gap-6 timeline-item`}
              >
                {/* Glowing Dot */}
                <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-ping">
                  <div className="w-4 h-4 rounded-full bg-white shadow-md shadow-primary"></div>
                </div>

                <div className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-cormorant text-xl text-dark">
                    {item.time} - {item.title}
                  </h4>
                  <p className="text-dark/80 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
