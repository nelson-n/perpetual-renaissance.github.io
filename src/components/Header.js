import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className={`bg-accent fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Perpetual Renaissance Text */}
        <div className="flex items-center">
          <a href="/" onClick={() => window.location.reload()} className="text-black text-xl">
            <span className="font-semibold">Perpetual</span>{' '}
            <span className="font-normal">Renaissance</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden lg:flex lg:space-x-6 absolute left-1/2 transform -translate-x-1/2`}
        >
          <Link
            to="/"
            className={`text-lg font-light transition-colors duration-300 ${
              location.pathname === "/" ? "text-burgundy" : "text-black hover:text-burgundy"
            }`}
          >
            Welcome
          </Link>
          <Link
            to="/watches"
            className={`text-lg font-light transition-colors duration-300 ${
              location.pathname === "/watches" || location.pathname === "/PR02" ? "text-burgundy" : "text-black hover:text-burgundy"
            }`}
          >
            Watches
          </Link>
          <Link
            to="/story"
            className={`text-lg font-light transition-colors duration-300 ${
              location.pathname === "/story" ? "text-burgundy" : "text-black hover:text-burgundy"
            }`}
          >
            Story
          </Link>
        </div>

        {/* Mobile Menu Button - Plus Sign */}
        <div className="lg:hidden">
          <button
            className="text-black focus:outline-none w-8 h-8 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 135 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></motion.span>
            <motion.span
              animate={{ rotate: menuOpen ? 0 : 90, opacity: menuOpen ? 1 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></motion.span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Animated Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="absolute top-0 right-0 h-full w-40 bg-white z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <motion.div
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col space-y-6 mt-10"
                >
                  <motion.div variants={linkVariants}>
                    <Link
                      to="/"
                      className={`block text-xl font-light transition-colors duration-300 ${
                        location.pathname === "/" ? "text-burgundy" : "text-black hover:text-burgundy"
                      }`}
                    >
                      Welcome
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={linkVariants}>
                    <Link
                      to="/watches"
                      className={`block text-xl font-light transition-colors duration-300 ${
                        location.pathname === "/watches" || location.pathname === "/PR02" ? "text-burgundy" : "text-black hover:text-burgundy"
                      }`}
                    >
                      Watches
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={linkVariants}>
                    <Link
                      to="/story"
                      className={`block text-xl font-light transition-colors duration-300 ${
                        location.pathname === "/story" ? "text-burgundy" : "text-black hover:text-burgundy"
                      }`}
                    >
                      Story
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
