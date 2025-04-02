import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav id="navbar" className={`fixed w-full z-50 transition-all duration-300 bg-white/90 shadow-md ${shrink ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-accent font-greatvibes text-3xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            D & A
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#hero" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </a>
            <a 
              href="#story" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('story');
              }}
            >
              Our Story
            </a>
            <a 
              href="#event" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('event');
              }}
            >
              Event
            </a>
            <a 
              href="#gallery" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}
            >
              Gallery
            </a>
            <a 
              href="#rsvp" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('rsvp');
              }}
            >
              RSVP
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            id="menu-toggle" 
            className="md:hidden text-dark focus:outline-none"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
          <div className="flex flex-col space-y-3">
            <a 
              href="#hero" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </a>
            <a 
              href="#story" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('story');
              }}
            >
              Our Story
            </a>
            <a 
              href="#event" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('event');
              }}
            >
              Event
            </a>
            <a 
              href="#gallery" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}
            >
              Gallery
            </a>
            <a 
              href="#rsvp" 
              className="text-dark hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('rsvp');
              }}
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
