
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-accent shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Perpetual Renaissance Text */}
        <div className="flex items-center">
          <a href="/" onClick={() => window.location.reload()} className="text-brownAccent text-xl ml-4">
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
              location.pathname === "/"
                ? "text-black"
                : "text-brownAccent hover:text-black"
            }`}
          >
            Welcome
          </Link>
          <Link
            to="/watches"
            className={`text-lg font-light transition-colors duration-300 ${
              location.pathname === "/watches"
                ? "text-black"
                : "text-brownAccent hover:text-black"
            }`}
          >
            Watches
          </Link>
          <Link
            to="/story"
            className={`text-lg font-light transition-colors duration-300 ${
              location.pathname === "/story"
                ? "text-black"
                : "text-brownAccent hover:text-black"
            }`}
          >
            Story
          </Link>
        </div>

        {/* Mobile Navigation Links */}
        <div className="lg:hidden">
          <button
            className="text-brownAccent text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg z-50">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-brownAccent text-2xl focus:outline-none"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-start mt-20 space-y-4 px-6">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-normal transition-colors duration-300 ${
                  location.pathname === "/"
                    ? "text-black"
                    : "text-brownAccent hover:text-black"
                }`}
              >
                Welcome
              </Link>
              <Link
                to="/watches"
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-normal transition-colors duration-300 ${
                  location.pathname === "/watches"
                    ? "text-black"
                    : "text-brownAccent hover:text-black"
                }`}
              >
                Watches
              </Link>
              <Link
                to="/story"
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-normal transition-colors duration-300 ${
                  location.pathname === "/story"
                    ? "text-black"
                    : "text-brownAccent hover:text-black"
                }`}
              >
                Story
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
