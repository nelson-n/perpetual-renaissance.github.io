
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-black py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 space-y-2 sm:space-y-0">
        {/* Contact Text Link */}
        <Link
          to="/contact"
          className="text-black text-lg font-semibold hover:text-burgundy transition-all duration-100"
        >
          Contact 
        </Link>
        {/* Copyright Text */}
        <p className="text-black text-sm text-center sm:text-left">
          &copy; Perpetual Renaissance | Photos by{' '}
          <a 
            href="https://www.chriscoephoto.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-burgundy transition-all duration-100"
          >
            Chris Coe
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
