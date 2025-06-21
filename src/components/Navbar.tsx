"use client";

import type React from "react";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Heart, Sparkles, Calendar, Camera } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isManualScrollRef = useRef(false);

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

  const updateActiveSection = useCallback(() => {
    if (isManualScrollRef.current) return;

    const sections = ["hero", "story", "event", "gallery"];
    const scrollPosition = window.scrollY + 120;

    let currentSection = "hero";

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          currentSection = sections[i];
          break;
        }
      }
    }

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      const newHash = `#${currentSection}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, "", newHash);
      }
    }
  }, [activeSection]);

  const handleScroll = useCallback(() => {
    setShrink(window.scrollY > 50);
    updateActiveSection();
  }, [updateActiveSection]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && ["hero", "story", "event", "gallery"].includes(hash)) {
      setActiveSection(hash);
    }

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      isManualScrollRef.current = true;
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
      window.history.pushState(null, "", `#${sectionId}`);

      const navbarHeight = shrink ? 80 : 88;
      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 800);
    },
    [shrink]
  );

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "") || "hero";
      if (["hero", "story", "event", "gallery"].includes(hash)) {
        scrollToSection(hash);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [scrollToSection]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, sectionId: string) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        scrollToSection(sectionId);
      }
    },
    [scrollToSection]
  );

  const navItems = [
    { id: "hero", label: "Home", icon: Heart },
    { id: "story", label: "Our Story", icon: Sparkles },
    { id: "event", label: "Event", icon: Calendar },
    { id: "gallery", label: "Gallery", icon: Camera },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
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
            <button
              className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg transition-transform duration-200 hover:scale-105"
              onClick={() => scrollToSection("hero")}
              onKeyDown={(e) => handleKeyDown(e, "hero")}
              aria-label="Go to home section"
            >
              <span className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                D & A
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:scale-105 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg shadow-purple-500/30"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    aria-label={`Go to ${item.label} section`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform duration-200 hover:scale-105"
              onClick={toggleMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-white/20 transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:scale-[1.02] ${
                      isActive
                        ? "text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    aria-label={`Go to ${item.label} section`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
