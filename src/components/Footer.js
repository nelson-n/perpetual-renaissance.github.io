
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Contact Text Link */}
        <Link
          to="/contact"
          className="text-black hover:underline"
        >
          Contact Us
        </Link>
        {/* Copyright Text */}
        <p className="text-sm">&copy; 2024 Perpetual Renaissance</p>
      </div>
    </footer>
  );
};

export default Footer;
