
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-accent shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-brownAccent text-lg ml-4">
              <span className="font-semibold">Perpetual</span>{' '}
              <span className="font-normal">Renaissance</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-brownAccent font-semibold hover:text-black transition-colors duration-300"
          >
            Welcome
          </Link>
          <Link
            to="/watches"
            className="text-brownAccent font-semibold hover:text-black transition-colors duration-300"
          >
            Watches
          </Link>
          <Link
            to="/story"
            className="text-brownAccent font-semibold hover:text-black transition-colors duration-300"
          >
            Story
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
