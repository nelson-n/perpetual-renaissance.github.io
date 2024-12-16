import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">Perpetual Renaissance</h1>
        <div>
          <Link to="/" className="text-gray-700 hover:text-gray-900 px-4">
            Home
          </Link>
          <Link to="/story" className="text-gray-700 hover:text-gray-900 px-4">
            Story
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
