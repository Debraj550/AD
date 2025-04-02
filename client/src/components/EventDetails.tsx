import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { TimelineItem } from "@/types";
import { debrajAnkitaPhotos } from "@/lib/images";

export default function EventDetails() {
  const timeline: TimelineItem[] = [
    {
      time: "11:30 AM",
      title: "Guests Arrival",
      description: "Welcome drinks and mingling"
    },
    {
      time: "12:30 PM",
      title: "Engagement Ceremony",
      description: "Exchange of rings and vows"
    },
    {
      time: "1:30 PM",
      title: "Registry Ceremony",
      description: "Official registration of engagement"
    },
    {
      time: "2:00 PM",
      title: "Celebration Lunch",
      description: "Festive meal with music and celebration"
    }
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
          <h2 className="font-cormorant text-4xl md:text-5xl text-dark mb-3 gold-underline">The Engagement</h2>
          <p className="text-accent mt-10 max-w-2xl mx-auto">Join us as we celebrate our love and commitment</p>
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
              <p className="italic text-dark/80">Engagement ceremony followed by registry and celebration</p>
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
              <h3 className="font-cormorant text-2xl text-dark mb-4">At Our Favorite Place</h3>
            </div>
            <div className="flex-1 relative min-h-[300px]">
              {/* Showcase the second photo instead of a map */}
              <img 
                src={debrajAnkitaPhotos[1].src} 
                alt={debrajAnkitaPhotos[1].alt}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
                <div className="text-center p-6">
                  <p className="font-medium text-white mb-2">Garden Palace, Kalabagan Rd, Howrah</p>
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
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-cormorant text-3xl text-primary mb-12"
          >
            Event Schedule
          </motion.h3>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-10 ${index !== timeline.length - 1 ? 'pb-10' : ''} timeline-item`}
              >
                <div className="absolute left-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-cormorant text-xl text-dark">{item.time} - {item.title}</h4>
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
