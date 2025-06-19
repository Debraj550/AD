"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }

    // Update active section based on scroll position
    const sections = ["hero", "story", "event", "gallery"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Heart },
    { id: "story", label: "Our Story", icon: Sparkles },
    { id: "event", label: "Event", icon: Heart },
    { id: "gallery", label: "Gallery", icon: Sparkles },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          shrink
            ? isMobile
              ? "py-3 bg-white/95 shadow-lg"
              : "py-3 bg-white/90 backdrop-blur-xl shadow-lg"
            : isMobile
            ? "py-4 bg-white/90 shadow-md"
            : "py-4 bg-white/80 backdrop-blur-xl shadow-md"
        } border-b border-white/20`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                D & A
              </span>
              {!isMobile && (
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  layoutId="logo-glow"
                />
              )}
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg shadow-purple-500/30"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full"
                        layoutId="activeTab"
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg"
                            : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
