"use client";

import thumbsupcat from "@assets/thumbsupcat.jpg";

import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Heart,
  Navigation,
  Star,
  Crown,
  Diamond,
} from "lucide-react";

type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

export default function EventDetails() {
  const timeline: TimelineItem[] = [
    {
      time: "11:00 AM Onwards",
      title: "Guests Arrival",
      description: "Welcome drinks and mingling 🍹",
    },
    {
      time: "12:00 PM",
      title: "Registry Ceremony & Ring Exchange",
      description: "Official registration and exchanging of rings 💍",
    },
    {
      time: "12:45 PM",
      title: "Celebrations",
      description: "Let the fun begin with music, games, and joy 🎉",
    },
    {
      time: "1:00 PM",
      title: "Lunch",
      description: "A festive meal filled with flavors and laughter 🍽️🎶",
    },
  ];

  return (
    <section
      id="event"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 overflow-hidden"
    >
      {/* Static Background Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-40 right-20 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-40 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-40 right-40 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl opacity-30" />

      {/* Static Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Static decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 opacity-10">
          <Crown className="w-16 h-16 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Diamond className="w-12 h-12 text-purple-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8 transition-transform duration-300 hover:scale-105">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
              Celebration
            </span>
            <Diamond className="w-4 h-4 text-purple-400" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-rose-300 via-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
              The Engagement
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-purple-400 via-pink-400 to-yellow-400 mx-auto rounded-full mb-8 shadow-lg shadow-purple-500/50" />

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Join us for an{" "}
            <span className="text-rose-300 font-semibold">
              unforgettable celebration
            </span>{" "}
            of love, commitment, and the beginning of our{" "}
            <span className="text-purple-300 font-semibold">
              forever journey
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:scale-105" />
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 transition-all duration-500 group-hover:shadow-purple-500/25 group-hover:scale-[1.02] h-full flex flex-col">
              <div className="text-center space-y-8">
                {/* When Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 rounded-full shadow-xl shadow-purple-500/30 mb-4 transition-transform duration-300 hover:scale-110">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-3xl text-white mb-4 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                    When
                  </h3>
                  <div className="bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
                    <p className="font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      July 10th, 2025
                    </p>
                    <p className="text-white/80 text-lg">Thursday, 11:30 AM</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-purple-400" />
                  <Diamond className="w-6 h-6 text-yellow-400" />
                  <div className="w-16 h-px bg-gradient-to-r from-purple-400 via-rose-400 to-transparent" />
                </div>

                {/* Where Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 rounded-full shadow-xl shadow-rose-500/30 mb-4 transition-transform duration-300 hover:scale-110">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-3xl text-white mb-4 bg-gradient-to-r from-purple-300 to-rose-300 bg-clip-text text-transparent">
                    Where
                  </h3>
                  <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
                    <p className="font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      Garden Palace
                    </p>
                    <p className="text-white/80 text-lg mb-4">
                      Kalabagan Rd, Howrah
                    </p>
                    <div className="flex items-center justify-center gap-2 text-purple-300">
                      <Navigation className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        West Bengal, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Type */}
                <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-white/90 italic text-lg leading-relaxed font-light">
                    An{" "}
                    <span className="text-rose-300 font-semibold">
                      elegant engagement ceremony
                    </span>{" "}
                    followed by
                    <span className="text-purple-300 font-semibold">
                      {" "}
                      registry and grand celebration
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card with Photo */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-rose-500/20 to-purple-500/20 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:scale-105" />
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 group-hover:shadow-rose-500/25 group-hover:scale-[1.02] h-full flex flex-col">
              {/* Header */}
              <div className="p-8 text-center bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 via-rose-500 to-indigo-500 rounded-full shadow-xl shadow-indigo-500/30 mb-4 transition-transform duration-300 hover:scale-110">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-2 bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                  Venue
                </h3>
                <p className="text-white/80 text-lg">Garden Palace, Howrah</p>
              </div>

              {/* Photo Section */}
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={thumbsupcat || "/placeholder.svg"}
                  alt="Debraj and Ankita with friends at the venue"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-gradient-to-r from-black/40 via-purple-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-5 border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <p className="font-bold text-xl mb-2 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                      Garden Palace
                    </p>
                    <p className="text-white/90 mb-4 text-base">
                      Kalabagan Rd, Howrah, West Bengal
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://maps.google.com/?q=Garden+Palace,+Kalabagan+Rd,+Howrah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:via-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-105"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8 transition-transform duration-300 hover:scale-105">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span className="text-white font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                Schedule
              </span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>

            <h3 className="font-serif text-3xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 via-rose-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
                Day Timeline
              </span>
            </h3>
            <p className="text-white/80 text-lg font-light">
              A perfect day orchestrated with love and elegance
            </p>
          </div>

          {/* Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-shadow duration-500 hover:shadow-white/15">
              {/* Vertical Timeline Line */}
              <div className="absolute left-12 md:left-16 top-12 bottom-12 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 via-rose-400 to-yellow-400 rounded-full shadow-lg shadow-purple-500/30" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 md:gap-8 group"
                  >
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 shadow-xl shadow-purple-500/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <div className="w-3 h-3 rounded-full bg-white shadow-lg" />
                      </div>
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-300 group-hover:shadow-purple-500/20 group-hover:scale-[1.02]">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                              <Clock className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-indigo-300 text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                              {item.time}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl md:text-2xl text-white mb-2 drop-shadow-lg">
                            {item.title}
                          </h4>
                          <p className="text-white/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-lg transition-transform duration-300 hover:scale-110">
                            <Users className="w-6 h-6 text-purple-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Heart className="w-6 h-6 text-rose-400 fill-current" />
                <Crown className="w-6 h-6 text-yellow-400" />
                <Diamond className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-serif text-2xl md:text-3xl text-white mb-4 bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                We can't wait to celebrate with you!
              </h4>
              <p className="text-white/90 leading-relaxed text-lg font-light max-w-2xl mx-auto">
                Your presence will transform our special day into an{" "}
                <span className="text-rose-300 font-semibold">
                  extraordinary celebration
                </span>{" "}
                of love, joy, and the beginning of our{" "}
                <span className="text-purple-300 font-semibold">
                  beautiful forever
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
